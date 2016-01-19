var pool =  require('../index.js');

pool = new Pool(7);
console.log(pool);
pool.reroll(2);
console.log(pool);