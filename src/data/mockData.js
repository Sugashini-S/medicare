export const doctors = [
  {
    id: 1,
    name: "Dr. Arvind Swamy",
    specialty: "Cardiologist",
    experience: "15+ Years",
    rating: 4.9,
    location: "Chennai",
    verified: true,
    available: true,
    fee: 800,
    initials: "AS",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 2,
    name: "Dr. Meera Krishnan",
    specialty: "Dermatologist",
    experience: "10+ Years",
    rating: 4.8,
    location: "Coimbatore",
    verified: true,
    available: true,
    fee: 600,
    initials: "MK",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    specialty: "Neurologist",
    experience: "12+ Years",
    rating: 4.7,
    location: "Madurai",
    verified: true,
    available: false,
    fee: 1000,
    initials: "RK",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 4,
    name: "Dr. Sarah Jonas",
    specialty: "Pediatrician",
    experience: "8+ Years",
    rating: 4.9,
    location: "Trichy",
    verified: true,
    available: true,
    fee: 500,
    initials: "SJ",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536750?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 5,
    name: "Dr. Vikram Seth",
    specialty: "Orthopedic",
    experience: "18+ Years",
    rating: 4.8,
    location: "Chennai",
    verified: true,
    available: true,
    fee: 900,
    initials: "VS",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 6,
    name: "Dr. Ananya Rai",
    specialty: "Gynecologist",
    experience: "14+ Years",
    rating: 4.9,
    location: "Coimbatore",
    verified: true,
    available: true,
    fee: 750,
    initials: "AR",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 7,
    name: "Dr. Karthik Raja",
    specialty: "General Physician",
    experience: "20+ Years",
    rating: 4.6,
    location: "Madurai",
    verified: true,
    available: true,
    fee: 400,
    initials: "KR",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 8,
    name: "Dr. Priya Sharma",
    specialty: "Dentist",
    experience: "7+ Years",
    rating: 4.8,
    location: "Trichy",
    verified: true,
    available: true,
    fee: 500,
    initials: "PS",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const specialties = [
  { name: "Cardiology", icon: "Heart" },
  { name: "Dermatology", icon: "Sparkles" },
  { name: "Neurology", icon: "Brain" },
  { name: "Pediatrics", icon: "Baby" },
  { name: "Orthopedics", icon: "Bone" },
  { name: "Gynecology", icon: "Users" },
  { name: "General Medicine", icon: "Stethoscope" },
  { name: "Dentistry", icon: "Smile" }
];

export const services = [
  {
    id: 1,
    title: "Primary Care",
    description: "Comprehensive health services for individuals and families of all ages.",
    icon: "Stethoscope"
  },
  {
    id: 2,
    title: "Emergency Care",
    description: "24/7 life-saving emergency medical services with expert intervention.",
    icon: "Activity"
  },
  {
    id: 3,
    title: "Lab Tests",
    description: "Accurate and timely diagnostic testing with home sample collection.",
    icon: "Beaker"
  },
  {
    id: 4,
    title: "Vaccination",
    description: "Immunization programs for children and adults to prevent diseases.",
    icon: "Syringe"
  },
  {
    id: 5,
    title: "Health Insurance",
    description: "Versatile health insurance plans to protect you and your loved ones.",
    icon: "Shield"
  },
  {
    id: 6,
    title: "Surgery",
    description: "Advanced surgical procedures performed by top-tier especialistas.",
    icon: "Scissors"
  }
];

export const healthPackages = [
  {
    id: 1,
    name: "Basic Checkup",
    price: 999,
    features: ["Blood Sugar", "Lipid Profile", "Liver Function", "Kidney Function"],
    tag: "Essential"
  },
  {
    id: 2,
    name: "Advanced Wellness",
    price: 1999,
    features: ["Everything in Basic", "Vitamin D & B12", "Cardiac Markers", "Thyroid Profile"],
    tag: "Popular"
  },
  {
    id: 3,
    name: "Cardiac Screen",
    price: 2499,
    features: ["Everything in Advanced", "ECG", "TMT/Echo", "Chest X-Ray"],
    tag: "Specialized"
  },
  {
    id: 4,
    name: "Women's Wellness",
    price: 1799,
    features: ["Everything in Basic", "Pap Smear", "Bone Density", "Iron Studies"],
    tag: "Care"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Viswanathan",
    rating: 5,
    text: "The service at MediCare is exceptional. The doctors are highly professional and the care I received was top-notch.",
    location: "Chennai"
  },
  {
    id: 2,
    name: "Sonia Gandhi",
    rating: 4,
    text: "Booking appointments is so easy. The user interface is very clean and the staff at the hospital were very helpful.",
    location: "Coimbatore"
  },
  {
    id: 3,
    name: "Deepak Chopra",
    rating: 5,
    text: "I had a great experience with the lab tests. The results were accurate and I received them on time. Highly recommended!",
    location: "Madurai"
  }
];

export const appointmentHistory = [
  {
    id: "APP12345",
    doctor: "Dr. Arvind Swamy",
    date: "2024-03-15",
    time: "10:30 AM",
    status: "Upcoming"
  },
  {
    id: "APP12342",
    doctor: "Dr. Sarah Jonas",
    date: "2024-03-10",
    time: "02:00 PM",
    status: "Completed"
  }
];

export const healthRecords = [
  { id: 1, test: "Complete Blood Count", date: "2024-02-28", status: "Normal" },
  { id: 2, test: "Lipid Profile", date: "2024-01-15", status: "Attention" },
  { id: 3, test: "HBA1C", date: "2023-12-10", status: "Normal" }
];
