<template>
  <footer class="footer">
    <div class="footer__logo-social">
      <div class="footer__logo">Crepiks</div>
      <div class="footer__social">
        Cоциальные сети
      </div>
    </div>
    <div class="footer__nav">
      <a class="footer__nav-link" href="#whatfor">{{
        $t("footerWhatForLinkText")
      }}</a>
      <a class="footer__nav-link" href="#how">{{ $t("footerHowLinkText") }}</a>
      <a class="footer__nav-link" href="#aboutcourse">{{
        $t("footerAboutCourseLinkText")
      }}</a>
      <a class="footer__nav-link" href="#aboutending">{{
        $t("footerAboutEndingLinkText")
      }}</a>
    </div>
    <div class="footer__buttons">
      <a href="#header" class="footer__button-link"
        ><div class="footer__button">{{ $t("footerUpButton") }}</div></a
      >
      <div class="footer__button" @click="$router.push('/app/courses')">
        {{ $t("footerStartLearningButton") }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.footer {
  margin: auto;
  padding: 5% 2%;
  width: 100%;
  max-width: 1200px;
  height: 330px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer__logo-social {
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.footer__logo {
  font-size: 35px;
  font-weight: bold;
  color: $color-1;
}

.footer__social {
  font-size: 25px;
  color: $color-2;
  font-weight: 400;
}

.footer__nav {
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.footer__nav-link {
  font-size: 20px;
  color: $color-2;
  font-weight: 300;
  text-decoration: none;
  opacity: 0.8;
  cursor: pointer;
  transition: 150ms ease-in-out;
}

.footer__nav-link:hover {
  opacity: 1;
}

.footer__buttons {
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.footer__button {
  margin-bottom: 20px;
  padding: 10px 25px;
  font-size: 20px;
  color: $color-4;
  background-color: $color-2;
  border: 2px solid $color-2;
  border-radius: 15px;
  cursor: pointer;
  transition: 150ms ease-in-out;
}

.footer__button-link {
  text-decoration: none;
}

.footer__button:hover {
  color: $color-2;
  background-color: $color-3;
}

@media (max-width: 1200px) {
  .footer {
    padding: 5% 5%;
  }

  .footer__nav {
    justify-content: flex-start;
  }

  .footer__nav-link {
    margin-bottom: 20px;
  }
}

@media (max-width: 1024px) {
  .footer {
    height: auto;
    flex-direction: column;
  }

  .footer__logo-social {
    margin-bottom: 100px;
    height: 100%;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .footer__logo {
    margin-bottom: 50px;
    font-size: 60px;
  }

  .footer__nav {
    margin-bottom: 100px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .footer__nav-link {
    margin-bottom: 20px;
    font-size: 30px;
  }

  .footer__buttons {
    width: 100%;
    align-items: center;
  }

  .footer__button {
    margin-bottom: 30px;
    padding: 15px 35px;
    font-size: 23px;
    border-radius: 30px;
  }
}

@media (max-width: 650px) {
  .footer__logo-social {
    margin-bottom: 50px;
  }

  .footer__logo {
    font-size: 40px;
  }

  .footer__social {
    font-size: 20px;
  }

  .footer__nav {
    margin-bottom: 50px;
  }

  .footer__nav-link {
    font-size: 20px;
  }

  .footer__buttons {
    margin-bottom: 10%;
  }

  .footer__button {
    margin-bottom: 20px;
    padding: 8px 23px;
    font-size: 17px;
  }
}
</style>
