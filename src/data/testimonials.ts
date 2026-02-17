export interface Testimonial {
  name: string;
  condition: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "LORIK OFFICIAL",
    condition: "Sports Injury",
    text: "An absolutely amazing experience at Reactive Physio! From the very first moment, you feel truly welcomed — Qendresa and her team offer outstanding hospitality and professionalism. The clinic is spotless, modern, and relaxing, and the service is top-quality in every detail. Qendresa is a dedicated physiotherapist who listens carefully and genuinely helps you improve. I wholeheartedly recommend Reactive Physio to anyone looking for high-quality care and a real healing experience.",
    rating: 5,
  },
  {
    name: "Thëllënza Gashi",
    condition: "Back Pain Recovery",
    text: "Kam përfunduar vetëm 3 seanca dhe ndihem shumë më e lehtësuar dhe dhimbjet e padurueshme janë zhdukur pothuajse plotësisht falë punës së palodhshme të Shkurtës 🤍 Mezi pres të vazhdoj me seancat e tjera që nuk dua të përfundojn kurr! …",
    rating: 5,
  },
  {
    name: "Mrikë Bllaca",
    condition: "Posture Problem",
    text: "Eksperience shume e mire. Vajzat jane shume miqesore dhe fizioterapeute profesionale. E rekomandoj Reactive Physio Clinic - Fizioterapi.",
    rating: 5,
  },
];
