import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../layout';
import Users from "../axios/users"
import Posts from "../axios/posts"
import Infomation from '../axios/infomation';
import axios from 'axios';

const Roudes = () => {

    useEffect(() => {
        let getLocalStorUsers = localStorage.getItem("users")
        if (getLocalStorUsers === null) {
            getUsers()
        }
        let getLocalStorPosts = localStorage.getItem("posts")
        if (getLocalStorPosts === null) {
            getPosts()
        }
    }, [])

    const getUsers = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((respons) => {
            localStorage.setItem("users", JSON.stringify(respons.data))
        }).catch((error) => {
            console.log(error.respons)
        })
    }


    const getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((respons) => {
            localStorage.setItem("posts", JSON.stringify(respons.data))
        }).catch((error) => {
            console.log(error.respons)
        })
    }


    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Users} />
                    <Route path="/posts/:username/:id" exact component={Posts} />
                    <Route path="/information/:id" exact component={Infomation} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};
export default Roudes;