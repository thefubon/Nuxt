<template>
  <main class="flex justify-center items-center h-screen">
    <div>

      <h1>Добро пожаловать</h1>
      <p>Эта область защищена паролем</p>

      <button @click="logout()" class="mt-4 py-2 px-4 bg-red-300 rounded inline-block">Выйти</button>

      <a class="py-2 px-4 inline-block bg-blue-200 rounded mt-10" href="/">Перейдите на главную страницу</a>
      
    </div>
  </main>
</template>

<script>
export default {
  layout: "login",
  middleware: ['password-protect'],
  methods: {
    logout() {
      this.$passwordProtect.removeAuthorisation()
      this.$nextTick(() => {
        this.$router.push(this.localePath('password'))
      })
    }
  }
}
</script>

<style scoped>
  .active-login {
    @apply text-indigo-700;
  }
</style>