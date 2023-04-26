<template>
    <main :class="[$style['z-main']]">
        <slot></slot>
    </main>
</template>

<script setup lang="ts">

</script>

<style module lang="postcss">
.z-main {
    @apply flex-grow flex-shrink basis-9/12 px-2 py-1 max-w-full;
}
</style>