<template>
    <div>
        <div class="msg-row msg-row-space-between">
            <label v-if="label !== undefined">{{label}}</label>
            <input type="text" v-model="value">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        chartID: String,
        mutateValue: String,
        commitName: String
    },
    computed: {
        value: {
            get() { return this.mutateValue },
            set(value) { this.$store.commit(this.commitName?this.commitName:"setChartValue", { chartID: this.chartID, mutateValue: value }) }
        }
    },
}
</script>

<style scoped>
</style>
