<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-responsive class="d-flex align-center text-center fill-height">
          <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
          <h1 class="text-h2 font-weight-bold">BexupFipe</h1>
          <div class="py-14" />
          <v-row>
            <v-col cols="3">
              <ComboBox />
            </v-col>
            <v-col cols="9">
              <!-- <TextBox /> -->
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ComboBox from "@/components/ComboBox.vue";
// import TextBox from "@/components/TextBox.vue";
</script>
