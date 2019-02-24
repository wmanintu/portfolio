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
  created () {},
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
</style>
