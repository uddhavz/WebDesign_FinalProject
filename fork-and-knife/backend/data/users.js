import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Supriya Tripathi",
    email: "supriya@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Spandana",
    email: "spandana@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Uddhav",
    email: "uddhav@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Davleen",
    email: "davleen@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Devashree",
    email: "devashree@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  }
];

export default users;
