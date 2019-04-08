<template>
    <div id="center-panel">
        <div id="main-canvas" :style="setCanvasHeightWidth">
            <div id="canvas-chart" @click="renewMappedTsArr">
                <div>{{currentValues}}</div>
            </div>
            <div id="canvas-progress">
                <div id="canvas-progress-ctrl">
                    <span id="canvas-progress-ctrl-b" class="canvas-progress-ctrl-btn">b</span>
                    <span id="canvas-progress-ctrl-pp" class="canvas-progress-ctrl-btn">pp</span>
                    <span id="canvas-progress-ctrl-f" class="canvas-progress-ctrl-btn">f</span>
                </div>
                <div id="canvas-progress-bar" @mouseenter="isOverBar=true" @mouseleave="isOverBar=false">
                    <div id="canvas-progress-bar-main" ref="progressbar" :style="setProgressBarWidth" @mouseover="mouseOverBarAction">
                        <div id="canvas-progress-bar-scrubber" :style="scrubberStyle"></div>
                        <div class="key-timestamp"
                            v-for="(mappedTs, i) in mappedTsArr"
                            :key="i"
                            :style="{left: getBarPos(mappedTs)}"
                            @mouseover="timestampHover(getBarPos(mappedTs), i)"
                            @click="keyTsClicked(mappedTs, getBarPos(mappedTs))"></div>
                        <div id="canvas-progress-bar-tooltip" ref="tooltip" style="left: 0" v-show="isOverBar">{{tableParams.timestamps[tooltipIndex]}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { ChartMethods } from "../mixins/chart_methods.js";

export default {
    name: "CenterPanel",
    data: function() {
        return {
            mappedTsArr: [],
            currentTimestampIndex: 0,
            isOverBar: false,
            scrubberStyle: {left: 0},
            tooltipIndex: 0,

            currentValues: []
        }
    },
    created: function() {
        this.renewMappedTsArr();
    },
    computed: {
        ...mapState({
            tableParams: state => state.tableParams,
            chartParams: state => state.chartParams
        }),
        barWidth: function() {
            return this.$refs.ProgressBar.innerHTML;
        },
        setCanvasHeightWidth: function() {
            return {
                height: this.chartParams.layout.chartHeight+50+"px",
                width: this.chartParams.layout.chartWidth+50+"px",
            }
        },
        setProgressBarWidth: function() {
            return {
                width: this.chartParams.layout.chartWidth-150+"px",
            }
        },
        getProgressBarWidth: function() {
            return this.chartParams.layout.chartWidth-150;
        }
    },
    methods: {
        renewMappedTsArr: function() {
            this.mappedTsArr = ChartMethods.getTimestampInterval(this.tableParams.timestamps);
        },
        getBarPos: function(scaledPos) {
            return scaledPos*this.getProgressBarWidth+"px";
        },
        mouseOverBarAction: function(event) {
            // this.tooltipXPos = event.pageX-this.$refs.progressbar.offsetLeft;
        },
        timestampHover: function(xPos, index) {
            /**
             *  hover on timestamp, move tooltip to that position
             *  and change tooltip's text content (by changing tooltipIndex)
             */
            this.$refs.tooltip.style.left = xPos;
            this.tooltipIndex = index;
        },
        keyTsClicked: function(mappedts, xPos) {
            // click timestamp, move scrubber to that position
            this.scrubberStyle = {left: xPos};
            // change values
            this.currentValues = ChartMethods.getValuesOfTimestamp(this.tableParams.contents, this.mappedTsArr, mappedts, "no", true);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./scss/_variables.scss";

#center-panel {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#main-canvas {
    color: black;
    background: white;
    box-shadow: 0 5px 10px $xdgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#canvas-chart, #canvas-progress {
    width: 100%;
}
#canvas-progress {
    background: #e0e0e0;
    height: 50px;
    overflow: visible;
    display: flex;
}
#canvas-progress-ctrl {
    height: 100%;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    .canvas-progress-ctrl-btn {
        display: inline-block;
        margin: 0 5px 0;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: $mgrey;
        &:hover {
            background: $dgr;
        }
    }
}
#canvas-progress-bar {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}
#canvas-progress-bar-main {
    width: 100%;
    height: 8px;
    background: red;
    position: relative;
    #canvas-progress-bar-scrubber {
        height: 16px;
        width: 16px;
        margin-left: -8px;
        background: #0000c080;
        position: absolute;
        top: -4px;
        left: -8px;
        transition: 100ms;
        cursor: pointer;
        z-index:150;
    }
    #canvas-progress-bar-tooltip {
        position: absolute;
        top: -40px;
        min-height:20px;
        width: 50px;
        margin-left: -25px;
        border-radius: 3px;
        transition: 100ms;
        background: #333;
        background: #303030b0;
        text-align: center;
        color: white;
        z-index: 200;
        &:after {
            content: "";
            height: 0px;
            width: 0px;
            position: absolute;
            bottom: -14px;
            left: 50%;
            margin-left: -7px;
            border-width: 7px;
            border-style: solid;
            border-color: #333 transparent transparent transparent;
            border-color: #303030b0 transparent transparent transparent;
        }
    }
    .key-timestamp {
        height: 20px;
        width: 6px;
        margin-left: -3px;
        background: #00a0a0a0;
        position: absolute;
        top: -6px;
        z-index: 100;
        &:hover {
            width:8px;
            margin-left: -4px;
        }
    }
}

</style>
