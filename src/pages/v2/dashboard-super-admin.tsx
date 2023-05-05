import { sUser } from "@/s_state/s_user";
import LayoutDashboarSuperdAdminV2 from "@/v2/dashboad_super_admin"
import { useRouter } from "next/router";

const DashboardSuperAdminV2 = () => {
    const router = useRouter();
    if (sUser.value.masterUserRoleId != "3") router.replace("/v2/");
    
    return <>
        <LayoutDashboarSuperdAdminV2 />
    </>
}

export default DashboardSuperAdminV2