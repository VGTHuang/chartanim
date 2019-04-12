import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        chartParams: {

        },
        projectParams: {
            selectedPanel: "project",
            projectName: "Project 1",
            layout: {
                width: 600,
                height: 400,
            },
            backgroundColor: [240, 210, 180, 1]
        },
    },
    getters: {
        selectedPanel: state => state.projectParams.selectedPanel
    },
    mutations: {
        switchPanel(state, panelKey) {
            state.projectParams.selectedPanel = panelKey
            console.log(state.projectParams.selectedPanel)
        },
        setProjectName(state, payload) {
            state.projectParams.projectName = payload.mutateValue
        },
        resizeCanvasWidth(state, payload) {
            state.projectParams.layout.width = payload.mutateValue
        },
        resizeCanvasHeight(state, payload) {
            state.projectParams.layout.height = payload.mutateValue
        },
        setCanvasBackground(state, payload) {
            state.projectParams.backgroundColor = payload.mutateValue
        }
    }
});

export default store;