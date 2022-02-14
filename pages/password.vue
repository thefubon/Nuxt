<template>
  <div class="container px-4 lg:px-8 py-10">
    
    <div v-if="isAuthorised">
      <h1>Похоже, вы уже вошли в систему</h1>
      <p>Либо выйдите из системы, либо перейдите в защищенную паролем зону</p>

      <button @click="removeAuthorisation" class="py-2 px-4 inline-block bg-pink-200 rounded">Выйти</button>
      <button class="py-2 px-4 inline-block bg-blue-200 rounded" href="/login">Перейдите в защищенную паролем область</button>
    </div>

    <div v-else>
      <p>Пароль - <strong>pass</strong>.</p>

      <form class="mt-4">
        <input class="rounded h-10" v-model="methodLoginValue" type="password" placeholder="Ваш пароль для входа">
        <button @click="loginUser()" class="h-10 px-4 inline-block bg-indigo-700 text-white rounded">Войти</button>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      methodLoginValue: '',
      isAuthorised: false
    }
  },
  computed: {
    redirectPath() {
      const path = this.$route.query.previousPath
      return path || this.localePath('/')
    }
  },
  mounted() {
    this.isAuthorised = this.$passwordProtect.isAuthorised()
  },
  methods: {
    loginUser() {
      this.$passwordProtect.authorise(this.methodLoginValue)
      this.isAuthorised = this.$passwordProtect.isAuthorised()
      this.$router.push(this.redirectPath)
    },
    removeAuthorisation() {
      this.$passwordProtect.removeAuthorisation()
      this.isAuthorised = this.$passwordProtect.isAuthorised()
    }
  }
}
</script>