<template>
<div id="test-panel">
    <div class="msg-ctn">
        <div class="lt-basic msg-row">canvas panel</div>
    </div>
    <div class="msg-ctn">
        <div class="mt-basic msg-row">Size</div>
        <ModNumber label="Height" :initNum="ch.init" :minNum="ch.min" :maxNum="ch.max" @changed="canvasParams.layout.canvasHeight = $event"/>
        <ModNumber label="Width" :initNum="cw.init" :minNum="cw.min" :maxNum="cw.max" @changed="canvasParams.layout.canvasWidth = $event"/>
    </div>
    <div class="msg-ctn">
        <div class="mt-basic msg-row">Background color</div>
        <ModColor label="Background Color" :initRGB="canvasParams.background" @changed="canvasParams.background = $event"/>
    </div>
</div>
</template>

<script>
import ModNumber from "./widgets/ModNumber.vue";
import ModColor from "./widgets/ModColor.vue";
import { mapState } from "vuex";

export default {
    components: {
        ModNumber,
        ModColor
    },
    data: function() {
        return {
            cw: {init: 600, min: 100, max: 5000},
            ch: {init: 400, min: 100, max: 5000},
        }
    },
    computed: {
        ...mapState({
            canvasParams: state => state.canvasParams
        })
    },
    methods: {
    }
}
</script>
