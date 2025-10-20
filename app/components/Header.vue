<script setup>
import styled from 'vue3-styled-components'
import { NuxtLink } from '#components'

const HeaderWrapper = styled.header`
  background-color: #ffffff0d;
  padding: 1rem;
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

const NavLink = styled(NuxtLink)`
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #4CAF50;
  }
`
</script>

<template>
    <HeaderWrapper>
        <Nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À propos</NavLink>
            <NavLink to="/projects">Projets</NavLink>
        </Nav>
    </HeaderWrapper>
</template>
