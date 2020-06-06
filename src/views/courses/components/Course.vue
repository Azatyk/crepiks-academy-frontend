<template>
  <div class="course">
    <img class="course__image" src="@/assets/images/html5.png" alt="html5" />
    <h3 class="course__heading">HTML5 & CSS3</h3>
    <div class="course__description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rerum
      error excepturi, dicta facere eveniet eum consectetur similique cum sunt.
    </div>
    <cButtonLink route="/empty" text="Перейти к курсу" class="button" />
  </div>
</template>

<script>
import cButtonLink from "@/components/general/cButtonLink";

export default {
  components: {
    cButtonLink
  }
};
</script>

<style>
.course {
  padding: 30px 20px;
  height: auto;
  width: 300px;
  color: #f8f7fc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  background-color: #34495e;
}

.course__image {
  margin-bottom: 10px;
  width: 50%;
  height: auto;
}

.course__heading {
  margin-bottom: 5%;
  font-size: 1.7vw;
}

.course__description {
  margin-bottom: 5%;
  font-size: 0.7vw;
}

.button {
  box-shadow: none !important;
}
</style>
