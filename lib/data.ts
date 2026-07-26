export const FEATURES = [
  { t: "Verified Listings", d: "Every property reviewed for authenticity before it goes live." },
  { t: "Buy Properties", d: "Browse verified homes ready for ownership." },
  { t: "Rent Properties", d: "Find rentals with transparent pricing and terms." },
  { t: "Sell Properties", d: "List your property and reach verified buyers fast." },
  { t: "Location Search", d: "Discover homes by neighbourhood, map or landmark." },
  { t: "Real-time Chat", d: "Message owners and agents directly, instantly." },
  { t: "Favorites", d: "Save properties you love and revisit anytime." },
  { t: "Property Comparison", d: "Compare listings side-by-side before deciding." },
  { t: "Secure Authentication", d: "OTP-based login keeps every account protected." },
  { t: "Fast Performance", d: "Built for speed — no lag, no waiting." },
  { t: "Modern Experience", d: "A refined interface that feels effortless to use." },
  { t: "Premium UI", d: "Every interaction crafted with elegance in mind." },
] as const;

export const STEPS = [
  { t: "Download Lex n Land", d: "Get the app from Google Play or the App Store." },
  { t: "Open the App", d: "Launch into a smooth, branded splash experience." },
  { t: "Sign In", d: "Create your account in seconds." },
  { t: "OTP Verification", d: "Secure your account with one-time password login." },
  { t: "Choose Your Role", d: "Select Buyer or Seller to personalise your journey." },
  { t: "Explore Properties", d: "Browse verified listings tailored to you." },
  { t: "Connect with Owners", d: "Chat directly — no middlemen, no delays." },
  { t: "Find Your Perfect Property", d: "Move forward with total confidence and trust." },
] as const;

export const COMPARE = [
  "Verified Listings",
  "Direct Owner Connection",
  "Real Images",
  "Modern Experience",
  "Fast Search",
  "Minimal Interface",
  "Secure Platform",
  "Role Based Experience",
] as const;

export const PROPERTIES = [
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    tag: "For Sale",
    title: "Skyline Penthouse",
    loc: "Indiranagar, Bengaluru",
    price: "₹2.4 Cr",
    suffix: "",
    beds: 4,
    baths: 3,
    area: "2,800 sqft",
  },
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    tag: "For Rent",
    title: "The Willowbrook Villa",
    loc: "Whitefield, Bengaluru",
    price: "₹85,000",
    suffix: "/mo",
    beds: 3,
    baths: 3,
    area: "2,100 sqft",
  },
  {
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    tag: "For Sale",
    title: "Lakeview Residence",
    loc: "Powai, Mumbai",
    price: "₹3.1 Cr",
    suffix: "",
    beds: 5,
    baths: 4,
    area: "3,400 sqft",
  },
  {
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    tag: "For Sale",
    title: "Garden Court Apartment",
    loc: "Koramangala, Bengaluru",
    price: "₹1.6 Cr",
    suffix: "",
    beds: 3,
    baths: 2,
    area: "1,650 sqft",
  },
  {
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    tag: "For Rent",
    title: "Urban Loft Studio",
    loc: "Bandra, Mumbai",
    price: "₹52,000",
    suffix: "/mo",
    beds: 1,
    baths: 1,
    area: "720 sqft",
  },
  {
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
    tag: "For Sale",
    title: "Heritage Bungalow",
    loc: "Jubilee Hills, Hyderabad",
    price: "₹4.8 Cr",
    suffix: "",
    beds: 6,
    baths: 5,
    area: "5,200 sqft",
  },
] as const;

export const TESTIMONIALS = [
  {
    n: "Aarav Mehta",
    r: "Early Access Buyer",
    t: "Every listing I opened felt trustworthy — no guessing games. The whole flow, from OTP login to chatting with an owner, felt effortless.",
  },
  {
    n: "Priya Nair",
    r: "Property Owner",
    t: "Listing my apartment took minutes and the verification process actually made buyers reach out faster, not slower.",
  },
  {
    n: "Rohan Kapoor",
    r: "First-time Renter",
    t: "It genuinely feels like the Apple of real estate apps. Clean, fast, and I trusted it immediately.",
  },
  {
    n: "Sana Sheikh",
    r: "Investor",
    t: "The comparison tool alone saved me hours. Beautifully designed and genuinely useful.",
  },
] as const;

export const ROADMAP = [
  { t: "AI Property Recommendations", d: "Smarter suggestions based on your search behaviour." },
  { t: "Smart Maps", d: "Interactive maps with live neighbourhood insights." },
  { t: "Verified Builders", d: "Direct access to vetted, reputable developers." },
  { t: "Virtual Property Tours", d: "Walk through homes from anywhere, anytime." },
  { t: "Investment Intelligence", d: "Data-driven insight into property value growth." },
  { t: "Expansion Across India", d: "Bringing trusted real estate to every major city." },
] as const;

export const FAQS = [
  {
    q: "When will Lex n Land launch?",
    a: "We are in the final stages of development. Join the waitlist to be notified the moment we go live on Google Play and the App Store.",
  },
  {
    q: "How are listings verified?",
    a: "Every listing goes through a manual and document-based review process before it becomes visible to buyers and renters.",
  },
  {
    q: "Is Lex n Land free to use?",
    a: "Browsing and connecting with verified owners will be free for buyers and renters. Sellers will have optional premium listing tools.",
  },
  {
    q: "Which cities will be supported at launch?",
    a: "We are launching first in Bengaluru, Mumbai and Hyderabad, with more cities added shortly after.",
  },
  {
    q: "How does OTP verification work?",
    a: "Every account is secured with a one-time password sent to your registered mobile number during sign-in.",
  },
] as const;
