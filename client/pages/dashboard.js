import Reviews from "../components/Reviews"
import Stats from "../components/Stats"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Dashboard() {
    return (
        <>
            <div className="w-full flex flex-col gap-2">
                <Navbar></Navbar>
                <div className="px-6 w-full flex flex-col gap-3">
                    <Stats></Stats>
                    <Reviews></Reviews>
                </div>
                <Footer></Footer>
            </div>
        </>

    )
}

export default Dashboard