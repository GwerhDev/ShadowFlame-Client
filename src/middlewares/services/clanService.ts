import axios from "axios"
import { API_URL } from "../misc/const"
import { options } from "../../helpers";

export const getClans: any = async () => {
  const response: any = await axios.get(API_URL + "/clans", options())
                                   .then(response => response.data)
  return response;
};
