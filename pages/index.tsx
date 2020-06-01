import {NextPageContext} from "next";
import React from "react";
import Countdown from "../components/landing/Countdown";
import Layout from '../components/shared/Layout'
import Carousel from '@brainhubeu/react-carousel';
import {getI18nProps, useTranslation, withI18n} from "../utils/i18n";

const IndexPage = () => {
    const t = useTranslation("home")
    return (
        <Layout>
            <div className='flex flex-col items-center justify-start w-full p-2'>
                <Carousel
                    dots
                    infinite
                    autoPlay={10000}
                >
                    <div className='bg-white flex flex-row items-start '>
                        <img className="w-2/3 px-2" src={"images/campus.jpg"}/>
                        <img className="w-1/3 px-1" src={"images/logo.svg"}/>
                    </div>
                    <div className='bg-white flex flex-row '>
                        <img className="w-1/3 p-1" src={"images/logo.svg"}/>
                        <img className="w-2/3 p-2" src={"images/oberbaumbruecke.jpg"}/>
                    </div>
                </Carousel>
                <Countdown title={t("days left")}/>
            </div>
        </Layout>
    );
}


export const getStaticProps = async (ctx: NextPageContext) => ({
    props: await getI18nProps(ctx, ['home']),
})

export default withI18n(IndexPage)
