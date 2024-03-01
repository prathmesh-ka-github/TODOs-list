const Pool = require("pg").Pool

const pool = new Pool({
    user:'postgres',
    password:'pratham02',
    port:'5432',
    database:'tododb',
    host:'localhost'
})

module.exports = pool;