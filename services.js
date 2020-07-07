const helpers = require("./helpers");

class Services {
  async getYouTubeChannels(params) {
    return helpers.makeYouTubeRequest("channels", "GET", params);
  }
}

const services = new Services();

module.exports = services;
