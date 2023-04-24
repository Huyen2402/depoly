const config = {
    app: {
        port: process.env.PORT || 3003,
    },
    db: {
        // user: 'sa',
        // password: '123456',
        // server: 'localhost', 
        // port:1433,
        // database: 'nodejs' ,
        // synchronize: true,
        // trustServerCertificate: true,
        HOST: "localhost",
        PORT: "1433",
        USER: "sa",
        PASSWORD: "123456",
        DB: "nodejs",
        dialect: "mssql",
            pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
            }
    }
};
module.exports = config;