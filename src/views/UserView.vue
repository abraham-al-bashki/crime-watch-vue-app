<template>
  <h1>User page</h1>
  <p>The user id is: {{ id }}</p>
  <input v-model="userinput" />
  <p :class="changeClassLaughNeutral">{{ `Mirror: ${mirrorInput}` }}</p>
  <button @click="triggerLaughter">Make me laugh</button>
</template>

<script setup>
import { defineProps, ref, watch, defineEmits, computed } from "vue";
const props = defineProps({ id: { required: true, type: String } });
const userinput = ref(null);
const mirrorInput = ref(null);
const emit = defineEmits(["laughter-triggered"]);
watch(userinput, (newInput, oldInput) => {
  mirrorInput.value = `${oldInput} changed to ${newInput}.`;
});
function triggerLaughter() {
  mirrorInput.value = "Hahaha! You made me laugh!";
  emit("laughter-triggered");
}
const changeClassLaughNeutral = computed(() => {
  if (mirrorInput.value === "Hahaha! You made me laugh!") {
    return "laugh";
  }
  return "neutral";
});
</script>

<style scoped>
.laugh {
  font-size: xx-large;
  color: green;
}
.neutral {
  font-size: inherit;
  color: inherit;
}
</style>
