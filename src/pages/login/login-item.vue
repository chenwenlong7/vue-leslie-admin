<template>
  <p :style="{ marginBottom: '20px' }">
    <a-checkbox v-model:checked="checked" :disabled="disabled">
      {{ label }}
    </a-checkbox>
  </p>
  <p>
    <a-button type="primary" size="small" @click="toggleChecked">
      {{ !checked ? "Check" : "Uncheck" }}
    </a-button>
    <a-button
      :style="{ marginLeft: '10px' }"
      type="primary"
      size="small"
      @click="toggleDisable"
    >
      {{ !disabled ? "Disable" : "Enable" }}
    </a-button>
  </p>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
const checked = ref(false);
const disabled = ref(false);

const toggleChecked = () => {
  checked.value = !checked.value;
};

const toggleDisable = () => {
  disabled.value = !disabled.value;
};

const label = computed(() => {
  return `${checked.value ? "Checked" : "Unchecked"}-${
    disabled.value ? "Disabled" : "Enabled"
  }`;
});
</script>

<style scoped lang="less"></style>
