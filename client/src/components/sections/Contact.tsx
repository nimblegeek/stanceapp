import DemoForm from "@/components/forms/DemoForm";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Request a Demo</h2>
            <DemoForm />
          </div>
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
              <NewsletterForm />
            </div>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1517637633369-e4cc28755e01"
                alt="Martial arts class"
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
