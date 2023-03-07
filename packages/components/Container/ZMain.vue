<template>
    <main :class="[$style['z-main']]">
        <slot></slot>
    </main>
</template>

<script setup lang="ts">

</script>

<style module lang="postcss">
.z-main {
    @apply flex-grow px-2 py-1;
}
</style>