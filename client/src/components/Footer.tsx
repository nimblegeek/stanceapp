
export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Stance. All rights reserved.</p>
      </div>
    </footer>
  );
}
