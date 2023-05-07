import { sUser } from "@/s_state/s_user";
import DashboardAdminV2 from "@/v2/dashboard"
import { Text } from "@mantine/core";
import { useRouter } from "next/router";


const DashboardV2 = () => {
    const router = useRouter();
    console.log("yoo ini dashboard admin")
    //if ( sUser.value.masterUserRoleId != "2") router.replace("/v2/");

    // return<>ini dashboard admin</>

    return <>
        <DashboardAdminV2 />
    </>
}

export default DashboardV2