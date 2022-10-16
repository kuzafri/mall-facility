import { getLocalStorage } from "helpers";
import { atom, selector } from "recoil";
import { ReportType } from "./model";

export const reportTypeAtom = atom<ReportType>({
  key: "reportTypeState",
  default: getLocalStorage('user') as ReportType,
});

export const reportTypeSelector = selector({
  key: "reportTypeSelector",
  get: ({ get }) => {
    const user = get(reportTypeAtom);
    return user;
  },
  set: ({set}, userData) => {
    set(reportTypeAtom, userData)
  }
});
