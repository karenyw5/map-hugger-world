export function SiteFooter() {
  return (
    <footer className="mt-16 bg-primary px-4 py-8 text-center">
      <p className="font-heading text-sm text-primary-foreground/80">
        © Copyright {new Date().getFullYear()}, Karen Wang
      </p>
    </footer>
  );
}
