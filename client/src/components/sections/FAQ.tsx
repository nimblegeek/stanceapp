import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Commonly Asked Questions
        </h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Stance?</AccordionTrigger>
            <AccordionContent>
              Stance is a comprehensive management system designed specifically
              for JiuJitsu clubs, helping you manage members, payments, and
              communications efficiently.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does the free trial work?</AccordionTrigger>
            <AccordionContent>
              You can try Stance free for 14 days with all features included. No
              credit card required to start.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I export my data?</AccordionTrigger>
            <AccordionContent>
              Yes, you can export all your data at any time in common formats
              like CSV and JSON.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
