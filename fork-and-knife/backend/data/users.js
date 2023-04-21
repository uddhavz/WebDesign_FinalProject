import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@forkandknife.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Supriya Tripathi",
    email: "supriya@forkandknife.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Spandana",
    email: "spandana@forkandknife.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Uddhav",
    email: "uddhav@forkandknife.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Davleen",
    email: "davleen@forkandknife.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Devashree",
    email: "devashree@forkandknife.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "testUser",
    email: "testUser@forkandknife.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
