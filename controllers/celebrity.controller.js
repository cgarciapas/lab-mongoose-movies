const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/list', { celebrities }))
}

module.exports.create = (req, res, next) => {
  res.render('celebrities/create');
}

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity(req.body);

  celebrity.save()
    .then((celebrity) => { res.redirect('/celebrities') });
}

module.exports.get = (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/detail', { celebrity }))
  .catch(error => console.error('And error has ocurred', error))
}

module.exports.delete = (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(celebrity => res.redirect('/celebrities'));
}

module.exports.edit = (req, res, next) => {
  Promise.all([
    User.find(),
    Book.findById(req.params.id)
  ])
  .then((results) => {
    const users = results[0];
    const book = results[1]
    res.render('books/form', { book, users })
  })
}

module.exports.doEdit = (req, res, next) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.set(req.body);
      book.save()
        .then((book) => { res.redirect('/books' )});
    })
}