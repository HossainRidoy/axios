import React, { useEffect, useState } from 'react'

const Infomation = (props) => {

    const [details, setDetails] = useState([])
    const [loding, setLoding] = useState(true)

    useEffect(() => {
        let getPostsView = localStorage.getItem("posts")

        if (getPostsView !== null) {
            let viewParse = JSON.parse(getPostsView)
            let filterItems = viewParse.filter((item) => item.id === parseInt(props.match.params.id))
            setDetails(filterItems[0])
            setLoding(false)
        }else{
            setTimeout(()=>{
                let getPostsView = localStorage.getItem("posts")

                if (getPostsView !== null) {
                    let viewParse = JSON.parse(getPostsView)
                    let filterItems = viewParse.filter((item) => item.id === parseInt(props.match.params.id))
                    setDetails(filterItems[0])
                    setLoding(false)
                }
            },1000)
        }
    }, [])


    if (loding) {
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-6 m-auto">
                        <div className="card">
                            <div className="card-header">
                                <h4>Id: {details.id}</h4>
                            </div>
                            <div className="card-body">
                                <h3>Title : {details.title}</h3>
                                <p>Body : {details.body}</p>
                                <p>Title : {details.title}</p>
                            </div>
                            <div className="card-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Infomation

