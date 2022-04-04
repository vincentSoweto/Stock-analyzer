module.exports = (sequelize, Sequelize) => {
    const Stocks = sequelize.define("stocks",{
        X:{
            type: Sequelize.STRING
        },
        FilingDate:{
            type: Sequelize.DATE
        },
        TradeDate:{
            type: Sequelize.DATE
        },
        Ticker:{
            type: Sequelize.STRING
        },
        CompanyName:{
            type: Sequelize.STRING
        },
        InsiderName:{
            type: Sequelize.STRING
        },
        Title:{
            type: Sequelize.STRING
        },
        TradeType:{
            type: Sequelize.STRING
        },
        Price:{
            type: Sequelize.REAL
        },
        Qty:{
            type: Sequelize.REAL
        },
        Owned:{
            type: Sequelize.REAL
        },
        ΔOwn:{
            type: Sequelize.REAL
        },
        Value:{
            type: Sequelize.REAL
        }
    });
    return Stocks;
};