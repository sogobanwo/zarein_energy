// All site copy and data in one place.
// Items in [square brackets] are placeholders awaiting figures from Zarein Energy.

export const site = {
  name: "Zarein Energy",
  legalName: "Zarein Energy Limited",
  tagline: "From wellhead to grid.",
  description:
    "Zarein Energy is an independent Nigerian power producer developing gas-to-power infrastructure for industrial, commercial and grid-scale users.",
  emails: { general: "info@zareinenergy.com", invest: "invest@zareinenergy.com" },
  phone: "[+234 phone number]",
  address: "[Street address], Lagos, Nigeria",
  city: "Lagos, Nigeria",
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export type NavKey = "home" | "about" | "projects" | "partners" | "sustainability" | "investors" | "news" | "contact";

export const nav: { key: NavKey; label: string; href: string }[] = [
  { key: "about", label: "About", href: "/about" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "partners", label: "Partners", href: "/partners" },
  { key: "sustainability", label: "Sustainability", href: "/sustainability" },
  { key: "investors", label: "Investors", href: "/investors" },
  { key: "news", label: "News", href: "/news" },
];

export const images = {
  homeHero: "/images/hero-refinery-sunset.jpg",
  substation: "/images/substation.jpg",
  refineryNight: "/images/refinery-night.jpg",
  refineryBw: "/images/refinery-bw.jpg",
  estate: "/images/estate.jpg",
  pylons: "/images/pylons.jpg",
  lagosBridge: "/images/lagos-bridge.jpg",
  engineer: "/images/engineer.jpg",
  technician: "/images/technician.jpg",
  contact: "/images/contact.jpg",
};

export const flame = "/logos/zarein-flame.png";

export type Partner = { name: string; role: string; logo?: string; wordmark?: boolean; width: number; height: number };

export const partners: Partner[] = [
  { name: "MWM / Caterpillar", role: "Power technology", logo: "/logos/mwm.png", width: 253, height: 133 },
  { name: "Clarke Energy", role: "Engineering partner", logo: "/logos/clarke-energy.png", width: 498, height: 74 },
  { name: "Hidier Power", role: "Energy solutions", wordmark: true, width: 0, height: 0 },
  { name: "Axxela", role: "Gas infrastructure", logo: "/logos/axxela.png", width: 203, height: 54 },
  { name: "Tetracore", role: "Strategic delivery", logo: "/logos/tetracore.png", width: 299, height: 87 },
  { name: "Ikeja Electric", role: "Distribution partner", logo: "/logos/ikeja-electric.png", width: 334, height: 240 },
  { name: "Federal Housing Authority", role: "Institutional partner", logo: "/logos/fha.png", width: 712, height: 175 },
];

export const keyFacts = [
  { label: "Flagship offtaker", value: "Ikeja Electric" },
  { label: "Estate partners", value: "UPDC + FHA" },
  { label: "Engine technology", value: "MWM Germany" },
  { label: "Headquarters", value: "Lagos, Nigeria" },
];

export const stages = [
  {
    num: "01",
    title: "Gas supply",
    tag: "The wellhead",
    body: "It starts with secure, long-term feed gas. We contract and manage supply so every downstream stage runs on a stable, predictable source.",
    facts: [
      { k: "Supply sources", v: "[Fields / suppliers]" },
      { k: "Contract tenor", v: "[Years]" },
    ],
  },
  {
    num: "02",
    title: "Processing",
    tag: "Kwale Gas Processing Plant",
    body: "Raw gas is treated and conditioned for power generation at our processing infrastructure, built for steady throughput and room to scale.",
    facts: [
      { k: "Processing capacity", v: "100 MMscfd" },
      { k: "Flagship asset", v: "Kwale, Delta State" },
    ],
  },
  {
    num: "03",
    title: "Generation",
    tag: "Amuwo Odofin IPP",
    body: "Gas engines on MWM Germany technology convert processed gas into embedded power, sited close to the demand they serve.",
    facts: [
      { k: "Engine technology", v: "MWM Germany" },
      { k: "Installed capacity", v: "[MW]" },
    ],
  },
  {
    num: "04",
    title: "Grid & customers",
    tag: "Offtake and estates",
    body: "Power reaches distribution networks and residential estates through long-term relationships with established partners.",
    facts: [
      { k: "Flagship offtaker", v: "Ikeja Electric" },
      { k: "Estate partners", v: "UPDC + FHA" },
    ],
  },
];

export type ProjectKind = "embedded" | "gas" | "estate";

export type Project = {
  slug: string;
  kind: ProjectKind;
  kindLabel: string;
  name: string;
  shortName: string;
  body: string;
  image: string;
  alt: string;
  capacity: string;
  location: string;
  status: string;
  partner: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "amuwo-odofin",
    kind: "embedded",
    kindLabel: "Embedded power",
    name: "Amuwo Odofin IMG Franchise IPP",
    shortName: "Amuwo Odofin IPP",
    body: "Our flagship embedded power project, supplying major distribution and commercial demand clusters with reliable, scalable electricity.",
    image: images.substation,
    alt: "Electrical substation lit at dusk",
    capacity: "[MW]",
    location: "Lagos",
    status: "[Status]",
    partner: "Ikeja Electric",
    featured: true,
  },
  {
    slug: "kwale",
    kind: "gas",
    kindLabel: "Gas infrastructure",
    name: "Kwale FTZ Gas Processing Plant",
    shortName: "Kwale Gas Processing Plant",
    body: "Gas infrastructure built for stable long-term supply, processing efficiency and scalable delivery for industrial growth.",
    image: images.refineryNight,
    alt: "Gas processing plant illuminated at night",
    capacity: "[MMscfd]",
    location: "Delta State",
    status: "[Status]",
    partner: "[Partner]",
    featured: true,
  },
  {
    slug: "updc",
    kind: "estate",
    kindLabel: "Estate power",
    name: "UPDC Residential Estate IPP",
    shortName: "UPDC Estate Embedded Power",
    body: "Estate-scale embedded power that improves reliability and power quality for residents.",
    image: images.estate,
    alt: "Residential estate street",
    capacity: "[MW]",
    location: "[Location]",
    status: "[Status]",
    partner: "UPDC",
    featured: true,
  },
  {
    slug: "fha-festac",
    kind: "estate",
    kindLabel: "Estate power",
    name: "FHA Festac Estate IPP",
    shortName: "FHA Festac Estate IPP",
    body: "Residential power infrastructure strengthening electricity reliability across the estate and supporting community growth.",
    image: images.pylons,
    alt: "Power transmission lines at sunset",
    capacity: "[MW]",
    location: "Festac, Lagos",
    status: "[Status]",
    partner: "FHA",
  },
  {
    slug: "fha-zuba",
    kind: "estate",
    kindLabel: "Estate power",
    name: "FHA Zuba Estate IPP",
    shortName: "FHA Zuba Estate IPP",
    body: "Embedded power systems giving growing residential communities dependable energy access.",
    image: images.engineer,
    alt: "Engineer on site at a gas facility",
    capacity: "[MW]",
    location: "Zuba, FCT",
    status: "[Status]",
    partner: "FHA",
  },
];

export const team = [
  { initials: "JR", name: "Jerry S. Raji", role: "Managing Partner", bio: "Project leader with multinational infrastructure and energy experience in strategic planning, stakeholder engagement and risk management." },
  { initials: "HM", name: "Haliru Momodu", role: "Finance", bio: "Banking and finance executive with 20+ years in corporate banking, project and infrastructure finance, private equity and deal structuring across Africa." },
  { initials: "DO", name: "Damilare Olayiwola", role: "Technical Consultant", bio: "Power systems professional with over a decade supporting and managing large-scale electricity and energy projects." },
  { initials: "AA", name: "Ayokunle Anifowose", role: "Human Resources", bio: "People operations across recruitment, engagement, performance management and organisational support." },
  { initials: "BO", name: "Bernard F. Olumoroti", role: "New Power Project Lead", bio: "Power project developer and Managing Director of Imperial Power and Energy Solutions (IPES)." },
];

export const foundations = [
  { title: "Structured project development", body: "Projects are scoped, sequenced and de-risked before capital is committed." },
  { title: "Bankable partnerships", body: "Offtake, technology and institutional partners that lenders and investors recognise." },
  { title: "Efficient generation technology", body: "Proven gas engine platforms chosen for reliability and fuel efficiency." },
  { title: "Operational excellence", body: "Long-term operation and maintenance focused on uptime and continuity of supply." },
];

export const strengths = [
  { title: "Leadership", body: "Strategic guidance across infrastructure development and execution." },
  { title: "Finance", body: "Structuring, funding strategy and governance." },
  { title: "Technical", body: "Power systems, equipment strategy, project delivery and operations support." },
  { title: "People", body: "Organisational support, performance alignment and team enablement." },
];

export const investmentHighlights = [
  { title: "Diversified portfolio", body: "Five projects across embedded power, gas processing and estate-scale generation." },
  { title: "Strong commercial positioning", body: "Offtake relationships with Ikeja Electric and institutional estate partners UPDC and FHA." },
  { title: "Institutional-grade structuring", body: "Development-finance-aligned structures, led by a team with 20+ years in project finance." },
  { title: "Proven technology", body: "Generation built on MWM / Caterpillar engines with Clarke Energy as engineering partner." },
];

export const investorDocs = ["[Company profile]", "[Portfolio overview]", "[ESG framework]", "[Governance statement]"];

export const commitments = [
  { title: "Cleaner power pathways", body: "A practical transition away from diesel and other higher-emission alternatives in high-demand settings." },
  { title: "Operational efficiency", body: "Structured energy systems, efficient generation assets and disciplined delivery that reduce waste while improving reliability." },
  { title: "Future readiness", body: "Infrastructure designed for long-term adaptability, supporting evolving ESG expectations, resilience and market needs." },
];

export const impactStats = [
  { value: "[X%]", label: "Lower emissions vs diesel generation" },
  { value: "[X]", label: "Diesel generators displaced" },
  { value: "[X]", label: "Households with reliable supply" },
  { value: "[X%]", label: "Plant availability" },
];

export const valueChainPartners = [
  { stage: "Gas", title: "Infrastructure", partners: "Axxela" },
  { stage: "Generation", title: "Technology", partners: "MWM / Caterpillar · Hidier Power" },
  { stage: "Delivery", title: "Engineering", partners: "Clarke Energy · Tetracore" },
  { stage: "Customers", title: "Offtake", partners: "Ikeja Electric · Federal Housing Authority" },
];

export type NewsCategory = "milestones" | "partnerships" | "market";

export const newsCategories: { key: NewsCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "milestones", label: "Project milestones" },
  { key: "partnerships", label: "Partnerships" },
  { key: "market", label: "Industry & market" },
];

export const newsItems: { category: NewsCategory; type: string; title: string; date: string; image: string }[] = [
  { category: "milestones", type: "Project milestone", title: "[Kwale FTZ gas plant progress update]", date: "[Date]", image: images.refineryNight },
  { category: "partnerships", type: "Partnership", title: "[New estate power agreement with FHA]", date: "[Date]", image: images.estate },
  { category: "market", type: "Market insight", title: "[Why embedded power is closing Nigeria’s supply gap]", date: "[Date]", image: images.pylons },
  { category: "milestones", type: "Project milestone", title: "[FHA Zuba Estate IPP breaks ground]", date: "[Date]", image: images.engineer },
  { category: "partnerships", type: "Partnership", title: "[Engineering partnership with Clarke Energy]", date: "[Date]", image: images.technician },
  { category: "market", type: "Market insight", title: "[Gas-to-power and the cost of diesel for Nigerian industry]", date: "[Date]", image: images.lagosBridge },
];

export const homeInsights = [
  { type: "Project update", title: "[Kwale processing plant milestone]", date: "[Date]" },
  { type: "News", title: "[Partnership announcement with UPDC + FHA]", date: "[Date]" },
  { type: "Perspective", title: "[Why embedded power is closing Nigeria’s supply gap]", date: "[Date]" },
];

export const contactTopics = [
  { label: "Partnership", email: site.emails.general },
  { label: "Investment", email: site.emails.invest },
  { label: "Power supply for my site", email: site.emails.general },
  { label: "General", email: site.emails.general },
];
