import type { Lesson } from "@/types/lesson";

export interface Course {
  id: string;
  title: string,
  description: string,
  containsLockedLessons: boolean;
  duration: number,
  launchDate: string,
  lessonsCount: number,
  previewImageLink: string,
  rating: number,
  status: string,
  tags: string[],
  meta: CourseMetaData,
  lessons?: Lesson[],

}

interface CourseMetaData {
  courseVideoPreview: CoursePreview,
  skills: string[],
  slug: string,
}

interface CoursePreview {
  duration: number,
  link: string,
  previewImageLink: string,
}