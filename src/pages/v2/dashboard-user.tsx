import { sUser } from "@/s_state/s_user";
import LayoutDashboardUserV2 from "@/v2/dashboard_user";
import { useRouter } from "next/router";


const DashboardUserV2 = () => {
    const router = useRouter();
    //if (sUser.value == undefined) return <></>;
    if ( sUser.value.masterUserRoleId != "1") router.replace("/");

    return <>
        <LayoutDashboardUserV2 />
    </>
}

export default DashboardUserV2