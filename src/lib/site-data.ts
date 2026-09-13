import founderPhoto from "@/assets/Rokon-Uz-Zaman.webp";
import faridPhoto from "@/assets/Farid-web_dev.jpg";
import softwareDev from "@/assets/Senior-App-Developer.jpg";
import helalPhoto from "@/assets/AL-Helal.webp";
import nahidPhoto from "@/assets/Nahid-Hassan.webp";
import azizPhoto from "@/assets/Azizul-Islam-Aziz.webp";
import sohanurPhoto from "@/assets/Sohanur-Rahman-1.webp";
import jashimPhoto from "@/assets/Josim-Uddin.webp";
import mehediPhoto from "@/assets/Mahadi-hasan.webp";
import badshaPhoto from "@/assets/Abdur-Rahman-Badsha.webp";
import masumPhoto from "@/assets/Masum-Billah.webp";
import easyBeingGreen from "@/assets/EASY BEING GREEN (1).jpg";
import robindev from "@/assets/robindev.png";
import maidit from "@/assets/maid it.png";
import greenleaf from "@/assets/greenleaf.png";
import junkRobbers from "@/assets/Junk Robbers.png";
import gloriaCleaning from "@/assets/gloriaCleaning.png";

export const company = {
  name: "Rok Online",
  legal: "Rok Online Inc.",
  address: "2717 Sardis Rd, Charlotte, NC 28270",
  street: "2717 Sardis Rd",
  city: "Charlotte",
  state: "NC",
  zip: "28270",
  phone: "(704) 412-6928",
  phoneHref: "tel:+17044126928",
  email: "email@rokonline.com",
  founder: "Rokon Uz Zaman",
  tagline: "Turning Clicks Into Loyal Customers",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  category: "Development" | "Marketing" | "Creative";
  benefits: string[];
  features: string[];
  process: { step: string; title: string; text: string }[];
  tech: string[];
  faqs: { q: string; a: string }[];
};

const defaultProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    text: "We audit your current presence, competitors and goals to define a measurable growth plan.",
  },
  {
    step: "02",
    title: "Planning & Design",
    text: "Architecture, wireframes and conversion-focused design built around your buyer journey.",
  },
  {
    step: "03",
    title: "Execution",
    text: "Our specialists build, launch and QA every deliverable against performance benchmarks.",
  },
  {
    step: "04",
    title: "Launch & Marketing",
    text: "Go live with tracking, analytics and campaigns configured from day one.",
  },
  {
    step: "05",
    title: "Growth Optimization",
    text: "Continuous testing, reporting and iteration to compound results month over month.",
  },
];

export const services: Service[] = [
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    short: "Fast, secure and easy-to-manage WordPress websites.",
    description:
      "Custom WordPress builds engineered for speed, security and search visibility — no bloated themes, no page-builder debt.",
    category: "Development",
    benefits: [
      "Sub-2s load times on core pages",
      "Editor-friendly content blocks",
      "Hardened security and backups",
      "SEO-ready technical foundation",
    ],
    features: [
      "Custom theme development",
      "Elementor & Gutenberg builds",
      "WooCommerce stores",
      "Speed & Core Web Vitals tuning",
      "Migration and redesign",
      "Ongoing maintenance plans",
    ],
    process: defaultProcess,
    tech: ["WordPress", "PHP", "Elementor", "WooCommerce", "MySQL", "Cloudflare"],
    faqs: [
      {
        q: "Do you build custom themes or use templates?",
        a: "We build custom, lightweight themes tailored to your brand. When a premium theme fits the budget, we optimize it heavily.",
      },
      {
        q: "How long does a WordPress project take?",
        a: "Most marketing sites launch in 3–6 weeks depending on page count and content readiness.",
      },
      {
        q: "Can you maintain the site after launch?",
        a: "Yes. Our maintenance plans cover updates, backups, uptime monitoring and monthly performance reports.",
      },
    ],
  },
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    short: "Bespoke web platforms built for scale and performance.",
    description:
      "Tailored web applications and marketing platforms designed around your workflows, integrations and growth targets.",
    category: "Development",
    benefits: [
      "Architecture built for scale",
      "Clean, documented codebase",
      "Third-party integrations",
      "Enterprise-grade security",
    ],
    features: [
      "Web app and portal development",
      "API design and integration",
      "Dashboards and admin tooling",
      "Payment and CRM integrations",
      "Automated testing",
      "Cloud deployment",
    ],
    process: defaultProcess,
    tech: ["React", "TypeScript", "Node.js", "Laravel", "PostgreSQL", "AWS"],
    faqs: [
      {
        q: "Do you work with existing codebases?",
        a: "Absolutely. We start with a technical audit and roadmap before touching production code.",
      },
      {
        q: "Who owns the code?",
        a: "You do — full ownership and repository access are handed over at launch.",
      },
      {
        q: "Can you support after launch?",
        a: "Yes, with SLA-backed support and iterative feature sprints.",
      },
    ],
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    short: "Blazing-fast React sites with world-class SEO.",
    description:
      "Modern React frontends with server rendering, edge performance and perfect crawlability for competitive search markets.",
    category: "Development",
    benefits: [
      "Excellent Core Web Vitals",
      "Server-side rendering for SEO",
      "Reusable component systems",
      "Headless CMS friendly",
    ],
    features: [
      "SSR and static generation",
      "Headless CMS integration",
      "Design systems in Tailwind CSS",
      "Advanced animation with GSAP",
      "Edge deployment",
      "Analytics and tracking",
    ],
    process: defaultProcess,
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
    faqs: [
      {
        q: "Why choose Next.js over WordPress?",
        a: "Choose it when performance, custom UX and complex integrations matter more than plugin ecosystems.",
      },
      {
        q: "Can marketing still edit content?",
        a: "Yes — we pair the frontend with a headless CMS so non-technical teams stay in control.",
      },
      {
        q: "Is it SEO friendly?",
        a: "Very. Server rendering, structured data and clean metadata are built in from the start.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Cross-platform apps with native-quality experience.",
    description:
      "iOS and Android apps built from a single codebase with polished motion, offline support and analytics baked in.",
    category: "Development",
    benefits: [
      "One codebase, two platforms",
      "Faster time to market",
      "App store launch support",
      "Analytics and crash reporting",
    ],
    features: [
      "UX research and prototyping",
      "React Native development",
      "Push notifications",
      "In-app payments",
      "API and backend integration",
      "Store submission & updates",
    ],
    process: defaultProcess,
    tech: ["React Native", "TypeScript", "Firebase", "Node.js", "Figma", "App Store Connect"],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "We recommend cross-platform for most business apps and native where deep hardware access is required.",
      },
      {
        q: "Do you handle store submission?",
        a: "Yes, including listings, assets and review compliance.",
      },
      {
        q: "What about ongoing updates?",
        a: "We offer retainer plans for feature releases and OS compatibility updates.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Increase organic traffic and search visibility.",
    description:
      "Technical, on-page and content SEO programs that grow qualified organic traffic and compound over time.",
    category: "Marketing",
    benefits: [
      "Qualified organic traffic",
      "Lower cost per acquisition",
      "Durable long-term growth",
      "Transparent monthly reporting",
    ],
    features: [
      "Technical SEO audits",
      "Keyword and intent research",
      "On-page optimization",
      "Content strategy & production",
      "Digital PR and link building",
      "Rank and revenue reporting",
    ],
    process: defaultProcess,
    tech: ["GA4", "Search Console", "Ahrefs", "Semrush", "Screaming Frog", "Looker Studio"],
    faqs: [
      {
        q: "How soon will I see results?",
        a: "Technical wins can move within weeks; competitive rankings typically compound over 3–6 months.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No credible agency does. We guarantee process, transparency and measurable progress reporting.",
      },
      {
        q: "Do you write the content?",
        a: "Yes, our writers and SEO strategists produce content mapped to search intent.",
      },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    short: "Own the map pack in your service area.",
    description:
      "Get found by nearby customers with optimized Google Business Profiles, local citations and review growth.",
    category: "Marketing",
    benefits: [
      "More calls and direction requests",
      "Higher map pack visibility",
      "Stronger local reputation",
      "Multi-location support",
    ],
    features: [
      "Google Business Profile optimization",
      "Local citation building",
      "Review generation systems",
      "Location landing pages",
      "Local link building",
      "Call and lead tracking",
    ],
    process: defaultProcess,
    tech: ["Google Business Profile", "GA4", "BrightLocal", "Search Console", "Schema", "CallRail"],
    faqs: [
      {
        q: "Do you handle multiple locations?",
        a: "Yes, we build scalable location page structures and manage profiles per branch.",
      },
      {
        q: "Can you fix a suspended profile?",
        a: "We handle reinstatement requests and compliance cleanup.",
      },
      {
        q: "How do you track leads?",
        a: "Call tracking, form attribution and GA4 events tied to revenue where possible.",
      },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads Management",
    short: "Performance-focused search and shopping campaigns.",
    description:
      "Profitable paid search programs built on tight targeting, strong creative and rigorous conversion tracking.",
    category: "Marketing",
    benefits: [
      "Immediate qualified traffic",
      "Lower cost per lead",
      "Full funnel tracking",
      "Weekly optimization",
    ],
    features: [
      "Account audit and rebuild",
      "Search, Shopping & PMax",
      "Landing page optimization",
      "Conversion tracking setup",
      "Negative keyword hygiene",
      "Transparent reporting",
    ],
    process: defaultProcess,
    tech: ["Google Ads", "GA4", "Google Tag Manager", "Merchant Center", "Looker Studio", "CallRail"],
    faqs: [
      {
        q: "What ad budget do I need?",
        a: "Most local campaigns start around $1,500/month in media spend to gather meaningful data.",
      },
      {
        q: "Who owns the ad account?",
        a: "You do. We work inside your account with full transparency.",
      },
      {
        q: "How often do you optimize?",
        a: "Weekly optimization cycles with monthly strategy reviews.",
      },
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Management",
    short: "Facebook and Instagram campaigns that convert.",
    description:
      "Creative-led paid social programs that build demand, retarget warm audiences and drive measurable revenue.",
    category: "Marketing",
    benefits: [
      "Scalable demand generation",
      "High-performing creative testing",
      "Precise retargeting",
      "Clear ROAS reporting",
    ],
    features: [
      "Audience and offer strategy",
      "Creative production",
      "Pixel & Conversions API setup",
      "A/B and incrementality testing",
      "Retargeting funnels",
      "Performance dashboards",
    ],
    process: defaultProcess,
    tech: ["Meta Ads Manager", "Conversions API", "GA4", "Google Tag Manager", "Canva", "Looker Studio"],
    faqs: [
      {
        q: "Do you produce the creative?",
        a: "Yes — static, motion and short-form video creative are part of our program.",
      },
      {
        q: "How do you handle iOS tracking limits?",
        a: "Server-side Conversions API plus modeled reporting and blended CAC targets.",
      },
      {
        q: "How fast can we launch?",
        a: "Typically 7–10 business days from kickoff.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Build brand awareness and customer engagement.",
    description:
      "Always-on organic social programs that grow an audience, build trust and support your paid campaigns.",
    category: "Marketing",
    benefits: [
      "Consistent brand presence",
      "Higher engagement rates",
      "Community trust",
      "Content that fuels ads",
    ],
    features: [
      "Content calendars",
      "Graphic and reel production",
      "Community management",
      "Influencer collaborations",
      "Hashtag and trend strategy",
      "Monthly analytics",
    ],
    process: defaultProcess,
    tech: ["Meta Suite", "Instagram", "LinkedIn", "TikTok", "Canva", "Later"],
    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "Instagram, Facebook, LinkedIn, TikTok, YouTube and X depending on your audience.",
      },
      {
        q: "How many posts per month?",
        a: "Plans typically range from 12 to 30 pieces of content monthly.",
      },
      {
        q: "Do you reply to comments?",
        a: "Yes, community management is included on managed plans.",
      },
    ],
  },
  {
    slug: "video-production",
    title: "Promotional Video Production",
    short: "Professional promotional videos for businesses.",
    description:
      "Scripted, shot and edited brand videos, ads and short-form content designed to stop the scroll and sell.",
    category: "Creative",
    benefits: [
      "Higher ad engagement",
      "Stronger brand recall",
      "Reusable content library",
      "Platform-native formats",
    ],
    features: [
      "Concept and scripting",
      "Motion graphics & animation",
      "Product and brand films",
      "Short-form reels",
      "Subtitling and localization",
      "Ad creative variations",
    ],
    process: defaultProcess,
    tech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Figma", "Illustrator", "Audition"],
    faqs: [
      {
        q: "Do you shoot on location?",
        a: "Yes, and we also produce fully remote animated and stock-based videos.",
      },
      {
        q: "What formats do you deliver?",
        a: "16:9, 1:1 and 9:16 cuts optimized for each platform.",
      },
      {
        q: "How many revisions?",
        a: "Two rounds are included on standard packages.",
      },
    ],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    short: "Convert visitors into loyal, repeat customers.",
    description:
      "Lifecycle email and automation programs that nurture leads, recover revenue and increase customer lifetime value.",
    category: "Marketing",
    benefits: [
      "Highest ROI channel",
      "Automated revenue",
      "Better retention",
      "Owned audience",
    ],
    features: [
      "Welcome and nurture flows",
      "Abandoned cart recovery",
      "Newsletter design",
      "Segmentation strategy",
      "A/B subject line testing",
      "Deliverability monitoring",
    ],
    process: defaultProcess,
    tech: ["Klaviyo", "Mailchimp", "HubSpot", "Postmark", "GA4", "Figma"],
    faqs: [
      {
        q: "Which platform do you recommend?",
        a: "Klaviyo for ecommerce, HubSpot for B2B, Mailchimp for simple newsletters.",
      },
      {
        q: "Can you migrate our list?",
        a: "Yes, including cleanup, segmentation and deliverability warm-up.",
      },
      {
        q: "How often should we send?",
        a: "Most brands do well with 2–4 campaigns monthly plus always-on automations.",
      },
    ],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    short: "Keep your site fast, secure and always online.",
    description:
      "Proactive care plans covering updates, security, backups, uptime monitoring and continuous improvements.",
    category: "Development",
    benefits: [
      "Zero-surprise uptime",
      "Security patched weekly",
      "Fast issue resolution",
      "Continuous improvements",
    ],
    features: [
      "Core & plugin updates",
      "Daily backups",
      "Uptime monitoring",
      "Malware scanning",
      "Speed optimization",
      "Monthly health reports",
    ],
    process: defaultProcess,
    tech: ["Cloudflare", "WordPress", "UptimeRobot", "Sentry", "GA4", "Git"],
    faqs: [
      {
        q: "What is the response time?",
        a: "Critical issues are acknowledged within a few business hours on managed plans.",
      },
      {
        q: "Do you maintain non-WordPress sites?",
        a: "Yes, including custom React and Next.js applications.",
      },
      {
        q: "Are content edits included?",
        a: "A monthly allowance of edit hours is included on most plans.",
      },
    ],
  },
];

export const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 145, suffix: "+", label: "Upwork Reviews" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Focus" },
];

export const team = [
  {
    name: "Rokon Uz Zaman",
    role: "Founder & CEO",
    skills: ["Growth Strategy", "SEO", "Leadership"],
    initials: "RZ",
    image: founderPhoto,
  },
  {
    name: "S. Karim",
    role: "Senior Software Developer",
    skills: ["JS", "PHP", "React Native"],
    initials: "SK",
    image: softwareDev,
  },
  {
    name: "Al Helal",
    role: "Senior Web Developer",
    skills: ["Node JS", "WordPress", "WP Plugin"],
    initials: "AH",
    image: helalPhoto,
  },

  {
    name: "Nahid Islam",
    role: "Web Designer",
    skills: ["WordPress", "Content", "Web design"],
    initials: "NI",
    image: nahidPhoto,
  },
  {
    name: "A. I. Aziz",
    role: "Web Developer",
    skills: ["Web Design", "WordPress", "Vibe Code"],
    initials: "AI",
    image: azizPhoto,
  },

  {
    name: "Sohanur Rahman",
    role: "Videographer",
    skills: ["Premiere Pro", "After Effects", "Motion"],
    initials: "RS",
    image: sohanurPhoto,
  },

  {
    name: "Sheikh Farid",
    role: "Web Designer & Developer",
    skills: ["Web Design", "WordPress", "Vibe Code"],
    initials: "FH",
    image: faridPhoto,
  },
  
  {
    name: "Mehedi Hasan",
    role: "Ads Specialist",
    skills: ["Meta Ads", "Google Ads", "Lead Generation Ads"],
    initials: "MH",
    image: mehediPhoto,
  },

  
  {
    name: "Jashim Uddin",
    role: "SEO Specialist",
    skills: ["SEO", "Local SEO", "Technical SEO"],
    initials: "JU",
    image: jashimPhoto,
  },

  {
    name: "A. R. Badsha",
    role: "SEO Specialist",
    skills: ["SEO", "Local SEO", "Technical SEO"],
    initials: "AB",
    image: badshaPhoto,
  },

  {
    name: "M. H. Masum",
    role: "Video Editor",
    skills: ["Premiere Pro", "After Effects", "Motion"],
    initials: "MM",
    image: masumPhoto,
  },

];

export const techGroups = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "PHP", "Laravel"] },
  { group: "CMS", items: ["WordPress", "Elementor", "Webflow", "Wix"] },
  {
    group: "Marketing",
    items: ["Google Ads", "Meta Ads", "GA4", "Google Tag Manager", "Search Console"],
  },
  { group: "Design", items: ["Figma", "Adobe Creative Suite"] },
  { group: "Videography", items: ["Premiere Pro", "After Effects","CapCut", "Lightroom"]
  },

];

export const portfolio = [
  {
    title: "Easy Being Green",
    industry: "Renewable Energy",
    category: "Website Development",
    services: ["Web Design", "WordPress", "Development"],
    result: "Conversion-focused solar solutions website",
    accent: "from-primary/40 to-accent/30",
    image: easyBeingGreen,
  },
  {
    title: "Robin Dev Hospitality",
    industry: "Hospitality",
    category: "Website Development",
    services: ["WordPress", "Figma Design"],
    result: "Modern Website Building",
    accent: "from-accent/35 to-primary/30",
    image: robindev ,
  },
  {
    title: "Maid It Cleaning Service",
    industry: "Cleaning Service",
    category: "Web Development",
    services: ["WordPress", "Ranking"],
    result: "BUsiness Website Development",
    accent: "from-gold/35 to-primary/30",
    image: maidit,
  },
  {
    title: "Tree Removal & Pruning Service",
    industry: "Tree Service",
    category: "Web Development",
    services: ["WordPress", "Theme Customize"],
    result: "Build modern business website",
    accent: "from-primary/35 to-gold/25",
    image: greenleaf,
  },
  {
    title: "Junk Robbers Cleaning",
    industry: "Cleaning Service",
    category: "SEO",
    services: ["Branding", "SEO", "Web Development"],
    result: "Boost organic clients",
    accent: "from-accent/40 to-gold/25",
    image: junkRobbers,
  },
  {
    title: "GLORIA CLEANING",
    industry: "Cleaning Service",
    category: "Paid Ads",
    services: ["SEO", "Web Development", "Branding"],
    result: "+168% organic traffic YoY",
    accent: "from-primary/45 to-accent/25",
    image: gloriaCleaning,
  },
];

export const portfolioCategories = [
  "All",
  "Website Development",
  "SEO",
  "Paid Ads",
  "Branding",
] as const;

export const testimonials = [
  {
    quote:
      "I've been working with Rokon for over 4 years, and I can't recommend him highly enough. He helped us migrate our membership website to a new domain and built a complex site with multiple membership levels, a large amount of content, and custom functionality. Everything works! I was very especially happy about the design, and Rokon was patient, collaborative, and delivered a website I'm delighted with. Whenever he encountered something new, he learned it quickly and found a solution. What stands out most is his honesty, professionalism, and dedication. Even with the time difference between Bangladesh and the U.S., he was always responsive and made himself available whenever needed. Communication was excellent throughout the project.If you're looking for someone who is skilled, reliable, trustworthy, and truly cares about doing great work, I highly recommend Rokon. It's been a pleasure working with him, and I look forward to continuing our partnership.",
    name: "Ajayan Borys",
    company: "Effortless Mind Meditation",
    initials: "AB",
  },
  {
    quote:
      "I've been working with Rokon and Rok Online for over a year, and I couldn't be happier with the experience. He built the website for my beauty studio and has been incredibly responsive, professional, and helpful every step of the way. Whenever I need updates or have questions, he responds quickly and gets things done efficiently. He always takes the time to understand my goals and offers great suggestions to improve my website and online presence. If you're looking for someone reliable, knowledgeable, and easy to work with, I highly recommend Rokon and Rok Online.",
    name: "Elena",
    company: "I Perfect Studio",
    initials: "E",
  },
  {
    quote:
      "We’ve had a great experience working with ROK Online. They handle the SEO and Google Ads for our company, B&F Junk Removal, and we’ve been very pleased with both their service and the results. Their team is knowledgeable, responsive, and always willing to answer questions or make adjustments when needed. They do a great job keeping our business visible online and helping us reach new customers. It’s obvious they understand digital marketing and know how to create strategies that work for local service businesses. One thing we really appreciate is their communication. They keep us informed, respond promptly, and genuinely care about helping our business grow. It’s refreshing to work with a company that follows through on what they promise. If you’re looking for a marketing company that knows SEO, manages Google Ads professionally, and truly wants to help your business succeed, I highly recommend ROK Online. They’ve been a valuable partner for B&F Junk Removal, and we look forward to continuing to work with them.",
    name: "Brian Turner",
    company: "B&F Junk Removal",
    initials: "BT",
  },
  {
    quote:
      "Rokon and the Rok Online team have done an amazing job for my permanent makeup business. Since they built my website and started managing my Meta Ads, I've been getting more clients and my business has grown significantly. Professional, responsive, and highly recommended!",
    name: "Salima Zurmanova",
    company: "Permanent Makeup NYC",
    initials: "SZ",
  },

    {
    quote:
      "I have been working with Rokon for a few years now and he has gone above and beyond to set up and monitor my website. He has kept track of when updates are needed and makes any changes that I need to make on my site in reasonable time for a very reasonable price. I trust Rokon for all my technical needs and he has never let me down.",
    name: "Sire Nelson",
    company: "Sire Sounds DJ",
    initials: "SN",
  },
      {
    quote:
      "I am writing to share my review and recommendation for Rok online. I have known this company for over 6 years, and they consistently deliver excellent results and help companies to grow. I highly recommend their services.",
    name: "Tina",
    company: "GLoria Cleaning",
    initials: "T",
  },
      {
    quote:
      "Ryan provides great service and is very responsive. We have been with his company for 3 years now and have plans to continue growing using his services",
    name: "Alingizer1",
    company: "Maid IT",
    initials: "A",
  },
      {
    quote:
      "Rok Online has done a great job with our cleaning business website. The team is responsive and highly professional, the services are reasonably priced. Would recommend Rok Online to anyone looking for business website development.",
    name: "Yuna Martin",
    company: "Clean IQ Foxcity",
    initials: "YM",
  },

];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    text: "We dig into your market, competitors and numbers to build a growth plan tied to revenue, not vanity metrics.",
  },
  {
    step: "02",
    title: "Planning & Design",
    text: "Information architecture, wireframes and high-fidelity design crafted around your customer journey.",
  },
  {
    step: "03",
    title: "Development",
    text: "Clean, fast, accessible builds with SEO fundamentals and analytics wired in from the first commit.",
  },
  {
    step: "04",
    title: "Launch & Marketing",
    text: "Coordinated launch with tracking, search and paid campaigns turned on to capture demand immediately.",
  },
  {
    step: "05",
    title: "Growth Optimization",
    text: "Continuous CRO, content and campaign testing so results compound month after month.",
  },
];

export const timeline = [
  { year: "2018", title: "Company Founded", text: "Rok Online launches as a focused web development studio." },
  {
    year: "2020",
    title: "Expanded Development Services",
    text: "Custom development, ecommerce and app teams join the roster.",
  },
  {
    year: "2023",
    title: "150+ Projects Completed",
    text: "A milestone year with 145+ five-star Upwork reviews.",
  },
  {
    year: "2026",
    title: "Full Digital Growth Agency",
    text: "An integrated team covering development, SEO, paid media and creative.",
  },
];

export const trustLogos = [
  "WordPress",
  "Google Ads",
  "Meta Ads",
  "Shopify",
  "Next.js",
  "Upwork",
  "HubSpot",
  "Klaviyo",
];
