<template>
    <div id="center-panel">
        <div id="main-canvas" :style="setCanvas">
            
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { rgbToString } from "../mixins/methods.js";

export default {
    name: "CenterPanel",
    data: function() {
        return {
            
        }
    },
    computed: {
        ...mapState({
            canvasParams: state => state.canvasParams
        }),
        setCanvas: function() {
            return {
                height: this.canvasParams.layout.canvasHeight+"px",
                width: this.canvasParams.layout.canvasWidth+"px",
                background: rgbToString(this.canvasParams.background)
            }
        },
    },
    methods: {
        
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
</style>
