<template>
  <div id="app">
    <ChartEditor></ChartEditor>
  </div>
</template>

<script>
import ChartEditor from './components/ChartEditor.vue'

export default {
  name: 'app',
  components: {
    ChartEditor
  },
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
