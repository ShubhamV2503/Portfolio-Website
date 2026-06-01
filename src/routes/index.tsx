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
  { href: "#process", label: "Pipeline" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
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

const projects = [
  {
    featured: true,
    tag: "LTIMindtree · Enterprise AI",
    title: "Agentic AI Invoice Compliance",
    desc: "LangGraph-based multi-agent GenAI system orchestrating 3 specialized agents. Extracts compliance data from 5,000+ Italian invoices. Parallel voting architecture reduced end-to-end latency by 50% while hitting perfect recall.",
    metrics: ["100% Recall", "50% Latency Reduction", "Multi-Agent"],
    stack: ["LangGraph", "Python", "Gemini", "Neo4j"],
  },
  {
    title: "NeuroScan AI",
    desc: "4-layer encoder-decoder that removes Poisson & periodic noise from brain CT scans while preserving diagnostic features. Lifted classification accuracy to 87%. Deployed on AWS EC2.",
    stack: ["PyTorch", "CNN", "AWS EC2", "DICOM"],
    github: "https://github.com/ShubhamV2503/NeuroScanAI--CT-Scan-Image-Denoising",
    demo: "https://huggingface.co/spaces/rayuga2503/NeuroScanAI",
  },
  {
    title: "Gold Price Forecasting",
    desc: "Automated XAUUSD pipeline via Alpha Vantage. Airflow DAGs process 7 years of S3 records. Migrated from Prophet to SARIMAX cutting MAPE by 14.16%.",
    stack: ["Airflow", "SARIMAX", "S3", "Redshift"],
    github: "https://github.com/ShubhamV2503/Gold-Insight-Forecastor",
    demo: "https://huggingface.co/spaces/rayuga2503/gold-price-forecaster",
  },
  {
    title: "YouTube Q&A Agent",
    desc: "Conversational agent for contextual Q&A over transcripts. Built an ETL pipeline across 10+ APIs. Bloom Filter layer cut redundant queries by 30% and lifted relevance.",
    stack: ["LangChain", "Python", "GCP", "Redshift"],
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

function Index() {
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
          <a
            href="mailto:vishwakarmashubham.2503@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-primary/50"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Mail className="h-4 w-4" /> Connect
          </a>
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

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              First Solve The Problem <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
                Then Write The Code
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl font-light leading-relaxed mb-8">
              Hi, I'm <strong className="text-foreground font-medium">Shubham Vishwakarma</strong>,
              a Data Scientist & AI Engineer building multi-agent systems, generative AI, and
              real-world ML pipelines.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-1"
                style={{ background: "var(--gradient-primary)" }}
              >
                View Architecture <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/ShubhamV2503"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border glass-panel px-7 py-3.5 font-medium hover:border-primary/50 hover:text-primary transition-all"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-[500px] w-full max-w-md mx-auto group perspective-1000">
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

        {/* About */}
        <Section id="about" eyebrow="01. Identity" title="Who I am">
          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -z-10" />
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "NMIMS '26 MTech",
                "Data Scientist",
                "AI Engineer",
                "Kaggle Expert",
                "IEEE Author",
              ].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                I'm a Data Scientist with 2.3 years of experience from Mumbai, currently pursuing an{" "}
                <strong className="text-foreground font-medium">
                  MTech in Data Science & Business Analytics
                </strong>{" "}
                at NMIMS. I've worked across production-ready ML, computer vision pipelines, and
                Agentic AI systems at companies like{" "}
                <strong className="text-foreground font-medium">LTIMindtree, Pando Data</strong>,
                and <strong className="text-foreground font-medium">ITJOBXS</strong>.
              </p>
              <p>
                I'm fascinated by problems where data meets{" "}
                <strong className="text-foreground font-medium">real-world decision-making</strong>,
                and I love building systems that are not just accurate, but{" "}
                <strong className="text-foreground font-medium">explainable and impactful</strong>.
              </p>
              <p>
                Outside work, I stay plugged into the AI community — publishing{" "}
                <strong className="text-foreground font-medium">
                  peer-reviewed research in IEEE
                </strong>
                , sharing knowledge as a{" "}
                <strong className="text-foreground font-medium">Kaggle Discussion Expert</strong>,
                and upskilling through programs like the{" "}
                <strong className="text-foreground font-medium">Amazon ML Summer School</strong>.
                I've learned that the best ideas rarely come from staring at a screen alone. They
                come from{" "}
                <strong className="text-foreground font-medium">
                  collaboration, communities, and showing up
                </strong>{" "}
                even when no one's keeping score.
              </p>
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="02. Framework" title="My Pipeline. For Everything.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipeline.map((p) => (
              <div
                key={p.n}
                className="glass-panel rounded-2xl p-6 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm font-mono mb-4 text-primary font-bold">{p.n}.</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{p.t}</h3>
                <p className="text-sm text-muted-foreground mb-6 font-light">{p.d}</p>
                <p className="text-xs font-mono text-primary/70">{p.c}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills Bento Box */}
        {/* Skills */}
        <Section id="skills" eyebrow="03. Tech Stack" title="Core Technologies.">
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            A curated stack of tools and frameworks I use to engineer production-ready ML models, GenAI agents, and scalable data pipelines.
          </p>
          <div className="space-y-12">
            {skillGroups.map((g) => (
              <div key={g.title} className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2.5 h-2.5 rounded-full ${g.dotClass}`} />
                  <h3 className="text-lg font-bold text-foreground">{g.title}</h3>
                  <div className="h-[1px] flex-1 bg-border/50 ml-4" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {g.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <span
                        key={item.name}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${g.borderClass} ${g.bgClass} ${g.textClass} text-sm font-medium transition-all hover:-translate-y-0.5`}
                      >
                        <Icon className="h-4 w-4" />
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience & Education */}
        <Section id="experience" eyebrow="04. Timeline" title="Experience & Education">
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
                      <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-border shadow-sm overflow-hidden">
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
                    d: "GPA 9.2/10",
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
                    s: "Thakur College of Engineering & Technology",
                    d: "GPA 9.2/10 · Engineering foundations, computational analysis",
                    logo: "/images/BE_Logo.jpg",
                  },
                ].map((ed) => (
                  <div
                    key={ed.t}
                    className="glass-panel p-6 rounded-2xl group hover:border-primary/40 transition-colors flex flex-col sm:flex-row gap-4"
                  >
                    {ed.logo && (
                      <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-border shadow-sm overflow-hidden">
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

              <h3 className="text-xl font-semibold mt-12 mb-6 text-foreground/80">
                Certifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { y: "2024", t: "Google Adv. Data Analytics", s: "Coursera" },
                  { y: "2025", t: "Amazon ML Summer School", s: "Amazon" },
                  { y: "2023", t: "IBM Adv. Data Science", s: "IBM" },
                  { y: "2023", t: "AWS Cloud Practitioner", s: "AWS" },
                ].map((c) => (
                  <div key={c.t} className="glass-panel p-4 rounded-xl text-sm">
                    <div className="text-xs text-primary mb-1">{c.y}</div>
                    <div className="font-semibold">{c.t}</div>
                    <div className="text-xs text-muted-foreground mt-1">{c.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="05. Execution" title="Selected Work">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((p) => (
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
                  <p className="text-muted-foreground font-light leading-relaxed flex-1 mb-8">
                    {p.desc}
                  </p>

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

        {/* Contact */}
        <Section id="contact" eyebrow="06. Connection" title="Initialize Contact">
          <div className="glass-panel rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[120px] rounded-full -z-10 group-hover:bg-primary/30 transition-colors duration-1000" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build the future.</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-10">
              Open for data science roles, AI engineering opportunities, and discussions about the
              next big thing.
            </p>

            <a
              href="mailto:vishwakarmashubham.2503@gmail.com"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-transform"
            >
              <Mail className="h-8 w-8 text-primary" />
              vishwakarmashubham.2503@gmail.com
            </a>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {[
                { i: Github, l: "GitHub", h: "https://github.com/ShubhamV2503" },
                { i: Linkedin, l: "LinkedIn", h: "https://linkedin.com/in/shubhamv2503" },
                { i: Trophy, l: "Kaggle", h: "https://www.kaggle.com/shubhamv2503" },
                { i: Code2, l: "LeetCode", h: "https://leetcode.com/u/rayuga2503/" },
              ].map(({ i: Icon, l, h }) => (
                <a
                  key={l}
                  href={h}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full glass-panel text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5" />
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
