import axios from "axios"
import { API_URL } from "../misc/const"
import { options } from "../../helpers";

export const getClans: any = async () => {
  const response: any = await axios.get(API_URL + "/admin/clans", options())
                                   .then(response => response.data)
  return response;
};

export const createClan: any = async (formData: any) => {
  const response: any = await axios.post(API_URL + "/admin/clans", formData, options())
                                   .then(response => response.data)
  return response;
};
