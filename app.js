import axios from "axios";
import express from "express";

import { routes } from "./config/routes.js";
import { connectDB } from "./config/mongoDB.js";
import { AuditTrail } from "./models/models.js";

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

routes.forEach((route) => {
  const { method, path, port } = route;

  app[method](path, async (req, res) => {
    let auditBody = {
      timestamp: new Date(),
      microservice: port === "3002" ? "video" : "idp",
      url: req.url,
      method,
      userId: req.headers["user-id"],
      userAgent: req.headers["user-agent"],
      headers: req.headers,
      params: req.params,
      body: req.body,
    };

    try {
      const response = await axios({
        method: method,
        url: `http://localhost:${port}${req.url}`,
        data: { ...req.body },
        headers: {
          authorization: req.headers["authorization"],
        },
      });

      auditBody.result = response.data;
      auditBody.statusCode = response.status;
      auditBody.success = true;
      await AuditTrail.create(auditBody)

      res.status(response.status).json(response.data);
    } catch (error) {
      console.error(error.response.data);
      auditBody.result = error.response.data;
      auditBody.statusCode = error.response.status;
      auditBody.success = false;
      await AuditTrail.create(auditBody)

      res.json(error.response.data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Gateway Microservice is running on port ${PORT}`);
});
