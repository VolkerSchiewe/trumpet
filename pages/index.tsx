import {Hidden, NoSsr} from "@material-ui/core";
import {GetStaticProps, GetStaticPropsContext, NextPage} from "next";
import {useRouter} from "next/router";
import React from "react";
import ContentBlock from "../components/landing/ContentBlock";
import Countdown from "../components/landing/Countdown";
import LandingCarousel from "../components/landing/LandingCarousel";
import Orchestra from "../components/landing/orchestra/Orchestra";
import Layout from '../components/shared/Layout'
import NumberWithBorder from "../components/shared/NumberWithBorder";
import {getI18nProps, useTranslation, withI18n} from "../utils/i18n";

interface Props {
    registrationCount: number;
}

const IndexPage: NextPage<Props> = ({registrationCount}) => {
    const t = useTranslation("home")
    const router = useRouter()
    return (
        <Layout>
            <div className='flex flex-col items-center justify-start w-full p-2'>
                <Hidden xsDown>
                    <LandingCarousel/>
                </Hidden>
                <Hidden smUp>
                    <img className="p-3" src={"images/logo.svg"} alt={"logo"}/>
                    <img className="p-3" src={"images/headline-black.svg"} alt={"headline"}/>
                </Hidden>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 my-5">
                    <ContentBlock color={"blue"} title={"Bilder"}/>
                    <ContentBlock color={"yellow"} title={"Infos"}/>
                    <ContentBlock color={"magenta"} title={"Anmeldung"}
                                  onClick={() => router.push('/registration').then(() => window.scrollTo(0, 0))}/>
                </div>
                <NoSsr>
                    <Orchestra className="my-8" registrationsCount={registrationCount}/>
                </NoSsr>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Countdown title={t("days left")}/>
                    <NumberWithBorder title={t("registrations")} number={registrationCount}/>
                </div>
            </div>
        </Layout>
    );
}


export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => ({
    props: {...await getI18nProps(ctx, ['home']), registrationCount: 50},
    unstable_revalidate: 1
})

export default withI18n<Props>(IndexPage)
