import React, { useState, useEffect } from 'react';

// Component for the animated text tickers on the borders
const BorderText = () => {
    // We can inject the keyframes animation directly into the document's head
    // This is a simple way to handle it in a self-contained component
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes marquee-left {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <>
            {/* Top Border */}
            <div className="border-text border-top">
                <div className="marquee-content">
                    <span>&nbsp;OSINT ANALYSIS &nbsp;◆&nbsp; CYBER THREAT INTELLIGENCE &nbsp;◆&nbsp; INCIDENT RESPONSE &nbsp;◆&nbsp; SECURE CODE REVIEW &nbsp;◆&nbsp; TTP PROFILING &nbsp;◆&nbsp; LOG ANALYSIS &nbsp;◆&nbsp; MALWARE INVESTIGATION &nbsp;◆&nbsp; FORENSICS REPORTING &nbsp;◆&nbsp; THREAT HURTING &nbsp;◆&nbsp; TRAINING &nbsp;◆&nbsp; PYTHON SCRIPTING &nbsp;◆&nbsp; CLOUD SECURITY &nbsp;◆&nbsp; FIREWALL MANAGEMENT</span>
                    <span>&nbsp;OSINT ANALYSIS &nbsp;◆&nbsp; CYBER THREAT INTELLIGENCE &nbsp;◆&nbsp; INCIDENT RESPONSE &nbsp;◆&nbsp; SECURE CODE REVIEW &nbsp;◆&nbsp; TTP PROFILING &nbsp;◆&nbsp; LOG ANALYSIS &nbsp;◆&nbsp; MALWARE INVESTIGATION &nbsp;◆&nbsp; FORENSICS REPORTING &nbsp;◆&nbsp; THREAT HURTING &nbsp;◆&nbsp; TRAINING &nbsp;◆&nbsp; PYTHON SCRIPTING &nbsp;◆&nbsp; CLOUD SECURITY &nbsp;◆&nbsp; FIREWALL MANAGEMENT</span>
                </div>
            </div>
            {/* Bottom Border */}
            <div className="border-text border-bottom">
                <div className="marquee-content-reverse">
                    <span>PYTHON &nbsp;X&nbsp; BASH &nbsp;X&nbsp; VIRUSTOTAL &nbsp;X&nbsp; WIRESHARK &nbsp;X&nbsp; NMAP &nbsp;X&nbsp; BURP SUITE &nbsp;X&nbsp; SPLUNK &nbsp;X&nbsp; PROOFPOINT &nbsp;X&nbsp; MICROSOFT DEFENDER &nbsp;X&nbsp; NESSUS &nbsp;X&nbsp; CROWDSTRIKE &nbsp;X&nbsp; CYBERARK &nbsp;X&nbsp; KALI &nbsp;X&nbsp; </span>
                    <span>PYTHON &nbsp;X&nbsp; BASH &nbsp;X&nbsp; VIRUSTOTAL &nbsp;X&nbsp; WIRESHARK &nbsp;X&nbsp; NMAP &nbsp;X&nbsp; BURP SUITE &nbsp;X&nbsp; SPLUNK &nbsp;X&nbsp; PROOFPOINT &nbsp;X&nbsp; MICROSOFT DEFENDER &nbsp;X&nbsp; NESSUS &nbsp;X&nbsp; CROWDSTRIKE &nbsp;X&nbsp; CYBERARK &nbsp;X&nbsp; KALI &nbsp;X&nbsp; </span>
                </div>
            </div>
            {/* Left & Right Borders (Static) */}
            <div className="border-text border-left">
                <span>SECURITY+ &nbsp;X&nbsp; CySA+ &nbsp;X&nbsp; ISC2 &nbsp;X&nbsp; CNSS </span>
            </div>
            <div className="border-text border-right">
                <span> SENIOR CYBER SECURITY ANALYST &nbsp;◇&nbsp; BARCLAYS </span>
            </div>
        </>
    );
};

// Component for the pop-up modals
const Modal = ({ id, title, children, activeModal, setActiveModal }) => {
    if (activeModal !== id) return null;

    const closeModal = () => {
        setActiveModal(null);
    };
    
    // This effect handles body scrolling when modal is open/closed
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div 
            className="modal-backdrop visible" 
            onClick={closeModal} // Close if backdrop is clicked
        >
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when content is clicked
            >
                <span className="modal-close" onClick={closeModal}>&times;</span>
                <h2 className="text-3xl font-bold mb-4 text-[#00aaff]">{title}</h2>
                {children}
            </div>
        </div>
    );
};

// Main App Component
export default function App() {
    // This state keeps track of which modal is currently open
    // 'null' means no modal is open.
    const [activeModal, setActiveModal] = useState(null);

    // Content for the modals - easy to edit here!
    const modalContent = {
        about: {
            title: "ABOUT ME",
            content: (
                <>
                    <p className="mb-4"> I’m Harneet Gawera, a cybersecurity professional with hands-on expertise in threat intelligence, incident response, and security operations. I currently work within the financial sector, where I help safeguard critical systems and infrastructure by bridging deep technical knowledge with real-world business needs. My experience spans the full lifecycle of incident response — from triage and containment to root cause analysis and recovery as well as managing SIEM platforms, performing threat hunting, and integrating threat intelligence into proactive defense strategies.</p>
                    <p> I’m skilled in scripting and automation using Python, PowerShell, and Bash, and I frequently work with cloud platforms such as AWS and Azure, to ensure secure configurations and continuous monitoring. In day-to-day operations, I use a wide range of tools including Splunk, Microsoft Defender, Tanium, and Proofpoint for monitoring and event correlation and platforms like Symantec, Shodan, and VirusTotal to enrich intelligence workflows. My technical toolkit also includes Nmap, Nessus, Wireshark, Burp Suite, and Kali Linux for vulnerability assessment and penetration testing.</p>
                    <p>Beyond the tools, my core strengths lie in critical thinking, rapid response under pressure, and translating cyber risks into actionable strategies. I’ve worked with identity and access management systems, developed use cases aligned to the MITRE ATT&CK framework. I thrive in high-stakes environments and am passionate about using cybersecurity not just as a defensive function, but as a business enabler that protects trust, continuity, and resilience in the digital age.</p>
                </>
            )
        },
        projects: {
            title: "PROJECTS",
            content: (
                <>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Python Cyber Course</h3>
                        <p className="text-sm text-gray-400 mb-2">Developed a system using Python to code tools such as packet sniffer, MAC address changer and much more.</p>
                        <a href="https://github.com/hgawera/PythonCyber" className="text-[#00aaff] hover:underline">View on GitHub &rarr;</a>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Java Game Development</h3>
                        <p className="text-sm text-gray-400 mb-2">Developed a simple game in Java</p>
                        <a href="https://github.com/hgawera/JavaGame" className="text-[#00aaff] hover:underline">View on GitHub &rarr;</a>
                    </div>
                </>
            )
        },
        skills: {
            title: "EXPERIENCE",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">BARCLAYS</h3>
                        <h4 className="text-xl font-bold mb-2">Senior Cyber Operations Analyst</h4>
                        <ul className="list-disc list-inside">
                            <li>Led daily threat monitoring, incident response, and proactive threat hunting using Splunk and CrowdStrike Falcon to detect anomalous behaviour and advanced threats. </li>
                            <li>Developed and maintained custom Splunk dashboards to enhance visibility, accelerate investigations, and support decision-making with real-time analytics. </li>
                            <li>Conducted threat hunts to uncover hidden risks, using findings to inform the implementation of new detection rules and the fine-tuning of existing controls across endpoints, email, and cloud infrastructure. </li>
                            <li>Managed email security through Proofpoint, responding to phishing incidents, adjusting policies, and improving filtering accuracy.</li>
                            <li>	Delivered technical training to junior analysts and new joiners, improving incident handling capabilities and alignment with operational standards.</li>
                            <li>Automated security workflows using Python and PowerShell, reducing manual overhead and enhancing response efficiency. </li>
                            <li>Ensured compliance with FCA and FED requirements, contributing to governance initiatives and audit readiness. </li>
                            <li>Worked closely with infrastructure and cloud teams to deploy and optimise security controls across Azure, AWS, and on-premise systems.</li>
                            <li>Produced comprehensive incident reports, threat analyses, and control effectiveness reviews to inform continuous improvement across the SOC. </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">Vulnerability and Patch Management Specialist</h4>
                        <ul className="list-disc list-inside">
                            <li>Led coordination and tracking of vulnerability remediation and patch management, ensuring timely resolution of high-risk findings across systems. </li>
                            <li>Supported planning and execution of penetration tests, analysing results and integrating fixes into patching workflows.</li>
                            <li>Ensured compliance with FCA and US FED regulatory requirements, aligning assurance activities with industry best practices. </li>
                            <li>Collaborated across security, IT, and business teams to assess risks, define control requirements, and drive remediation efforts. </li>
                            <li>Organised and led stakeholder workshops to resolve assurance issues, optimise tooling (e.g. scanning/reporting systems), and improve governance.</li>

                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">System Architeect</h4>
                        <ul className="list-disc list-inside">
                            <li>Refreshed and maintained annual business roadmaps, aligning strategic priorities across the organisation. </li>
                            <li>Acted as a central liaison between business units, technology teams, and senior stakeholders to ensure alignment and effective delivery of transformation goals. </li>
                            <li>Organised and facilitated meetings to resolve disputes on system architecture decisions (e.g. software libraries, platforms, engines), driving consensus on best-fit solutions. </li>
                            <li>Identified capability gaps and supported enterprise-wide planning through automation workshops, stakeholder engagement, and roadmap integration.</li>


                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">Project Manager</h4>
                        <ul className="list-disc list-inside">
                            <li>Delivered multiple projects within the Fraud Technology domain on time and within budget, leveraging structured planning, budget control, and proactive risk management in an Agile manner. </li>
                            <li>Championed a culture of continuous improvement by proactively identifying opportunities to streamline processes, automate workflows, and enhance efficiency across the project lifecycle.</li>
                            <li>Conducted post-implementation reviews to assess outcomes, extract lessons learned, and drive iterative enhancements for future projects. </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">Finance and Resourcing Intern</h4>
                        <ul className="list-disc list-inside">
                            <li>Supported balance sheet analysis and reporting, assisting in monitoring cost centres and tracking key financial metrics across business units</li>
                            <li>Contributed to headcount and resourcing planning, maintaining accurate data on team allocations and capacity forecasting</li>
                            <li>Collaborated with finance and operations teams to ensure alignment between budgets, forecasts, and workforce strategy</li>
                            <li>Gained hands-on experience with financial systems, internal reporting tools, and Excel-based modelling for resource optimisation</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">SPECSAVERS</h3>
                        <h4 className="text-xl font-bold mb-2">IT Technician</h4>
                        <ul className="list-disc list-inside">
                            <li>Delivered technical support for Linux-based systems, assisting optometrists in resolving access, configuration, and software-related issues.</li>
                            <li>Monitored and maintained system integrity across in-house Linux environments, whilst enhancing overall IT infrastructure.</li>
                            <li>Contributed to improving the organisation’s cyber posture by enhancing infrastructure resilience, enforcing access controls, and supporting endpoint security across clinical systems. </li>


                        </ul>
                    </div>
                    <div>
                    <h3 className="text-xl font-bold mb-2">KUMON</h3>
                        <h4 className="text-xl font-bold mb-2">Tutor</h4>
                        <ul className="list-disc list-inside">
                            <li>Supported students aged 5–16 in maths and English, providing tailored guidance to improve academic performance and independent learning skills</li>
                            <li>Marked and assessed work with attention to detail, tracking student progress and identifying areas needing reinforcement</li>
                            <li>Helped manage classroom operations, maintained a focused learning environment, and communicated effectively with parents and instructors</li>
                        </ul>
                    </div>
                    <div>
                    <h3 className="text-xl font-bold mb-2">METALITE-LTD</h3>
                        <h4 className="text-xl font-bold mb-2">IT Engineer and Admin</h4>
                        <ul className="list-disc list-inside">
                            <li>Organised and deployed secure IT infrastructure, setting up hardware (computers, peripherals, routers) and software systems, cloud backup solutions, productivity applications, and host-based firewalls, with a focus on network security, access control, and endpoint protection.</li>

                        </ul>
                    </div>
                    
                </div>
            )
        },
        contact: {
            title: "GET IN TOUCH",
            content: (
                 <ul className="space-y-3">
                    <li><strong>Email: </strong> <a href="mailto:harneetgawera@gmail.com" className="text-[#00aaff] hover:underline">Gmail</a></li>
                    <li><strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/harneet-gawera/" target="_blank" rel="noopener noreferrer" className="text-[#00aaff] hover:underline">Harneet Gawera</a></li>
                    <li><strong>GitHub: </strong> <a href="https://github.com/hgawera" target="_blank" rel="noopener noreferrer" className="text-[#00aaff] hover:underline">hgawera</a></li>
                    <li><strong>CV: </strong> <a 
                href="Harneet-Gawera-CV-Jul25.pdf"
                download
                className="inline-block bg-[#00aaff] text-black font-bold py-2 px-4 rounded-lg hover:bg-blue-300 transition-colors"
            >
                Download
            </a></li>
                </ul>
            )
        }
    };

    return (
        // This wrapper ensures the dark theme is applied correctly.
        <div className="portfolio-wrapper">
            <style>{`
                .portfolio-wrapper {
                    background-color: #0a0a0a;
                    color: #f0f0f0;
                    min-height: 100vh;
                }
                body {
                    font-family: 'Space Mono', monospace;
                    background-color: #0a0a0a; /* Fallback for body */
                    margin: 0;
                    padding: 0;
                }
                .main-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    width: 100%;
                    padding: 2.5rem;
                    box-sizing: border-box;
                    position: relative; /* This is the positioning context for the logo */
                }
                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    width: 100%;
                    max-width: 1200px;
                    aspect-ratio: 1.618 / 1;
                    border: 2px solid #f0f0f0;
                    position: relative;
                }
                .grid-item {
                    border: 1px solid #f0f0f0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 2.5rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background-color 0.3s, color 0.3s;
                    text-transform: uppercase;
                    text-align: center;
                }
                .grid-item:hover { background-color: #00aaff; color: #0a0a0a; }
                .central-logo {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: #00aaff;
                    color: #0a0a0a;
                    padding: 1rem 2rem;
                    border: 2px solid #f0f0f0;
                    z-index: 10;
                    font-family: 'Inter', sans-serif;
                    font-weight: 900;
                    font-size: 2rem;
                    text-align: center;
                    white-space: nowrap;
                    /* Ensure the logo doesn't intercept clicks meant for the grid */
                    pointer-events: none; 
                }
                .border-text {
                    position: fixed;
                    white-space: nowrap;
                    font-size: 0.9rem;
                    color: #a0a0a0;
                    text-transform: uppercase;
                    z-index: 20;
                    pointer-events: none;
                }
                .border-top { top: 0.5rem; left: 0; width: 100%; overflow: hidden; }
                .border-top .marquee-content { display: flex; width: fit-content; animation: marquee-left 40s linear infinite; }
                .border-top .marquee-content > span { padding-right: 2rem; }
                .border-bottom { bottom: 0.5rem; left: 0; width: 100%; overflow: hidden; }
                .border-bottom .marquee-content-reverse { display: flex; width: fit-content; animation: marquee-left 45s linear infinite reverse; }
                .border-bottom .marquee-content-reverse > span { padding-right: 2rem; }
                .border-left { top: 50%; left: 0.5rem; transform: translateY(-50%) rotate(-90deg); }
                .border-right { top: 50%; right: 0.5rem; transform: translateY(-50%) rotate(90deg); }
                .modal-backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); z-index: 40; display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: opacity 0.3s, visibility 0.3s; }
                .modal-backdrop.visible { opacity: 1; visibility: visible; }
                .modal-content { background-color: #111; color: #f0f0f0; border: 2px solid #00aaff; padding: 2rem; width: 90%; max-width: 800px; max-height: 80vh; overflow-y: auto; position: relative; font-family: 'Inter', sans-serif; transform: scale(0.95); transition: transform 0.3s; }
                .modal-backdrop.visible .modal-content { transform: scale(1); }
                .modal-close { position: absolute; top: 1rem; right: 1rem; font-size: 2rem; font-weight: bold; cursor: pointer; color: #f0f0f0; transition: color 0.3s; line-height: 1; }
                .modal-close:hover { color: #00aaff; }
                @media (max-width: 768px) {
                    .main-container { padding: 5rem 1rem 1rem 1rem; }
                    .content-grid { grid-template-columns: 1fr; grid-template-rows: repeat(4, 200px); aspect-ratio: auto; height: auto; }
                    .grid-item { font-size: 1.8rem; }
                    .central-logo { font-size: 1.2rem; padding: 0.75rem 1.5rem; width: 80%; }
                    .border-text { font-size: 0.7rem; }
                    .border-left, .border-right { display: none; }
                }
            `}</style>
            
            <BorderText />
            
            <div className="main-container">
                <div className="content-grid">
                    <div className="grid-item" onClick={() => setActiveModal('about')}>ABOUT</div>
                    <div className="grid-item" onClick={() => setActiveModal('projects')}>PROJECTS</div>
                    <div className="grid-item" onClick={() => setActiveModal('skills')}>EXPERIENCE</div>
                    <div className="grid-item" onClick={() => setActiveModal('contact')}>CONTACT</div>
                </div>
                {/* The logo is now a sibling of the grid, positioned absolutely on top */}
                <div className="central-logo">
                    <span>HARNEET GAWERA</span>
                </div>
            </div>

            {/* The Modals are rendered here. They only appear if 'activeModal' matches their id. */}
            <Modal id="about" title={modalContent.about.title} activeModal={activeModal} setActiveModal={setActiveModal}>
                {modalContent.about.content}
            </Modal>
            <Modal id="projects" title={modalContent.projects.title} activeModal={activeModal} setActiveModal={setActiveModal}>
                {modalContent.projects.content}
            </Modal>
            <Modal id="skills" title={modalContent.skills.title} activeModal={activeModal} setActiveModal={setActiveModal}>
                {modalContent.skills.content}
            </Modal>
            <Modal id="contact" title={modalContent.contact.title} activeModal={activeModal} setActiveModal={setActiveModal}>
                {modalContent.contact.content}
            </Modal>
        </div>
    );
}
