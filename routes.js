import express from 'express';
import controller from './controller';

const router = express.Router();

router.get(`/health`, controller.healthCheck);
router.get(`/youtube/account/:username`, controller.getYouTubeAccount);
router.get(`/youtube/video/:video_id`, controller.getYouTubeVideo);
router.get(`/tiktok/user/:username`, controller.getTikTokUserDetails);
router.get(`/tiktok/post`, controller.getTikTokPostData);
router.get(`/twitch/videos/:video_id`, controller.getTwitchVideoStatistics);
router.get(`/twitch/channels/:channel_id`, controller.getTwitchChannel);

export default router;
