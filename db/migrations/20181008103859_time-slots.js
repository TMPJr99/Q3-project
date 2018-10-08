
exports.up = function(knex, Promise) {
  return knex.schema.createTable('time_slots', (table)=>{
    table.increments();
    table.date('date');
    table.string('time_slot');
    table.integer('table_id')
      .references('id')
      .inTable('tables')
      .onDelete('CASCADE')
      .index();
    table.integer('party_id')
      .references('id')
      .inTable('parties')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('time_slots')
};
