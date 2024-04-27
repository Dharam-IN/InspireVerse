// SEARCH INPUT
var SearchBTN = document.getElementById("NavbarSearchBtn");

SearchBTN.addEventListener("click", ()=>{
    document.getElementById("NavbarSearchDivID").classList.toggle("NavSearchDiv")
});


// MOBILE MENU
document.getElementById("menuButton").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("MenuSidebar")
});

document.getElementById("closeMenuButton").addEventListener("click", ()=> {
    document.getElementById("sidebar").classList.toggle("MenuSidebar")
})








const InspireVerseData = [
    {
        quote: "The difference between successful people and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
        category: "Motivation",
        author: "Vince Lombardi",
        subCategory: "Determination",
        language: "English"
    },
    {
        quote: "खुद को संवारने की ख्वाहिश रखो, क्योंकि किस्मत बदलने से पहले खुद को बदलना ज़रूरी है.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Self-Improvement",
        language: "Hindi"
    },
    {
        quote: "खामोशी कुछ कह जाती है, शोर सिर्फ गुंजार करता है. हौसलों को बुलंद रखना सीखो, वक्त बदलने वाला है.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Determination",
        language: "Hindi"
    },
    {
        quote: "सफ़र ही मंजिल का दूसरा नाम है, हर कदम पर कुछ नया सीखना ज़रूरी है.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Learning",
        language: "Hindi"
    },
    {
        quote: "खुद को संवारने की ख्वाहिश रखो,  ्योंकि किस्मत बदलने से पहले खुद को बदलना ज़रूरी है.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Self-Improvement",
        language: "Hindi"
    },
    {
        quote: "हौसलों की आग जगाए रखो, हर मुश्किल रास्ता आसान बनाना सीखो.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Overcoming Challenges",
        language: "Hindi"
    },
    {
        quote: "ज़िन्दगी है तो उड़ान भर लो, आसमान छूने की कोशिश तो करो.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Taking Risks",
        language: "Hindi"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        category: "Motivation",
        author: "Ralph Waldo Emerson",
        subCategory: "Self-Improvement",
        language: "English"
    },
    {
        quote: "Failure is simply the opportunity to begin again, this time more intelligently.",  // New quote
        category: "Motivation",
        author: "Henry Ford",
        subCategory: "Learning from Mistakes",
        language: "English"
    },
    {
        quote: "Embrace the power of today, for it is where you create the change you want to see tomorrow.",  // New quote
        category: "Motivation",
        author: "Michelle Obama",
        subCategory: "Seizing Opportunities",
        language: "English"
    },
    {
        quote: "The mind is everything. What you think you become.",  // New quote
        category: "Motivation",
        author: "Buddha",
        subCategory: "Mindset",
        language: "English"
    },
    {
        quote: "If you can dream it, you can do it.",  // New quote
        category: "Motivation",
        author: "Walt Disney",
        subCategory: "Dreams",
        language: "English"
    },
    {
        quote: "The key to success is to focus on the goals, not on the obstacles.",  // New quote
        category: "Motivation",
        author: "Thomas Edison",
        subCategory: "Focus",
        language: "English"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",  // New quote
        category: "Motivation",
        author: "C.S. Lewis",
        subCategory: "New Beginnings",
        language: "English"
    },
    {
        quote: "It is never too late to be what you might have been.",  // New quote
        category: "Motivation",
        author: "George Eliot",
        subCategory: "Self-Improvement",
        language: "English"
    },
    {
        quote: "He who has a why to live can bear almost any how.",  // New quote
        category: "Motivation",
        author: "Friedrich Nietzsche",
        subCategory: "Purpose",
        language: "English"
    },
    {
        quote: "The journey of a thousand miles begins with a single step.",  // New quote
        category: "Motivation",
        author: "Lao Tzu",
        subCategory: "Starting Small",
        language: "English"
    },
    {
        quote: "Action is the key to success.",  // New quote
        category: "Motivation",
        author: "Tony Robbins",
        subCategory: "Taking Action",
        language: "English"
    },
    {
        quote: "Don't let the fear of striking out keep you from playing the game.",  // New quote
        category: "Motivation",
        author: "Babe Ruth",
        subCategory: "Overcoming Fear",
        language: "English"
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",  // New quote
        category: "Motivation",
        author: "Thomas Edison",
        subCategory: "Perseverance",
        language: "English"
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",  // New quote
        category: "Motivation",
        author: "Henry Ford",
        subCategory: "Mindset",
        language: "English"
    },
    {
        quote: "The critical ingredient is having a fighting spirit.",
        category: "Motivation",
        author: "Vince Lombardi",
        subCategory: "Determination",
        language: "English"
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        category: "Motivation",
        author: "Zig Ziglar",
        subCategory: "Taking Action",
        language: "English"
    },
    {
        quote: "हौसला रखना सीख लो, टूटे सपनों को जोड़ना सीख लो, ज़िन्दगी है एक खेल, हार जीत से खेलना सीख लो.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Positive Attitude",
        language: "Hindi"
    },
    {
        quote: " गिरना पड़ता है ज़मीन पर आसमान छूने के लिए,कठिनाइयाँ ही सीढ़ियाँ बनती हैं कामयाबी के लिए.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Overcoming Obstacles",
        language: "Hindi"
    },
    {
        quote: "खामोश रहकर गहरा जख्म दे जाता है वक्त,शिकायतें करने से अच्छा है, हालात बदल डालो.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Taking Action",
        language: "Hindi"
    },
    {
        quote: "खुद पर भरोसा रखना सीखो, दुनिया मतलबी है यार, हंसते हुए गिराएगी, और रोते हुए उठाएगी नहीं.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Self-Belief",
        language: "Hindi"
    },
    {
        quote: "ज़िन्दगी है खेल हार जीत का हिस्सा है, हर पल सीखो कुछ नया, यही जीत का निशान है.",
        category: "Shayari",
        author: "Anonymous",
        subCategory: "Learning",
        language: "Hindi"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        category: "Motivation",
        author: "Helen Keller",
        subCategory: "Gratitude",
        language: "English"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        category: "Motivation",
        author: "Mark Twain",
        subCategory: "Taking Risks",
        language: "English"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        category: "Motivation",
        author: "Aristotle",
        subCategory: "Hope",
        language: "English"
    },
    // Additional unique quotes below 1 ROW
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        category: "Motivation",
        author: "Winston Churchill",
        subCategory: "Perseverance",
        language: "English"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        category: "Motivation",
        author: "Steve Jobs",
        subCategory: "Passion",
        language: "English"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        category: "Motivation",
        author: "Wayne Gretzky",
        subCategory: "Taking Risks",
        language: "English"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        category: "Motivation",
        author: "Franklin D. Roosevelt",
        subCategory: "Overcoming Doubt",
        language: "English"
    },
    {
        quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
        category: "Motivation",
        author: "Mahatma Gandhi",
        subCategory: "Determination",
        language: "English"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        category: "Motivation",
        author: "Albert Einstein",
        subCategory: "Finding Opportunity",
        language: "English"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        category: "Motivation",
        author: "Nelson Mandela",
        subCategory: "Resilience",
        language: "English"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        category: "Motivation",
        author: "Mark Twain",
        subCategory: "Taking Action",
        language: "English"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        category: "Motivation",
        author: "Steve Jobs",
        subCategory: "Authenticity",
        language: "English"
    },
    // Adding more unique quotes below
    {
        quote: "The only impossible journey is the one you never begin.",
        category: "Motivation",
        author: "Tony Robbins",
        subCategory: "Starting",
        language: "English"
    },
    {
        quote: "Every moment is a fresh beginning.",
        category: "Motivation",
        author: "T.S. Eliot",
        subCategory: "New Beginnings",
        language: "English"
    },
    {
        quote: "Believe you can and you're halfway there.",
        category: "Motivation",
        author: "Theodore Roosevelt",
        subCategory: "Belief",
        language: "English"
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        category: "Motivation",
        author: "Colin R. Davis",
        subCategory: "Success",
        language: "English"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        category: "Motivation",
        author: "Sam Levenson",
        subCategory: "Persistence",
        language: "English"
    },
    // Adding more unique quotes below
    {
        quote: "The only place where success comes before work is in the dictionary.",
        category: "Motivation",
        author: "Vidal Sassoon",
        subCategory: "Success",
        language: "English"
    },
    {
        quote: "The future depends on what you do today.",
        category: "Motivation",
        author: "Mahatma Gandhi",
        subCategory: "Action",
        language: "English"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        category: "Motivation",
        author: "Albert Schweitzer",
        subCategory: "Success",
        language: "English"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        category: "Motivation",
        author: "Walt Disney",
        subCategory: "Action",
        language: "English"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        category: "Motivation",
        author: "John Lennon",
        subCategory: "Life",
        language: "English"
    },
    // Adding more unique quotes below
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        category: "Motivation",
        author: "Henry David Thoreau",
        subCategory: "Success",
        language: "English"
    },
    {
        quote: "The only person you should try to be better than is the person you were yesterday.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Self-Improvement",
        language: "English"
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        category: "Motivation",
        author: "Nikos Kazantzakis",
        subCategory: "Belief",
        language: "English"
    },
    {
        quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        category: "Motivation",
        author: "Roy T. Bennett",
        subCategory: "Dreams",
        language: "English"
    },
    {
        quote: "It's not whether you get knocked down, it's whether you get up.",
        category: "Motivation",
        author: "Vince Lombardi",
        subCategory: "Resilience",
        language: "English"
    },
    // Adding more unique quotes below
    {
        quote: "You can't cross the sea merely by standing and staring at the water.",
        category: "Motivation",
        author: "Rabindranath Tagore",
        subCategory: "Action",
        language: "English"
    },
    {
        quote: "Change your thoughts and you change your world.",
        category: "Motivation",
        author: "Norman Vincent Peale",
        subCategory: "Positive Thinking",
        language: "English"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        category: "Motivation",
        author: "Eleanor Roosevelt",
        subCategory: "Dreams",
        language: "English"
    },
    // Adding more unique quotes below
    {
        quote: "Don't count the days, make the days count.",
        category: "Motivation",
        author: "Muhammad Ali",
        subCategory: "Carpe Diem",
        language: "English"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        category: "Motivation",
        author: "Nelson Mandela",
        subCategory: "Resilience",
        language: "English"
    },
    {
        quote: "The only way to achieve the impossible is to believe it is possible.",
        category: "Motivation",
        author: "Charles Kingsleigh (Alice in Wonderland)",
        subCategory: "Belief",
        language: "English"
    },
    {
        quote: "The harder you work for something, the greater you'll feel when you achieve it.",
        category: "Motivation",
        author: "Anonymous",
        subCategory: "Success",
        language: "English"
    },
    {
        quote: "Believe in yourself, and you will be unstoppable.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Self-Belief",
        language: "English"
    },
    {
        quote: "Every accomplishment starts with the decision to try.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Taking Action",
        language: "English"
    },
    {
        quote: "Chase your dreams with relentless passion, for they are the essence of your soul's journey.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Dreams",
        language: "English"
    },
    {
        quote: "In the dance of life, let perseverance be your partner and determination your rhythm.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Perseverance",
        language: "English"
    },
    {
        quote: "Embrace the storms of life, for they reveal the strength within you waiting to be unleashed.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Resilience",
        language: "English"
    },
    {
        quote: "Your potential is limitless; dare to explore the depths of your capabilities.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Potential",
        language: "English"
    },
    {
        quote: "With each sunrise comes the opportunity to rewrite your story and shape your destiny anew.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "New Beginnings",
        language: "English"
    },
    {
        quote: "Let your actions speak louder than your doubts, and watch as miracles unfold.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Faith",
        language: "English"
    },
    {
        quote: "Adversity is the forge upon which greatness is crafted; embrace its fire and emerge as steel.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Overcoming Challenges",
        language: "English"
    },
    {
        quote: "The stars may guide your path, but it's your perseverance that charts the course of your destiny.",
        category: "Motivation",
        author: "Unknown",
        subCategory: "Perseverance",
        language: "English"
    },
    {
        quote: "Arise, awake, and stop not until the goal is achieved.",
        category: "Motivation",
        author: "Swami Vivekananda",
        subCategory: "Perseverance",
        language: "English"
    },
    {
        quote: "The best way to find yourself is to lose yourself in the service of others.",
        category: "Motivation",
        author: "Mahatma Gandhi",
        subCategory: "Self-Discovery",
        language: "English"
    },
    {
        quote: "You have to dream before your dreams can come true.",
        category: "Motivation",
        author: "A.P.J. Abdul Kalam",
        subCategory: "Dreams",
        language: "English"
    },
    {
        quote: "In a gentle way, you can shake the world.",
        category: "Motivation",
        author: "Mahatma Gandhi",
        subCategory: "Impact",
        language: "English"
    },
    {
        quote: "The future depends on what you do today.",
        category: "Motivation",
        author: "Mahatma Gandhi",
        subCategory: "Action",
        language: "English"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        category: "Motivation",
        author: "Rabindranath Tagore",
        subCategory: "Passion",
        language: "English"
    },
    {
        quote: "All our dreams can come true if we have the courage to pursue them.",
        category: "Motivation",
        author: "Jawaharlal Nehru",
        subCategory: "Dreams",
        language: "English"
    },
    {
        quote: "The power to question is the basis of all human progress.",
        category: "Motivation",
        author: "Indira Gandhi",
        subCategory: "Progress",
        language: "English"
    },
    {
        quote: "It's better to die on your feet than to live on your knees.",
        category: "Motivation",
        author: "Bhagat Singh",
        subCategory: "Courage",
        language: "English"
    },
    {
        quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        category: "Motivation",
        author: "Roy T. Bennett",
        subCategory: "Dreams",
        language: "English"
    },
    {
        quote: "The mind is everything. What you think you become.",
        category: "Motivation",
        author: "Mahatma Gandhi",
        subCategory: "Mindset",
        language: "English"
    },
    {
        quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
        category: "Motivation",
        author: "Mahatma Gandhi",
        subCategory: "Determination",
        language: "English"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        category: "Motivation",
        author: "Mahatma Gandhi",
        subCategory: "Success",
        language: "English"
    },
    {
        quote: "Change your thoughts and you change your world.",
        category: "Motivation",
        author: "Norman Vincent Peale",
        subCategory: "Positive Thinking",
        language: "English"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        category: "Motivation",
        author: "Eleanor Roosevelt",
        subCategory: "Dreams",
        language: "English"
    },
    {
        quote: "Don't count the days, make the days count.",
        category: "Motivation",
        author: "Muhammad Ali",
        subCategory: "Carpe Diem",
        language: "English"
    },
    {
        quote: "The only way to achieve the impossible is to believe it is possible.",
        category: "Motivation",
        author: "Charles Kingsleigh (Alice in Wonderland)",
        subCategory: "Belief",
        language: "English"
    },
    {
        quote: "The harder you work for something, the greater you'll feel when you achieve it.",
        category: "Motivation",
        author: "Anonymous",
        subCategory: "Success",
        language: "English"
    },
    {
        quote: "हार के बाद ही जीत है, रास्तों का इंतज़ार मत करो।",
        category: "Shayari",
        author: "Waseem Barelvi",
        subCategory: "Perseverance",
        language: "Hindi"
    },
    {
        quote: "अपने हाथों से अपनी तक़दीर बनाओ, किस्मत को किस्मत पर छोड़ दो।",
        category: "Shayari",
        author: "Ghalib",
        subCategory: "Self-Determination",
        language: "Hindi"
    },
    {
        quote: "जिन्दगी की राहों में हर कदम पर कठिनाइयाँ हैं, मगर उनको पार करना हमारी मंजिल है।",
        category: "Shayari",
        author: "Mir Taqi Mir",
        subCategory: "Overcoming Challenges",
        language: "Hindi"
    },
    {
        quote: "अपनी हसीन मुस्कान से जीने का मजा लिया करो, क्योंकि तुम्हारी हंसी से ही खुशियाँ मिलती हैं।",
        category: "Shayari",
        author: "Faiz Ahmed Faiz",
        subCategory: "Joy",
        language: "Hindi"
    },
    {
        quote: "बड़ी सांसे लेने की ज़रूरत नहीं, बल्कि सांसों को समझने की ज़रूरत है।",
        category: "Shayari",
        author: "Raza",
        subCategory: "Understanding",
        language: "Hindi"
    },
    {
        quote: "जिन्दगी में जीतने के लिए अपने अंदर के साहस को जगाओ, और हर कठिनाई का सामना करने की ताक़त बनाओ।",
        category: "Shayari",
        author: "Qazi Nazrul Islam",
        subCategory: "Courage",
        language: "Hindi"
    },
    {
        quote: "हर सपने को हकीकत में बदलने के लिए, उसकी पूरी कोशिश करो।",
        category: "Shayari",
        author: "Abdul Kalam",
        subCategory: "Dreams",
        language: "Hindi"
    },
    {
        quote: "जब आपका विश्वास आपकी सोच से बड़ा होता है, तब आप हर मुश्किल को सामने करने के लिए तैयार हो जाते हैं।",
        category: "Shayari",
        author: "Mohammad Ali Jinnah",
        subCategory: "Belief",
        language: "Hindi"
    },
    {
        quote: "जिन्दगी की सबसे बड़ी कलंक है, लोगों की राय से जीना।",
        category: "Shayari",
        author: "Gulzar",
        subCategory: "Individuality",
        language: "Hindi"
    },
    {
        quote: "हारने के बाद भी ना हारो, और जीतने के बाद भी अभिमान मत करो।",
        category: "Shayari",
        author: "Rabindranath Tagore",
        subCategory: "Resilience",
        language: "Hindi"
    },
    {
        quote: "अपनी किस्मत को बदलने के लिए, आपको पहले अपने आत्म-विश्वास को बदलना होगा।",
        category: "Shayari",
        author: "Mahatma Gandhi",
        subCategory: "Self-Improvement",
        language: "Hindi"
    },
    {
        quote: "हर मुश्किल को आसान बनाने का राज, स्वाधीनता की आग में छिपा है।",
        category: "Shayari",
        author: "Subhash Chandra Bose",
        subCategory: "Freedom",
        language: "Hindi"
    },
    {
        quote: "हम अपने सपनों को अधूरा नहीं छोड़ सकते, क्योंकि वे ही हमें जीने का सहारा देते हैं।",
        category: "Shayari",
        author: "Rabindranath Tagore",
        subCategory: "Dreams",
        language: "Hindi"
    },
    {
        quote: "आपका आदर्श आपके द्वारा बनाया जाता है, नहीं कि लोगों की बातों द्वारा।",
        category: "Shayari",
        author: "Mahatma Gandhi",
        subCategory: "Self-Determination",
        language: "Hindi"
    },
    {
        quote: "सपने वो नहीं होते जो हम सोते समय देखते हैं, बल्कि सपने वो होते हैं जो हमें सोने नहीं देते।",
        category: "Shayari",
        author: "APJ Abdul Kalam",
        subCategory: "Dreams",
        language: "Hindi"
    },
    {
        quote: "हर एक जिंदगी जीने के लिए एक नया सपना लाती है, और हर एक सपना पूरा होते ही एक नया सपना आता है।",
        category: "Shayari",
        author: "Mahatma Gandhi",
        subCategory: "Dreams",
        language: "Hindi"
    },
    {
        quote: "कठिनाई में ही असली महानता छुपी होती है।",
        category: "Shayari",
        author: "Bhagat Singh",
        subCategory: "Perseverance",
        language: "Hindi"
    },
    {
        quote: "अपनी हर सांस ज़िन्दगी का एक पाठ है, जो आपको आगे बढ़ने की साहस देती है।",
        category: "Shayari",
        author: "Rabindranath Tagore",
        subCategory: "Courage",
        language: "Hindi"
    },
    {
        quote: "मंजिल की तलाश में मत भागो, बल्कि मंजिल को पाने के लिए ज़िन्दगी को निभाओ।",
        category: "Shayari",
        author: "Mahatma Gandhi",
        subCategory: "Perseverance",
        language: "Hindi"
    },
    {
        quote: "जिंदगी में सफलता के लिए केवल एक ही रास्ता है, और वह है अपने सपनों को पूरा करना।",
        category: "Shayari",
        author: "Swami Vivekananda",
        subCategory: "Success",
        language: "Hindi"
    },
    {
        quote: "करो दुनिया को अपने सवालों का सामना, खुद की तलाश में मत खोएं, खुद का पहचाना.",
        category: "Shayari",
        author: "Gulzar",
        subCategory: "Self-Discovery",
        language: "Hindi"
    },
    {
        quote: "उठो, बदलेंगे तुम्हारी तक़दीर के तारे, हिम्मत का साथ निभाओ, खुद की राह पे चलें चलें.",
        category: "Shayari",
        author: "Javed Akhtar",
        subCategory: "Perseverance",
        language: "Hindi"
    },
    {
        quote: "हर सपना सच हो सकता है, हक़ीक़त बनाने वालों की मेहनत से.",
        category: "Shayari",
        author: "Javed Akhtar",
        subCategory: "Dreams",
        language: "Hindi"
    },
    {
        quote: "ज़िंदगी की राहों में, किसी का साथ ना मिला, वही है मज़ा, जिसने साथ ना दिया.",
        category: "Shayari",
        author: "Gulzar",
        subCategory: "Resilience",
        language: "Hindi"
    },
    {
        quote: "जिसने रास्ते को खो दिया, उसने ही मंजिल पा ली।",
        category: "Shayari",
        author: "Javed Akhtar",
        subCategory: "Perseverance",
        language: "Hindi"
    },
    {
        quote: "ख्वाबों की दुनिया में, हकीकत की तलाश में, चलो दिल संग संग, नयी राहों में।",
        category: "Shayari",
        author: "Faiz Ahmad Faiz",
        subCategory: "Dreams",
        language: "Hindi"
    },
    {
        quote: "हर सपने की उड़ान नहीं होती, हर रोज़गार को ताबदीला नहीं किया जाता।",
        category: "Shayari",
        author: "Faiz Ahmad Faiz",
        subCategory: "Perseverance",
        language: "Hindi"
    },
    {
        quote: "हालातों के गिरावटों से हार के डर से डरो मत, ज़िंदगी की राह में एक नयी बहार चाहिए।",
        category: "Shayari",
        author: "Mirza Ghalib",
        subCategory: "Resilience",
        language: "Hindi"
    },
    {
        quote: "जीने की राह में कितनी ही चुनौतियाँ आए, उन्हें अपने हौसले से बेहद सरलता से पार करो।",
        category: "Shayari",
        author: "Javed Akhtar",
        subCategory: "Overcoming Challenges",
        language: "Hindi"
    },
    {
        quote: "ज़िन्दगी की सच्चाई को अपने दिल में बसाओ, ख्वाबों को अपनी आँखों में बसाओ।",
        category: "Shayari",
        author: "Gulzar",
        subCategory: "Life",
        language: "Hindi"
    }
];
