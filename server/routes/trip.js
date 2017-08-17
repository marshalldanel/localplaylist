module.exports = knex => ({

  saveTrip: (tripData) => {
    return knex.transaction(() => {
      return knex('users').select('id').where('user_cookie', 'SkQnAKmdZ')
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
          return knex('trips')
            .insert({
              name: tripData.name,
              user_id: new_ids[0].id,
            })
            .returning('id');
        });
    });
  },
  
});
