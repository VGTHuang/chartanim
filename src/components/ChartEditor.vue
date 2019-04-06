<template>
    <div id="chart-editor-ctn">
        <div id="panels-canvas-ctn">
            <HeaderPanel />
            <main id="chart-editor-main">
                <LeftPanel />
                <CenterPanel />
            </main>
            <FooterPanel>footer</FooterPanel>
        </div>
    </div>
</template>

<script>
import HeaderPanel from "./HeaderPanel.vue";
import LeftPanel from "./LeftPanel.vue";
import FooterPanel from "./FooterPanel.vue";
import CenterPanel from "./CenterPanel.vue";

export default {
    components: {
        HeaderPanel,
        LeftPanel,
        CenterPanel,
        FooterPanel
    },
    
    data: function() {
        return {
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
    background: $ddgrey;
    display: flex;
}
// general
.basic-panel {
    background: $dgrey;
}
.basic-btn {
    margin: 0 5px 0;
    border: 1px solid $xdgrey;
    border-radius: 3px;
    height: 1.6em;
    background-image: linear-gradient($mgrey, $dgrey);
    color: $xlgrey;
    text-shadow: -1px -1px 0 $dgrey;
    font-family: inherit;
    &:hover {
        background-image: linear-gradient($dgrey, $xdgrey);
    }
    &:disabled {
        background-image: linear-gradient($dgrey, $xdgrey);
        color: $mgrey;
    }
}
.alert-btn {
    background-image: linear-gradient(#ec3221, #af2d05);
    &:hover {
        background-image: linear-gradient(#c71f10, #640101);
    }
}
.alert {
    color: #ffc15e;
}
.basic-info {
    font-size: .95em;
    color: $lgrey;
    ul, ol {
        margin: 1em;
        padding-left: 1em;
        li {
            margin: .5em 0 .5em;
            padding: 0;
        }
    }
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
.custom-modal {
    background: $dgrey;
    height: 100%;
    width: 100%;
    padding: 0 10px 0;
    overflow-y: scroll;
}
.chart-center {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .annotation {
        font-size: .8em;
        color: $lgrey;
    }
}

</style>
