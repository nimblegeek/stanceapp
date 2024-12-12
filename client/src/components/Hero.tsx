import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DemoForm from "./forms/DemoForm";

function HeroSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Request a Demo
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Schedule a personalized demo to see how our product can benefit your
            business.
          </p>
          <div className="mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Book a Demo</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Request a Demo</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to request a demo.
                  </DialogDescription>
                </DialogHeader>
                <DemoForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add FAQ items here */}
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              What is your product?
            </h3>
            <p className="mt-2 text-gray-600">
              Our product is a revolutionary solution that helps businesses
              achieve their goals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              How much does it cost?
            </h3>
            <p className="mt-2 text-gray-600">
              Pricing varies depending on your needs. Contact us for a custom
              quote.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              What is your support like?
            </h3>
            <p className="mt-2 text-gray-600">
              We offer 24/7 support via email, phone, and chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="py-4 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export { HeroSection, FAQSection, Footer };