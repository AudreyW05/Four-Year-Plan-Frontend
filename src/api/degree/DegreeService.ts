import ApiService, { ApiData } from '@/api/ApiService';

class DegreeService {
  private static GetDegreeUrl() {
    return 'degrees';
  }

  public static async createDegree(name: string): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: this.GetDegreeUrl(),
          method: 'POST',
          data: {
            name,
          },
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async getAllDegrees(): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: this.GetDegreeUrl(),
          method: 'GET',
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async getDegreeByName(name: string): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: `${this.GetDegreeUrl()}/${name}`,
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

export default DegreeService;
