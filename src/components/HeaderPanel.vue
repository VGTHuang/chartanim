<template>
    <div id="top-panel-ctn" class="panel-basic panel-border-b">
        <div id="hp-left">
            <div id="hp-proj-name"><span id="hp-proj-b" class="span-wide">CHARTANIM</span>/ {{projectName}}</div>
            
            <div id="hp-create-btn">
                <button class="btn-basic span-wide">Create/Edit Your Data</button>
            </div>
            <div><span class="msg-basic span-wide">OR</span></div>
            <div id="hp-upload-btn">
                <button class="btn-basic span-wide">Import Local File</button>
                <span class="msg-basic">File path here</span>
            </div>
        </div>
        <div id="hp-right">
            <div class="msg-basic msg-s span-wide"><i>VGTHuang on GitHub</i></div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "HeaderPanel",
    computed: {
        ...mapState({
            projectName: state => state.projectName
        }),
    }
}
</script>

<style lang="scss" scoped>
@import "./scss/_variables.scss";

#top-panel-ctn {
    position: relative;
    width:100%;
    height: 2.5em;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    #hp-left {
        display: flex;
        align-items: center;
    }
}
#hp-proj-name {
    color: $lgr;
    margin-left: .5em;
}
#hp-proj-b {
    margin: 0;
    font-size: 1.3em;
    font-weight: bold;
    letter-spacing: .2em;
    color: $lgr;
    color: transparent;
    text-shadow:   0 0 1px $lgr, -1px -1px 1px $xdgrey, 1px 1px 1px $xlgrey;
}
.span-wide {
    margin: 0 10px;
}
</style>
