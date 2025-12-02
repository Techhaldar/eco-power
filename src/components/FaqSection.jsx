import { useState } from "react";

const faqs = [
  {
    question: "PM Surya Ghar: Muft Bijli Yojana kya hai?",
    answer:
      "Ye scheme ghar par rooftop solar lagane par har mahine 300 unit tak free electricity deti hai. Sarkar isme 75,000 crore invest kar rahi hai aur 1 crore gharon ko free bijli dene ka lakshya hai.",
  },
  {
    question: "Is yojana me mujhe kitni free bijli milegi?",
    answer:
      "Aapko har mahine 300 units tak bilkul free electricity milegi. Agar aap 300 units se kam use karte ho to bill zero ho jayega.",
  },
  {
    question: "Rooftop solar lagane ke liye kitni subsidy milegi?",
    answer:
      "Government 3 kW tak heavy subsidy de rahi hai. Example: 2 kW system par ₹30,000 per kW tak subsidy mil sakti hai. Exact subsidy DISCOM/state par depend karti hai.",
  },
  {
    question: "PM Surya Ghar Yojana ke liye kaun apply kar sakta hai?",
    answer:
      "Har ghar jisme bijli ka domestic connection ho, wo apply kar sakta hai. Aapke ghar ki chhat par solar panel lagne layak jagah honi chahiye.",
  },
  {
    question: "Is yojana ke liye kya documents chahiye?",
    answer:
      "Aapko Aadhaar Card, PAN Card, electricity bill, bank passbook, mobile number aur rooftop proof/documentation chahiye hota hai.",
  },
  {
    question: "Kya rooftop solar lagane ka pura process government karayegi?",
    answer:
      "Installation approved vendor ke through hota hai. Survey, installation, meter setup, testing sab certified vendors hi karte hain. Subsidy directly bank account me aati hai.",
  },
  {
    question: "Mujhe solar lagane me kitna paisa khud dena hoga?",
    answer:
      "Subsidy ke baad cost bahut kam ho jati hai. Example: 2 kW system ki market price ₹1,20,000 ho to subsidy ke baad cost ₹40,000–₹50,000 tak reh jati hai.",
  },
  {
    question: "Solar lagwane me kitna time lagta hai?",
    answer:
      "Survey se installation aur net-metering tak total 15–30 days lagte hain, state DISCOM approval speed par depend karta hai.",
  },
  {
    question: "Agar mera bill 300 units se zyada aata hai to kya hoga?",
    answer:
      "300 units tak bill free hoga. 300 units se upar jitna use hoga, sirf utna hi amount aapko pay karna padega.",
  },
  {
    question: "Solar panels ki warranty kitni hoti hai?",
    answer:
      "Solar panels ki life 25+ saal hoti hai. Inverter ki warranty 5–10 saal aur installation workmanship warranty 1 saal hoti hai.",
  },
];

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="w-full rounded-xl bg-[#181818] mb-3 shadow-md">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-semibold text-sm sm:text-base text-white">
          {question}
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a2a2a]">
          {/* plus / minus icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            {!isOpen && <path d="M12 5v14" />}
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-4 text-sm text-gray-200">{answer}</div>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-[url('/faq-bg.jpg')] bg-cover bg-center bg-fixed">
      {/* overlay */}
      <div className="w-full bg-black">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
          <h2
            className="text-center text-3xl sm:text-4xl font-extrabold text-white"
            id="faqs"
          >
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>

          <div className="mt-10">
            {faqs.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
