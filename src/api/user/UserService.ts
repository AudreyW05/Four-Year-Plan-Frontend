import ApiService, { ApiData } from '@/api/ApiService';

class UserService {
  private static getUserUrl() {
    return 'users';
  }

  public static async getAllUsers(): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: this.getUserUrl(),
          method: 'GET',
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async getSelf(): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: `${this.getUserUrl()}/getSelf`,
          method: 'GET',
        },
        true,
      );

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async getUserById(id: number): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: `${this.getUserUrl()}/${id}`,
          method: 'GET',
        },
        true,
      );

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async addCourseToUser(id: number, courseCode: string, year: number, quarter: number): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: `${this.getUserUrl()}/${id}/add-course`,
          method: 'POST',
          data: {
            courseCode,
            year,
            quarter,
          },
        },
        true,
      );

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async deleteCourseFromUser(id: number, courseCode: string): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: `${this.getUserUrl()}/${id}/delete-course`,
          method: 'DELETE',
          data: {
            courseCode,
          },
        },
        true,
      );

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default UserService;
