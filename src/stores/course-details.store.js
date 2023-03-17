import {defineStore} from "pinia";
import webApi from "@/http/interceptor";

export const useCourseDetailsStore = defineStore('course-details', {
    state: () => ({
        course: {},
        loading: false,
        showModal: false,
        openedLessons: [],
    }),
    actions: {
        getCourseDetails(id) {
            this.loading = true;
            webApi.get('/preview-courses/' + id)
                .then(resp => {
                    this.course = resp.data;
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.loading = false;
                    this.openedLessons.push(this.getFirstUnlockedLesson().id);
                })
        },
        getFirstUnlockedLesson() {
            return this.course.lessons.find(lesson => lesson.status == 'unlocked');
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        getLessonState(lessonId) {
            return this.openedLessons.find(id => id == lessonId);
        },
        openLesson(lessonId) {
            this.openedLessons.push(lessonId);
        },
        closeLesson(lessonId) {
            this.openedLessons = this.openedLessons.filter(id => id !== lessonId);
        }
    }
})