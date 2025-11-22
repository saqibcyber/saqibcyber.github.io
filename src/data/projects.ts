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
    slug: "packet-tracer-toplogy",
    title: "Packet Tracer Topology",
    description: "Configured a multi-switch topology in Packet Tracer, validated network connectivity across hosts, and captured DNS traffic in Wireshark to understand name resolution and protocol behavior.",
    date: "2025-11-09",
    featured: true,
    content: `
  
  ![packet tracer topology](/packet-tracer.png)
  
  ## Overview

  This project focuses on designing and validating a functional multi-switch network topology in Cisco Packet Tracer. The lab involved configuring routers, switches, and workstations, then performing end-to-end connectivity testing to ensure proper addressing, routing, and communication flow across the environment.

  ## Setup

  I began by opening Cisco Packet Tracer and recreating the provided topology, which included a Cisco 2911 router, three Cisco 2960 switches, and six workstations. Before configuring devices, I reviewed key router and switch concepts to ensure consistent setup.

  I configured hostnames, secured privileged EXEC mode, and assigned IP addressing on the router. Each switch was prepared for management access by configuring VLAN 1 with an IP address, applying a default gateway, and enabling SSH for secure administration. After connecting all devices through their appropriate Ethernet interfaces, I verified that all physical and logical links were active within Packet Tracer.

  To validate the configuration, I performed a series of ping tests from PC1 to every other workstation. Snipping Tool was used to capture test results for documentation.

  ## Observations

  Every host responded successfully to ping requests, demonstrating correct device configuration, IP addressing, and gateway settings across the topology. The consistency of responses confirmed that routing and switching behavior aligned with expected network design principles.

  ## Reflection

  Completing this lab reinforced understanding of foundational networking concepts, including IP addressing, gateway configuration, VLAN management, and basic device hardening. Building the topology and validating connectivity helped strengthen practical troubleshooting skills and demonstrated how routers and switches work together to support communication within a local network.
  `
  },
  
  {
    slug: "itsm-environment-itop",
    title: "ITSM Environment in iTop",
    description: "Built a full ITSM environment in iTop including organizational design, configuration items, change management, and incident documentation within a Docker-hosted ITIL platform.",
    date: "2025-11-18",
    featured: true,
    content: `
  ![itop docker dashboard](/itop.png)

  ## Overview

  This project demonstrates the creation of a complete ITSM environment using iTop, deployed within a Docker container. The lab covers the full lifecycle of ITIL-aligned service management activities, including environment deployment, organizational modeling, configuration item creation, change request handling, and structured incident documentation. The goal was to gain hands-on experience with ITSM processes and understand how iTop supports real-world service management workflows.

  ## Environment Deployment

  To begin, I installed Windows Subsystem for Linux (WSL) and Docker Desktop as prerequisites. After confirming Docker was running, I deployed an iTop container using:

  \`docker run -d -p 800:80 --name itop-smaje4212 vbukin/itop\`

  I accessed the installation wizard through the browser and deployed the demo ITIL environment. During installation, a MariaDB authentication issue required updating the root password inside the container. After resolving this, the environment deployed successfully and I logged into the iTop interface to begin configuration.

  ## Organizational Structure and Documentation

  I created a full organizational hierarchy starting with the top-level entity Sentinel Security Inc. and added six internal departments beneath it. In the documentation module, I created two organizational documents, a mission statement and a vision statement, and linked them to Sentinel. This reinforced how high-level strategy and structure are represented within an ITSM platform.

  ## Configuration Items, Contacts, and Teams

  I verified the running container through \`docker ps -a\` before continuing with CI and contact creation. Inside iTop, I created three contacts and assigned each to the appropriate department.  
  I then created a team named Specialists and added all contacts to build a capability-based group.

  For configuration management, I created a workstation CI named SM4212-Workstation, populated ownership and organizational attributes, and linked it to my own contact. This section highlighted the ITIL distinction between:

  - Resources (hardware, individuals)  
  - Capabilities (skills, knowledge, and group expertise)

  The workstation functioned as a resource, while the Specialists team represented a capability.

  ## Change Request Management

  I created a dedicated user account (smajeed4212) and linked it to my contact with a technician profile. I then created a new CI, SM4212-NAS01, before submitting a Normal Change Request titled Upgrade Storage on SM4212-NAS01.

  The RFC included:
  - A 20TB storage upgrade plan  
  - A detailed implementation procedure  
  - A rollback and backout plan  
  - CAB considerations and risk notes  

  This reflected a normal change under ITIL classifications, as it was non-routine but not urgent or emergency-level.

  ## Incident Documentation

  I reviewed example incident formats before drafting a formal report in Word for incident I-000002. The report included SIEM alert details, affected systems, technician actions, and timestamps.

  In iTop, I recreated the incident with matching data and linked related CIs:
  - SM4212-SpongebobPC  
  - SM4212-DC  
  - SM4212-Splunk

  I added impact and urgency values, root cause analysis, troubleshooting notes, and a final resolution. A printer-friendly PDF was generated to validate completeness and formatting.

  ## Conclusion

  This project provided hands-on experience implementing ITIL processes within an ITSM platform. From environment deployment to organizational modeling, CI management, change handling, and incident documentation, each stage reinforced how structured service management supports operational stability and transparency. Building the ITSM environment in iTop demonstrated how real organizations track assets, manage changes, and document incidents in an industry-aligned system.
  `
  },

  {
    slug: "laptop-disassembly-reassembly",
    title: "Laptop Disassembly and Reassembly",
    description: "Performed a complete teardown and rebuild of a laptop to practice safe handling, documentation, and hardware troubleshooting within compact mobile systems.",
    date: "2025-10-17",
    featured: false,
    content: `
  
  ![laptop internal view](/laptop.png)

  ## Preparation
  
  The lab began by organizing a clean workspace and gathering a laptop repair kit containing precision screwdrivers and prying tools. After selecting a functional classroom laptop, the system was fully powered down to eliminate electrical risk. This ensured a safe starting point before any internal components were exposed.
  
  ## Disassembly
  
  Using the repair kit, the bottom cover was opened by removing the screws and carefully prying around the chassis. Once inside, the battery was identified and disconnected to further reduce electrical hazards. Additional internal components such as the storage drive, RAM module, and keyboard assembly were removed in a controlled sequence. Throughout the process, attention was placed on screw placement, cable routing, and safe handling to support accurate reassembly.
  
  ## Reassembly
  
  The laptop was reassembled by reversing the teardown steps. Each internal component was reattached securely, cables were reconnected, and the chassis was clipped and screwed back into place. After reassembly, the laptop powered on without issues, confirming that the system remained functional and the teardown was performed correctly.
  
  ## Conclusion
  
  This lab highlighted the differences between servicing laptops and traditional desktops, particularly the challenges introduced by compact form factors and non-removable components. Working within tighter constraints reinforced the need for careful planning, proper documentation, and hardware awareness in IT environments. The exercise strengthened practical troubleshooting skills and provided a clearer understanding of how mobile systems are designed and maintained.
  `
  },
  
  {
    slug: "windows10-system-administration",
    title: "Windows 10 System Administration",
    description: "Performed VM deployment, networking, RBAC, firewall management, Storage Spaces configuration, and PowerShell administration across two Windows 10 virtual machines.",
    date: "2025-10-06",
    featured: false,
    content: `
    
  ![vsphere dashboard](/vsphere.png)

  ## Overview

  This unified lab combines Windows 10 system administration, host configuration, and security hardening across two virtual machines. The exercise covers VM deployment, static IP addressing, connectivity testing, RBAC management, firewall rule modification, Storage Spaces provisioning, and PowerShell-based administration. Together, these tasks reinforce core operational skills and demonstrate how Windows administrators secure, configure, and verify systems in a virtual environment.

  ## Environment Setup

  I logged into the vSphere dashboard and deployed two Windows 10 virtual machines from the provided template. Each VM was provisioned with additional CPU and memory resources to ensure stable performance during configuration. After powering them on, both systems were assigned unique IPv4 addresses on the same subnet using \`ipconfig\`, and Remote Desktop was used for all administration. Documentation was captured using Snipping Tool and Krita.

  ## Network Configuration & Connectivity Testing

  To establish communication between the VMs, I configured static IPv4 addresses within the same subnet. Assigning \`10.171.35.10\` and \`10.171.35.20\` ensured consistent addressing and predictable network behavior. A ping test confirmed successful inter-VM connectivity with no packet loss, verifying that both systems were correctly placed on the virtual network.

  ## RBAC: User, Group & Access Control Configuration

  With networking confirmed, I created multiple local user accounts and security groups to apply RBAC concepts. Standard and administrative accounts were assigned strong passwords, and users were placed in appropriate groups such as Administrators and Remote Desktop Users.  
  Using PowerShell cmdlets—\`Get-LocalUser\`, \`Get-LocalGroup\`, and \`Get-LocalGroupMember\`—I verified that group memberships matched intended roles.  
  To confirm accurate access control, I initiated a Remote Desktop session from VM2 to VM1 using one of the newly created accounts, validating both credentials and group-based permissions.

  ## Windows Defender Firewall Rule Management

  After confirming normal communication, I restricted traffic by modifying Windows Defender Firewall rules. I located the ICMP rule under **File and Printer Sharing (Echo Request – ICMPv4-In)**, which controls inbound ping requests.  
  Selecting the rule associated with the correct network profiles (Private/Public and Domain), I modified it to block inbound ICMP traffic. A follow-up ping test from the second VM failed, confirming that the firewall rule successfully blocked echo requests and enforced host-level traffic controls.

  ## Storage Spaces Configuration

  To explore data resiliency and drive pooling, I attached additional virtual disks to the second VM and configured Windows Storage Spaces. I created a new storage pool and provisioned two redundancy-focused layouts: a mirrored (RAID-1) space for high availability and a parity (RAID-5) space for efficient redundancy. PowerShell verification confirmed successful creation and mounting of both volumes.

  ## PowerShell Administration & Execution Policies

  I updated PowerShell help files and configured the execution policy on both VMs to **RemoteSigned**, allowing locally created scripts to run while blocking untrusted external scripts. Commands such as \`Get-NetIPConfiguration\`, \`Get-NetRoute\`, and \`Get-ChildItem\` were used to inspect system details and network state, demonstrating how PowerShell provides efficient and scriptable administration capabilities.

  ## Reflection

  This combined lab provided end-to-end experience administering Windows 10 systems in a virtualized environment. Configuring networking, RBAC, firewall rules, and Storage Spaces reinforced how system administrators secure access, validate connectivity, and implement data resilience. Integrating PowerShell throughout the workflow demonstrated the importance of command-line automation in managing enterprise Windows environments. Together, these tasks strengthened my ability to configure, verify, and troubleshoot Windows systems using both GUI and command-line tools.
  `
  },

  {
    slug: "pc-disassembly-reassembly",
    title: "PC Disassembly and Reassembly",
    description: "Performed identity management, storage configuration, networking validation, and PowerShell-based administration across two Windows 10 VMs.",
    date: "2025-09-26",
    featured: false,
    content: `
  
  ![pc internal view](/pc.png)

  ## Preparation
  
  The lab began by organizing a clean, static-free workspace and gathering the necessary peripherals, including a monitor, keyboard, and power cables. Before opening the system, the PC was powered on and connected to a display to confirm it successfully reached the UEFI interface without errors. After validating system functionality, the machine was fully powered down and unplugged to ensure safe handling and prevent electrical hazards during disassembly.
  
  ## Disassembly
  
  The process started with an external inspection of the case, identifying front-panel controls, rear I/O ports, and the system’s serial information for documentation. Both side panels were removed to access internal components and wiring. Cables, drives, and installed hardware were carefully disconnected and taken out in a controlled sequence. Each step was performed with attention to cable routing, screw placement, and safe handling procedures to ensure all parts could be reinstalled accurately.
  
  ## Reassembly
  
  After the teardown, all internal components were reinstalled in reverse order. Cables were reconnected securely, panels were mounted back onto the case, and the system was reattached to its display and power. A final verification confirmed that the machine successfully booted back into BIOS, demonstrating that the system was reassembled correctly and remained fully functional.
  
  ## Conclusion
  
  This lab provided practical experience with PC teardown procedures, safe handling practices, and systematic reassembly. It reinforced the importance of documentation, attention to detail, and verification steps—skills that directly support troubleshooting and hardware maintenance in professional IT environments.
  `
  },
  
  {
  slug: "active-directory-homelab",
  title: "Active Directory Homelab with PowerShell Automation",
  description: "Built and hardened a Windows Server 2022 Active Directory environment with Group Policy, security baselines, and automated workstation debloating.",
  date: "2025-04-17",
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
  date: "2025-03-10",
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
  date: "2025-03-27",
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
