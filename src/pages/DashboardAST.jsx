import react from 'react';
import '../assets/ASTcss/styles.css';
import bucket from '../assets/images/bucket.svg';
import calICON from '../assets/images/calICON.svg';
import Star from '../assets/images/star.svg';
import phoneIMG from '../assets/images/phoneIMG.png';
import calICONGreen from '../assets/images/calICONGreen.svg';
import Plastic from '../assets/images/Plastic.jpg';
import wasteR from '../assets/images/wasteR.jpg';
import biohazard from '../assets/images/biohazard.svg';
import shieldplus from '../assets/images/shieldplus.svg';
import MapLocator from '../assets/images/MapLocator.png';

import DashboardHeaderAST from '../components/DashboardHeaderAST';
import DashboardInfo from '../components/DashboardMoreInfoAST';
import DashboardFooter from '../components/DashboardFooterAST';


const DashboardAst = () => {
    return (
        <div className='body-container'>
        
        <div className='main-container'>
        <DashboardHeaderAST />
        <div className="Boxcontainer">
            <div className="">
            <p>Good Day!</p>
            <h3>Don’t forget to <span>schedule</span> the trash</h3>
            </div>
            <div className='icons'>
            <img src={bucket} alt="bucket" /> 
            <img className='CALicons' src={calICON} alt="icon" /> 
            </div>

        </div>
        <div className='Starcontainer'>
            <img src={Star} alt="star" />
        </div>

        <div className='ToDoContainer'>
            <h2>Today’s To-Do-List</h2>
            <div className='flex-container'>
                <div className='box-container margin5'>
                    <img src={phoneIMG} alt="phone" />
                    <div className='BoxcontainerText'>
                        <p className='Box-Text'>Offset your dues</p>
                        <p className='Box-Grey'>Keep a clean record with LAWMA</p>

                    </div>
</div>
                    {/* second box */}
                    <div className='box-container flex-container'>
                    <img src={MapLocator} alt="phone" />
                    <div className='BoxcontainerText'>
                        <p className='Box-Text'>Offset your dues</p>
                        <p className='Box-Grey'>Keep a clean record with LAWMA</p>

                    </div>
</div>


                    
            
            </div>
            <div className='button-container flex-container'>
            <img className='BUTicons' src={calICONGreen} alt="icon" /> 
    <button className='button'>See More</button>
    <img className='starclass' src={Star} alt="star" />
    
     </div>
        </div>
        <div className='flex-container DailyQHeader'>
                <h2>Daily Quotes</h2>
                <img src={shieldplus} alt="star" />
            </div>
        <div className='flex-container'>
        <div className='DailyQContainer'>
           

            <div className='DailyQBody'>
                <p>“A clean environment is a reflection of a mindful community. 
                Start today—waste wisely”</p>
                <img src={wasteR} alt="image" />
                
            </div>

        </div>
        {/* second daily container */}
        <div className='DailyQContainer'>
         

            <div className='DailyQBody'>
                <p>“A clean environment is a reflection of a mindful community. 
                Start today—waste wisely”</p>
                <img src={Plastic} alt="image" />
                
            </div>

        </div>
        </div>
        <div className='flex-container bg-icon'>
            <img src={Star} alt="image" />
            <img src={calICONGreen} alt="image" />
        </div>

        <div className='flex-container ActivitySContainerHeader'>
            <h2>Activity Summary</h2>
            <img src={biohazard} alt="star" />
            </div>

            <div className='ActivitySContainer'>
                <h2>You have had a wavy week</h2>

                <div className='flex-container ActivitySBody'>
                <div className='ActivityTable'>
                    <p1>Activit</p1><span class="no-underline">y 1</span>
                    
                    <h2>Waste Scheduling</h2>
                    <p2>You scheduled your waste to picked up this week
                    </p2>

                </div>

                <div className='ActivityTable'>
                    <p1>Activit</p1><span class="no-underline">y 1</span>
                    
                    <h2>Waste Scheduling</h2>
                    <p2>You scheduled your waste to picked up this week
                    </p2>

                </div>

                <div className='ActivityTable'>
                    <p1>Activit</p1><span class="no-underline">y 1</span>
                    
                    <h2>Waste Scheduling</h2>
                    <p2>You scheduled your waste to picked up this week
                    </p2>

                </div>
                </div>
                <div className='flex-container Activitybutton-container'>
                   
                <button className='ActivityButton'>SEE MORE ACTIVITY</button>
                </div>

            
        </div>
        <DashboardInfo />
</div>
        <DashboardFooter />
        
        </div>
    )
}

export default DashboardAst;