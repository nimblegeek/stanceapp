import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Unlock The Power Of Your JiuJitsu Club
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              All-in-one platform for member management, payments, and communications. Focus on teaching while we handle the rest. Made by practioners, for practitioners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Book Demo
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1668587629217-7567ae4f7b4d"
              alt="Martial arts training"
              className="object-cover w-full h-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
