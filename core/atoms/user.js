import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

export const userAtom = atomWithStorage("user", null); // use RESET from jotai/utils to delete localStorage data
// export const dataAddressAtom = atom(null); 