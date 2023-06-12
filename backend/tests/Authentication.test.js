// authentication.test.js

const request = require("supertest");
const { app } = require("../server"); // Assuming this is your server file

describe("User Authentication", () => {
  it("should return token on successful login with email and password", async () => {
    const response = await request(app).post("/api/users/login").send({
      email: "helloworld521@gmail.com",
      password: "12345678",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("should provide access to authenticated routes with token", async () => {
    const loginResponse = await request(app).post("/api/users/login").send({
      email: "helloworld521@gmail.com",
      password: "12345678",
    });
    const headers = {
      Authorization: `Bearer ${loginResponse.body.token}`,
    };
    const response = await request(app)
      .get(`/api/blogs/user/${loginResponse.body.id}`)
      .set(headers);
    expect(response.statusCode).toBe(200);
  });
});
