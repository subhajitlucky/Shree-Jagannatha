// Reusable button with theme styling and hover effects
export default function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-secondary hover:scale-105 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 