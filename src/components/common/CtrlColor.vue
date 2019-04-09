<template>
    <div class="msg-row msg-row-space-between col-ctn">
        <label v-if="label !== undefined">{{label}}</label>
        <div class="col-d" :style="{background: propVal}" @click="show=true">
            <div class="col-dialog-box" v-if="show" @mouseleave="confirmChange">
                <div class="col-dialog-box-row">
                    <div class="col-dialog-palette" v-for="(v,i) in palettes" :key="i" :style="{background: v}"></div>
                </div>
                <div class="col-dialog-box-row">
                    <label style="color: red">red</label>
                    <input type="range" min="0" max="255" v-model="initRGB.r"/>
                    <input type="number" min="0" max="255" v-model="initRGB.r"/>
                </div>
                <div class="col-dialog-box-row">
                    <label style="color: green">green</label>
                    <input type="range" min="0" max="255" v-model="initRGB.g"/>
                    <input type="number" min="0" max="255" v-model="initRGB.g"/>
                </div>
                <div class="col-dialog-box-row">
                    <label style="color: blue">blue</label>
                    <input type="range" min="0" max="255" v-model="initRGB.b"/>
                    <input type="number" min="0" max="255" v-model="initRGB.b"/>
                </div>
                <div class="col-dialog-box-row">
                    <label>alpha</label>
                    <input type="range" min="0" max="1" step="0.05" v-model="initRGB.a">
                    <input type="number" min="0" max="1" step="0.05" v-model="initRGB.a"/>
                </div>
                <div class="col-dialog-box-row">
                    <div>
                        <div class="col-d" :style="{background: myval}"></div>
                        <div class="col-d" :style="{background: propVal}"></div>
                    </div>
                    <button class="btn-basic" @click="cancelChange">cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { rgbToString } from "@/mixins/methods.js";
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
        }
    },
    created: function() {
        [this.myRGB.r, this.myRGB.g, this.myRGB.b, this.myRGB.a] = [this.initRGB.r, this.initRGB.g, this.initRGB.b, this.initRGB.a];
    },
    computed: {
        ...mapState({
            palettes: state => state.editorParams.templatePalettes,
        }),
        propVal: function() {
            return rgbToString(this.initRGB);
        },
        myval: function() {
            return rgbToString(this.myRGB);
        }
    },
    methods: {
        confirmChange: function() {
            [this.myRGB.r, this.myRGB.g, this.myRGB.b, this.myRGB.a] = [this.initRGB.r, this.initRGB.g, this.initRGB.b, this.initRGB.a];
            this.show = false;
        },
        cancelChange: function() {
            this.initRGB.r = this.myRGB.r;
            this.initRGB.g = this.myRGB.g;
            this.initRGB.b = this.myRGB.b;
            this.initRGB.a = this.myRGB.a;
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
.col-dialog-box {
    display: block;
    position: absolute;
    top: 1.3em;
    right:0;
    padding: 10px;
    //min-height: 150px;
    width: 230px;
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
            width: 30px;
        }
        input[type="range"] {
            width: 100px;
        }
        input[type="number"] {
            width: 50px;
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
