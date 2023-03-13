import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirthdayReminder from "./birthdayReminder";
import SearchBar from "./searchBar";
import Tours from "./tours";
import Review from "./review";
import AccordionPage from "./accordion";
import MenuView from "./menu";
import TabsView from "./tabs";
import Slider from "./slider";

function MainNavigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/birthday-reminder" element={<BirthdayReminder/>} />
                <Route path="/search-bar" element={<SearchBar/>} />
                <Route path="/tours" element={<Tours/>}/>
                <Route path="/review" element={<Review/>}/>
                <Route path="/accordion" element={<AccordionPage/>}/>
                <Route path="/menu" element={<MenuView/>} />
                <Route path="/tabs" element={<TabsView/>}/>
                <Route path="/slider" element={<Slider/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigation
