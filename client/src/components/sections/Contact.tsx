
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div>
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
            <NewsletterForm />
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
