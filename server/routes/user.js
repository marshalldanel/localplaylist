const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

module.exports = (knex) => {
  // Create a new user
  router.post('/new_user', (req, res) => {
    // const first_name = 'Marshall'; //req.body.first_name,
    // const last_name = 'D'; //req.body.last_name,
    // const email = 'marshall@marshall.com'; //req.body.email,
    const password = 'marshall'; //req.body.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user_cookie = req.session.user_cookie; // cookie
    console.log('before transaction');
    knex.transaction(() => {
      console.log('transaction started');
      return knex('users').select('id').where('user_cookie', user_cookie)
        .returning('id')
        .then((id) => {
          if (!id.length) {
            return knex('users')
              .insert({
                user_cookie,
              }).returning('id');
          }
          console.log('before insert');
          return knex('users').select('id').where('id', id[0].id)
            .returning('id')
            .insert({
              first_name: 'Marshall',
              last_name: 'D',
              email: 'm@m.com',
              password_digest: hashedPassword,
              created_at: `to_timestamp(${Date.now()} / 1000.0)`,
            })
            .returning('first_name')
            .then((name) => {
              res.status(200).send(name);
            })
            .catch((error) => {
              res.status(404).send(error);
            });
        });
    });
  });

  return router;
};


// app.get('/login', (req, res) => {
//   if (!usersDB[req.session.userId]) {
//     res.render('urls_login');
//   } else {
//     res.redirect('/urls');
//   }
// });

// app.post('/login', (req, res) => {
//   let userInfo = userLookup(req.body.email);
//   if (userInfo === undefined) {
//     res.status(403).send('Please enter a valid email/password');
//   } else {
//     if (!bcrypt.compareSync(req.body.password, userInfo.password)) {
//       res.status(403).send('Please enter a valid email/password');
//     } else {
//       req.session.userId = userInfo.id;
//       res.redirect('/urls');
//     }
//   }
// });
