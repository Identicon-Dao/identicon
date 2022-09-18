import axios from "axios";
import { AuthSessionData } from "../models/accounts";
import { ValidationResultData } from '../models/validations'

export const baseUrl = `${process.env.NEXT_PUBLIC_GATEWAY_BASE_URL}`;

const api = {

  getTasksAssigned: async (session: AuthSessionData) => {
    return axios
      .get(`${baseUrl}/v1/tasks`, { params: {
        order: 'asc',
        state: 'P' // Pending
      }})
      .then((response) => response.data);
  },

  getSingleTask: async (id: string) => {
    return axios
      .get(`${baseUrl}/v1/tasks/${id}`)
      .then((response) => response.data);
  },

  reportResult: async (data: ValidationResultData) => {
    return axios
      .put(`${baseUrl}/v1/tasks/${data.uid}`, {
        result: data.result, 
        remarks: data.remarks,
        contents: []
      })
      .then((response) => response.data);
  },

};

export default api;
