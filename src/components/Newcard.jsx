import './Newcard.css'
import Card from '../assets/images/card.svg'
import Group from '../assets/images/Group.svg'
import Fix from '../assets/images/Fix.svg'
import Calender from '../assets/images/calender.svg'
import Cvv from '../assets/images/cvv.svg'
import Rader from '../assets/images/rader.svg'
import arrow from '../assets/images/arrow.svg'

const Newcard = () => {
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
                <input type="text" placeholder='Abayomi Chukwuemeka' className='text'/> 
                <img src={Group} alt="" className='itext'/>
                <input type="number" placeholder='2130 4448 7532 8790' className='number'/> 
                <img src={Fix} alt="" className='inumber'/>
                <input type="text" placeholder='12 / 28' className='calender'/>
                <img src={Calender} alt="" className='icalender'/>
                <input type="number" placeholder='112' className='cvv'/>
                <img src={Cvv} alt="" className='icvv' />
            </div>

            <div className='saved'>
                <img src={Rader} alt="" />
                <span className='save'>Save this card</span>
            </div>

            <div className='bots'>
                <button className='change'>Change this card</button>
                <button className='delete'>Delete this card</button>
            </div>
           
            

        </div>
    )
}

export default Newcard