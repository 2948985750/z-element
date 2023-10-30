import { ref } from 'vue';

export const useChecked = () => {
  const checked = ref<boolean>(false);

  const switchChecked = (isChecked?: boolean) => {
    if (typeof isChecked === 'boolean') {
      checked.value = isChecked;
      return;
    }
    checked.value = !checked.value;
  };
  return { checked, switchChecked };
};
