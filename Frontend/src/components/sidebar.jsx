import Film from "../assets/icons/film"
import Favourites from '../assets/icons/favourites'
import Trending from "../assets/icons/trending"
import Social from "../assets/icons/social"
import Calender from '../assets/icons/calender'
import Settings from "../assets/icons/settings"
import Logout from '../assets/icons/logout'
const Sidebar = () => {
    return (
        <div className="h-screen bg-neutral-800 text-white w-2/12 p-5 shadow-xl shadow-purple-950 ">
            <div className="flex flex-col items-center justify-center">
                <h1 className=" text-3xl font-bold mb-20 font-mono">WATCH</h1>
                <div className="sidebar-menu flex flex-col gap-6">
                    <div className="flex gap-2"><Film /><a href="" >Home</a></div>
                    <div className="flex gap-2"><Favourites /><a href="" >Favourites</a></div>
                    <div className="flex gap-2"><Trending /><a href="" >Trending</a></div>
                    <div className="flex gap-2"><Calender /><a href="" >Upcoming</a></div>
                    <div className="flex gap-2"><Social /><a href="" >Social</a></div>
                    <div className='mt-60 gap-6 flex flex-col'>
                        <div className="flex gap-2"><Settings /><a href="" >Settings</a></div>
                        <div className="flex gap-2"><Logout /><a href="" >Logout</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
