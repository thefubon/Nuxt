<template>
  <main class="container px-4 lg:px-8 py-10">
    <h1>Добро пожаловать</h1>
    <p>Эта область защищена паролем</p>

    <button @click="logout()" class="mt-4 py-2 px-4 bg-red-300 rounded inline-block">Выйти</button>
  </main>
</template>

<script>
export default {
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