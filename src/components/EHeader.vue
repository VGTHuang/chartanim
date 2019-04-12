<template>
    <div id="header-container" class="panel-basic panel-border-b">
        <div id="header-left">
            <div id="header-project-name"><span id="header-project-app-name" class="span-wide">DummyD3 </span>/ {{projectName}}</div>
        </div>
        <div id="header-right">
            <div class="msg-basic msg-s span-wide"><i>VGTHuang on GitHub</i></div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "EHeader",
    computed: {
        ...mapState({
            projectName: state => state.projectParams.projectName
        })
    }
}
</script>

<style lang="scss" scoped>

#header-container {
    position: relative;
    width:100%;
    height: 2.5em;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    #header-left {
        display: flex;
        align-items: center;
    }
}
#header-project-name {
    color: $lgr;
    margin-left: .5em;
    white-space: nowrap;
}
#header-project-app-name {
    margin: 0;
    font-size: 1.3em;
    font-weight: bold;
    color: $lgr;

    //color: red;
}
.span-wide {
    margin: 0 10px;
    white-space: nowrap;
}
</style>
