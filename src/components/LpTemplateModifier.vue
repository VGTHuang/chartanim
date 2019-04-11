<template>
<div v-show="editorParams.selectedLp===chartKey">
    <div class="msg-ctn">
        <div class="lt-basic msg-row">{{chartKey}} {{myChart.info.name}}</div>
    </div>
    <div class="msg-ctn" v-for="(v, k) in myPanel" :key="k">
        <div class="mt-basic msg-row">{{k}}</div>
        <input type="text" v-for="(value, index) in v" :key="index" v-model="value.value">
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "LpTemplateModifier",
    props: {
        chartKey: String,
    },
    data: function() {
        return {
            myChart: {},
            myPanel: {}
        }
    },
    computed: {
        ...mapState({
            chartList: state => state.chartList,
            editorParams: state => state.editorParams,
        }),
    },
    created: function() {
        this.myChart = this.chartList[this.chartKey]?this.chartList[this.chartKey]:null;
        if(this.myChart) {
            this.myPanel = this.myChart.panel(this.chartList[this.chartKey].values);
        }
        console.log(this.myChart.values.textContent);
    },
    methods: {
    }
}
</script>
