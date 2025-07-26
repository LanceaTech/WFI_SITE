"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, CheckCircle, Star, ArrowRight, Building, Users, TrendingUp, Shield, FileText, DollarSign, UserCheck, Award, Globe, Clock, Briefcase, GraduationCap, Home, Heart, Plane, Calculator } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

type LanguageKey = 'en' | 'zh';

interface Service {
  name: string;
  description: string;
  features: string[];
  timeline: string;
  price: string;
}

interface BusinessService {
  name: string;
  description: string;
  benefits: string[];
  risks: string[];
}

interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
  services: Service[];
}

interface BusinessServiceCategory {
  title: string;
  description: string;
  icon: string;
  services: BusinessService[];
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  category: 'ep' | 'business';
}

interface ContentStructure {
  nav: {
    home: string;
    about: string;
    epServices: string;
    businessServices: string;
    contact: string;
  };
  hero: {
    title: string;
    tagline: string;
    description: string;
    epCta: string;
    businessCta: string;
  };
  epHero: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    cta: string;
  };
  epServices: {
    title: string;
    subtitle: string;
    categories: {
      epApplication: ServiceCategory;
      familyServices: ServiceCategory;
      relocation: ServiceCategory;
    };
  };
  about: {
    title: string;
    description: string;
    founderTitle: string;
    founderName: string;
    founderDescription: string;
    whyChooseUs: string;
    stats: {
      experience: string;
      clients: string;
      satisfaction: string;
      epSuccess: string;
    };
  };
  businessServices: {
    title: string;
    subtitle: string;
    categories: {
      financial: BusinessServiceCategory;
      corporate: BusinessServiceCategory;
      accounting: BusinessServiceCategory;
      audit: BusinessServiceCategory;
      financing: BusinessServiceCategory;
      hr: BusinessServiceCategory;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      service: string;
      servicePlaceholder: string;
      serviceOptions: Array<{
        value: string;
        label: string;
      }>;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    info: {
      phone: string;
      email: string;
      address: string;
    };
  };
  footer: {
    companyName: string;
    description: string;
    quickLinks: {
      title: string;
      links: string[];
    };
    epServices: {
      title: string;
      items: string[];
    };
    businessServices: {
      title: string;
      items: string[];
    };
    contact: {
      title: string;
      phone: string;
      email: string;
      address: string;
    };
    copyright: string;
  };
}

export default function WealthFoundationLanding() {
  // State Management
  const [language, setLanguage] = useState<LanguageKey>('en');
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeEpService, setActiveEpService] = useState<string | null>(null);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [testimonialFilter, setTestimonialFilter] = useState<'all' | 'ep' | 'business'>('all');
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [state, handleSubmit] = useForm("myzpgkkr");

  // Complete English Content
  const englishContent: ContentStructure = {
    nav: {
      home: "Home",
      about: "About Us",
      epServices: "EP Services",
      businessServices: "Business Services",
      contact: "Contact"
    },
    hero: {
      title: "Wealth Foundation Institute",
      tagline: "Your Gateway to Singapore Employment Pass & Complete Business Solutions",
      description: "Specializing in Employment Pass applications with 95% success rate. From EP applications to family relocations and comprehensive business services - we're your trusted partner for establishing your life and business in Singapore.",
      epCta: "Apply for Employment Pass",
      businessCta: "Business Services"
    },
    epHero: {
      title: "Singapore Employment Pass Services",
      subtitle: "Your Professional Journey to Singapore Starts Here",
      description: "With over 500 successful EP applications and deep expertise in Singapore immigration requirements, we provide comprehensive EP services from initial assessment to family relocation support.",
      features: [
        "95% EP Application Success Rate",
        "Complete Family Relocation Support",
        "Dependent Pass & Student Pass Assistance",
        "Post-Arrival Settlement Services",
        "Ongoing Immigration Advisory"
      ],
      cta: "Start Your EP Application"
    },
    epServices: {
      title: "Comprehensive Employment Pass Services",
      subtitle: "From application to settlement - we handle every step of your Singapore journey",
      categories: {
        epApplication: {
          title: "Employment Pass Application",
          description: "Complete EP application services with personalized strategy and documentation support",
          icon: "Briefcase",
          services: [
            {
              name: "EP Eligibility Assessment",
              description: "Comprehensive evaluation of your qualifications and job prospects in Singapore",
              features: ["Free initial consultation", "Detailed eligibility report", "Industry-specific guidance", "Salary benchmarking"],
              timeline: "1-2 days",
              price: "Free Consultation"
            },
            {
              name: "Complete EP Application Package",
              description: "End-to-end EP application service with document preparation and submission",
              features: ["Document compilation & review", "Application form preparation", "Supporting letter drafting", "MOM submission & tracking", "Appeal support if needed"],
              timeline: "4-8 weeks",
              price: "From S$1,500"
            },
            {
              name: "EP Renewal & Amendment",
              description: "Hassle-free EP renewal and amendment services for existing pass holders",
              features: ["Renewal application processing", "Salary amendment support", "Job change notifications", "Compliance advisory"],
              timeline: "2-4 weeks",
              price: "From S$800"
            },
            {
              name: "EP Appeal & Rejection Support",
              description: "Expert assistance for rejected applications with strategic resubmission",
              features: ["Rejection analysis", "Enhanced documentation", "Strategic resubmission", "Legal advisory support"],
              timeline: "3-6 weeks",
              price: "From S$2,000"
            }
          ]
        },
        familyServices: {
          title: "Family Immigration Services",
          description: "Complete family relocation support including dependent passes and student visas",
          icon: "Heart",
          services: [
            {
              name: "Dependent Pass Application",
              description: "DP applications for spouses and children of EP holders",
              features: ["Spouse DP application", "Children DP application", "Document preparation", "Medical examination coordination"],
              timeline: "3-5 weeks",
              price: "From S$800 per application"
            },
            {
              name: "Student Pass Services",
              description: "Student pass applications for international schools and local institutions",
              features: ["School placement advisory", "Student pass application", "Guardian arrangements", "School enrollment support"],
              timeline: "4-8 weeks",
              price: "From S$1,200"
            },
            {
              name: "Long Term Visit Pass",
              description: "LTVP applications for elderly parents and extended family members",
              features: ["LTVP application processing", "Financial sponsorship documentation", "Medical insurance arrangements", "Ongoing renewal support"],
              timeline: "6-10 weeks",
              price: "From S$1,500"
            }
          ]
        },
        relocation: {
          title: "Relocation & Settlement Services",
          description: "Comprehensive post-arrival support to help you settle into Singapore life",
          icon: "Home",
          services: [
            {
              name: "Housing Assistance",
              description: "Property search and rental assistance for expatriate families",
              features: ["Property viewings", "Lease negotiation", "Utility setup", "Neighborhood guidance"],
              timeline: "1-4 weeks",
              price: "From S$500"
            },
            {
              name: "Banking & Financial Setup",
              description: "Complete banking and financial services setup for new residents",
              features: ["Bank account opening", "Credit card applications", "Insurance setup", "Investment advisory"],
              timeline: "1-2 weeks",
              price: "From S$300"
            },
            {
              name: "School Placement Services",
              description: "International and local school placement for expatriate children",
              features: ["School assessment & recommendations", "Application assistance", "Interview preparation", "Enrollment support"],
              timeline: "2-12 weeks",
              price: "From S$800"
            },
            {
              name: "Lifestyle Integration Package",
              description: "Complete lifestyle setup including healthcare, transportation, and social integration",
              features: ["Healthcare provider registration", "Transportation setup", "Social club introductions", "Cultural orientation"],
              timeline: "2-4 weeks",
              price: "From S$600"
            }
          ]
        }
      }
    }, about: {
      title: "About Wealth Foundation Institute",
      description: "With over 20 years of APAC regional experience and 500+ successful Employment Pass applications, Wealth Foundation Institute is Singapore's premier immigration and business services provider. We specialize in helping international professionals and families navigate Singapore's immigration landscape while providing comprehensive business solutions for corporate clients.",
      founderTitle: "Meet Our Founder",
      founderName: "Carol Khoo",
      founderDescription: "Carol brings over 20 years of APAC regional experience with specialized expertise in Singapore immigration law and business regulations. As a certified immigration consultant with 500+ successful EP applications, she has helped countless professionals and families establish their lives in Singapore. Her background includes strategic partnerships with major corporations, government agencies, and educational institutions, ensuring clients receive insider knowledge and personalized service throughout their Singapore journey.",
      whyChooseUs: "Why Choose Us for Your Singapore Journey",
      stats: {
        experience: "Years Experience",
        clients: "Satisfied Clients",
        satisfaction: "Success Rate",
        epSuccess: "EP Success Rate"
      }
    },
    businessServices: {
      title: "Comprehensive Business Services",
      subtitle: "Complete business solutions to establish and grow your Singapore operations",
      categories: {
        financial: {
          title: "Strategic Financial Consulting",
          description: "Comprehensive financial strategy and optimization services for Singapore businesses",
          icon: "TrendingUp",
          services: [
            {
              name: "Capital Structure Optimization",
              description: "Analyze and restructure capital allocation to maximize returns in Singapore market",
              benefits: ["Improved ROI", "Enhanced cash flow", "Reduced financial risk", "Better funding access"],
              risks: ["Poor capital allocation can lead to financial instability", "Missed growth opportunities", "Higher borrowing costs"]
            },
            {
              name: "Cost Reduction Programs",
              description: "Identify and implement Singapore-specific cost-saving initiatives",
              benefits: ["Increased profitability", "Competitive advantage", "Resource optimization", "Sustainable growth"],
              risks: ["Uncontrolled costs can erode profit margins", "Operational inefficiencies", "Cash flow problems"]
            },
            {
              name: "Strategic Financial Planning",
              description: "Align financial strategies with Singapore business regulations and opportunities",
              benefits: ["Clear financial roadmap", "Risk mitigation", "Investor confidence", "Long-term sustainability"],
              risks: ["Lack of planning can result in financial crises", "Missed market opportunities", "Poor decision making"]
            }
          ]
        },
        corporate: {
          title: "Corporate Setup & Compliance",
          description: "Complete corporate administration and regulatory compliance for Singapore businesses",
          icon: "Building",
          services: [
            {
              name: "Singapore Company Registration",
              description: "Complete setup of Singapore companies with ACRA registration and compliance",
              benefits: ["Fast market entry", "Legal compliance", "Professional setup", "Ongoing support"],
              risks: ["Improper setup can lead to legal issues", "Regulatory penalties", "Business disruption"]
            },
            {
              name: "Corporate Secretarial Services",
              description: "Ongoing compliance and administrative support for Singapore corporate governance",
              benefits: ["Regulatory compliance", "Risk mitigation", "Time savings", "Professional management"],
              risks: ["Non-compliance can result in fines", "Loss of business license", "Legal liabilities"]
            },
            {
              name: "Tax & GST Optimization",
              description: "Singapore tax planning and GST compliance for local and international entities",
              benefits: ["Tax optimization", "Compliance assurance", "Penalty avoidance", "Expert guidance"],
              risks: ["Tax non-compliance can lead to heavy penalties", "Legal consequences", "Business closure"]
            }
          ]
        },
        accounting: {
          title: "Accounting & Financial Reporting",
          description: "Professional accounting services compliant with Singapore accounting standards",
          icon: "FileText",
          services: [
            {
              name: "Singapore Bookkeeping Services",
              description: "Comprehensive recording and management of financial transactions per Singapore standards",
              benefits: ["Accurate records", "Financial clarity", "Compliance ready", "Decision support"],
              risks: ["Poor bookkeeping can lead to financial mismanagement", "Tax issues", "Audit problems"]
            },
            {
              name: "Financial Statement Preparation",
              description: "Professional preparation per Singapore Financial Reporting Standards (SFRS)",
              benefits: ["Stakeholder confidence", "Loan approval", "Investment attraction", "Performance tracking"],
              risks: ["Inaccurate statements can mislead stakeholders", "Legal issues", "Lost opportunities"]
            }
          ]
        },
        audit: {
          title: "Audit & Assurance Services",
          description: "Professional audit services compliant with Singapore auditing standards",
          icon: "Shield",
          services: [
            {
              name: "Singapore Statutory Audit",
              description: "Mandatory statutory audits for Singapore companies as per Companies Act",
              benefits: ["Legal compliance", "Investor confidence", "Risk management", "Operational insights"],
              risks: ["Non-compliance can result in severe penalties", "Legal consequences", "Business disruption"]
            }
          ]
        },
        financing: {
          title: "Financing & Capital Solutions",
          description: "Expert assistance in securing funding from Singapore financial institutions",
          icon: "DollarSign",
          services: [
            {
              name: "Singapore Bank Loan Applications",
              description: "Expert assistance with local bank financing applications and requirements",
              benefits: ["Higher approval rates", "Better terms", "Faster processing", "Local expertise"],
              risks: ["Poor application preparation can lead to rejection", "Unfavorable terms", "Delayed funding"]
            }
          ]
        },
        hr: {
          title: "Human Resources & Training",
          description: "Comprehensive HR solutions including work pass applications and talent acquisition",
          icon: "Users",
          services: [
            {
              name: "Work Pass Applications",
              description: "Complete work pass application services for foreign talent recruitment",
              benefits: ["Successful talent acquisition", "Compliance assurance", "Faster processing", "Expert guidance"],
              risks: ["Poor applications can lead to rejections", "Compliance failures", "Talent shortage"]
            }
          ]
        }
      }
    },
    testimonials: {
      title: "Success Stories from Our Clients",
      subtitle: "Trusted by professionals and businesses across Singapore and APAC region",
      items: [
        {
          name: "Michael Zhang",
          role: "Senior Software Engineer, Meta",
          content: "Carol helped me secure my EP within 3 weeks when my previous application was rejected. Her expertise in tech industry requirements and personalized approach made all the difference. Now my whole family is happily settled in Singapore!",
          rating: 5,
          category: "ep" as const
        },
        {
          name: "Sarah Williams",
          role: "Regional Director, McKinsey & Company",
          content: "From EP application to family relocation and school placement for my children - Carol's team handled everything seamlessly. Their comprehensive approach saved us months of stress and uncertainty.",
          rating: 5,
          category: "ep" as const
        },
        {
          name: "David Chen",
          role: "CEO, Tech Startup",
          content: "Carol helped us set up our Singapore entity and secure work passes for our international team. Her dual expertise in immigration and business setup made the entire process incredibly smooth.",
          rating: 5,
          category: "business" as const
        },
        {
          name: "Priya Sharma",
          role: "Investment Manager, Goldman Sachs",
          content: "After 2 failed EP attempts with other agents, Carol's strategic approach and industry connections got my application approved in just 4 weeks. Her post-arrival support helped us integrate quickly into Singapore life.",
          rating: 5,
          category: "ep" as const
        },
        {
          name: "Robert Kim",
          role: "Managing Director, Investment Firm",
          content: "Professional, reliable, and results-driven. Their audit and compliance services gave us the confidence to expand our operations across APAC markets from our Singapore base.",
          rating: 5,
          category: "business" as const
        }
      ]
    }, contact: {
      title: "Ready to Start Your Singapore Journey?",
      subtitle: "Contact us for a personalized consultation on EP applications or business services",
      form: {
        name: "Full Name",
        namePlaceholder: "Your Name",
        email: "Email Address",
        emailPlaceholder: "your.email@company.com",
        phone: "Phone Number",
        phonePlaceholder: "+65 XXXX XXXX",
        service: "Service Interest",
        servicePlaceholder: "Select a service",
        serviceOptions: [
          { value: "ep-application", label: "Employment Pass Application" },
          { value: "ep-renewal", label: "EP Renewal & Amendment" },
          { value: "family-immigration", label: "Family Immigration Services" },
          { value: "dependent-pass", label: "Dependent Pass Application" },
          { value: "student-pass", label: "Student Pass Services" },
          { value: "relocation-services", label: "Relocation & Settlement" },
          { value: "company-registration", label: "Singapore Company Registration" },
          { value: "corporate-services", label: "Corporate Support & Compliance" },
          { value: "accounting-services", label: "Accounting & Financial Reporting" },
          { value: "business-consultation", label: "Business Consultation" },
          { value: "other", label: "Other Services" }
        ],
        message: "Message",
        messagePlaceholder: "Tell us about your Singapore plans and how we can help with your EP application or business needs...",
        submit: "Send Message"
      },
      info: {
        phone: "+65 97486325",
        email: "carol2kmg@yahoo.com.sg",
        address: "Singapore"
      }
    },
    footer: {
      companyName: "Wealth Foundation Institute Pte Ltd",
      description: "Your trusted partner for Singapore Employment Pass applications and comprehensive business solutions. We provide professional immigration services and business setup with proven success rates.",
      quickLinks: {
        title: "Quick Links",
        links: ["Home", "About Us", "EP Services", "Business Services", "Contact"]
      },
      epServices: {
        title: "EP & Immigration Services",
        items: [
          "Employment Pass Application",
          "Family Immigration Services",
          "Dependent Pass Applications",
          "Student Pass Services",
          "Relocation Support",
          "Immigration Advisory"
        ]
      },
      businessServices: {
        title: "Business Services",
        items: [
          "Singapore Company Registration",
          "Corporate Compliance",
          "Accounting & Tax Services",
          "Work Pass Applications",
          "Business Consultation",
          "Financial Advisory"
        ]
      },
      contact: {
        title: "Contact Information",
        phone: "+65 97486325",
        email: "carol2kmg@yahoo.com.sg",
        address: "Singapore"
      },
      copyright: "© 2024 Wealth Foundation Institute Pte Ltd. All rights reserved. UEN: 201602899G"
    }
  };

  // Complete Chinese Content
  const chineseContent: ContentStructure = {
    nav: {
      home: "首页",
      about: "关于我们",
      epServices: "就业准证服务",
      businessServices: "商业服务",
      contact: "联系我们"
    },
    hero: {
      title: "财富基金学院",
      tagline: "您的新加坡就业准证申请与完整商业解决方案门户",
      description: "专业就业准证申请服务，成功率高达95%。从EP申请到家庭移居和全面商业服务 - 我们是您在新加坡建立生活和事业的值得信赖的合作伙伴。",
      epCta: "申请就业准证",
      businessCta: "商业服务"
    },
    epHero: {
      title: "新加坡就业准证服务",
      subtitle: "您的新加坡职业之旅从这里开始",
      description: "凭借500多个成功的EP申请案例和对新加坡移民要求的深度专业知识，我们提供从初始评估到家庭移居支持的全面EP服务。",
      features: [
        "95% EP申请成功率",
        "完整家庭移居支持",
        "家属准证和学生准证协助",
        "抵达后安家服务",
        "持续移民咨询"
      ],
      cta: "开始您的EP申请"
    },
    epServices: {
      title: "全面就业准证服务",
      subtitle: "从申请到安家 - 我们处理您新加坡之旅的每一步",
      categories: {
        epApplication: {
          title: "就业准证申请",
          description: "完整的EP申请服务，提供个性化策略和文件支持",
          icon: "Briefcase",
          services: [
            {
              name: "EP资格评估",
              description: "全面评估您在新加坡的资格和就业前景",
              features: ["免费初步咨询", "详细资格报告", "行业特定指导", "薪资基准"],
              timeline: "1-2天",
              price: "免费咨询"
            },
            {
              name: "完整EP申请套餐",
              description: "端到端EP申请服务，包括文件准备和提交",
              features: ["文件汇编和审查", "申请表准备", "支持信函起草", "人力部提交和跟踪", "如需要可提供上诉支持"],
              timeline: "4-8周",
              price: "从 S$1,500 起"
            },
            {
              name: "EP续签和修改",
              description: "为现有准证持有者提供无忧EP续签和修改服务",
              features: ["续签申请处理", "薪资修改支持", "工作变更通知", "合规咨询"],
              timeline: "2-4周",
              price: "从 S$800 起"
            },
            {
              name: "EP上诉和拒签支持",
              description: "为被拒申请提供专业协助，制定战略性重新提交方案",
              features: ["拒签分析", "增强文档", "战略性重新提交", "法律咨询支持"],
              timeline: "3-6周",
              price: "从 S$2,000 起"
            }
          ]
        },
        familyServices: {
          title: "家庭移民服务",
          description: "完整的家庭移居支持，包括家属准证和学生签证",
          icon: "Heart",
          services: [
            {
              name: "家属准证申请",
              description: "为EP持有者的配偶和子女申请DP",
              features: ["配偶DP申请", "子女DP申请", "文件准备", "体检协调"],
              timeline: "3-5周",
              price: "从 S$800 每份申请起"
            },
            {
              name: "学生准证服务",
              description: "为国际学校和本地院校申请学生准证",
              features: ["学校安置咨询", "学生准证申请", "监护人安排", "学校入学支持"],
              timeline: "4-8周",
              price: "从 S$1,200 起"
            },
            {
              name: "长期探访准证",
              description: "为年长父母和大家庭成员申请LTVP",
              features: ["LTVP申请处理", "财务担保文件", "医疗保险安排", "持续续签支持"],
              timeline: "6-10周",
              price: "从 S$1,500 起"
            }
          ]
        },
        relocation: {
          title: "移居和安家服务",
          description: "全面的抵达后支持，帮助您融入新加坡生活",
          icon: "Home",
          services: [
            {
              name: "住房协助",
              description: "为外籍家庭提供房产搜索和租赁协助",
              features: ["房产看房", "租约谈判", "公用事业设置", "社区指导"],
              timeline: "1-4周",
              price: "从 S$500 起"
            },
            {
              name: "银行和金融设置",
              description: "为新居民提供完整的银行和金融服务设置",
              features: ["银行开户", "信用卡申请", "保险设置", "投资咨询"],
              timeline: "1-2周",
              price: "从 S$300 起"
            },
            {
              name: "学校安置服务",
              description: "为外籍子女提供国际和本地学校安置",
              features: ["学校评估和推荐", "申请协助", "面试准备", "入学支持"],
              timeline: "2-12周",
              price: "从 S$800 起"
            },
            {
              name: "生活融合套餐",
              description: "包括医疗、交通和社交融合的完整生活设置",
              features: ["医疗提供者注册", "交通设置", "社交俱乐部介绍", "文化导向"],
              timeline: "2-4周",
              price: "从 S$600 起"
            }
          ]
        }
      }
    }, about: {
      title: "关于财富基金学院",
      description: "凭借20多年的亚太地区经验和500多个成功的就业准证申请案例，财富基金学院是新加坡首屈一指的移民和商业服务提供商。我们专门帮助国际专业人士和家庭应对新加坡的移民环境，同时为企业客户提供全面的商业解决方案。",
      founderTitle: "认识我们的创始人",
      founderName: "Carol Khoo",
      founderDescription: "Carol拥有20多年的亚太地区经验，在新加坡移民法和商业法规方面具有专业知识。作为拥有500多个成功EP申请案例的认证移民顾问，她帮助无数专业人士和家庭在新加坡建立了生活。她的背景包括与主要企业、政府机构和教育机构的战略合作关系，确保客户在整个新加坡之旅中获得内部知识和个性化服务。",
      whyChooseUs: "为什么选择我们开启您的新加坡之旅",
      stats: {
        experience: "年经验",
        clients: "满意客户",
        satisfaction: "成功率",
        epSuccess: "EP成功率"
      }
    },
    businessServices: {
      title: "全面商业服务",
      subtitle: "完整的商业解决方案，帮助建立和发展您的新加坡业务",
      categories: {
        financial: {
          title: "战略财务咨询",
          description: "为新加坡企业提供全面的财务战略和优化服务",
          icon: "TrendingUp",
          services: [
            {
              name: "资本结构优化",
              description: "分析和重构资本配置以在新加坡市场最大化回报",
              benefits: ["改善投资回报率", "增强现金流", "降低财务风险", "更好的融资渠道"],
              risks: ["资本配置不当可能导致财务不稳定", "错失增长机会", "更高的借贷成本"]
            },
            {
              name: "成本削减计划",
              description: "识别和实施新加坡特定的成本节约措施",
              benefits: ["提高盈利能力", "竞争优势", "资源优化", "可持续增长"],
              risks: ["成本失控可能侵蚀利润率", "运营效率低下", "现金流问题"]
            },
            {
              name: "战略财务规划",
              description: "将财务战略与新加坡商业法规和机会保持一致",
              benefits: ["清晰的财务路线图", "风险缓解", "投资者信心", "长期可持续性"],
              risks: ["缺乏规划可能导致财务危机", "错失市场机会", "决策不当"]
            }
          ]
        },
        corporate: {
          title: "企业设立与合规",
          description: "为新加坡企业提供完整的企业管理和监管合规服务",
          icon: "Building",
          services: [
            {
              name: "新加坡公司注册",
              description: "完整的新加坡公司设立，包括ACRA注册和合规",
              benefits: ["快速市场进入", "法律合规", "专业设立", "持续支持"],
              risks: ["设立不当可能导致法律问题", "监管处罚", "业务中断"]
            },
            {
              name: "公司秘书服务",
              description: "为新加坡企业治理提供持续合规和行政支持",
              benefits: ["监管合规", "风险缓解", "节省时间", "专业管理"],
              risks: ["不合规可能导致罚款", "失去营业执照", "法律责任"]
            },
            {
              name: "税务与消费税优化",
              description: "为本地和国际实体提供新加坡税务规划和消费税合规",
              benefits: ["税务优化", "合规保证", "避免处罚", "专家指导"],
              risks: ["税务不合规可能导致重罚", "法律后果", "企业关闭"]
            }
          ]
        },
        accounting: {
          title: "会计与财务报告",
          description: "符合新加坡会计准则的专业会计服务",
          icon: "FileText",
          services: [
            {
              name: "新加坡记账服务",
              description: "按新加坡标准全面记录和管理财务交易",
              benefits: ["准确记录", "财务清晰", "合规准备", "决策支持"],
              risks: ["记账不当可能导致财务管理不善", "税务问题", "审计问题"]
            },
            {
              name: "财务报表编制",
              description: "按新加坡财务报告准则(SFRS)专业编制",
              benefits: ["利益相关者信心", "贷款批准", "吸引投资", "绩效跟踪"],
              risks: ["不准确的报表可能误导利益相关者", "法律问题", "失去机会"]
            }
          ]
        },
        audit: {
          title: "审计与保证服务",
          description: "符合新加坡审计标准的专业审计服务",
          icon: "Shield",
          services: [
            {
              name: "新加坡法定审计",
              description: "按公司法为新加坡公司进行强制性法定审计",
              benefits: ["法律合规", "投资者信心", "风险管理", "运营洞察"],
              risks: ["不合规可能导致严重处罚", "法律后果", "业务中断"]
            }
          ]
        },
        financing: {
          title: "融资与资本解决方案",
          description: "在从新加坡金融机构获得资金方面提供专家协助",
          icon: "DollarSign",
          services: [
            {
              name: "新加坡银行贷款申请",
              description: "在本地银行融资申请和要求方面提供专家协助",
              benefits: ["更高的批准率", "更好的条件", "更快的处理", "本地专业知识"],
              risks: ["申请准备不当可能导致拒绝", "不利条件", "资金延迟"]
            }
          ]
        },
        hr: {
          title: "人力资源与培训",
          description: "包括工作准证申请和人才招聘的全面人力资源解决方案",
          icon: "Users",
          services: [
            {
              name: "工作准证申请",
              description: "为外国人才招聘提供完整的工作准证申请服务",
              benefits: ["成功人才招聘", "合规保证", "更快处理", "专家指导"],
              risks: ["申请不当可能导致拒绝", "合规失败", "人才短缺"]
            }
          ]
        }
      }
    },
    testimonials: {
      title: "客户成功案例",
      subtitle: "受到新加坡和亚太地区专业人士和企业的信赖",
      items: [
        {
          name: "张迈克",
          role: "高级软件工程师，Meta",
          content: "当我之前的申请被拒绝时，Carol在3周内帮我获得了EP。她在科技行业要求方面的专业知识和个性化方法发挥了重要作用。现在我的全家都在新加坡幸福地安家了！",
          rating: 5,
          category: "ep" as const
        },
        {
          name: "莎拉·威廉姆斯",
          role: "区域总监，麦肯锡公司",
          content: "从EP申请到家庭移居和为孩子安排学校 - Carol的团队无缝处理了一切。他们的全面方法为我们节省了数月的压力和不确定性。",
          rating: 5,
          category: "ep" as const
        },
        {
          name: "陈大卫",
          role: "首席执行官，科技初创公司",
          content: "Carol帮助我们设立了新加坡实体并为我们的国际团队获得了工作准证。她在移民和商业设立方面的双重专业知识使整个过程非常顺利。",
          rating: 5,
          category: "business" as const
        },
        {
          name: "普里亚·夏尔马",
          role: "投资经理，高盛",
          content: "在与其他代理机构的2次EP申请失败后，Carol的战略方法和行业关系使我的申请在4周内获得批准。她的抵达后支持帮助我们快速融入新加坡生活。",
          rating: 5,
          category: "ep" as const
        },
        {
          name: "罗伯特·金",
          role: "董事总经理，投资公司",
          content: "专业、可靠、以结果为导向。他们的审计和合规服务让我们有信心从新加坡基地在亚太市场扩展业务。",
          rating: 5,
          category: "business" as const
        }
      ]
    },
    contact: {
      title: "准备开始您的新加坡之旅了吗？",
      subtitle: "联系我们获取EP申请或商业服务的个性化咨询",
      form: {
        name: "全名",
        namePlaceholder: "您的姓名",
        email: "电子邮箱",
        emailPlaceholder: "your.email@company.com",
        phone: "电话号码",
        phonePlaceholder: "+65 XXXX XXXX",
        service: "服务兴趣",
        servicePlaceholder: "选择服务",
        serviceOptions: [
          { value: "ep-application", label: "就业准证申请" },
          { value: "ep-renewal", label: "EP续签和修改" },
          { value: "family-immigration", label: "家庭移民服务" },
          { value: "dependent-pass", label: "家属准证申请" },
          { value: "student-pass", label: "学生准证服务" },
          { value: "relocation-services", label: "移居和安家" },
          { value: "company-registration", label: "新加坡公司注册" },
          { value: "corporate-services", label: "企业支持与合规" },
          { value: "accounting-services", label: "会计与财务报告" },
          { value: "business-consultation", label: "商业咨询" },
          { value: "other", label: "其他服务" }
        ],
        message: "消息",
        messagePlaceholder: "告诉我们您的新加坡计划以及我们如何帮助您的EP申请或商业需求...",
        submit: "发送消息"
      },
      info: {
        phone: "+65 97486325",
        email: "carol2kmg@yahoo.com.sg",
        address: "新加坡"
      }
    },
    footer: {
      companyName: "财富基金学院私人有限公司",
      description: "您在新加坡就业准证申请和全面商业解决方案的可信赖合作伙伴。我们提供专业移民服务和商业设立，成功率经过验证。",
      quickLinks: {
        title: "快速链接",
        links: ["首页", "关于我们", "EP服务", "商业服务", "联系"]
      },
      epServices: {
        title: "EP和移民服务",
        items: [
          "就业准证申请",
          "家庭移民服务",
          "家属准证申请",
          "学生准证服务",
          "移居支持",
          "移民咨询"
        ]
      },
      businessServices: {
        title: "商业服务",
        items: [
          "新加坡公司注册",
          "企业合规",
          "会计和税务服务",
          "工作准证申请",
          "商业咨询",
          "财务咨询"
        ]
      },
      contact: {
        title: "联系信息",
        phone: "+65 97486325",
        email: "carol2kmg@yahoo.com.sg",
        address: "新加坡"
      },
      copyright: "© 2024 财富基金学院私人有限公司。保留所有权利。UEN: 201602899G"
    }
  };

  // Combine all content into comprehensive structure
  const content: Record<LanguageKey, ContentStructure> = {
    en: englishContent,
    zh: chineseContent
  };

  // Icon mapping for dynamic icon rendering
  const iconMap = {
    TrendingUp,
    Building,
    FileText,
    Shield,
    DollarSign,
    Users,
    Briefcase,
    Heart,
    Home,
    GraduationCap,
    Plane,
    Calculator
  };

  // Helper function to get icon component safely
  const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || TrendingUp;
  };

  // Filter testimonials based on current filter selection
  const filteredTestimonials = content[language].testimonials.items.filter(item =>
    testimonialFilter === 'all' || item.category === testimonialFilter
  );

  // Auto-rotate testimonials effect
  useEffect(() => {
    if (filteredTestimonials.length <= 1) return;

    const testimonialInterval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);

    return () => clearInterval(testimonialInterval);
  }, [filteredTestimonials.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    const timeoutId = setTimeout(() => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Form submission handler
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Reset testimonial slide when filter changes
  useEffect(() => {
    setTestimonialSlide(0);
  }, [testimonialFilter]);

  // Reset active services when language changes
  useEffect(() => {
    setActiveService(null);
    setActiveEpService(null);
  }, [language]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WF</span>
              </div>
              <span className="font-bold text-xl text-gray-800">Wealth Foundation Institute</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {content[language].nav.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {content[language].nav.about}
              </button>
              <button
                onClick={() => scrollToSection('ep-services')}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                {content[language].nav.epServices}
              </button>
              <button
                onClick={() => scrollToSection('business-services')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {content[language].nav.businessServices}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {content[language].nav.contact}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  {content[language].hero.title}
                </h1>
                <p className="text-xl lg:text-2xl text-blue-600 font-semibold">
                  {content[language].hero.tagline}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {content[language].hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('ep-services')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-5 h-5" />
                  {content[language].hero.epCta}
                </button>
                <button
                  onClick={() => scrollToSection('business-services')}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Building className="w-5 h-5" />
                  {content[language].hero.businessCta}
                </button>
              </div>

              <div className="grid grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600 text-sm">{content[language].about.stats.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600 text-sm">{content[language].about.stats.clients}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600 text-sm">{content[language].about.stats.satisfaction}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-gray-600 text-sm">{content[language].about.stats.epSuccess}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <p className="text-blue-800 font-bold text-lg">EP & Business Services</p>
                  <p className="text-blue-600 text-sm">Your Gateway to Singapore Success</p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">95% EP Success Rate</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 transform -rotate-3">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">500+ Successful Cases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EP Hero Section */}
      <section
        id="ep-hero"
        ref={(el) => { sectionRefs.current['ep-hero'] = el; }}
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${visibleSections['ep-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {content[language].epHero.title}
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 mb-6">
                {content[language].epHero.subtitle}
              </p>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
                {content[language].epHero.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {content[language].epHero.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-blue-100 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => scrollToSection('ep-services')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                {content[language].epHero.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EP Services Section */}
      <section
        id="ep-services"
        ref={(el) => { sectionRefs.current['ep-services'] = el; }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${visibleSections['ep-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                {content[language].epServices.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {content[language].epServices.subtitle}
              </p>
            </div>

            {/* EP Service Categories Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {Object.entries(content[language].epServices.categories).map(([key, category]) => {
                const IconComponent = getIcon(category.icon);
                const isActive = activeEpService === key;

                return (
                  <div
                    key={key}
                    className={`bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 ${isActive ? 'ring-4 ring-blue-500 bg-blue-50' : ''
                      }`}
                    onClick={() => setActiveEpService(isActive ? null : key)}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${isActive ? 'bg-blue-600' : 'bg-blue-100'
                        }`}>
                        <IconComponent className={`w-8 h-8 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      <button className={`font-semibold transition-colors flex items-center justify-center mx-auto gap-2 ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                        }`}>
                        {isActive ? 'Hide Details' : 'Learn More'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed EP Service Information */}
            {activeEpService && (() => {
              const categories = content[language].epServices.categories;
              const selectedCategory = categories[activeEpService as keyof typeof categories];

              return (
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl p-8 lg:p-12 animate-fadeIn">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        {selectedCategory.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {selectedCategory.description}
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      {selectedCategory.services.map((service, index) => (
                        <div key={index} className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold text-gray-800">{service.name}</h4>
                            <div className="text-right">
                              <div className="text-sm text-gray-500">Timeline</div>
                              <div className="font-semibold text-blue-600">{service.timeline}</div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6">{service.description}</p>

                          <div className="space-y-4 mb-6">
                            <div>
                              <h5 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                What's Included
                              </h5>
                              <ul className="grid grid-cols-1 gap-2">
                                {service.features.map((feature, i) => (
                                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                            <div>
                              <div className="text-sm text-gray-500">Starting from</div>
                              <div className="text-xl font-bold text-blue-600">{service.price}</div>
                            </div>
                            <button
                              onClick={() => scrollToSection('contact')}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                            >
                              Get Started
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mt-12">
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg"
                      >
                        Start Your EP Application Today
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => { sectionRefs.current.about = el; }}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                {content[language].about.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {content[language].about.description}
              </p>
            </div>

            {/* Founder Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                {content[language].about.founderTitle}
              </h3>

              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="order-2 lg:order-1">
                  <h4 className="text-2xl font-bold text-blue-600 mb-4">
                    {content[language].about.founderName}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    {content[language].about.founderDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-700">APAC Expert</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-700">500+ EP Cases</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-700">Certified Consultant</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <UserCheck className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-700">Strategic Advisor</span>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl shadow-2xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                          <UserCheck className="w-16 h-16 text-blue-600" />
                        </div>
                        <div className="text-white">
                          <p className="font-bold text-xl">Carol Khoo</p>
                          <p className="text-blue-100">Founder & CEO</p>
                          <p className="text-sm text-blue-100 mt-2">Immigration Expert</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                {content[language].about.whyChooseUs}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">EP Specialization</h4>
                  <p className="text-gray-600 text-sm">500+ successful EP applications with 95% success rate</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Family Support</h4>
                  <p className="text-gray-600 text-sm">Complete family relocation and settlement services</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Personalized Service</h4>
                  <p className="text-gray-600 text-sm">Tailored solutions for your unique Singapore journey</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Proven Results</h4>
                  <p className="text-gray-600 text-sm">20+ years experience with guaranteed compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Business Services Section */}
      <section
        id="business-services"
        ref={(el) => { sectionRefs.current['business-services'] = el; }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${visibleSections['business-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                {content[language].businessServices.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {content[language].businessServices.subtitle}
              </p>
            </div>

            {/* Business Service Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {Object.entries(content[language].businessServices.categories).map(([key, category]) => {
                const IconComponent = getIcon(category.icon);
                const isActive = activeService === key;

                return (
                  <div
                    key={key}
                    className={`bg-gray-50 rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 ${isActive ? 'ring-4 ring-blue-500 bg-blue-50' : ''
                      }`}
                    onClick={() => setActiveService(isActive ? null : key)}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${isActive ? 'bg-blue-600' : 'bg-blue-100'
                        }`}>
                        <IconComponent className={`w-8 h-8 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      <button className={`font-semibold transition-colors flex items-center justify-center mx-auto gap-2 ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                        }`}>
                        {isActive ? 'Hide Details' : 'Learn More'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Add the detailed business service information here */}
            {activeService && (() => {
              const categories = content[language].businessServices.categories;
              const selectedCategory = categories[activeService as keyof typeof categories];
              return (
                <div className="bg-gray-50 rounded-2xl shadow-2xl p-8 lg:p-12 animate-fadeIn">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        {selectedCategory.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {selectedCategory.description}
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                      {selectedCategory.services.map((service, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <h4 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h4>
                          <p className="text-gray-600 mb-6">{service.description}</p>

                          <div className="space-y-6">
                            <div>
                              <h5 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Benefits
                              </h5>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, i) => (
                                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                Risks of Not Having This Service
                              </h5>
                              <ul className="space-y-2">
                                {service.risks.map((risk, i) => (
                                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    {risk}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mt-12">
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg"
                      >
                        Get Started with This Service
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={(el) => { sectionRefs.current.testimonials = el; }}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {content[language].testimonials.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {content[language].testimonials.subtitle}
              </p>

              {/* Filter Buttons */}
              <div className="flex justify-center space-x-4 mb-8">
                <button
                  onClick={() => setTestimonialFilter('all')}
                  className={`px-6 py-2 rounded-full transition-all ${testimonialFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-100'
                    }`}
                >
                  All Stories
                </button>
                <button
                  onClick={() => setTestimonialFilter('ep')}
                  className={`px-6 py-2 rounded-full transition-all ${testimonialFilter === 'ep'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-100'
                    }`}
                >
                  EP Success Stories
                </button>
                <button
                  onClick={() => setTestimonialFilter('business')}
                  className={`px-6 py-2 rounded-full transition-all ${testimonialFilter === 'business'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-100'
                    }`}
                >
                  Business Stories
                </button>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
                >
                  {filteredTestimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                        <div className="flex items-center justify-center">
                          <div className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center ${testimonial.category === 'ep' ? 'bg-blue-600' : 'bg-green-600'
                            }`}>
                            <span className="text-white font-bold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="text-left">
                            <p className="font-semibold text-gray-800">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                            <p className={`text-xs font-medium ${testimonial.category === 'ep' ? 'text-blue-600' : 'text-green-600'
                              }`}>
                              {testimonial.category === 'ep' ? 'EP Client' : 'Business Client'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {filteredTestimonials.length > 1 && (
                <>
                  <button
                    onClick={() => setTestimonialSlide((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setTestimonialSlide((prev) => (prev + 1) % filteredTestimonials.length)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="flex justify-center mt-8 space-x-2">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setTestimonialSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === testimonialSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => { sectionRefs.current.contact = el; }}
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {content[language].contact.title}
              </h2>
              <p className="text-lg text-blue-100">
                {content[language].contact.subtitle}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {state.succeeded && (
                    <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 mb-6">
                      <p className="text-green-100 text-center font-semibold">
                        Thank you! Your message has been sent successfully. We'll get back to you soon!
                      </p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {content[language].contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder={content[language].contact.form.namePlaceholder}
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-300 text-sm mt-1" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {content[language].contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder={content[language].contact.form.emailPlaceholder}
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-300 text-sm mt-1" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {content[language].contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder={content[language].contact.form.phonePlaceholder}
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-300 text-sm mt-1" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        {content[language].contact.form.service}
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em'
                        }}
                      >
                        <option value="" style={{ backgroundColor: '#1e40af', color: '#ffffff' }}>
                          {content[language].contact.form.servicePlaceholder}
                        </option>
                        {content[language].contact.form.serviceOptions.map((option, index) => (
                          <option key={index} value={option.value} style={{ backgroundColor: '#1e40af', color: '#ffffff' }}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-300 text-sm mt-1" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {content[language].contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder={content[language].contact.form.messagePlaceholder}
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-300 text-sm mt-1" />
                  </div>

                  <ValidationError errors={state.errors} className="text-red-300 text-sm text-center" />

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all transform shadow-lg ${state.submitting
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-white text-blue-600 hover:bg-gray-100 hover:scale-105'
                        }`}
                    >
                      {state.submitting ? 'Sending...' : content[language].contact.form.submit}
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <Phone className="w-6 h-6 mb-2 text-blue-200" />
                      <p className="text-sm text-blue-100">Call Carol</p>
                      <a href={`tel:${content[language].contact.info.phone}`} className="font-semibold hover:text-blue-200 transition-colors">
                        {content[language].contact.info.phone}
                      </a>
                    </div>
                    <div className="flex flex-col items-center">
                      <Mail className="w-6 h-6 mb-2 text-blue-200" />
                      <p className="text-sm text-blue-100">Email Us</p>
                      <a href={`mailto:${content[language].contact.info.email}`} className="font-semibold hover:text-blue-200 transition-colors">
                        {content[language].contact.info.email}
                      </a>
                    </div>
                    <div className="flex flex-col items-center">
                      <MapPin className="w-6 h-6 mb-2 text-blue-200" />
                      <p className="text-sm text-blue-100">Location</p>
                      <p className="font-semibold">{content[language].contact.info.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Section */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">WF</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{content[language].footer.companyName}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {content[language].footer.description}
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-blue-400">{content[language].footer.quickLinks.title}</h4>
              <div className="space-y-3">
                {content[language].footer.quickLinks.links.map((link, index) => (
                  <a key={index} href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* EP Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-blue-400">{content[language].footer.epServices.title}</h4>
              <div className="space-y-3">
                {content[language].footer.epServices.items.map((service, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Briefcase className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-blue-400">{content[language].footer.businessServices.title}</h4>
              <div className="space-y-3">
                {content[language].footer.businessServices.items.map((service, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Building className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-400">{content[language].footer.contact.title}</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-200">Carol Khoo</p>
                      <a href={`tel:${content[language].footer.contact.phone}`} className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                        {content[language].footer.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-200">Email</p>
                      <a href={`mailto:${content[language].footer.contact.email}`} className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                        {content[language].footer.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-200">Location</p>
                      <p className="text-sm text-gray-400">{content[language].footer.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                <p className="text-sm text-gray-400 mb-4 md:mb-0">
                  {content[language].footer.copyright}
                </p>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
                  <span className="text-gray-600">|</span>
                  <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-20 right-6 z-50">
        <a
          href="https://wa.me/6597486325?text=I%20would%20like%20to%20inquire%20about%20your%20EP%20and%20business%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center group"
          title="Chat with us on WhatsApp"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="transition-transform group-hover:scale-110"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        </a>
      </div>

      {/* Language Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 font-medium"
        >
          <span className="text-sm">{language === 'en' ? '中文' : 'EN'}</span>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <span className="text-sm">{language === 'en' ? 'EN' : '中文'}</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}