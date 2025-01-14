import './Payment.css'
import Opay from '../assets/images/opay.svg'
import Palmpay from '../assets/images/palmpay.svg'
import Access from '../assets/images/access.svg' 
import Currency from '../assets/images/currency.svg'
import Navs from '../assets/images/navs.svg'

const Payment = () => {
    return (
        <div className='payment'>
            <div className='say'>
                <img src={Opay} alt="" />
                <h3>Opay</h3>
                <p>Dec 12 2021 at 10:00 pm</p>
                <img src={Currency} alt="" className='currency' />
            </div>

            <div className='says'>
                <img src={Palmpay} alt="" />
                <h3>Palmpay</h3>
                <p>Dec 12 2021 at 10:00 pm</p>
                <img src={Currency} alt="" className='currency'/>
            </div>

            <div className='sayss'>
                <img src={Access} alt="" />
                <h3>Access Bank</h3>
                <p>Dec 12 2021 at 10:00 pm</p>
                <img src={Currency} alt="" className='currency' />
            </div>

           
        
        </div>
    )
}

export default Payment