import { getLocalStorage } from "helpers";
import { atom, selector } from "recoil";
import { Report } from "./model";

export const reportAtom = atom<Report>({
  key: "reportState",
  default: getLocalStorage('user') as Report,
});

export const reportSelector = selector({
  key: "reportSelector",
  get: ({ get }) => {
    const user = get(reportAtom);
    return user;
  },
  set: ({set}, userData) => {
    set(reportAtom, userData)
  }
});
