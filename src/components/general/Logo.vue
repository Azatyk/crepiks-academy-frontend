<template>
  <div class="logo">
    <img src="@/assets/images/logo_blue.svg" alt="Logo" class="logo__image" />
    <div class="logo__text-block">
      <h3 class="logo__text logo__text_big">Crepiks Academy</h3>
      <span class="logo__text logo__text_small">Твой гид в будущее</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo__image {
  margin-right: 9px;
}

.logo__text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo__text_big {
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
}

.logo__text_small {
  font-size: 12px;
  color: #767ead;
}
</style>
