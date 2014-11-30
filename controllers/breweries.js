var Model = require('./../models/brewery');

module.exports = {
  create: function (req, res) {
    var dados = req.body;
    var msg;
    var model = new Model(dados);

    model.save(function (err, data) {
      if (err) {
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      }
      else {
        console.log('Cervejaria Inserida: ', data);
        msg = data;
      }
      res.json(msg);
    });
  },
  retrieve: function (req, res) {
    Model.find({}).populate('beers').exec(function (err, data) {
      if (err) {
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      } else {
        console.log('Listagem: ', data);
        msg = data;
      }
      res.json(msg);
    });
  },
  show: function (req, res) {
    var query = { _id: req.params.id };

    Model.findOne(query).populate('beers').exec(function (err, data) {
      if (err) {
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      } else {
        console.log('Listagem: ', data);
        msg = data;
      }
      res.json(msg);
    });
  },
  update: function (req, res) {
    var query = { _id: req.params.id };
    var mod = req.body;
    var optional = {
      upsert: false,
      multi: true
    };

    delete mod._id;
    
    Model.update(query, mod, function (err, data) {
      if (err) {
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      }
      else {
        console.log('Cervejaria atualizada com sucesso', data);
        msg = data;
      }
      res.json(msg);
    });
  },
  delete: function (req, res) {
    var query = {_id: req.params.id};
    console.log("Delete? " + req.body);
    Model.remove(query, function(err, data) {
      if (err) {
        console.log(err);
        msg = 'Erro: ' + err;
      } else {
        console.log('Cervejaria deletada com sucesso, quantidade: ', data);
        msg = data;
      }
      res.json(msg);
    });
  }
};