import { LiaClipboardListSolid } from "react-icons/lia";
import { HiOutlineHome } from "react-icons/hi2";
import { MdRecycling } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import styled from "styled-components";

const NavBarDMX = ()=> {
    return (
        <NavIcons>
            <HiOutlineHome/>
            <LiaClipboardListSolid />
            <MainIcon> 
                <MdRecycling/>           
            </MainIcon>
            <SlSettings />
            <VscAccount />

        </NavIcons>

    )
}
export default NavBarDMX

const NavIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* position: relative; */
    background-color: white;
    color: #868889;
    font-size: 30px;
    width: 100vw;
    height: 70px;
`
const MainIcon = styled.div`
    border: 5px solid white;
    background-color: #81B622;
    color: white;
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 35px;
    position: relative;
    bottom: 20px;
`