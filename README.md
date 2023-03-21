# mods

1. In the `/public/` folder, create two files:
    1. `another-module.js`
    2. `my-module.js`
2. Use the code from `my-script.js` to populate these files:
    1. `another-module.js` should export `theShire`, `buckland`, and `HobbitSettlement`.
    2. `my-module.js` should import `theShire` and `buckland`; it should export `theShire` and `statement`.

You code will be subject to unit testing, but it will also be run through a style-checker. It's recommended that you run the following commands before you push your code. It will be easier to read the output in your own terminal (and fix any style issues), rather than trying to read the output of the Github Action, as we have been doing.

1. In your terminal, navigate to this project folder.
2. Run the command `npm install`. This will install the necessary node modules.
3. Run the command `npm test` to run the unit tests and see the output in your terminal.
4. Run the command `npm run eslint` to run the style-checker and see the output in your terminal.