
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reservations', (table)=> {
      table.increments();
      table.date('date');
      table.string('email');
      table.integer('quantity');
      table.integer('table_id');
      table.string('time_start');
      table.string('time_end');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reservations')
};
