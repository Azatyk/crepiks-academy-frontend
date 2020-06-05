<template>
  <footer class="footer">
    <div class="footer__main-content">
      <div class="main-content__intro">
        <cLogo class="intro__logo" />
        <div class="intro__social-networks">
          <img
            class="social-networks__link"
            src="@/assets/icons/linkdinIcon.svg"
            alt="linkedin"
          />
          <img
            class="social-networks__link"
            src="@/assets/icons/instagramIcon.svg"
            alt="instagram"
          />
          <img
            class="social-networks__link"
            src="@/assets/icons/facebookIcon.svg"
            alt="facebook"
          />
          <img
            class="social-networks__link"
            src="@/assets/icons/telegramIcon.svg"
            alt="telegram"
          />
        </div>
      </div>
      <div class="main-content__nav-bar">
        <router-link to="/courses" class="nav-bar__link">Курсы</router-link>
        <router-link to="#" class="nav-bar__link">Блог</router-link>
        <router-link to="#" class="nav-bar__link">Подписка</router-link>
        <router-link to="#" class="nav-bar__link">О платформе</router-link>
      </div>
      <div class="main-content__extra-info">
        <cButtonLink
          route="/courses"
          text="Выбрать курс"
          :isBold="true"
          class="extra-info__button"
        />
        <div class="extra-info__email">
          <img
            src="@/assets/icons/footerEmail.svg"
            alt="email"
            class="email__image"
          />
          <div class="email__text">
            <div class="email__heading">Почта</div>
            <div class="email__adress">crepiks.academy@mail.ru</div>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="footer__company-content">
      <div class="company-content__text">© Crepiks Academy, 2020</div>
      <div class="company-content__text">Политика конфиденциальности</div>
    </div>
  </footer>
</template>

<script>
import cLogo from "@/components/general/cLogo";
import cButtonLink from "@/components/general/cButtonLink";

export default {
  components: {
    cLogo,
    cButtonLink
  }
};
</script>

<style scoped>
.footer {
  height: 30vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #34495e;
}

.footer__main-content {
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.main-content__intro {
  width: 25%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.intro__social-networks {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.social-networks__link {
}

.main-content__nav-bar {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.main-content__extra-info {
  height: 70%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.extra__info-button {
}

.extra-info__email {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.email__image {
}

.email__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.email__heading {
}

.email__adress {
}

.line {
  height: 2px;
  width: 85%;
  background-color: #c4c4c4;
}

.footer__company-content {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.company-content__text {
}
</style>
