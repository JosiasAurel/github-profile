import React, { FunctionComponent } from "react"

import { GetServerSideProps } from "next"

import Profile from "../components/profile"

import styles from "./profile.module.css"

type Data = {
    
    avatar_url: string,
    bio: string,
    blog: string,
    company: string,
    created_at: string,
    email: string,
    events_url: string,
    followers: number,
    followers_url: string,
    following: number,
    following_url: string,
    gists_url: string,
    gravatar_id: string,
    hireable: any,
    html_url: string,
    id: number,
    location: string,
    login: string,
    name: string,
    node_id: string,
    organizations_url: string,
    public_gists: number,
    public_repos: number,
    received_events_url: string,
    repos_url: string,
    site_admin: boolean,
    starred_url: string,
    subscriptions_url: string,
    twitter_username: string,
    type: string,
    updated_at: string,
    url: string

}


type pageProp = {
    name: string,
    avatar: string,
    bio: string,
    blog: string,
    twitter: string,
    location: string,
    url: string,
    public_repos: number,
    email: any,
    followers: number,
    following: number
}

const ProfileCard: FunctionComponent<pageProp> = ({ userObj }): JSX.Element => {
    return (
        <div className={styles.cardContainer}>
            <Profile 
            name={userObj.name} 
            location={userObj.location}
            username={userObj.login}
             />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { profile } = ctx.query

    const result = await fetch(`https://api.github.com/users/${profile}`)
    const data = await result.json()

    console.log(data)
    const userObj = {
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        bio: data.bio ? data.bio : "",
        blog: data.blog ? data.blog : "",
        twitter: data.twitter_username ? data.twitter_username : "",
        location: data.location ? data.location : "",
        url: data.url,
        followers: data.followers,
        following: data.following
    }

    return { props: { userObj } }
}

export default ProfileCard