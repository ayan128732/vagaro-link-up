import logo from "@/assets/logo.png";

const VAGARO_URL = "https://www.vagaro.com/empirebarbers";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
      <img src={logo} alt="Empire Barbers" className="h-16 w-auto invert" />
      <p className="text-muted-foreground text-sm max-w-md">
        Upscale barbershop in the Parkland/Coral Springs area. It's not just a haircut, it's an experience.
      </p>
      <a
        href={VAGARO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all"
      >
        Book Now
      </a>
      <p className="text-muted-foreground text-xs mt-4">
        © {new Date().getFullYear()} Empire Barbers. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
