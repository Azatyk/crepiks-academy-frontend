<script>
import Vue from "vue";
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/eclipse.css";

export default {
  props: {
    theoryText: {
      type: String,
      required: true
    }
  },

  components: {
    codemirror
  },

  data() {
    return {
      compiledTemplate: null
    };
  },

  watch: {
    theoryText() {}
  },

  render(createElement) {
    this.compiledTemplate = Vue.compile(
      "<section><h1>Hello, World!</h1></section>"
    );
    if (this.compiledTemplate) {
      console.log(this.compiledTemplate);
      return this.compiledTemplate.render.call(this, createElement);
    } else return null;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
</style>
