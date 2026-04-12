const Footer = () => (
  <footer className="bg-foreground border-t border-primary-foreground/10 py-6">
    <div className="max-w-[1100px] mx-auto px-6 text-center">
      <p className="text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} Muhammad Shahzaib. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
