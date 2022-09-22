const { exec } = require("child_process");
const fs = require("fs");

exec(
  "node ./node_modules/babel-cli/bin/babel ./src/index.js",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    if (!fs.existsSync("./src/babel.js")) {
      fs.writeFile("./src/babel.js", "", function (err) {
        if (err) throw err;
        console.log("Babel file created @src/babel.js!");
      });
    }
    fs.writeFile("./src/babel.js", stdout, (err) => {
      if (err) throw err;
      console.log("JSX transpiled via Babel @src/babel.js!");
    });
  }
);
// node ./node_modules/babel-cli/bin/babel src/index.js
