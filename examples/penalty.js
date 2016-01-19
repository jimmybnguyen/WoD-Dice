var pool =  require('../index.js');

pool = new Pool(7);
console.log(pool);
pool.penalty(3);
console.log(pool);