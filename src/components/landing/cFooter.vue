<template>
  <footer class="footer">
    <div class="footer__logo-social">
      <div class="footer__logo">Crepiks</div>
      <div class="footer__social">
        Cоциальные сети
      </div>
    </div>
    <div class="footer__nav">
      <div class="footer__nav-link">Зачем мне это</div>
      <div class="footer__nav-link">Как это проходит</div>
      <div class="footer__nav-link">Как проходит курс</div>
      <div class="footer__nav-link">Что я получу в конце</div>
    </div>
    <div class="footer__buttons">
      <a href="#header" class="footer__button-link"
        ><div class="footer__button">На вверх</div></a
      >
      <div class="footer__button" @click="$router.push('/auth/login')">
        Начать обучение
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
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
  color: #0d0b6d;
}

.footer__social {
  font-size: 25px;
  color: #2522a0;
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
  color: #2522a0;
  font-weight: 300;
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
  color: #eeeef6;
  background-color: #2522a0;
  border: 2px solid #2522a0;
  border-radius: 15px;
  cursor: pointer;
  transition: 150ms ease-in-out;
}

.footer__button-link {
  text-decoration: none;
}

.footer__button:hover {
  color: #2522a0;
  background-color: #eeeef6;
}
</style>
