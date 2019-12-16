This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the app locally
- download .zip / git pull the repository
- go to the directory in command line and run `npm i && npm start`
- wait for browser window to open with localhost running the app

## Git pages issue
For some reasons git pages doesn't serve the app correctly (i.e `error message` is returned initially on main page)
When `refreshing` the page it's getting blown out.
`None` of those issues is happening locally.

## Directory structure

- /App            - main app component
- /components     - 'dumb' components (do not connect to the store directly, receive data and callbacks as props)
- /layout         - layout component
- /modules        - 'smart' components (other than pages/screens)
- /pages          - components that are served for main app routes (aka screens)
- /store          - redux store

## CSS approach

There is minimal amount of global / reset styling at /src/App/App.scss
The rest of styling should be component based and modular.
This will help with component re-usability and will prevent css bleeding.

For that reason use BEM (http://getbem.com)
Valuable BEM tips: https://medium.com/fed-or-dead/battling-bem-5-common-problems-and-how-to-avoid-them-5bbd23dee319


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Runs the apps unit tests

### `npm run deploy`
Deploys the app to gitpages

### `npm test`
Runs the apps unit tests

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
