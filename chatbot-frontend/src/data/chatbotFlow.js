const chatbotFlow = {
  start: {
    message: "👋 Hi there! Welcome to Techkilla. What's your name?",
    input: true,
    next: "getCompany",
  },
  getCompany: (name) => ({
    message: `Thanks, ${name}! Register your contact number. `,
    input: true,
    next: "mainMenu",
  }),
  mainMenu: {
    message: `Awesome! What kind of solutions are you interested in?`,
    options: [
      { option: "AI Solutions", number: 1 },
      { option: "AR/VR Solutions", number: 2 },
      { option: "Gamified Experiences", number: 3 },
      { option: "QR Registration", number: 4 },
      { option: "Custom Solutions", number: 5 },
    ],
    next: {
      1: "aiSolutions",
      2: "arvrSolutions",
      3: "gamifiedSolutions",
      4: "qrSolutions",
      5: "customSolutions",
    },
  },
  aiSolutions: {
    message: `Welcome to Techkilla's AI Solutions! Choose one:`,
    options: [
      {
        option: "AI Photobooth",
        number: 1,
        subMessage:
          "Awesome pick! Our AI Photobooth delivers real-time photo transformations — perfect for events, brand activations, or online campaigns.",
        videoLink: "ai-photo-booth-link",
        price: "Starting from $100",
      },
      {
        option: "AI Videobooth",
        number: 2,
        subMessage:
          "Great choice! The AI Videobooth creates dynamic video transformations with themed overlays and storytelling effects — ideal for immersive engagement.",
        videoLink: "ai-video-booth-link",
        price: "Starting from $200",
      },
      {
        option: "AI Invites",
        number: 3,
        subMessage:
          "Love personalization? Our AI-powered invites and singing greetings turn user photos into fun, musical, and themed experiences — fully brandable and shareable.",
        videoLink: "ai-invites-link",
        price: "Starting from $300",
      },
      {
        option: "Group Photobooth",
        number: 4,
        subMessage:
          "Capture the crowd! Our AI Group Photobooth transforms group selfies with matching themes, attire, and scenic backgrounds — in seconds.",
        videoLink: "ai-group-photo-booth-link",
        price: "Starting from $50",
      },
      {
        option: "SaaS",
        number: 5,
        subMessage:
          "Looking to integrate AI photo magic into your own platform? Our SaaS offering gives you the tools, backend, and support to run it at scale",
        videoLink: "ai-saas-link",
        price: "Starting from $150",
      },
      {
        option: "Custom",
        number: 6,
        subMessage:
          "Thanks for choosing Custom AI Solutions! Please share a brief about your event or idea, and our team will craft a personalized concept for you shortly.",
        price: "Starting from $70",
      },
    ],
  },
  arvrSolutions: {
    message:
      "Awesome! You're diving into our AR/VR Solutions. Here's what we offer:",
    options: [
      {
        option: "AR Games",
        number: 1,
        subMessage:
          "Great choice! Our AR Games transform real-world spaces into interactive, immersive playgrounds — perfect for events, malls, expos, and more.",
        videoLink: "ar-games-link",
        price: "Starting from $30",
      },
      {
        option: "AR Games",
        number: 2,
        subMessage:
          "Nice! Our VR Games offer fully immersive, headset-driven experiences that transport users to virtual worlds — ideal for high-engagement setups.",
        videoLink: "ar-games-link",
        price: "Starting from $40",
      },
      {
        option: "AR Photobooth",
        number: 3,
        subMessage:
          "Fantastic! Our AR Photobooths apply real-time effects, filters, and animations — turning every photo into a share-worthy moment.",
        videoLink: "ar-photo-booth-link",
        price: "Starting from $200",
      },
      {
        option: "Custom AR/VR Development",
        number: 4,
        subMessage:
          "Thanks for choosing Custom AR/VR Development!We love creating tailor-made experiences that align with your brand vision.",
        videoLink: "custom-ar-vr-link",
        price: "Starting from $90",
      },
    ],
  },
  gamifiedSolutions: {
    message: "We turn engagement into excitement with:",
    options: [
      {
        option: "Analytical Games",
        number: 1,
        subMessage:
          " Our Analytical Games challenge users with skill-based tasks while capturing valuable insights — perfect for learning + lead gen.",
        videoLink: "analytical-games-link",
        price: "Starting from $110",
      },
      {
        option: "Fun/Interactive Games",
        number: 2,
        subMessage:
          "From swipe challenges to tap-to-win games — we create super fun, quick-to-play experiences that grab attention instantly!",
        videoLink: "fun-interactive-games-link",
        price: "Starting from $500",
      },
      {
        option: "Branded Quizzes & Polls",
        number: 3,
        subMessage:
          "Test knowledge or gather feedback in an engaging way — all fully branded and customizable for your campaign or event.",
        videoLink: "branded-quiz-link",
        price: "Starting from $10000",
      },
      {
        option: "Leaderboards & Competitions",
        number: 4,
        subMessage:
          "Boost excitement and repeat engagement with real-time leaderboards, live rankings, and exciting competition mechanics!",
        videoLink: "leaderboard-link",
        price: "Starting from $0",
      },
      {
        option: "Custom Gaming Solutions",
        number: 5,
        subMessage:
          "Looking for something tailor-made? We design bespoke gamified experiences aligned with your brand goals and audience.",
        videoLink: "custom-gaming-link",
        price: "Starting from $190",
      },
    ],
  },
  qrSolutions: {
    message:
      "Great choice! Here’s how our QR Registration solution works: We offer a seamless registration process with personalized QR codes for users to scan and register on the spot",
    options: [
      {
        option: "Event Registration via QR",
        number: 1,
        subMessage:
          "Perfect! With Event Registration via QR, attendees can scan and instantly complete their registration process with ease.",
        videoLink: "event-registration-link",
        price: "Starting from $120",
      },
      {
        option: "Custom QR Solutions",
        number: 2,
        subMessage:
          "Looking for something tailor-made? Our Custom QR Solutions are designed to fit your specific event or campaign needs.",
        videoLink: "custom-qr-solutions-link",
        price: "Starting from $0",
      },
      {
        option: "QR-based Check-ins",
        number: 3,
        subMessage:
          "Speed up event check-ins with QR-based solutions — quick, efficient, and hassle-free for attendees and organizers alike.",
        videoLink: "qr-based-check-in-link",
        price: "Starting from $100",
      },
      {
        option: "QR Code with Personalization",
        number: 4,
        subMessage:
          "Personalized QR codes create unique, memorable experiences for your audience — perfect for campaigns, promotions, and giveaways.",
        videoLink: "qr-code-with-personalization-link",
        price: "Starting from $100",
      },
    ],
  },
  customSolutions: {
    message:
      "You've chosen Custom Solutions — we love building unique experiences! To help us craft something amazing, please select one from below:",
    options: [
      {
        option: "AI Solutions",
        number: 1,
        subMessage:
          "We offer a wide range of AI solutions, including AI Photobooth, AI Videobooth, AI Invites, Group Photobooth, and SaaS.",
      },
      {
        option: "AR/VR Solutions",
        number: 2,
        subMessage:
          "AR/VR Solutions offer immersive experiences, including AR Games, VR Games, and AR Photobooth.",
      },
      {
        option: "Gamified Solutions",
        number: 3,
        subMessage:
          "Gamified Solutions bring excitement and engagement to your events, including Analytical Games, Fun/Interactive Games, and Leaderboards.",
      },
      {
        option: "QR Solutions",
        number: 4,
        subMessage:
          "QR Solutions simplify registration and check-ins, including Event Registration via QR, QR-based Check-ins, and QR Code with Personalization.",
      },
    ],
  },
  subOptions: {
    message: "What would you like to do next?",
    options: [
      {
        option: "View a sample video",
        number: 1,
      },
      {
        option: "Know pricing",
        number: 2,
      },
      {
        option: "Talk to an expert",
        number: 3,
      },
    ],
    next: "end",
  },
  end: {
    message:
      "Thanks for exploring! Choose 'Menu' to restart or 'Support' to talk to someone.",
    options: [
      {
        option: "Menu",
        number: 1,
      },
      {
        option: "Support",
        number: 2,
      },
    ],
  },
};

export default chatbotFlow;
