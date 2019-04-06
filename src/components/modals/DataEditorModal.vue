<template>
    <modal name="data-editor-modal"
    height="600"
    width="650"
    >
        <div class="custom-modal">
            <div class="lp-main-item">
                <h1>Data editor</h1>
            </div>
            <div class="lp-main-item">
                <h4>Open an existing file</h4>
                <div id="dropZone" ref="dropZone">Drop your .xlsx file here<br/>(only the first sheet will be processed)</div>
                <div>
                    or
                    <input type="file" id="submitFile" ref="submitFile" @change="handleFileUpload"/>
                </div>
            </div>
            <div class="lp-main-item">
                <form>
                    <input name="change-ts" type="radio" @change="changeTimestamp(true)" checked>timestamped
                    <input name="change-ts" type="radio" @change="changeTimestamp(false)">non-timestamped
                </form>
                <div ref="tableDisplayAndEdit">
                    <DataTable @click="console.log(123)" :editable="false" :isTimestamped="isTimestamped"/>
                </div>
                <div ref="tableValidityCtn">{{dataValidityMsg}}</div>
                <button class="basic-btn" :disabled="!isDataValid">confirm</button>
                <button class="basic-btn alert-btn" @click="clearTable">clear table</button>
            </div>
        </div>
    </modal>
</template>

<script>
import readXlsxFile from "read-excel-file";
import DataTable from "../DataTable.vue";
import {validateTable} from "../../assets/js/methods.js";

export default {
    name: "DataEditorModal",
    components: {
        DataTable
    },
    data: function() {
        return {
            file: "",
            rows: "",
            table: "",
            isDataValid: true,
        }
    },
    computed: {
        dataValidityMsg() {
            return this.isDataValid?"valid data":"invalid data";
        },
        isTimestamped: {
            get() { return this.$store.state.tableParams.isTimestamped; },
            set(val) { this.$store.commit("setTimestampedStatus", val) }
        },
    },
    methods: {
        handleFileUpload: function() {
            console.log("file uploaded");
        },
        changeTimestamp: function(value) {
            this.isTimestamped = value;
        },
        clearTable: function() {

        }
    }
}
</script>

<style lang="scss">
@import "../scss/_variables.scss";

#dropZone {
    box-sizing: border-box;
    height: 60px;
    border: 3px dashed $mgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: $mgrey;
    font-size: 1.2em;
    font-weight: bold;
}

table {
    .valid-data {
        color: black;
    }
    .invalid-data {
        color: red;
    }
}

</style>
