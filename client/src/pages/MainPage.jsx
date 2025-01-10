import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from './MainPageSection/About'
import LeadMagnetSection from '../components/LeadMagnetSection'
import BenefitsSection from './MainPageSection/BenefitsSection'
import BenefitsDetailsSection from './MainPageSection/BenefitsDetailsSection'
import ServicesSection from './MainPageSection/ServicesSection'
import TestimonialsSection from './MainPageSection/TestimonialsSection'
import ContactSection from './MainPageSection/ContactSection'
import CTASection from '../components/CTASection'

export const MainPage = () => {
  return (
    <main className='w-full h-fit'>
        <HeroSection
            heading="Your Smile, Our Priority"
            subheading="Experience the best dental care with our expert team."
        />
        <AboutSection />
        <LeadMagnetSection />
        <BenefitsSection />
        <BenefitsDetailsSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
    </main>
  )
}
