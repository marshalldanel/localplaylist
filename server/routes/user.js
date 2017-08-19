const express = require('express');

const router = express.Router();
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

module.exports = (knex) => {
  // Create a new user
  router.post('/new_user', (req, res) => {
    const first_name = req.body.firstname;
    const last_name = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user_cookie = req.session.user_cookie; // cookie
    console.log('before transaction');
    knex.transaction(() => {
      console.log('transaction started');
      return knex('users').select('id').where('user_cookie', user_cookie).returning('id')
        .then((users) => {
          if (!users.length) {
            return knex('users').insert({ user_cookie }).returning('id');
          }

          let id = users[0].id;

          return knex('users').where('id', id).returning('first_name')
            .update({
              first_name,
              last_name,
              email,
              password_digest: hashedPassword,
            })
            .then((name) => {
              res.status(200).send(name);
            })
            .catch((error) => {
              res.status(500).send(error);
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
