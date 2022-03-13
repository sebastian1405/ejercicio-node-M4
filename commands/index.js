const fs = require("fs");
const request = require("request");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("prompt > ");
};

const pwd = (file) => {
  done(process.cwd());
};
const date = (file) => {
  done(Date());
};
const ls = (file) => {
  let output = "";
  fs.readdir(".", (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      output += file.toString() + "\n";
    });
    done(output);
  });
};

const echo = (file) => {
  done(file);
};
const curl = (file) => {
  request(file, (err, res, body) => {
    done(body);
  });
};
module.exports = {
  pwd,
  date,
  ls,
  echo,
  curl,
};
