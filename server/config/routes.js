const mongoose = require('mongoose'),
Ninja = mongoose.model('Ninja'),
Tasks = require('../controllers/ninjas')

module.exports = function(app){
  // app.get('/ninjas', Ninjas.index);
  // app.get('/ninjas/:id/', Ninjas.getOne);
  // app.post('/ninjas', Ninjas.create);
  // app.put('/ninjas/:id/', Ninjas.update);
  // app.delete('/ninjas/:id/', Ninjas.delete);
}