import {Button, CircularProgress, Typography} from "@material-ui/core";
import {useRouter} from "next/router";
import React from "react";
// @ts-ignore
import {useSession} from 'next-auth/client'
import Layout from "../../src/components/shared/Layout";


const AdminIndex: React.FC = () => {
    const [session, loading] = useSession()
    const router = useRouter()
    if (!loading && !session) {
        router.push(`/api/auth/signin`)
        return null
    }
    return (
        <Layout>
            {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                    <CircularProgress size={200}/>
                </div>
            ) : (
                session && (
                    <>
                        <Typography variant={"h1"}>Administration</Typography>
                        <Typography>Hello {session.user.name}</Typography>
                        <Button variant={'outlined'}>Download registrations</Button>
                    </>
                )
            )}
        </Layout>
    )
}

export default AdminIndex