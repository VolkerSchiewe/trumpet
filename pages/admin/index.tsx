import {AppBar, Button, CircularProgress, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";
// @ts-ignore
import {signout, useSession} from 'next-auth/client'
import Layout from "../../src/components/shared/Layout";


const AdminIndex: React.FC = () => {
    const [session, loading] = useSession()
    const router = useRouter()
    if (!loading && !session) {
        router.push(`/api/auth/signin`)
        return null
    }
    return (
        <Layout disableGutters>
            {loading ? (
                <div className="w-full h-full flex justify-center items-center mt-10">
                    <CircularProgress size={200}/>
                </div>
            ) : (
                session && (
                    <>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" className="flex-grow">
                                    Administration
                                </Typography>
                                <Typography>{session.user.name}</Typography>
                                <Button color="inherit" onClick={signout}>Logout</Button>
                            </Toolbar>
                        </AppBar>
                        <div className="p-5">
                            <Link href={"/api/admin/download-registrations"}>
                                <Button variant={'outlined'}>Download registrations</Button>

                            </Link>
                        </div>
                    </>
                )
            )}
        </Layout>
    )
}

export default AdminIndex