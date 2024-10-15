import { useState } from 'react';
import { ApiData } from '@/api/ApiService';

export interface isSuccess {
  isSuccess: boolean;
}

export function useApi<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apiPromise: (data?: any) => Promise<ApiData<T>>,
  withSuccessNotification = false,
  withFailureNotification = false,
  withLoadingNotification = true,
) {
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function fetchApi(data?: any): Promise<ApiData<T> & isSuccess> {
    if (withLoadingNotification) {
      console.log('Loading...');
    }
    try {
      const response = await apiPromise(data);
      if (response?.message && withSuccessNotification) {
        console.log({ message: response.message });
      } else if (response && withSuccessNotification) {
        console.log({ message: 'API Call Successful' });
      }
      console.log(response);
      return { ...response, isSuccess: true };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.data?.message && withFailureNotification) {
        console.error({ message: error.data.message });
      }
      if (error?.status === 403) {
        // history.push(Routes.authentication.login);
      }
      console.log(error);
      return { ...error?.data, isSuccess: false };
    } finally {
      setIsLoading(false);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function callApi(data?: any) {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetchApi(data);
      return response;
    }
    return { message: 'Internal Server Error', isSuccess: false };
  }

  return [callApi] as const;
}
