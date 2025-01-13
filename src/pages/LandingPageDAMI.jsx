import Home from '../components/Hero'
import Header from '../components/Header'
import About from '../components/About'
import DashboardInfo from '../components/DashboardMoreInfoAST'
import DashboardFooter from '../components/DashboardFooterAST'
import WasteWave from '../components/WasteWave'

const LandingPage = ()=> {
    return (
        <>
            <Header/>
            <Home/>
            <WasteWave/>
            <About/>
            <DashboardInfo/>
            <DashboardFooter/>

        </>
    )
}

export default LandingPage