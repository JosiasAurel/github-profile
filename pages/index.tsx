import React, { FunctionComponent } from "react"
import styles from "./index.module.css"

const Index: FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.mainIndexPage}>
            <div>
                <h2 className={styles.title}>Get your GitHub Profile Card</h2>
                <input className={styles.username} type="text" placeholder="Enter your GitHub username e.g JosiasAurel"/>
            </div>
        </div>
    )
}

export default Index