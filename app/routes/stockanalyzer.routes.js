module.exports = app =>{
    const stocks = require("../controller/stockanalyzer.controller.js");
    var router = require("express").Router();
    //Create new stocks
    router.get("/inst", stocks.create);
    //Retrieve all Stocks
    router.get("/", stocks.findAll);
    //Retriece all published Stocks
    router.get ("/", stocks.findAllPublished);
    //Retrive sigle Stock with id
    router.get("/:id", stocks.findOne);
    //Update a Tutorial with id
    router.put("/:id", stocks.update);
    //Delete a Stock with id
    router.delete("/:id", stocks.delete);
    //Delete all Stocks
    router.delete("/", stocks.deleteAll);
    app.use('/api/stocks', router);
}