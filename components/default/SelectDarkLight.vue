<template>
  <button @click="toggleDarkLight()">change theme</button>
</template>

<script>
export default {
  data() {
    return {
      dark: this.$vuetify.theme.dark,
    }
  },

  methods: { 
    toogleDarkLight() {
      console.log(this);
      this.dark = !this.dark;
    },
  }

};
</script>
