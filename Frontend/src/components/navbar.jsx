import Bell from "../assets/icons/Bell";
import Search from "../assets/icons/Search";

const Navbar = () => {
    return (
        <nav className="ml-16 mr-16 mb-5 pt-7 text-white bg-transparent z-10" >
            <div className="flex items-center justify-between">

                <div className="leftbar flex gap-5 w-1/2">
                    <a href="#" className="text-base">Movies</a>
                    <a href="#" className="text-base">Series</a>
                    <a href="#" className="text-base">Documentation</a>
                </div>
                <div className="flex items-center gap-5">
                    <a href="#">
                    <Search/>
                    </a>
                    <a href="#"><Bell/>
                    </a>
                    <a href="#" className="flex items-center"><img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" className=" h-8 w-8 rounded-full pr-1"></img>John Doe</a>
                </div>

            </div>
        </nav>
    )
}
export default Navbar;