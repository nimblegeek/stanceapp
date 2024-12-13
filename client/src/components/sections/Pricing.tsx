import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "Best for newly started clubs",
    type: "subscription",
    features: [
      "Stance boilerplate",
      "Up to 50 members",
      "Basic member management",
      "Payment processing",
      "Email solution",
      "Support for setup and launch",
      "One feature request at a time",
      "Average 48 hour delivery",
    ],
  },
  {
    name: "Pro",
    price: "$899",
    description: "For established clubs who want to grow and scale",
    type: "subscription",
    features: [
      "Stance boilerplate",
      "Customer development",
      "Up to 200 members",
      "Advanced member management",
      "Payment solution through Stripe",
      "Email marketing and support",
      "Unlimited support",
      "Two feature requests at a time",
      "48 hours response time",
    ],
  },
  {
    name: "Stance Boilerplate",
    price: "$699",
    description: "For club owners who want to run it their own",
    type: "Once",
    features: [
      "Full-stack application setup",
      "Landing page & dashboard templates",
      "Database schema & migrations",
      "User authentication & admin panel",
      "Payment integration setup",
      "Email system configuration",
      "Deployment resources & documentation",
      "14 days technical support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent and simple pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose between subscribing to a technical partnership or running
            Stance yourself. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.type === "subscription" ? (
                    <span className="text-muted-foreground">/month</span>
                  ) : (
                    <span className="text-muted-foreground"> one-time</span>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8">
                  {plan.type === "subscription"
                    ? "Get Started"
                    : "Purchase Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
