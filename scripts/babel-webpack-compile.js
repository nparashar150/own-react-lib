const { exec } = require("child_process");
const fs = require("fs");

exec(
  "node ./node_modules/@babel/cli/bin/babel ./src/index.js",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    if (!fs.existsSync("./babel/babel.js")) {
      fs.writeFile("./babel/babel.js", "", function (err) {
        if (err) throw err;
        console.log("Babel file created @babel/babel.js!");
      });
    }
    fs.writeFile("./babel/babel.js", stdout, (err) => {
      if (err) throw err;
      console.log("JSX transpiled via Babel @babel/babel.js!");
    });
  }
);
// node ./node_modules/@babel/cli/bin/babel babel/index.js
