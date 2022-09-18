import axios from "axios";
import decode from 'jwt-decode' // import dependency

export const baseUrl = `${process.env.NEXT_PUBLIC_GATEWAY_BASE_URL}`;

export const InitAxiosInterceptor = (context: any)=> {
    axios.interceptors.request.use(
        config => {
         
            const {session} = context;
         
            const accessToken = session && session.token ? session.token : '';
        
            if (config && config.headers && accessToken) {                              
                if (config.url?.includes(baseUrl)) {
                    config.headers['Authorization'] = 'Bearer ' + accessToken;
                }
            }
            // config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => {
            Promise.reject(error)
        });
}