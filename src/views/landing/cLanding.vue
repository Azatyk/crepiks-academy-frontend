<template>
  <div class="landing__page" ref="body">
    <!-- <vue-scroll-progress-bar
      height="5px"
      backgroundColor="linear-gradient(to right, #0d0b6d, #2522a0)"
    /> -->
    <cFirstSlide class="hide" :class="{ show: currentPage === 1 }" />
    <cSecondSlide class="hide" :class="{ show: currentPage === 2 }" />
    <cThirdSlide class="hide" :class="{ show: currentPage === 3 }" />
    <!-- <cWelcome />
    <cWhatFor />
    <cHow />
    <cAboutCourse />
    <cAboutEnding />
    <cFooter /> -->
  </div>
</template>

<script>
import cFirstSlide from "@/components/newLanding/firstSlide/cFirstSlide";
import cSecondSlide from "@/components/newLanding/secondSlide/cSecondSlide";
import cThirdSlide from "@/components/newLanding/thirdSlide/cThirdSlide";
// import cWelcome from "@/components/landing/cWelcome";
// import cWhatFor from "@/components/landing/cWhatFor";
// import cHow from "@/components/landing/cHow";
// import cAboutCourse from "@/components/landing/cAboutCourse";
// import cAboutEnding from "@/components/landing/cAboutEnding";
// import cFooter from "@/components/landing/cFooter";
// import { VueScrollProgressBar } from "@guillaumebriday/vue-scroll-progress-bar";

export default {
  data: function() {
    return {
      direction: null,
      startY: 0,
      currentPage: 1
    };
  },
  components: {
    cFirstSlide,
    cSecondSlide,
    cThirdSlide
    // cWelcome,
    // cWhatFor,
    // cHow,
    // cAboutCourse,
    // cAboutEnding,
    // cFooter,
    // VueScrollProgressBar
  },
  methods: {
    handleScroll: function() {
      // var scrollY = window.scrollY;
      // var scrolledscrollDifference = scrollY - this.startY;
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      // console.log(scrolled)
      // if (scrollY > this.startY) {
      //   this.direction = 'Now going down...';
      //   if (this.currentPage === 3) {
      //     this.currentPage === 3
      //   } else {
      //     this.currentPage++;
      //   }
      //   // console.log(this.currentPage)
      // } else if (scrollY < this.startY) {
      //   this.direction = 'Now going up!';
      //   if (this.currentPage === 1) {
      //     this.currentPage === 1
      //   } else {
      //     this.currentPage--;
      //   }
      //   // console.log(this.currentPage)
      // }
      // this.startY = scrollY;
      if (scrolled >= 0 && scrolled < 33) {
        this.currentPage = 1;
      } else if (scrolled >= 33 && scrolled < 66) {
        this.currentPage = 2;
      } else if (scrolled >= 66 && scrolled <= 100) {
        this.currentPage = 3;
      }
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.landing__page {
  overflow: hidden;
  height: 105vh;
}

.hide {
  display: none;
}

.show {
  display: block;
}
/* .landing__page {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #eeeef6;
}

html::-webkit-scrollbar {
  width: 0;
}

html {
  -ms-overflow-style: none;
}

@media (max-width: 650px) {
  .vs-select-content {
    width: 70%;
  }
} */
</style>
