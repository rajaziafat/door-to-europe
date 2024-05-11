import { atom } from "jotai";
import moment from "moment";
import { IndividualityOptions, NailTimeOptions, NearestBranchOptions, ageGroupOptions } from "./utils/options";

export const loadingAtom = atom(false);

export const currentStepAtom = atom(1);

export const modalDisplayAtom = atom<"TermsOfUse" | "accessibility" | "none">(
  "none"
);

export const fullNameAtom = atom("");

export const nailTimeAtom = atom<NailTimeOptions | "">("");

export const individualityAtom = atom<IndividualityOptions[]>([]);

export const ageGroupAtom = atom<ageGroupOptions | "">("");

export const nearestBranchAtom = atom<NearestBranchOptions | "">("");

export const phoneNumberAtom = atom("");

export const createdAtAtom = atom(
  moment(new Date()).format("Do MMM YYYY, h:mm a")
);

export const formIdAtom = atom("");

export const continueBtnLoadingAtom = atom(false);

export const errorMsgAtom = atom("");

export const isPrivayReadAtom = atom(true);
