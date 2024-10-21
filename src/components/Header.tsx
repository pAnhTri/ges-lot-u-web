import ThemeSwitch from "./ThemeSwitch";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <nav
        className="flex
                    w-auto
                    h-[55px]
                    items-center
                    justify-between 
                    bg-[#A6FF00]
                    text-[#1F1B3B] 
                    dark:bg-[#4C6420]
                    dark:text-[#E5E0DD]"
      >
        <span className="font-vietnamese text-[1.5em] px-2">{title}</span>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Header;
