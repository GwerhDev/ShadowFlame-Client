import axios from "axios"
import { API_URL } from "../misc/const"
import { error } from "../misc/errors";
import { options } from "../../helpers";

export const signupGoogle: any = async (formData: any) => {
  const response: any = await axios.post(API_URL + "/signup-google", formData)
                                   .then(response => response.data.token)
                                   .catch(() => { return { error: error.api.loadAllItems } });
  return response;
};

export const loginGoogle: any = async (formData: any) => {
  const response: any = await axios.post(API_URL + "/login-google", formData)
                                   .then(response => response.data.token)
                                   .catch(() => { return { error: error.api.loadAllItems } });
  return response;
};

export const signupInner: any = async (formData: any) => {
  const response: any = await axios.post(API_URL + "/signup-inner", formData)
                                   .then(response => response.data.token)
                                   .catch(() => { return { error: error.api.loadItemById } });
  return response;
};

export const loginInner: any = async (formData: any) => {
  const response: any = await axios.post(API_URL + "/login-inner", formData)
                                   .then(response => response.data.token)
                                   .catch(() => { return { error: error.api.loadItemById } });
  return response;
};

export const getUserData: any = async (token: any) => {
  const response: any = await axios.get(API_URL + "/auth", { headers: { Authorization: token }})
                                   .then(response => response.data)
  return response;
};

export const updateUserData: any = async (formData: any, id: any, token: any) => {
  const response: any = await axios.patch(API_URL + "/account/update/" + id, formData, { headers: { Authorization: token }})
                                   .then(response => response.data)
                                   .catch(() => { return { error: error.api.loadItemById } });
  return response;
};

export const getUsers: any = async () => {
  const response: any = await axios.get(API_URL + "/admin/users", options())
                                   .then(response => response.data)
  return response;
};

export const updateUser: any = async (id: string, formData: any) => {
  await axios.patch(API_URL + "/admin/users/" + id, formData, options());
  return;
};

export const deleteUser: any = async (id: string) => {
  await axios.delete(API_URL + "/admin/users/" + id, options());
  return;
};

export const getTasks: any = async (date: Date) => {
  const response: any = await axios.post(API_URL + "/task/", { date }, options())
                                   .then(response => response.data)
  return response;
};

export const createTask: any = async (formData: any) => {
  const response: any = await axios.post(API_URL + "/task/create", formData, options())
                                   .then(response => response.data)
  return response;
};

export const updateTask: any = async (id: string, formData: any) => {
  const response: any = await axios.patch(API_URL + "/task/update/" + id, formData, options())
                                   .then(response => response.data)
  return response;
};

export const deleteTask: any = async (id: string) => {
  const response: any = await axios.delete(API_URL + "/task/delete/" + id, options())
  return response;
};

export const createCompletedTask: any = async (id: string, formData: any) => {
  const response: any = await axios.post(API_URL + "/completed-task/create/" + id, formData, options())
                                   .then(response => response.data)
  return response;
};

export const deleteCompletedTask: any = async (id: string, formData: any) => {
  const response: any = await axios.patch(API_URL + "/completed-task/delete/" + id, formData, options())
  return response;
};

export const chatbotQuery: any = async (formData: any) => {
  const response: any = await axios.post(API_URL + "/chatbot", formData, options())
                                   .then(response => response.data);
  return response;
};

export const getAdminNotifications: any = async () => {
  const response: any = await axios.get(API_URL + "/admin/notifications", options())
                                   .then(response => response.data);
  return response;
};