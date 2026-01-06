import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import venioLogo from "@/assets/venio-logo.svg";

const Footer = () => {
  const footerLinks = {
    Products: [
      { name: "Venio Review", url: "#" },
      { name: "Venio ECA", url: "#" },
      { name: "AI at the Core", url: "#" },
      { name: "Venio Production", url: "#" },
      { name: "Venio AI Review", url: "#" },
      { name: "Venio Legal Hold", url: "#" },
    ],
    Solutions: [
      { name: "Law Firms", url: "#" },
      { name: "Legal Service Providers", url: "#" },
      { name: "Corporations", url: "#" },
      { name: "Government", url: "#" },
      { name: "Legal Counsel", url: "#" },
      { name: "eDiscovery Attorneys", url: "#" },
      { name: "eDiscovery Managers", url: "#" },
    ],
    Resources: [
      { name: "Blog", url: "/blog/demo" },
      { name: "Case Studies", url: "/resources/case-studies/demo" },
      { name: "White Papers", url: "/resources/white-papers/demo" },
      { name: "Product Briefs", url: "/resources/product-briefs/demo" },
      { name: "eBooks", url: "/resources/ebooks/demo" },
      { name: "Videos", url: "/resources/videos/demo" },
      { name: "Brochures", url: "/resources/brochures/demo" },
      { name: "Press Releases", url: "/resources/press-releases/demo" },
      { name: "How-to Guides", url: "/resources/how-to-guides/demo" },
      { name: "Infographics", url: "/resources/infographics/demo" },
    ],
    Company: [
      { name: "Why Venio", url: "#" },
      { name: "Request a Demo", url: "/book-a-demo" },
      { name: "Pricing", url: "#" },
      { name: "Contact Us", url: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-white py-16">
      <div className="container mx-auto px-4">

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-12">
          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.Products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.Solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.Resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 md:p-6 backdrop-blur-sm shadow-lg shadow-black/10 text-center">
              <h3 className="font-bold text-lg mb-2">Newsletter</h3>
              <p className="text-white/70 text-sm mb-4 font-body">
                Subscribe to our SaaS Trends weekly newsletter
              </p>
              <div className="grid gap-3">
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                  inputMode="email"
                  spellCheck={false}
                  autoCapitalize="none"
                  enterKeyHint="send"
                  aria-label="Email address"
                  className="w-full max-w-xl h-14 rounded-xl bg-white text-slate-900 placeholder:text-slate-500 border border-slate-300 focus-visible:ring-4 focus-visible:ring-accent/30 focus-visible:border-accent px-5 mx-auto"
                />
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group rounded-xl mx-auto">Submit</Button>
              </div>
              <p className="text-white/60 text-xs mt-3 font-body">No spam • Unsubscribe anytime</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-8">
              <img src={venioLogo} alt="VENIO" className="h-7 w-auto" />
              <p className="text-white/60 text-sm font-body">
                ©2025 Venio Systems, Inc. All rights reserved.
              </p>
            </div>

            {/* Links and Social */}
            <div className="flex items-center gap-6">
              <Link to="#" className="text-white/60 hover:text-white text-sm font-body">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/60 hover:text-white text-sm font-body">
                Terms of Use
              </Link>
              <div className="flex gap-4 ml-4">
                <Link
                  to="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  to="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  to="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  to="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
