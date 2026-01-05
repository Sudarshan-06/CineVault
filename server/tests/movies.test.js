import request from "supertest";
import app from "../src/app.js";

describe("Movies API", () => {
  it("should fetch all movies", async () => {
    const res = await request(app).get("/api/movies");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should filter movies by director", async () => {
    const res = await request(app).get(
      "/api/movies?director=Prabhudeva"
    );

    expect(res.statusCode).toBe(200);
  });
});
