import {NoSsr} from "@material-ui/core";
import {NextPage} from "next";
import React from "react";
import ImageViewer from "../src/components/gallery/ImageViewer";
import Layout from "../src/components/shared/Layout";
import {useTranslation, withI18n} from "../src/i18n";

interface Props {
}

const GalleryPage: NextPage<Props> = ({}) => {
    const t = useTranslation("home")
    return (
        <Layout disableGutters>
            <div className={"w-screen h-screen fixed bg-black bg-opacity-75"}>
                <div className={"max-h-screen max-w-screen absolute inset-0"}>
                    <NoSsr>
                        <ImageViewer/>
                    </NoSsr>
                </div>
            </div>
        </Layout>
    );
}


export default withI18n(GalleryPage)
