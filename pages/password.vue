<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      
      <div v-if="isAuthorised">
        <h1>Похоже, вы уже вошли в систему</h1>
        <p>Либо выйдите из системы, либо перейдите в защищенную паролем зону</p>

        <div class="mt-4">
          <button @click="removeAuthorisation" class="py-2 px-4 inline-block bg-pink-200 rounded">Выйти</button>
          <a class="py-2 px-4 inline-block bg-blue-200 rounded" href="/login">Перейдите в защищенную паролем область</a>
        </div>
      </div>

      <div v-else>
        <p>Пароль - <strong>pass</strong>.</p>

        <form class="mt-4">
          <input class="rounded h-10" v-model="methodLoginValue" type="password" placeholder="Ваш пароль для входа">
          <button @click="loginUser()" class="h-10 px-4 inline-block bg-indigo-700 text-white rounded">Войти</button>
        </form>

        <a class="py-2 px-4 inline-block bg-blue-200 rounded mt-10" href="/">Перейдите на главную страницу</a>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: "login",
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