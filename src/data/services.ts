export interface Service {
  name: string;
  price: string;
  description?: string;
  note?: string;
}

export const services: Service[] = [
  {
    name: "Men's Haircut",
    price: "$40.00",
    description:
      "Get a fresh new look with our professional men's haircut service. Our skilled stylists will give you a stylish and tailored haircut that suits your unique style and personality. Whether you prefer a classic, trendy, or bold haircut, we've got you covered.",
  },
  {
    name: "Mens cut w/ beard trim",
    price: "$50.00",
  },
  {
    name: "Haircut/ beard trim w color",
    price: "$70.00",
    description:
      "Transform your look with our Haircut and Beard Trim service, enhanced by personalized color options to suit your style. Experience precision cutting techniques combined with expert coloring to achieve a fresh, polished appearance that highlights your best features.",
  },
  {
    name: "Men's Skin fade w/ beard",
    price: "$55.00",
    description:
      "Men's Skin fade with beard is a professional grooming service that offers a modern and stylish haircut, perfect for men who want a clean and polished look. Our skilled barbers will skillfully blend your hair and fade it into your beard, providing a seamless and sharp appearance that enhances your facial features.",
  },
  {
    name: "Men's Skin fade w/ Hot towel shave",
    price: "$60.00",
  },
  {
    name: "Men's Skin Fade",
    price: "$40.00",
    description:
      "Our Men's Skin Fade service offers a seamless blend between short and longer hair, providing a stylish and modern look for men. With expert barbers and high-quality products, we ensure precision and professionalism in every cut.",
  },
  {
    name: "Mens cut w/hot towel shave",
    price: "$60.00",
    description:
      "From the moment you come in the experience speaks for itself! If your looking to feel great and get refreshed you cant go wrong with this!",
  },
  {
    name: "Student Taper Fade (12 & up)",
    price: "$35.00",
    description:
      "Our Student Taper Fade (12 & up) services are designed specifically for students aged 12 and above, offering a stylish and trendy haircut option that suits their unique preferences. With our skilled barbers and attention to detail, we ensure a clean and precise taper fade that will leave them looking sharp and confident.",
  },
  {
    name: "Student Regular Haircut ( 12 & up )",
    price: "$30.00",
    description: "High School, Middle School - Teenager haircut",
  },
  {
    name: "Kids Taper Fade (11 & under)",
    price: "$32.00",
    description:
      "Our Kids Taper Fade service offers trendy and stylish haircuts for children aged 11 and under, ensuring that they leave our barbershop looking fresh and confident.",
  },
  {
    name: "Kids Cut ( 11 & Under )",
    price: "$30.00",
    description: "Regular Kids Haircut - Ages 11 and under",
  },
  {
    name: "Kids Skin Fade (11 & Under)",
    price: "$32.00",
    description:
      "The Kids Skin Fade service offers a stylish and trendy haircut for children aged 11 and under, providing them with a neat and clean appearance. Our skilled stylists are experienced in delivering exceptional fades that will leave your child looking sharp and confident.",
  },
  {
    name: "Senior Haircut",
    price: "$30.00",
  },
  {
    name: "Hot towel shave",
    price: "$35.00",
  },
  {
    name: "Beard Trim",
    price: "$30.00",
  },
  {
    name: "VIP Services ( Please Call Shop)",
    price: "",
    note: "Before/After Hours services will be starting at $50",
  },
];
