import axios from "axios";
import { useEffect, useState } from "react";
import Blogbox from "../Components/Blogbox";
import FeaturedBlog from "../Components/FeaturedBlog";
import Title from "../Components/Title";

export default function Blog() {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/blog`)
            .then(res => {
                setBlog(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <FeaturedBlog />
            <section className="text-gray-600 body-font">
                <div className="container py-5 mx-auto text-center">
                    <Title title="Latest Articles" />
                    <div className="flex flex-wrap my-4">
                        {blog && blog.map((item, i) => {
                            return <Blogbox key={item._id} data={item} />
                        })}
                    </div>
                </div >
            </section >
        </>
    )
}
