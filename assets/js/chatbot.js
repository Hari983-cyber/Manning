function openChat() {
    document.getElementById("chatbot").classList.add("show");
}

function closeChat() {
    document.getElementById("chatbot").classList.remove("show");
}
document.querySelector(".chat-icon").style.display = "block";

function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");
    const userText = input.value.trim();

    if (userText === "") return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerText = userText;
    chatBody.appendChild(userMsg);

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Bot reply
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "message bot";

        const text = userText.toLowerCase();

        /* ===== GREETINGS ===== */
        if (
            text.includes("hi") ||
            text.includes("hello") ||
            text.includes("hey")
        ) {
            botMsg.innerText =
                "Hello 👋 Welcome to Manning Consulting. How can I assist you today?";

            /* ===== ABOUT COMPANY ===== */
        } else if (
            text.includes("about") ||
            text.includes("company") ||
            text.includes("manning")
        ) {
            botMsg.innerText =
                "Manning Consulting is a New Delhi–based Executive Search firm with 18+ years of experience, specializing in leadership and niche hiring.";

            /* ===== EXPERIENCE ===== */
        } else if (
            text.includes("experience") ||
            text.includes("years") ||
            text.includes("how long")
        ) {
            botMsg.innerText =
                "We bring over 18+ years of experience in executive search and recruitment.";

            /* ===== SERVICES ===== */
        } else if (
            text.includes("services") ||
            text.includes("what do you do") ||
            text.includes("provide")
        ) {
            botMsg.innerText =
                "We provide Telecom Consulting, Niche Volume Hiring (IT/ITES), Inside Sales Enablement, Consulting & Audit Services, SAAS Solutions, Digital, Robotics & Automation, Banking & Financial Services, Analytics & Machine Learning, and Healthcare & Life Sciences Consulting.For more details, you can contact us.";

            /* ===== TELECOM CONSULTING ===== */
        } else if (text.includes("telecom")) {
            botMsg.innerText =
                "We offer Telecom Consulting services tailored to evolving technology and business needs. For more details, you can contact us.";

            /* ===== NICHE / VOLUME HIRING ===== */
        } else if (
            text.includes("volume hiring") ||
            text.includes("niche hiring") ||
            text.includes("it hiring") ||
            text.includes("ites")
        ) {
            botMsg.innerText =
                "We specialize in Niche and Volume Hiring for IT and ITES roles, ensuring quality talent delivery at scale. For more details, you can contact us.";

            /* ===== INSIDE SALES ===== */
        } else if (
            text.includes("inside sales") ||
            text.includes("sales enablement")
        ) {
            botMsg.innerText =
                "Our Inside Sales Enablement services help organizations build high-performing sales teams. For more details, you can contact us.";

            /* ===== CONSULTING & AUDIT ===== */
        } else if (text.includes("consulting") || text.includes("audit")) {
            botMsg.innerText =
                "We provide Consulting and Audit Services to help organizations improve efficiency and compliance. For more details, you can contact us.";

            /* ===== SAAS ===== */
        } else if (
            text.includes("saas") ||
            text.includes("software as a service")
        ) {
            botMsg.innerText =
                "We support organizations with SAAS Solutions hiring and consulting across various platforms. For more details, you can contact us.";

            /* ===== DIGITAL / ROBOTICS / AUTOMATION ===== */
        } else if (
            text.includes("digital") ||
            text.includes("robotics") ||
            text.includes("automation") ||
            text.includes("rpa")
        ) {
            botMsg.innerText =
                "We provide Digital, Robotics, and Automation hiring solutions including RPA and AI-driven roles. For more details, you can contact us.";

            /* ===== BANKING / INSURANCE / FINANCE ===== */
        } else if (
            text.includes("banking") ||
            text.includes("insurance") ||
            text.includes("financial services")
        ) {
            botMsg.innerText =
                "We offer specialized hiring and consulting for Banking, Insurance, and Financial Services domains. For more details, you can contact us.";

            /* ===== ANALYTICS / ML / RESEARCH ===== */
        } else if (
            text.includes("analytics") ||
            text.includes("machine learning") ||
            text.includes("ml") ||
            text.includes("research")
        ) {
            botMsg.innerText =
                "We support Analytics, Machine Learning, and Research roles, helping organizations build data-driven teams. For more details, you can contact us.";

            /* ===== HEALTHCARE ===== */
        } else if (
            text.includes("healthcare") ||
            text.includes("life sciences") ||
            text.includes("health care")
        ) {
            botMsg.innerText =
                "We provide Healthcare and Life Sciences Consulting with domain-focused recruitment expertise. For more details, you can contact us.";

            /* ===== RECRUITMENT PROCESS ===== */
        } else if (
            text.includes("recruitment process") ||
            text.includes("hiring process")
        ) {
            botMsg.innerText =
                "Our recruitment process includes talent mapping, sourcing, screening, assessment, offer management, and onboarding. For more details, you can contact us.";

            /* ===== RPO ===== */
        } else if (
            text.includes("rpo") ||
            text.includes("outsourcing") ||
            text.includes("offer")
        ) {
            botMsg.innerText =
                "We offer Executive Search, Recruitment Process Outsourcing (RPO), Talent Mapping, Screening, Assessment, and AI-driven hiring solutions with delivery timelines of 24–48 hours.. For more details, you can contact us.";

            /* ===== AI / AUTOMATION ===== */
        } else if (
            text.includes("ai") ||
            text.includes("automation") ||
            text.includes("rpa") ||
            text.includes("gen ai")
        ) {
            botMsg.innerText =
                "We specialize in AI and automation hiring, including Gen AI, UiPath, Power Automate, Automation Anywhere, and frontend AI roles. For more details, you can contact us.";

            /* ===== TECHNOLOGY SKILLS ===== */
        } else if (
            text.includes("technology") ||
            text.includes("tech stack") ||
            text.includes("skills")
        ) {
            botMsg.innerText =
                "We hire for technologies like Python, Node.js, .NET, SQL, Power Automate, Angular, HTML, CSS, and JavaScript.";

            /* ===== DOMAINS ===== */
        } else if (
            text.includes("domain") ||
            text.includes("industry") ||
            text.includes("sector")
        ) {
            botMsg.innerText =
                "Our hiring expertise spans Analytics, Investment & Business Research, Digital Automation, Robotics, Foreign Language Consulting, and AI technologies.";

            /* ===== CLIENTS ===== */
        } else if (
            text.includes("clients") ||
            text.includes("companies") ||
            text.includes("partners")
        ) {
            botMsg.innerText =
                "We have worked with top organizations such as Infosys, Accenture, Cognizant, KPMG, Amazon, American Express, and Wipro.";

            /* ===== TEAM ===== */
        } else if (
            text.includes("team") ||
            text.includes("recruiters") ||
            text.includes("consultants") ||
            text.includes("leadership")
        ) {
            botMsg.innerText =
                "Our team consists of 60+ experienced recruitment specialists and client managers across PAN India. Amandeep Sharma is the Business Head – Leadership Hiring at Manning Consulting. He is a senior management professional with strong expertise in business growth, strategic planning, and operations management. Anupriya Sharmaa is the Business Head – Front Line / Volume Hiring. She is an experienced managing partner with a strong background in management consulting.";
        } else if (
            text.includes("ceo") ||
            text.includes("management") ||
            text.includes("authority") ||
            text.includes("people") ||
            text.includes("amandeep") ||
            text.includes("head") ||
            text.includes("anupriya") ||
            text.includes("founder")
        ) {
            botMsg.innerText =
                "Amandeep Sharma is the Business Head – Leadership Hiring at Manning Consulting. He is a senior management professional with strong expertise in business growth, strategic planning, and operations management. Anupriya Sharmaa is the Business Head – Front Line / Volume Hiring. She is an experienced managing partner with a strong background in management consulting.";

            /* ===== LOCATION ===== */
        } else if (
            text.includes("location") ||
            text.includes("office") ||
            text.includes("where are you") ||
            text.includes("address") ||
            text.includes("located") ||
            text.includes("based")
        ) {
            botMsg.innerText =
                "Our India office is located in New Delhi, and we also operate from London, United Kingdom.";

            /* ===== CONTACT ===== */
        } else if (
            text.includes("contact") ||
            text.includes("phone") ||
            text.includes("email") ||
            text.includes("reach") ||
            text.includes("support") ||
            text.includes("call") ||
            text.includes("number")
        ) {
            botMsg.innerText =
                "You can contact us at +91-9811222637 or email info@manningconsulting.in.";

            /* ===== THANK YOU / BYE ===== */
        } else if (
            text.includes("thank") ||
            text.includes("thanks") ||
            text.includes("bye")
        ) {
            botMsg.innerText =
                "Thank you for contacting Manning Consulting 😊 We look forward to assisting you.";

            /* ===== DEFAULT ===== */
        } else {
            botMsg.innerText =
                "Sorry, I couldn’t understand that 🤔. Could you please explain a little more clearly so that I can help you?";
        }

        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
}

// Enter key support
document
    .getElementById("userInput")
    .addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });