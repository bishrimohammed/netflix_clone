import './header.css'
import logo from '../assets/images/logo.png'
import dropdown from '../assets/images/down-icon.png'
const Header = ()=>{
return (
    <div className="header">
        <nav>
            <img src={logo} alt="" />
            <div className="btn">
                <button className='languagebtn'>English <img src={dropdown} alt="" /></button>
                <button>Sign In</button>
            </div>
        </nav>
        <div className="header-content">
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere, Cancel anytime.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fuga?</p>
            <div className="emailsignup">
                <input type="text"  placeholder='Email Adress'/>
                <button>Get Started</button>
            </div>
        </div>
    </div>
)
}
export default Header