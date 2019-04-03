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
                <div class="lp-main-item">
                    <h3>Item1</h3>
                    <div>content is asdfasdf</div>
                </div>
                <div class="lp-main-item">
                    <h3>Item2</h3>
                    <div>some other item</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "LeftPanel",
    components: {
    },
    data: function() {
        return {
            lpToggleIcon: '◀',
            lpShow: true,
            lpSelected: 0,
            lpOptions: {
                "lp_option_elements": {img: require("../assets/lp_option_elements.svg"), comp: "Comp2", selected: true},
                "lp_option_grid": {img: require("../assets/lp_option_grid.svg"), comp: "Comp1", selected: false},
                "lp_option_animation": {img: require("../assets/lp_option_animation.svg"), comp: "Comp3", selected: false},
                "lp_option_export": {img: require("../assets/lp_option_export.svg"), comp: "Comp4", selected: false}
            }
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
    #lp-main-ic {
        float: left;
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
        box-sizing: border-box;
        float: left;
        height: 100%;
        width: 230px;
        padding: 0 5px 0;
        background: $dgrey;
        .lp-main-item {
            border-bottom: 1px solid $mgrey;
            padding: 10px 0 10px;
            h1, h2, h3 {
                margin: 0;
                font-size: 1em;
            }
        }
    }
}
</style>
