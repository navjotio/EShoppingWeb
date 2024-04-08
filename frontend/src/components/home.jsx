import NavBar from "./header/navbar";
import MainDisplay from "./Body/mainbody";
import Footer from "./Footer/footer";

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
  // const [activeHeader, setActiveHeader] = useState(false);
  // window.addEventListener("scroll", function () {
  //   if (this.window.scrollY > 100) {
  //     setActiveHeader(true);
  //   } else {
  //     setActiveHeader(false);
  //   }
  // });
  return <nav className="header">{children}</nav>;
}

function MainBody({ children }) {
  return <nav className="mainbody">{children}</nav>;
}

function MainFooter({ children }) {
  return <nav className="footer">{children}</nav>;
}
