const express = require(`express`);
const controller = require(`./controller`);

const router = express.Router();

router.get(`/health`, controller.healthCheck);

module.exports = router;
