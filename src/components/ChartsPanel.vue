<template>
<div id="table-panel">
    <div class="msg-ctn">
        <div class="lt-basic msg-row">charts panel</div>
    </div>
    <div class="msg-ctn">
        <div class="mt-basic msg-row">static charts</div>
        <div class="msg-row charts-ctn">
            <div class="chart-c">
                <div>img</div>
                <label>chart nasdfgsdfsdfme</label>
            </div>
            <div class="chart-c">
                <div>img</div>
                <label>chart name</label>
            </div>
            <div class="chart-c">
                <div>img</div>
                <label>chart name</label>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "ChartsPanel",
    data: function() {
        return {
            
        }
    },
    computed: {
        ...mapState({
            
        }),
        
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.charts-ctn {
    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    .chart-c {
        height: 120px;
        width: 120px;
        box-sizing: border-box;
        background: green;
        margin-bottom: 15px;
        div {
            height: 100px;
            width: 120px;
            clear: both;
            background: url("../assets/charts-thumbnail.jpg") no-repeat;
        }
        label {
            display: block;
            height: 20px;
            width: 120px;
            background: red;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
}

.sprite {
    background: url("../assets/charts-thumbnail.jpg") no-repeat;
}
</style>
