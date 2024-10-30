import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>Juju Bica Fitness</a>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="hover:text-blue-600">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-blue-600">About</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="hover:text-blue-600">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-blue-600">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}