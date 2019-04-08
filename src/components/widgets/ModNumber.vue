<template>
    <div class="msg-row msg-row-space-between">
        <label v-if="label !== undefined">{{label}}</label>
        <input type="number" :min="minNum" :max="maxNum" @change="$emit('changed', val)" v-model="val" style="width: 120px">
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        initNum: Number,
        minNum: Number,
        maxNum: Number
    },
    data: function() {
        return {
            val: 0
        }
    },
    created: function() {
        this.val = this.initNum;
    }
}
</script>
