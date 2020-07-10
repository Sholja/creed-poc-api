import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.normalize(path.join(__dirname, `.env`))
});


const constants = {
  youTubeUrl: `https://www.googleapis.com/youtube/v3/`,
  googleApis: `https://www.googleapis.com/auth/`,
  googleApiKey: process.env.GOOGLE_API_KEY,
};

export default constants;
