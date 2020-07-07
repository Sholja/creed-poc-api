const axios = require(`axios`);
const constants = require(`./constants`);

class Helpers {
  async makeYouTubeRequest(path, method, params = {}) {
    const requestObject = {
      method,
      url: `${constants.youTubeUrl}${path}`,
    };

    requestObject.params = params;

    return axios(requestObject);
  }
}

const helpers = new Helpers();

module.exports = helpers;
