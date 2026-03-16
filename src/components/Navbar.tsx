import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const VAGARO_URL = "https://www.vagaro.com/empirebarbers";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Empire Barbers" className="h-12 w-auto invert" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm tracking-[0.2em] uppercase font-medium">
          <Link
            to="/"
            className={`hover:text-foreground transition-colors ${location.pathname === "/" ? "text-foreground" : "text-muted-foreground"}`}
          >
            Home
          </Link>
          <Link
            to="/#hours"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("hours");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#hours";
              }
            }}
            className="hover:text-foreground transition-colors text-muted-foreground"
          >
            Hours
          </Link>
          <Link
            to="/services"
            className={`hover:text-foreground transition-colors ${location.pathname === "/services" ? "text-foreground" : "text-muted-foreground"}`}
          >
            Services
          </Link>
          <a
            href={VAGARO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground px-6 py-2 hover:bg-foreground hover:text-background transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <a
            href={VAGARO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground px-4 py-2 text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
