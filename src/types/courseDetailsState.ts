import type {Course} from "@/types/course";
import type {Lesson} from "@/types/lesson";

export interface CourseDetailsState {
  course: Course;
  loading: boolean;
  showModal: boolean;
  openedLessons: string[];
}