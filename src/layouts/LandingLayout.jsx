import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Landing from "../pages/Landing";

export const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}