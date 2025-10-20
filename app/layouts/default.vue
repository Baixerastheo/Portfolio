<script lang="ts">
import { defineComponent } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Footer
  }
})
</script>

<template>
  <div>
    <Header />

    <main class="main-content">
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.main-content {
  padding-top: 20px;
  min-height: calc(100vh - 20px);
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 15px;
    min-height: calc(100vh - 15px);
  }
}
</style>
