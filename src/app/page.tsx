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
  name_zh: string;
  description: string;
  description_zh: string;
  features: string[];
  features_zh: string[];
}

interface ServiceCategory {
  title: string;
  title_zh: string;
  description: string;
  description_zh: string;
  icon: string;
  services: ServiceItem[];
}

interface Testimonial {
  name: string;
  role: string;
  role_zh: string;
  company: string;
  content: string;
  content_zh: string;
  rating: number;
}

interface Translations {
  en: any;
  zh: any;
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

  // Translations
  const translations: Translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        contact: 'Contact Us'
      },
      hero: {
        badge: "Singapore's Trusted Financial Partner",
        title: 'Wealth Foundation Institute',
        subtitle: 'Strategic Financial Excellence',
        description: 'Transforming complexity into clarity. We partner with businesses to navigate financial challenges, optimize operations, and unlock sustainable growth.',
        tagline1: 'Is your bookkeeping causing sleepless nights?',
        tagline2: 'Are cash flow gaps threatening your growth?',
        tagline3: 'Need clarity in your financial statements?',
        cta1: 'Get Free Consultation',
        cta2: 'Explore Services',
        ceoTitle: 'Meet Our Founder',
        ceoBadge: 'Meet Our Founder'
      },
      problems: {
        title: 'Is Your Business Facing These Struggles?',
        subtitle: 'We Understand Your Challenges',
        messy: 'Messy Books',
        messyDesc: 'Drowning in receipts, invoices, and bank statements with no clear picture of where you stand?',
        cashflow: 'Cash Flow Gaps',
        cashflowDesc: 'Profitable on paper but constantly scrambling for cash to pay bills and suppliers?',
        compliance: 'Compliance Anxiety',
        complianceDesc: 'Worried about missing deadlines, filing errors, or falling foul of regulations?',
        growth: 'Growth Bottlenecks',
        growthDesc: 'Ready to scale but lacking the financial infrastructure and insights to do it confidently?',
        cta: "Let's Solve This Together",
        message: "You're not alone. We've helped hundreds of businesses overcome these exact challenges."
      },
      services: {
        title: 'Comprehensive Business Solutions',
        subtitle: 'What We Do',
        description: 'From bookkeeping basics to strategic financial advisory, we provide end-to-end support for your business journey.',
        learnMore: 'Learn More'
      },
      testimonials: {
        title: 'Trusted by Growing Businesses',
        subtitle: 'Success Stories',
        description: "See how we've helped businesses like yours achieve financial clarity and growth."
      },
      footer: {
        ctaTitle: 'Ready to Transform Your Business Finances?',
        ctaDescription: 'Schedule a complimentary consultation with our experts and discover how we can help you achieve financial clarity.',
        ctaButton: 'Get Free Consultation',
        ctaPhone: 'Call +65 9748 6325',
        tagline: 'Your trusted partner for accounting, business management, and financial services in Singapore. Transforming complexity into clarity since 2016.',
        quickLinks: 'Quick Links',
        ourServices: 'Our Services',
        contactUs: 'Contact Us',
        copyright: '© 2024 Wealth Foundation Institute Pte Ltd. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in Touch',
        description: "Ready to transform your business finances? Let's start a conversation.",
        formTitle: 'Request a Quote',
        formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
        fullName: 'Full Name',
        company: 'Company Name',
        email: 'Email Address',
        phone: 'Phone Number',
        service: 'Service of Interest',
        message: 'Tell Us About Your Needs',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message Sent Successfully!',
        successMessage: "We'll get back to you within 24 hours.",
        directContact: 'Get in Touch Directly',
        callWhatsApp: 'Call or WhatsApp',
        emailUs: 'Email Us',
        location: 'Location',
        singapore: 'Singapore',
        businessHours: 'Business Hours',
        hours: 'Mon - Fri: 9AM - 6PM',
        chatWhatsApp: 'Chat on WhatsApp',
        responseTime: '24hr Response Time',
        freeConsult: 'Free Initial Consultation'
      },
      about: {
        title: 'Who We Are',
        subtitle: 'About Us',
        description: 'A dedicated team of financial professionals committed to transforming the way businesses manage their finances.',
        storyTitle: 'Building Trust Through Excellence',
        storySubtitle: 'Our Story',
        approach: 'How We Work',
        approachSubtitle: 'Our Approach',
        approachDescription: 'We are inspired to work together and are proud to identify ourselves as dedicated professionals delivering a full range of services tailored to your needs.',
        ceoSection: 'Meet Our Founder',
        whyChoose: 'Why Choose Wealth Foundation',
        whySubtitle: 'Our Difference',
        readyCta: 'Ready to Work Together?',
        readyDescription: "Let's discuss how we can help your business achieve its financial goals.",
        getInTouch: 'Get in Touch'
      }
    },
    zh: {
      nav: {
        home: '首页',
        about: '关于我们',
        services: '服务',
        contact: '联系我们'
      },
      hero: {
        badge: '新加坡值得信赖的财务合作伙伴',
        title: '财富基金学院',
        subtitle: '战略财务卓越',
        description: '化繁为简。我们与企业合作，应对财务挑战，优化运营，释放可持续增长。',
        tagline1: '您的簿记是否让您夜不能寐？',
        tagline2: '现金流缺口是否威胁您的增长？',
        tagline3: '需要清晰的财务报表吗？',
        cta1: '获取免费咨询',
        cta2: '探索服务',
        ceoTitle: '认识我们的创始人',
        ceoBadge: '认识我们的创始人'
      },
      problems: {
        title: '您的企业是否面临这些困境？',
        subtitle: '我们理解您的挑战',
        messy: '账目混乱',
        messyDesc: '淹没在收据、发票和银行对账单中，不清楚自己的财务状况？',
        cashflow: '现金流缺口',
        cashflowDesc: '账面上盈利，但总是为支付账单和供应商而苦恼？',
        compliance: '合规焦虑',
        complianceDesc: '担心错过截止日期、申报错误或违反法规？',
        growth: '增长瓶颈',
        growthDesc: '准备扩张但缺乏财务基础设施和洞察力来自信地完成？',
        cta: '让我们一起解决',
        message: '您并不孤单。我们已帮助数百家企业克服了这些挑战。'
      },
      services: {
        title: '全面的商业解决方案',
        subtitle: '我们的服务',
        description: '从基本簿记到战略财务咨询，我们为您的业务旅程提供端到端支持。',
        learnMore: '了解更多'
      },
      testimonials: {
        title: '受成长型企业信赖',
        subtitle: '成功案例',
        description: '看看我们如何帮助像您这样的企业实现财务清晰和增长。'
      },
      footer: {
        ctaTitle: '准备好转变您的企业财务了吗？',
        ctaDescription: '预约免费咨询，了解我们如何帮助您实现财务清晰。',
        ctaButton: '获取免费咨询',
        ctaPhone: '致电 +65 9748 6325',
        tagline: '您在新加坡的会计、企业管理和财务服务的可靠合作伙伴。自2016年以来化繁为简。',
        quickLinks: '快速链接',
        ourServices: '我们的服务',
        contactUs: '联系我们',
        copyright: '© 2024 财富基金学院私人有限公司。保留所有权利。',
        privacy: '隐私政策',
        terms: '服务条款'
      },
      contact: {
        title: '联系我们',
        subtitle: '联系方式',
        description: '准备好转变您的企业财务了吗？让我们开始对话。',
        formTitle: '申请报价',
        formDescription: '填写下面的表格，我们将在24小时内回复您。',
        fullName: '全名',
        company: '公司名称',
        email: '电子邮件地址',
        phone: '电话号码',
        service: '感兴趣的服务',
        message: '告诉我们您的需求',
        send: '发送消息',
        sending: '发送中...',
        success: '消息发送成功！',
        successMessage: '我们将在24小时内回复您。',
        directContact: '直接联系',
        callWhatsApp: '致电或WhatsApp',
        emailUs: '发送邮件',
        location: '位置',
        singapore: '新加坡',
        businessHours: '营业时间',
        hours: '周一至周五：上午9点 - 下午6点',
        chatWhatsApp: '在WhatsApp上聊天',
        responseTime: '24小时响应时间',
        freeConsult: '免费初步咨询'
      },
      about: {
        title: '我们是谁',
        subtitle: '关于我们',
        description: '一支致力于改变企业财务管理方式的专业财务团队。',
        storyTitle: '通过卓越建立信任',
        storySubtitle: '我们的故事',
        approach: '我们的工作方式',
        approachSubtitle: '我们的方法',
        approachDescription: '我们受到启发，共同努力，并自豪地将自己定位为提供全方位定制服务的专业人士。',
        ceoSection: '认识我们的创始人',
        whyChoose: '为什么选择财富基金',
        whySubtitle: '我们的不同',
        readyCta: '准备好合作了吗？',
        readyDescription: '让我们讨论如何帮助您的企业实现财务目标。',
        getInTouch: '联系我们'
      }
    }
  };

  const t = translations[language];

  // Hero slides content
  const heroSlides = [
    {
      type: 'company',
      title: language === 'en' ? 'Wealth Foundation Institute' : '财富基金学院',
      subtitle: language === 'en' ? 'Strategic Financial Excellence' : '战略财务卓越',
      description: t.hero.description,
      taglines: [
        t.hero.tagline1,
        t.hero.tagline2,
        t.hero.tagline3
      ]
    },
    {
      type: 'ceo',
      name: 'Carol Khoo',
      title: language === 'en' ? 'Founder & Managing Director' : '创始人兼董事总经理',
      credentials: 'CPA, ACCA, MBA',
      experience: language === 'en' ? '20+ Years APAC Experience' : '20+年亚太经验',
      bio: language === 'en' 
        ? 'A visionary leader with over two decades of expertise in financial consulting and business advisory across the Asia-Pacific region. Carol has guided hundreds of businesses from startups to established enterprises, helping them achieve financial clarity and sustainable growth.'
        : '一位富有远见的领导者，在亚太地区拥有二十多年的财务咨询和业务顾问专业知识。Carol已指导数百家企业从初创企业到成熟企业，帮助他们实现财务清晰和可持续增长。',
      achievements: language === 'en'
        ? ['500+ Successful Client Engagements', 'Former Big 4 Senior Manager', 'Certified Public Accountant', 'ACCA Fellow Member']
        : ['500+成功客户参与', '前四大高级经理', '注册会计师', 'ACCA会员']
    }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      name: "David Chen",
      role: "CEO",
      role_zh: "首席执行官",
      company: "TechVenture Pte Ltd",
      content: "Wealth Foundation transformed our chaotic financial records into a streamlined system. Their strategic approach helped us secure Series A funding with confidence.",
      content_zh: "财富基金将我们混乱的财务记录转变为精简的系统。他们的战略方法帮助我们自信地获得了A轮融资。",
      rating: 5
    },
    {
      name: "Sarah Lim",
      role: "Managing Director",
      role_zh: "董事总经理",
      company: "Asian Retail Holdings",
      content: "Professional, responsive, and genuinely invested in our success. Carol's team identified cost savings we never knew existed, improving our margins by 15%.",
      content_zh: "专业、响应迅速，真正投入我们的成功。Carol的团队发现了我们从未知道的成本节约，将我们的利润率提高了15%。",
      rating: 5
    },
    {
      name: "Michael Wong",
      role: "Founder",
      role_zh: "创始人",
      company: "GreenTech Solutions",
      content: "From company setup to ongoing compliance, they've been our trusted partner for 5 years. Their proactive approach to tax planning has saved us significantly.",
      content_zh: "从公司设立到持续合规，他们已经是我们5年的可靠合作伙伴。他们在税务规划方面的主动方法为我们节省了大量资金。",
      rating: 5
    },
    {
      name: "Jennifer Tan",
      role: "CFO",
      role_zh: "首席财务官",
      company: "Meridian Investments",
      content: "The level of detail and professionalism exceeded our expectations. Their audit preparation support made our annual audit seamless and stress-free.",
      content_zh: "细节和专业程度超出了我们的预期。他们的审计准备支持使我们的年度审计无缝且无压力。",
      rating: 5
    }
  ];

  // Services Data with Chinese translations
  const servicesData: Record<string, ServiceCategory> = {
    accounting: {
      title: language === 'en' ? 'Accounting & Bookkeeping' : '会计和簿记',
      title_zh: '会计和簿记',
      description: language === 'en' ? 'Comprehensive financial record management that gives you clarity and control' : '全面的财务记录管理，让您清晰和控制',
      description_zh: '全面的财务记录管理，让您清晰和控制',
      icon: 'Calculator',
      services: [
        {
          name: 'Full-Service Bookkeeping',
          name_zh: '全方位簿记服务',
          description: 'End-to-end management of your financial transactions with meticulous accuracy',
          description_zh: '精确管理您的财务交易的端到端管理',
          features: ['Monthly transaction recording', 'Bank reconciliation', 'Accounts payable/receivable', 'Financial statement preparation', 'Cloud-based real-time access'],
          features_zh: ['每月交易记录', '银行对账', '应付/应收账款', '财务报表编制', '基于云的实时访问']
        },
        {
          name: 'Financial Reporting',
          name_zh: '财务报告',
          description: 'Clear, actionable financial statements that drive informed decisions',
          description_zh: '清晰、可操作的财务报表，推动明智决策',
          features: ['SFRS-compliant statements', 'Management reporting', 'Variance analysis', 'Cash flow forecasting', 'Board presentation materials'],
          features_zh: ['符合SFRS的报表', '管理报告', '差异分析', '现金流预测', '董事会演示材料']
        },
        {
          name: 'Payroll Services',
          name_zh: '薪资服务',
          description: 'Accurate, timely payroll processing with full compliance',
          description_zh: '准确、及时的薪资处理，完全合规',
          features: ['Salary computation', 'CPF submissions', 'IR8A preparation', 'Leave management', 'Employee expense claims'],
          features_zh: ['工资计算', 'CPF提交', 'IR8A准备', '休假管理', '员工费用报销']
        },
        {
          name: 'GST & Tax Compliance',
          name_zh: '消费税和税务合规',
          description: 'Stay compliant and optimize your tax position',
          description_zh: '保持合规并优化您的税务状况',
          features: ['GST registration & filing', 'Corporate tax computation', 'Tax planning strategies', 'IRAS correspondence', 'Tax incentive advisory'],
          features_zh: ['消费税注册和申报', '企业税计算', '税务规划策略', 'IRAS通信', '税收激励咨询']
        }
      ]
    },
    management: {
      title: language === 'en' ? 'Business Management' : '企业管理',
      title_zh: '企业管理',
      description: language === 'en' ? 'Strategic guidance to optimize operations and accelerate growth' : '战略指导以优化运营并加速增长',
      description_zh: '战略指导以优化运营并加速增长',
      icon: 'Building',
      services: [
        {
          name: 'Company Incorporation',
          name_zh: '公司注册',
          description: 'Seamless business setup in Singapore with full regulatory compliance',
          description_zh: '在新加坡无缝设立业务，完全符合监管要求',
          features: ['ACRA registration', 'Company constitution', 'Registered address', 'Nominee director services', 'Bank account opening support'],
          features_zh: ['ACRA注册', '公司章程', '注册地址', '代理董事服务', '银行开户支持']
        },
        {
          name: 'Corporate Secretarial',
          name_zh: '公司秘书服务',
          description: 'Professional governance support to maintain good standing',
          description_zh: '专业治理支持以保持良好声誉',
          features: ['Annual returns filing', 'Board resolutions', 'Share transfers', 'Statutory registers', 'AGM organization'],
          features_zh: ['年度申报', '董事会决议', '股份转让', '法定登记册', '年度股东大会组织']
        },
        {
          name: 'Business Advisory',
          name_zh: '企业咨询',
          description: 'Strategic insights to navigate challenges and seize opportunities',
          description_zh: '战略洞察以应对挑战并抓住机遇',
          features: ['Business planning', 'Market entry strategy', 'Operational optimization', 'Risk assessment', 'Growth roadmapping'],
          features_zh: ['商业规划', '市场进入战略', '运营优化', '风险评估', '增长路线图']
        },
        {
          name: 'Compliance & Governance',
          name_zh: '合规与治理',
          description: 'Ensure your business meets all regulatory requirements',
          description_zh: '确保您的业务符合所有监管要求',
          features: ['Regulatory compliance audit', 'Policy development', 'Internal controls', 'Compliance training', 'Regulatory liaison'],
          features_zh: ['监管合规审计', '政策制定', '内部控制', '合规培训', '监管联络']
        }
      ]
    },
    financial: {
      title: language === 'en' ? 'Financial Services' : '财务服务',
      title_zh: '财务服务',
      description: language === 'en' ? 'Expert financial strategies to optimize performance and drive growth' : '专家财务策略以优化绩效并推动增长',
      description_zh: '专家财务策略以优化绩效并推动增长',
      icon: 'TrendingUp',
      services: [
        {
          name: 'Financial Planning & Analysis',
          name_zh: '财务规划与分析',
          description: 'Data-driven insights to guide strategic decisions',
          description_zh: '数据驱动的洞察以指导战略决策',
          features: ['Budget development', 'Financial modeling', 'KPI dashboards', 'Profitability analysis', 'Investment appraisal'],
          features_zh: ['预算编制', '财务建模', 'KPI仪表板', '盈利能力分析', '投资评估']
        },
        {
          name: 'Audit & Assurance',
          name_zh: '审计与保证',
          description: 'Independent verification that builds stakeholder confidence',
          description_zh: '独立验证以建立利益相关者的信心',
          features: ['Statutory audits', 'Internal audits', 'Due diligence', 'Special purpose audits', 'Agreed-upon procedures'],
          features_zh: ['法定审计', '内部审计', '尽职调查', '特殊目的审计', '商定程序']
        },
        {
          name: 'Funding & Capital Advisory',
          name_zh: '融资与资本咨询',
          description: 'Navigate funding options and optimize your capital structure',
          description_zh: '浏览融资选择并优化您的资本结构',
          features: ['Bank loan applications', 'Grant advisory', 'Investor pitch preparation', 'Working capital optimization', 'Debt restructuring'],
          features_zh: ['银行贷款申请', '赠款咨询', '投资者推介准备', '营运资本优化', '债务重组']
        },
        {
          name: 'CFO Advisory Services',
          name_zh: '首席财务官咨询服务',
          description: 'Fractional CFO expertise for growing businesses',
          description_zh: '为成长型企业提供分数首席财务官专业知识',
          features: ['Strategic financial leadership', 'Investor relations', 'M&A support', 'Financial transformation', 'Exit planning'],
          features_zh: ['战略财务领导', '投资者关系', '并购支持', '财务转型', '退出规划']
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
  }, [language]);

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
            <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-navy font-serif font-bold text-xl">W</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-xl text-navy-800 tracking-tight">
                {language === 'en' ? 'Wealth Foundation' : '财富基金'}
              </span>
              <span className="block text-xs text-gray-600 tracking-widest uppercase">
                {language === 'en' ? 'Institute' : '学院'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => navigateTo('home')}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg ${
                currentPage === 'home' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              {t.nav.home}
            </button>
            
            <button
              onClick={() => navigateTo('about')}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg ${
                currentPage === 'about' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              {t.nav.about}
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveServiceDropdown(activeServiceDropdown === 'services' ? null : 'services')}
                onMouseEnter={() => setActiveServiceDropdown('services')}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg flex items-center gap-1 ${
                  currentPage === 'services' 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                {t.nav.services}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeServiceDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeServiceDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-fadeIn"
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
                        className="w-full px-4 py-3 flex items-start gap-3 hover:bg-orange-50 transition-colors text-left"
                      >
                        <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-navy-800 text-sm">{category.title}</p>
                          <p className="text-xs text-gray-600 mt-0.5 line-clamp-1">{category.description}</p>
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
              {t.nav.contact}
            </button>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:text-orange-600 border border-gray-200 rounded-lg hover:border-orange-300 transition-all"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'EN'}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fadeIn">
            <div className="space-y-1">
              <button onClick={() => navigateTo('home')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium">{t.nav.home}</button>
              <button onClick={() => navigateTo('about')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium">{t.nav.about}</button>
              <button onClick={() => navigateTo('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium">{t.nav.services}</button>
              <button 
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium sm:hidden"
              >
                {language === 'en' ? '中文' : 'English'}
              </button>
              <button onClick={() => navigateTo('contact')} className="block w-full text-left px-4 py-3 mt-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">{t.nav.contact}</button>
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
              <h3 className="text-3xl font-serif font-bold mb-4">{t.footer.ctaTitle}</h3>
              <p className="text-navy-300 text-lg">{t.footer.ctaDescription}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button 
                onClick={() => navigateTo('contact')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {t.footer.ctaButton}
              </button>
              <a 
                href="tel:+6597486325"
                className="px-8 py-4 border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 font-semibold rounded-lg transition-all duration-300 text-center"
              >
                {t.footer.ctaPhone}
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
                <span className="font-serif font-bold text-lg text-white">
                  {language === 'en' ? 'Wealth Foundation' : '财富基金'}
                </span>
                <span className="block text-xs text-navy-300 tracking-widest uppercase">
                  {language === 'en' ? 'Institute' : '学院'}
                </span>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <p className="text-navy-400 text-xs">UEN: 201602899G</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-6 text-sm tracking-widest uppercase">{t.footer.ourServices}</h4>
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
            <h4 className="font-semibold text-gold-400 mb-6 text-sm tracking-widest uppercase">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigateTo('home')} className="text-navy-300 hover:text-white transition-colors text-sm">{t.nav.home}</button></li>
              <li><button onClick={() => navigateTo('about')} className="text-navy-300 hover:text-white transition-colors text-sm">{t.nav.about}</button></li>
              <li><button onClick={() => navigateTo('services')} className="text-navy-300 hover:text-white transition-colors text-sm">{t.nav.services}</button></li>
              <li><button onClick={() => navigateTo('contact')} className="text-navy-300 hover:text-white transition-colors text-sm">{t.nav.contact}</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-6 text-sm tracking-widest uppercase">{t.footer.contactUs}</h4>
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
                <p className="text-navy-300 text-sm">{t.contact.singapore}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm">{t.footer.copyright}</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-navy-400 hover:text-white text-sm transition-colors">{t.footer.privacy}</a>
              <a href="#" className="text-navy-400 hover:text-white text-sm transition-colors">{t.footer.terms}</a>
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-200 rounded-full blur-3xl"></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {heroSlide === 0 ? (
                // Company Slide
                <div className="animate-fadeInUp">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 backdrop-blur-sm rounded-full border border-orange-300 mb-6">
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                    <span className="text-orange-600 text-sm font-semibold">{t.hero.badge}</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-navy-900 leading-tight mb-6">
                    {heroSlides[0].title}
                  </h1>
                  
                  <p className="text-xl text-gray-700 font-light mb-8 leading-relaxed">
                    {heroSlides[0].description}
                  </p>

                  <div className="space-y-3 mb-10">
                    {heroSlides[0].taglines?.map((tagline, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-800 animate-fadeInUp" style={{ animationDelay: `${idx * 150}ms` }}>
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-lg font-medium">{tagline}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Primary CTA – unchanged */}
                    <button 
                      onClick={() => navigateTo('contact')}
                      className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      {t.hero.cta1}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Secondary CTA – fixed */}
                    <button
                      onClick={() => navigateTo('services')}
                      className="px-8 py-4 border-2 border-navy-900/15 bg-white/90 text-navy-900 font-semibold rounded-lg shadow-sm hover:bg-white hover:border-navy-900/40 hover:shadow-md transition-all duration-300"
                    >
                      {t.hero.cta2}
                    </button>
                  </div>
                </div>
              ) : (
                // CEO Slide
                <div className="animate-fadeInUp">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 backdrop-blur-sm rounded-full border border-blue-300 mb-6">
                    <span className="text-blue-700 text-sm font-semibold">{t.hero.ceoBadge}</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-blue-700 mb-2">
                    {heroSlides[1].name}
                  </h2>
                  <p className="text-xl text-gold-400 font-semibold mb-2">{heroSlides[1].title}</p>
                  <p className="text-gray-600 font-medium mb-6">{heroSlides[1].credentials} | {heroSlides[1].experience}</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {heroSlides[1].bio}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {heroSlides[1].achievements?.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-800">
                        <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{achievement}</span>
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
                    { number: '20+', label: language === 'en' ? 'Years Experience' : '年经验', icon: Clock },
                    { number: '500+', label: language === 'en' ? 'Clients Served' : '服务客户', icon: Users },
                    { number: '98%', label: language === 'en' ? 'Client Satisfaction' : '客户满意度', icon: Star },
                    { number: 'S$50M+', label: language === 'en' ? 'Managed Annually' : '年度管理', icon: DollarSign }
                  ].map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 hover:bg-white/15 hover:border-gold-400/50 transition-all duration-300 animate-fadeInUp"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <stat.icon className="w-10 h-10 text-gold-400 mb-4" />
                      <p className="text-4xl font-bold text-navy-900 mb-2">{stat.number}</p>
                      <p className="text-navy-300 text-sm font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              ) : (
                // CEO Image Placeholder
                <div className="relative">
                  <div className="aspect-[3/4] max-w-md mx-auto bg-gradient-to-br from-navy-700 to-navy-800 rounded-3xl overflow-hidden border-4 border-gold-400/40 shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                          <Users className="w-16 h-16 text-white" />
                        </div>
                        <p className="text-gold-400 font-semibold text-lg">CEO Portrait</p>
                        <p className="text-navy-400 text-sm mt-2">{language === 'en' ? 'Image Placeholder' : '图片占位符'}</p>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 border-3 border-gold-400/40 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-3 border-gold-400/40 rounded-full"></div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-5 shadow-2xl border-2 border-gold-400/20">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-navy-800 text-lg">500+</p>
                        <p className="text-xs text-gray-600 font-medium">
                          {language === 'en' ? 'Successful Engagements' : '成功案例'}
                        </p>
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
                  idx === heroSlide ? 'w-12 bg-orange-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">{t.problems.subtitle}</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-6">
              {t.problems.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calculator, title: t.problems.messy, description: t.problems.messyDesc, color: 'orange' },
              { icon: TrendingUp, title: t.problems.cashflow, description: t.problems.cashflowDesc, color: 'blue' },
              { icon: FileText, title: t.problems.compliance, description: t.problems.complianceDesc, color: 'purple' },
              { icon: Target, title: t.problems.growth, description: t.problems.growthDesc, color: 'green' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-orange-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${
                  item.color === 'orange' ? 'from-orange-100 to-orange-200' :
                  item.color === 'blue' ? 'from-blue-100 to-blue-200' :
                  item.color === 'purple' ? 'from-purple-100 to-purple-200' :
                  'from-green-100 to-green-200'
                } rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <item.icon className={`w-8 h-8 ${
                    item.color === 'orange' ? 'text-orange-600' :
                    item.color === 'blue' ? 'text-blue-600' :
                    item.color === 'purple' ? 'text-purple-600' :
                    'text-green-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-navy-800 mb-6 font-medium">
              {t.problems.message}
            </p>
            <button 
              onClick={() => navigateTo('contact')}
              className="px-8 py-4 bg-gradient-to-r from-navy-700 to-navy-900 hover:from-navy-800 hover:to-navy-950 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {t.problems.cta}
            </button>
          </div>
        </div>
      </section>

{/* Services Preview */}
<section className="py-24 bg-gradient-to-br from-navy-50 via-white to-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">
        {t.services.subtitle}
      </p>
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-6">
        {t.services.title}
      </h2>
      <p className="text-xl text-gray-700">{t.services.description}</p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8 items-stretch">
      {Object.entries(servicesData).map(([key, category], idx) => {
        const IconComponent = getIcon(category.icon);
        return (
          <div
            key={key}
            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden hover:-translate-y-1 flex flex-col"
          >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div
                className={`w-18 h-18 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg ${
                  idx === 0
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600'
                    : idx === 1
                    ? 'bg-gradient-to-br from-navy-600 to-navy-800'
                    : 'bg-gradient-to-br from-gold-500 to-gold-600'
                }`}
              >
                <IconComponent className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {category.description}
              </p>

              <ul className="space-y-3 mb-8">
                {category.services.slice(0, 3).map((service, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-3 text-gray-800"
                  >
                    <div className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium">
                      {language === 'en' ? service.name : service.name_zh}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Stick this to the bottom */}
              <button
                onClick={() => {
                  setExpandedService(key);
                  navigateTo('services');
                }}
                className="mt-auto inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                {t.services.learnMore}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 left-10 w-64 h-64 bg-gold-400/40 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">{t.testimonials.subtitle}</p>
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
        {t.testimonials.title}
      </h2>
      <p className="text-xl text-navy-200">{t.testimonials.description}</p>
    </div>

    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-2 border-white/30">
                <Quote className="w-14 h-14 text-gold-400 mb-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-xl text-white leading-relaxed mb-8 font-medium">
                  "{language === 'en' ? testimonial.content : testimonial.content_zh}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-navy-900 font-bold text-2xl">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                    <p className="text-navy-300 text-sm">
                      {language === 'en' ? testimonial.role : testimonial.role_zh}, {testimonial.company}
                    </p>
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
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/30 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setTestimonialSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === testimonialSlide ? 'w-8 bg-gold-400' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setTestimonialSlide((prev) => (prev + 1) % testimonials.length)}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/30 transition-colors"
          aria-label="Next testimonial"
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
    <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
          {language === 'en' 
            ? 'Ready to Take Control of Your Finances?' 
            : '准备好掌控您的财务了吗？'}
        </h2>
        <p className="text-xl text-navy-200 max-w-2xl mx-auto mb-10">
          {language === 'en'
            ? 'Schedule your free consultation today and discover how we can transform your business finances from a source of stress into a strategic advantage.'
            : '立即安排您的免费咨询，了解我们如何将您的企业财务从压力来源转变为战略优势。'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigateTo('contact')}
            className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold rounded-xl shadow-xl shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            {language === 'en' ? 'Get Your Free Quote' : '获取免费报价'}
          </button>
          <a 
            href="https://wa.me/6597486325?text=I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border-2 border-white/40 hover:border-white/70 hover:bg-white/10 text-white text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            {language === 'en' ? 'WhatsApp Us' : 'WhatsApp联系我们'}
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
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">{t.about.subtitle}</p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-black mb-6">{t.about.title}</h1>
            <p className="text-xl text-navy-200 max-w-3xl mx-auto">{t.about.description}</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">{t.about.storySubtitle}</p>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">{t.about.storyTitle}</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  {language === 'en'
                    ? "Wealth Foundation Institute was established with a clear mission: to make professional financial services accessible to businesses of all sizes. We believe that every business deserves the same quality of financial guidance that was once reserved for large corporations."
                    : "财富基金学院的成立有一个明确的使命：让各种规模的企业都能获得专业的财务服务。我们相信，每家企业都应该获得曾经只为大型企业保留的同等质量的财务指导。"}
                </p>
                <p className="leading-relaxed">
                  {language === 'en'
                    ? "Founded in 2016, we have grown from a small boutique practice to a trusted partner for hundreds of businesses across Singapore. Our journey has been defined by our commitment to understanding each client's unique challenges and delivering tailored solutions that drive real results."
                    : "成立于2016年，我们已从一家小型精品实践发展成为新加坡数百家企业的可靠合作伙伴。我们的旅程由我们致力于了解每个客户的独特挑战并提供推动实际成果的定制解决方案所定义。"}
                </p>
                <p className="leading-relaxed">
                  {language === 'en'
                    ? "Today, we are amongst Singapore's most respected financial consulting practices, providing a full range of accounting, business management, and financial advisory services. Our team brings together expertise from top-tier firms, combining technical excellence with practical business acumen."
                    : "今天，我们是新加坡最受尊敬的财务咨询实践之一，提供全方位的会计、企业管理和财务咨询服务。我们的团队汇集了顶级公司的专业知识，将技术卓越与实用的商业头脑相结合。"}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '2016', label: language === 'en' ? 'Year Founded' : '成立年份' },
                  { number: '500+', label: language === 'en' ? 'Clients Served' : '服务客户' },
                  { number: '20+', label: language === 'en' ? 'Years Combined Experience' : '综合经验年限' },
                  { number: '98%', label: language === 'en' ? 'Client Retention Rate' : '客户保留率' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-navy-50 to-white p-8 rounded-2xl border-2 border-navy-200 shadow-md hover:shadow-xl transition-all">
                    <p className="text-4xl font-bold text-navy-900 mb-2">{stat.number}</p>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
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
            <p className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">{t.about.approachSubtitle}</p>
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">{t.about.approach}</h2>
            <p className="text-xl text-gray-700">{t.about.approachDescription}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                icon: Users,
                title: language === 'en' ? 'Proactive Partnership' : '主动合作',
                description: language === 'en' 
                  ? 'Led by approachable partners, we use insights, experience and fresh perspective to understand complex issues and find workable solutions.'
                  : '由平易近人的合作伙伴领导，我们利用洞察力、经验和新视角来理解复杂问题并找到可行的解决方案。'
              },
              {
                icon: Target,
                title: language === 'en' ? 'Client-Centered Focus' : '以客户为中心',
                description: language === 'en'
                  ? 'We are interested in your challenges and growth ambitions. Instead of ready-made answers, we listen, ask intelligent questions, and engage in deeper business discussions.'
                  : '我们对您的挑战和增长雄心感兴趣。我们不提供现成的答案，而是倾听、提出明智的问题并进行更深入的业务讨论。'
              },
              {
                icon: Award,
                title: language === 'en' ? 'Hands-On Service' : '实践服务',
                description: language === 'en'
                  ? 'Personal, hands-on services from senior professionals continue to be the hallmark of our client experience. We are committed to meeting your objectives through practical solutions.'
                  : '来自高级专业人士的个人化实践服务继续是我们客户体验的标志。我们致力于通过实用的解决方案实现您的目标。'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-3xl shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="w-18 h-18 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed flex-1">
                  {item.description}
                </p>
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
              <div className="aspect-[3/4] max-w-md mx-auto bg-gradient-to-br from-navy-100 to-navy-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-400/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                    <p className="text-navy-800 font-bold text-xl">Carol Khoo</p>
                    <p className="text-navy-600 mt-2 font-medium">
                      {language === 'en' ? 'Founder & CEO' : '创始人兼首席执行官'}
                    </p>
                    <p className="text-gold-600 text-sm mt-1 font-semibold">CPA, ACCA, MBA</p>
                    <div className="mt-6 pt-6 border-t border-navy-300">
                      <p className="text-navy-500 text-sm italic">
                        {language === 'en' ? 'CEO Portrait Placeholder' : '首席执行官肖像占位符'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-400/30 rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400/30 rounded-2xl"></div>
            </div>

            {/* CEO Bio */}
            <div className="order-1 lg:order-2">
              <p className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">{t.about.ceoSection}</p>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-2">Carol Khoo</h2>
              <p className="text-xl text-gold-600 font-semibold mb-6">
                {language === 'en' ? 'Founder & Managing Director' : '创始人兼董事总经理'}
              </p>
              
              <div className="prose prose-lg text-gray-700 mb-8 space-y-4">
                <p className="leading-relaxed">
                  {language === 'en'
                    ? "Carol brings over 20 years of APAC regional experience with specialized expertise in financial consulting and business advisory. As a Certified Public Accountant and ACCA Fellow Member, she has guided hundreds of businesses from startups to established enterprises."
                    : "Carol拥有超过20年的亚太地区经验，在财务咨询和业务顾问方面具有专业知识。作为注册会计师和ACCA会员，她已指导数百家企业从初创企业到成熟企业。"}
                </p>
                <p className="leading-relaxed">
                  {language === 'en'
                    ? "Her background includes senior positions at Big 4 accounting firms, where she developed deep expertise in audit, tax planning, and business advisory. Carol founded Wealth Foundation Institute with a vision to make enterprise-grade financial services accessible to growing businesses."
                    : "她的背景包括在四大会计师事务所的高级职位，在那里她在审计、税务规划和业务咨询方面发展了深厚的专业知识。Carol创立了财富基金学院，旨在让成长型企业能够获得企业级财务服务。"}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Briefcase, text: language === 'en' ? '500+ Client Engagements' : '500+客户参与' },
                  { icon: Award, text: language === 'en' ? 'Former Big 4 Senior Manager' : '前四大高级经理' },
                  { icon: Shield, text: language === 'en' ? 'Certified Public Accountant' : '注册会计师' },
                  { icon: Globe, text: language === 'en' ? 'APAC Regional Expert' : '亚太地区专家' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-navy-800">
                    <item.icon className="w-6 h-6 text-gold-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">{t.about.whySubtitle}</p>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">{t.about.whyChoose}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Users, 
                title: language === 'en' ? 'Personal Service' : '个人服务', 
                description: language === 'en' 
                  ? 'Direct access to senior professionals who understand your business' 
                  : '直接接触了解您业务的高级专业人士' 
              },
              { 
                icon: Shield, 
                title: language === 'en' ? 'Independence' : '独立性', 
                description: language === 'en'
                  ? 'Ethical standards with no compromise, ensuring unbiased advice'
                  : '不妥协的道德标准，确保公正的建议'
              },
              { 
                icon: Globe, 
                title: language === 'en' ? 'Global Network' : '全球网络', 
                description: language === 'en'
                  ? 'Access to expertise across 130+ countries through our partnerships'
                  : '通过我们的合作伙伴关系访问130多个国家的专业知识'
              },
              { 
                icon: Award, 
                title: language === 'en' ? 'Proven Track Record' : '经验证的业绩', 
                description: language === 'en'
                  ? '98% client satisfaction with 500+ successful engagements'
                  : '98%客户满意度，500+成功案例'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 text-center hover:bg-white/15 hover:border-gold-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
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
          <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">{t.about.readyCta}</h2>
          <p className="text-xl text-gray-700 mb-10">{t.about.readyDescription}</p>
          <button 
            onClick={() => navigateTo('contact')}
            className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold rounded-xl shadow-xl shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            {t.about.getInTouch}
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
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">
              {language === 'en' ? 'What We Offer' : '我们提供什么'}
            </p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-black mb-6">
              {language === 'en' ? 'Our Services' : '我们的服务'}
            </h1>
            <p className="text-xl text-navy-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Comprehensive financial solutions tailored to your business needs, from day-to-day bookkeeping to strategic financial advisory.'
                : '为您的业务需求量身定制的全面财务解决方案，从日常簿记到战略财务咨询。'}
            </p>
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
                        ? 'bg-gradient-to-br from-navy-800 to-navy-900 text-white shadow-2xl border-2 border-gold-400/30' 
                        : 'bg-gradient-to-br from-navy-50 to-white border-2 border-gray-300 hover:border-orange-300 hover:shadow-lg'
                    }`}
                    onClick={() => setExpandedService(isExpanded ? null : key)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`w-18 h-18 rounded-2xl flex items-center justify-center shadow-lg ${
                          isExpanded 
                            ? 'bg-gradient-to-br from-gold-400 to-gold-600' 
                            : categoryIdx === 0 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                              categoryIdx === 1 ? 'bg-gradient-to-br from-navy-600 to-navy-800' :
                              'bg-gradient-to-br from-gold-500 to-gold-600'
                        }`}>
                          <IconComponent className={`w-10 h-10 ${isExpanded ? 'text-white' : 'text-white'}`} />
                        </div>
                        <div>
                          <h2 className={`text-2xl font-bold ${isExpanded ? 'text-white' : 'text-navy-900'}`}>
                            {category.title}
                          </h2>
                          <p className={`mt-1 ${isExpanded ? 'text-navy-200' : 'text-gray-700'}`}>
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDown className={`w-7 h-7 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-gold-400' : 'text-navy-500'
                      }`} />
                    </div>
                  </div>

                  {/* Expanded Services */}
                  {isExpanded && (
                    <div className="mt-8 grid md:grid-cols-2 gap-6 animate-fadeIn">
                      {category.services.map((service, sIdx) => (
                        <div 
                          key={sIdx}
                          className="bg-white border-2 border-gray-300 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-400 transition-all duration-300 hover:-translate-y-1"
                        >
                          <h3 className="text-xl font-bold text-navy-900 mb-3">
                            {language === 'en' ? service.name : service.name_zh}
                          </h3>
                          <p className="text-gray-700 mb-6">
                            {language === 'en' ? service.description : service.description_zh}
                          </p>
                          
                          <div>
                            <p className="text-sm font-bold text-navy-800 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-gold-600" />
                              {language === 'en' ? "What's Included" : '包含内容'}
                            </p>
                            <ul className="space-y-2">
                              {(language === 'en' ? service.features : service.features_zh).map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-gray-700 text-sm">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button 
                            onClick={() => navigateTo('contact')}
                            className="mt-6 w-full py-3 border-2 border-navy-300 text-navy-800 font-semibold rounded-lg hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300"
                          >
                            {language === 'en' ? 'Get a Quote' : '获取报价'}
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
          <h2 className="text-4xl font-serif font-bold text-black mb-6">
            {language === 'en' ? 'Not Sure Which Service You Need?' : '不确定需要哪项服务？'}
          </h2>
          <p className="text-xl text-navy-200 mb-10">
            {language === 'en'
              ? "Schedule a free consultation and we'll help you identify the right solutions for your business."
              : '安排免费咨询，我们将帮助您确定适合您业务的正确解决方案。'}
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold rounded-xl shadow-xl shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            {language === 'en' ? 'Book Free Consultation' : '预约免费咨询'}
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
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">{t.contact.subtitle}</p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-black mb-6">{t.contact.title}</h1>
            <p className="text-xl text-navy-200 max-w-3xl mx-auto">{t.contact.description}</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-2">{t.contact.formTitle}</h2>
              <p className="text-gray-700 mb-8">{t.contact.formDescription}</p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {state.succeeded && (
                  <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-7 h-7 text-green-600" />
                      <div>
                        <p className="font-bold text-green-800 text-lg">{t.contact.success}</p>
                        <p className="text-green-700 text-sm">{t.contact.successMessage}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-navy-900 mb-2">{t.contact.fullName} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none text-gray-900"
                      placeholder={language === 'en' ? 'Your Name' : '您的姓名'}
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-navy-900 mb-2">{t.contact.company}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none text-gray-900"
                      placeholder={language === 'en' ? 'Your Company' : '您的公司'}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-navy-900 mb-2">{t.contact.email} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none text-gray-900"
                      placeholder="your.email@company.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-navy-900 mb-2">{t.contact.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none text-gray-900"
                      placeholder="+65 XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-navy-900 mb-2">{t.contact.service} *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white text-gray-900"
                  >
                    <option value="">{language === 'en' ? 'Select a service' : '选择服务'}</option>
                    <optgroup label={language === 'en' ? 'Accounting & Bookkeeping' : '会计和簿记'}>
                      <option value="bookkeeping">{language === 'en' ? 'Full-Service Bookkeeping' : '全方位簿记服务'}</option>
                      <option value="financial-reporting">{language === 'en' ? 'Financial Reporting' : '财务报告'}</option>
                      <option value="payroll">{language === 'en' ? 'Payroll Services' : '薪资服务'}</option>
                      <option value="tax-compliance">{language === 'en' ? 'GST & Tax Compliance' : '消费税和税务合规'}</option>
                    </optgroup>
                    <optgroup label={language === 'en' ? 'Business Management' : '企业管理'}>
                      <option value="company-incorporation">{language === 'en' ? 'Company Incorporation' : '公司注册'}</option>
                      <option value="corporate-secretarial">{language === 'en' ? 'Corporate Secretarial' : '公司秘书服务'}</option>
                      <option value="business-advisory">{language === 'en' ? 'Business Advisory' : '企业咨询'}</option>
                      <option value="compliance">{language === 'en' ? 'Compliance & Governance' : '合规与治理'}</option>
                    </optgroup>
                    <optgroup label={language === 'en' ? 'Financial Services' : '财务服务'}>
                      <option value="fpa">{language === 'en' ? 'Financial Planning & Analysis' : '财务规划与分析'}</option>
                      <option value="audit">{language === 'en' ? 'Audit & Assurance' : '审计与保证'}</option>
                      <option value="funding">{language === 'en' ? 'Funding & Capital Advisory' : '融资与资本咨询'}</option>
                      <option value="cfo-advisory">{language === 'en' ? 'CFO Advisory Services' : '首席财务官咨询服务'}</option>
                    </optgroup>
                    <option value="other">{language === 'en' ? 'Other / Multiple Services' : '其他/多项服务'}</option>
                  </select>
                  <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-navy-900 mb-2">{t.contact.message} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none resize-none text-gray-900"
                    placeholder={language === 'en' ? 'Describe your business challenges, goals, or questions...' : '描述您的业务挑战、目标或问题...'}
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full py-4 font-bold rounded-xl transition-all duration-300 ${
                    state.submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 transform hover:-translate-y-0.5'
                  }`}
                >
                  {state.submitting ? t.contact.sending : t.contact.send}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-10 text-black mb-8 shadow-2xl">
                <h3 className="text-2xl font-serif font-bold mb-6">{t.contact.directContact}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-200 text-sm mb-1">{t.contact.callWhatsApp}</p>
                      <a href="tel:+6597486325" className="text-xl font-bold hover:text-gold-400 transition-colors">+65 9748 6325</a>
                      <p className="text-navy-300 text-sm mt-1">Carol Khoo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-200 text-sm mb-1">{t.contact.emailUs}</p>
                      <a href="mailto:carol2kmg@yahoo.com.sg" className="text-xl font-bold hover:text-gold-400 transition-colors break-all">carol2kmg@yahoo.com.sg</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-200 text-sm mb-1">{t.contact.location}</p>
                      <p className="text-xl font-bold">{t.contact.singapore}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-200 text-sm mb-1">{t.contact.businessHours}</p>
                      <p className="text-xl font-bold">{t.contact.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-navy-700">
                  <a 
                    href="https://wa.me/6597486325?text=I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    {t.contact.chatWhatsApp}
                  </a>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 text-center border-2 border-orange-300">
                  <p className="text-4xl font-bold text-orange-700 mb-2">24hr</p>
                  <p className="text-orange-800 text-sm font-bold">{t.contact.responseTime}</p>
                </div>
                <div className="bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl p-6 text-center border-2 border-gold-300">
                  <p className="text-4xl font-bold text-gold-700 mb-2">Free</p>
                  <p className="text-gold-800 text-sm font-bold">{t.contact.freeConsult}</p>
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
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
          --navy-950: #0a1929;
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
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
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
        .bg-navy-950 { background-color: var(--navy-950); }
        
        .text-navy-200 { color: var(--navy-200); }
        .text-navy-300 { color: var(--navy-300); }
        .text-navy-400 { color: var(--navy-400); }
        .text-navy-500 { color: var(--navy-500); }
        .text-navy-600 { color: var(--navy-600); }
        .text-navy-700 { color: var(--navy-700); }
        .text-navy-800 { color: var(--navy-800); }
        .text-navy-900 { color: var(--navy-900); }
        
        .border-navy-100 { border-color: var(--navy-100); }
        .border-navy-200 { border-color: var(--navy-200); }
        .border-navy-300 { border-color: var(--navy-300); }
        .border-navy-700 { border-color: var(--navy-700); }
        .border-navy-800 { border-color: var(--navy-800); }
        
        .bg-gold-50 { background-color: var(--gold-50); }
        .bg-gold-100 { background-color: var(--gold-100); }
        .bg-gold-400 { background-color: var(--gold-400); }
        .bg-gold-500 { background-color: var(--gold-500); }
        .bg-gold-600 { background-color: var(--gold-600); }
        
        .text-gold-400 { color: var(--gold-400); }
        .text-gold-500 { color: var(--gold-500); }
        .text-gold-600 { color: var(--gold-600); }
        .text-gold-700 { color: var(--gold-700); }
        .text-gold-800 { color: var(--gold-800); }
        
        .border-gold-300 { border-color: var(--gold-300); }
        .border-gold-400 { border-color: var(--gold-400); }
        
        .from-gold-400 { --tw-gradient-from: var(--gold-400); }
        .to-gold-500 { --tw-gradient-to: var(--gold-500); }
        .to-gold-600 { --tw-gradient-to: var(--gold-600); }
        
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
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
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