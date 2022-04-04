module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Chelsea",
    DB: "stocks",
    dialect: "postgres",
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000 
    }
}