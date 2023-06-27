import { ModelAsetPartai } from "@/model/interface_aset_partai";
import { hookstate } from "@hookstate/core";

export const val_modal_edit = hookstate(false)
export const val_modal_lampiiran = hookstate(false)
export const val_modal_tmbh_lampiran = hookstate(false)

export const value_id_aset = hookstate("")