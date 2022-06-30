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
  instructor?: InstructorTypes;
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
  videoUrl: string;
  playTime: string;
};
