import i18next from 'i18next'

export const greetings = () => {
  var date = new Date();
  var hours = date.getHours();

  let message;

  if (hours < 12) {
    message = i18next.t('greeting.morning');
  } else if (hours < 14) {
    message = i18next.t('greeting.afternoon');
  } else if (hours < 20) {
    message = i18next.t('greeting.evening');
  } else {
    message = i18next.t('greeting.night');
  }

  return message;
};

export const ToolbarTransitionHelper = (
  top: number,
  ref: any,
  color: string = "#FFFFFF"
) => {
  let scrollTop = Math.trunc(top) * 5;
  if (scrollTop > 255) {
    scrollTop = 255;
  }
  const hexDist = scrollTop.toString(16);
  ref.current?.style.setProperty("--background", `${color + hexDist}`);
};

export const groupBy = (array: Object[], key: string) => {
  const grouped_array = array.reduce(
    (prevItem: any, currentItem: any, index: number) =>
      currentItem[key] === prevItem[prevItem.length - 1]?.[0]?.[key]
        ? prevItem[prevItem.length - 1].push(currentItem) && prevItem
        : prevItem.push([currentItem]) && prevItem,
    []
  );

  return grouped_array;
};
