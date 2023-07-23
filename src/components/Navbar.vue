<template>
  <div class="nav">
    <div class="columns">
      <div class="column is-12-mobile">
        <strong class="link-orange" @click="redirect('home')"
          >W U T <br />
          M A N I N T U</strong
        >
      </div>
      <div class="column is-12-mobile">
        <div class="nav-option-container has-text-centered">
          /<strong :class="handleActiveHome()" @click="redirect('home')">
            Home
          </strong>
          /<strong :class="handleActivePoject()" @click="redirect('project')">
            Project
          </strong>
        </div>
      </div>
      <div class="column has-text-right">
        <a>contact</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "home",
    };
  },
  methods: {
    redirect(routeName) {
      this.activeName = routeName;
      this.$router.push({ name: routeName });
    },
    handleActiveHome() {
      if (this.$route.name === "home") {
        return "option-name link-purple purple";
      } else {
        return "option-name link-purple";
      }
    },
    handleActivePoject() {
      if (this.$route.name === "project") {
        return "option-name link-green green";
      } else {
        return "option-name link-green";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  margin: 50px 0px 30px 0px;
}
.option-name {
  margin: 0px 10px 0px 10px;
}
.purple {
  cursor: pointer;
  color: #aa67d3;
}
.green {
  cursor: pointer;
  color: #77bc6a;
}
.link-orange:hover {
  cursor: pointer;
  color: #ca7242;
}
.link-purple:hover {
  cursor: pointer;
  color: #aa67d3;
}
.link-green:hover {
  cursor: pointer;
  color: #77bc6a;
}
.link-red:hover {
  cursor: pointer;
  color: #c95766;
}
@media (max-width: 740px) {
  .nav {
    margin: 10px;
  }
}
@media (min-width: 740px) {
  .nav-option-container {
    text-align: right;
  }
}

.contact-button:hover {
  cursor: pointer;
}
</style>
