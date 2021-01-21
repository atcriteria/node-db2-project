
exports.up = function(knex) {
    return knex.schema.table('cars', table => {
        table.string('transmission', 128);
        table.string('title', 128);
    });
};

exports.down = function(knex) {
  return knex.schema.table('cars', table => {
      table.dropColumn('title');
      table.dropColumn('transmission');
  });
};
