const fs = require("fs");

//escribir el primero
fs.readFile("./data.json", "utf-8", (err, fileData) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const data = JSON.parse(fileData);
      console.log(data.direccion);
    } catch (err) {
      console.log(err);
    }
  }
});

// crear nuevo user
const newUser = {
  cliente: "Totito",
  direccion: "calle real 456",
  teléfono: "543536",
};

//crear nuevo file
fs.writeFile("./moreData.json", JSON.stringify(newUser, null, 2), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("hell yeah!");
  }
});

//appendear user nuevo al original:
fs.readFile("./data.json", "utf-8", (err, fileData) => {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(fileData);
    data.clientes.push(newUser);

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
