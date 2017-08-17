module.exports = knex => ({

  saveTrip: (tripData) => {
    return knex.transaction(() => {
      return knex('users').select('id').where('user_cookie', tripData.cookie)
        .returning('id')
        .then((id) => {
          if (!id.length) {
            return knex('users')
              .insert({
                user_cookie: tripData.cookie,
              }).returning('id');
          }
          return knex('users').select('id').where('id', id[0].id)
            .returning('id')
            .then((user_id) => {
              return knex('trips')
                .insert({
                  name: tripData.name,
                  user_id: id[0].id,
                })
                .returning('id');
            });
        });
    });
  },
  
});
