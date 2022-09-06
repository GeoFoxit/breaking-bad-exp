import { API } from ".";

const URL = "/episodes";

class EpisodeService {
  static async getAllEpisodes () {
    try {
      const response = await API.get(URL);
      return response.data;
    } catch (error) {
      console.log({ error });
    }
  }
}

export default EpisodeService;