<template>
  <!-- Main container -->
  <nav class="level content-margin">
    <!-- Left side -->
    <div class="level-left">
      <div class="level-item">
          <strong class="link-orange">W U T <br> M A N I N T U</strong>
      </div>
    </div>

    <!-- Right side -->
    <div class="level-right">
      <p class="level-item">
        /<strong class="link-purple" @click="redirect('about')">About</strong>
      </p>
      <p class="level-item">
        /<strong class="link-green" @click="redirect('project')">Project</strong>
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  created () {
    activeRouteName: this.$router.name
  },
  methods: {
    redirect (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-margin {
  margin: 100px;
}

</style>
