import { api } from "@/lib/api-backend";

export async function _postLogUser(
    user : any,
    activity : any,
    deskripsi : any
) {
    const body = {
        userId : user,
        activity : activity,
        deskripsi : deskripsi
    }

    await fetch(api.apiLogUserPost,{
        method: "POST",
        headers : {
            "Content-Type":"application/json",
        },
        body : JSON.stringify(body)
    });
}