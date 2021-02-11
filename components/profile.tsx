import React, { FunctionComponent } from "react"

type ProfileProps = {
    name: string,
    photo: string
}

const Profile: FunctionComponent<ProfileProps> = ({ name, photo }: ProfileProps): JSX.Element => {
    return (
        <div>
            { name }
        </div>
    )
}

export default Profile

