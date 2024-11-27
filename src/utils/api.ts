import { ApiData } from '@/api/ApiService';
import { isSuccess } from '@/api/ApiHandler';

export async function retrieveAllData<T>(func: () => Promise<ApiData & isSuccess>): Promise<T | undefined> {
  try {
    const res = await func();
    if (!res.isSuccess) {
      throw new Error('API Fetch Failure');
    }
    return res.data as T;
  } catch (e) {
    console.log(e);
  }
}
