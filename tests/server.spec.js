const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
console.log(server);

chai.use(chaiHttp);
const expect = chai.expect;

server.listen(4444);

describe("server.js", function() {
  it("responds to /", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });
});
