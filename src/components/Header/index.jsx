import Logo from '../../assets/logo.png';

function Header() {

    return(
        <div>
            <h1>Header</h1>
            <img src={Logo} alt='Logo'style={{ width: 200 }} />
        </div>
    )
}

export default Header;