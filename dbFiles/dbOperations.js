const config                    = require('./dbConfig'),
      sql                       = require('mssql');


const getUserInfo = async() => {
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query("SELECT * from signupInfo");
        return users;
    }
    catch(error) {
        console.log(error);
    }
}

const createUser = async(user) => {
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query(`INSERT INTO signupInfo VALUES
        ('${user.name}', ${user.age}, '${user.username}', '${user.email}', '${user.password}')`);
        return users;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    getUserInfo
}