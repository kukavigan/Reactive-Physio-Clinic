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
    bio: "Qendresa është themeluese e Reactive Physio Clinic.\n\n Fizioterapeute e diplomuar me mbi 7 vite përvojë profesionale, e fokusuar në rehabilitim ortopedik, trajtimin e pacientëve post-operativë dhe menaxhimin e dëmtimeve sportive.\n\n Ka përfunduar studimet master dhe ka investuar vazhdimisht në zhvillim profesional përmes trajnimeve të avancuara ndërkombëtare, përfshirë rehabilitimin e dorës në Universitetin e Utrecht-it në Holandë.\n\n Përvoja e saj klinike përfshin trajtimin e rasteve komplekse dhe rikthimin funksional të pacientëve sportistë.\n\n Prej më shumë se tre vitesh, është pjesë e Federatës së Futbollit të Kosovës si fizioterapeute e ekipit kombëtar përfaqësues, duke punuar drejtpërdrejt me sportistë të nivelit të lartë.",
    image: "/team/qendresa.jpg"
  },
  {
    name: "BSc. Dr. Shkurte Ejupi",
    role: "Senior Physiotherapist",
    specialization: "Neurological Rehabilitation",
    experience: "6+ years",
    bio: "Shkurta është themeluese e Reactive Physio Clinic.\n\n Fizioterapeute e diplomuar me mbi 6 vite përvojë, e specializuar kryesisht në rehabilitim neurologjik.\n\n Me trajnime të shumta brenda dhe jashtë vendit, ajo ofron trajtime të personalizuara dhe bashkëkohore. Aktualisht, është fizioterapeute e Kombëtares së Kosovës.",
    image: "/team/shkurta.jpg"
  },
];
