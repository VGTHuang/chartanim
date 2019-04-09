<template>
    <div class="chart-container" :style="ctnStyle">
        <div>key of this chart is: {{chartKey}}</div>
        <slot />
        <div class="ctrl-group">
            <span @click="selectEditorPanel">edit</span>
            <span>move</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        chartKey: String
    },
    data: function() {
        return {
            mychart: {}
        }
    },
    created: function() {
        this.mychart = this.$store.state.chartList[this.chartKey];
    },
    computed: {
        ctnStyle() {
            return {
                top: this.mychart.top+'px',
                left: this.mychart.left+'px',
                height: this.mychart.height+'px',
                width: this.mychart.width+'px',
            }
        }
    },
    methods: {
        selectEditorPanel() {
            console.log(this.chartKey);
        }
    }
}
</script>

<style lang="scss">
.chart-container {
    position: absolute;
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

</style>
