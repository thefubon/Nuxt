<template>
  <main class="container px-4 lg:px-8">
    <h1>Welcome</h1>
    <p>This area is the password protected</p>

    <button @click="logout()" class="py-2 px-4 bg-red-300 rounded inline-block">Log out</button>
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