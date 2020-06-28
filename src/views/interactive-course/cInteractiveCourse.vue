<template>
  <div class="page">
    <MonacoEditor
      class="editor"
      v-model="code"
      theme="vs-dark"
      language="javascript"
      @change="onChange"
    />
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";

export default {
  components: {
    MonacoEditor
  },

  data() {
    return {
      code: "const noop = () => {}"
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    }
  }
};
</script>

<style>
.page {
  padding: 0.1px;
}

.editor {
  margin: 10% auto;
  width: 1000px;
  height: 500px;
}
</style>
