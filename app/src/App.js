import Navbar from "./components/Navbar";
import HomeHeader from "./components/HomeHeader";
import Service from "./components/Service";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <div class="text-center" style={{ padding: "10em 0" }}>
        <h1>Some meaningful blurb...</h1>
      </div>
      <Service />
      <OurTeam />
      <Footer />
    </div>
  );
}
