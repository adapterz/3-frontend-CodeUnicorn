import { InstructorTypes } from "./Instructor";

export type CourseTypes = {
  id: number;
  name: string;
  category: string;
  description: string;
  imagePath: string;
  userCount: number;
  averageRatings: number;
  ratingsCount: number;
  totalHours?: number;
  likeCount?: number;
  instructor?: InstructorTypes;
  length?: number;
};

export type CurriculumTypes = {
  courseId: number;
  sections: SectionTypes[];
  length?: number;
};

export type SectionTypes = {
  id: number;
  name: string;
  totalHours: string;
  lectureCount: number;
  lectures: LectureTypes[];
};

export type LectureTypes = {
  id: number;
  name: string;
  desc: string;
  dashUrl: string;
  hlsUrl: string;
  playTime: string;
};
