<template>
  <span>Essa página está em Vue 2</span>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    window.localStorage.setItem(
      'session-id',
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImlhdCI6MTc0MDQxMjMzOCwiZXhwIjoxNzQxMDE3MTM4fQ.eyJzZXNzaW9uSWQiOiIzYjhiZWQ5Mi0yODlmLTRhNWQtYTgzMC03Y2Y4MmFmMjJmMDQiLCJhY2NvdW50SWQiOiI1YzYyYmE3YjhkOTc4Mjc2MWRlM2U0NmUiLCJpYXQiOjE3NDA0MTIzMzgsImV4cCI6MTc0MTAxNzEzOH0.sngigHy2jV4FxiLtJqa5Q8GUNydZx-HuyrNJDLEgxS7DHeH6cuNFamYEcEzITq2MsGQ8EBdv5IgdwVXehy2Q1A'
    )
  },
}
</script>
