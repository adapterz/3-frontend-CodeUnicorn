import { IInstructor } from "./Instructor";

export interface ICourse {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  totalUsers: number;
  rating: number;
  ratingsRate: number;
  instructor?: IInstructor;
}

export interface ICourseProps {
  course: ICourse;
  instructor?: IInstructor;
}

export interface ISection {
  id: number;
  name: string;
  totalHours: string;
  lectureCount: number;
  lectures: [ILecture];
}

export interface ILecture {
  id: number;
  name: string;
  desc: string;
  videoUrl: string;
  playTime: string;
}

export interface ICourseProps {
  course: ICourse;
  instructor?: IInstructor;
}

export interface ISection {
  id: number;
  name: string;
  totalHours: string;
  lectureCount: number;
  lectures: [ILecture];
}

export interface ILecture {
  id: number;
  name: string;
  desc: string;
  videoUrl: string;
  playTime: string;
}
