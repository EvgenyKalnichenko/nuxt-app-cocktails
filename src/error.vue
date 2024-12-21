<script lang="ts" setup>
    import type { NuxtError } from '#app'

    defineProps<{ error: NuxtError }>()
</script>

<template>
    <section class="page-error">
        <UiContainer class="page-error__container">
            <template v-if="error.statusCode === 404">
                <div class="page-error__code">
                    404
                </div>
                <h1 class="page-error__title">
                    Страница не найдена
                </h1>
                <p class="page-error__text">
                    Неправильно набран адрес или такой страницы больше не существует.
                </p>
            </template>
            <template v-else>
                <h1 class="page-error__title">
                    Упс что то пошло не так...
                </h1>
            </template>
            <UiLink
                variant="primary"
                to="/"
            >
                Перейти на главную
            </UiLink>
        </UiContainer>
    </section>
</template>

<style lang="scss" scoped>
.page-error {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @include sm-screen {
      margin-top: 96px;
      margin-bottom: 80px;
    }
  }

  &__bg {
    margin-bottom: 46px;
    width: 100%;
    max-width: 420px;
  }

  &__title {
    margin-bottom: 16px;
  }

  &__text {
    margin-bottom: 48px;
  }

  &__code {
    font-size: 60px;
    margin-bottom: 24px;
  }
}
</style>
