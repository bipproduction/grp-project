import { sUser } from "@/s_state/s_user";
import FormSignUp from "@/v2/auth/form-signup"
import { useRouter } from "next/router";

const SignUp = () => {
    const router = useRouter();
    // if (sUser.value == undefined) return <></>;
    if (sUser.value != undefined) router.replace("/v2/");
    return <>
    <FormSignUp/>
    
    </>
}

export default SignUp