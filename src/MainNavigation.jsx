import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirthdayReminder from "./birthdayReminder";
import SearchBar from "./searchBar";
import Tours from "./tours";

function MainNavigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/birthday-reminder" element={<BirthdayReminder/>} />
                <Route path="/search-bar" element={<SearchBar/>} />
                <Route path="/tours" element={<Tours/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigation
