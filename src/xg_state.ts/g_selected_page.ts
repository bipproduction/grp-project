import { hookstate, useHookstate } from "@hookstate/core";

export const gSelectedPage = hookstate<string>("Dashboard");
export const gSelectedPage2 = hookstate<string>("Data Profile");
export const gSelectedPage3 = hookstate<string>("Data Struktur Partai");
