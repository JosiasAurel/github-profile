
import React, { FunctionComponent, useState } from "react"
import styles from "./index.module.css"

const Index: FunctionComponent = (): JSX.Element => {
    const [profile, setProfile] = useState("")
    const formSubmit = (e) => {
        e.preventDefault()
        location.pathname = (`/${profile}`)
    }
    return (
        <div className={styles.mainIndexPage}>
            <div>
                <form onSubmit={formSubmit}>
                <h2 className={styles.title}>Get your GitHub Profile Card</h2>
                <input 
                value={profile} 
                className={styles.username} 
                type="text" 
                placeholder="Enter your GitHub username e.g JosiasAurel"
                onChange={(e) => setProfile(e.target.value)}
                />
            </form>

            <footer>
                <p>Coded by <a href="https://josiasaurel.tech">Josias Aurel</a></p>
            </footer>
            </div>
        </div>
    )
}

export default Index