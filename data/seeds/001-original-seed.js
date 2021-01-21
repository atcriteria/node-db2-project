
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: '12345678', make: 'nissan', model: 'altima', mileage: 12345, transmission: 'automatic', title: 'standard-owner'},
        {id: 2, vin: '23456789', make: 'nissan', model: 'altima', mileage: 23456, transmission: 'manual', title: 'standard-owner'},
        {id: 3, vin: '34567890', make: 'nissan', model: 'altima', mileage: 34567, transmission: 'automatic', title: 'junk'},
        {id: 4, vin: '45678901', make: 'nissan', model: 'altima', mileage: 45678, transmission: 'automatic', title: 'scrapped'},
        {id: 5, vin: '56789012', make: 'nissan', model: 'altima', mileage: 56789, transmission: 'manual', title: 'standard-owner'},
        {id: 6, vin: '67890123', make: 'nissan', model: 'altima', mileage: 67890, transmission: 'automatic', title: 'standard-owner'},
      ]);
    });
};
