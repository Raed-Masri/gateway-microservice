import mongoose from "mongoose";

const { Schema, model } = mongoose;

const auditTrailSchema = new Schema({
    timestamp: Date,
    microservice: String,
    url: String,
    method: String,
    statusCode: Number,
    userId: String,
    userAgent: String,
    result: Object,
    success: Boolean,
    headers: Object,
    params: Object,
    body: Object,
});

export const AuditTrail = model('gateway', auditTrailSchema);