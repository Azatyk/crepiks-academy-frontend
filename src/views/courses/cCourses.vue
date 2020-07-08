<template>
  <div class="courses-page">
    <div class="courses__intro">
      <div class="courses__text">
        <h1 class="intro__heading">Подбери идеальный курс для себя</h1>
        <div class="intro__description">
          Приобрети навыки 21 века с помощью веселых и увлекательных
          интерактивных курсов
        </div>
      </div>
      <img
        src="@/assets/images/coursesImage.png"
        alt="Подбери курсы для себя"
        class="intro__image"
      />
    </div>
    <div class="courses">
      <cCourseCard
        class="course"
        v-for="(course, index) in courses"
        :key="index"
        :image="course.preview"
        :title="course.title"
        :description="course.description"
        :lessonsAmount="course.lessons.length"
        :id="course._id"
      />
    </div>
  </div>
</template>

<script>
import cCourseCard from "@/components/courses/cCourseCard";

export default {
  components: {
    cCourseCard
  },
  data() {
    return {
      courses: {}
    };
  },
  mounted() {
    this.$store.dispatch("getCourses").then(res => (this.courses = res.data));
  }
};
</script>

<style scoped>
.courses-page {
  margin: auto;
  margin-top: 50px;
  width: 100%;
  max-width: 1000px;
  height: auto;
}

.courses__intro {
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.courses__text {
  width: 100%;
}

.intro__heading {
  margin-bottom: 3%;
  width: 90%;
  font-size: 45px;
  color: #34495e;
  font-weight: 800;
}

.intro__description {
  width: 80%;
  font-size: 22px;
  color: #516f8c;
  font-weight: 400;
}

.intro__image {
  margin-top: 3%;
  width: 500px;
}

.courses {
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.course {
  margin-left: 1%;
  margin-right: 1%;
}

@media (max-width: 1400px) {
  .courses-page {
    padding: 0% 3%;
    margin-top: 100px;
    max-width: 760px;
    box-sizing: border-box;
  }

  .intro__heading {
    width: 100%;
    font-size: 32px;
  }

  .intro__description {
    width: 90%;
    font-size: 16px;
  }

  .intro__image {
    width: 350px;
  }
}

@media (max-width: 1024px) {
  .courses-page {
    margin-top: 5%;
    max-width: 100%;
    width: 95%;
  }

  .intro__heading {
    font-size: 4.5vw;
  }

  .intro__description {
    font-size: 2.5vw;
  }

  .intro__image {
    width: 40vw;
  }

  .courses {
    margin-bottom: 100px;
  }
}

@media (max-width: 700px) {
  .courses-page {
    margin-top: 10%;
  }

  .courses__intro {
    margin-bottom: 20%;
    flex-direction: column-reverse;
  }

  .intro__image {
    width: 80%;
  }

  .courses__text {
    width: 90%;
    text-align: center;
  }

  .intro__heading {
    font-size: 7vw;
  }

  .intro__description {
    margin: auto;
    font-size: 4vw;
  }

  .courses {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
}
</style>
