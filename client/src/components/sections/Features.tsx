import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, CreditCard, Mail, Calendar, Award, BarChart } from "lucide-react";

const features = [
  {
    title: "Member Management",
    description: "Track attendance, belt ranks, and student progress effortlessly",
    icon: Users,
  },
  {
    title: "Payment Processing",
    description: "Automated billing and secure payment collection",
    icon: CreditCard,
  },
  {
    title: "Email Marketing",
    description: "Stay connected with your members through automated communications",
    icon: Mail,
  },
  {
    title: "Class Scheduling",
    description: "Easy class management and student registration",
    icon: Calendar,
  },
  {
    title: "Belt Progression",
    description: "Track and manage student advancement through belt ranks",
    icon: Award,
  },
  {
    title: "Analytics",
    description: "Insights into attendance, revenue, and member growth",
    icon: BarChart,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Run Your Dojo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your operations with our comprehensive suite of tools designed specifically for martial arts schools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
