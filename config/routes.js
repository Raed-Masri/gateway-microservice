export const routes = [
  {
    method: "post",
    port: "3002",
    path: "/videos/create", //create video
  },
  {
    method: "get",
    port: "3002",
    path: "/videos", //get video
  },
  {
    method: "get",
    port: "3002",
    path: "/videos/play", //play video
  },
  {
    method: "get",
    port: "3002",
    path: "/videos/comments/:id", //get comments
  },
  {
    method: "post",
    port: "3002",
    path: "/videos/comments/:id", //add comments
  },
  {
    method: "patch",
    port: "3002",
    path: "/videos/:id/:commentId", //update comment
  },
  {
    method: "post",
    port: "3002",
    path: "/videos/:id/comments/:commentId/reply", //reply to comment comment
  },
  {
    method: "post",
    port: "3002",
    path: "/videos/rating/:id", //add rating
  },
  {
    method: "post",
    port: "3001",
    path: "/user/sign-in", //sign in
  },
  {
    method: "post",
    port: "3001",
    path: "/user/sign-in", //sign up
  },
  {
    method: "patch",
    port: "3001",
    path: "/user/update", //update user
  },
  {
    method: "get",
    port: "3001",
    path: "/user/:email", //get user
  },
];
