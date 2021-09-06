import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [userList, setUserList] = useState([])

    const [loding, setLoding] = useState(true)


    useEffect(() => {
        let getLocalStorUsers = localStorage.getItem("users")
        if (getLocalStorUsers !== null) {
            setUserList(JSON.parse(getLocalStorUsers))
            setLoding(false)
        } else {
            setTimeout(() => {
                let getLocalStorUsers = localStorage.getItem("users")
                if (getLocalStorUsers !== null) {
                    setUserList(JSON.parse(getLocalStorUsers))
                    setLoding(false)
                }
            }, 1000)
        }
    }, [])

    if (loding) {
        return (
            <h2>Loding.....</h2>
        )
    }


    const onChangeSearch = (e) => {
        const { name, value } = e.target;

        let getLocalStorUsers = localStorage.getItem("users")
        let parseData = JSON.parse(getLocalStorUsers);
  
        let filterItem = parseData.filter((item) => item.username.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1)
        filterItem.length > 0 ? setUserList(filterItem):setUserList(parseData)

    }



    return (
        <section className="py-5">
            <div className="container">
                <div className='py-5'>
                    <input onChange={onChangeSearch} className="form-control" type="text" placeholder="Search" />
                </div>
                <div className="row">
                    {userList && userList.length > 0 && userList.map((user, index) => (
                        <div key={index} className="col-3 mb-4">
                            <Link to={`/posts/${user.username}/${user.id}`} className="text-dark text-decoration-none">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="bg-danger text-center text-white py-2">{user.id}</h4>
                                        <h4 className="">User Name : {user.username}</h4>
                                        <p className="">Email :{user.email}</p>
                                        <button className="btn btn-danger">Details</button>
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

export default Users
