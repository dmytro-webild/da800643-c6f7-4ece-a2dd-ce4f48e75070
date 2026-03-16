"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Phone } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Salon Hair Razors"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Premium Barbershop"
          bottomRightText="+254 722 799 602"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="Salon Hair Razors"
          description="Premium barbershop in Nairobi offering expert haircuts, grooming, and styling services. Experience professional craftsmanship and exceptional service."
          buttons={[
            { text: "Book Appointment", href: "#contact" },
            { text: "Call Us", href: "tel:+254722799602" }
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/child-getting-their-hair-blown-salon_23-2150462513.jpg",              imageAlt: "Professional barbershop interior"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-plus-size-man-working-as-hairstylist_23-2150754701.jpg",              imageAlt: "Expert barber styling"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/faceless-barber-shaving-hair-man_23-2147778746.jpg?_wi=1",              imageAlt: "Professional haircut service"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
          ariaLabel="Salon Hair Razors hero section with carousel"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Salon Hair Razors"
          description={[
            "Welcome to Salon Hair Razors, Nairobi's premier barbershop dedicated to delivering exceptional grooming experiences. With years of expertise in men's styling and personal care, our team of skilled barbers combines traditional techniques with modern trends to provide the perfect look tailored to your unique style.",            "Located in the heart of 4th Parklands, we pride ourselves on creating a welcoming environment where every client is treated with respect and attention to detail. From classic cuts to contemporary styles, we're committed to making you look and feel your absolute best."
          ]}
          buttons={[
            { text: "Learn More", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          showBorder={false}
          useInvertedBackground={false}
          ariaLabel="About Salon Hair Razors"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyOne
          title="Our Premium Services"
          description="We offer a comprehensive range of grooming services designed to keep you looking sharp and feeling confident. Each service is delivered with precision and professional expertise."
          tag="Professional Grooming"
          tagIcon={undefined}
          tagAnimation="slide-up"
          buttons={[
            { text: "Book Now", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          accordionItems={[
            {
              id: "haircut",              title: "Professional Haircuts",              content: "Expert haircuts including fades, tapers, and contemporary styles. Our barbers stay updated with the latest trends while respecting your personal preferences. Whether you prefer classic or modern cuts, we deliver precision every time."
            },
            {
              id: "beard",              title: "Beard Grooming & Shaping",              content: "Professional beard trimming, shaping, and grooming services. We use premium products and traditional techniques to ensure your beard looks distinguished and well-maintained. Perfect for both casual and formal occasions."
            },
            {
              id: "shave",              title: "Traditional Hot Shaves",              content: "Experience the luxury of a traditional hot shave with our expert barbers. Includes pre-shave preparation, hot towel treatment, and premium aftershave care for the ultimate relaxation and grooming experience."
            },
            {
              id: "styling",              title: "Hair Styling & Finishing",              content: "Complete styling services including product application, texture work, and finish treatments. We ensure your hair looks impeccable for any occasion, from everyday wear to special events."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/faceless-barber-shaving-hair-man_23-2147778746.jpg?_wi=2"
          imageAlt="Professional barbershop service"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
          ariaLabel="Services section with accordion"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          testimonials={[
            {
              id: "testimonial-1",              name: "James Kipchoge",              handle: "@james_k",              testimonial: "Salon Hair Razors has become my go-to barbershop. The attention to detail is exceptional, and the barbers really understand what I'm looking for. Highly recommended!",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-couple-spend-time-bedroom_1157-27730.jpg",              imageAlt: "James Kipchoge testimonial"
            },
            {
              id: "testimonial-2",              name: "David Mwangi",              handle: "@mwangi_styles",              testimonial: "Best haircut experience in Nairobi. Professional, clean, and the staff is incredibly friendly. The location in 4th Parklands is convenient, and their prices are fair.",              imageSrc: "http://img.b2bpic.net/free-photo/view-child-hair-salon_23-2150462480.jpg",              imageAlt: "David Mwangi testimonial"
            },
            {
              id: "testimonial-3",              name: "Peter Kariuki",              handle: "@pk_grooming",              testimonial: "I've been to many barbershops, but Salon Hair Razors stands out. The barbers are skilled, the equipment is top-notch, and they genuinely care about their customers.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-hairdresser-washing-man-s-hair_23-2150665396.jpg",              imageAlt: "Peter Kariuki testimonial"
            },
            {
              id: "testimonial-4",              name: "Mark Ochieng",              handle: "@mark_sharp",              testimonial: "Five stars all the way! Every visit is a great experience. The barbers are professionals who take pride in their work. Worth every shilling!",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-waiter-making-cup-coffee-counter_1170-627.jpg",              imageAlt: "Mark Ochieng testimonial"
            }
          ]}
          animationType="slide-up"
          title="What Our Clients Say"
          description="Our clients consistently praise our attention to detail, professionalism, and commitment to delivering exceptional grooming services. Join the growing list of satisfied customers."
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          topMarqueeDirection="left"
          ariaLabel="Client testimonials section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get in Touch"
          ctaDescription="Ready to book your appointment? Contact us today at Salon Hair Razors. We're located at 4th Parklands, Nairobi, and we're ready to give you the perfect cut."
          ctaButton={{ text: "Call Now", href: "tel:+254722799602" }}
          ctaIcon={Phone}
          useInvertedBackground={false}
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "hours",              title: "What are your operating hours?",              content: "We are open Monday to Friday from 8:00 AM to 6:00 PM, Saturday from 8:00 AM to 5:00 PM, and Sunday from 10:00 AM to 4:00 PM. Walk-ins are welcome, but appointments are recommended for shorter wait times."
            },
            {
              id: "location",              title: "Where are you located?",              content: "Salon Hair Razors is conveniently located at 4th Parklands, Nairobi. We're easily accessible by public transport and have parking available nearby. Call us at +254 722 799 602 for directions or more information."
            },
            {
              id: "pricing",              title: "What are your pricing and payment methods?",              content: "Our pricing is competitive and transparent. Standard haircuts start at KES 500, with premium services and special treatments available at reasonable rates. We accept cash, M-Pesa, and other mobile payment methods for your convenience."
            },
            {
              id: "appointments",              title: "How do I book an appointment?",              content: "You can book an appointment by calling us at +254 722 799 602. Our friendly staff will help you schedule a time that works best for you. We typically have availability within the same week, though peak times may require advance booking."
            },
            {
              id: "first-visit",              title: "What should I expect on my first visit?",              content: "On your first visit, our barber will consult with you about your desired style, hair type, and personal preferences. We take time to understand your vision and recommend styles that suit you best. You'll experience our commitment to quality and professionalism firsthand."
            },
            {
              id: "services-offered",              title: "What services do you offer?",              content: "We offer professional haircuts (fades, tapers, contemporary styles), beard grooming and shaping, traditional hot shaves, and complete hair styling and finishing services. All services are delivered with precision and premium care."
            }
          ]}
          ariaLabel="Contact information and frequently asked questions"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Salon Hair Razors"
          columns={[
            {
              title: "Services",              items: [
                { label: "Professional Haircuts", href: "#services" },
                { label: "Beard Grooming", href: "#services" },
                { label: "Hot Shaves", href: "#services" },
                { label: "Hair Styling", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Book Appointment", href: "#contact" },
                { label: "Testimonials", href: "#testimonials" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone: +254 722 799 602", href: "tel:+254722799602" },
                { label: "Address: 4th Parklands, Nairobi", href: "#" },
                { label: "Monday - Friday: 8AM - 6PM", href: "#" },
                { label: "Saturday - Sunday: 8AM - 5PM", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Salon Hair Razors. All rights reserved."
          ariaLabel="Site footer with navigation and contact information"
        />
      </div>
    </ThemeProvider>
  );
}