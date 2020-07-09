const services = require("./services");

class Controller {
  async healthCheck(req, res) {
    try {
      return res.status(200).json({
        message: `This is a health check route, your API is up and running.`,
      });
    } catch (error) {
      console.log(`An error occurred `, error);
      return error;
    }
  }

  async getYouTubeAccount(req, res) {
    try {
      const params = {
        forUsername: req.query.username,
        part: `contentOwnerDetails, statistics, localizations, snippet, status`,
      };

      const data = await services.getYouTubeAccount(params);
      return res.status(200).json({
        data,
      });
    } catch (error) {
      console.log(`An error occurred `, error);
      return error;
    }
  }

  async getYouTubeVideo(req, res) {
    try {
      const params = {
        id: req.params.video_id,
        part: `statistics`,
      };

      const data = await services.getYouTubeVideo(params);

      return res.status(200).json({
        data,
      });
    } catch (error) {}
  }
}

const controller = new Controller();

module.exports = controller;
