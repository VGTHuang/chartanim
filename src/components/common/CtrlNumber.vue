<template>
    <div class="msg-row msg-row-space-between">
        <label v-if="label !== undefined">{{label}}</label>
        <input type="number" :min="minNum" :max="maxNum" :value="val" @change="$emit('change', parseFloat($event.target.value))" @mousewheel="scroll" style="width: 120px">
    </div>
</template>

<script>
export default {
    model: {
        prop: "val",
        event: "change"
    },
    props: {
        label: String,
        minNum: Number,
        maxNum: Number,
        val: Number
    },
    methods: {
        scroll(e) {
            e.deltaY >= 0 ? this.$emit('change', this.val-1<this.minNum?this.val:this.val-1) : this.$emit('change', this.val+1>this.maxNum?this.val:this.val+1);
        }
    }
    
}
</script>
