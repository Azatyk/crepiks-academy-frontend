<template>
  <div class="tasks" :class="{ 'tasks-closed': !isOpen }">
    <div class="tasks-header" @click="isOpen = !isOpen">
      <h3 class="tasks-header-title">
        Урок {{ getLessonIndex() }}: {{ lesson.title.ru }}
      </h3>
      <i
        class="bx bx-chevron-down tasks-header-icon"
        :class="{ 'tasks-header-icon-closed': !isOpen }"
      ></i>
    </div>
    <p
      class="tasks-description"
      :class="{ 'tasks-description-hidden': !isOpen }"
    >
      {{ lesson.description.ru }}
    </p>
    <div
      class="task"
      :class="{ 'task-hidden': !isOpen }"
      v-for="(task, index) in lesson.tasks"
      :key="index"
    >
      <span class="task-dash">—</span>
      <span class="task-text">{{ task.description.ru }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object
    },
    lessons: {
      type: Array
    }
  },

  data() {
    return {
      isOpen: true
    };
  },

  methods: {
    getLessonIndex() {
      for (let i = 0; i < this.lessons.length; i++) {
        if (this.lessons[i].id == this.lesson.id) return i + 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.tasks {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px 25px;
  width: calc(100% - 240px);
  height: 40vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d1d2d6;
  background-color: $white;
  z-index: 2;
  transition: 200ms ease-in-out;

  &-closed {
    height: 70px;
  }

  &-header {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &-title {
      color: $dark;
      font-size: 18px;
      font-weight: 500;
    }

    &-icon {
      color: $dark;
      font-size: 30px;
      opacity: 0.4;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        opacity: 0.6;
      }

      &-closed {
        transform: rotate(180deg);
      }
    }
  }

  &-description {
    margin: 8px 0;
    color: $dark;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    opacity: 0.7;
    transition: 200ms ease-in-out;

    &-hidden {
      opacity: 0;
    }
  }
}

.task {
  margin-bottom: 8px;
  color: $dark;
  font-size: 18px;
  font-weight: 500;
  opacity: 0.7;
  transition: 200ms ease-in-out;

  &-dash {
    margin-right: 10px;
  }

  &-hidden {
    opacity: 0;
  }
}
</style>
