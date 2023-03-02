const {} = require("express");
const { configure } = require("./configure");

const init = () => {
  app = {};
  try {
    configure(app);
  } catch (e) {
    console.log(`failed to start app: ${e.message}`);
  }
};
