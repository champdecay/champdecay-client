import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat'
import axios from "axios";

export default function Post() {
    dayjs.extend(advancedFormat)
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const { slug } = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/blog/${slug}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    console.log(data);
    return (
        loading ? <div>Loading...</div> :
            <div className="wrapper">
                <div className="text-white body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        {data.featured_image && <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" alt="hero" src={data.featured_image} />
                        </div>}
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center max-w-screen-lg">
                            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-300 mb-1"><span className="uppercase">{data.tags.map(el => el)}</span> | {dayjs(data.createdAt).format("Do MMM, YYYY")}</h2>
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{data.name}</h1>
                            <p className="mb-8 leading-relaxed">{data.excerpt}</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="blog-content px-5" dangerouslySetInnerHTML={data.content ? { __html: data.content } : { __html: "" }}></div>
                </div>
            </div>
    )
}
