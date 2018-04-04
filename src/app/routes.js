const UserController = require("./controllers/user");
const PasantiaController = require("./controllers/pasantia");
const express = require("express");
const auth = require("./auth");

const secureRouter = express.Router();
secureRouter.use(auth.jwt());

module.exports = (app, passport) => {
  app.get("/", (req, res) => {
    res.render("index", {
     
    });
  });

  app.post(
    "/",
    auth.identifyAuthProvider,
    (req, res) => {
      if (req.user) {
        var token = auth.utils.generateAuthToken(req.user);
        res.json({user:req.user, token:token});
      }
    }
  );

  secureRouter.get("/sistema", (req, res) => {
    res.render("sistema", {
     user: req.user
    });
  });

  app.get("/registro", (req, res) => {
    res.render("registro", {
      
    });
  });
  //logout
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // CRUD de Usuarios
  app.post("/api/user", UserController.create);
  secureRouter.get("/api/user/me", UserController.me);
  secureRouter.get("/api/user/:id", UserController.profile);
  secureRouter.put("/api/user", UserController.update);
  app.delete("/api/user", UserController.destroy);
  //CRUD DE PASANTIAS
  secureRouter.post("/api/pasantia", PasantiaController.create);
  secureRouter.get("/api/pasantia/cedula", PasantiaController.get);
  secureRouter.get("/api/pasantia/me", PasantiaController.me);
  secureRouter.put("/api/pasantia", PasantiaController.update);
  secureRouter.delete("/api/pasantia", PasantiaController.destroy);
  app.use(secureRouter);
};
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/");
}
