
import axios from "axios";
import { OTPData, LoginAccountData} from "../models/accounts";

export const baseUrl = `${process.env.NEXT_PUBLIC_GATEWAY_BASE_URL}`;

const api = {
    signUp: async (data: OTPData) => {
    return axios
      .post(`${baseUrl}/v1/sessions/signup`, data)
      .then((response) => response.data);
  },
  login: async (data: LoginAccountData) => {
    console.log('login call with data', data)
    return axios.post(`${baseUrl}/v1/sessions/login`, data)
      .then((response) => response.data);
  },
  recovery: async (data: OTPData) => {
    return axios
      .post(`${baseUrl}/v1/sessions/recovery`, data)
      .then((response) => response.data);
  },
};

export default api;