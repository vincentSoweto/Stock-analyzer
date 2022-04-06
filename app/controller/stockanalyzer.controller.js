const db = require("../models");
const Stocks = db.stocks;
const Op = db.Sequelize.Op;
const stockObjects = require('../../python/output_2.json');

// create a new Tutorial: create(object)
// find a Tutorial by id: findByPk(id)
// get all Tutorials: findAll()
// update a Tutorial by id: update(data, where: { id: id })
// remove a Tutorial: destroy(where: { id: id })
// remove all Tutorials: destroy(where: {})
// find all Tutorials by title: findAll({ where: { title: ... } })
console.log(stockObjects);
exports.create = (req, res) => {
    //validate request
    if(!req.body.title){
        res.status(400).send({
            message: "COntent can not be empty"
        });
        return;
    }

    stockObjects.forEach(item =>{
        console.log("-----------saving-----------");
        
        const stocks = {
            X: item.X,
            FilingDate: item["Filing Date"],
            TradeDate: item["Trade Date"],
            Ticker: item.Ticker,
            CompanyName: item["Company Name"],
            InsiderName: item["Insider Name"],
            Title: item.Title,
            TradeType: item["Trade Date"],
            Price: item.Price,
            Qty: item.Qty,
            Owned: item.Owned,
            ΔOwn: item.ΔOwn,
            Value: item.Value
        
        };
        console.log(stocks);

        Stocks.create(stocks)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Stocks."
            });
        });
    });

};

exports.findAll = (req, res) => {
  const title = req.query.title;
  console.log(title);
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  Stocks.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) =>{
    const id = req.params.id;
  Stocks.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

exports.update = (req, res) => {
    
};

exports.delete = (req, res) => {
    const id = req.params.id;
  Stocks.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Stocks.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};


exports.findAllPublished = (req, res) => {
    Stocks.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
