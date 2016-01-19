var pool =  require('../index.js');

pool = new Pool(7);
console.log(pool);
pool.addDice(1);
console.log(pool);