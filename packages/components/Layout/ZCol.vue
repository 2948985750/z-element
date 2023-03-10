<template>
    <div :class="[$style['z-col']]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ColProps } from './ZCol'
const props = defineProps(ColProps)
const style = reactive({
    xl: props.xl ?? props.span,
    sm: props.sm ?? props.span,
    md: props.md ?? props.span,
    lg: props.lg ?? props.span,
    xs: props.xs ?? props.span
})
console.log(props.xl);

</script>

<style module lang="postcss">
:root {}

.z-col {
    --percentage: calc(100% / 24);
    flex-basis: 0;
    flex-grow: 0;
    flex-basis: calc(var(--percentage) * v-bind('props.span'));

}


@media (max-width: 767px) {
    .z-col {
        flex-basis: calc(var(--percentage) * v-bind("style.xl"));
    }
}


@media (min-width:768px) {
    .z-col {
        flex-basis: calc(var(--percentage) * v-bind("style.sm"))
    }
}

@media (min-width:992px) {
    .z-col {
        flex-basis: calc(var(--percentage) * v-bind("style.md"))
    }
}

@media (min-width:1200px) {
    .z-col {
        flex-basis: calc(var(--percentage) * v-bind("style.lg"))
    }
}

@media (min-width:1920px) {
    .z-col {
        flex-basis: calc(var(--percentage) * v-bind("style.xs"))
    }
}

/* .xs {
    @apply xs: {
        flex: 1 1 0;
    }
}

.sm {
    @apply sm: {
        flex-basis: calc(var(--percentage) * v-bind('props.sm'))
    }
}

.md {
    @apply md: {
        flex-basis: calc(var(--percentage) * v-bind('props.md'))
    }
}

.lg {
    @apply lg: {
        flex-basis: calc(var(--percentage) * v-bind('props.lg'))
    }
}

.xl {
    @apply xl: {
        flex-basis: calc(var(--percentage) * v-bind('props.xl'))
    }
} */
</style>