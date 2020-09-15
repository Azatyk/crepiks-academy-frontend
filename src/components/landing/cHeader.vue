<template>
  <header class="header" id="header">
    <router-link to="/" class="header__logo-link">
      <div class="header__logo">
        Crepiks
      </div>
    </router-link>
    <nav class="header__navigation">
      <a class="header__navigation-link" href="#whatfor">Зачем мне это</a>
      <a class="header__navigation-link" href="#how">Как это проходит</a>
      <a class="header__navigation-link" href="#aboutcourse">О курсе</a>
      <a class="header__navigation-link" href="#aboutending">В конце курса</a>
      <template>
        <div class="center">
          <vs-select
            placeholder="Select"
            v-model="value"
            class="header__select"
            color="#0d0b6d"
          >
            <vs-option label="Русский" value="1">
              Русский
            </vs-option>
            <vs-option label="Казакша" value="2">
              Казакша
            </vs-option>
            <vs-option label="English" value="3">
              English
            </vs-option>
          </vs-select>
        </div>
      </template>
      <div class="header__button" @click="$router.push('/auth/login')">
        Войти
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      value: "1"
    };
  }
};
</script>

<style>
.header {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0 2%;
  width: 100%;
  max-width: 1300px;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-size: 35px;
  font-weight: bold;
  color: #0d0b6d;
}

.header__logo-link {
  text-decoration: none;
}

.header__logo-main {
  color: #5d33f6;
  font-weight: 900;
}

.header__navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header__navigation-link {
  display: block;
  font-size: 17px;
  margin-right: 30px;
  color: #384a62;
  text-decoration: none;
  opacity: 0.6;
  cursor: pointer;
  transition: 150ms ease-in-out;
}

.header__navigation-link:hover {
  opacity: 1;
  transition: 150ms ease-in-out;
}

.vs-select__input {
  font-size: 15px !important;
}

.vs-select__option {
  font-size: 15px;
}

.header__link-button {
  padding: 3px 5px;
  margin-left: 50px;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
}

.header__button {
  margin-left: 20px;
  padding: 8px 30px;
  font-size: 17px;
  color: #eeeef6;
  background-color: #2522a0;
  border: 2px solid #2522a0;
  border-radius: 15px;
  transition: 170ms;
  cursor: pointer;
}

.header__button:hover {
  color: #2522a0;
  background-color: #eeeef6;
  border: 2px solid #2522a0;
}

@media (max-width: 1200px) {
  .header {
    padding: 0 5%;
  }

  .header__navigation-link {
    margin-right: 20px;
    font-size: 15px;
  }

  .header__button {
    padding: 6px 30px;
  }
}

@media (max-width: 1024px) {
  .header {
    padding: 0 8%;
  }

  .header__logo {
    font-size: 40px;
  }

  .header__navigation-link {
    display: none;
  }

  .vs-select__input {
    font-size: 20px !important;
  }

  .vs-select__option {
    font-size: 20px !important;
  }

  .header__button {
    padding: 10px 30px;
    font-size: 20px;
  }
}
</style>
