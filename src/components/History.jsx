import './History.css'
import Ride from '../assets/images/ride.svg'
import File from '../assets/images/file.svg'

const History = () => {
    return (
        <div className='list'>
            <div className='detail'>
                <img src={Ride} alt="" />
                <h3>Your trash was disposed</h3>
                <p>October 21, 2024</p>
                <hr />
                
            </div>

            <div className='detail'>
                <img src={Ride} alt="" />
                <h3>Your trash was disposed</h3>
                <p className='move'>November 1, 2024</p>
                <hr />
            </div>

            <div className='detail'>
                <img src={Ride} alt="" />
                <h3>Your trash was disposed</h3>
                <p className='surv'>November 20, 2024</p>
                <hr />
            </div>

            <div className='detail'>
            <img src={File} alt="" />
                <h3 className='run'>You payed your bills</h3>
                <p>December 1, 2024</p>
                <hr />
            </div>

           
        
        </div>
    )
}

export default History