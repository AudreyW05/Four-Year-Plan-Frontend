import { UserData } from '../user/types';

export type Categories = 'lowerdivs' | 'math' | 'physics' | 'upperdivs' | 'others' | 'ges';
export const Category = {
  LOWER_DIV: 'lowerdivs' as Categories,
  MATH: 'math' as Categories,
  PHYSICS: 'physics' as Categories,
  UPPER_DIV: 'upperdivs' as Categories,
  OTHER: 'others' as Categories,
  GE: 'ges' as Categories,
};

export type CourseData = {
  code: string;
  units: number;
  category: string;
  has: HasData[];
};

export type MyCourseData = {
  code: string;
  units: number;
  category: string;
  yearQuarter: number;
  missingEnforcedPrereqs: CourseData[];
  missingWarningPrereqs: CourseData[];
  prerequisitesFulfilled: boolean;
};

export type HasData = {
  user: UserData;
  courseCode: string;
  userId: number;
  yearQuarter: number;
};

export type CreateCourseData = {
  code: string;
  year: number;
  quarter: number;
};
