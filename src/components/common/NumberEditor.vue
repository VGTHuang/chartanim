<template>
    <div class="msg-row msg-row-space-between">
        <label v-if="label !== undefined">{{label}}</label>
        <input type="number" v-model="value">
        <div style="color: red">{{alertMessage}}</div>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        chartID: String,
        mutateValue: Number,
        commitName: String,
        min: String,
        max: String
    },
    data() {
        return {
            alertMessage: "",
            nmin: +this.min,
            nmax: +this.max
        }
    },
    computed: {
        value: {
            get() { return this.mutateValue },
            set(value) {
                if(this.nmin && value < this.nmin) {
                    this.alertMessage = "Must >= " + this.min
                }
                else if (this.nmax && value > this.nmax) {
                    this.alertMessage = "Must <= " + this.max
                }
                else {
                    this.alertMessage = ""
                    this.$store.commit(this.commitName?this.commitName:"setChartValue", { chartID: this.chartID, mutateValue: value })
                }
            }
        }
    },
}
</script>
