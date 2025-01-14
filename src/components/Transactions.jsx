import './Transactions.css'
import arrow from '../assets/images/arrow.svg'

const Transactions = () => {
    return ( 
        <div className='header'>

            <div className='arrow'>
                <img src={arrow} alt="" />
            </div>
            
            <div className='words'>
                <p>Transactions</p>
            </div>
       

        </div>
    )
}

export default Transactions