<template>
  <div class="card">
    <div class="card-content">
      <div class="field">
        <input
          id="themeSwitch"
          type="checkbox"
          name="themeSwitch"
          class="is-checkradio is-success is-large is-rounded"
          :checked="isDark"
          @change="toggleTheme"
        />
        <label for="themeSwitch" class="theme-switch-label"></label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from "../composables/useTheme.js";

const { isDark, toggleTheme } = useTheme();
</script>

<style lang="scss">
@use "bulma/sass/utilities" as *;

// Minimal custom switch using Bulma's design system
.theme-switch-label {
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.5rem;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $grey-lighter;
    border-radius: $radius-rounded;
    transition: background-color 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 2rem;
    height: 2rem;
    background-color: $white;
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 4px rgba($black, 0.15);
  }
}

#themeSwitch {
  position: absolute;
  opacity: 0;
  width: 5rem;
  height: 2.5rem;
  cursor: pointer;

  &:checked + .theme-switch-label::before {
    background-color: $success;
  }

  &:checked + .theme-switch-label::after {
    transform: translateX(2.5rem);
  }

  &:focus + .theme-switch-label::before {
    box-shadow: 0 0 0 0.125em rgba($link, 0.25);
  }

  &:hover + .theme-switch-label::before {
    filter: brightness(0.95);
  }
}
</style>
