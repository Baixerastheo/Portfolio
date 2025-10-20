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

    <main>
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>
