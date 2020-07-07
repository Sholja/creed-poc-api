const services = require("./services");

class Controller {
  async healthCheck(req, res) {
    try {
      return res.status(200).json({
        message: `This is a health check route, your API is up and running.`,
      });
    } catch (error) {
      console.log(`An error occurred `, error);
    }
  }

  async getYouTubeChannels(req, res) {
    try {
      const params = req.query || {};
      const channels = await services.getYouTubeChannels(params);

      return res.status(200).json({
        channels,
      });
    } catch (error) {
      console.log(`An error occurred `, error);
    }
  }
}

const controller = new Controller();

module.exports = controller;
