import ApiService, { ApiData } from '@/api/ApiService';

class CourseService {
  private static GetCourseUrl() {
    return 'courses';
  }

  public static async createCourse(code: string, credits: number): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: this.GetCourseUrl(),
          method: 'POST',
          data: {
            code,
            credits,
          },
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async getAllCourses(): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: this.GetCourseUrl(),
          method: 'GET',
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async getCourseByCode(code: string): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: `${this.GetCourseUrl()}/${code}`,
          method: 'GET',
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default CourseService;
