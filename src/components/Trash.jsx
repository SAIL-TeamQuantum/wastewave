import './Trash.css'
import arrow from '../assets/images/arrow.svg'

const Trash = () => {
    return ( 
        <div className='header'>

            <div className='arrow'>
                <img src={arrow} alt="" />
            </div>
            
            <div className='words'>
                <p>Trash History</p>
            </div>
       

        </div>
    )
}

export default Trash