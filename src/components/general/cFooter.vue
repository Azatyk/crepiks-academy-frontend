<template>
  <footer class="footer">
    <div class="footer__main-content">
      <div class="main-content__intro">
        <cLogo class="intro__logo" :fontSize="1.2" type="light" />
        <div class="intro__social-networks">
          <a href="https://www.linkedin.com/groups/8942269"
            ><i class="fab fa-linkedin social-networks__link"></i
          ></a>
          <a href="https://www.instagram.com/crepiks_academy?r=nametag"
            ><i class="fab fa-instagram-square social-networks__link"></i
          ></a>
          <a href="https://www.facebook.com/groups/349003656061200"
            ><i class="fab fa-facebook-square social-networks__link"></i
          ></a>
          <a href="https://vk.com/public196053339"
            ><i class="fab fa-vk social-networks__link"></i
          ></a>
        </div>
      </div>
      <div class="main-content__nav-bar">
        <router-link to="/courses" class="nav-bar__link">Курсы</router-link>
        <router-link to="/empty" class="nav-bar__link">Блог</router-link>
        <router-link to="/empty" class="nav-bar__link">Подписка</router-link>
        <router-link to="/empty" class="nav-bar__link">О платформе</router-link>
      </div>
      <div class="main-content__extra-info">
        <cButtonLink
          route="/courses"
          text="Подобрать курс"
          :isBold="true"
          class="extra-info__button"
        />
        <div class="extra-info__email">
          <i class="fas fa-envelope email__icon"></i>
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
  height: 20vw;
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
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.main-content__intro {
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.intro__social-networks {
  width: 43%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.social-networks__link {
  font-size: 1.7vw;
  color: #fc7979;
  cursor: pointer;
  transition: 100ms ease-in-out;
}

.social-networks__link:hover {
  color: #f78f8f;
  transition: 100ms ease-in-out;
}

.main-content__nav-bar {
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.nav-bar__link {
  font-size: 1vw;
  color: #dbdbdb;
  text-decoration: none;
  transition: 100ms ease-in-out;
}

.nav-bar__link:hover {
  color: white;
  transition: 100ms ease-in-out;
}

.main-content__extra-info {
  height: 70%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.extra-info__button {
  padding: 0;
  height: 3.2vw;
  width: 55%;
  font-size: 1vw;
  box-shadow: none;
}

.extra-info__email {
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.email__icon {
  color: #c9c9c9;
  /* margin-right: 1vw; */
  font-size: 2vw;
}

.email__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.email__heading {
  margin-bottom: 0.5vh;
  font-size: 1vw;
  color: #c9c9c9;
  font-weight: bold;
  text-transform: uppercase;
}

.email__adress {
  font-size: 0.85vw;
  color: #c9c9c9;
  font-weight: 300;
}

.line {
  height: 1px;
  width: 85%;
  max-width: 1440px;
  background-color: #c4c4c4;
}

.footer__company-content {
  height: 29%;
  width: 80%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.company-content__text {
  font-size: 0.9vw;
  color: #c9c9c9;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .logo {
    font-size: 1.5vw;
  }
}
</style>
