"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  FileText, 
  DollarSign, 
  Calculator,
  BarChart3,
  PieChart,
  Briefcase,
  Target,
  Award,
  Globe,
  Clock,
  ChevronDown,
  Menu,
  X,
  Quote
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

// Types
type PageType = 'home' | 'about' | 'services' | 'contact';
type LanguageKey = 'en' | 'zh';

interface ServiceItem {
  name: string;
  description: string;
  features: string[];
}

interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
  services: ServiceItem[];
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

// Main Component
export default function WealthFoundationWebsite() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [language, setLanguage] = useState<LanguageKey>('en');
  const [heroSlide, setHeroSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceDropdown, setActiveServiceDropdown] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [state, handleSubmit] = useForm("myzpgkkr");

  // Hero slides content
  const heroSlides = [
    {
      type: 'company',
      title: 'Wealth Foundation Institute',
      subtitle: 'Strategic Financial Excellence',
      description: 'Transforming complexity into clarity. We partner with businesses to navigate financial challenges, optimize operations, and unlock sustainable growth.',
      taglines: [
        'Is your bookkeeping causing sleepless nights?',
        'Are cash flow gaps threatening your growth?',
        'Need clarity in your financial statements?'
      ]
    },
    {
      type: 'ceo',
      name: 'Carol Khoo',
      title: 'Founder & Managing Director',
      credentials: 'CPA, ACCA, MBA',
      experience: '20+ Years APAC Experience',
      bio: 'A visionary leader with over two decades of expertise in financial consulting and business advisory across the Asia-Pacific region. Carol has guided hundreds of businesses from startups to established enterprises, helping them achieve financial clarity and sustainable growth.',
      achievements: ['500+ Successful Client Engagements', 'Former Big 4 Senior Manager', 'Certified Public Accountant', 'ACCA Fellow Member']
    }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      name: "David Chen",
      role: "CEO",
      company: "TechVenture Pte Ltd",
      content: "Wealth Foundation transformed our chaotic financial records into a streamlined system. Their strategic approach helped us secure Series A funding with confidence.",
      rating: 5
    },
    {
      name: "Sarah Lim",
      role: "Managing Director",
      company: "Asian Retail Holdings",
      content: "Professional, responsive, and genuinely invested in our success. Carol's team identified cost savings we never knew existed, improving our margins by 15%.",
      rating: 5
    },
    {
      name: "Michael Wong",
      role: "Founder",
      company: "GreenTech Solutions",
      content: "From company setup to ongoing compliance, they've been our trusted partner for 5 years. Their proactive approach to tax planning has saved us significantly.",
      rating: 5
    },
    {
      name: "Jennifer Tan",
      role: "CFO",
      company: "Meridian Investments",
      content: "The level of detail and professionalism exceeded our expectations. Their audit preparation support made our annual audit seamless and stress-free.",
      rating: 5
    }
  ];

  // Services Data
  const servicesData: Record<string, ServiceCategory> = {
    accounting: {
      title: 'Accounting & Bookkeeping',
      description: 'Comprehensive financial record management that gives you clarity and control',
      icon: 'Calculator',
      services: [
        {
          name: 'Full-Service Bookkeeping',
          description: 'End-to-end management of your financial transactions with meticulous accuracy',
          features: ['Monthly transaction recording', 'Bank reconciliation', 'Accounts payable/receivable', 'Financial statement preparation', 'Cloud-based real-time access']
        },
        {
          name: 'Financial Reporting',
          description: 'Clear, actionable financial statements that drive informed decisions',
          features: ['SFRS-compliant statements', 'Management reporting', 'Variance analysis', 'Cash flow forecasting', 'Board presentation materials']
        },
        {
          name: 'Payroll Services',
          description: 'Accurate, timely payroll processing with full compliance',
          features: ['Salary computation', 'CPF submissions', 'IR8A preparation', 'Leave management', 'Employee expense claims']
        },
        {
          name: 'GST & Tax Compliance',
          description: 'Stay compliant and optimize your tax position',
          features: ['GST registration & filing', 'Corporate tax computation', 'Tax planning strategies', 'IRAS correspondence', 'Tax incentive advisory']
        }
      ]
    },
    management: {
      title: 'Business Management',
      description: 'Strategic guidance to optimize operations and accelerate growth',
      icon: 'Building',
      services: [
        {
          name: 'Company Incorporation',
          description: 'Seamless business setup in Singapore with full regulatory compliance',
          features: ['ACRA registration', 'Company constitution', 'Registered address', 'Nominee director services', 'Bank account opening support']
        },
        {
          name: 'Corporate Secretarial',
          description: 'Professional governance support to maintain good standing',
          features: ['Annual returns filing', 'Board resolutions', 'Share transfers', 'Statutory registers', 'AGM organization']
        },
        {
          name: 'Business Advisory',
          description: 'Strategic insights to navigate challenges and seize opportunities',
          features: ['Business planning', 'Market entry strategy', 'Operational optimization', 'Risk assessment', 'Growth roadmapping']
        },
        {
          name: 'Compliance & Governance',
          description: 'Ensure your business meets all regulatory requirements',
          features: ['Regulatory compliance audit', 'Policy development', 'Internal controls', 'Compliance training', 'Regulatory liaison']
        }
      ]
    },
    financial: {
      title: 'Financial Services',
      description: 'Expert financial strategies to optimize performance and drive growth',
      icon: 'TrendingUp',
      services: [
        {
          name: 'Financial Planning & Analysis',
          description: 'Data-driven insights to guide strategic decisions',
          features: ['Budget development', 'Financial modeling', 'KPI dashboards', 'Profitability analysis', 'Investment appraisal']
        },
        {
          name: 'Audit & Assurance',
          description: 'Independent verification that builds stakeholder confidence',
          features: ['Statutory audits', 'Internal audits', 'Due diligence', 'Special purpose audits', 'Agreed-upon procedures']
        },
        {
          name: 'Funding & Capital Advisory',
          description: 'Navigate funding options and optimize your capital structure',
          features: ['Bank loan applications', 'Grant advisory', 'Investor pitch preparation', 'Working capital optimization', 'Debt restructuring']
        },
        {
          name: 'CFO Advisory Services',
          description: 'Fractional CFO expertise for growing businesses',
          features: ['Strategic financial leadership', 'Investor relations', 'M&A support', 'Financial transformation', 'Exit planning']
        }
      ]
    }
  };

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const timeout = setTimeout(() => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [currentPage]);

  // Navigation handler
  const navigateTo = useCallback((page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setActiveServiceDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Form handler
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  // Icon mapping
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Calculator, Building, TrendingUp, FileText, Shield, DollarSign, 
    Users, BarChart3, PieChart, Briefcase, Target, Award, Globe, Clock
  };

  const getIcon = (name: string) => iconMap[name] || Calculator;

  // Render Navigation
  const renderNavigation = () => (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-gold-400 font-serif font-bold text-xl">W</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-xl text-navy-800 tracking-tight">Wealth Foundation</span>
              <span className="block text-xs text-gray-500 tracking-widest uppercase">Institute</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => navigateTo('home')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                currentPage === 'home' 
                  ? 'text-navy-800 bg-navy-50' 
                  : 'text-gray-600 hover:text-navy-800 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            
            <button
              onClick={() => navigateTo('about')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                currentPage === 'about' 
                  ? 'text-navy-800 bg-navy-50' 
                  : 'text-gray-600 hover:text-navy-800 hover:bg-gray-50'
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveServiceDropdown(activeServiceDropdown === 'services' ? null : 'services')}
                onMouseEnter={() => setActiveServiceDropdown('services')}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg flex items-center gap-1 ${
                  currentPage === 'services' 
                    ? 'text-navy-800 bg-navy-50' 
                    : 'text-gray-600 hover:text-navy-800 hover:bg-gray-50'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeServiceDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeServiceDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-fadeIn"
                  onMouseLeave={() => setActiveServiceDropdown(null)}
                >
                  {Object.entries(servicesData).map(([key, category]) => {
                    const IconComponent = getIcon(category.icon);
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          navigateTo('services');
                          setExpandedService(key);
                          setActiveServiceDropdown(null);
                        }}
                        className="w-full px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-navy-700" />
                        </div>
                        <div>
                          <p className="font-medium text-navy-800 text-sm">{category.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{category.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('contact')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-navy-800 border border-gray-200 rounded-lg hover:border-gray-300 transition-all"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'EN'}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-navy-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fadeIn">
            <div className="space-y-1">
              <button onClick={() => navigateTo('home')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">Home</button>
              <button onClick={() => navigateTo('about')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">About Us</button>
              <button onClick={() => navigateTo('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">Services</button>
              <button onClick={() => navigateTo('contact')} className="block w-full text-left px-4 py-3 mt-2 bg-orange-500 text-white font-semibold rounded-lg">Contact Us</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Render Footer
  const renderFooter = () => (
    <footer className="bg-navy-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy-800 to-navy-900 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Business Finances?</h3>
              <p className="text-navy-200 text-lg">Schedule a complimentary consultation with our experts and discover how we can help you achieve financial clarity.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button 
                onClick={() => navigateTo('contact')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Free Consultation
              </button>
              <a 
                href="tel:+6597486325"
                className="px-8 py-4 border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 font-semibold rounded-lg transition-all duration-300 text-center"
              >
                Call +65 9748 6325
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center">
                <span className="text-navy-900 font-serif font-bold text-xl">W</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white">Wealth Foundation</span>
                <span className="block text-xs text-navy-300 tracking-widest uppercase">Institute</span>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              Your trusted partner for accounting, business management, and financial services in Singapore. Transforming complexity into clarity since 2016.
            </p>
            <p className="text-navy-400 text-xs">UEN: 201602899G</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-6 text-sm tracking-widest uppercase">Our Services</h4>
            <ul className="space-y-3">
              {Object.values(servicesData).map((category, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => { navigateTo('services'); setExpandedService(Object.keys(servicesData)[idx]); }}
                    className="text-navy-300 hover:text-white transition-colors text-sm"
                  >
                    {category.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-6 text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigateTo('home')} className="text-navy-300 hover:text-white transition-colors text-sm">Home</button></li>
              <li><button onClick={() => navigateTo('about')} className="text-navy-300 hover:text-white transition-colors text-sm">About Us</button></li>
              <li><button onClick={() => navigateTo('services')} className="text-navy-300 hover:text-white transition-colors text-sm">Services</button></li>
              <li><button onClick={() => navigateTo('contact')} className="text-navy-300 hover:text-white transition-colors text-sm">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-6 text-sm tracking-widest uppercase">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Carol Khoo</p>
                  <a href="tel:+6597486325" className="text-navy-300 hover:text-white transition-colors text-sm">+65 9748 6325</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:carol2kmg@yahoo.com.sg" className="text-navy-300 hover:text-white transition-colors text-sm">carol2kmg@yahoo.com.sg</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-navy-300 text-sm">Singapore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm">© 2024 Wealth Foundation Institute Pte Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-navy-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-navy-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  // Render Home Page
  const renderHomePage = () => (
    <main className="pt-20">
      {/* Hero Section with Slider */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-600/30 rounded-full blur-3xl"></div>
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {heroSlide === 0 ? (
                // Company Slide
                <div className="animate-fadeInUp">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                    <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                    <span className="text-gold-400 text-sm font-medium">Singapore's Trusted Financial Partner</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-6">
                    {heroSlides[0].title}
                  </h1>
                  
                  <p className="text-xl text-navy-200 font-light mb-8 leading-relaxed">
                    {heroSlides[0].description}
                  </p>

                  <div className="space-y-3 mb-10">
                    {heroSlides[0].taglines?.map((tagline, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-navy-200 animate-fadeInUp" style={{ animationDelay: `${idx * 150}ms` }}>
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-lg">{tagline}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => navigateTo('contact')}
                      className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-xl shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => navigateTo('services')}
                      className="px-8 py-4 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Explore Services
                    </button>
                  </div>
                </div>
              ) : (
                // CEO Slide
                <div className="animate-fadeInUp">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/20 backdrop-blur-sm rounded-full border border-gold-400/30 mb-6">
                    <span className="text-gold-400 text-sm font-medium">Meet Our Founder</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-2">
                    {heroSlides[1].name}
                  </h2>
                  <p className="text-xl text-gold-400 font-medium mb-2">{heroSlides[1].title}</p>
                  <p className="text-navy-300 mb-6">{heroSlides[1].credentials} | {heroSlides[1].experience}</p>
                  
                  <p className="text-lg text-navy-200 leading-relaxed mb-8">
                    {heroSlides[1].bio}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {heroSlides[1].achievements?.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-navy-200">
                        <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Content - CEO Image Placeholder or Stats */}
            <div className="relative">
              {heroSlide === 0 ? (
                // Stats Grid
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '20+', label: 'Years Experience', icon: Clock },
                    { number: '500+', label: 'Clients Served', icon: Users },
                    { number: '98%', label: 'Client Satisfaction', icon: Star },
                    { number: 'S$50M+', label: 'Managed Annually', icon: DollarSign }
                  ].map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 animate-fadeInUp"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <stat.icon className="w-8 h-8 text-gold-400 mb-4" />
                      <p className="text-4xl font-bold text-white mb-1">{stat.number}</p>
                      <p className="text-navy-300 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              ) : (
                // CEO Image Placeholder
                <div className="relative">
                  <div className="aspect-[3/4] max-w-md mx-auto bg-gradient-to-br from-navy-700 to-navy-800 rounded-3xl overflow-hidden border-2 border-gold-400/30 shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                          <Users className="w-16 h-16 text-navy-900" />
                        </div>
                        <p className="text-gold-400 font-medium">CEO Portrait</p>
                        <p className="text-navy-400 text-sm mt-1">Image Placeholder</p>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-gold-400/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-gold-400/30 rounded-full"></div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-navy-800">500+</p>
                        <p className="text-xs text-gray-500">Successful Engagements</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-16">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === heroSlide ? 'w-12 bg-gold-400' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-navy-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-4">We Understand Your Challenges</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy-800 mb-6">
              Is Your Business Facing These Struggles?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calculator, title: 'Messy Books', description: 'Drowning in receipts, invoices, and bank statements with no clear picture of where you stand?' },
              { icon: TrendingUp, title: 'Cash Flow Gaps', description: 'Profitable on paper but constantly scrambling for cash to pay bills and suppliers?' },
              { icon: FileText, title: 'Compliance Anxiety', description: 'Worried about missing deadlines, filing errors, or falling foul of regulations?' },
              { icon: Target, title: 'Growth Bottlenecks', description: 'Ready to scale but lacking the financial infrastructure and insights to do it confidently?' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-navy-700 mb-6">You're not alone. We've helped hundreds of businesses overcome these exact challenges.</p>
            <button 
              onClick={() => navigateTo('contact')}
              className="px-8 py-4 bg-gradient-to-r from-navy-700 to-navy-800 hover:from-navy-800 hover:to-navy-900 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Let's Solve This Together
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-navy-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4">What We Do</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy-800 mb-6">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600">From bookkeeping basics to strategic financial advisory, we provide end-to-end support for your business journey.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(servicesData).map(([key, category], idx) => {
              const IconComponent = getIcon(category.icon);
              return (
                <div 
                  key={key}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                >
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-navy-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                      idx === 0 ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                      idx === 1 ? 'bg-gradient-to-br from-navy-600 to-navy-700' :
                      'bg-gradient-to-br from-gold-400 to-gold-500'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-navy-800 mb-4">{category.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {category.services.slice(0, 3).map((service, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-3 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{service.name}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => { navigateTo('services'); setExpandedService(key); }}
                      className="group/btn flex items-center gap-2 text-navy-700 font-semibold hover:text-orange-600 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials"
        ref={(el) => { sectionRefs.current['testimonials'] = el; }}
        className="py-24 bg-navy-900 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">Success Stories</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-navy-200">See how we've helped businesses like yours achieve financial clarity and growth.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
                      <Quote className="w-12 h-12 text-gold-400 mb-6" />
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                        ))}
                      </div>
                      <p className="text-xl text-white leading-relaxed mb-8">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center">
                          <span className="text-navy-900 font-bold text-xl">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-navy-300 text-sm">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={() => setTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === testimonialSlide ? 'w-8 bg-gold-400' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialSlide((prev) => (prev + 1) % testimonials.length)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="text-xl text-navy-200 max-w-2xl mx-auto mb-10">
                Schedule your free consultation today and discover how we can transform your business finances from a source of stress into a strategic advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold rounded-xl shadow-xl shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Your Free Quote
                </button>
                <a 
                  href="https://wa.me/6597486325?text=I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  // Render About Page
  const renderAboutPage = () => (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">About Us</p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Who We Are</h1>
            <p className="text-xl text-navy-200 max-w-3xl mx-auto">A dedicated team of financial professionals committed to transforming the way businesses manage their finances.</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-4">Our Story</p>
              <h2 className="text-4xl font-serif font-bold text-navy-800 mb-6">Building Trust Through Excellence</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Wealth Foundation Institute was established with a clear mission: to make professional financial services accessible to businesses of all sizes. We believe that every business deserves the same quality of financial guidance that was once reserved for large corporations.
                </p>
                <p className="mb-4">
                  Founded in 2016, we have grown from a small boutique practice to a trusted partner for hundreds of businesses across Singapore. Our journey has been defined by our commitment to understanding each client's unique challenges and delivering tailored solutions that drive real results.
                </p>
                <p>
                  Today, we are amongst Singapore's most respected financial consulting practices, providing a full range of accounting, business management, and financial advisory services. Our team brings together expertise from top-tier firms, combining technical excellence with practical business acumen.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '2016', label: 'Year Founded' },
                  { number: '500+', label: 'Clients Served' },
                  { number: '20+', label: 'Years Combined Experience' },
                  { number: '98%', label: 'Client Retention Rate' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-navy-50 to-white p-8 rounded-2xl border border-navy-100">
                    <p className="text-4xl font-bold text-navy-800 mb-2">{stat.number}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-gradient-to-br from-navy-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4">Our Approach</p>
            <h2 className="text-4xl font-serif font-bold text-navy-800 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600">We are inspired to work together and are proud to identify ourselves as dedicated professionals delivering a full range of services tailored to your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Proactive Partnership',
                description: 'Led by approachable partners, we use insights, experience and fresh perspective to understand complex issues and find workable solutions.'
              },
              {
                icon: Target,
                title: 'Client-Centered Focus',
                description: 'We are interested in your challenges and growth ambitions. Instead of ready-made answers, we listen, ask intelligent questions, and engage in deeper business discussions.'
              },
              {
                icon: Award,
                title: 'Hands-On Service',
                description: 'Personal, hands-on services from senior professionals continue to be the hallmark of our client experience. We are committed to meeting your objectives through practical solutions.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* CEO Image Placeholder */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] max-w-md mx-auto bg-gradient-to-br from-navy-100 to-navy-200 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
                      <Users className="w-20 h-20 text-navy-900" />
                    </div>
                    <p className="text-navy-700 font-bold text-xl">Carol Khoo</p>
                    <p className="text-navy-500 mt-2">Founder & CEO</p>
                    <p className="text-gold-600 text-sm mt-1">CPA, ACCA, MBA</p>
                    <div className="mt-6 pt-6 border-t border-navy-200">
                      <p className="text-navy-400 text-sm italic">CEO Portrait Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-400/20 rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400/20 rounded-2xl"></div>
            </div>

            {/* CEO Bio */}
            <div className="order-1 lg:order-2">
              <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-4">Meet Our Founder</p>
              <h2 className="text-4xl font-serif font-bold text-navy-800 mb-2">Carol Khoo</h2>
              <p className="text-xl text-gold-600 font-medium mb-6">Founder & Managing Director</p>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  Carol brings over 20 years of APAC regional experience with specialized expertise in financial consulting and business advisory. As a Certified Public Accountant and ACCA Fellow Member, she has guided hundreds of businesses from startups to established enterprises.
                </p>
                <p>
                  Her background includes senior positions at Big 4 accounting firms, where she developed deep expertise in audit, tax planning, and business advisory. Carol founded Wealth Foundation Institute with a vision to make enterprise-grade financial services accessible to growing businesses.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Briefcase, text: '500+ Client Engagements' },
                  { icon: Award, text: 'Former Big 4 Senior Manager' },
                  { icon: Shield, text: 'Certified Public Accountant' },
                  { icon: Globe, text: 'APAC Regional Expert' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-navy-700">
                    <item.icon className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">Our Difference</p>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Why Choose Wealth Foundation</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Personal Service', description: 'Direct access to senior professionals who understand your business' },
              { icon: Shield, title: 'Independence', description: 'Ethical standards with no compromise, ensuring unbiased advice' },
              { icon: Globe, title: 'Global Network', description: 'Access to expertise across 130+ countries through our partnerships' },
              { icon: Award, title: 'Proven Track Record', description: '98% client satisfaction with 500+ successful engagements' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-navy-200 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-navy-800 mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-10">Let's discuss how we can help your business achieve its financial goals.</p>
          <button 
            onClick={() => navigateTo('contact')}
            className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold rounded-xl shadow-xl shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );

  // Render Services Page
  const renderServicesPage = () => (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">What We Offer</p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-navy-200 max-w-3xl mx-auto">Comprehensive financial solutions tailored to your business needs, from day-to-day bookkeeping to strategic financial advisory.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {Object.entries(servicesData).map(([key, category], categoryIdx) => {
              const IconComponent = getIcon(category.icon);
              const isExpanded = expandedService === key;
              
              return (
                <div key={key} className="scroll-mt-32" id={`service-${key}`}>
                  {/* Category Header */}
                  <div 
                    className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-gradient-to-br from-navy-800 to-navy-900 text-white shadow-2xl' 
                        : 'bg-gradient-to-br from-navy-50 to-white border border-gray-200 hover:border-navy-200 hover:shadow-lg'
                    }`}
                    onClick={() => setExpandedService(isExpanded ? null : key)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                          isExpanded 
                            ? 'bg-gradient-to-br from-gold-400 to-gold-500' 
                            : categoryIdx === 0 ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                              categoryIdx === 1 ? 'bg-gradient-to-br from-navy-600 to-navy-700' :
                              'bg-gradient-to-br from-gold-400 to-gold-500'
                        }`}>
                          <IconComponent className={`w-8 h-8 ${isExpanded ? 'text-navy-900' : 'text-white'}`} />
                        </div>
                        <div>
                          <h2 className={`text-2xl font-bold ${isExpanded ? 'text-white' : 'text-navy-800'}`}>{category.title}</h2>
                          <p className={`mt-1 ${isExpanded ? 'text-navy-200' : 'text-gray-600'}`}>{category.description}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-gold-400' : 'text-navy-400'
                      }`} />
                    </div>
                  </div>

                  {/* Expanded Services */}
                  {isExpanded && (
                    <div className="mt-8 grid md:grid-cols-2 gap-6 animate-fadeIn">
                      {category.services.map((service, sIdx) => (
                        <div 
                          key={sIdx}
                          className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                        >
                          <h3 className="text-xl font-bold text-navy-800 mb-3">{service.name}</h3>
                          <p className="text-gray-600 mb-6">{service.description}</p>
                          
                          <div>
                            <p className="text-sm font-semibold text-navy-700 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-gold-500" />
                              What's Included
                            </p>
                            <ul className="space-y-2">
                              {service.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-gray-600 text-sm">
                                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button 
                            onClick={() => navigateTo('contact')}
                            className="mt-6 w-full py-3 border-2 border-navy-200 text-navy-700 font-semibold rounded-lg hover:bg-navy-800 hover:text-white hover:border-navy-800 transition-all duration-300"
                          >
                            Get a Quote
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-navy-200 mb-10">Schedule a free consultation and we'll help you identify the right solutions for your business.</p>
          <button 
            onClick={() => navigateTo('contact')}
            className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold rounded-xl shadow-xl shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Free Consultation
          </button>
        </div>
      </section>
    </main>
  );

  // Render Contact Page
  const renderContactPage = () => (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">Get in Touch</p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-navy-200 max-w-3xl mx-auto">Ready to transform your business finances? Let's start a conversation.</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-800 mb-2">Request a Quote</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {state.succeeded && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                        <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                      placeholder="Your Name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy-800 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                      placeholder="your.email@company.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                      placeholder="+65 XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-navy-800 mb-2">Service of Interest *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option value="">Select a service</option>
                    <optgroup label="Accounting & Bookkeeping">
                      <option value="bookkeeping">Full-Service Bookkeeping</option>
                      <option value="financial-reporting">Financial Reporting</option>
                      <option value="payroll">Payroll Services</option>
                      <option value="tax-compliance">GST & Tax Compliance</option>
                    </optgroup>
                    <optgroup label="Business Management">
                      <option value="company-incorporation">Company Incorporation</option>
                      <option value="corporate-secretarial">Corporate Secretarial</option>
                      <option value="business-advisory">Business Advisory</option>
                      <option value="compliance">Compliance & Governance</option>
                    </optgroup>
                    <optgroup label="Financial Services">
                      <option value="fpa">Financial Planning & Analysis</option>
                      <option value="audit">Audit & Assurance</option>
                      <option value="funding">Funding & Capital Advisory</option>
                      <option value="cfo-advisory">CFO Advisory Services</option>
                    </optgroup>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                  <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-2">Tell Us About Your Needs *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Describe your business challenges, goals, or questions..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 ${
                    state.submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 transform hover:-translate-y-0.5'
                  }`}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-10 text-white mb-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Get in Touch Directly</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-200 text-sm mb-1">Call or WhatsApp</p>
                      <a href="tel:+6597486325" className="text-xl font-semibold hover:text-gold-400 transition-colors">+65 9748 6325</a>
                      <p className="text-navy-300 text-sm mt-1">Carol Khoo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-200 text-sm mb-1">Email Us</p>
                      <a href="mailto:carol2kmg@yahoo.com.sg" className="text-xl font-semibold hover:text-gold-400 transition-colors">carol2kmg@yahoo.com.sg</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-200 text-sm mb-1">Location</p>
                      <p className="text-xl font-semibold">Singapore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-200 text-sm mb-1">Business Hours</p>
                      <p className="text-xl font-semibold">Mon - Fri: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-navy-700">
                  <a 
                    href="https://wa.me/6597486325?text=I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-orange-600 mb-2">24hr</p>
                  <p className="text-orange-800 text-sm font-medium">Response Time</p>
                </div>
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-gold-600 mb-2">Free</p>
                  <p className="text-gold-800 text-sm font-medium">Initial Consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  // Main Render
  return (
    <div className="min-h-screen bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
        
        :root {
          --navy-50: #f0f4f8;
          --navy-100: #d9e2ec;
          --navy-200: #bcccdc;
          --navy-300: #9fb3c8;
          --navy-400: #829ab1;
          --navy-500: #627d98;
          --navy-600: #486581;
          --navy-700: #334e68;
          --navy-800: #243b53;
          --navy-900: #102a43;
          --gold-50: #fef9f0;
          --gold-50: #fef9f0;
          --gold-100: #fef3c7;
          --gold-200: #fde68a;
          --gold-300: #fcd34d;
          --gold-400: #fbbf24;
          --gold-500: #f59e0b;
          --gold-600: #d97706;
          --gold-700: #b45309;
          --gold-800: #92400e;
          --gold-900: #78350f;
        }
        
        * {
          font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        .bg-navy-50 { background-color: var(--navy-50); }
        .bg-navy-100 { background-color: var(--navy-100); }
        .bg-navy-200 { background-color: var(--navy-200); }
        .bg-navy-600 { background-color: var(--navy-600); }
        .bg-navy-700 { background-color: var(--navy-700); }
        .bg-navy-800 { background-color: var(--navy-800); }
        .bg-navy-900 { background-color: var(--navy-900); }
        
        .text-navy-200 { color: var(--navy-200); }
        .text-navy-300 { color: var(--navy-300); }
        .text-navy-400 { color: var(--navy-400); }
        .text-navy-500 { color: var(--navy-500); }
        .text-navy-700 { color: var(--navy-700); }
        .text-navy-800 { color: var(--navy-800); }
        
        .border-navy-100 { border-color: var(--navy-100); }
        .border-navy-200 { border-color: var(--navy-200); }
        .border-navy-700 { border-color: var(--navy-700); }
        .border-navy-800 { border-color: var(--navy-800); }
        
        .bg-gold-50 { background-color: var(--gold-50); }
        .bg-gold-100 { background-color: var(--gold-100); }
        .bg-gold-400 { background-color: var(--gold-400); }
        .bg-gold-500 { background-color: var(--gold-500); }
        
        .text-gold-400 { color: var(--gold-400); }
        .text-gold-500 { color: var(--gold-500); }
        .text-gold-600 { color: var(--gold-600); }
        .text-gold-800 { color: var(--gold-800); }
        
        .border-gold-400 { border-color: var(--gold-400); }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .gradient-mesh {
          background: 
            radial-gradient(at 0% 0%, rgba(251, 191, 36, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(249, 115, 22, 0.1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(36, 59, 83, 0.2) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(251, 191, 36, 0.1) 0px, transparent 50%);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        .scroll-mt-32 {
          scroll-margin-top: 8rem;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--navy-50);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--navy-400);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--navy-600);
        }
      `}</style>
      
      {renderNavigation()}
      
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'about' && renderAboutPage()}
      {currentPage === 'services' && renderServicesPage()}
      {currentPage === 'contact' && renderContactPage()}
      
      {renderFooter()}
    </div>
  );
}