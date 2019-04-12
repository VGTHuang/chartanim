<template>
    <div id="body-container">
        <div id="side-panel" class="panel-basic">
            <div id="side-panel-toggle" class="panel-basic panel-border-r" @click="sideToggle=!sideToggle">#</div>
            <div id="side-panel-nav" v-show="sideToggle">
                <ul>
                    <li navkey="project" @click="switchPanel" :class="{selected: selectedPanel ==='project'}">project</li>
                    <li navkey="templates" @click="switchPanel" :class="{selected: selectedPanel ==='templates'}">templates</li>
                </ul>
            </div>
            <div id="side-panel-main" class="panel-basic panel-border-r" v-show="sideToggle">
                <div mainkey="project" v-show="selectedPanel ==='project'">
                    <div class="msg-ctn">
                        <div class="msg-row lt-basic">Project</div>
                    </div>
                    <div class="msg-ctn">
                        <div class="msg-row st-basic">Project name</div>
                        <TextEditor label="project name" :mutateValue="projectName" commitName="setProjectName" />
                    </div>
                    <div class="msg-ctn">
                        <div class="msg-row st-basic">Canvas size</div>
                        <NumberEditor label="canvas height" :mutateValue="canvasHeight" min="20" max="1000" commitName="resizeCanvasHeight" />
                        <NumberEditor label="canvas width" :mutateValue="canvasWidth" min="20" max="1500" commitName="resizeCanvasWidth" />
                    </div>
                    <div class="msg-ctn">
                        <div class="msg-row st-basic">Canvas background color</div>
                        <ColorEditor label="background color" :mutateValue="backgroundColor" commitName="setCanvasBackground" />
                    </div>
                </div>
                <div mainkey="templates" v-show="selectedPanel ==='templates'">bbb</div>
            </div>
        </div>
        <div id="canvas-background">
            <div id="canvas" :style="{height: canvasHeightPx, width: canvasWidthPx, background: canvasBackgroundColor}">
                <div>this is the canvas</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { rgbToString } from '@/mixins/methods.js'

export default {
    name: 'EBody',
    data() {
        return {
            sideToggle: true,
            ccc: "setProjectName"
        }
    },
    computed: {
        canvasBackgroundColor() {
            return rgbToString(this.backgroundColor)
        },
        ...mapState({
             projectName: state => state.projectParams.projectName,
             canvasHeight: state => +state.projectParams.layout.height,
             canvasWidth: state => +state.projectParams.layout.width,
             backgroundColor: state => state.projectParams.backgroundColor,
        }),
        canvasHeightPx() {
            return this.canvasHeight+'px'
        },
        canvasWidthPx() {
            return this.canvasWidth+'px'
        },
        selectedPanel() {
            return this.$store.getters.selectedPanel
        }
    },
    methods: {
        switchPanel(event) {
            this.$store.commit('switchPanel', event.currentTarget.getAttribute('navkey'))
        }
    }
}
</script>

<style lang="scss" scoped>

#body-container {
    flex: 1;
    display: flex;
    background: $xdgrey; 
    #side-panel {
        height: 100%;
        display: flex;
        #side-panel-toggle {
            width: 10px;
            user-select: none;
            cursor: pointer;
            &:hover {
                background: $ddgrey;
            }
        }
        #side-panel-nav {
            height: 100%;
            background: $xdgrey;
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                li {
                    width: 50px;
                    user-select: none;
                    cursor: pointer;
                    &:hover {
                        background: $dgrey;
                    }
                }
                .selected {
                    background: $dgrey;
                }
            }
        }
        #side-panel-main {
            width: 250px;
            max-width: 250px;
        }
    }
}
#canvas-background {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    #canvas {
        display: block;
        // position: relative;
        color: black;
        background: white;
        box-shadow: 0 5px 10px $xdgrey;
        
    }
}
</style>
