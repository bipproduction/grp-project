import { api } from "@/lib/api-backend"


export const _loadEditSayap_ById = async () => {
    await fetch(api.apiSumberDayaPartaiGetOne)
}