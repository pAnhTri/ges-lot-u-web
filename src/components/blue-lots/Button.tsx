import Link from "next/link";

interface ButtonProps {
  children: string;
  href: string;
}

const Button = ({ children, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="
                flex
                justify-center
                items-center
                w-[197px]
                h-[51px]
                sm:w-[80%]
                rounded-md
                bg-[#00A6FF]
                dark:bg-[#1E485F]
                text-[1.5em]
                font-vietnamese
                text-[#1F1B3B]
                dark:text-[#E5E0DD]
                "
    >
      {children}
    </Link>
  );
};

export default Button;