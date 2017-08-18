const concert = require('./concert.js');

module.exports = knex => ({
  
  savePlaylist: (playlistData, queries) => knex.transaction(() => {
    const { getConcertData } = concert(knex);
    return knex('playlists')
      .insert(playlistData)
      .returning('id')
      .then(ids => Promise.all(ids.map(id => getConcertData(id, queries))));
  }),
  
});
