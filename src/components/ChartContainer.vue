<template>
    <div class="chart-container" :class="{chartselected: isSelected}">
        <div style="font-size: .8em; color: #606060">key of this chart is: {{chartKey}}</div>
        <div>
            asdasd
        </div>
        <div class="ctrl-group">
            <span @click="selectEditorPanel">edit</span>
            <span>move</span>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    props: {
        chartKey: String
    },
    data: function() {
        return {
            myChartBodyRef: ""
        }
    },
    computed: {
        ...mapState({

        }),
        isSelected() {
            return this.$store.getters.selectedPanel === this.chartKey;
        },
    },
    methods: {
        selectEditorPanel() {
            console.log(this.chartKey);
            this.$store.commit('switchPanel', this.myChart)
        }
    }
}
</script>

<style lang="scss" scoped>
.chart-container {
    position: relative;
    .ctrl-group {
        visibility: hidden;
        position: absolute;
        top: 0;
        right: 0;
        background: #808080;
        background: #50505050;
        text-align: center;
        span {
            margin: 0;
            padding: 0 10px;
            font-size: .9em;
            cursor: pointer;
            user-select: none;
            &:hover {
                background: #606060;
                background: #50505050;
            }
        }
    }
    &:hover {
        outline: 1px dotted #808080;
        .ctrl-group {
            visibility: visible;
        }
    }
}
.chartselected {
    outline: 1px dotted #808080;
    .ctrl-group {
        visibility: visible;
    }
}
</style>
