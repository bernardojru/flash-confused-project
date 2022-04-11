import users from '../assets/users.svg'

import {MainConst} from '../styles/Main'

export function ContainerMain() {
    return(
        <MainConst>
            <img src={users} alt="World" />
        </MainConst>
    )
}