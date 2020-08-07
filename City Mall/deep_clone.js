const method = require("./functions");

const obj = { name: "Paddy", address: { town: "Lerum", country: "Sweden" } };

console.log(method.deepClone(obj));
