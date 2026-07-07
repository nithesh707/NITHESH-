import { Program, MembershipPlan, Transformation, Testimonial, StatItem } from "./types";

export const STAT_ITEMS: StatItem[] = [
  { id: "stat-1", value: 12, suffix: "+", label: "Years of Experience" },
  { id: "stat-2", value: 5400, suffix: "+", label: "Members Trained" },
  { id: "stat-3", value: 1850, suffix: "+", label: "Body Transformations" },
  { id: "stat-4", value: 15, suffix: "", label: "Certified Elite Trainers" },
];

export const PROGRAMS: Program[] = [
  {
    id: "prog-1",
    title: "Men's Physique Training",
    description: "Build an aesthetic, stage-ready V-Taper. Specialized protocols focusing on capping your deltoids, building wide lats, carving dense chest mass, and achieving razor-sharp abdominal definition.",
    iconName: "Dumbbell",
  },
  {
    id: "prog-2",
    title: "Strength & Hypertrophy",
    description: "The core of muscularity. Progressive overload systems designed to maximize raw mechanical tension, stimulate deep muscle fibers, and build a powerful, bulletproof skeletal frame.",
    iconName: "Flame",
  },
  {
    id: "prog-3",
    title: "Elite Nutrition Systems",
    description: "Your physique is chiseled in the kitchen. Receive tailored macronutrient breakdowns, precise weekly refeed schedules, hydration blueprints, and continuous custom adjustments.",
    iconName: "Utensils",
  },
  {
    id: "prog-4",
    title: "1-on-1 Coaching & Prep",
    description: "Work directly with head coach Elon and the team. Form biomechanics analysis, mental conditioning, custom pose optimization, and intensive weekly accountability check-ins.",
    iconName: "Award",
  },
];

export const PLANS: MembershipPlan[] = [
  {
    id: "plan-1",
    name: "Standard Core",
    price: "₹1,500",
    billingPeriod: "month",
    features: [
      "Access to premium gym floor & equipment",
      "Standard fitness assessment",
      "Locker room & shower access",
      "General trainer floor guidance",
      "Wi-Fi & hydration station access",
    ],
    ctaText: "Get Started Now",
  },
  {
    id: "plan-2",
    name: "Physique Elite",
    price: "₹3,999",
    billingPeriod: "month",
    features: [
      "All Standard Core privileges",
      "12 customized physique workout templates",
      "1-on-1 monthly physique assessment",
      "Customized macro nutrition guide",
      "2 1-on-1 coaching sessions/month",
      "Priority equipment booking",
    ],
    isPopular: true,
    ctaText: "Join Most Popular",
  },
  {
    id: "plan-3",
    name: "The T7 Pro Circle",
    price: "₹14,999",
    billingPeriod: "year",
    features: [
      "All Physique Elite privileges",
      "Unlimited 1-on-1 coaching & form checks",
      "Weekly bio-feedback nutrition adjustments",
      "Complete physique competition preparation",
      "Complimentary supplement starter stack",
      "Exclusive T7 Pro merchandise kit",
      "24/7 direct coach contact (WhatsApp VIP)",
    ],
    ctaText: "Claim Pro Membership",
  },
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans-1",
    name: "Aditya Verma",
    achievement: "Fat Loss & Muscle Growth",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400",
    duration: "16 Weeks",
  },
  {
    id: "trans-2",
    name: "Rohan Mehra",
    achievement: "Extreme Lean Bulking",
    beforeImg: "https://images.unsplash.com/photo-1594824813573-246434e3b96f?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
    duration: "24 Weeks",
  },
  {
    id: "trans-3",
    name: "Vikram Singh",
    achievement: "V-Taper Sculpting",
    beforeImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1578762560072-46cf15e59490?auto=format&fit=crop&q=80&w=400",
    duration: "12 Weeks",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Karan Johar",
    role: "Aesthetic Athlete",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    quote: "T7 Fitness completely transformed my perspective on training. The coach's scientific approach to building the V-taper gave me visible results in just 8 weeks. It's not just a gym; it's an elite performance center.",
  },
  {
    id: "test-2",
    name: "Sameer Deshmukh",
    role: "Men's Physique Competitor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    quote: "I trained here for my first regional physique competition. The atmosphere is intense, motivating, and incredibly supportive. T7's customized nutrition and posing guides are world-class.",
  },
  {
    id: "test-3",
    name: "Arjun Mehta",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    quote: "Juggling a desk job and fitness was impossible until I joined T7. Under the personal coaching program, I lost 14 kg of fat and built significant muscle. Highly recommended!",
  },
];
