import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        projectName: "Project 1",
        // spreadsheet data in given format
        tableParams: {
            isTimestamped: true,
            timeCount: 5,
            contentCount: 3,
            timestamps: ["2005", "2008", "2009", "2012", "2015"],
            contents: [
                {name: "Apple", properties: {}, records: [6,7,4,3,5]},
                {name: "Pear", properties: {}, records: [3,5,6,2.9,5]},
                {name: "Banana", properties: {}, records: [6,5,4,2,3.4]},
            ],
            tableData: [
                {
                    title: "a",
                    pro: {},
                    data: [1,2,3]
                },
                {
                    title: "b",
                    pro: {},
                    data: [4,5,6]
                },
                {
                    title: "c",
                    pro: {},
                    data: [7,8,9]
                },
            ]
        },
        chartParams: {
            layout: {
                chartWidth: 600,
                chartHeight: 400,
            }
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