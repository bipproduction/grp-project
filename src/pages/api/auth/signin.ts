import client from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        console.log(body)
        const data = await client.user.findFirst({
            where: {
                OR: [
                    {
                        AND: {
                            email: body.email,
                            password: body.password,
                            active: true
                        }
                    },
                    {
                        AND: {
                            username: body.email,
                            password: body.password,
                            active: true
                        }
                    }
                ]
            },
            select: {
                username: true,
                id: true,
                masterUserRoleId: true,
                email: true
            }
        })

        if (data) return res.status(200).json(data)

        return res.status(204).end()
    } else {
        return res.status(204).end()
    }
}

export default signin