var pool =  require('../index.js');

pool = new Pool(7);
console.log(pool);
pool.isWeak();
console.log(pool);