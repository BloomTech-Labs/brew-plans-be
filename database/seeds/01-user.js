
exports.seed = function(knex, Promise) {
  return knex('users').insert([   
    { username: 'testing1', password: 'testingseed1', email: 'testing1@gmail.com' },
    { username: 'testing2', password: 'testingseed2', email: 'testing2@gmail.com' },
    { username: 'testing3', password: 'testingseed3', email: 'testing3@gmail.com' },
    { username: 'testing4', password: 'testingseed4', email: 'testing4@gmail.com' },
    { username: 'testing5', password: 'testingseed5', email: 'testing5@gmail.com' },
    { username: 'testing6', password: 'testingseed6', email: 'testing6@gmail.com' },
    { username: 'testing7', password: 'testingseed7', email: 'testing7@gmail.com' },
  ]);
};
