import { Link } from "wouter";
import { Button } from "./ui/button";
import { useState } from "react";
import ContactModal from "./ContactModal";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      <button
        onClick={() => scrollToSection("features")}
        className={`font-medium hover:text-primary transition-colors ${
          isMobile ? "text-base w-full text-left py-4 border-b" : "text-sm"
        }`}
      >
        Features
      </button>
      <button
        onClick={() => scrollToSection("pricing")}
        className={`font-medium hover:text-primary transition-colors ${
          isMobile ? "text-base w-full text-left py-4 border-b" : "text-sm"
        }`}
      >
        Pricing
      </button>
      <button
        onClick={() => setIsContactModalOpen(true)}
        className={`font-medium hover:text-primary transition-colors ${
          isMobile ? "text-base w-full text-left py-4 border-b" : "text-sm"
        }`}
      >
        Contact
      </button>
    </>
  );

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-xl font-bold hover:text-primary transition-colors cursor-pointer border-none bg-transparent"
          >
            Stance
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col mt-8">
                  <NavLinks isMobile />
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </header>
  );
}
