<template>
  <Button type="primary" :icon="Check" :loading="true" :loading-icon="Check">button</Button>
  <Icon>
    <Check style="width: 40px; height: 40px; color: red;" />
  </Icon>
</template>

<script setup lang="ts">
import Button from "../packages/components/Button/index.vue";
import Icon from "../packages/components/Icon/index.vue"
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
