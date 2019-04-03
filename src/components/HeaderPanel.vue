<template>
    <div id="top-panel-ctn" class="basic-panel">
        <div id="hp-left">
            <div id="hp-proj-name" class="basic-span"><span id="hp-proj-b">CHARTANIM</span>/project name</div>
            <div class="basic-vr"></div>
            <div id="hp-create-btn">
                <button class="basic-btn basic-span">Create/Edit Your Data</button>
            </div>
            <div><span class="basic-span">OR</span></div>
            <div id="hp-upload-btn">
                <button class="basic-btn basic-span">Import Local File</button>
                <span class="basic-info basic-span">File path here</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderPanel",
    components: {
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
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $mgrey;
    #hp-left {
        display: flex;
        align-items: center;
    }
}
#hp-proj-name {
    color: $lgr;
    margin-left: .5em;
    #hp-proj-b {
        margin: 0;
        font-size: 1.2em;
        font-weight: bold;
        letter-spacing: .2em;
    }
}
</style>
