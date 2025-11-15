export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
  slug: "active-directory-hardening-guide",
  title: "Active Directory Hardening Guide",
  summary: "A practical, security-focused guide for hardening Active Directory against common attack vectors.",  
  date: "2025-04",
  content: `

## Overview

Active Directory (AD) is the core identity and access management system in most enterprise networks, making it a high-value target. A compromise often results in full domain takeover, so hardening AD is essential. This guide summarizes the most effective security practices to reduce attack surface, restrict privilege escalation, and defend against identity-based threats.

## Key Strategies

### Least Privilege

Limit accounts and systems to only the access they need. Create separate admin and user accounts, avoid shared credentials, apply role-based access using security groups, and use a Tiered Access Model (Tier 0–2) to isolate high-privilege operations. Regularly audit accounts for unused privileges, unusual logins, and privilege creep.

### Identity and Access Management (IAM)

Strengthen authentication and directory communication:

- Disable LAN Manager (LM) hash storage  
- Require SMB signing to prevent MiTM attacks  
- Require LDAP signing to block replay and injection attacks  
- Enforce strong password policies (10–14 characters, history, complexity)  
- Implement MFA for privileged accounts  
- Rotate sensitive passwords regularly or use Group Managed Service Accounts (gMSAs)

### Kerberoasting Defense

Kerberoasting targets service accounts with Service Principal Names (SPNs) by extracting and cracking Kerberos tickets offline. Reduce exposure by:

- Using long, complex service account passwords  
- Rotating passwords regularly or using gMSAs  
- Applying MFA where possible  
- Auditing accounts with SPNs and removing unnecessary ones  
- Monitoring for abnormal TGS requests and common Kerberoasting tools  

### Ongoing Monitoring

AD security is continuous. Review logs, track privilege changes, monitor authentication behavior, and re-audit controls regularly. Detecting unusual activity early greatly reduces risk.

## Conclusion

Hardening Active Directory protects the core of an organization’s identity infrastructure. Through least privilege, strong IAM practices, Kerberoasting mitigation, and continuous monitoring, organizations can significantly limit attack vectors and strengthen their overall security posture. AD security isn’t a single configuration—it’s a long-term defensive strategy that safeguards the entire network.
`
}
];

export const getLatestPosts = (limit = 3) => 
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);

export const getPostBySlug = (slug: string) => posts.find(p => p.slug === slug);
