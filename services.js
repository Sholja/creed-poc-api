import TikTokAPI, { getRequestParams } from 'tiktok-api';
import helpers from './helpers';
import constants from './constants';

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

  async getTikTokUserDetails() {
    const signURL = async (url, ts, deviceId) => {
        const as = 'anti-spam parameter 1';
        const cp = 'anti-spam parameter 2'
        const mas = 'anti-spam parameter 3';
        return `${url}&as=${as}&cp=${cp}&mas=${mas}`;
      }

      const params = getRequestParams({
        device_id: '<device_id>',
        fp: '<device_fingerprint>',
        iid: '<install_id>',
        openudid: '<device_open_udid>',
      });

      const api = new TikTokAPI(params, { signURL });

      const response = await api.loginWithUsername(constants.tikTokUsername, constants.tikTokPassword);
      return response && response.data && response.data.data;
  }
}

const services = new Services();
export default services;