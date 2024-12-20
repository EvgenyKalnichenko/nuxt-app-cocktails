# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Стек

- Nuxt 3
- TypeScript
- VueQuery
- scss

- Структуру делал согласно FSD https://feature-sliced.design/ru/ с своими небольшими изменениями, но суть таже
- Гайд по работе с апишкой https://www.vuemastery.com/blog/api-management-in-nuxt-3-with-typescript/#what-is-a-repository-design-pattern
- Интегрировал тесты. Покрыл для примера два компонента [UiContainer](/src/shared/components/UiContainer/UiContainer.test.ts) и [UiIcon](/src/shared/components/UiIcon/UiIcon.test.ts)

### Требования
- "node": ">=18.0.0"


## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
