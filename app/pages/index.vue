<script setup>
import styled from 'vue3-styled-components'

const Container = styled.div`
  text-align: center;
  margin-top: 5rem;
`

const Title = styled.h1`
  font-size: 3rem;
  color: #4CAF50;
`

const Subtitle = styled.p`
  font-size: 1.25rem;
`
</script>

<template>
  <Container>
    <Title>Bienvenue sur mon Portfolio</Title>
    <Subtitle>Développeur Front-End • Vue.js / Nuxt / Styled Components</Subtitle>
  </Container>
</template>
