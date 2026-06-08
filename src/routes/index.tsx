import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Trophy,
  Code2,
  Terminal,
  Database,
  BrainCircuit,
  Sparkles,
  Cloud,
  Box,
  Server,
  GitBranch,
  Settings,
  Network,
  Layers,
  MessageSquare,
  Eye,
  LineChart,
  Bot,
  Search,
  Cpu,
  BarChart,
  Flame,
  Hexagon,
  Link,
  Activity,
  FlaskConical,
  Table,
  Zap,
  Presentation,
  Users,
  GitMerge,
  Crown,
  MonitorPlay,
  BookOpen,
  Moon,
  Sun,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shubham Vishwakarma — Data Scientist & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Shubham Vishwakarma, Data Scientist & AI Engineer building GenAI, multi-agent and ML systems.",
      },
      { property: "og:title", content: "Shubham Vishwakarma — Data Scientist & AI Engineer" },
      {
        property: "og:description",
        content: "Portfolio of Shubham Vishwakarma, Data Scientist & AI Engineer.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#newsletter", label: "Newsletter" },
];

const pipeline = [
  {
    n: "01",
    t: "Define",
    d: "Push back on assumptions and ask — are we solving the right thing?",
    c: "// No code yet. Just clarity.",
  },
  {
    n: "02",
    t: "Question",
    d: "The quality of output is determined by the quality of the question.",
    c: "// Success defined early.",
  },
  {
    n: "03",
    t: "Explore",
    d: "EDA isn't a formality, it's where I earn the right to model.",
    c: "// Trust the data first.",
  },
  {
    n: "04",
    t: "Model",
    d: "Benchmark, cross-validate, and stress-test until it's defensible.",
    c: "// Evidence over intuition.",
  },
  {
    n: "05",
    t: "Explain",
    d: "A model nobody understands is a model nobody uses.",
    c: "// Interpretability is key.",
  },
  {
    n: "06",
    t: "Deploy",
    d: "Track what changes after deployment and close the loop.",
    c: "// Real-world impact.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    dotClass: "bg-emerald-500",
    textClass: "text-emerald-400",
    borderClass: "border-emerald-500/30",
    bgClass: "bg-emerald-500/10",
    items: [
      { name: "Python", icon: Terminal },
      { name: "Java", icon: Code2 },
      { name: "C++", icon: Code2 },
      { name: "Object-Oriented Programming", icon: Box },
      { name: "SQL", icon: Database },
      { name: "Data Structure & Algorithm", icon: Network },
      { name: "System Design", icon: Layers },
    ],
  },
  {
    title: "MLOps Tools",
    dotClass: "bg-blue-500",
    textClass: "text-blue-400",
    borderClass: "border-blue-500/30",
    bgClass: "bg-blue-500/10",
    items: [
      { name: "AWS Services", icon: Cloud },
      { name: "Pinecone", icon: Database },
      { name: "Docker", icon: Box },
      { name: "Kubernetes", icon: Server },
      { name: "CI/CD", icon: GitBranch },
      { name: "MLflow", icon: Activity },
      { name: "DVC", icon: GitBranch },
      { name: "Git", icon: Github },
      { name: "Snowflake", icon: Database },
      { name: "Airflow", icon: Settings },
      { name: "LangGraph", icon: Network },
    ],
  },
  {
    title: "GenAI",
    dotClass: "bg-purple-500",
    textClass: "text-purple-400",
    borderClass: "border-purple-500/30",
    bgClass: "bg-purple-500/10",
    items: [
      { name: "LLMs", icon: Cpu },
      { name: "RAG", icon: Search },
      { name: "Prompt Engineering", icon: Terminal },
      { name: "Fine-tuning", icon: Settings },
      { name: "Transformers", icon: Network },
      { name: "BERT", icon: Bot },
      { name: "Attention Models", icon: Eye },
      { name: "RNN", icon: Activity },
      { name: "LSTM", icon: Activity },
      { name: "Agentic AI", icon: Bot },
    ],
  },
  {
    title: "Technology & FrameWorks",
    dotClass: "bg-amber-500",
    textClass: "text-amber-400",
    borderClass: "border-amber-500/30",
    bgClass: "bg-amber-500/10",
    items: [
      { name: "LangChain", icon: Link },
      { name: "API", icon: Zap },
      { name: "Neo4j", icon: Network },
      { name: "Data Cleaning & Visualization", icon: BarChart },
      { name: "Keras", icon: Layers },
      { name: "SciPy", icon: FlaskConical },
      { name: "PyTorch", icon: Flame },
      { name: "Tensorflow", icon: Hexagon },
    ],
  },
  {
    title: "AI/ML",
    dotClass: "bg-rose-500",
    textClass: "text-rose-400",
    borderClass: "border-rose-500/30",
    bgClass: "bg-rose-500/10",
    items: [
      { name: "Hypothesis A/B Testing", icon: Activity },
      { name: "Statistics", icon: BarChart },
      { name: "Clustering", icon: Network },
      { name: "Unsupervised", icon: Search },
      { name: "Deep Learning", icon: Layers },
      { name: "NLP", icon: MessageSquare },
      { name: "CNN", icon: Eye },
      { name: "Time Series", icon: LineChart },
      { name: "Regression", icon: LineChart },
    ],
  },
  {
    title: "Soft Skills",
    dotClass: "bg-slate-400",
    textClass: "text-slate-300",
    borderClass: "border-slate-400/30",
    bgClass: "bg-slate-400/10",
    items: [
      { name: "Data Storytelling", icon: Presentation },
      { name: "Stakeholder Mgmt", icon: Users },
      { name: "Cross-functional", icon: GitMerge },
      { name: "Leadership", icon: Crown },
      { name: "Presentation", icon: MonitorPlay },
    ],
  },
];

const certifications = [
  { y: "2024", t: "Google Adv. Data Analytics", s: "Coursera", pdf: "/certificates/Google Advance Data Analytics.pdf" },
  { y: "2025", t: "Amazon ML Summer School", s: "Amazon", pdf: "/certificates/Amazon ML Summer School.pdf" },
  { y: "2023", t: "IBM Adv. Data Science", s: "IBM", pdf: "/certificates/IBM Advance Data Science & AI Certification.pdf" },
  { y: "2023", t: "AWS Cloud Practitioner", s: "AWS", pdf: "/certificates/AWS CERTIFIED CLOUD.pdf" },
  { y: "2024", t: "SQL Advanced", s: "HackerRank", pdf: "/certificates/sql_advanced certificate.pdf" },
];

const events = [
  {
    year: "2024",
    title: "L&T TechGium Hackathon",
    organizer: "L&T Technology Services",
    role: "Finalist",
    result: "National Finalist",
    resultColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    desc: "National-level engineering innovation challenge. Reached the final round competing against top engineering teams across India.",
  },
  {
    year: "2025",
    title: "Amazon ML Summer School",
    organizer: "Amazon India",
    role: "Selected Trainee",
    result: "Top 3,000 of 100k+",
    resultColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    desc: "Highly selective ML training program by Amazon. Chosen among 3,000+ applicants from across India for intensive ML curriculum.",
  },
  {
    year: "2023–24",
    title: "Kaggle Competitions",
    organizer: "Kaggle",
    role: "Competition Expert",
    result: "Discussion Expert (2×)",
    resultColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    desc: "Ranked top 20% across 40+ competitions. Won a Kaggle competition and earned Discussion Expert badge twice for community contributions.",
  },
  {
    year: "2024",
    title: "Freelance AI Projects",
    organizer: "Upwork",
    role: "AI Engineer",
    result: "2 Projects Delivered",
    resultColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    desc: "Delivered 2 GenAI-based freelance projects for international clients from Bangladesh and Singapore via Upwork platform.",
  },
];

const publications = [
  {
    title: "Autoencoder-Based Dual Noise Suppression for Brain CT Imaging: SNR Optimization Toward Accurate Clinical Diagnostics",
    journal: '3rd IEEE DMIHER (DU) International Conference on "Artificial Intelligence in Healthcare, Education & Industry" (IDICAIHEI 2025)',
    abbr: "IDICAIHEI",
    year: "Nov 2025",
    publisher: "IEEE",
    desc: "Proposes a dual-stage autoencoder pipeline that suppresses Gaussian + Poisson noise on brain CT scans, achieving significant SNR improvement while preserving tumor-region morphology for downstream detection.",
    link: "https://ieeexplore.ieee.org/document/11378629",
  },
  {
    title: "Feel Good AI: Voice-Enabled Emotion-based Music Recommendation System",
    journal: "2024 International Conference on Advances in Computing, Communication and Applied Informatics (ACCAI)",
    abbr: "ACCAI",
    year: "Jul 2024",
    publisher: "IEEE",
    desc: "A voice-driven emotion recognition system that maps real-time acoustic features to music playlists, delivering personalized recommendations with high user satisfaction scores.",
    link: "https://ieeexplore.ieee.org/document/10602424",
  },
  {
    title: "Utilization of Citrus-Enzyme in concrete as an Admixture",
    journal: "International Journal of Novel Research and Development (IJNRD)",
    abbr: "IJNRD",
    year: "Oct 2023",
    publisher: "IJNRD",
    desc: "Investigates the structural and chemical effects of citrus-enzyme as a bio-admixture in concrete, evaluating compressive strength, workability, and sustainability impact.",
    link: "https://www.ijnrd.org/viewpaperforall.php?paper=IJNRD2310002",
  },
  {
    title: "Image Colorization using AI",
    journal: "International Journal of All Research Education and Scientific Methods (IJARESM)",
    abbr: "IJARESM",
    year: "Oct 2022",
    publisher: "IJARESM",
    desc: "Implements a deep convolutional neural network for automatic grayscale image colorization, achieving perceptually realistic colorization results across diverse image categories.",
    link: "https://www.ijaresm.com/image-colorization-using-ai",
  }
];

interface Project {
  title: string;
  category: string;
  desc: string | string[];
  stack: string[];
  featured?: boolean;
  metrics?: string[];
  github?: string;
  demo?: string;
  tag?: string;
}

const projects: Project[] = [
  {
    featured: true,
    title: "YouTube AI Agent",
    category: "AI PROJECTS",
    desc: [
      "Developed a chat-enabled AI agent for contextual Q&A over video transcripts, metadata, and watch-history, improving answer relevance by 35% and reducing hallucinations by 40% using hybrid retrieval and prompt optimization.",
      "Built an ETL pipeline ingesting 10+ APIs, structuring unstructured data, and storing 1M+ records with 60% faster query latency.",
      "Integrated a Bloom Filter layer to cut redundant queries by 30%, improving overall system throughput."
    ],
    metrics: ["35% More Relevant", "40% Less Hallucinations", "60% Faster Latency"],
    stack: ["Amazon Redshift", "Google Cloud", "Database"],
  },
  {
    title: "Brain CT Scan Image Denoising",
    category: "AI PROJECTS",
    desc: [
      "Engineered a 4-layer encoder-decoder architecture to reduce Poisson and Periodic noise while preserving diagnostic features, enhancing the scan classification accuracy to about 87% post-denoising.",
      "Deployed on EC2 instance, real-time processing with less than 5s latency for single and batch DICOM image."
    ],
    stack: ["Image Processing", "Auto-Encoder", "AWS EC2"],
    github: "https://github.com/ShubhamV2503/NeuroScanAI--CT-Scan-Image-Denoising",
    demo: "https://huggingface.co/spaces/rayuga2503/NeuroScanAI",
  },
  {
    title: "ETL Stock Data Pipeline Forecasting Finance",
    category: "DATA ENGINEERING",
    desc: [
      "Automated Gold (XAUUSD) pipeline Alpha Vantage, orchestrated DAGs, 7 years records through S3 Bucket.",
      "Migrated Prophet model to SARIMAX and reducing MAPE by 14.16%.",
      "Integrated Amazon Redshift for analytics, enabling same-day insights and boosting query efficiency by 30%."
    ],
    stack: ["SARIMAX", "S3 Bucket", "Airflow"],
    github: "https://github.com/ShubhamV2503/Gold-Insight-Forecastor",
    demo: "https://huggingface.co/spaces/rayuga2503/gold-price-forecaster",
  },
];

const experience = [
  {
    company: "LTM (LTIMindtree)",
    role: "GenAI Intern",
    period: "Feb 2026 – Apr 2026",
    location: "Bangalore",
    logo: "/images/LTM_Logo.jpg",
    points: [
      "Built a LangGraph multi-agent GenAI system extracting compliance data from 5,000+ Italian invoices with 100% recall on non-compliance fields.",
      "Designed a parallel voting mechanism that reduced end-to-end pipeline latency by 50%.",
    ],
  },
  {
    company: "Pando Data",
    role: "Data Scientist Intern",
    period: "Jul 2025 – Nov 2025",
    location: "Amsterdam, NL · Remote",
    logo: "/images/pandodata.png",
    points: [
      "Built and deployed a CV detection & tracking pipeline with Roboflow at 98% object detection accuracy.",
      "Designed a production analytics dashboard translating vision-based tracking into 5+ real-time KPIs.",
    ],
  },
  {
    company: "ITJOBXS",
    role: "Software Engineer Intern",
    period: "Nov 2024 – Jan 2025",
    location: "Mumbai",
    logo: "/images/ITJOBXS.png",
    points: [
      "Developed 40% of backend logic for a data-driven Python application.",
      "Resolved Google reCAPTCHA integration, cutting invalid submissions by 30%.",
    ],
  },
  {
    company: "Alu Glass System",
    role: "Data Analyst",
    period: "Dec 2022 – Apr 2024",
    location: "Mumbai",
    points: [
      "Enhanced data processing achieving 40–50% efficiency gains and cut report generation time.",
      "Identified task allocation bottlenecks improving efficiency ~80%; managed a team of 20+.",
    ],
  },
];

function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <span className="font-handwritten text-4xl md:text-[3rem] text-primary/80 font-normal tracking-wide">
      {text}
      <span className="animate-pulse inline-block ml-1">|</span>
    </span>
  );
}

function Index() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const categories = ["ALL", "AI PROJECTS", "DATA ENGINEERING", "APP DEVELOPMENT"];
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      return stored ? stored === "dark" : true; // default to dark
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const [certTab, setCertTab] = useState<"certs" | "events">("certs");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/vishwakarmashubham.2503@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 4000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 4000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      {/* Ambient Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />

      {/* Nav */}
      <header className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-lg flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Shubham<span className="text-primary animate-pulse">_</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground font-medium">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark((d) => !d)}
              className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <Moon className="h-5 w-5 hidden dark:block" />
              <Sun className="h-5 w-5 block dark:hidden" />
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-primary/50"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Mail className="h-4 w-4" /> Connect
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="max-w-6xl mx-auto px-6 pt-32">
        {/* Hero */}
        <section className="py-20 grid md:grid-cols-[1.2fr_1fr] gap-16 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs text-primary font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Mumbai · Open to Remote & Full-time
            </div>

            <p className="text-xl text-muted-foreground font-medium mb-4">
              Hi, I'm Shubham 👋
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              I turn complex data into AI systems people <br className="hidden md:block" />
              <span className="font-handwritten text-6xl md:text-[5.5rem] leading-none text-primary font-normal tracking-wide mt-2 block">
                actually use.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl font-light leading-relaxed mb-6">
              I've spent my career making data actionable, from building generative AI systems to deploying real-world ML pipelines at scale.
            </p>

            <div className="mb-10 h-12">
              <Typewriter words={["Software Engineer.", "Data Scientist.", "GenAI Engineer."]} />
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-1"
                style={{ background: "var(--gradient-primary)" }}
              >
                Experience <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border glass-panel px-7 py-3.5 font-medium hover:border-primary/50 hover:text-primary transition-all"
              >
                <FileText className="h-4 w-4" /> View Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border glass-panel px-7 py-3.5 font-medium hover:border-primary/50 hover:text-primary transition-all"
              >
                <Mail className="h-4 w-4" /> Let's connect
              </a>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-[400px] w-full max-w-[358px] mx-auto group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50" />
            <div className="glass-panel w-full h-full rounded-3xl border border-white/10 relative overflow-hidden transform transition-transform duration-700 group-hover:rotate-y-12">
              <img
                src="/images/Mypic.jpeg"
                alt="Shubham Vishwakarma"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* About Me */}
        <Section id="about" eyebrow="01. Identity" title="About Me">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            {/* Left — text content */}
            <div>
              {/* Stat pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: "🎓", label: "NMIMS '26 MTech" },
                  { icon: "🤖", label: "Data Scientist" },
                  { icon: "⚡", label: "AI Engineer" },
                  { icon: "🏅", label: "Kaggle Expert" },
                  { icon: "📄", label: "IEEE Author" },
                  { icon: "🌍", label: "Mumbai" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    <span>{b.icon}</span> {b.label}
                  </span>
                ))}
              </div>

              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  I'm a Data Scientist from Mumbai with an{" "}
                  <strong className="text-foreground font-medium">MTech in Data Science &amp; Business Analytics</strong>{" "}
                  from NMIMS. I build systems that go from raw data to real decisions.
                </p>
                <p>
                  Over the past few years, I've worked across Data Science, Analytics, Software Engineering, and Generative AI. My experience spans predictive modeling, computer vision, time-series forecasting, data engineering pipelines, and Agentic AI systems — with hands-on exposure through{" "}
                  <strong className="text-foreground font-medium">LTIMindtree, Pando Data, and ITJOBXS</strong>.
                </p>
                <p>
                  What excites me most is solving real-world problems where technology creates measurable impact — designing multi-agent AI workflows, building scalable ML pipelines, and turning complex challenges into practical solutions people can trust.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
                {[
                  { value: "3+", label: "Years Exp." },
                  { value: "10+", label: "Projects Built" },
                  { value: "4", label: "IEEE Papers" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image mosaic */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/7] bg-primary/5 border border-border">
                <img
                  src="/images/Mypic.jpeg"
                  alt="Shubham Vishwakarma"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-primary/5 border border-border flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary">40+</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Kaggle<br/>Competitions</div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary">100k+</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Amazon ML<br/>Applicants Pool</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="how-i-work" eyebrow="02. Process" title="How I Work">
          <p className="text-muted-foreground text-lg mb-14 max-w-2xl font-light">
            My approach to every data problem — from ambiguous brief to production-ready system.
          </p>
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[27px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent hidden sm:block" />
            <div className="space-y-6">
              {pipeline.map((step, i) => (
                <div key={step.n} className="group flex gap-6 sm:gap-8 items-start relative">
                  {/* Step number circle */}
                  <div className="shrink-0 w-14 h-14 rounded-full border-2 border-primary/40 bg-background group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center z-10">
                    <span className="text-xs font-mono font-bold text-primary">{step.n}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 glass-panel rounded-2xl px-7 py-5 group-hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold text-foreground">{step.t}</h3>
                      <span className="text-[11px] font-mono text-primary/60 bg-primary/5 px-2 py-0.5 rounded shrink-0 border border-primary/10">{step.c}</span>
                    </div>
                    <p className="text-muted-foreground mt-1.5 font-light leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="03. Tech Stack" title="Core Technologies.">
          <p className="text-muted-foreground text-lg mb-14 max-w-2xl font-light">
            A curated stack of tools and frameworks I use to engineer production-ready ML models, GenAI agents, and scalable data pipelines.
          </p>

          <div className="divide-y divide-border/40">
            {skillGroups.map((g, idx) => {
              const accentColors: Record<string, string> = {
                "Languages": "bg-emerald-500",
                "MLOps Tools": "bg-blue-500",
                "GenAI": "bg-violet-500",
                "Technology & FrameWorks": "bg-amber-500",
                "AI/ML": "bg-cyan-500",
                "Soft Skills": "bg-slate-400",
              };
              const textColors: Record<string, string> = {
                "Languages": "text-emerald-500",
                "MLOps Tools": "text-blue-500",
                "GenAI": "text-violet-500",
                "Technology & FrameWorks": "text-amber-500",
                "AI/ML": "text-cyan-500",
                "Soft Skills": "text-slate-400",
              };
              const accent = accentColors[g.title] ?? "bg-primary";
              const textColor = textColors[g.title] ?? "text-primary";
              return (
                <div
                  key={g.title}
                  className="group flex flex-col sm:flex-row gap-4 sm:gap-8 py-7 hover:bg-primary/[0.02] transition-colors duration-300 relative pl-5"
                >
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-7 bottom-7 w-[3px] rounded-full ${accent} opacity-70 group-hover:opacity-100 transition-opacity`} />

                  {/* Category label */}
                  <div className="sm:w-44 shrink-0 flex items-start pt-0.5">
                    <span className={`text-sm font-bold tracking-widest uppercase ${textColor} font-mono`}>
                      {g.title}
                    </span>
                  </div>

                  {/* Skills — inline with dot separators */}
                  <div className="flex-1 flex flex-wrap items-center gap-x-1 gap-y-1">
                    {g.items.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <span key={item.name} className="flex items-center gap-1.5">
                          <span className="flex items-center gap-1.5 text-[15px] text-foreground/80 font-light group-hover:text-foreground transition-colors duration-200">
                            <Icon className={`h-3.5 w-3.5 ${textColor} opacity-70`} />
                            {item.name}
                          </span>
                          {i < g.items.length - 1 && (
                            <span className="text-border mx-1 select-none">·</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>


        {/* Experience & Education */}
        <Section id="experience" eyebrow="03. Timeline" title="Experience & Education">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground/80 flex items-center gap-3">
                <Terminal className="h-5 w-5 text-primary" /> Professional
              </h3>
              <div className="space-y-12 border-l-2 border-primary/20 ml-3 pl-8 md:pl-10 relative">
                {experience.map((e) => (
                  <div key={e.company} className="relative group flex flex-col sm:flex-row gap-5">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[41px] md:-left-[49px] top-2 h-4 w-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
                    
                    {/* Logo Box */}
                    {e.logo && (
                      <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
                        <img 
                          src={e.logo} 
                          alt={`${e.company} logo`} 
                          className="w-10 h-10 object-contain" 
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">{e.company}</h4>
                      <div className="text-primary font-medium text-sm md:text-base mb-1">{e.role}</div>
                      <div className="text-xs font-mono text-muted-foreground mb-4">
                        {e.period} · {e.location}
                      </div>
                      <ul className="space-y-3 text-sm text-muted-foreground font-light">
                        {e.points.map((pt, i) => (
                          <li
                            key={i}
                            className="relative pl-5 before:content-['-'] before:font-bold before:absolute before:left-0 before:text-primary before:text-lg before:-top-1"
                          >
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground/80 flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" /> Academics
              </h3>
              <div className="space-y-6">
                {[
                  {
                    y: "2024 – 2026",
                    t: "MTech, Data Science & Business Analytics",
                    s: "NMIMS University",
                    d: "CGPA 9.2/10",
                    logo: "/images/MTech_College_Logo.jpg",
                    coursework: [
                      "Machine Learning",
                      "Statistical Modelling",
                      "Business Analytics",
                      "Deep Learning",
                      "NLP",
                      "Big Data",
                      "Agentic AI",
                      "LLMs",
                      "Computer Vision",
                      "Re-Inforcement Learning",
                      "Artificial Intelligence"
                    ]
                  },
                  {
                    y: "2018 – 2022",
                    t: "BE, Civil Engineering",
                    s: "Thakur College of Engineering & Technology, University of Mumbai",
                    d: "CGPA 9.2/10",
                    logo: "/images/BE_Logo.jpg",
                    coursework: [
                      "Data Structures",
                      "Algorithms",
                      "Database Systems",
                      "Operating Systems",
                      "Computer Networks",
                      "Software Engineering"
                    ]
                  },
                ].map((ed) => (
                  <div
                    key={ed.t}
                    className="glass-panel p-6 rounded-2xl group hover:border-primary/40 transition-colors flex flex-col sm:flex-row gap-4"
                  >
                    {ed.logo && (
                      <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-card border border-border shadow-sm overflow-hidden">
                        <img 
                          src={ed.logo} 
                          alt={`${ed.s} logo`} 
                          className="w-10 h-10 object-contain" 
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="text-xs font-mono text-primary mb-2">{ed.y}</div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{ed.t}</h4>
                      <div className="text-sm font-medium text-foreground/70 mb-2">{ed.s}</div>
                      <div className="text-sm font-light text-muted-foreground">{ed.d}</div>
                      {ed.coursework && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {ed.coursework.map((course) => (
                            <span 
                              key={course} 
                              className="px-2.5 py-1 bg-primary/5 text-primary/90 border border-primary/20 rounded-md text-[11px] font-medium tracking-wide"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certifications" eyebrow="04. Verification" title="Certifications">
          {/* Tab switcher */}
          <div className="flex items-center gap-0 border-b border-border mb-10">
            {(["certs", "events"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setCertTab(tab)}
                className={`relative px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  certTab === tab
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "certs" ? "Certifications" : "Events / Hackathons"}
                {certTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* Certifications Tab */}
          {certTab === "certs" && (
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((c) => (
                <a
                  key={c.t}
                  href={c.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass-panel p-8 rounded-[1.5rem] flex flex-col justify-center transition-all duration-300 hover:shadow-[0_4px_20px_oklch(0_0_0_/_0.1)] hover:border-primary/30 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-semibold text-primary">{c.y}</div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-xl font-bold text-foreground mb-1.5">{c.t}</div>
                  <div className="text-sm text-muted-foreground font-medium">{c.s}</div>
                </a>
              ))}
            </div>
          )}

          {/* Events / Hackathons Tab */}
          {certTab === "events" && (
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((e) => (
                <div
                  key={e.title}
                  className="group glass-panel p-7 rounded-[1.5rem] flex flex-col gap-4 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
                >
                  {/* Top row: year + result badge */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-primary">{e.year}</span>
                    <span className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${e.resultColor}`}>
                      {e.result}
                    </span>
                  </div>

                  {/* Title + role */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-0.5">{e.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{e.organizer} · {e.role}</p>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-muted-foreground leading-relaxed border-t border-border pt-3">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* Publications */}
        <Section id="publications" eyebrow="05. Research" title="Publications & Research Papers">
          <div className="grid md:grid-cols-2 gap-5">
            {publications.map((p, idx) => (
              <a
                key={idx}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group relative bg-card border border-border rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_0_2px_oklch(0.65_0.22_250_/_0.15)] cursor-pointer"
              >
                {/* Top row: Publisher + External link */}
                <div className="flex items-start justify-between gap-3">
                  {p.publisher === "IEEE" ? (
                    <div className="flex items-center gap-1.5">
                      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2L4 11V29L20 38L36 29V11L20 2Z" fill="#006699" />
                        <path d="M20 8L9 14V26L20 32L31 26V14L20 8Z" fill="white" />
                        <path d="M20 14L14 17.5V24.5L20 28L26 24.5V17.5L20 14Z" fill="#006699" />
                      </svg>
                      <span className="text-[#006699] font-bold text-base tracking-wide">IEEE</span>
                    </div>
                  ) : (
                    <span className="text-[13px] font-bold text-muted-foreground border border-border rounded-full px-3 py-0.5 bg-background">
                      {p.publisher}
                    </span>
                  )}
                  <ExternalLink className="h-4 w-4 text-muted-foreground/50 group-hover:text-[#06b6d4] transition-colors shrink-0 mt-0.5" />
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>

                {/* Abbr · Year */}
                <p className="text-[13px] text-muted-foreground font-medium">
                  {p.abbr} &nbsp;·&nbsp; {p.year}
                </p>

                {/* Divider + Description revealed on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-[120px] transition-all duration-500 ease-in-out">
                  <div className="border-t border-[#e5e7eb] pt-4">
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="06. Execution" title="Selected Work">
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${activeCategory === cat ? "bg-[#3b82f6] text-white border border-[#3b82f6]" : "bg-transparent border border-border text-muted-foreground hover:border-[#3b82f6]/50 hover:text-foreground"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((p) => (
              <article
                key={p.title}
                className={`group glass-panel rounded-3xl overflow-hidden flex flex-col relative transition-all duration-500 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] ${p.featured ? "lg:col-span-2" : ""}`}
              >
                <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 md:p-10 flex flex-col flex-1 z-10">
                  {p.tag && (
                    <div className="flex items-center gap-2 text-xs font-mono text-primary mb-4 uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5" />
                      {p.tag}
                    </div>
                  )}
                  <h3
                    className={`font-bold mb-4 ${p.featured ? "text-3xl md:text-4xl" : "text-2xl"}`}
                  >
                    {p.title}
                  </h3>
                  {Array.isArray(p.desc) ? (
                    <ul className="text-muted-foreground font-light leading-relaxed flex-1 mb-8 space-y-2 list-none pl-0 text-sm md:text-base">
                      {p.desc.map((point, idx) => (
                        <li key={idx} className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-primary">
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground font-light leading-relaxed flex-1 mb-8">
                      {p.desc}
                    </p>
                  )}

                  {p.metrics && (
                    <div className="flex flex-wrap gap-3 mb-8">
                      {p.metrics.map((m) => (
                        <span
                          key={m}
                          className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-mono text-muted-foreground bg-background/50 px-2 py-1 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {(p.github || p.demo) && (
                      <div className="flex gap-4">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Achievements Ticker */}
        <section id="achievements" className="py-24 overflow-hidden">
          <style>{`
            @keyframes ticker-scroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ticker-track {
              display: flex;
              width: max-content;
              animation: ticker-scroll 28s linear infinite;
            }
            .ticker-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="max-w-7xl mx-auto px-6 mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">07. Recognition</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Achievements
            </h2>
          </div>

          <div className="relative">
            {/* fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

            <div className="ticker-track">
              {[
                { emoji: "🎓", label: "Selected", text: "Amazon ML Summer School Trainee Program 2025, chosen among 3,000+ applicants across India" },
                { emoji: "🏅", label: "Kaggle Expert", text: "Discussion Expert (2×) — ranked top 20% across 40+ competitions, won a Kaggle competition" },
                { emoji: "💼", label: "Delivered", text: "2 GenAI-based freelance projects via Upwork for international clients from Bangladesh and Singapore" },
                { emoji: "🏆", label: "Finalist", text: "L&T TechGium 2024 Hackathon — National-level engineering challenge" },
                // duplicated for seamless loop
                { emoji: "🎓", label: "Selected", text: "Amazon ML Summer School Trainee Program 2025, chosen among 3,000+ applicants across India" },
                { emoji: "🏅", label: "Kaggle Expert", text: "Discussion Expert (2×) — ranked top 20% across 40+ competitions, won a Kaggle competition" },
                { emoji: "💼", label: "Delivered", text: "2 GenAI-based freelance projects via Upwork for international clients from Bangladesh and Singapore" },
                { emoji: "🏆", label: "Finalist", text: "L&T TechGium 2024 Hackathon — National-level engineering challenge" },
              ].map((a, i) => (
                <div
                  key={i}
                  className="mx-4 shrink-0 w-[320px] bg-card border border-border rounded-2xl p-7 flex flex-col gap-3 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="text-3xl">{a.emoji}</div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest">{a.label}</div>
                  <p className="text-sm text-foreground font-medium leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <Section id="newsletter" eyebrow="07. Newsletter" title="The AI Architect">
          <div className="glass-panel rounded-3xl p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[80px] -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -z-10" />

            <div className="flex-1 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Mail className="h-4 w-4" /> Weekly updates
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Join 500+ builders learning to deploy AI.
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Every week I share practical tips on building agentic workflows, fine-tuning LLMs, and transitioning from notebooks to production pipelines. No fluff, just code and architecture.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-border border-2 border-background flex items-center justify-center text-xs">👤</div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Read by engineers at Amazon, L&T & more
                </div>
              </div>
            </div>

            <div className="w-full md:w-[400px] shrink-0 glass-panel bg-card/80 p-6 rounded-2xl border border-border shadow-lg">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks for subscribing! I'll be in touch soon.");
                  setNewsletterEmail("");
                }} 
                className="flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="shubham@example.com"
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Join the free tier. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="08. Connection" title="Initialize Contact">
          <div className="glass-panel rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[120px] rounded-full -z-10 group-hover:bg-primary/30 transition-colors duration-1000" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build the future.</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-10">
              Open for data science roles, AI engineering opportunities, and discussions about the
              next big thing.
            </p>

            <form onSubmit={handleFormSubmit} action="https://formsubmit.co/vishwakarmashubham.2503@gmail.com" method="POST" className="max-w-xl mx-auto text-left flex flex-col gap-4 mt-8 relative z-10">
              {/* Formsubmit config */}
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="w-full bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-border/50 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary/50 transition-colors" 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-border/50 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary/50 transition-colors" 
                />
              </div>
              <textarea 
                name="message" 
                placeholder="Your Message" 
                required 
                rows={4} 
                className="w-full bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-border/50 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              
              <button 
                type="submit" 
                disabled={formStatus === "submitting" || formStatus === "success"}
                className={`w-full font-bold rounded-2xl px-5 py-4 flex items-center justify-center gap-2 mt-2 transition-all ${
                  formStatus === "success" 
                    ? "bg-green-500 text-white" 
                    : formStatus === "error"
                    ? "bg-red-500 text-white"
                    : "bg-[#3b82f6] text-white hover:bg-[#2563eb] hover:shadow-lg"
                }`}
              >
                {formStatus === "idle" && (
                  <>Send Message <ArrowRight className="h-4 w-4" /></>
                )}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && "Message Sent Successfully!"}
                {formStatus === "error" && "Error sending. Try email instead."}
              </button>

              <div className="text-center mt-6 text-sm text-muted-foreground/80">
                or email directly at <a href="mailto:vishwakarmashubham.2503@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">vishwakarmashubham.2503@gmail.com</a>
              </div>
            </form>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {[
                { img: "/images/github.png", l: "GitHub", h: "https://github.com/ShubhamV2503" },
                { img: "/images/linkedin.png", l: "LinkedIn", h: "https://linkedin.com/in/shubhamv2503" },
                { img: "/images/kaggle_logo.png", l: "Kaggle", h: "https://www.kaggle.com/rayuga2503" },
                { img: "/images/LeetCode_logo.webp", l: "LeetCode", h: "https://leetcode.com/u/rayuga2503/" },
              ].map(({ img, l, h }) => (
                <a
                  key={l}
                  href={h}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-14 w-14 rounded-full glass-panel hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden p-2.5 bg-white/40 dark:bg-black/20"
                >
                  <img src={img} alt={l} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                  <span className="sr-only">{l}</span>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border/50 mt-32 relative">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <span>SYS.UPTIME: {new Date().getFullYear()} © Shubham Vishwakarma</span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" /> Crafted intelligently.
          </span>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 scroll-mt-24 relative">
      <div className="flex items-center gap-4 mb-12">
        <div className="text-sm font-mono tracking-widest text-primary">{eyebrow}</div>
        <div className="h-px bg-border/50 flex-1" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">{title}</h2>
      {children}
    </section>
  );
}
