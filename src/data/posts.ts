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
  },

  {
    slug: "the-erosion-of-privacy",
    title: "The Erosion of Privacy",
    summary: "A look at how big data and state surveillance are accelerating the decline of personal privacy and weakening democratic freedoms. Explores corporate data exploitation, government monitoring, and practical steps to protect individual privacy.",
    date: "2025-02",
    content: `
## Overview
The rise of big data and state surveillance has enabled corporations and governments to collect, analyze, and exploit personal information at unprecedented scale. This shift threatens individual autonomy, increases manipulation, and erodes democratic freedoms.

## Key Takeaways
- Corporations and governments collect vast data that undermines privacy.
- Personal data is routinely harvested and monetized without true consent.
- State surveillance programs like PRISM expanded government monitoring.
- Security should not require sacrificing civil liberties.
- Privacy safeguards autonomy and democratic participation.
- Individuals must take active steps to protect their information.
- Defending privacy preserves trust and freedom.

## Big Data as a Currency
Big data encompasses the massive volumes of information generated through everyday digital activity. Corporations use this data to profile users, influence behavior, and optimize profit. Incidents such as the Cambridge Analytica scandal and large-scale platform breaches highlight how poorly this information is protected and how it can be weaponized for political manipulation or exploited by threat actors. Extensive data collection feeds algorithms that shape decisions and opinions, giving companies disproportionate influence over users.

## State Surveillance
Revelations from the Snowden leaks exposed widespread government surveillance of digital communications, including email, phone metadata, and internet traffic. Programs like PRISM accessed user data from major tech companies under national security claims. These initiatives expanded state power, enabling continuous monitoring that suppresses free speech and weakens democratic norms. Privacy and security are not mutually exclusive; safeguarding rights is essential to true national security.

## Why Privacy Matters
Without privacy, individuals become vulnerable to targeted propaganda, behavioral manipulation, and corporate or governmental overreach. Excessive data collection increases exposure to breaches and exploitation. Privacy also builds trust between citizens and institutions, enabling healthy engagement with technology and governance. Protecting personal information preserves autonomy, informed decision-making, and democratic integrity.

## Protecting Your Privacy
Understand how your data is collected and limit what you share online. Practice data minimization, regularly review account permissions, and avoid unnecessary disclosure. Read privacy policies, adjust platform settings, and stay aware of how digital services handle your information. Proactive habits help reduce exposure and maintain control over personal data.

## The Bottom Line
The erosion of privacy driven by big data and government surveillance poses a serious threat to personal freedom and democratic stability. As corporations profit from user data and states expand monitoring powers, individuals face growing risks of manipulation and exploitation. Protecting privacy is essential to preserving autonomy, trust, and the foundations of a free society.
`
  },

  {
    slug: "network-study-guide",
    title: "Network+ Study Guide",
    summary: "A concise guide to efficiently preparing for the CompTIA Network+ exam using structured study methods and active learning techniques. Covers resources, note-taking, flashcards, and practice testing.",
    date: "2025-01",
    content: `
## Overview
The CompTIA Network+ exam is a widely recognized entry-level certification. With the right strategy and consistent study habits, you can prepare effectively on any timeline.

## Key Takeaways
- Schedule the exam early to create urgency.
- Use a mix of video courses, notes, flashcards, and practice exams.
- Write concise notes in your own words.
- Use active recall with spaced repetition.
- Take practice exams to assess readiness.

## Book the Exam
Set an exam date as soon as possible to avoid procrastination. A deadline provides structure and reduces temporal discounting by keeping long-term goals in focus.

## Use the Right Resources
Combine multiple study formats for stronger retention. Recommended resources include the official exam objectives, free and paid courses, hands-on labs, and high-quality practice exams.

### Exam Outline
- CompTIA Network+ Objectives (free)

### Courses
- Professor Messer’s free YouTube course
- Jason Dion’s paid course
- Boson’s hands-on labs

### Practice Exams
- Jason Dion’s practice exams
- Boson’s exam set

## Master Effective Note-Taking
Write notes in your own words to strengthen understanding. Use course materials as guidance, not as your primary study source. Personalized notes promote active engagement and reduce shallow memorization.

## Use Active Recall
Create flashcards after each lesson to reinforce memory. Tools like Anki use spaced repetition to present information before you forget it, improving long-term retention.

## Don’t Skip Practice Exams
Practice exams simulate the real test and reveal weak areas. Many questions mirror the actual exam, making them an essential part of preparation.

## Prioritize Your Health
Sleep, nutrition, and mental well-being directly impact learning and recall. Maintain healthy habits throughout your study period.

## The Bottom Line
Set the date, study with purpose, and stay consistent. With active learning, strong notes, and practice exams, you can pass the Network+ certification. Believe in your ability, commit, and start studying.
`
  }
];

export const getLatestPosts = (limit = 3) =>
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);

export const getPostBySlug = (slug: string) => posts.find(p => p.slug === slug);
