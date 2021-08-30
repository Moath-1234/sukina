import Header from "./Components/blocks/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/style/main.css";
import Home from "./Components/pages/home/Home";
import Footer from "./Components/blocks/Footer";
import AboutSokina from "./Components/pages/AboutSokina/AboutSokina";
import SokinaServices from "./Components/pages/sokinaServices/SokinaServices";
import ContactUsPage from "./Components/pages/ContactusPage/ContactUsPage";
import BlogPage from "./Components/pages/BlogPage/BlogPage";
function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/">
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/AboutSokina">
                        <AboutSokina />
                    </Route>
                    <Route path="/SokinaServices">
                        <SokinaServices />
                    </Route>
                    <Route path="/Blog">
                        <BlogPage />
                    </Route>
                    <Route path="/ContactUs">
                        <ContactUsPage />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
