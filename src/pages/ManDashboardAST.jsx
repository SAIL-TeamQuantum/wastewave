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


const ManDashboardAst = () => {
    return (
        <div className='body-container'>
        
        <div className='main-container'>
        <DashboardHeaderAST />
        <div className="Boxcontainer">
        <div className='Management-icons'>
            <img src={bucket} alt="bucket" /> 
            <img className='CALicons' src={calICON} alt="icon" /> 
            </div>
            <div className="flex-container management-flex pending-container">
            <div className="pending-info">
            <h3><span>#49,005</span></h3> <p>Total Balance</p>
           
            </div>

                <div className="pending-info">
             <h3><span>5</span></h3> <p>Pending Trash</p>
          
            </div>
            <div className="pending-info">
            <h3><span>12</span></h3>
            <p>Total Trash</p>
            
            </div>
            </div>
            <div className='Management-icons'>
            <img className='CALicons MobileICView' src={calICON} alt="icon" /> 
            <img src={bucket} alt="bucket" /> 
            
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
                        <p className='Box-Text'>Recycle Waste</p>
                        <p className='Box-Grey'>Keep a clean record with LAWMA</p>

                    </div>
</div>
                    {/* second box */}
                    <div className='box-container flex-container'>
                    <img src={MapLocator} alt="phone" />
                    <div className='BoxcontainerText'>
                        <p className='Box-Text'>Pickup a trash</p>
                        <p className='Box-Grey'>8, sail street, ikorodu Lagos</p>

                    </div>
</div>


                    
            
            </div>
             <div className='button-container flex-container'>
                       <img className='BUTicons mobile-none' src={calICONGreen} alt="icon" /> 
               <button className='button'>See More</button>
               <img className='BUTicons' src={Star} alt="star" />
               
                </div>
                   </div>
                   <div className='flex-container DailyQHeader'>
                           <h2>Daily Quotes</h2>
                           <img className='BUTicons' src={shieldplus} alt="star" />
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
                       <img className='mobile-none' src={biohazard} alt="star" />
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

export default ManDashboardAst;