import {NextPageContext} from "next";
import React from "react";
import Countdown from "../components/Countdown";
import Layout from '../components/shared/Layout'
import {getI18nProps, useTranslation, withI18n} from "../utils/i18n";

const IndexPage = () => {
    const t = useTranslation("home")
    return (
        <Layout>
            <div className='flex flex-col items-center w-full py-6'>
                <div className='max-w-lg flex flex-col items-center'>
                    <img style={{width: '70vw'}} src={"/images/logo.svg"} alt={'logo'}/>
                    <img className={'my-6'} style={{width: '70vw'}} src={"/images/headline.svg"} alt={'slogan'}/>

                    <Countdown className='my-5' title={t("days left")}/>
                </div>
            </div>
        </Layout>
    );
}


export const getStaticProps = async (ctx: NextPageContext) => ({
    props: await getI18nProps(ctx, ['home']),
})

export default withI18n(IndexPage)
