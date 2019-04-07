<template>
<div id="data-panel">

    <SheetSyntaxModal/>
    <DataEditorModal/>

    <div class="msg-ctn">
        <div class="lt-basic msg-row">Data editor</div>
    </div>
    <div class="msg-ctn">
        <div class="mt-basic msg-row">Project Name</div>
        <input type="text" v-model="pname" class="msg-row">
    </div>
    <div class="msg-ctn">
        <div class="mt-basic msg-row">Table</div>
        <div class="msg-row msg-row-center">
            <button class="btn-basic" @click="showSyntax()">syntax guidance</button>
            <button class="btn-basic" @click="showDataEditor()">open data editor</button>
        </div>
        <div class="msg-row msg-row-center">
            <DataTable :editable="false" :isTimestamped="isTimestamped"/>
        </div>
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
