const models = require('./models');

models.User.findAll().then((results) => {
  results.forEach( function(result) {
    result.bio = "";
  });
});

/*
models.User.create({
  name: "YoungThug",
  email: "tugger@cool.com",
  bio: "young jeffrey"
});

models.User.create({
  name: "Gucci",
  email: "guwop@cool.com",
  bio: "brrrrrr"
});
*/
