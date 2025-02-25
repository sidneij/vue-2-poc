<template>
  <div>
    <v-progress-circular v-if="isLoading" :size="50" color="primary" indeterminate></v-progress-circular>
    <iframe v-show="!isLoading" ref="vue3app" class="vue-3-app-container" :src="vue3appUrl" allowfullscreen seamless frameborder="0" scrolling="no" title="Vue 3 Application" @load="onIframeLoad"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Vue3Page',
  data: () => ({
    isLoading: true,
    vue3appUrl: process.env.VUE_APP_MYSTIQUE_3,
  }),
  methods: {
    onIframeLoad() {
      this.isLoading = false
      const vue3app = this.$refs.vue3app.contentWindow
      vue3app.postMessage(
        {
          action: 'navigate',
          payload: {
            route: '/clientes/consultar-ofertas/voucher-ze',
          },
        },
        process.env.VUE_APP_MYSTIQUE_3
      )

      vue3app.postMessage(
        {
          action: 'authToken',
          payload: {
            authToken: window.localStorage.getItem('session-id'),
          },
        },
        process.env.VUE_APP_MYSTIQUE_3
      )

      vue3app.postMessage(
        {
          action: 'loggedUser',
          payload: {
            id_account: '5c62ba7b8d9782761de3e46e',
          },
        },
        process.env.VUE_APP_MYSTIQUE_3
      )
    },
    receiveMessage(event) {
      if (event.origin !== process.env.VUE_APP_MYSTIQUE_3) return

      if (event.data.action === 'redirect') {
        this.$router.push(event.data.payload.route)
      }
    },
  },
  mounted() {
    window.addEventListener('message', this.receiveMessage)
  },
  beforeDestroy() {
    window.removeEventListener('message', this.receiveMessage)
  },
}
</script>

<style lang="scss">
.vue-3-app-container {
  width: 100%;
  height: calc(100vh - 100px);
}
</style>
