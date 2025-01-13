import './Body.css'
import Card from '../assets/images/card.svg'
import Group from '../assets/images/Group.svg'
import Fix from '../assets/images/Fix.svg'
import Calender from '../assets/images/calender.svg'
import Cvv from '../assets/images/cvv.svg'
import Rader from '../assets/images/rader.svg'
import CustomAlertDMX from './CustomAlertDMX'
import arrow from '../assets/images/arrow.svg'

const Body = () => {
    return(
        <div className='body'>
             <div className='header'>
            
                        <div className='arrow'>
                            <img src={arrow} alt="" />
                        </div>
                        
                        <div className='words'>
                            <p>Add Debit Card</p>
                        </div>
                   
            
                    </div>
            
            <img src={Card} alt="" className='card'/>
            <div className='fittings'>
                <input type="text" placeholder='Name on the card' className='text'/> 
                <img src={Group} alt="" className='itext'/>
                <input type="number" placeholder='Card number' className='number'/> 
                <img src={Fix} alt="" className='inumber'/>
                <input type="text" placeholder='Month / Year' className='calender'/>
                <img src={Calender} alt="" className='icalender'/>
                <input type="number" placeholder='CVV' className='cvv'/>
                <img src={Cvv} alt="" className='icvv' />
            </div>

            <div className='saved'>
                <img src={Rader} alt="" />
                <span className='save'>Save this card</span>
            </div>

            <div className='bots'>
                <button>Add credit card</button>
            </div>
           
          

        </div>
    )
}

export default Body