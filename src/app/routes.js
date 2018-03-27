const UserController = require("./controllers/user");

module.exports = (app, passport) => {
  app.get("/", (req, res) => {
    res.render("index", {
      menssage: req.flash("initMessage")
    });
  });

  app.post(
    "/",
    passport.authenticate("local-login", {
      successRedirect: "/sistema",
      failureRedirect: "/",
      failureFlash: true
    })
  );

  app.get("/sistema", (req, res) => {
    res.render("sistema", {
      menssage: req.flash("sistemaMessage")
    });
  });
  
  app.get("/registro", (req, res) => {
    res.render("registro", {
      menssage: req.flash("registroMessage")
    });
  });
  //logout
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // CRUD de Usuarios
  app.post("/api/user", UserController.create);
  app.get("/api/user/:id", UserController.profile);
  app.get("/api/user/me", UserController.me);
  app.put("/api/user", UserController.update);
  app.delete("/api/user", UserController.destroy);
};
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/");
}
