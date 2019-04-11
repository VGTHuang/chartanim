<template>
    <div id="left-panel-ctn" class="panel-basic">
        <div id="lp-toggle-bar" class="panel-basic panel-border-r" @click="ccc">{{lpToggleIcon}}</div>
        <div id="lp-main" v-show="lpShow" class="panel-basic">
            <div id="lp-main-tabs">
                <ul>
                    <li v-for="(value, key) in lpOptions" :key="key" :class="{selected: editorParams.selectedLp===key}" @click="editorParams.selectedLp = key">
                        <img class="lp-option-img" :src="value.img">
                    </li>
                </ul>
                
            </div>
            <div id="lp-main-bd" class="panel-basic panel-border-r" ref="lpMainBody">
                <LpCanvasModifier v-show="editorParams.selectedLp==='LpCanvasModifier'"/>
                <LpTemplateSelector v-show="editorParams.selectedLp==='LpTemplateSelector'" @newChartAdded="addChartToLeftPanel"/>
                <LpTemplateModifier
                    v-for="(v, k) in chartList"
                    :key="k"
                    :chartKey="k"
                />
            </div>
        </div>
    </div>
</template>

<script>
import LpCanvasModifier from "./LpCanvasModifier.vue";
import LpTableModifier from "./LpTableModifier.vue";
import LpTemplateSelector from "./LpTemplateSelector.vue";
import LpTemplateModifier from "./LpTemplateModifier.vue";
import LpTest from "./LpTest.vue";
import { mapState } from "vuex";
import Vue from "vue";

export default {
    name: "LeftPanel",
    components: {
        LpCanvasModifier,
        LpTableModifier,
        LpTemplateSelector,
        LpTemplateModifier,
        LpTest
    },
    data: function() {
        return {
            lpToggleIcon: '◀',
            lpShow: true,
            lpOptions: {
                "LpCanvasModifier": {img: require("@/assets/lp_option_elements.svg"), comp: "LpCanvasModifier"},
                "LpTemplateSelector": {img: require("@/assets/lp_option_grid.svg"), comp: "LpTemplateSelector"},
            },
        }
    },
    computed: {
        ...mapState({
            chartList: state => state.chartList,
            editorParams: state => state.editorParams,
        }),
    },
    methods: {
        ccc: function() {
            if(this.lpShow) {
                this.lpToggleIcon = '▶';
            }
            else {
                this.lpToggleIcon = '◀';
            }
            this.lpShow = !this.lpShow;
        },
        addChartToLeftPanel: function(chartKey) {
            // console.log(chartKey);
            this.$set(this.lpOptions, chartKey, {
                img: this.chartList[chartKey].info.thumbnail,
                comp: "LpTemplateModifier"
            });

            //this.$refs.lpMainBody.innerHTML += `<LpTemplateModifier :key=${chartKey} v-if="editorParams.selectedLp===${chartKey}" />`;
        }
    }
}
</script>

<style lang="scss" scoped>

#left-panel-ctn {
    display: flex;
    height: 100%;
}
#lp-toggle-bar {
    height: 100%;
    width: .9em;
    display: flex;
    align-items: center;
    text-align: center;
    user-select: none;
    cursor: pointer;
}
#lp-main {
    display: flex;
    #lp-main-tabs {
        background: $ddgrey;
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            padding-top: 10px;
            li {
                margin: 0px 0 10px;
                height: 50px;
                width: 50px;
                box-sizing: border-box;
                .lp-option-img {
                    height: 50px;
                    width: 50px;
                }
                &:hover {
                    background: $dgrey;
                }
            }
            .selected {
                background: $dgrey;
            }
        }
    }
    #lp-main-bd {
        float: left;
        height: 100%;
        width: 280px;
        padding: 0;
        overflow-y: scroll;
        position: relative;
        &::-webkit-scrollbar {
            position: absolute;
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: $ddgrey;
        }
        
    }
}
</style>
