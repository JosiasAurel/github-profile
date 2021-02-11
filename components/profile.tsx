import React, { FunctionComponent } from "react"

import Image from "next/image"

import styles from "./profile.module.css"

type ProfileProps = {
    name: string,
    photo: string,
    location: string,
    username: string,
    bio: string,
    twitter: string,
    followers: number,
    following: number,
    blog: string
}

const Profile: FunctionComponent<ProfileProps> = ({ name, username, photo, location, bio, twitter, followers, following, blog }: ProfileProps): JSX.Element => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.mainInfo}>
                <span className={styles.imageContainer}>
                    { photo ? <img className={styles.userImage} src={photo} /> : <img className={styles.userImage} src="/user.png" />}
                </span>
                <span>
                    <h3>{name}</h3>
                    <h4 style={{color: "grey"}}> {username} @{ twitter } </h4>
                    <p> {location} </p>
                </span>
            </div>
            <span style={{maxWidth:"10%"}}>
                <p style={{ wordWrap: "break-word", textAlign: "center"}}> {bio} </p>
            </span>

            <span className={styles.follow}>
                <p> {followers} followers </p>
                <p> {following} following </p>
            </span>

            <span  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <a className={styles.blog} href={blog}>{blog}</a>
            </span>
        </div>
    )
}

export default Profile

