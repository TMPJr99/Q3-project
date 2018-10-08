
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parties').del()
    .then(function () {
      // Inserts seed entries
      return knex('parties').insert([
        {quantity: 3, name:"party1"},
        {quantity: 4, name:"party2"},
        {quantity: 2, name:"party3"}
      ]);
    });
};
