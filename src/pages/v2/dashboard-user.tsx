import { sUser } from "@/s_state/s_user";
import LayoutDashboardUserV2 from "@/v2/dashboard_user";
import { useRouter } from "next/router";


const DashboardUserV2 = () => {
    const router = useRouter();
    if ( sUser.value.masterUserRoleId != "1") router.replace("/v2/");

    return <>
        <LayoutDashboardUserV2 />
    </>
}

export default DashboardUserV2