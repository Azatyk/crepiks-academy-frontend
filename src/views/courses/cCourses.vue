<template>
  <div class="courses__page">
    <div class="courses__content">
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
.courses__page {
  padding: 0.1px;
}

.content {
  margin-top: 5%;
  width: 100%;
  height: auto;
}

.courses__intro {
  margin: auto;
  margin-top: 10%;
  max-width: 1440px;
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.courses__text {
  margin-right: 5%;
  width: 100%;
}

.intro__heading {
  margin-bottom: 3%;
  width: 90%;
  font-size: 2.8vw;
  color: #34495e;
  font-weight: 800;
}

.intro__description {
  width: 80%;
  font-size: 1.2vw;
  color: #516f8c;
  font-weight: 400;
}

.intro__image {
  margin-top: 3%;
  width: 30vw;
}

.courses {
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.course {
  margin-left: 1%;
  margin-right: 1%;
}

@media (max-width: 1024px) {
  .courses__content {
    margin-top: 15%;
  }

  .courses__intro {
    width: 85%;
    justify-content: center;
  }

  .courses__text {
    margin-right: 0;
    width: 60%;
  }

  .intro__heading {
    width: 100%;
    font-size: 5vw;
  }

  .intro__description {
    width: 90%;
    font-size: 2.3vw;
  }

  .intro__image {
    width: 40vw;
  }

  .courses {
    width: 85%;
    justify-content: space-around;
  }
}
</style>
