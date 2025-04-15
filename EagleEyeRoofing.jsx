import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function EagleEyeRoofing() {
  return (
    <div className="min-h-screen bg-[#0A1B2A] text-[#D4AF37]">
      <header className="bg-[#0A1B2A] shadow p-6 flex justify-between items-center border-b border-[#D4AF37]">
        <h1 className="text-2xl font-bold">Eagle Eye Construction</h1>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="bg-[url('/roofing-bg.jpg')] bg-cover bg-center text-[#D4AF37] p-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Reliable Roofing, Built to Last</h2>
        <p className="text-lg mb-6">Protecting Northern Virginia one roof at a time.</p>
        <Button className="bg-[#D4AF37] text-[#0A1B2A] hover:bg-[#b8922b]">Get a Free Estimate</Button>
      </section>

      <section id="services" className="p-12 bg-[#0A1B2A]">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#13293D] text-[#D4AF37]">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Residential Roofing</h4>
              <p>New roofs, re-roofs, repairs, and inspections for your home.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#13293D] text-[#D4AF37]">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Commercial Roofing</h4>
              <p>Flat roofs, metal systems, and long-term weatherproofing.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#13293D] text-[#D4AF37]">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Storm Damage</h4>
              <p>Insurance claims, emergency tarping, and hail/wind repair.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="p-12 bg-[#13293D] text-[#D4AF37]">
        <h3 className="text-3xl font-semibold text-center mb-4">About Eagle Eye Construction</h3>
        <p className="max-w-3xl mx-auto text-center text-lg">
          We’re a locally owned and operated roofing contractor committed to quality, precision, and honesty. With a sharp eye for detail, Eagle Eye Construction protects homes and businesses throughout Northern Virginia.
        </p>
      </section>

      <section id="gallery" className="p-12 bg-[#0A1B2A] text-[#D4AF37]">
        <h3 className="text-3xl font-semibold text-center mb-8">Project Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/gallery1.jpg" alt="Roof 1" className="rounded-2xl shadow" />
          <img src="/gallery2.jpg" alt="Roof 2" className="rounded-2xl shadow" />
          <img src="/gallery3.jpg" alt="Roof 3" className="rounded-2xl shadow" />
        </div>
      </section>

      <section id="contact" className="p-12 bg-[#13293D] text-[#D4AF37]">
        <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <p className="flex items-center justify-center gap-2"><Phone /> (555) 123-4567</p>
          <p className="flex items-center justify-center gap-2"><Mail /> info@eagleeyeroofing.com</p>
          <p className="flex items-center justify-center gap-2"><MapPin /> Aldie, VA & Northern Virginia Area</p>
          <Button className="mt-4 bg-[#D4AF37] text-[#0A1B2A] hover:bg-[#b8922b]">Request a Quote</Button>
        </div>
      </section>

      <footer className="bg-[#0A1B2A] p-6 text-center text-sm text-[#D4AF37]">
        &copy; {new Date().getFullYear()} Eagle Eye Construction. All rights reserved.
      </footer>
    </div>
  );
}