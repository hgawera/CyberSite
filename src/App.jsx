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
                    <span>&nbsp;PENETRATION TESTING &nbsp;◆&nbsp; THREAT INTELLIGENCE &nbsp;◆&nbsp; INCIDENT RESPONSE &nbsp;◆&nbsp; SECURE CODE REVIEW &nbsp;◆&nbsp;</span>
                    <span>&nbsp;PENETRATION TESTING &nbsp;◆&nbsp; THREAT INTELLIGENCE &nbsp;◆&nbsp; INCIDENT RESPONSE &nbsp;◆&nbsp; SECURE CODE REVIEW &nbsp;◆&nbsp;</span>
                </div>
            </div>
            {/* Bottom Border */}
            <div className="border-text border-bottom">
                <div className="marquee-content-reverse">
                    <span>PYTHON &nbsp;X&nbsp; BASH &nbsp;X&nbsp; METASPLOIT &nbsp;X&nbsp; WIRESHARK &nbsp;X&nbsp; NMAP &nbsp;X&nbsp; BURP SUITE &nbsp;X&nbsp;</span>
                    <span>PYTHON &nbsp;X&nbsp; BASH &nbsp;X&nbsp; METASPLOIT &nbsp;X&nbsp; WIRESHARK &nbsp;X&nbsp; NMAP &nbsp;X&nbsp; BURP SUITE &nbsp;X&nbsp;</span>
                </div>
            </div>
            {/* Left & Right Borders (Static) */}
            <div className="border-text border-left">
                <span>OSCP &nbsp;X&nbsp; CISSP &nbsp;X&nbsp; CEH &nbsp;X&nbsp; SECURITY+</span>
            </div>
            <div className="border-text border-right">
                <span>DEFENDING THE DIGITAL FRONTIER &nbsp;◇&nbsp; ALWAYS VIGILANT</span>
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
                    <p className="mb-4">I am a dedicated and results-oriented Cybersecurity Engineer with [X] years of experience in protecting enterprise systems and data from threats. My expertise lies in vulnerability assessment, penetration testing, and incident response.</p>
                    <p>I thrive on the challenge of staying one step ahead of malicious actors and am passionate about building secure and resilient digital environments. I believe in a proactive, defense-in-depth approach to security. This is placeholder text - feel free to replace it with your own bio!</p>
                </>
            )
        },
        projects: {
            title: "PROJECTS",
            content: (
                <>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Automated Phishing Detection System</h3>
                        <p className="text-sm text-gray-400 mb-2">Developed a system using Python and machine learning to analyze incoming emails for phishing indicators, achieving a 98% detection rate.</p>
                        <a href="#" className="text-[#00aaff] hover:underline">View on GitHub &rarr;</a>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Corporate Network Security Audit</h3>
                        <p className="text-sm text-gray-400 mb-2">Conducted a full-scale penetration test on a simulated corporate network, identified 15 critical vulnerabilities, and provided a comprehensive remediation report.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">CTF Challenge Write-ups</h3>
                        <p className="text-sm text-gray-400 mb-2">Regularly participate in Capture The Flag competitions. Authored detailed write-ups for challenges on platforms like Hack The Box and TryHackMe.</p>
                        <a href="#" className="text-[#00aaff] hover:underline">Read Write-ups &rarr;</a>
                    </div>
                </>
            )
        },
        skills: {
            title: "SKILLS & EXPERTISE",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Offensive Security</h3>
                        <ul className="list-disc list-inside">
                            <li>Penetration Testing (Web, Network)</li>
                            <li>Vulnerability Assessment</li>
                            <li>Social Engineering</li>
                            <li>Red Teaming</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Defensive Security</h3>
                        <ul className="list-disc list-inside">
                            <li>Incident Response & Forensics</li>
                            <li>SIEM (Splunk, ELK Stack)</li>
                            <li>IDS/IPS Configuration</li>
                            <li>Threat Hunting</li>
                        </ul>
                    </div>
                </div>
            )
        },
        contact: {
            title: "GET IN TOUCH",
            content: (
                 <ul className="space-y-3">
                    <li><strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-[#00aaff] hover:underline">your.email@example.com</a></li>
                    <li><strong>LinkedIn:</strong> <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#00aaff] hover:underline">linkedin.com/in/yourprofile</a></li>
                    <li><strong>GitHub:</strong> <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#00aaff] hover:underline">github.com/yourusername</a></li>
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
                    {/* The four grid items come first to lay out correctly */}
                    <div className="grid-item" onClick={() => setActiveModal('about')}>ABOUT</div>
                    <div className="grid-item" onClick={() => setActiveModal('projects')}>PROJECTS</div>
                    <div className="grid-item" onClick={() => setActiveModal('skills')}>SKILLS</div>
                    <div className="grid-item" onClick={() => setActiveModal('contact')}>CONTACT</div>

                    {/* The logo is last. Its 'position: absolute' will lift it out of the grid flow and overlay it in the center. */}
                    <div className="central-logo">
                        <span>HARNEET GAWERA</span>
                    </div>
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
