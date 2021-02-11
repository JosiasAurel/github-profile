import React, { FunctionComponent } from "react"
import { AppProps } from "next/app"

const App: FunctionComponent<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <Component {...pageProps} />
    )
}

export default App