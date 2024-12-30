

import { NavBar } from "./components";
import { Footer } from "./components/Footer";
import { Contact, Gallery, Home, Menu } from "./components/main";


export default function HomePage() {
  return (
    <>
      <NavBar />
      <Home />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
