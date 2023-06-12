// server.test.js

const request = require("supertest");
const { app } = require("../server"); // Assuming this is your server file

describe("Server", () => {
  it("blogs api route should return status code 200", async () => {
    const response = await request(app).get("/api/blogs");
    expect(response.statusCode).toBe(200);
  });

  it("blogs create route returns status code 401 when sent without authorization token", async () => {
    const response = await request(app).post("/api/blogs/create");
    expect(response.statusCode).toBe(401);
  });
});
