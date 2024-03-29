import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirthdayReminder from "./birthdayReminder";
import SearchBar from "./searchBar";
import Tours from "./tours";
import Review from "./review";
import AccordionPage from "./accordion";
import MenuView from "./menu";
import TabsView from "./tabs";
import Slider from "./slider";
import LoremIpsum from "./loremIpsum";
import ColorGenerator from "./colorGenerator";
import GroceryBud from "./grocery-bud"
import SideBar from "./sidebar";
import {Todo} from "./todo"
import CartApp from "./cart";
import Beverage from "./beverage";

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
                <Route path="/lorem-ipsum" element={<LoremIpsum/>}/>
                <Route path="/color-generator" element={<ColorGenerator/>} />
                <Route path="/grocery-bud" element={<GroceryBud/>} />
                <Route path="/todo" element={<Todo/>} />
                <Route path="/sidebar" element={<SideBar/>} />
                <Route path="/cart" element={<CartApp/>} />
                <Route path="/beverage" element={<Beverage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigation
