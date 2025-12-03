import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Products: [
      "Venio Review",
      "Venio ECA",
      "AI at the Core",
      "Venio Production",
      "Venio AI Review",
      "Venio Legal Hold",
    ],
    Solutions: [
      "Law Firms",
      "Legal Service Providers",
      "Corporations",
      "Government",
      "Legal Counsel",
      "eDiscovery Attorneys",
      "eDiscovery Managers",
    ],
    Resources: [
      "Blog",
      "AmLaw 50 Firm – Case Study",
      "Federal Agency – Case Study",
      "Global Bank – Case Study",
      "Saving Calculator",
      "Partnership",
      "Webinars & Events",
    ],
    Company: [
      "Why Venio",
      "Request a Demo",
      "Pricing",
      "Contact Us",
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-white py-16">
      <div className="container mx-auto px-4">

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.Products.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.Solutions.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.Resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4 font-body">
              Subscribe to our SaaS Trends weekly newsletter
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white">Submit</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold">
                V<span className="text-accent">E</span>NIO
              </div>
              <p className="text-white/60 text-sm font-body">
                ©2025 Venio Systems, Inc. All rights reserved.
              </p>
            </div>

            {/* Links and Social */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm font-body">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm font-body">
                Terms of Use
              </a>
              <div className="flex gap-4 ml-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
