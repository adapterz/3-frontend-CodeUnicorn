import { InstructorTypes } from "./Instructor";

export type CourseProps = {
  course: CourseTypes;
};

export type CourseTypes = {
  id: number;
  name: string;
  category: string;
  description: string;
  imagePath: string;
  userCount: number;
  averageRatings: number;
  ratingsCount: number;
  instructor?: InstructorTypes;
};

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
