<template>
    <div class="msg-row msg-row-space-between col-ctn">
        <div class="background" v-if="show" @click="closeColModal"></div>
        <label v-if="label !== undefined">{{label}}</label>
        <div class="col-d" :style="{background: myval}" @click="showColModal">
        </div>
        <div class="col-dialog-box" v-if="show">
                <div class="col-dialog-box-row">
                    <div class="col-dialog-palette" v-for="(v,i) in palettes" :key="i" :style="{background: v}"></div>
                </div>
                <div class="col-dialog-box-row">
                    <label>red</label>
                    <input type="range" min="0" max="255" v-model="tempRGB.r"/>
                    <input type="number" min="0" max="255" v-model="tempRGB.r"/>
                </div>
                <div class="col-dialog-box-row">
                    <label>green</label>
                    <input type="range" min="0" max="255" v-model="tempRGB.g"/>
                    <input type="number" min="0" max="255" v-model="tempRGB.g"/>
                </div>
                <div class="col-dialog-box-row">
                    <label>blue</label>
                    <input type="range" min="0" max="255" v-model="tempRGB.b"/>
                    <input type="number" min="0" max="255" v-model="tempRGB.b"/>
                </div>
                <div class="col-dialog-box-row">
                    <label>alpha</label>
                    <input type="range" min="0" max="1" step="0.05" v-model="tempRGB.a">
                    <input type="number" min="0" max="1" step="0.05" v-model="tempRGB.a"/>
                </div>
                <div class="col-dialog-box-row">
                    <div>
                        <div class="col-d" :style="{background: myval}"></div>
                        <div class="col-d" :style="{background: tempval}"></div>
                    </div>
                    <button class="btn-basic" @click="submitCol">OK</button>
                </div>
            </div>
    </div>
</template>

<script>
import { rgbToString } from "../../mixins/methods.js";
import { mapState } from "vuex";

export default {
    props: {
        label: String,
        initRGB: Object,
    },
    data: function() {
        return {
            show: false,
            myRGB: {r: 0, g: 0, b: 0, a: 0},
            tempRGB: {r: 0, g: 0, b: 0, a: 0},
            myHSL: {}
        }
    },
    created: function() {
        [this.myRGB.r, this.myRGB.g, this.myRGB.b, this.myRGB.a] = [this.initRGB.r, this.initRGB.g, this.initRGB.b, this.initRGB.a];
        [this.tempRGB.r, this.tempRGB.g, this.tempRGB.b, this.tempRGB.a] = [this.initRGB.r, this.initRGB.g, this.initRGB.b, this.initRGB.a];
    },
    computed: {
        ...mapState({
            palettes: state => state.editorParams.templatePalettes,
        }),
        tempval: function() {
            return rgbToString(this.tempRGB);
        },
        myval: function() {
            return rgbToString(this.myRGB);
        }
    },
    methods: {
        closeColModal: function() {
            this.show = false;
        },
        showColModal: function() {
            this.tempRGB.r = this.myRGB.r;
            this.tempRGB.g = this.myRGB.g;
            this.tempRGB.b = this.myRGB.b;
            this.tempRGB.a = this.myRGB.a;
            this.show = true;
        },
        submitCol: function() {
            this.myRGB.r = this.tempRGB.r;
            this.myRGB.g = this.tempRGB.g;
            this.myRGB.b = this.tempRGB.b;
            this.myRGB.a = this.tempRGB.a;
            this.show = false;
            this.$emit("changed", this.myRGB);
        }
    }
}
</script>

<style lang="scss" scoped>

.col-ctn {
    position: relative;
}
.col-d {
    position: relative;
    border: 1px solid black;
    height: 1em;
    width: 6em;
    background: black;
    cursor: pointer;
}
.background {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 400;
}
.col-dialog-box {
    display: block;
    position: absolute;
    top: 1.3em;
    left:0;
    padding: 10px;
    //min-height: 150px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: $dgrey;
    box-shadow: 0 0 5px $xdgrey;
    z-index: 500;
    cursor: default;
    .col-dialog-box-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        label {
            width: 50px;
        }
        input[type="range"] {
            width: 130px;
        }
        input[type="number"] {
            width: 60px;
            border: none;
        }
        .col-dialog-palette {
            height: 10px;
            width: 10px;
            border: 1px solid black;
        }
    }
}
</style>
