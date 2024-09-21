import Header from "./components/Header.jsx";
import Welcome from "./components/Welcome.jsx";
import About from "./components/About.jsx";
import OurService from "./components/OurService.jsx";
import CompanyStats from "./components/CompanyStats.jsx";
import LatestProjects from "./components/LatestProjects.jsx";
import WhyUs from "./components/WhyUs.jsx";

function App() {

    return (
        <>
            <Header/>
            <Welcome/>
            <About/>
            <OurService/>
            <CompanyStats/>
            <LatestProjects/>
            <WhyUs/>
        </>
    )
}

export default App;