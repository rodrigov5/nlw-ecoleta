import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json(["Rodrigo", "Rodrigues", "Veloso"]);
});

app.post("/users", (request, response) => {
  const user = {
    name: "Rodrigo",
    email: "rodrigovelosow@gmail.com",
  };

  return response.json(user);
});

app.listen(3333);
