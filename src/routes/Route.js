import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Home from '../views/Website/Home'
import AboutUs from '../views/Website/AboutUs';
import ContactUs from '../views/Website/ContactUs';
import Reviews from '../views/Website/Reviews';
import NotFound from '../views/NotFound'
import Header from '../components/Website/Header';
import Footer from '../components/Website/Footer';
import Bars from '../views/Website/Bars';
import StoreProfile from '../views/Website/StoreProfile';
import BarOwner from '../views/Website/BarOwner';
import Signup from '../views/Dashboard/Signup/index.js';
import Login from '../views/Dashboard/Login/index.js';
import Forgot from '../views/Dashboard/Forgot/index.js';
import Plan from '../views/Dashboard/Plans/index.js';
import Equipment from '../views/Dashboard/Equipment/index.js';
import Payment from '../views/Dashboard/Payment/index.js';
import Profile from '../views/Dashboard/Profile/index.js';
import BarInformation from '../views/Dashboard/Profile/barinformation';
import ChooseCategory from '../views/Dashboard/Menu/ChooseCategory';
import ChooseSubCategory from '../views/Dashboard/Menu/ChooseSubcategory';
import Addbarinfo from '../views/Dashboard/Bar/Addbarinfo';
import Addfirstmenu from '../views/Dashboard/Bar/addfirstmenu';
import Dashboard from '../views/Dashboard/Home/index.js';
import Menu from '../views/Dashboard/Menu/index.js';
import Subscription  from '../views/Dashboard/Subscription/index.js';
import Wallet  from '../views/Dashboard/Wallet/index.js';
import Users  from '../views/Dashboard/Users/index.js';
import UserDetails  from '../views/Dashboard/Users/UserDetails.js';
import Event  from '../views/Dashboard/Event/index.js';
import Feed  from '../views/Dashboard/Feed/index.js';
import Analytics from '../views/Dashboard/Analytics/index.js'
import Promotions  from '../views/Dashboard/Promotions/index.js'
import TeamMembers  from '../views/Dashboard/TeamMembers/index.js'
import Contact from '../views/Dashboard/ContactUs/index.js'
import FullProfile  from '../views/Dashboard/FullProfile/index.js';
import AccountInfo  from '../views/Dashboard/FullProfile/AccountInfo.js';
import Barowner from '../views/Dashboard/BarOwner/index.js';
import Profilesetting from '../views/Dashboard/Profilesetting/index.js'
import AddNewMenu from '../views/Dashboard/AddNewMenu/index.js'
import { useEffect } from 'react';
import DrinkTable from '../views/Dashboard/Drink/Drink.js';
import Addevents from '../views/Dashboard/Event/Addevents';
import OrderDetails from '../views/Dashboard/OrderDetails/index.js';
import Payments from '../views/Dashboard/Payments/Drink.js';



export const UserContext = createContext()

export default function AppRoute() {

    return (
        <div>
            <Router>
                <Header />
                <RouteSwitch>

                    {/* Website-Routes */}

                    {/* <Route exact path="/" element={<Home />}></Route> */}
                    {/* <Route exact path="/AboutUs" element={<AboutUs />}></Route>
                    <Route exact path="/ContactUs" element={<ContactUs />}></Route>
                    <Route exact path="/Reviews" element={<Reviews />}></Route>
                    <Route exact path="/Bars" element={<Bars />}></Route>
                    <Route exact path="/StoreProfile" element={<StoreProfile />}></Route>
                    <Route exact path="/BarOwner" element={<BarOwner />}></Route> */}

                    {/* Website-Routes */}


                    {/* Dashboard-Routes */}
                    <Route exact path="/dashboard/signup" element={<Signup />}></Route>
                    <Route exact path="/" element={<Login />}></Route>
                    <Route exact path="/dashboard/login" element={<Login />}></Route>
                    <Route exact path="/dashboard/forgot" element={<Forgot />}></Route>
                    <Route exact path="/dashboard/addnewmenu" element={<AddNewMenu />}></Route>
                    <Route exact path="/dashboard/Plan" element={<Plan />}></Route>
                    <Route exact path="/dashboard/equipment" element={<Equipment />}></Route>
                    <Route exact path="/dashboard/payment" element={<Payment />}></Route>
                    <Route exact path="/dashboard/profile" element={<Profile />}></Route>
                    <Route exact path="/dashboard/profile/barinformation" element={<BarInformation />}></Route>
                    <Route exact path="/dashboard/Menu/choosecategory" element={<ChooseCategory />}></Route>
                    <Route exact path="/dashboard/Menu/Choosesubcategory" element={<ChooseSubCategory />}></Route>
                    <Route exact path="/dashboard/Bar/addbarinfo" element={<Addbarinfo />}></Route>
                    <Route exact path="/dashboard/Bar/addfirstmenu" element={<Addfirstmenu />}></Route>
                    <Route exact path="/Dashboard/Event/Addevents" element={<Addevents />}></Route>
                    <Route exact path="/dashboard" element={<Dashboard />}></Route>
                    <Route exact path="/dashboard/menu" element={<Menu />}></Route>
                    <Route exact path="/dashboard/subscription" element={<Subscription />}></Route>
                    <Route exact path="/dashboard/wallet" element={<Wallet />}></Route>
                    <Route exact path="/dashboard/users" element={<Users />}></Route>
                    <Route exact path="/dashboard/Users/usersdetails" element={<UserDetails />}></Route>
                    <Route exact path="/dashboard/event" element={<Event />}></Route>
                    <Route exact path="/dashboard/feed" element={<Feed />}></Route>
                    <Route exact path="/dashboard/analytics/:id" element={<Analytics />}></Route>
                    <Route exact path="/dashboard/promotions" element={<Promotions />}></Route>
                    <Route exact path="/dashboard/setting" element={<Profilesetting />}></Route>
                    <Route exact path="/dashboard/teammembers" element={<TeamMembers />}></Route>
                    <Route exact path="/dashboard/Contact" element={<Contact />}></Route>
                    <Route exact path="/dashboard/barownerdetails/:id" element={<FullProfile />}></Route>
                    <Route exact path="/dashboard/accountinfo/:id" element={<AccountInfo />}></Route>
                    <Route exact path="/dashboard/barowner" element={<Barowner />}></Route>
                    <Route exact path="/dashboard/orderdetails" element={<OrderDetails />}></Route>
                    <Route exact path="/dashboard/drinktable" element={<DrinkTable />}></Route>
                    <Route exact path="/dashboard/payments" element={<Payments />}></Route>

                    {/* Dashboard-Routes */}
                    <Route exact path="*" element={<NotFound />}></Route>
                </RouteSwitch>
                <Footer />
            </Router>
        </div>
    )
}