import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Start from "./components/sections/Start";
import Stories from "./components/sections/Story/Stories";
import TariffPlan from "./components/sections/TariffPlan/TariffPlan";

function App() {
    return (
        <div className="main">
            <Layout>
                <Hero />
                <About />
                <Start />
                <Stories />
                <TariffPlan />
            </Layout>
        </div>
    );
}

export default App;
