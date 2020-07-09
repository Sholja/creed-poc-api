const helpers = require("./helpers");

class Services {
  async getYouTubeAccount(params) {
    const response = await helpers.makeYouTubeRequest(
      `channels`,
      `GET`,
      params
    );

    return response &&
      response.data &&
      response.data.items &&
      response.data.items.length
      ? response.data.items[0]
      : {};
  }

  async getYouTubeVideo(params) {
    const response = await helpers.makeYouTubeRequest(`videos`, `GET`, params);

    return response &&
      response.data &&
      response.data.items &&
      response.data.items.length
      ? response.data.items[0]
      : {};
  }
}

const services = new Services();

module.exports = services;
