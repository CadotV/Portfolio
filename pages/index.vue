<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <main>
          <h1>Portfolio</h1>
          <DefaultLink></DefaultLink>
        </main>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created: function () {
    console.log(this);
  },
};
</script>