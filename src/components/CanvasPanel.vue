<template>
<div id="test-panel">
    <div class="msg-ctn">
        <div class="lt-basic msg-row">canvas panel</div>
    </div>
    <div class="msg-ctn">
        <div class="mt-basic msg-row">Size</div>
        <CtrlNumber label="Height" :minNum="ch.min" :maxNum="ch.max" v-model="canvasParams.layout.canvasHeight"/>
        <CtrlNumber label="Width" :minNum="ch.min" :maxNum="ch.max" v-model="canvasParams.layout.canvasWidth"/>
    </div>
    <div class="msg-ctn">
        <div class="mt-basic msg-row">Background color</div>
        <CtrlColor label="Background Color" :initRGB="canvasParams.background" @changed="canvasParams.background = $event"/>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
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
