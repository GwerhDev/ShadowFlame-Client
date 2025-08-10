import axios from "axios"
import { API_URL } from "../misc/const"
import { options } from "../../helpers";

export const createShadowWar: any = async (formData: any) => {
  const response: any = await axios.post(API_URL + "/admin/shadow-wars", formData, options())
                                   .then(response => response.data)
  return response;
};

export const getShadowWars: any = async () => {
  const response: any = await axios.get(API_URL + "/admin/shadow-wars", options())
                                   .then(response => response.data)
  return response;
};
