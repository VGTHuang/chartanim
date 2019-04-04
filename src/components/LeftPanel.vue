<template>
    <div id="left-panel-ctn">
        <div id="lp-toggle-bar" @click="ccc">{{lpToggleIcon}}</div>
        <div id="lp-main" v-show="lpShow">
            <div id="lp-main-ic">
                <ul>
                    <li v-for="(value, key) in lpOptions" :key="key" :class="{selected: value.selected}" @click="switchOptions(key)">
                        <img class="lp-option-img" :src="value.img">
                    </li>
                </ul>
            </div>
            <div id="lp-main-bd">
                <keep-alive>
                    <component v-bind:is="lpCurrentPanel"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import DataPanel from "./DataPanel.vue";
import DataPanel1 from "./DataPanel1.vue";

export default {
    name: "LeftPanel",
    components: {
        DataPanel,
        DataPanel1
    },
    data: function() {
        return {
            lpToggleIcon: '◀',
            lpShow: true,
            lpSelected: 0,
            lpOptions: {
                "lp_option_data": {img: require("../assets/lp_option_elements.svg"), comp: "DataPanel", selected: true},
                "lp_option_elements": {img: require("../assets/lp_option_elements.svg"), comp: "DataPanel1", selected: false},
                "lp_option_grid": {img: require("../assets/lp_option_grid.svg"), comp: "DataPanel", selected: false},
                "lp_option_animation": {img: require("../assets/lp_option_animation.svg"), comp: "DataPanel", selected: false},
                "lp_option_export": {img: require("../assets/lp_option_export.svg"), comp: "DataPanel", selected: false}
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
    background: $dgrey;
    border-right: 1px solid $mgrey;
    width: .9em;
    display: flex;
    align-items: center;
    text-align: center;
    text-shadow: -1px -2px 0 $dgrey;
    user-select: none;
    cursor: pointer;
}
#lp-main {
    background: $ddgrey;
    max-width: 350px;
    display: flex;
    #lp-main-ic {
        ul {
            list-style: none;
            margin: 0;
            padding:0;
            li {
                margin: 10px 0 10px;
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
        min-width: 200px;
        padding: 0 10px 0;
        background: $dgrey;
        border-right: 1px solid $mgrey;
    }
}
/deep/ .lp-main-item {
    border-bottom: 1px solid $mgrey;
    padding: 10px 0 10px;
    h1, h2, h3 {
        margin: 0;
        font-size: 1.1em;
    }
    h4 {
        margin: 0 0 5px;
        font-size: 1em;
        color: $lgrey;
        &:before {
            content: "";
            display: inline-block;
            height: 8px;
            width: 8px;
            border-radius: 50%;
            margin-right: 5px;
            background: $xlgrey;
        }
    }
    input[type=text] {
        border: 1px solid $lgrey;
        height: 1.7em;
        width: 100%;
        box-sizing: border-box;
    }
    table {
        margin: 10px 0 10px;
        background: #fff;
        color: black;
        border-collapse: collapse;
        th, td {
            box-sizing: border-box;
            border: 1px solid $dgrey;
            font-family: monospace;
            min-width: 3em;
        }
        border: 1px solid $dgrey;
    }
    p {
        font-size: .9em;
    }
}
</style>
