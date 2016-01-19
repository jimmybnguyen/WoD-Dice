var pool =  require('../index.js');

pool = new Pool(7);
console.log(pool);
pool.removeDice(1);
console.log(pool);