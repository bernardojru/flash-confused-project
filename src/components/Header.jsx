import {HeaderTop} from '../styles/Header'

import Lupa from '../assets/loupe.png'

export function NavTop () {
    return (
        <HeaderTop>
            <div id="title">confused</div>
            <div className="container-input">
                <img src={Lupa} alt="Lupa" />
                <input className='input' type="text"  placeholder='Pesquisar por qualquer coisa'/>
            </div>
        </HeaderTop>
    )
}