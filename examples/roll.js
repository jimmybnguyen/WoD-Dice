var pool =  require('../index.js');

pool = new Pool(3);
console.log(pool);
pool.roll();
console.log(pool.roll());