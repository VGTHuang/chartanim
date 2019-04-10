<template>
    <div id="center-panel">
        <div id="main-canvas" :style="{ height: canvasParams.layout.canvasHeight + 'px', 
                                        width: canvasParams.layout.canvasWidth+'px',
                                        background: bgcolor
                                    }">
            <ChartContainer v-for="(value, key) in chartList" :key="key" :chartKey="key">thingsintheslot</ChartContainer>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { rgbToString } from "@/mixins/methods.js";

export default {
    name: "CenterPanel",
    data: function() {
        return {
        }
    },
    computed: {
        ...mapState({
            canvasParams: state => state.canvasParams,
            chartList: state => state.chartList,
        }),
        bgcolor() {
            return rgbToString(this.canvasParams.background);
        }
    },
    created: function() {
    }
}
</script>

<style lang="scss" scoped>

#center-panel {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#main-canvas {
    display: block;
    position: relative;
    color: black;
    background: white;
    box-shadow: 0 5px 10px $xdgrey;
    
}
</style>
