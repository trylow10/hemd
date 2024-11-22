export function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">META Research Group</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Publications
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Members
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
