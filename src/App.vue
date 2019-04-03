<template>
  <div id="app">
    <div style="color: white">{{projectName}}</div>
    <ChartEditor></ChartEditor>
  </div>
</template>

<script>
import ChartEditor from './components/ChartEditor.vue'
import { mapState } from "vuex";

export default {
  name: 'app',
  components: {
    ChartEditor
  },
  computed: mapState([
    "projectName"
  ]),
}
</script>

<style lang="scss">


body {
  margin: 0;
  padding: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background: black;
}
#app {
  position: absolute;
  height: auto;
  height: 100%;
  min-height: 600px;
  width: 100%;
}

</style>
