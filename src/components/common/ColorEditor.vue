<template>
    <div>
        <div class="msg-row msg-row-space-between">
            <label v-if="label !== undefined">{{label}}</label>
            <div class="color-editor-display" :style="{background: myColor}"></div>
        </div>
        <div class="msg-row msg-row-column">
            <input type="range" min="0" max="255" step="1" v-model="valueR" @input="mutate">{{valueR}}
            <input type="range" min="0" max="255" step="1" v-model="valueG" @input="mutate">{{valueG}}
            <input type="range" min="0" max="255" step="1" v-model="valueB" @input="mutate">{{valueB}}
            <input type="range" min="0" max="1" step="0.05" v-model="valueA" @input="mutate">{{valueA}}
        </div>
    </div>
</template>

<script>
import { rgbToString } from '@/mixins/methods.js'

export default {
    props: {
        label: String,
        chartID: String,
        mutateValue: Array,
        commitName: String
    },
    data() {
        return {
            valueR: 0,
            valueG: 0,
            valueB: 0,
            valueA: 1
        }
    },
    created() {
        this.valueR = this.mutateValue[0]
        this.valueG = this.mutateValue[1]
        this.valueB = this.mutateValue[2]
        this.valueA = this.mutateValue[3]
    },
    computed: {
        myColor() {
            return rgbToString([this.valueR, this.valueG, this.valueB, this.valueA])
        }
    },
    methods: {
        mutate() {
            this.$store.commit(this.commitName?this.commitName:"setChartValue", {
                chartID: this.chartID,
                mutateValue: [+this.valueR, +this.valueG, +this.valueB, +this.valueA]
            })
        }
    }
}
</script>

<style scoped>
.color-editor-display {
    height: 20px;
    width: 20px;
    border: 1px solid black;
}
</style>
