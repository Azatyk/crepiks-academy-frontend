<template>
  <div class="lesson-theory" :class="{ 'lesson-theory-open': isTheoryOpen }">
    <span class="lesson-theory-navigation" @click="$emit('navigation-opened')"
      >Список уроков</span
    >
    <i class="bx bx-x lesson-theory-close" @click="$emit('theory-closed')"></i>
    <div class="content">
      <h1 class="lesson-theory-title">Первый HTML</h1>
      <p class="lesson-theory-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore
        nihil minima maiores temporibus in odio a, animi veniam repellat.
        Expedita possimus explicabo consequatur temporibus, aliquam magnam
        corporis omnis, iure nesciunt asperiores, suscipit est maiores earum
        quaerat aspernatur tempora quas tempore sed neque? Quam quo, suscipit
        expedita numquam harum nihil fugit dolorem facere minus reprehenderit
        soluta iste odio itaque repellendus accusantium eum, maxime odit
        asperiores laboriosam nostrum sint tempora beatae. Ab cum placeat
        explicabo deserunt ut sequi, molestiae est asperiores pariatur porro
        quisquam obcaecati quia quis libero repellendus et? Dolorem vel a illo
        praesentium. Unde recusandae quam labore eaque perspiciatis?<br /><br />

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore
        nihil minima maiores temporibus in odio a, animi veniam repellat.
        Expedita possimus explicabo consequatur temporibus, aliquam magnam
        corporis omnis, iure nesciunt asperiores, suscipit est maiores earum
        quaerat aspernatur tempora quas tempore sed neque? Quam quo, suscipit
        expedita numquam harum nihil fugit dolorem facere minus reprehenderit
        soluta iste odio itaque repellendus accusantium eum, maxime odit
        asperiores laboriosam nostrum sint tempora beatae. Ab cum placeat
        explicabo deserunt ut sequi, molestiae est asperiores pariatur porro
        quisquam obcaecati quia quis libero repellendus et? Dolorem vel a illo
        praesentium. Unde recusandae quam labore eaque perspiciatis?
      </p>
      <cButton
        text="Перейти к заданию"
        class="lesson-theory-button"
        @click="$emit('theory-closed')"
      />
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button";

export default {
  props: {
    isTheoryOpen: {
      type: Boolean,
      default: false
    }
  },

  components: {
    cButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.lesson-theory {
  position: fixed;
  bottom: -99.5vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 99%;
  height: 99.5vh;
  display: flex;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  background-color: $white;
  z-index: 3;
  transition: 200ms ease;

  &-open {
    transform: translateY(-99.5vh);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  }

  &-navigation {
    position: absolute;
    top: 4%;
    left: 3%;
    color: $primary;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  &-close {
    position: absolute;
    top: 4%;
    right: 3%;
    font-size: 35px;
    opacity: 0.6;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  &-title {
    margin-bottom: 20px;
    color: $dark;
    font-size: 50px;
    font-weight: 600;
  }

  &-text {
    margin-bottom: 35px;
    color: $dark;
    font-size: 24px;
  }

  &-button {
    width: 200px;
  }
}

.content {
  padding: 5% 0;
  width: 800px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}
</style>
