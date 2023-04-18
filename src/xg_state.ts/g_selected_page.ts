import { hookstate, useHookstate } from "@hookstate/core";
import { signal } from "@preact/signals-react";

export const gSelectedPage = hookstate<string>("Dashboard");
export const gSelectedPage2 = hookstate<string>("Data Profile");
export const gSelectedPage3 = hookstate<string>("Data Struktur Partai");

export const sUser = signal<{[key: string]: any } | null>(null)
