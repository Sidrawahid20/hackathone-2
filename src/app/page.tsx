
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import TopBar from "@/components/Topbar"
import Footer from "@/components/Footer"
import LatestBlog from "@/components/LatestBlog"
import Discount from "@/components/Discount[1]"
import Custom from "@/components/Custom[1]"
import Cards from "@/components/Cards"


function Homepage (){
  return(
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Cards />
      <Custom />
     <LatestBlog />
      <Discount />
      
      <Footer />
    </div>
  )

};
export default Homepage






