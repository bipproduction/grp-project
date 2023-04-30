import client from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const signin =async (req:NextApiRequest, res:NextApiResponse) => {
    if(req.method==="POST"){
        const body = req.body
        const data = await client.user.findFirstOrThrow({
            where : {
                AND : {
                    email : body.email,
                    password : body.password,
                    active : true
                }
            },
            select : {
                name : true,
                id : true,
                masterUserRoleId : true,
                email : true
            }
        })

        if(data) return res.status(200).json(data)

        return res.status(204).json({success:false, message:"Akun tidak terdaftar"})
    }else{
        return res.status(204).end()
    }
}

export default signin