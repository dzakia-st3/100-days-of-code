import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirthdayReminder from "./birthdayReminder";
import SearchBar from "./searchBar";
import Tours from "./tours";
import Review from "./review";
import AccordionPage from "./accordion";
import MenuView from "./menu";

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
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigation
