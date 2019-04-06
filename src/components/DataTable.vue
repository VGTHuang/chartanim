<template>
<div id="data-table-ctn">
    <table>

        <thead v-if="isTimestamped">
            <tr>
                <th>time</th>
                <td v-for="timestamp in tableParams.timestamps" :key="timestamp">{{timestamp}}</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="content in tableParams.contents" :key="content.name">
                <th>{{content.name}}</th>
                <td v-for="(record, i) in content.records" :key="i">{{record}}</td>
            </tr>
        </tbody>
        <tfoot>
            <td colspan="10000">{{tableParams.timeCount}} {{isTimestamped?"explicit":"implicit"}} timestamp(s), {{tableParams.contentCount}} content(s).</td>
        </tfoot>

    </table>
</div>
</template>

<script>
import { mapState } from "vuex";
import { constants } from 'fs';

export default {
    name: "DataTable",
    props: {
        editable: Boolean,
        isTimestamped: Boolean
    },
    computed: {
        ...mapState({
            tableParams: state => state.tableParams
        })
    },
    methods: {
    }
}
</script>

<style scoped>
#data-table-ctn {
    max-width: 80%;
    overflow: auto;
}
table {
    margin: 0;
    padding: 0;
}
</style>
