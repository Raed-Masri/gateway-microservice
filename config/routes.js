export const routes = [
  {
    method: "post",
    port: "3002",
    path: "/videos/create",  //create video
  },
  {
    method: "get",
    port: "3002",
    path: "/videos",   //get video
  },
  {
    method: "get",
    port: "3002",
    path: "/videos/comments/:id",   //get comments
  },
  {
    method: "get",
    port: "3002",
    path: "/videos/play",
  },
  {
    method: "post",
    port: "3002",
    path: "/videos/comments/:id",   //add comments
  },
  {
    method: "post",
    port: "3002",
    path: "/videos/rating/:id",   //add rating
  },
  // {
  //   method: "patch",
  //   port: "3002",
  //   path: "/videos/:id/:commentId",  //update comment
  // },
  // {
  //   method: "get",
  //   port: "3002",
  //   path: "/videos/comments/:id",
  // },
  // {
  //   method: "get",
  //   port: "3002",
  //   path: "/videos/comments/:id",
  // },
];
