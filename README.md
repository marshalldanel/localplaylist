## NomadicMusic

To initialize this repo:

- `clone` the repo
- `npm install`
- `npm run dev:server`
- visit localhost:3000 in browser
- The sever will refresh whenever changes are made to any app files

## Initialize DB

- `psql -d template1` - You may need to use the superuser login eg. `-U vagrant`
- `CREATE ROLE <username> WITH LOGIN password '<password>';` Set your username and password
- `CREATE DATABASE <dbname> OWNER <role_username>;` Create a database name, and set owner to the role username you just created.


### If you are doing server side development, nodemon is installed to make it a bit easier:

- `npm run dev:nodemon`
- Everytime a server-side change is made, a new build will be created, so this process is a bit slower.

### To run in a production environment

- `npm run prod:build`
- `npm run prod:server`
- visit localhost:3000 in browser