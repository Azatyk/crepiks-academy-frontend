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
        <cButtonLink
          :route="route"
          :text="buttonText"
          :isBold="true"
          class="text-block__button"
        />
      </div>
    </div>
  </section>
</template>

<script>
import cButtonLink from "@/components/common/cButtonLink";

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
    cButtonLink
  }
};
</script>

<style scoped>
.about {
  height: 35vw;
  width: 100%;
  background-color: #f8f7fc;
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

.text-block__button {
  padding: 2.3% 5%;
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
    margin-bottom: 10%;
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
}
</style>
