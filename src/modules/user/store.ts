import { getLocalStorage } from "helpers";
import { atom, selector } from "recoil";
import { User } from "./model";

export const userAtom = atom<User>({
  key: "userState",
  default: getLocalStorage("user") as User,
});

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const user = get(userAtom);
    return user;
  },
  set: ({ set }, userData) => {
    set(userAtom, userData);
  },
});
