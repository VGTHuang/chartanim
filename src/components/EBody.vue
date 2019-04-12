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
                        <text-editor label="project name" :mutateValue="projectName" commitName="setProjectName" />
                    </div>
                    <div class="msg-ctn">
                        <div class="msg-row st-basic">Canvas size</div>
                        <number-editor label="canvas height" :mutateValue="canvasHeight" min="20" max="1000" commitName="resizeCanvasHeight" />
                        <number-editor label="canvas width" :mutateValue="canvasWidth" min="20" max="1500" commitName="resizeCanvasWidth" />
                    </div>
                    <div class="msg-ctn">
                        <div class="msg-row st-basic">Canvas background color</div>
                        <color-editor label="background color" :mutateValue="backgroundColor" commitName="setCanvasBackground" />
                    </div>
                </div>
                <div mainkey="templates" v-show="selectedPanel ==='templates'">
                    <div class="msg-ctn">
                        <div class="msg-row lt-basic">Templates</div>
                    </div>
                    <div class="msg-ctn">
                        <div class="msg-row st-basic">Local templates</div>
                        <div class="msg-row templates-ctn">
                            <div class="template-block" v-for="(v, k) in localCharts" :key="k" @click="loadTemplate(k)">
                                <div class="template-thumbnail">
                                </div>
                                <div class="template-name">
                                    {{v.name}}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div id="canvas-background">
            <div id="canvas" :style="{height: canvasHeightPx, width: canvasWidthPx, background: canvasBackgroundColor}">
                <div>this is the canvas</div>
            </div>
        </div>
        <basic-modal v-if="modalTrigger">
            <div class="msg-ctn">
                <div class="lt-basic msg-row">{{chosenTemplate && chosenTemplate.info.name?chosenTemplate.info.name:"Sorry"}}</div>
                <div class="msg-basic msg-row" :class="{'msg-alert': !chosenTemplate}">
                    {{chosenTemplate && chosenTemplate.info.description?chosenTemplate.info.description:"This template is unavailable at the moment"}}
                </div>
                <div class="msg-basic msg-s msg-row" v-if="chosenTemplate">
                    <i>By {{chosenTemplate && chosenTemplate.info.author?chosenTemplate.info.author:""}}</i>
                </div>
            </div>
            <div class="msg-ctn">
                <button class="btn-basic" @click="applyTemplate" :disabled="!chosenTemplate">apply</button>
                <button class="btn-basic" @click="modalTrigger=false">close</button>
            </div>
        </basic-modal>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { rgbToString } from '@/mixins/methods.js'
import { localCharts, loadCharts } from '@/assets/chart_templates'

export default {
    name: 'EBody',
    data() {
        return {
            localCharts: localCharts,
            sideToggle: true,
            modalTrigger: false,
            chosenTemplate: {}
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
        },
        loadTemplate(templateKey) {
            loadCharts(templateKey).then(modulejs => {
                console.log('loaded')
                this.modalTrigger = true
                this.chosenTemplate = modulejs
            }).catch(() => {
                console.log('not loaded')
                this.modalTrigger = true
                this.chosenTemplate = null
            })
        },
        applyTemplate() {
            console.log('applied')
            this.modalTrigger = false
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
.templates-ctn {
    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    .template-block {
        margin-top: 10px;
        height: 100px;
        width: 100px;
        position: relative;
        overflow: hidden;
        .template-thumbnail {
            height: 100%;
            width: 100%;
            background: green;
        }
        .template-name {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: red;
            transform: translateY(30%);
            transition: 200ms;
        }
        &:hover {
            .template-name {
                transform: translateY(0);
            }
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
