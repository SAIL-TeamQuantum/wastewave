import Home from '../components/Home'
import Header from '../components/Header'
import About from '../components/About'
import DashboardInfo from '../components/DashboardMoreInfoAST'
import DashboardFooter from '../components/DashboardFooterAST'

const LandingPage = ()=> {
    return (
        <>
            <Header/>
            <Home/>
            <About/>
            <DashboardInfo/>
            <DashboardFooter/>

        </>
    )
}

export default LandingPage