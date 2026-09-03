export const personalData = {
  name: "Dhani Putra Setiawan",
  firstName: "Dhani Putra",
  lastName: "Setiawan",
  shortName: "Dhani",
  greeting: "Hello, I'm",
  subtitle: "Internet Engineering Technology Student",
  degree: "D4 Internet Engineering Technology",
  heroDescription:
    "An Internet Engineering Technology student passionate about networking, Linux, cloud computing, web development, and modern IT infrastructure.",
  aboutText:
    "I am an Internet Engineering Technology student with a strong interest in networking, server infrastructure, cloud computing, and web applications. I am continuously developing my technical skills through hands-on projects, laboratory practices, and independent learning.",
  profileImage: "/images/profile-photo.jpg",
  location: "Indonesia",
  availableFor: "Internships & Projects",
  email: "dhaniputrasetiawan17@gmail.com",
  socials: {
    github: "https://github.com/DanEruma",
    linkedin: "https://www.linkedin.com/in/dhaniputrasetiawan17/",
    instagram: "https://www.instagram.com/dannptrs/",
    email: "mailto:dhaniputrasetiawan17@gmail.com"
  },
  socialHandles: {
    github: "@DanEruma",
    linkedin: "in/dhaniputrasetiawan17",
    instagram: "@dannptrs",
    email: "dhaniputrasetiawan17"
  },
  focusAreas: [
    {
      title: "Internet Engineering Technology",
      description: "Understanding how modern networks, servers, cloud infrastructure, and web applications work together seamlessly.",
      iconName: "Network"
    },
    {
      title: "Computer Networking",
      description: "Hands-on routing, switching, VLAN segmentation, and network protocol architecture (TCP/IP, OSPF).",
      iconName: "Router"
    },
    {
      title: "Linux Server",
      description: "Linux system administration, daemon service configurations, security hardening, and CLI automation.",
      iconName: "Terminal"
    },
    {
      title: "Windows Server",
      description: "Active Directory Domain Services, DNS/DHCP infrastructure, Hyper-V, and enterprise server roles.",
      iconName: "Server"
    },
    {
      title: "Basic Cloud Computing",
      description: "Cloud-based service deployment, virtual machine provisioning, VPC networking, and cloud storage.",
      iconName: "Cloud"
    },
    {
      title: "Web Development",
      description: "Crafting modern, responsive frontend applications and RESTful web interfaces with HTML, CSS, and JavaScript.",
      iconName: "Code2"
    }
  ]
};

export const heroFloatingTech = [
  {
    name: "Cisco",
    category: "Networking",
    iconType: "cisco",
    color: "#00bceb",
    bgColor: "#ffffff",
    textColor: "#005073",
    position: "top-left",
    customClass: "-top-3 left-4 md:-top-4 md:left-6 animate-float-1"
  },
  {
    name: "MikroTik",
    category: "Routing",
    iconType: "mikrotik",
    color: "#ffffff",
    bgColor: "#141b2d",
    textColor: "#ff7a59",
    position: "bottom-left",
    customClass: "bottom-12 -left-4 md:bottom-16 md:-left-8 animate-float-2"
  },
  {
    name: "Linux Server",
    category: "Server OS",
    iconType: "linux",
    color: "#fcc624",
    bgColor: "#ffffff",
    textColor: "#111827",
    position: "top-right",
    customClass: "top-6 -right-3 md:top-8 md:-right-6 animate-float-3"
  },
  {
    name: "Windows Server",
    category: "Enterprise OS",
    iconType: "windows",
    color: "#0078d4",
    bgColor: "#ffffff",
    textColor: "#0078d4",
    position: "mid-left",
    customClass: "top-1/2 -left-6 md:-left-12 -translate-y-1/2 animate-float-3"
  },
  {
    name: "Basic Cloud Computing",
    category: "Cloud",
    iconType: "cloud",
    color: "#38bdf8",
    bgColor: "#ffffff",
    textColor: "#0284c7",
    position: "bottom-right",
    customClass: "bottom-14 -right-4 md:bottom-20 md:-right-8 animate-float-1"
  },
  {
    name: "HTML",
    category: "Structure",
    iconType: "html",
    color: "#e34f26",
    bgColor: "#ffffff",
    textColor: "#e34f26",
    position: "top-mid",
    customClass: "-top-6 right-1/4 md:-top-8 md:right-1/3 animate-float-2"
  },
  {
    name: "CSS",
    category: "Styling",
    iconType: "css",
    color: "#1572b6",
    bgColor: "#ffffff",
    textColor: "#1572b6",
    position: "mid-right",
    customClass: "top-1/2 -right-6 md:-right-12 -translate-y-1/2 animate-float-2"
  },
  {
    name: "Git",
    category: "Version Control",
    iconType: "git",
    color: "#f05032",
    bgColor: "#ffffff",
    textColor: "#f05032",
    position: "bottom-mid",
    customClass: "-bottom-6 left-1/4 md:-bottom-8 md:left-1/3 animate-float-3"
  }
];

export const skillsData = [
  {
    id: "networking",
    name: "Computer Networking",
    category: "Networking",
    icon: "Network",
    level: "Advanced",
    percentage: 90,
    description: "Deep knowledge of OSI layers, TCP/IP stack, subnetting (VLSM/CIDR), routing protocols, and packet inspection.",
    tags: ["TCP/IP", "VLAN", "OSPF", "Routing & Switching", "Subnetting"]
  },
  {
    id: "cisco",
    name: "Cisco Packet Tracer",
    category: "Networking",
    icon: "Cpu",
    level: "Advanced",
    percentage: 88,
    description: "Designing, simulating, and troubleshooting multi-tier enterprise network topologies, inter-VLAN routing, and ACLs.",
    tags: ["CLI Configuration", "OSPF Area 0", "NAT/PAT", "DHCP Snooping", "Port Security"]
  },
  {
    id: "mikrotik",
    name: "MikroTik",
    category: "Networking",
    icon: "Radio",
    level: "Advanced",
    percentage: 88,
    description: "Configuring MikroTik RouterOS via WinBox & CLI, Bandwidth Queues (Simple & Tree), Firewall Filter/NAT rules, and Hotspot gateways.",
    tags: ["RouterOS", "WinBox", "QoS Queues", "Firewall Rules", "VPN & Hotspot"]
  },
  {
    id: "linux-server",
    name: "Linux Server",
    category: "Systems & Cloud",
    icon: "Terminal",
    level: "Advanced",
    percentage: 85,
    description: "Hands-on Linux system administration on Ubuntu/Debian, SSH hardening, systemd services, cron jobs, and Shell scripting.",
    tags: ["Ubuntu Server", "Bash Scripting", "Systemd", "SSH Keys", "Nginx"]
  },
  {
    id: "windows-server",
    name: "Windows Server",
    category: "Systems & Cloud",
    icon: "Server",
    level: "Advanced",
    percentage: 86,
    description: "Configuring Active Directory Domain Services (AD DS), DNS Server, DHCP scopes, Group Policy Objects (GPO), and Hyper-V.",
    tags: ["Active Directory", "Domain Controller", "DHCP & DNS", "GPO", "Hyper-V"]
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    category: "Systems & Cloud",
    icon: "Cloud",
    level: "Intermediate",
    percentage: 78,
    description: "Understanding cloud computing concepts, provisioning virtual machines, setting up Virtual Private Clouds (VPC), and deploying services.",
    tags: ["Virtual Machines", "VPC Networking", "Load Balancing", "Cloud Storage", "Docker"]
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    category: "Web Development",
    icon: "Layout",
    level: "Advanced",
    percentage: 90,
    description: "Crafting semantic, accessible HTML5 structures and building responsive, sleek layouts using modern CSS3 and Tailwind CSS.",
    tags: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Flexbox & Grid"]
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "Development Tools",
    icon: "GitBranch",
    level: "Advanced",
    percentage: 86,
    description: "Version control workflows, commit standards, branch management, merge conflict resolution, and GitHub collaboration.",
    tags: ["Git CLI", "GitHub", "Branching Workflow", "Pull Requests", "Repositories"]
  },
  {
    id: "database",
    name: "Database",
    category: "Systems & Cloud",
    icon: "Database",
    level: "Intermediate",
    percentage: 76,
    description: "Relational database modeling, schema normalization, writing SQL queries, joins, indexing, and basic data administration.",
    tags: ["MySQL", "PostgreSQL", "SQL Queries", "Schema Design", "CRUD"]
  },
  {
    id: "docker",
    name: "Docker",
    category: "Systems & Cloud",
    icon: "Boxes",
    level: "Intermediate",
    percentage: 78,
    description: "Building container images with Dockerfile, running isolated services, managing container networks, and orchestrating stacks using Docker Compose.",
    tags: ["Docker CLI", "Dockerfile", "Docker Compose", "Containers", "Microservices"]
  },
  {
    id: "ansible",
    name: "Ansible",
    category: "Systems & Cloud",
    icon: "Workflow",
    level: "Intermediate",
    percentage: 75,
    description: "Automating server configuration management, writing YAML playbooks, inventory management, and repeatable IT infrastructure automation.",
    tags: ["Ansible Playbooks", "YAML", "Automation", "Infrastructure as Code", "SSH"]
  }
];

export const projectsData = [
  {
    id: "lks-jatim-2025-windows-ad",
    title: "LKS ITNSA Provinsi Jawa Timur 2025: Windows Server & Active Directory",
    subtitle: "Enterprise AD DS, Certificate Authority, IIS & Ansible Automation",
    description: "Engineered an enterprise Windows Server 2022 infrastructure featuring Active Directory Domain Services (dc.itnsa.id), Certificate Authority, IIS Web & File Server (srv.itnsa.id), Routing/DHCP Gateway (fw.itnsa.id), and Linux Ansible Controller automation.",
    fullDescription:
      "A comprehensive enterprise Windows Server administration and automation project built for the LKS IT Network System Administration (ITNSA) Provinsi Jawa Timur 2025 competition. Implemented a full enterprise domain environment connecting a secure internal domain network (172.16.0.0/24) to a simulated external Internet network (192.1.1.0/24): • Domain Controller (dc.itnsa.id): Hosts Active Directory Domain Services (AD DS), Enterprise Certificate Authority (AD CS), and DNS for the itnsa.id domain. • Member Server (srv.itnsa.id): Delivers IIS Web Services with SSL certificate bindings and SMB File Server sharing with Group Policy access controls. • Firewall & Gateway (fw.itnsa.id): Multi-homed Windows Server handling DHCP address allocation and NAT Routing between internal LAN and external networks. • Client (workstation.itnsa.id): Domain-joined client workstation receiving DHCP IP and GPO policies. • Automation Controller (ansible-controller): Debian Linux server automating Windows Server management over WinRM. • Simulated Internet (INET): External server hosting public DNS and IIS web testing services.",
    image: "/images/projects/lks-jatim-2025-windows-ad.png",
    tags: ["LKS Jatim 2025", "Windows Server", "Active Directory", "Ansible", "IIS", "Certificate Authority"],
    category: "Systems & Cloud",
    featured: true,
    highlights: [
      "Active Directory Domain Services (AD DS), DNS, & Enterprise Certificate Authority (CA)",
      "IIS Web Server configuration with SSL certificates and secure File Sharing",
      "Multi-homed Gateway (fw.itnsa.id) with DHCP Server and NAT Routing",
      "Automated configuration management using Ansible Playbooks over WinRM"
    ],
    toolsUsed: ["Windows Server 2022", "Active Directory (AD DS)", "Ansible", "IIS Web Server", "AD Certificate Services", "Debian Linux"]
  },
  {
    id: "lks-jatim-2025-linux-dmz",
    title: "LKS ITNSA Provinsi Jawa Timur 2025: Linux Environment & DMZ",
    subtitle: "Multi-Zone Linux Server Infrastructure (INT & DMZ)",
    description: "Configured enterprise multi-tier Linux infrastructure featuring three-legged Firewall routing (fw), isolated Internal Services zone (int-srv), and public-facing DMZ housing Mail Server (mail) and Web Servers (web01, web02) accessible from client station (budi-clt).",
    fullDescription:
      "An enterprise Linux system administration and security project built for the LKS IT Network System Administration (ITNSA) Provinsi Jawa Timur 2025 competition. Designed around a three-tier network architecture separating public Internet, DMZ (Demilitarized Zone), and internal private LAN (INT): • Firewall (fw): Central gateway enforcing strict stateful packet inspection, NAT masquerading, and zone-based firewall filtering between Internet, DMZ, and INT. • DMZ Zone (mail, web01, web02): Secure public service enclave containing Postfix/Dovecot Mail Server and redundant Nginx/Apache Web Servers exposed to the Internet with hardened isolation. • INT Zone (int-srv): Protected private infrastructure hosting internal DNS (Bind9), database, and management services shielded from direct public access. • Client (budi-clt): External simulated workstation validating DNS resolution, email delivery, and secure HTTPS web transactions.",
    image: "/images/projects/lks-nganjuk-2025-linux-dmz.png",
    tags: ["LKS Jatim 2025", "ITNSA", "Linux Server", "DMZ", "Firewall", "INT Zone", "Security"],
    category: "Systems & Cloud",
    featured: false,
    highlights: [
      "Three-legged Firewall (fw) architecture with zone-based packet filtering",
      "DMZ isolation for public services: Mail Server (mail) & Web Servers (web01, web02)",
      "Protected Internal Zone (INT) for core internal infrastructure (int-srv)",
      "End-to-end client verification (budi-clt) for DNS, Mail, and Web connectivity"
    ],
    toolsUsed: ["Linux Server (Debian/Ubuntu)", "iptables / nftables", "Bind9 DNS", "Nginx / Apache", "Postfix / Dovecot", "VMware"]
  },
  {
    id: "lks-kab-nganjuk-2025-cisco",
    title: "LKS ITNSA Kabupaten 2025: Module 2 - Network Systems",
    subtitle: "Enterprise WAN & Multi-Site Infrastructure in Cisco Packet Tracer",
    description: "Designed and configured enterprise multi-site network infrastructure connecting Corporate Office, Regional Branches, ISP backbone, and Data Centers in Cisco Packet Tracer based on LKS ITNSA 2025 Module 2 specifications.",
    fullDescription:
      "An advanced enterprise networking project developed for LKS IT Network System Administration (ITNSA) Kabupaten 2025 - Module 2 (Network Systems). Built in Cisco Packet Tracer utilizing physical and logical topology workspaces to simulate a global enterprise WAN connecting Headquarters/Corporate Office, Data Center, ISP provider backbone, and branch offices. Features dynamic routing protocols, inter-VLAN routing with 802.1Q trunking, WAN leased-line emulation, NAT address translation, and strict Access Control Lists (ACLs) for end-to-end multi-site network security.",
    image: "/images/projects/lks-nganjuk-2025-cisco.png",
    tags: ["Cisco Packet Tracer", "LKS ITNSA 2025", "Enterprise WAN", "Routing & Switching", "Network Systems"],
    category: "Networking",
    featured: false,
    highlights: [
      "Multi-site physical and logical WAN architecture modeling",
      "Dynamic routing configuration across ISP, Corporate Office, and Data Center",
      "Inter-VLAN routing, trunking (802.1Q), and sub-interface policies",
      "Access Control Lists (ACLs) and perimeter network security enforcement"
    ],
    toolsUsed: ["Cisco Packet Tracer 8.2", "Cisco IOS CLI", "Enterprise Routers & Switches", "Physical Workspace"]
  },
  {
    id: "lksn-2025-itnsa",
    title: "LKSN 2025 IT Network System Administration",
    subtitle: "High Availability Server Infrastructure & VMware Lab",
    description: "Configured enterprise Linux infrastructure in VMware Workstation featuring a dedicated Firewall Gateway (fw-srv), Internal Services (int-srv), Mail Server (mail-srv), and High Availability Web Cluster (web-01 & web-02) orchestrated with Keepalived for client access (ani-client).",
    fullDescription:
      "An advanced IT Network System Administration (ITNSA) project based on the LKSN 2025 competition modules. Built in a virtualized VMware Workstation environment with 6 dedicated virtual machines: • fw-srv (Firewall Gateway): Acts as the perimeter security router connecting internal servers to the Internet and external client (ani-client). • int-srv (Internal Services): Provides core internal network services such as DNS, directory, and databases. • mail-srv (Mail Server): Dedicated SMTP/IMAP mail transfer agent and webmail service. • web-01 & web-02 (HA Web Cluster): High-availability load-balanced web servers synchronized and protected by Keepalived Virtual Router Redundancy Protocol (VRRP) with failover support. • ani-client: External client station used to test connectivity, SSL certificates, mail delivery, and web cluster failover.",
    image: "/images/projects/lksn-2025-topology.png",
    tags: ["LKSN 2025", "ITNSA", "Linux Server", "Keepalived", "Firewall", "VMware"],
    category: "Systems & Cloud",
    featured: false,
    highlights: [
      "Firewall Gateway (fw-srv) NAT routing, port forwarding, and packet filtering",
      "High Availability Web Cluster with Keepalived VRRP failover between web-01 & web-02",
      "Enterprise Mail Server (mail-srv) deployment with SMTP/IMAP protocol support",
      "Internal Services (int-srv) management and external testing from ani-client"
    ],
    toolsUsed: ["VMware Workstation", "Linux Server", "Keepalived", "Nginx/Apache", "Postfix/Dovecot", "iptables/nftables"]
  },
  {
    id: "cisco-network-simulation",
    title: "Network Simulation: DHCP, VLAN & Static Route",
    subtitle: "Cisco Packet Tracer Multi-Topology Lab",
    description: "Designed and simulated multi-segment computer network topologies using Cisco Packet Tracer, implementing DHCP Server automation, VLAN traffic segmentation, and inter-router Static Routing.",
    fullDescription:
      "A comprehensive multi-segment network topology simulation built in Cisco Packet Tracer. Features DHCP Server configuration for automatic host IP assignment, Virtual LAN (VLAN) segmentation for broadcast domain isolation, and Static Routing between routers to establish reliable, secure, and fully verified end-to-end network connectivity.",
    image: "/images/projects/cisco-topology-lab.png",
    tags: ["Cisco Packet Tracer", "DHCP", "VLAN", "Static Route"],
    category: "Networking",
    featured: false,
    highlights: [
      "Configured DHCP Server pools for automated client IP allocation",
      "Implemented VLAN segmentation and port security for traffic isolation",
      "Configured Static Routing tables for seamless inter-network communication",
      "Performed end-to-end ICMP ping and packet tracing verification across all subnets"
    ],
    toolsUsed: ["Cisco Packet Tracer", "Cisco IOS CLI", "Switch-PT & Router-PT"]
  }
];

export const experienceData = [
  {
    period: "2026 - Present",
    title: "D4 Internet Engineering Technology",
    institution: "Diploma IV (Applied Bachelor) — Internet Engineering Technology",
    description:
      "Studying internet engineering with a focus on networking, communication systems, digital systems, algorithms, web technology, Linux, and cloud computing.",
    status: "Active Student",
    achievements: [
      "Mastering enterprise computer networking, routing protocols, and OSI architecture",
      "Building practical hands-on labs with Cisco Packet Tracer and MikroTik RouterOS",
      "Configuring Linux servers, Windows Server environments, and shell scripting workflows",
      "Exploring modern cloud infrastructure, virtualization, and web development technologies"
    ],
    coursework: [
      "Computer Networks & Protocols",
      "Linux System Administration",
      "Windows Server Infrastructure",
      "Routing & Switching (Cisco/MikroTik)",
      "Cloud Computing & Virtualization",
      "Web Technologies & Application Development",
      "Digital Communication Systems",
      "Database Systems"
    ]
  },
  {
    period: "2023 - 2026",
    title: "Computer & Network Engineering (TJKT)",
    institution: "SMKN 1 Bagor",
    description:
      "Studied Computer and Telecommunication Network Engineering (Teknik Jaringan Komputer dan Telekomunikasi - TJKT) with extensive hands-on laboratory practice in networking, Cisco Packet Tracer simulations, MikroTik router configurations, Linux Server, Windows Server, and Docker containerization.",
    status: "Alumnus / Graduate",
    achievements: [
      "Designed and simulated multi-area network topologies using Cisco Packet Tracer",
      "Configured MikroTik routers for bandwidth management, firewall, and hotspot services",
      "Administered Linux Server and Windows Server operating systems and core services",
      "Deployed containerized application environments and microservices using Docker"
    ],
    coursework: [
      "Networking Fundamentals",
      "Cisco Packet Tracer",
      "MikroTik RouterOS",
      "Linux Server Administration",
      "Windows Server Infrastructure",
      "Docker Containerization",
      "Network Cabling & Fiber Optics",
      "Network Troubleshooting"
    ]
  }
];
