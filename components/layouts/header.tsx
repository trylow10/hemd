import { ThemeSwitcher } from "../theme-switcher";

export const Header = () => {
  return (
    <header className="flex justify-between border-b border-b-gray-200 dark:border-b-gray-700">
      <div className="flex p-2">
        <h1 className="text-4xl mx-1">HEMD</h1>
      </div>

      <nav className="p-2">
        <ThemeSwitcher />
      </nav>
    </header>
  );
};
