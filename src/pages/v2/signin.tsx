import { sUser } from "@/s_state/s_user";
import FormSignIn from "@/v2/auth/form-signin"
import _ from "lodash";
import { useRouter } from "next/router";

const SignIn = ({ onSignUp }: { onSignUp: () => void }) => {
    const router = useRouter();
    if (sUser.value == undefined) return <></>;
    if (sUser.value != undefined || !_.isEmpty(sUser.value)) router.replace("/v2/");

    return <>
        <FormSignIn onSignUp={onSignUp} />
    </>
}

export default SignIn