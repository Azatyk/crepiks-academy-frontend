<template>
  <section class="about">
    <div class="content" :class="{ reverse: reversed }">
      <img
        :src="image"
        alt="about"
        class="image"
        :class="{ noMargin: reversed }"
      />
      <div class="text-block" :class="{ changeMargin: reversed }">
        <h2 class="text-block__heading">{{ textHeading }}</h2>
        <div class="text-block__description">{{ textDescription }}</div>
        <s-button class="about__button" @click="$router.push(route)">{{
          buttonText
        }}</s-button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "vuesax/dist/vsButton";
import "vuesax/dist/vuesax.css";

export default {
  props: {
    image: {
      type: String,
      required: false
    },
    reversed: {
      type: Boolean,
      required: false,
      default: false
    },
    textHeading: {
      type: String,
      required: true,
      default: "Heading"
    },
    textDescription: {
      type: String,
      required: false
    },
    route: {
      type: String,
      required: false,
      default: "#"
    },
    buttonText: {
      type: String,
      required: false,
      default: "Перейти к курсам"
    }
  },
  components: {
    "s-button": Button
  }
};
</script>

<style scoped>
.about {
  height: 35vw;
  width: 100%;
}

.content {
  /* padding: 10vw 0vh; */
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.image {
  margin-right: 7%;
  width: 40%;
}

.text-block {
  margin-left: 5%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.text-block__heading {
  width: 80%;
  margin-bottom: 2%;
  font-size: 2.6vw;
  color: #34495e;
  font-weight: 700;
  line-height: 1.2;
}

.text-block__description {
  margin-bottom: 7%;
  width: 85%;
  font-size: 1.2vw;
  color: #516f8c;
}

.about__button {
  padding: 0 5%;
  height: 2.7vw;
  font-size: 1.1vw;
}

.reverse {
  flex-direction: row-reverse;
}

.noMargin {
  margin-right: 0;
  margin-left: 3%;
}

.changeMargin {
  margin-left: 0;
  margin-right: -5%;
}

@media (max-width: 1024px) {
  .about {
    height: 100%;
  }

  .content {
    flex-direction: column;
  }

  .text-block {
    margin: 0;
    margin-bottom: 5%;
    width: 60%;
    align-items: center;
  }

  .text-block__heading {
    font-size: 5vw;
    text-align: center;
  }

  .text-block__description {
    width: 100%;
    font-size: 2.5vw;
    text-align: center;
  }

  .text-block__button {
    text-align: center;
    font-size: 2vw;
  }

  .image {
    margin: 0;
    width: 50%;
  }

  .about__button {
    padding: 0 7%;
    height: 7vw;
    font-size: 3vw;
    border-radius: 5px;
  }
}

@media (max-width: 700px) {
  .image {
    width: 80%;
  }

  .text-block {
    width: 100%;
  }

  .text-block__heading {
    font-size: 8vw;
  }

  .text-block__description {
    width: 80%;
    font-size: 3vw;
  }
}
</style>
