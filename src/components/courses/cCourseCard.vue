<template>
  <div class="course">
    <div class="main-content">
      <img class="course__image" :src="image" :alt="title" />
      <h3 class="course__heading">{{ title }}</h3>
      <div class="course__lessons-amount">{{ lessonsAmount }} уроков</div>
    </div>
    <s-button @click="$router.push('/app/courses/' + id)" class="course__button"
      >Перейти к курсу</s-button
    >
  </div>
</template>

<script>
import Button from "vuesax/dist/vsButton";
import "vuesax/dist/vuesax.css";

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    lessonsAmount: {
      type: Number,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  components: {
    "s-button": Button
  }
};
</script>

<style scoped>
.course {
  margin-bottom: 5%;
  width: 280px;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px #0000000d;
}

.course:hover .main-content {
  transform: translateY(-1px);
  transition: 300ms ease-in-out;
}

.course:hover .course__button {
  opacity: 1;
  transition: 300ms ease-in-out;
}

.main-content {
  padding: 0.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: translateY(1.2vw);
  transition: 300ms ease-in-out;
}

.course__image {
  margin: auto;
  margin-bottom: 1vw;
  width: 90px;
  height: 90px;
  border-radius: 50%;
}

.course__heading {
  margin-bottom: 5%;
  font-size: 22px;
  color: #516f8c;
  font-weight: 300;
  text-align: center;
}

.course__lessons-amount {
  margin-bottom: 1vw;
  font-size: 17px;
  color: #516f8c;
  font-weight: 400;
  text-align: center;
}

.course__button {
  padding: 0 7%;
  height: 35px;
  font-size: 15px;
  opacity: 0;
  transition: 300ms ease-in-out;
}

@media (max-width: 1400px) {
  .course {
    width: 210px;
    height: 220px;
  }

  .course__image {
    width: 70px;
    height: 70px;
  }

  .course__heading {
    margin-bottom: 0px;
    font-size: 18px;
  }

  .course__lessons-amount {
    font-size: 13px;
  }

  .course__button {
    height: 28px;
    font-size: 12px;
  }
}

@media (max-width: 1024px) {
  .course {
    width: 27vw;
    height: 28vw;
  }

  .main-content {
    transform: translateY(-8px);
  }

  .course__image {
    width: 8vw;
    height: 8vw;
  }

  .course__heading {
    margin-bottom: 5px;
    font-size: 2.5vw;
  }

  .course__lessons-amount {
    font-size: 2vw;
  }

  .course__button {
    height: 4vw;
    font-size: 1.6vw;
    opacity: 1;
  }
}

@media (max-width: 700px) {
  .course {
    width: 280px;
    height: 290px;
  }

  .course__image {
    width: 90px;
    height: 90px;
  }

  .course__heading {
    margin-bottom: 0;
    font-size: 25px;
  }

  .course__lessons-amount {
    font-size: 20px;
  }

  .course__button {
    height: 8vw;
    font-size: 3.5vw;
  }
}
</style>
