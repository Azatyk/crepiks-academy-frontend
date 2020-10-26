<template>
  <div id="test-block"></div>
</template>

<script>
export default {
  props: {
    frameCode: {}
  },
  methods: {
    async runCode(frameCode, testFunction, codeHTML, codeCSS) {
      let interactiveFrame = document.getElementById("interactiveFrame");
      let interactiveFrameBody;
      if (interactiveFrame.contentDocument) {
        interactiveFrameBody = interactiveFrame.contentDocument.getElementsByTagName(
          "body"
        )[0];
      } else if (interactiveFrame.contentWindow) {
        interactiveFrameBody = interactiveFrame.contentWindow.getElementsByTagName(
          "body"
        )[0];
      }
      interactiveFrameBody.innerHTML = `${codeHTML}
      <style>${codeCSS}</style>`;

      await this.$emit("get-frame-code"); // получаем верстку из iframe. Frame приходится получать здесь, потому что это должно происходить после того как мы зальем код внутрь фрейма

      // проводим код через функцию тест
      const codeCheckBlock = document.getElementById("test-block");
      // console.log(codeCheckBlock);
      console.log(frameCode);
      codeCheckBlock.innerHTML = frameCode;
      // console.log(codeCheckBlock);
      let generatedTestFunction = new Function("htmlCode", testFunction);
      generatedTestFunction(this.frameCode);
    }
  }
};
</script>

<style lang="scss" scoped></style>
