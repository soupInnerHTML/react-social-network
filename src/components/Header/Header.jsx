import _ from './Header.module.css'
/* Ultrashort name _ for root styles*/
import logoSrc from './logo.svg'

const Header = () => {
    return (
        
            <header className={_.header  + ' App-block'}>
                <div className={_.headerContainer  + " App-container"}>
                    <img src={logoSrc} />
                </div>
            </header>
    )
}

export default Header