const fs = require("fs");

//leer
fs.readFile("./clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const parsedData = JSON.parse(data);
      console.log(parsedData.address);
    } catch (error) {
      console.log(error);
    }
  }
});

//nuevo user a agregar:
const newUser = {
  user: "Pablo Palotes3",
  category: 2,
  address: "Güemes 22523",
};

//agregar un user:
fs.readFile("./clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const user = JSON.parse(data);
    user.clientes.push(newUser);
    fs.writeFile(
      "./clients.json",
      JSON.stringify(user, null, 2),
      (err, success) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success, "agregar user funciona!!");
        }
      }
    );
  }
});

//borrar el último user!
fs.readFile("./clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const user = JSON.parse(data);
    user.clientes.pop();
    fs.writeFile(
      "./clients.json",
      JSON.stringify(user, null, 2),
      (err, success) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success, "borrar último user funciona!!");
        }
      }
    );
  }
});

//elegir qué user borrar!
fs.readFile("./clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const user = JSON.parse(data);
    user.clientes.splice(3, 1);
    fs.writeFile(
      "./clients.json",
      JSON.stringify(user, null, 2),
      (err, success) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success, "borrar user por posicion funciona!!");
        }
      }
    );
  }
});

//modificar un user:
fs.readFile("./clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const user = JSON.parse(data);
    user.clientes.splice(1, 1, {
      user: "nuevo user",
      category: 3,
      address: "Encalada 12",
    });
    fs.writeFile(
      "./clients.json",
      JSON.stringify(user, null, 2),
      (err, success) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success, "editar funciona!!");
        }
      }
    );
    console.log(user);
  }
});
