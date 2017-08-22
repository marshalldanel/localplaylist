module.exports = knex => ({

  saveTrip: (tripData) => {
    return knex.transaction(() => {
      return knex('users').select('id').where('user_cookie', tripData.cookie)
        .then((ids) => {
          if (!ids.length) {
            return knex('users')
              .insert({
                user_cookie: tripData.cookie,
              }).returning('id');
          }
          return ids;
        })
        .then((new_ids) => {
          const newUser = new_ids[0];
          const returningUser = new_ids[0].id;

          if (!returningUser) {
            return knex('trips')
              .insert({
                name: tripData.name,
                user_id: newUser,
              })
              .returning('id');
          }
          return knex('trips')
            .insert({
              name: tripData.name,
              user_id: returningUser,
            })
            .returning('id');
        });
    });
  },
});
