export interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "MSc. Dr. Qendresa Ajvazi",
    role: "Lead Physiotherapist & Founder",
    specialization: "Musculoskeletal & Sports Rehabilitation",
    experience: "7+ years",
    bio: "Qendresa is a graduated physiotherapist with over 7 years of professional experience, focused on orthopedic rehabilitation, post-operative patient care and sports injury management. She has completed her master’s degree and has continuously invested in professional development through advanced international training, including hand rehabilitation at Utrecht University in the Netherlands. Her clinical experience includes the treatment of complex cases and functional recovery of athlete patients. For more than three years, she has been part of the Kosovo Football Federation as a physiotherapist for the national representative team, working directly with high-level athletes. ",
    image: "/team/qendresa.jpg"
  },
  {
    name: "BSc. Dr. Shkurte Ejupi",
    role: "Senior Physiotherapist",
    specialization: "Neurological Rehabilitation",
    experience: "7+ years",
    bio: " Shkurta is a graduated physiotherapist with over seven-years of experience, specializing mainly in neurological rehabilitation.With extensive training at home and abroad, she offers personalized and contemporary treatments. Currently, she is the physiotherapist of the Kosovo National Team.",
    image: "/team/shkurta.jpg"
  },
];
