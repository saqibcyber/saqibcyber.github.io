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
  slug: "laptop-deployment-and-imaging",
  title: "Laptop Hardware Servicing and Windows Deployment Lifecycle",
  description: "Combined laptop disassembly and reassembly with enterprise-style Windows 10 deployment, driver injection, and disk imaging to simulate real-world endpoint provisioning and recovery workflows.",
  date: "2025-10-17",
  featured: true,
  content: `

![laptop internal view](/laptop.png)

## Overview

This project demonstrates a complete endpoint lifecycle commonly encountered in IT support and systems administration. It combines hands-on laptop hardware servicing with standardized Windows 10 deployment, driver integration, and full-disk imaging. The objective was to validate both physical system integrity and software readiness while following practices used in managed enterprise environments.

## Hardware Servicing and System Preparation

The lab began by preparing a clean workspace and assembling a laptop repair kit with precision tools. A functional classroom laptop was powered down and safely disassembled by removing the bottom cover and disconnecting the internal battery to eliminate electrical risk. Core components including the storage drive, RAM module, and keyboard assembly were removed in a controlled sequence, with careful attention to screw organization, cable routing, and component handling.

After inspection, the laptop was reassembled by reversing the teardown steps. All components were securely reinstalled, the chassis was closed, and the system powered on successfully, confirming correct reassembly and hardware functionality.

## Windows Image Customization and Deployment

With the hardware verified, a standardized Windows 10 deployment was prepared for a Dell Latitude E5450. An official Windows 10 ISO was downloaded using Microsoft’s Media Creation Tool to ensure a trusted base image. The Dell Windows 10 (64-bit) driver pack was retrieved from the vendor support site and validated using a SHA-256 hash check.

The driver package was extracted and injected into the Windows image after converting the \`install.esd\` file to a writable WIM format. PowerShell was used to identify the correct Windows 10 Pro index, mount the image, and add vendor drivers recursively before committing the changes.

A bootable USB installer was created and used to perform a clean Windows installation on the laptop. The Out-of-Box Experience was completed offline, and the system was verified to load correctly with full hardware support.

## Imaging and Validation

To enable system recovery and redeployment, Clonezilla was used to capture a full disk image of the installed system. The image was created with compression and integrity checks enabled and stored on external media. The process was validated by restoring a Clonezilla image and confirming a fully functional Windows environment after deployment.

## Result

This project reflects real-world IT workflows that span hardware servicing, operating system deployment, driver management, and system recovery. It reinforced safe handling of compact mobile hardware while providing practical experience with standardized Windows provisioning and disk imaging—core skills required in enterprise IT support, endpoint management, and technical operations roles.
  `
},

  {
    slug: "self-hosted-webapp",
    title: "Securing a Self-Hosted Public-Facing Web App",
    description: "Designed and secured a public-facing web application hosted from a Lenovo ThinkCentre Mini PC, emphasizing network segmentation, container security, and defense-in-depth for Internet-exposed services.",
    date: "2025-12-13",
    featured: true,
    content: `
  
  ![mini pc](/minipc.png)
  
  ## Overview

  This project documents the secure self-hosting of *Majaalis*, a public-facing web platform that serves as a curated repository of educational YouTube playlists. The application stores playlist links and structured metadata in a SQL database and presents them through a minimal web interface. The primary goal was to simulate a real-world production hosting environment from a home lab while applying cybersecurity best practices across the network, host, and and application layers.

  The platform is hosted on a dedicated Lenovo ThinkCentre Mini PC operating as an always-on application server. The system was selected for its enterprise-grade reliability, low power consumption, and suitability for continuous operation in a homelab setting.

  ## System Architecture and Stack

  The application stack is fully containerized to ensure isolation, repeatability, and simplified recovery. The web application and PostgreSQL database run in separate containers, with configuration and secrets managed through environment variables rather than hardcoded values. This approach reduces the blast radius of potential compromises and enables rapid redeployment if needed.

  Key components include:
  - A web application serving curated playlist content  
  - PostgreSQL for structured metadata storage  
  - Docker for service isolation and portability  

  ## Network Exposure and Security Design

  Because the application is publicly accessible, special care was taken to control how traffic enters the network. A reverse proxy is used to terminate TLS and route HTTPS traffic to the internal application container. Only the required ports are exposed through the firewall, and the database is strictly bound to internal interfaces to prevent direct access.

  An external edge proxy such as Cloudflare is placed in front of the service to hide the home IP address, provide TLS certificates, apply rate limiting, and offer basic protection against automated scanning and denial-of-service attempts.

  ## Segmentation and Host Hardening

  The ThinkCentre server is isolated within a dedicated server VLAN or DMZ to prevent lateral movement into the rest of the home network. This design mirrors enterprise DMZ architecture and ensures that a compromised web service cannot directly reach personal devices.

  Host-level security measures include:
  - A minimal Linux installation with automatic security updates  
  - SSH restricted to key-based authentication with root login disabled  
  - A host firewall limiting administrative access to trusted sources  

  Reducing the number of running services and tightening administrative access significantly lowers the system’s attack surface.

  ## Application Security, Monitoring, and Backups

  At the application layer, least-privilege principles are enforced by using restricted database roles and externalized secrets. HTTPS is enforced end-to-end, and input validation is handled within the application to reduce the risk of common web vulnerabilities.

  Operational visibility and abuse protection are provided through:
  - Reverse proxy access and error logging  
  - Rate limiting on public endpoints  
  - Brute-force protection using tools such as Fail2ban  
  - Traffic analytics and visibility via the edge proxy  

  To ensure resilience, scheduled PostgreSQL backups are taken and stored off-host. Because the entire environment is containerized, the application can be rebuilt quickly in the event of data loss, compromise, or hardware failure.

  ## Result

  This project demonstrates how a public-facing web application can be securely hosted from a home environment using enterprise-style security principles. It provided hands-on experience with network segmentation, host hardening, containerized workloads, and real-world threat considerations for Internet-exposed services. The resulting environment closely resembles how small organizations deploy and protect externally accessible applications while maintaining strong internal security boundaries.
  `
  },
  
  {
    slug: "automated-soc",
    title: "Fully Automated SOC with Splunk, Wazuh & TheHive",
    description: "A full end-to-end SOC lab environment demonstrating automated detection, case creation, enrichment, and response using open-source security tools and custom automation scripts.",
    date: "2025-11-24",
    featured: true,
    content: `

![splunk dashboard](/splunk.png)

## Overview
This project implements a streamlined SOC environment that simulates attacker activity, detects malicious behavior, generates cases, enriches indicators, and executes automated response actions. The lab integrates open-source security tools with Python and PowerShell automation to demonstrate a complete detection-to-response workflow.

## Environment Setup
The lab environment consists of five core components supporting telemetry collection, alerting, case management, and automated response:
- A Kali Linux attacker VM used to generate malicious activity.
- A Windows 10 endpoint with a Wazuh agent for event forwarding.
- A Wazuh server providing EDR, FIM, and log pipeline capabilities.
- A Splunk instance for log ingestion, correlation, and alert generation.
- TheHive for case management and orchestration workflows.
These components form a minimal SOC ecosystem capable of detecting threats and executing automated playbooks.

## Architecture
Telemetry from the Windows endpoint flows through Wazuh and is forwarded to Splunk for analysis. When Splunk correlation searches match attacker behavior, an alert triggers external automation that creates cases in TheHive, enriches observables, and performs response actions. Scripts interact with Wazuh, TheHive, and third-party intelligence APIs to support decision-making and automated containment.

## Automation Workflow
- Kali Linux initiates reconnaissance, brute-force activity, and malware simulations. Wazuh forwards endpoint events to Splunk, where a correlation search identifies suspicious behavior and generates an alert.  
- A Python script creates a TheHive case populated with artifacts from the alert. Additional automation enriches indicators using VirusTotal, AbuseIPDB, and Wazuh log queries, adding results to the case. 
- Response scripts isolate the Windows endpoint, terminate malicious processes, or disable compromised accounts.  
- Once steps are completed, a summary is logged automatically into TheHive and the case transitions to a resolved state.

The automation scripts are available [here](https://github.com/saqibcyber/socflow).

## Reflection
This lab demonstrates how individual SOC components—EDR, SIEM, case management, and automation—combine to form a cohesive detection and response pipeline. Automating enrichment and containment significantly reduces analyst workload and improves response speed, while the clean separation of detection, case handling, and remediation supports a scalable workflow suitable for real security operations.
  `
  },

  {
    slug: "packet-tracer-toplogy",
    title: "Packet Tracer Topology",
    description: "Configured a multi-switch topology in Packet Tracer, validated network connectivity across hosts, and captured DNS traffic in Wireshark to understand name resolution and protocol behavior.",
    date: "2025-11-09",
    featured: false,
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
    slug: "it-service-desk-lab",
    title: "IT Service Desk Environment with Jira Service Desk, iTop & MediaWiki (Docker)",
    description: "A containerized IT service desk environment integrating Jira Service Desk for ticketing, iTop for CMDB and ITIL workflows, and MediaWiki for knowledge documentation, supported by a simulated Windows 10 end-user system.",
    date: "2025-11-18",
    featured: true,
    content: `
  ![itop dashboard](/itop.png)

## Overview
This project creates a fully containerized IT service desk environment that mirrors how modern IT organizations manage service requests, track assets, and document troubleshooting knowledge. Jira Service Desk, iTop, and MediaWiki are deployed in Docker and integrated into a cohesive workflow supported by a simulated Windows 10 end-user system. A monitoring layer powered by Nagios provides proactive alerting, ensuring realistic service visibility.  
The lab demonstrates how ticketing, configuration management, knowledge sharing, and monitoring align under ITIL practices to support an efficient, transparent service desk operation.

## Key Components
- **Jira Service Desk:** The central ticketing and request-fulfillment platform where users report issues and IT staff manage service requests.  
- **iTop:** The CMDB and ITIL-aligned management system used to track IT assets, relate CIs to incidents and changes, and provide context for troubleshooting.  
- **MediaWiki:** The knowledge base where solutions, troubleshooting procedures, and internal documentation are recorded and maintained.  
- **Nagios:** The monitoring system that provides proactive visibility, automatically generating alerts that feed directly into the service desk to support early incident detection.  
- **Windows 10 Endpoint:** A realistic end-user system used to generate authentic support scenarios and validate the full workflow from issue to resolution.

## Environment Deployment
Each component of the environment was deployed using Docker to keep the setup modular and consistent. Jira Service Desk was configured as the central ticketing platform, with its web portal exposed for end-user access. iTop was deployed using the \`vbukin/itop\` container image and configured as the CMDB and ITIL workflow engine. MediaWiki was deployed in a separate container stack to host the internal knowledge base.  
Nagios was added to the environment as a monitoring system feeding alerts into the service desk. Once all containers were running, I verified connectivity and confirmed that each platform was reachable through a browser.

A standalone Windows 10 VM served as the end-user environment. Although not containerized, it played a key role in simulating real-world interactions, including accessing the Jira portal, experiencing user-facing issues, and viewing documented knowledge articles.

## User Workflow Simulation
To test the integrated environment, I simulated a common IT support scenario. A Windows 10 user experienced an issue such as internet connectivity failure or an inability to log in. After basic troubleshooting failed, the user navigated to the Jira Service Desk portal and submitted a ticket describing the issue.

Once the request reached the IT team, the technician accessed iTop to look up the user’s workstation CI. The CMDB provided detailed configuration, ownership, and dependency information that helped the technician narrow down potential causes.  
To ensure a consistent and documented process, the technician consulted MediaWiki for a troubleshooting article related to connectivity or login issues. The documented steps helped guide the resolution process, ensuring repeatability and alignment with best practices.

If the issue related to a system monitored by Nagios, the service desk could also see real-time alerts that helped correlate the user’s symptoms with active system conditions—further reducing diagnosis time.

## Resolution and Documentation
Using asset insights from iTop and step-by-step guidance from MediaWiki, the IT team resolved the issue and restored normal functionality to the user’s Windows 10 system. The technician updated the Jira ticket with the resolution steps, linked the affected asset from iTop, and referenced the Wiki documentation used during troubleshooting.

This created a complete record of the incident that connected user symptoms, configuration context, knowledge-driven procedures, and final remediation—all essential components of an ITIL-aligned support process.

## Reflection
Integrating Jira Service Desk, iTop, MediaWiki, and Nagios within a Docker-based environment provides a realistic demonstration of how modern IT service desks operate. The workflow shows how ticketing, CMDB data, knowledge documentation, and monitoring work together to support accurate, efficient, and repeatable IT support.  
The lab offers a practical understanding of ITIL principles and highlights how containerized environments can be used to simulate complete service desk ecosystems for training, portfolio projects, and operational practice.
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
  description: "Built and hardened a Windows Server 2022 Active Directory environment with Group Policy, security baselines, and automated workstation hardening.",
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
  slug: "home-network",
  title: "Home Network with pfSense, Snort, and Pi-Hole",
  description: "Designed and implemented a secure, segmented home network using pfSense, managed switches, Snort IDS/IPS, and a Raspberry Pi–based Pi-Hole and Unbound DNS stack.",
  date: "2025-03-27",
  featured: true,
  content: `

![home network](/network.png)

## Overview

This project builds an enterprise-style home network focused on security, segmentation, and observability. The environment uses pfSense as the core router and firewall, managed switches with VLANs, Snort for IDS/IPS, and a Raspberry Pi running Pi-Hole with Unbound for private, filtered DNS. Together, these components provide layered defense, better performance, and clearer visibility into network activity.

## Topology and Design

The network follows a star topology with pfSense at the center, connected to managed switches and mesh wireless access points.

- pfSense router: Core router, firewall, and VPN gateway  
- Managed switches: Expand wired connectivity and support VLAN segmentation  
- Wireless access points: Mesh configuration for consistent coverage  

Critical infrastructure such as pfSense, Pi-Hole, and core services use static IPs, while end-user devices rely on DHCP for simpler administration.

## pfSense and VLAN Segmentation

pfSense provides routing, firewalling, VPN, and traffic shaping for the entire network. Its open-source flexibility allows tuning beyond consumer-grade routers and supports features like granular rules, policy-based routing, and service monitoring.

A dedicated IoT VLAN isolates smart devices and untrusted endpoints from the main LAN, reducing attack surface and limiting lateral movement. Inter-switch links are configured as trunk ports to carry multiple VLANs, and Spanning Tree Protocol (STP) is enabled to prevent loops between switches.

## ISP Modem and DMZ

The ISP modem could not operate in true bridge mode, creating double NAT and breaking external-access services. To resolve this, the modem was configured with a DMZ pointing to the pfSense WAN address. This allows pfSense to effectively function as the edge router and manage all firewalling and routing.

## DNS and Privacy Layer with Pi-Hole and Unbound

![pihole dashboard](/pihole.png)

A Raspberry Pi runs Pi-Hole to provide network-wide DNS filtering and ad blocking. Raspberry Pi OS was installed, Pi-Hole was deployed via script, and a static IPv4 address was assigned to ensure consistent DNS availability.

Blocklists were curated to target malware and trackers while avoiding redundancy. Unbound was configured as a local recursive resolver behind Pi-Hole, allowing DNS queries to be resolved without third-party DNS providers. DNSSEC validation and recursive resolution improve privacy, integrity, and resilience.

To ensure all DNS traffic flowed through Pi-Hole:

- The Raspberry Pi was set as pfSense’s primary DNS server  
- Firewall and forwarding rules were adjusted  
- DNS queries were validated through Pi-Hole and Unbound  

## Snort IDS/IPS

![snort dashboard](/snort.png)

Snort was installed on pfSense via the Package Manager and linked to the LAN interface. Monitoring LAN traffic reduces alert noise and focuses detection on traffic actually reaching internal hosts.

Rule tuning included:

- Signature-based rules for high-risk services (HTTP, SMB)  
- Anomaly detection for unusual traffic behavior  
- ICMP and scan detection for identifying ping sweeps and port scans  
- Application-layer rules for HTTP and DNS threats  
- Thresholding to prevent alert fatigue  

## Conclusion

This project delivers a layered home network security architecture using pfSense, VLANs, Pi-Hole with Unbound, and Snort IDS/IPS. The result is a segmented, observable, and privacy-focused environment resembling an enterprise network on a smaller scale. Problems such as double NAT, switch loops, DNS routing issues, and IDS noise were resolved through careful design, resulting in a stable and high-performance security-focused home lab.
`
}

];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
