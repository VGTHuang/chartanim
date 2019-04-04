<template>
    <modal name="data-editor-modal"
    :scrollable="true"
    height="auto"
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
                <select id="select-time">
                    <option value="1">timestamped</option>
                    <option value="2">non-timestamped</option>
                </select>
                <div ref="tableDisplayEdit"></div>
                <div ref="tableValidityCtn">{{dataValidityMsg}}</div>
                <button class="basic-btn" :disabled="!isDataValid">confirm</button>
                <button class="basic-btn alert-btn">clear table</button>
            </div>
        </div>
    </modal>
</template>

<script>
import readXlsxFile from "read-excel-file";
import {validateTable} from "../../assets/js/methods.js";

export default {
    name: "DataEditorModal",
    data: function() {
        return {
            file: "",
            rows: "",
            table: "",
            isDataValid: true
        }
    },
    computed: {
        dataValidityMsg() {
            return this.isDataValid?"valid data":"invalid data";
        }
    },
    methods: {
        handleFileUpload: function() {
            this.file = this.$refs.submitFile.files[0];
            readXlsxFile(this.file).then((rows) => {
                this.rows = rows;
                var validateReturn = validateTable(rows);
                this.$refs.tableDisplayEdit.innerHTML = validateReturn.table;
                this.isDataValid = validateReturn.validStatus;
            }).catch((err) => {
                this.$refs.tableDisplayEdit.innerHTML = `<div class="alert">Incorrect format; only support .xlsx format</div>`
            });
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
