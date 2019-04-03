import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        projectName: "Project 1",
        // spreadsheet data in given format
        sheetData: {},
        // general style
        chartStyle: {},
        // grid style
        gridStyle: {},
        // animation style
        animStyle: {},
    },
    mutations: {
        /*
        increment (state) {
        state.count++
        }
        */
    }
});

export default store;