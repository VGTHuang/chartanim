import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        projectName: "Project 1",
        // spreadsheet data in given format
        chartList: [
            {
                name: "chart one",
                type: "simple-bar",
                data: {
                }
            }
        ],
        canvasParams: {
            layout: {
                canvasWidth: 600,
                canvasHeight: 400,
            },
            background: {r: 240, g: 210, b: 230, a: 1}
        },
        editorParams: {
            selectedLp: "lp_option_canvas"
        }
    },
    mutations: {
        setProjectName: (state, val) => {
            state.projectName = val;
        },
        setTimestampedStatus: (state, stat) => {
            state.tableParams.isTimestamped = stat;
        }
    }
});

export default store;