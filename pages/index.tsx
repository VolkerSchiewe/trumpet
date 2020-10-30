import {GetStaticProps, GetStaticPropsContext, NextPage} from "next";
import {useRouter} from "next/router";
import React from "react";
import ContentBlock from "../src/components/landing/ContentBlock";
import Countdown from "../src/components/landing/Countdown";
import LandingCarousel from "../src/components/landing/LandingCarousel";
import {distributeOrchestraData, DistributionArray} from "../src/components/landing/orchestra/distributeOrchestraData";
import Orchestra from "../src/components/landing/orchestra/Orchestra";
import Layout from '../src/components/shared/Layout'
import Logo from "../src/components/shared/Logo";
import NumberWithBorder from "../src/components/shared/NumberWithBorder";
import {getI18nProps, useTranslation, withI18n} from "../src/i18n";

interface Props {
    registrationCount: number;
    orchestraDistribution: DistributionArray;
}

const IndexPage: NextPage<Props> = ({orchestraDistribution, registrationCount}) => {
    const t = useTranslation("home")
    const router = useRouter()
    return (
        <Layout>
            <div className='flex flex-col items-center justify-start w-full p-2'>
                <div className="w-full hidden sm:block" style={{height: '35vw'}}>
                    <LandingCarousel/>
                </div>
                <div className="block sm:hidden">
                    <Logo className="p-3"/>
                    <img className="p-3" src={"/images/headline-black.svg"} alt={"Brüderischer Bläsertag 2021 Berlin"}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 my-5">
                    <ContentBlock color={"magenta"} title={t('Images')}/>
                    <ContentBlock color={"yellow"} title={t("Information")}/>
                    <ContentBlock color={"blue"} title={t("Registration")}
                                  onClick={() => router.push('/registration').then(() => window.scrollTo(0, 0))}/>
                </div>
                <Orchestra className="my-8" orchestraDistribution={orchestraDistribution}/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Countdown title={t("days left")}/>
                    <NumberWithBorder title={t("registrations")} number={registrationCount}/>
                </div>
            </div>
        </Layout>
    );
}


export const getStaticProps: GetStaticProps<Props> = async (ctx: GetStaticPropsContext) => {
    const registrationCount = 50
    return ({
        props: {
            ...await getI18nProps(ctx, ['home']),
            registrationCount,
            orchestraDistribution: distributeOrchestraData(registrationCount)
        },
        revalidate: 1
    });
}

export default withI18n(IndexPage)
