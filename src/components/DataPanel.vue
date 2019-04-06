<template>
<div id="data-panel">

    <SheetSyntaxModal/>
    <DataEditorModal/>

    <div class="lp-main-item">
        <h3>Data Editor</h3>
    </div>
    <div class="lp-main-item">
        <h4>Project Name</h4>
        <input type="text" v-model="pname">
    </div>
    <div class="lp-main-item">
        <h4>Table</h4>
        <button class="basic-btn" @click="showSyntax()">syntax guidance</button>
        <button class="basic-btn" @click="showDataEditor()">open data editor</button>
        <DataTable @click="console.log(123)" :editable="false" :isTimestamped="isTimestamped"/>
    </div>
</div>
</template>

<script>
import SheetSyntaxModal from "./modals/SheetSyntaxModal.vue";
import DataEditorModal from "./modals/DataEditorModal.vue";
import DataTable from "./DataTable.vue";
import { mapState } from "vuex";

export default {
    name: "DataPanel",
    components: {
        SheetSyntaxModal,
        DataEditorModal,
        DataTable
    },
    data: function() {
        return {
            
        }
    },
    computed: {
        ...mapState({
            projectName: state => state.projectName,
            tableData: state =>state.tableParams.tableData,
            isTimestamped: state => state.tableParams.isTimestamped
        }),
        pname: {
            set(val) {
                this.$store.commit("setProjectName", val);
            },
            get() {
                return this.projectName;
            }
        }
    },
    methods: {
        showSyntax: function() {
            this.$modal.show('sheet-syntax-modal');
        },
        showDataEditor: function() {
            this.$modal.show('data-editor-modal');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
