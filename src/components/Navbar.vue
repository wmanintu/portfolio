<template>
  <div class="nav">
    <div class="navbar-container">
      <!-- Logo on the left -->
      <div class="navbar-brand">
        <div class="link-orange gradient-text" @click="redirect('home')">
          W U T
        </div>
      </div>

      <!-- Navigation items on the right -->
      <div class="navbar-menu">
        <div class="navbar-nav">
          <div :class="handleActiveHome()" @click="redirect('home')">Home</div>

          <div :class="handleActivePoject()" @click="redirect('project')">
            Projects
          </div>

          <div class="contact" @click="mailTo">Contact</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
let activeName = ref("home");

const redirect = (routeName) => {
  activeName.value = routeName;
  router.push({ name: routeName });
};

const handleActiveHome = () => {
  if (route.name === "home") {
    return "option-name link-purple purple";
  } else {
    return "option-name link-purple";
  }
};

const handleActivePoject = () => {
  if (route.name === "project") {
    return "option-name link-green green";
  } else {
    return "option-name link-green";
  }
};

const mailTo = () => {
  window.location.href = "mailto:manintu.wut@gmail.com";
};
</script>

<style scoped>
.nav {
  padding: 1rem 2rem;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-brand {
  flex-shrink: 0;
}

.navbar-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
}

.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  font-weight: bold;
}

.nav-separator {
  color: #888;
  user-select: none;
}

.option-name,
.contact {
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.option-name {
  font-weight: bold;
}

.contact:hover {
  color: #485fc7;
}

.purple {
  color: #aa67d3;
}

.green {
  color: #77bc6a;
}

.link-orange {
  display: inline-block;
}

.link-orange:hover {
  cursor: pointer;
}

.link-purple:hover {
  cursor: pointer;
  color: #aa67d3;
}

.link-green:hover {
  cursor: pointer;
  color: #77bc6a;
}

.gradient-text {
  --bg-size: 400%;
  --color-one: hsl(64, 95%, 55%);
  --color-two: hsl(111.82deg 68.62% 53.02%);
  --color-three: hsl(237.94deg 95% 55%);
  font-family: sans-serif;
  font-weight: bold;
  font-size: clamp(2rem, 5vw, 3rem);
  background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-three)
    )
    0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.gradient-text:hover {
  cursor: pointer;
}

@media (prefers-reduced-motion: no-preference) {
  .gradient-text {
    animation: move-bg 8s linear infinite;
  }

  @keyframes move-bg {
    to {
      background-position: var(--bg-size) 0;
    }
  }
}

/* Mobile responsive */
@media screen and (max-width: 768px) {
  .nav {
    padding: 1rem;
  }

  .navbar-nav {
    gap: 0.5rem;
    font-size: 0.9rem;
  }

  .gradient-text {
    font-size: 2rem;
  }
}

/* Small mobile */
@media screen and (max-width: 480px) {
  .navbar-nav {
    flex-direction: column;
    gap: 0.25rem;
  }

  .gradient-text {
    font-size: 1.8rem;
  }
}
</style>
