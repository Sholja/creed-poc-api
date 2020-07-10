import TikTokAPI, { getRequestParams } from "tiktok-api";
import helpers from "./helpers";
import constants from "./constants";
import axios from "axios";

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

  async getTwitchVideoStatistics(videoId) {
    return axios({
      method: "GET",
      url: `https://api.twitch.tv/kraken/videos/${videoId}`,
      headers: {
        "client-id": constants.twitchApiKey,
        accept: "application/vnd.twitchtv.v5+json",
      },
    });
  }

  async getTwitchChannel(channelId) {
    return axios({
      method: "GET",
      url: `https://api.twitch.tv/kraken/channels/${channelId}`,
      headers: {
        "client-id": constants.twitchApiKey,
        accept: "application/vnd.twitchtv.v5+json",
      },
    });
  }
}

const services = new Services();
export default services;
