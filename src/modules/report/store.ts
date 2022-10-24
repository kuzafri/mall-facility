// import { reportFactory } from 'modules';
import { atom, selector } from "recoil";
import { Report } from "./model";

export const reportAtom = atom<Report>({
  key: "reportState",
  default: new Report(),
});

export const reportSelector = selector({
  key: "reportSelector",
  get: async ({ get }) => {
    const report = new Report();
    return report
  },
  set: ({set}, report) => {
    set(reportAtom, report)
  }
});
