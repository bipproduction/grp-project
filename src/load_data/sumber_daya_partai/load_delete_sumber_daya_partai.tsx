import { api } from "@/lib/api-backend"


export const _DeleteData_SumberDayaPartai = async (id: string) => {
    await fetch(api.apiSumberDayaPartaiHapus + `?id=${id}`)
    .then((res) => res.json())
    .then(console.log)
}