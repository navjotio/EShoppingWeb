import NavBar from "../components/header/navbar";
import MainDisplay from "../components/Body/mainbody";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <div>
      <MainHeader>
        <NavBar />
      </MainHeader>
      <MainBody>
        <MainDisplay />
      </MainBody>
      <MainFooter>
        <Footer />
      </MainFooter>
    </div>
  );
}

function MainHeader({ children }) {
  return <nav className="header">{children}</nav>;
}

function MainBody({ children }) {
  return <nav className="mainbody">{children}</nav>;
}

function MainFooter({ children }) {
  return <nav className="footer">{children}</nav>;
}
