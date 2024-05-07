import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import Carousel from "../components/carousel"
import Card from '../components/card'
const Homepage = () => {
    return (
        <div className="flex bg-zinc-900">
            <Sidebar/>
            <div className="w-10/12 h-screen overflow-auto">
                <Carousel />
                <span className="text-white font-semibold text-lg  pl-9 pr-9 mb-8">Trending</span>
                <div className="flex items-center justify-center">
                    <div className="grid lg:grid-cols-4 mx-5 gap-12">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage