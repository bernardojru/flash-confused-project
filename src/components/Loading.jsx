import  {Load} from '../styles/Loading'

export function Loading () {
    return(
        <Load>
            <div className="loader-wrapper">
                <div className="loader">
                    <div className="loader loader-inner"></div>
                </div>
            </div>
        </Load>
    )
}