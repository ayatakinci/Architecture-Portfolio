<template>
 <div id="app">
    <h1>Projeler</h1>
    <ul>
      <li v-for="projeler of proje" :key="projeler.id">{{ projeler.title1 }}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      proje: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/proje");
      this.proje = res.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>