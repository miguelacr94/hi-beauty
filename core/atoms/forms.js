import { atom } from "jotai";

export const subscriptionFormAtom = atom({
  step: 0,
  totalSteps: 9,
  data: null,
});
