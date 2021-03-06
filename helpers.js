import axios from 'axios';
import constants from './constants';

class Helpers {
  async makeYouTubeRequest(path, method, params = {}) {
    const requestObject = {
      method,
      url: `${constants.youTubeUrl}${path}`,
      params: {
        key: constants.googleApiKey,
      },
    };

    requestObject.params = Object.assign(requestObject.params, params);

    return axios(requestObject);
  }
}

const helpers = new Helpers();
export default helpers;
