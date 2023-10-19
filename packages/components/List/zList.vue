<template>
  <div class="z-list h-1 flex">
    <slot name="header">
      <div class="z-list-header absolute">header</div>
    </slot>
    <div
      :class="['z-list-content', $props.border ? '' : '']"
      ref="containerRef"
      @scrollend="onContainerScroll"
      @touchmove="onContainerScroll"
      :style="{ height: $props.containerHeight }"
    >
      <div
        v-for="(show, index) in componentSource"
        :key="props.dataSource[index].key"
        class="z-list-item"
        :style="{ height: props.itemHeight }"
        @click="emit('onItemClick', dataSource[index])"
      >
        <template v-if="isVisibe[index]">
          <slot :row="props.dataSource[index]"></slot>
        </template>
        <template v-else>
          <component :is="componentSource[index]" ref="chi">
            <slot name="loading"> </slot>
          </component>
        </template>
      </div>
      <div v-if="!Array.isArray(props.dataSource) || props.dataSource.length === 0" class="z-list-locale">
        <div class="z-list-locale-icon">
          <svg
            t="1695969096886"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8696"
          >
            <path
              d="M831.7 369.4H193.6L64 602v290.3h897.2V602L831.7 369.4zM626.6 604.6c0 62.9-51 113.9-114 113.9s-114-51-114-113.9H117.5l103.8-198h582.5l103.8 198h-281zM502.2 131h39.1v140.6h-39.1zM236.855 200.802l27.647-27.647 99.419 99.418-27.648 27.648zM667.547 272.637l99.418-99.419 27.648 27.648-99.418 99.418z"
              p-id="8697"
              fill="#d9d9d9"
            ></path>
          </svg>
        </div>
        <span>{{ props.locale || 'no data' }}</span>
      </div>
    </div>
    <slot name="footer">
      <div class="z-list-footer">footer</div>
    </slot>
  </div>
</template>

<script setup lang="ts" generic="T extends DataSource">
import { nextTick, ref, computed, onMounted, useSlots, h } from 'vue';
import { getComputedSty, extractNumber } from '../../utils/basicUtilityFunctions';
import type { List, DataSource, ListEmits } from './zList';
import { isArray } from '../../utils/basicUtilityFunctions';

const slots = useSlots();
const containerRef = ref<HTMLDivElement>();
const isLoading = ref(false);

const chi = ref();
const props = withDefaults(defineProps<List<T>>(), {
  infiniteScrolling: true,
  pagination: false,
  scrollLoading: true,
  containerHeight: '320px',
  itemHeight: '65px',
  border: true,
  continueLoad: true,
  size: 'default',
  split: true,
  loadCount: 3,
});

const emit = defineEmits<ListEmits<T>>();

const getViewportEle = () => {
  const wrapperHeight = extractNumber(props.containerHeight);
  const listItemHeight = extractNumber(props.itemHeight);
  const cile = Math.ceil(wrapperHeight / listItemHeight);
  return new Array(cile).fill(true);
};

const isVisibe = ref([...getViewportEle()]);

console.dir(props.dataSource);
console.log(isVisibe.value);

const componentSource = computed(() => {
  return props.dataSource.map((val, index) => {
    if (index <= isVisibe.value.length - 1) {
      return slots?.default?.()[0];
    } else {
      return 'div';
    }
  });
});

const onContainerScroll = (e: any) => {
  const res = [];
  let start = 0;

  for (let i = isVisibe.value.length; i < componentSource.value.length; i++) {
    if (isElementInViewport(chi.value[start++])) {
      res.push(true);
    }
  }

  isVisibe.value.push(...res);
  const target = e.target;
  const scrollTop = target.scrollTop;
  const scrollHeight = target.scrollHeight;
  const clientHeight = target.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    nextTick(() => {
      props.nextDataHandle?.(250);
    });
  }
};

const isElementInViewport = (el: Element) => {
  const rect = el.getBoundingClientRect();
  const viewportHeight = containerRef.value!.clientHeight;
  const isInViewport =
    rect.top >= 0 && rect.bottom <= viewportHeight + extractNumber(props.itemHeight) * props.loadCount;

  return isInViewport;
};
</script>
<style scoped lang="postcss">
.z-list {
  @apply shadow-md h-auto rounded-lg;
}
.z-list-header,
.z-list-footer {
  @apply h-6 p-6 text-base font-black;
}
.z-list-content {
  @apply overflow-y-scroll overscroll-x-none;
}

.z-list-content::-webkit-scrollbar-track {
  display: none;
}

.z-list-content::-webkit-scrollbar-thumb {
  display: none;
}

.z-list-locale {
  @apply flex flex-col justify-center items-center h-full text-fill_color_darker;
  > .z-list-locale-icon {
    @apply w-16 h-16;
  }
}

.z-list-item {
  @apply py-3;

  & > div {
    @apply h-full;
  }
}

.z-list-item:first-child {
  border-top: 1px solid #dedede;
}

.z-list-item:not(:first-child) {
  border-bottom: 1px solid #dedede;
}

@keyframes rotate {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

.rotate-ani {
  animation: rotate 0.5s linear infinite;
}
</style>
