<template>
  <div>
    <v-select :items="brands" label="Selecione uma marca"></v-select>
  </div>
</template>

<script lang="ts">
import { getBrands } from "@/httpClients/apiClient";
export default {
  data() {
    return {
      brands: [] as String[],
    };
  },
  mounted() {
    this.loadBrands();
  },
  methods: {
    async loadBrands() {
      try {
        const response = await getBrands();
        const options: String[] = [];
        response.map((item) => options.push(item.name));
        this.brands = options;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
