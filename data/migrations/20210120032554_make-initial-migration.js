
/*

- The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

*/

exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments();
      table.string('vin', 128).notNullable().unique();
      table.string('make', 128).notNullable();
      table.string('model', 128).notNullable();
      table.integer('mileage').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
