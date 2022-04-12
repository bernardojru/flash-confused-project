import {HeaderTop} from '../styles/Header'

import Lupa from '../assets/loupe.png'
import LocalIcon from '../assets/localizacao.png'
import User from '../assets/user.png'

export function NavTop () {
    return (
        <HeaderTop>
            <div className="localization">
                <img src={LocalIcon} alt="" />
                <div id="title">Luanda</div>
            </div>
            <div className="container-input">
                <img src={Lupa} alt="Lupa" />
                <input className='input' type="text"  placeholder='Pesquisar'/>
            </div>
            <div className="user">
                <img src={User} alt="" />
            </div>
        </HeaderTop>
    )
}