import {defineStore} from "pinia";
import webApi from "@/http/interceptor";

export const useCoursesStore = defineStore('courses', {
    state: () => ({
        courses: [],
        loading: false,
        limit: 10,
        currentPage: 1,
    }),
    getters: {
        totalPages: (state) => {
            return Math.ceil(state.courses.length / state.limit);
        },
        getCoursesPerPage(state) {
            const startIndex = (state.currentPage - 1) * state.limit;
            const endIndex = startIndex + state.limit;
            return state.courses.slice(startIndex, endIndex);
        }
    },
    actions: {
        fetchCourses() {
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
        setCurrentPage(page) {
            this.currentPage = page;
        }
    }
})