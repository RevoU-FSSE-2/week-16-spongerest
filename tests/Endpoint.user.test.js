const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);

const expect = require('chai').expect;

describe("User endpoint", () => {
    it("should create a new user", (done) => {
        chai.request(server)
            .post("/user")
            .send(
                {
                    "email": "blue@blue.com",
                    "username": "blue",
                    "password": "password123"
                }
            )
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    }, 10000);
})