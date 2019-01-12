const Celebrity = require('../models/celebrity.model');

module.exports.create = (req, res, next) => {
  res.render('celebrities/create');
}

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity(req.body);

  celebrity.save()
    .then((celebrity) => { res.redirect('/celebrities') });
}