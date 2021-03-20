const fs = require("fs");

//leer
fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
    } catch (error) {
      console.log(error);
    }
  }
});

//nuevo user a agregar:
const newUser = {
  user: "Andrea Gomez",
  category: 5,
  address: "Salguero 1546",
};

//agregar un user:
fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const user = JSON.parse(data);
    user.clientes.push(newUser);
    fs.writeFile("./clients/clients.json", JSON.stringify(user, null, 2), (err, success) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success, "funciona!!");
        }
      }
    );
  }
});

//borrar el último user!
fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const user = JSON.parse(data);
    user.clientes.pop();
    fs.writeFile("./clients/clients.json", JSON.stringify(user, null, 2), (err, success) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success, "funciona!!");
        }
      }
    );
  }
});

//elegir qué user borrar!
fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const user = JSON.parse(data);
    user.clientes.splice(3,1);
    fs.writeFile("./clients/clients.json", JSON.stringify(user, null, 2), (err, success) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success, "funciona!!");
        }
      }
    );
  }
});

//modificar un user:
fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const user = JSON.parse(data);
    user.clientes.splice(1, 1, {
         user: "nuevo user",
         category: 3,
         address: "Encalada 12",
       });
    fs.writeFile("./clients/clients.json", JSON.stringify(user, null, 2), (err, success) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success, "funciona!!");
        }
      }
    );
    console.log(user)
  }
});