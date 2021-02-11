import React, { FunctionComponent } from "react"

import Image from "next/image"

import styles from "./profile.module.css"

type ProfileProps = {
    name: string,
    photo: string,
    location: string,
    username: string
}

const Profile: FunctionComponent<ProfileProps> = ({ name, username, photo, location }: ProfileProps): JSX.Element => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.mainInfo}>
                <span className={styles.imageContainer}>
                    { photo ? <Image src={photo} width="100px" height="100px" /> : <Image src="/user.png" width="100px" height="100px" />}
                </span>
                <span>
                    <h2>{name}</h2>
                    <h3 style={{color: "grey"}}> {username} </h3>
                    <p> {location} </p>
                </span>
            </div>
        </div>
    )
}

export default Profile

