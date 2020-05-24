import React from "react";
import Placeholder from "../components/Placeholder";
import Layout from '../components/shared/Layout'

const IndexPage = () => (
    <Layout>
        <Placeholder/>
    </Layout>
)

IndexPage.getInitialProps = async () => ({
    namespacesRequired: ['index'],
})
export default IndexPage
