
import { Link } from "wouter";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Stance</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#features">
              <a className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            </Link>
            <Link href="#pricing">
              <a className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            </Link>
            <Link href="#contact">
              <a className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
