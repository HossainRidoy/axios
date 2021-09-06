import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Posts = (props) => {

    const [userPosts, setUserPosts] = useState([])
    const [loding, setLoding] = useState(true)

    useEffect(() => {
        let getPosts = localStorage.getItem("posts")
        if (getPosts !== null) {
            let postParse = JSON.parse(getPosts)
            let fitletItems = postParse.filter((item) => item.userId === parseInt(props.match.params.id))
            setUserPosts(fitletItems)
            setLoding(false)
        }else{
            setTimeout(()=>{
                let getPosts = localStorage.getItem("posts")
                if (getPosts !== null) {
                    let postParse = JSON.parse(getPosts)
                    let fitletItems = postParse.filter((item) => item.userId === parseInt(props.match.params.id))
                    setUserPosts(fitletItems)
                    setLoding(false)
                }
            },1000)
        }
    }, [props.match.params.id])

    if (loding) {
        return (
            <h2>Loding....</h2>
        )
    }
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    {userPosts && userPosts.length > 0 && userPosts.map((post, index) => (
                        <div key={index} className="col-3 mb-4">
                            <Link to={`/information/${post.id}`} className="text-dark text-decoration-none">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="bg-primary text-center text-white py-2">{post.id}</h4>
                                        <p className="">{post.body}</p>
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Posts
