var pool =  require('../index.js');

pool = new Pool(7);
console.log(pool);
var test = pool.isChanceRoll();
console.log(test);
pool.removeDice(7);
console.log(pool);
test = pool.isChanceRoll();
console.log(test);