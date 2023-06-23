import { atom } from "jotai";
/**
 * @exports Untuk merefresh page paksa / force update
 */
export const refresh_page = atom<any | null>( null)
/**
 * @exports Untuk membuat state baru , untuk update / force update
 */
export const new_state_refresh = atom("2");