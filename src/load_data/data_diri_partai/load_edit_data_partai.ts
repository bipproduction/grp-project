import { api } from "@/lib/api-backend"

export const _loadEditDataDiri_ById = async (id: any, setTargetDataEdit: any) => {
    await fetch(api.apiDataDiriUpdate + `?id=${id}`)
    .then((val) => val.json())
    .then((v) => setTargetDataEdit(v))
}