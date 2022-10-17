import { getLocalStorage } from "helpers";
import { atom, selector } from "recoil";
import { Shop } from "./model";

export const shopAtom = atom<Shop>({
  key: "shopState",
  default: getLocalStorage('user') as Shop,
});

export const shopSelector = selector({
  key: "shopSelector",
  get: ({ get }) => {
    const user = get(shopAtom);
    return user;
  },
  set: ({set}, userData) => {
    set(shopAtom, userData)
  }
});
