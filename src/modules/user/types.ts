import { MyCourseData } from '../course/types';

export interface UserSignUpData {
  email: string;
  password: string;
}

export interface UserData {
  id: number;
  courses: MyCourseData[];
  email: string;
  password: string;
  units: number;
}
