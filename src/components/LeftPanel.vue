<template>
    <div id="left-panel-ctn" class="panel-basic">
        <div id="lp-toggle-bar" class="panel-basic panel-border-r" @click="ccc">{{lpToggleIcon}}</div>
        <div id="lp-main" v-show="lpShow" class="panel-basic">
            <div id="lp-main-ic">
                <ul>
                    <li v-for="(value, key) in lpOptions" :key="key" :class="{selected: value.selected}" @click="switchOptions(key)">
                        <img class="lp-option-img" :src="value.img">
                    </li>
                </ul>
            </div>
            <div id="lp-main-bd" class="panel-basic panel-border-r">
                <keep-alive>
                    <component v-bind:is="lpCurrentPanel"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import DataPanel from "./DataPanel.vue";
import TestPanel from "./TestPanel.vue";

export default {
    name: "LeftPanel",
    components: {
        DataPanel,
        TestPanel
    },
    data: function() {
        return {
            lpToggleIcon: '◀',
            lpShow: true,
            lpSelected: 0,
            lpOptions: {
                "lp_option_data": {img: require("../assets/lp_option_elements.svg"), comp: "DataPanel", selected: true},
                "lp_option_elements": {img: require("../assets/lp_option_elements.svg"), comp: "TestPanel", selected: false},
                "lp_option_grid": {img: require("../assets/lp_option_grid.svg"), comp: "TestPanel", selected: false},
                "lp_option_animation": {img: require("../assets/lp_option_animation.svg"), comp: "TestPanel", selected: false},
                "lp_option_export": {img: require("../assets/lp_option_export.svg"), comp: "TestPanel", selected: false}
            },
            lpCurrentPanel: "DataPanel"
        }
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
        switchOptions: function(cur) {
            for(var key in this.lpOptions) {
                this.lpOptions[key].selected = false;
            }
            this.lpOptions[cur].selected = true;
            this.lpCurrentPanel = this.lpOptions[cur].comp;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./scss/_variables.scss";

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
    #lp-main-ic {
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            padding-top: 10px;
            height: 100%;
            background: $ddgrey;
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
    }
}
</style>
