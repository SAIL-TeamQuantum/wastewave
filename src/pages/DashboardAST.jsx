import react from "react";
import "../assets/ASTcss/stylesAST.css";
import bucket from "../assets/images/bucket.svg";
import calICON from "../assets/images/calICON.svg";
import Star from "../assets/images/star.svg";
import phoneIMG from "../assets/images/phoneIMG.png";
import calICONGreen from "../assets/images/calICONGreen.svg";
import Plastic from "../assets/images/Plastic.jpg";
import wasteR from "../assets/images/wasteR.jpg";
import biohazard from "../assets/images/biohazard.svg";
import shieldplus from "../assets/images/shieldplus.svg";
import MapLocator from "../assets/images/MapLocator.png";
import { Link } from "react-router-dom";
import ScheduleAST from "./ScheduleAST";
import DashboardHeaderAST from "../components/DashboardHeaderAST";
import DashboardInfo from "../components/DashboardMoreInfoAST";
import DashboardFooter from "../components/DashboardFooterAST";
import { useLocation, useParams } from "react-router-dom";


const DashboardAst = () => {
  const { userId } = useParams(); // Extract userId from URL
  const location = useLocation();
  const firstName = location.state?.firstName || "Guest";

  return (
    <div className="body-container">
      <div className="main-container">
        <DashboardHeaderAST />
        <div className="flex-container Boxcontainer">
          <div className="">
            <p>Good Day {firstName}!</p>
            <h3>
              Don’t forget to <span>schedule</span> the trash
            </h3>
          </div>
          <div className="Boxcontainer-icons">
            <img src={bucket} alt="bucket" />
            <img className="CALicons" src={calICON} alt="icon" />
          </div>
        </div>
        <div className="Starcontainer">
          <img className="starIMG" src={Star} alt="star" />
        </div>

        <div className="ToDoContainer">
          <h2>Today’s To-Do-List</h2>
          <div className="flex-container">
            <div className="box-container margin5">
              <Link to="/ScheduleAST" className="link-schdule">
                <img src={phoneIMG} alt="phone" />
                <div className="BoxcontainerText">
                  <p className="Box-Text">Schedule your waste</p>
                  <p className="Box-Grey">Keep a clean record with LAWMA</p>
                </div>{" "}
              </Link>
            </div>
            {/* second box */}
            <div className="box-container flex-container">
              <Link to="/ScheduleAST" className="link-schdule">
                <img src={MapLocator} alt="phone" />
                <div className="BoxcontainerText">
                  <p className="Box-Text">Offset your dues</p>
                  <p className="Box-Grey">Keep a clean record with LAWMA</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="button-container flex-container">
            <img
              className="BUTicons mobile-none"
              src={calICONGreen}
              alt="icon"
            />
            <img className="mobile-none" src={biohazard} alt="star" />
            <img className="BUTicons" src={Star} alt="star" />
          </div>
        </div>
        <div className="flex-container DailyQHeader">
          <h2>Daily Quotes</h2>
          <img className="BUTicons" src={shieldplus} alt="star" />
        </div>
        <div className="flex-container">
          <div className="DailyQContainer">
            <div className="DailyQBody">
              <p>
                “A clean environment is a reflection of a mindful community.{" "}
                Start today—waste wisely”
              </p>
              <img src={wasteR} alt="image" />
            </div>
          </div>
          {/* second daily container */}
          <div className="DailyQContainer">
            <div className="DailyQBody">
              <p>
                “A clean environment is a reflection of a mindful community.
                Start today—waste wisely”
              </p>
              <img src={Plastic} alt="image" />
            </div>
          </div>
        </div>
        <div className="flex-container bg-icon">
          <img src={Star} alt="image" />
          <img src={calICONGreen} alt="image" />
        </div>

        <div className="flex-container ActivitySContainerHeader">
          <h2>Activity Summary</h2>
          <img className="mobile-none" src={biohazard} alt="star" />
        </div>

        <div className="ActivitySContainer">
          <h2>You have had a wavy week</h2>

          <div className="flex-container ActivitySBody">
            <div className="ActivityTable">
              <p1>Activit</p1>
              <span class="no-underline">y 1</span>

              <h2>Waste Scheduling</h2>
              <p2>You scheduled your waste to be picked up this week</p2>
            </div>

            <div className="ActivityTable">
              <p1>Activit</p1>
              <span class="no-underline">y 2</span>

              <h2>Wast Bill Payment</h2>
              <p2> You made a payment to LAWMA for disposing your waste</p2>
            </div>

            <div className="ActivityTable">
              <p1>Activit</p1>
              <span class="no-underline">y 3</span>

              <h2>Profile Update</h2>
              <p2>Recently updated your profile</p2>
            </div>
          </div>
          <div className="flex-container Activitybutton-container">
            <button className="ActivityButton">SEE MORE ACTIVITY</button>
          </div>
        </div>
        <DashboardInfo />
      </div>
      <DashboardFooter />
    </div>
  );
};

export default DashboardAst;
