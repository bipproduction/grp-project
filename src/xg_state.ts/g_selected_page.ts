import { hookstate, useHookstate } from "@hookstate/core";
import { atom } from "jotai";
// import { signal } from "@preact/signals-react";
// const signal = require("@preact/signals-react")
const { signal } = require("@preact/signals-react");

export const sUser = signal("");
// export const sUser = signal<{[key: string]: any } | null>(null)

export const gSelectedPage = hookstate<string>("Dashboard");
export const gSelectedPage2 = hookstate<string>("Data Profile");
export const gSelectedPage3 = hookstate<string>("Data Struktur Partai");

export const _val_get = atom({
  masterTingkatPengurusId: undefined,
  masterStatusKeanggotaanId: undefined,
});

export const _get_tingkat_satap = atom({
  masterTingkatPengurusId: undefined,
  masterStatusKeanggotaanId: undefined,
});

export const _get_kader = atom({
  masterStatusKeanggotaanId: undefined,
});

export const _anggota = atom({
  masterStatusKeanggotaanId: undefined,
});

export const ambil_data = atom({
  masterTingkatPengurusId: "",
  masterStatusKeanggotaanId: "",
});
export const ambil_data_sayap = atom({
  masterTingkatSayapId: "",
  masterStatusKeanggotaanId: "",
});
