export default function FloatingCallButton() {
  return (
    <a
      href="tel:+919068202706"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white 
                 w-14 h-14 rounded-full sm:flex items-center justify-center shadow-xl 
                 animate-pulse hidden "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 
          0 001.5-1.5v-3.772a1.5 1.5 0 00-1.085-1.437l-3.21-.803a1.5 
          1.5 0 00-1.572.547l-.97 1.293a11.034 11.034 0 01-4.943-4.943l1.293-.97a1.5 
          1.5 0 00.547-1.572l-.803-3.21A1.5 1.5 0 007.522 2.25H3.75A1.5 
          1.5 0 002.25 3.75v3z"
        />
      </svg>
    </a>
  );
}
