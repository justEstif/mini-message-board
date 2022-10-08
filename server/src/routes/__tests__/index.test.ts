import app from "../../app";
import request from "supertest";

test("checkhealth route works", (done) => {
  request(app).get("/api/checkhealth").expect(200, done);
});
