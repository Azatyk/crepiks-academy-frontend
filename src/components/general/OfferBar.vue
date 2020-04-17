<template>
  <section class="offer-bar">
    <div class="offer-bar__main">
      <img :src="crownIcon" alt="Crown icon" class="offer-bar__icon" />
      <p class="offer-bar__text">
        <slot />
      </p>
    </div>
    <router-link v-if="linkUrl" :to="linkUrl" class="offer-bar__link">{{
      linkText
    }}</router-link>
  </section>
</template>

<script>
import crownIcon from "@/assets/icons/crown.svg";

export default {
  props: {
    linkText: {
      type: String,
      required: false
    },
    linkUrl: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      crownIcon
    };
  }
};
</script>

<style scoped>
.offer-bar {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: #33334f;
}

.offer-bar__main {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.offer-bar__text {
  margin: 0 15px;
  color: #f8f7fc;
  font-weight: 500;
  font-size: 16px;
}

.offer-bar__link {
  color: #767ead;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
}

@media all and (max-width: 500px) {
  .offer-bar {
    padding: 10px 0;
    flex-direction: column;
  }

  .offer-bar__main {
    justify-content: center;
  }

  .offer-bar__link {
    margin-top: 5px;
  }
}

@media all and (max-width: 370px) {
  .offer-bar__text {
    font-size: 13px;
  }

  .offer-bar__link {
    font-size: 13px;
  }
}
</style>
