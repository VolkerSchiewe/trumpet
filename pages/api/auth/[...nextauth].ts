import {NextApiRequest, NextApiResponse} from "next";
// @ts-ignore
import NextAuth, {InitOptions} from 'next-auth'
// @ts-ignore
import Providers from 'next-auth/providers'

export const allowedUsers = ["volker.s1994@gmail.com", "bagpipe.j@gmail.com", "mr.querdenker@gmail.com"]

export const getSite = () => process.env.NEXT_PUBLIC_SITE ? `https://${process.env.NEXT_PUBLIC_SITE}` : 'http://localhost:3000'
const options: InitOptions = {
    site: getSite(),
    providers: [
        Providers.Google({
            clientId: "183076695944-hu2dgs4aorbdagfok2kpg05avakqltfi.apps.googleusercontent.com",
            clientSecret: "2Z6SgXK2YjqFwZ2sRUGgop2x"
        }),
    ],
    callbacks: {
        redirect: async (_url: string, baseUrl: string) => {
            return baseUrl + "/admin"
        },
        signin: async (profile, _account, _metadata) => {
            return allowedUsers.includes(profile?.email ?? "")
        }
    }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)