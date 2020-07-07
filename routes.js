const express = require(`express`);
const controller = require(`./controller`);

const router = express.Router();

router.get(`/health`, controller.healthCheck);
router.get(`/youtube/channels`, controller.getYouTubeChannels);

module.exports = router;
