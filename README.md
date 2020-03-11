# express-pug-bootstrap-ts-webpack-boilerplate

## Development
### Webpack
1. `npm run build`: Runs webpack to build `dist` folder
2. `npm run dev`: Start app at Webpack entry point `dist/index.js`
3. App will be started at http://localhost:3000

### Run with ts-node/nodemon
1. `npm run dev:ts` to run without building, or `npm run dev:ts:watch` to watch with nodemon

## Heroku
1. Commit code (no need to push to Github)
2. `git push heroku master`
3. App will be started at Heroku specified URL

To view logs, run `heroku logs`

## Notes
* Scripts `postinstall` and `heroku-postbuild` are for Heroku

## Troubleshooting
* If Heroku complains, ` Your account has reached its concurrent builds limit`, run `heroku builds` to view and `heroku builds:cancel` to cancel
