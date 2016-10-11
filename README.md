This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Development
1. Install Node and NPM
2. Run `npm install`
3. Run `npm start` to begin development server, include hot loading for css changes and live reload for javaScript changes
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />
You will also see any lint errors in the console.

## Additional Scripts

From the project directory, you can run:

### `npm test`

Create React supprts [Jest](https://facebook.github.io/jest/)
Currently no tests are written for this project.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

For Building to a specific root relative path, specify the `homepage` in `package.json`, for example:

```js
  "homepage": "http://www.chrisburkedev.com/flickr-slideshow",
```

