const express = require(`express`);
const controller = require(`./controller`);

const router = express.Router();

router.get(`/health`, controller.healthCheck);
router.get(`/youtube/account`, controller.getYouTubeAccount);
router.get(`/youtube/video/:video_id`, controller.getYouTubeVideo);

module.exports = router;
