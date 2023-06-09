import type { Course } from "@/types/course";

export interface CoursesState {
  courses: Course[];
  loading: boolean;
  limit: number;
  currentPage: number;
}