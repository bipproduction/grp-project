import { sUser } from "@/s_state/s_user";
import { useRouter } from "next/router";

const LayoutDashboarSuperdAdminV2 = () => {
    const router = useRouter();

    if(sUser.value.masterUserRoleId != "3") router.replace("/v2");
    return (
        <>
            ini dashboard super admin
        </>
    );
};

export default LayoutDashboarSuperdAdminV2;
