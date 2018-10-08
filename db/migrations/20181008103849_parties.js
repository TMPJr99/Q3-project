
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parties', (table)=>{
    table.increments();
    table.string('name');
    table.integer('quantity');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('parties')
};
