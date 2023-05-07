import { api } from "@/lib/api-backend";
import { sUser } from "@/s_state/s_user"
import FormDataDiriV2 from "@/v2/form_data_diri/form_data_diri";
import { useRouter } from "next/router"

const HomeV2 = () => {
    const router = useRouter();

    if (sUser.value.masterUserRoleId == "3") {// user role == super admin
        //harusnya ke dashboard  super admin (blm dibuat)
        router.replace("/v2/dashboard-super-admin");
    } else if (sUser.value.masterUserRoleId == "2") {// user role == admin
        router.replace("/v2/dashboard");
    } else {// user role == user
        // cek data diri user
        const dataDiri = fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
            .then(async (res) => {
                if (res.status === 200) {
                    //ke home home user
                    router.replace("/v2/home");
                } else {
                    router.replace("/v2/form-data-diri");
                }
            });
    }


    return <></>


    // return <>
    //     <FormDataDiriV2 />
    // </>
}

export default HomeV2