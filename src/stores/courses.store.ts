import { defineStore } from "pinia";
import webApi from "@/services/interceptor";
import type { CoursesState } from "@/types/courseState";
import type { Course } from "@/types/course";

export const useCoursesStore = defineStore({
    id: "courses",
    state: (): CoursesState => ({
        courses: [],
        loading: false,
        limit: 10,
        currentPage: 1,
    }),
    getters: {
        totalPages(state: CoursesState): number {
            return Math.ceil(state.courses.length / state.limit);
        },
        getCoursesPerPage(state: CoursesState): Course[] {
            const startIndex = (state.currentPage - 1) * state.limit;
            const endIndex = startIndex + state.limit;

            return state.courses.slice(startIndex, endIndex);
        },
    },
    actions: {
        fetchCourses(): void {
            this.loading = true;
            webApi.get('/preview-courses')
                .then(resp => {
                    this.courses = resp.data.courses;
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.loading = false;
                })
        },
        setCurrentPage(page: number): void {
            this.currentPage = page;
        },
    },
});
