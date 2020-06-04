<template>
  <div class="course">
    <img class="course__image" src="@/assets/images/html5.png" alt="html5" />
    <h3 class="course__heading">HTML5 & CSS3</h3>
    <div class="course__description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rerum
      error excepturi, dicta facere eveniet eum consectetur similique cum sunt.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.course {
  padding: 20px 10px;
  height: 300px;
  width: 300px;
  color: #33334f;
  border: 5px solid #f1f0f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: 300ms ease-in-out;
}

.course:hover {
  background-color: #f1f0f2;
  transition: 300ms ease-in-out;
}

.course__image {
  margin-bottom: 10px;
  width: 50%;
  height: auto;
}

.course__heading {
  font-size: 1.7vw;
}

.course__description {
  font-size: 0.7vw;
}
</style>
