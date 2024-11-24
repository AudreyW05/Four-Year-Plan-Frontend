import { UserData, UserSignUpData } from '@/modules/user/types';
import { removeLocalStorageValue, setLocalStorageValue } from '@/utils/miscellaneous';
import ApiService, { ApiData } from '@/api/ApiService';

interface LoginData {
  accessToken: string;
  user: UserData;
}

class AuthService {
  private static getAuthUrl() {
    return 'authentication';
  }

  public static async login(email: string, password: string): Promise<ApiData<LoginData>> {
    try {
      //get the token with API call
      const response = await ApiService.request({
        url: `${this.getAuthUrl()}/signin`,
        method: 'POST',
        data: {
          email,
          password,
        },
      });

      console.log('API response:', response.data);

      if (!response || !response.accessToken) {
        //login failed
        throw new Error('login failed!');
      }

      // store the x-auth-token in localStorage if login success
      const accessToken: string = response.accessToken;
      setLocalStorageValue(ApiService.authTokenKey, accessToken);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async register(email: string, password: string): Promise<ApiData> {
    try {
      const response = await ApiService.request({
        url: `${this.getAuthUrl()}/signup`,
        method: 'POST',
        data: {
          email,
          password,
        },
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static logout(): void {
    removeLocalStorageValue(ApiService.authTokenKey);
  }
}

export default AuthService;
