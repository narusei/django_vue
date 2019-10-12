import axios from 'axios';
import { API_URL } from '@/services/config';

const ApiService = {
  get(to: string) {
    axios
      .get(API_URL + to)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((response) => console.log(response));
  },
};

export default ApiService;
