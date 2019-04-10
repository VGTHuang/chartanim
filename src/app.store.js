import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        projectName: "Project 1",
        // spreadsheet data in given format
        chartList: {
            
        },
        _templateChartListExample: {
            "5dg7sV3I": {
                // container position
                height: 100,
                width: 200,
                top: 10,
                left: 10,
                name: "Bar chart of annual profits",
                type: "bar-001",
                data: {

                },
                general: {
                    barWidth: 10,
                    barGap: 20,
                    color: {
                        isScale: true,
                        mono: {r: 255, g: 100, b: 0},
                        gradient: [
                            {col: {r: 0, g: 0, b: 255}, pos: 0},
                            {col: {r: 255, g: 0, b: 255}, pos: 1}
                        ]
                    },
                    fonts: {
                        title: {
                            fontFamily: "Monospace",
                            fontSize: 16,
                            fontColor: {r: 100, g: 10, b: 10},
                        },
                        data: {
                            fontFamily: "Monospace",
                            fontSize: 12,
                            fontColor: {r: 0, g: 0, b: 0},
                            fontRotate: 45,
                        }
                    }
                }
            },
        },
        canvasParams: {
            layout: {
                canvasWidth: 600,
                canvasHeight: 400,
            },
            background: {r: 240, g: 210, b: 230, a: 1}
        },
        editorParams: {
            selectedLp: "LpCanvasModifier",
            templatePalettes: [
                {r: 255, g: 100, b: 0},
                {r: 125, g: 100, b: 0},
                {r: 255, g: 200, b: 50}
            ]
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