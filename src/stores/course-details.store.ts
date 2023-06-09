import {defineStore} from "pinia";
import webApi from "@/services/interceptor";
import type {CourseDetailsState} from "@/types/courseDetailsState";
import type {Lesson} from "@/types/lesson";
import type {Course} from "@/types/course";
import type {ErrorResponse} from "@/types/errorResponse";

export const useCourseDetailsStore = defineStore({
    id: "course-details",
    state: (): CourseDetailsState => ({
        course: {} as Course,
        loading: false,
        showModal: false,
        openedLessons: []
    }),
    actions: {
        getCourseDetails(id: string): void {
            this.loading = true;
            webApi.get(`/preview-courses/${id}`)
                .then(resp => {
                    this.course = resp.data;
                })
                .catch((err: ErrorResponse) => {
                    console.log(err);
                })
                .finally(() => {
                    const lesson = this.getFirstUnlockedLesson();
                    if (!lesson) return;
                    this.openedLessons.push(lesson.id);
                    this.loading = false;
                });
        },
        getFirstUnlockedLesson(): Lesson | undefined {
            return this.course.lessons?.find((lesson: Lesson) => lesson.status === "unlocked");
        },
        openModal(): void {
            this.showModal = true;
        },
        closeModal(): void {
            this.showModal = false;
        },
        getLessonState(lessonId: string): string | undefined {
            return this.openedLessons.find((id: string) => id === lessonId);
        },
        openLesson(lessonId: string): void {
            this.openedLessons.push(lessonId);
        },
        closeLesson(lessonId: string): void {
            this.openedLessons = this.openedLessons.filter((id: string) => id !== lessonId);
        }
    }
});