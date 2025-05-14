'use client';

import { useRouter } from 'next/navigation';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'danger';
  navigateTo?: string;
}

function Button({ label, variant = 'primary', navigateTo, ...props }: ButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  const baseStyle = 'px-4 py-2 rounded-full transition w-64';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-black hover:bg-gray-600',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}
    onClick={handleClick}
    {...props}
    >
      {label}
    </button>
  );
};

export default Button;