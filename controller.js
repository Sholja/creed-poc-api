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
}

const controller = new Controller();

module.exports = controller;
