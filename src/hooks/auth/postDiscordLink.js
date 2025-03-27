import axios from 'axios';

const postDiscordLink = async () => {
  try {
    await axios.post('http://localhost:8080/login/url', {});
  } catch (err) {
    console.log(err);
  }
};

export default postDiscordLink;
