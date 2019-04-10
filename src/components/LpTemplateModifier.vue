<template>
<div v-show="editorParams.selectedLp===chartKey">
    <div class="msg-ctn">
        <div class="lt-basic msg-row">{{myChart.info.name}}</div>
    </div>
    <div class="msg-ctn">
        <div class="mt-basic msg-row"></div>
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
            myChart: {}
        }
    },
    computed: {
        ...mapState({
            chartList: state => state.chartList,
            editorParams: state => state.editorParams,
        }),
    },
    created: function() {
        this.myChart = this.chartList[this.chartKey]?this.chartList[this.chartKey]:{};
    }
}
</script>
