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
        <table>
            <thead>
                <tr>
                    <th>asda</th>
                    <th>rtue</th>
                    <th>uewe</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>123</td>
                    <td>456</td>
                    <td>789</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>456</td>
                    <td>789</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>456</td>
                    <td>789</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import SheetSyntaxModal from "./modals/SheetSyntaxModal.vue";
import DataEditorModal from "./modals/DataEditorModal.vue";
import { mapState } from "vuex";

export default {
    name: "DataPanel",
    components: {
        SheetSyntaxModal,
        DataEditorModal
    },
    data: function() {
        return {
            
        }
    },
    computed: {
        ...mapState({
            projectName: state => state.projectName
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
