import './Header.css'
import arrow from '../assets/images/arrow.svg'

const Header = () => {
    return ( 
        <div className='header'>

            <div className='arrow'>
                <img src={arrow} alt="" />
            </div>
            
            <div className='words'>
                <p>Add Debit Card</p>
            </div>
       

        </div>
    )
}

export default Header