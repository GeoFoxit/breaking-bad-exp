import { API } from ".";

const URL = "/characters";

class CharacterService {
  static async getAllCharacters () {
    try {
      const response = await API.get(URL);
      return response.data;
    } catch (error) {
      console.log({ error });
    }
  }
}

export default CharacterService;