import i18next from "i18next";

export const greetings = () => {
  var date = new Date();
  var hours = date.getHours();

  let message;

  if (hours < 12) {
    message = i18next.t("greeting.morning");
  } else if (hours < 14) {
    message = i18next.t("greeting.afternoon");
  } else if (hours < 20) {
    message = i18next.t("greeting.evening");
  } else {
    message = i18next.t("greeting.night");
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

export const generate_token = () => {
  var a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];
  for (var i = 0; i < 12; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = (a as any)[j];
  }
  return b.join("");
};

export const setLocalStorage = async (key: string, data: any) => {
  await new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      resolve("success");
    } catch (error) {
      reject(error);
    }
  });
};

export const getLocalStorage = (key: string) => {
  let data = {};
  try {
    if (localStorage.getItem(key))
      data = JSON.parse(localStorage.getItem(key)!);
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const removeLocalStorage = async (key: string) => {
  await new Promise((resolve, reject) => {
    if (key) {
      localStorage.removeItem(key);
      resolve("success");
    } else {
      reject("error");
    }
  });
};
