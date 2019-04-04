import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        projectName: "Project 1",
        // spreadsheet data in given format
        tableParams: {
            isTimestamped: 1,
            tableData: {}
        },
        // general style
        chartStyle: {},
        // grid style
        gridStyle: {},
        // animation style
        animStyle: {},
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