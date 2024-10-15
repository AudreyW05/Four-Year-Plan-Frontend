/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getLocalStorageValue } from '@/utils/miscellaneous';

const baseUrl = process.env.REACT_APP_API_URL;

// The shape of the JSON response.data from API endpoints.
export interface ApiData<T = any> {
  data?: T;
  message: string;
}

// Type T refers to the type of the data in response.data
export type ApiResponse<T = any> = AxiosResponse<ApiData<T>>;

export default class ApiService {
  public static authTokenKey = 'accessToken';

  public static async request(
    requestConfig: AxiosRequestConfig,
    isAuth = false,
    isUpdatePassword = false,
    contentType = 'application/json',
  ): Promise<any> {
    const accessToken: string | null = getLocalStorageValue(this.authTokenKey) ?? null;
    const updatePasswordToken: string | null = requestConfig?.headers ? (requestConfig?.headers['x-auth-token'] as string) : null;

    if (isAuth && !accessToken) {
      return Promise.reject({ data: { message: 'Not authenticated' } });
    }

    if (isUpdatePassword && !updatePasswordToken) {
      return Promise.reject({ data: { message: 'Missing token! Not a valid request' } });
    }

    try {
      const config: AxiosRequestConfig = {
        ...requestConfig,
        baseURL: baseUrl,
        headers: {
          'x-auth-token': `${isUpdatePassword ? updatePasswordToken : accessToken}`,
          'Content-Type': contentType,
          ...requestConfig.headers,
        },
      };

      const response: ApiResponse = await axios(config);
      return response.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
