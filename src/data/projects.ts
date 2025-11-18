export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  featured: boolean;
  content: string;
}

export const projects: Project[] = [
  {
  slug: "active-directory-homelab",
  title: "Active Directory Homelab with PowerShell Automation",
  description: "Built and hardened a Windows Server 2022 Active Directory environment with Group Policy, security baselines, and automated workstation debloating.",
  date: "2025-04",
  featured: true,
  content: `

![active directory dashboard](/ad.png)

## Overview

Built a full Windows Server 2022 Active Directory environment designed to simulate real enterprise identity management. The project includes domain setup, Group Policy enforcement, security baselines, workstation automation, and centralized software deployment. The environment models how organizations control authentication, policy configuration, and system hardening at scale.

## Domain Setup

- Installed and promoted Windows Server 2022 to a domain controller  
- Configured a static IP and created a new AD forest and domain  
- Joined virtual machines and a physical workstation to replicate a multi-device network  
- Set up DNS forwarding to a Pi-Hole server for filtered resolution  

## Organizational Structure & Policy

- Created Organizational Units (OUs) for logical separation of users and devices  
- Applied Group Policy Objects (GPOs) for password policies, device restrictions, and standardized configuration  
- Used GPO to deploy common software (Firefox, LibreOffice, VLC, VSCode, Discord, 7-Zip, Python) across all workstations  

## Security Hardening

- Applied Microsoft Security Compliance Toolkit baselines  
- Enforced strong password rules and disabled LM hash storage  
- Required SMB signing and LDAP signing for secure communications  
- Implemented least privilege, role separation, and a tiered access model  
- Secured service accounts and minimized risky permissions to reduce lateral movement  

## Automation

To automate hardening across domain-joined machines, I built **[dirsentinel](https://github.com/saqibcyber/dirsentinel)**. This PowerShell tool validates privileged group membership, enforces Kerberos and NTLM policies, configures audit settings, and disables insecure protocols—all driven by a single JSON configuration file.

By automating these baseline controls, every environment rebuild began with a consistent, secured foundation suitable for identity-security testing and enterprise-grade simulations.

## Result

This project provided hands-on experience with enterprise-grade identity management, Group Policy administration, security hardening, and PowerShell automation. The environment functions as a realistic model of how organizations maintain scalable, secure, and centrally managed Windows infrastructures.
`
},

{
  slug: "pfsense-network-vlans",
  title: "pfSense Network & VLANs",
  description: "A secure, scalable home network built with pfSense, managed switches, VLAN segmentation, and enterprise-style design principles. The setup emphasizes performance, security, and structured network architecture.",
  date: "2025-03",
  featured: true,
  content: `

![home network](/network.png)

# Network Overview

## Topology
The network uses a star topology with pfSense as the central router, supported by managed switches and mesh Wi-Fi access points. This structure simplifies management, improves scalability, and maintains high-speed coverage.

- **pfSense Router:** Core router, firewall, and VPN gateway.
- **Managed Switches:** Interlinked switches expanding wired connectivity and segmentation.
- **Wireless APs:** Mesh configuration providing consistent wireless coverage.

## IP Scheme
Critical infrastructure uses static IPs, while general devices use DHCP for flexibility and easier administration.

# Network Infrastructure

## pfSense
pfSense provides granular control, strong security tooling, VPN support, traffic shaping, and monitoring. Its open-source flexibility enables performance tuning beyond consumer router capabilities.

## IoT VLAN
IoT devices are isolated in a dedicated VLAN, reducing attack surface and preventing lateral movement. This segmentation simplifies traffic control and monitoring.

# Challenges

## ISP Modem
The ISP modem could not run in bridge mode, causing double NAT and breaking external access services. A DMZ configuration was used to expose pfSense directly, allowing it to receive the public IP and manage all routing.

## Interlinked Switches
Loop risks between switches required enabling STP to prevent redundant paths. The inter-switch link was configured as a trunk port to carry multiple VLANs, ensuring stability and proper segmentation.

# Security Principles

## Secure by Design
Security is integrated from the start through pfSense, firewall rules, and VLAN-based segmentation.

## Separation of Duties
Routers, switches, and access points each handle distinct responsibilities, reducing single-point failures and improving manageability.

## Defense in Depth
Layers of protection include firewalling, VPN, mesh Wi-Fi security, and VLAN isolation, ensuring resilience even if one control is compromised.

# Conclusion
This project delivers a secure, scalable home network leveraging pfSense, VLANs, STP, and enterprise-style design principles. Challenges such as double NAT and switch loops were resolved with a DMZ setup and proper switch configuration, resulting in a stable, high-performance environment.
`
},

{
  slug: "snort-ids-ips-implementation",
  title: "Snort IDS/IPS Implementation",
  description: "A pfSense-based Snort IDS/IPS deployment providing real-time threat detection, traffic analysis, and active prevention while balancing accuracy and performance. The system protects against attacks by using tuned rules, reduced false positives, and optimized resource usage.",
  date: "2025-03",
  featured: true,
  content: `

![snort dashboard](/snort.png)

# Snort Overview
Snort is an open-source IDS/IPS that inspects network traffic in real time to detect and block malicious activity. It protects against threats such as malware, scanning, and unauthorized access while providing detailed logging for proactive response.

# Install
Snort was installed through pfSense’s Package Manager and configured on the LAN interface for focused monitoring of internal traffic. Monitoring LAN reduces unnecessary alerts compared to the WAN interface, where external scans and benign noise create excessive false positives.

# Configuring Rules
Snort was fine-tuned using targeted rule categories:

- **Signature rules:** Focus on high-risk services like HTTP and SMB to detect known attack patterns.
- **Anomaly rules:** Identify abnormal traffic behavior without generating excess alerts.
- **ICMP and scan detection:** Block DDoS attempts, ping sweeps, and port scans.
- **Application-layer rules:** Inspect HTTP and DNS traffic for threats like SQL injection or XSS.
- **Alert thresholds:** Log suspicious activity without overwhelming the system.

# Challenges

## False Positives
Default rules generated excessive noise. Narrowing the ruleset to high-risk services, creating pass lists for legitimate traffic, and adjusting thresholding significantly reduced false alerts while maintaining detection accuracy.

## Network Traffic Overhead
Real-time inspection initially strained pfSense resources. Limiting monitoring to the LAN interface and optimizing logging reduced overhead, resulting in manageable CPU and RAM usage with no noticeable impact on network performance.

# Conclusion
This Snort deployment strengthens network security through real-time detection and prevention, tuned rulesets, and careful performance optimization. Reducing false positives and minimizing overhead ensures balanced protection while maintaining smooth network operation.
`
},

{
  slug: "recursive-pi-hole-dns-server",
  title: "Recursive Pi-Hole DNS Server",
  description: "A Raspberry Pi–based recursive Pi-Hole deployment providing network-wide ad blocking, malicious domain filtering, and private DNS resolution through Unbound. The setup improves security, privacy, and performance across all devices.",
  date: "2025-03",
  featured: false,
  content: `

![pihole dashboard](/pihole.png)

# Pi-Hole Overview
Pi-Hole filters DNS requests to block ads, tracking domains, and malicious sites before they reach devices. This reduces attack surface, improves privacy by stopping third-party tracking, and enhances performance by eliminating unnecessary content.

# Install
Raspberry Pi OS was flashed onto a Pi and Pi-Hole installed via script. A static IPv4 address was assigned to ensure consistent DNS resolution and avoid disruptions.

# Blocklists
Blocklists were curated to target malware, ads, and trackers while minimizing redundancy. High-quality, frequently updated lists were chosen to reduce overhead and maintain efficient DNS performance.

# Unbound DNS
Unbound was configured as a recursive DNS resolver, enabling Pi-Hole to resolve queries locally without third-party DNS providers. With DNSSEC validation and recursive resolution, the setup improves privacy, integrity, and speed.

# Challenges

## pfSense Setup
pfSense initially relied on external DNS servers, requiring configuration adjustments to route DNS queries to Pi-Hole and Unbound. The Raspberry Pi was set as the primary DNS server, with correct forwarding and firewall rules ensuring proper communication.

## Increased Overhead
Strict blocklists created redundancy and added latency. The solution was selecting targeted, non-overlapping lists focused on malware, ads, and trackers, maintaining strong protection without degrading performance.

# Conclusion
This project implements a secure, privacy-focused DNS infrastructure using Pi-Hole and Unbound on a Raspberry Pi. By optimizing blocklists, resolving pfSense routing challenges, and adopting recursive resolution, the network gains resilient DNS filtering, reduced tracking, and faster, safer browsing.
`
}
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
