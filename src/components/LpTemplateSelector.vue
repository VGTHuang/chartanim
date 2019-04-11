<template>
<div id="lp-template-selector">
    <div class="msg-ctn">
        <div class="lt-basic msg-row">template selector</div>
    </div>
    <div class="msg-ctn">
        <div class="mt-basic msg-row">static chart templates</div>
        <div class="msg-row charts-ctn">
            
            <div class="chart-c" v-for="(v, k) in localc" :key="k" :title="v.name" @click="showChartInfo(k)">
                <div><img :src="v.thumbnail" height="50px"></div>
                <label>{{v.name}}</label>
            </div>

        </div>
    </div>
    <BasicModal v-if="modalTrigger">
        <div class="msg-ctn">
            <div class="lt-basic msg-row">{{chosenChart && chosenChart.info.name?chosenChart.info.name:"Sorry"}}</div>
            <div class="msg-basic msg-row" :class="{'msg-alert': !chosenChart}">{{chosenChart && chosenChart.info.description?chosenChart.info.description:"This template is unavailable at the moment"}}</div>
            <div class="msg-basic msg-s msg-row" v-if="chosenChart"><i>By {{chosenChart && chosenChart.info.author?chosenChart.info.author:""}}</i></div>
        </div>
        <div class="msg-ctn">
            <button class="btn-basic" @click="applyChart" :disabled="!chosenChart">apply</button>
            <button class="btn-basic" @click="modalTrigger=false">close</button>
        </div>
    </BasicModal>
</div>
</template>

<script>
import { mapState } from "vuex";
import { localCharts, loadCharts } from "@/assets/chart_templates";

export default {
    name: "LpTemplateSelector",
    data: function() {
        return {
            localc: localCharts,
            modalTrigger: false,
            chosenChart: {}
        }
    },
    created: function() {
    },
    computed: {
        ...mapState({
            chartList: state => state.chartList
        }),
    },
    methods: {
        showChartInfo(c) {
            loadCharts(c).then(modulejs => {
                this.chosenChart = modulejs;
                this.modalTrigger = true;
            }).catch(() => {
                // console.log("not loaded");
                this.modalTrigger = true;
                this.chosenChart = null
            });
        },
        applyChart() {
            this.modalTrigger = false;

            // generate random string for chart
            function makeid(length) {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < length; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            }

            var randstr = makeid(5);
            while(this.chartList[randstr]) {
                randstr = makeid(5);
            }
            this.$set(this.chartList, randstr, this.chosenChart);
            //this.chartList[randstr] = this.chosenChart;
            this.$emit("newChartAdded", randstr);
            // console.log(this.chartList);
        }
    }
}
</script>

<style lang="scss" scoped>
.charts-ctn {
    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    .chart-c {
        height: 120px;
        width: 120px;
        box-sizing: border-box;
        margin-bottom: 15px;
        &:hover {
            outline: 2px solid $lgrey;
        }
        div {
            height: 100px;
            width: 120px;
            clear: both;
            background: $mgrey;
        }
        label {
            display: block;
            height: 20px;
            width: 120px;
            font-size: .9em;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
}
</style>
