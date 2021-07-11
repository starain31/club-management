const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const server = express();
const port = 3001;

server.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
server.use(express.json());
server.use(fileUpload());

let lastId = 2;

let members = [
  {
    id: 1,
    name: "Albert Einstein",
    born: "14-03-1879",
    bio: "Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time. Einstein is known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics.",
  },
  {
    id: 2,
    name: "Isaac Newton",
    born: "04-01-1643",
    bio: "Sir Isaac Newton PRS was an English mathematician, physicist, astronomer, theologian, and author who is widely recognised as one of the greatest mathematicians and most influential scientists of all time.",
  },
];

function CreateMember({ name, born, bio }) {
  return {
    id: ++lastId,
    name,
    born,
    bio,
  };
}

server.get("/members", (req, res) => {
  res.send(members);
});

server.get("/delete", (req, res) => {
  members = members.filter((member) => member.id !== Number(req.query.id));
  res.send(members);
});

server.post("/add", (req, res) => {
  const newMember = CreateMember(req.body);

  if (req.files && req.files.picture !== null) {
    const picture = req.files.picture;
    if ("mv" in picture) {
      picture.mv(`${__dirname}/client/public/profile_picture/${newMember.id}`);
    }
  }

  members = [...members, newMember];

  res.send(members);
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
