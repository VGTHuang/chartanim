<template>
    <div id="chart-editor-ctn">
        <div id="panels-canvas-ctn">
            <HeaderPanel :projectName="as"></HeaderPanel>
            <main id="chart-editor-main">
                <LeftPanel></LeftPanel>
            </main>
            <FooterPanel>footer</FooterPanel>
        </div>
    </div>
</template>

<script>
import HeaderPanel from "./HeaderPanel.vue";
import LeftPanel from "./LeftPanel.vue";
import FooterPanel from "./FooterPanel.vue";

export default {
    components: {
        HeaderPanel,
        LeftPanel,
        FooterPanel
    },
    
    data: function() {
        return {
            as: "asd"
        }
    }
}
</script>

<style lang="scss">
@import "./scss/_variables.scss";

#chart-editor-ctn {
    color: white;
    overflow: visible;
    height: 100%;
    min-height: 100%;
}
#panels-canvas-ctn {
    position: relative;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
}
#chart-editor-main {
    flex: 1;
    background: $xdgrey;
    display: flex;
}
// general
.basic-panel {
    background: $dgrey;
}
.basic-btn {
    border: 1px solid $xdgrey;
    border-radius: 3px;
    height: 1.6em;
    background-image: linear-gradient($mgrey, $dgrey);
    color: $xlgrey;
    text-shadow: -1px -1px 0 $dgrey;
    font-family: inherit;
    &:hover {
        background-image: linear-gradient($dgrey, $xdgrey);
        text-shadow: -1px -1px 0 $xdgrey;
    }
}
.basic-info {
    font-size: .9em;
    color: $lgrey;
}
.basic-span {
    margin: 0 5px 0;
}
.basic-hr {
    color: red;
}
.basic-vr {
    content: "";
    display: inline-block;
    height: 2.5em;
    width: 0;
    margin: 0 5px 0;
    border-left: 1px solid $mgrey;
    border-right: 1px solid $xdgrey;
}

</style>
