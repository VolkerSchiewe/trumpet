import React from "react";
import Countdown from "../components/Countdown";
import Layout from '../components/shared/Layout'

const IndexPage = () => (
    <Layout>
        <div className='flex flex-col items-center w-full py-6'>
            <div className='max-w-lg flex flex-col items-center'>
                <img style={{width: '70vw'}} src={"/images/logo.svg"} alt={'logo'}/>
                <img className={'my-6'} style={{width: '70vw'}} src={"/images/headline.svg"} alt={'slogan'}/>

                <Countdown className='my-5' title={"Tage bis Beginn"}/>
            </div>
        </div>
    </Layout>
)

IndexPage.getInitialProps = async () => ({
    namespacesRequired: ['index'],
})
export default IndexPage
