import { ApiData } from '@/api/ApiService';
import { isSuccess } from '@/api/ApiHandler';

export async function retrieveAllData<T>(func: () => Promise<ApiData & isSuccess>): Promise<T | undefined> {
  try {
    const res = await func();
    if (!res.isSuccess) {
      throw new Error('API Fetch Failure');
    }
    const result = Object.entries(res)
      .filter(([key]) => !isNaN(Number(key))) // Filter out the `isSuccess` property
      .map(([, value]) => value); // Map to values (the course data)
    return result as T;
  } catch (e) {
    console.log(e);
  }
}
