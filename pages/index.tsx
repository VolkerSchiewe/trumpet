import {Hidden} from "@material-ui/core";
import {NextPageContext} from "next";
import React from "react";
import Countdown from "../components/landing/Countdown";
import LandingCarousel from "../components/landing/LandingCarousel";
import Layout from '../components/shared/Layout'
import {getI18nProps, useTranslation, withI18n} from "../utils/i18n";

const IndexPage = () => {
    const t = useTranslation("home")
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
                <Countdown title={t("days left")}/>
            </div>
        </Layout>
    );
}


export const getStaticProps = async (ctx: NextPageContext) => ({
    props: await getI18nProps(ctx, ['home']),
})

export default withI18n(IndexPage)
