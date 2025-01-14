import Logo from '../assets/images/Wlogo.svg';
import Flogo from '../assets/images/full_logo.png';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon
import { FaInstagram } from 'react-icons/fa'; // Instagram icon
import { FaXTwitter } from 'react-icons/fa6'; // X (formerly Twitter)
import { FaEnvelope } from 'react-icons/fa'; // Email icon
import CaretCircleDoubleRight from '../assets/images/CaretCircleDoubleRight.png';
import shieldplus from '../assets/images/shieldplus.svg';
import Star from '../assets/images/star.svg';
const DashboardInfo = () => {
    return (
        <div >
            <div className='flex-container bg-icon'>
            <img src={shieldplus} alt="shieldplus" />
            <img src={Star} alt="image" />

        </div>

        <div className='moreInfoContainer'>
            <div className='flex-container moreInfoBox'>
                <div className='moreInfoBoxSect1'>
                    <div className='moreInfoBoxLogoSect'>
                    <img className='moreInfoBoxLogo MobileView' src={Flogo} alt="logo" />
                <img className='moreInfoBoxLogo mobile-none' src={Logo} alt="logo" />
                <text className='moreInfoBoxLogoText mobile-none'>WASTE WAVE</text>
                </div>
                
                <p className='moreInfoBoxPText'>Waste Wave is an Intellectual property and technological waste management agency for the waste management economy and digital age. </p>
              
                <div className='flex-container newsletterButton'><p1>Subscribe to our Newsletter</p1> <img src={CaretCircleDoubleRight} alt='caret' /> </div>
                    
                </div>

             
                <div className='moreInfoBoxSect2'>
                <text className=''>COMPANY</text>
                <div className='moreInfolist'>
                <p>Home</p>
                <p>Schedule Water</p>
                <p>Pay Bills</p>
                <p>Contact Us</p>
            
                </div>
                <div className='flex-container moreInfoListSocialsLogo'>
                <FaLinkedin style={{ color: '#81B622', fontSize: '34px' }} />
                <FaInstagram style={{ color: '#81B622', fontSize: '34px' }} />
                <FaXTwitter style={{ color: '#81B622', fontSize: '34px' }} />
                <FaEnvelope style={{ color: '#81B622', fontSize: '34px' }} />
                </div>
               
                </div>

            </div>
            <div className='flex-container moreInfobuttonContainer'>
            <button className='moreInfobutton'>BACK TO TOP</button></div>
        </div>
        </div>
    )
}

export default DashboardInfo;