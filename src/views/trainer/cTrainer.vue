<template>
  <div class="trainer-page">
    <div class="trainer__content">
      <div class="card-container">
        <!-- <a-icon type="caret-left" class="trainer__navigation-button" /> -->
        <div class="card">
          <form>
            <div class="card__text">Создайте блок с классом "new-block"</div>
            <a-input size="large" class="card__input" />
          </form>
        </div>
        <!-- <a-icon type="caret-right" class="trainer__navigation-button" /> -->
      </div>
      <a-progress
        :percent="20"
        class="trainer__progress"
        strokeColor="#1e272e80"
      />
    </div>
    <!-- <a-icon
      type="question-circle"
      class="trainer__question"
      @click="isModalActive = true"
    /> -->
    <vs-dialog full-screen blur v-model="isModalActive">
      <div class="theory">
        <h1 class="theory__title">Что такое Git</h1>
        <div class="theory__content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          incidunt sequi iusto autem explicabo minima repellendus. Distinctio,
          est, enim voluptatum obcaecati sequi itaque natus eius possimus labore
          dolorum dolorem laudantium quaerat cum voluptas ab praesentium ducimus
          vero quo? Neque voluptas accusantium dolore. Voluptatibus, maxime. Ad,
          labore non. Cum dolor, ipsa eveniet adipisci iure alias error quia
          dolorem, illum recusandae atque debitis ut, esse tenetur praesentium
          quisquam a vitae inventore labore consectetur aspernatur. Sapiente
          nobis consectetur, assumenda error cupiditate vel doloremque accusamus
          delectus. Unde omnis aspernatur amet ipsa? Beatae numquam tempora
          illum, ex, voluptas impedit nulla eaque facilis, sequi repellendus
          repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati incidunt sequi iusto autem explicabo minima repellendus.
          Distinctio, est, enim voluptatum obcaecati sequi itaque natus eius
          possimus labore dolorum dolorem laudantium quaerat cum voluptas ab
          praesentium ducimus vero quo? Neque voluptas accusantium dolore.
          Voluptatibus, maxime. Ad, labore non. Cum dolor, ipsa eveniet adipisci
          iure alias error quia dolorem, illum recusandae atque debitis ut, esse
          tenetur praesentium quisquam a vitae inventore labore consectetur
          aspernatur. Sapiente nobis consectetur, assumenda error cupiditate vel
          doloremque accusamus delectus. Unde omnis aspernatur amet ipsa? Beatae
          numquam tempora illum, ex, voluptas impedit nulla eaque facilis, sequi
          repellendus repudiandae.
        </div>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
import { Progress, Input } from "ant-design-vue";
import dialog from "vuesax/dist/vsDialog";

export default {
  components: {
    "a-progress": Progress,
    "a-input": Input,
    "vs-dialog": dialog
  },
  data() {
    return {
      isModalActive: false
    };
  }
};
</script>

<style scoped>
.trainer-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trainer__content {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.card-container {
  left: 0;
  right: 0;
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.trainer__navigation-button {
  font-size: 40px;
  cursor: pointer;
  color: #1e272e;
  opacity: 0.5;
  transition: 200ms ease-in-out;
}

.trainer__navigation-button:hover {
  opacity: 1;
  transition: 200ms ease-in-out;
}

.card {
  padding: 40px 50px;
  box-sizing: border-box;
  width: 550px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  color: #1e272e;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px #0000000d;
}

.card__text {
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 400;
}

.card__input {
  width: 100%;
  font-size: 20px;
}

.trainer__progress {
  left: 0;
  right: 0;
  width: 550px;
}

.trainer__question {
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 30px;
  color: #1e272e;
  opacity: 0.5;
  cursor: pointer;
  transition: 200ms ease-in-out;
}

.trainer__question:hover {
  opacity: 1;
  transition: 200ms ease-in-out;
}

.theory {
  padding: 5%;
}

.theory__title {
  margin-bottom: 50px;
  font-size: 50px;
  color: #1e272e;
  font-weight: 700;
}

.theory__content {
  font-size: 30px;
  color: #1e272e;
  font-weight: 300;
}
</style>
