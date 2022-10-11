import axios from "axios";
import { AuthSessionData, UpdateAccountData } from "../models/accounts";
import { RequestVerificationData } from "../models/verifications";
import { VerificationStates } from "../constants/states";

export const baseUrl = `${process.env.NEXT_PUBLIC_GATEWAY_BASE_URL}`;

const api = {
  requestVerification: async (data: RequestVerificationData) => {
    return axios
      .post(`${baseUrl}/v1/verifications`, {type: data.type, subject_id: data.subject_id, personal_info: {...data}})
      .then((response) => response.data);
  },

  getVerifications: async (session: AuthSessionData) => {
    return axios
      .get(`${baseUrl}/v1/verifications`, { params: {
        requester_uid: session.id,
        states: ['Unassigned','Pending', 'Approved', 'Rejected', 
        'NotPossible', 'WillNotDo','Canceled']//VerificationStates
      }})
      .then((response) => response.data);
  },

  getSingleVerification: async (id: string) => {
    return axios
      .get(`${baseUrl}/v1/verifications/${id}`)
      .then((response) => response.data);
  },
};

export default api;
