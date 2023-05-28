import { _editLoadSayap_ByStatusSeacrh, _loadEditSumberDayaPartai_ById } from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai"
import { useShallowEffect } from "@mantine/hooks"
import { useAtom } from "jotai"

export const SayapEditV2 = ({thisClosed, setId}: {setId: any, thisClosed: any}) => {
    const [targetEdit, setTargetEdit] = useAtom(_editLoadSayap_ByStatusSeacrh)


    useShallowEffect(() => {
        _loadEditSumberDayaPartai_ById(setId, setTargetEdit)
    },[])

    return <>
    {/* {JSON.stringify(targetEdit)} */}
    
    
    </>
}