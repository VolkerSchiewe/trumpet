import React, {useEffect, useRef, useState} from "react"

const commonStyles = {
    position: "absolute" as "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    objectFit: "cover" as "cover",
    objectPosition: "center center",
    transition: "opacity 500ms ease 0ms",
}

interface Props {
    jpegPath: string
    webpPath: string
    preview: string
    alt: string
}

const LazyImage: React.FC<Props> = ({jpegPath, webpPath, preview, alt}) => {
    const [loaded, setLoaded] = useState(false)
    const onLoad = () => setLoaded(true)
    const jpeg = useRef<HTMLSourceElement>(null)
    const webp = useRef<HTMLSourceElement>(null)
    const img = useRef<HTMLImageElement>(null)

    const stylesPreview = {
        ...commonStyles,
        opacity: loaded ? 0 : 1
    }
    const stylesImage = {
        ...commonStyles,
        opacity: loaded ? 1 : 0
    }
    useEffect(() => {
        // @ts-ignore
        if (jpeg.current?.complete || webp.current?.complete || img.current?.complete) setLoaded(true)
    }, [jpeg, webp, img])
    return (
        <div className="absolute h-full w-full">
            <img src={preview} alt={alt} style={stylesPreview}/>
            <picture onLoad={onLoad} >
                <source ref={jpeg} style={stylesImage} srcSet={webpPath}
                        type="image/webp"/>
                <source ref={webp} style={stylesImage} srcSet={jpegPath}
                        type="image/jpeg"/>
                <img ref={img} style={stylesImage} src={jpegPath}
                          alt={alt}/>
            </picture>
        </div>
    )
}

export default LazyImage;
