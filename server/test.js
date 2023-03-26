import bcrypt from "bcrypt";

console.log(await bcrypt.hash("test", 10));
