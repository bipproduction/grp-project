import { hookstate, useHookstate } from "@hookstate/core";
// import { signal } from "@preact/signals-react";
// const signal = require("@preact/signals-react")
// const {signal} = require("@preact/signals-react")

// export const sUser = signal("")
// export const sUser = signal<{[key: string]: any } | null>(null)

export const gSelectedPage = hookstate<string>("Dashboard");
export const gSelectedPage2 = hookstate<string>("Data Profile");
export const gSelectedPage3 = hookstate<string>("Data Struktur Partai");
