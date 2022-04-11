import  {Load} from '../styles/Loading'

import loading from '../assets/loading.svg'

export function Loading () {
    return(
        <Load>
            <img className='loader' src={loading} alt="Loading" />
        </Load>
    )
}