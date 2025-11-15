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

A custom PowerShell script automated workstation debloating across domain-joined machines:

\`\`\`powershell
Invoke-Command -ComputerName $targets -ScriptBlock {
    Remove-AppxPackage "Microsoft.XboxApp"
    Disable-ScheduledTask -TaskName "XblGameSaveTask"
    # Additional debloat actions...
}
\`\`\`

The script removed unnecessary apps, disabled telemetry, and reduced the attack surface while improving performance. Automating these tasks ensured consistent configuration across the domain.

## Result

This project provided hands-on experience with enterprise-grade identity management, Group Policy administration, security hardening, and PowerShell automation. The environment functions as a realistic model of how organizations maintain scalable, secure, and centrally managed Windows infrastructures.
`
}
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
