"use strict";

var path = require("path");

module.exports = function(eyeglass, sass) {
  return {
    sassDir: path.join(__dirname, "sass"),
    functions: {
      "hello($name)": function(name, done) {
        done(sass.types.String('"Why hello, ' + name.getValue() + '"'));
      }
    }
  };
};
