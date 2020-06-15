<template>
  <div class="page">
    <cHeader type="common" />
    <div class="page__back-color"></div>
    <div class="content">
      <div class="profile">
        <div class="profile__main">
          <div class="profile__avatar-container">
            <div class="profile__avatar-square">
              <img
                src="https://crepiks.s3.eu-central-1.amazonaws.com/users/avatars/5ee71fded3a4df0017bb9d85"
                alt="Avatar"
                class="profile__avatar"
              />
            </div>
          </div>
          <div class="profile__main-inputs">
            <div class="input__write">
              <div class="input__label">Имя:</div>
              <input type="text" class="input__input" />
            </div>
            <div class="input__write">
              <div class="input__label">Имя:</div>
              <input type="text" class="input__input" />
            </div>
            <div class="input__choose">
              <div class="input__label">Дата рождения:</div>
              <select name="birthday" class="input__select">
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
                <option value="" class="select__option"></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/general/cHeader";

export default {
  components: {
    cHeader
  }
};
</script>

<style></style>
