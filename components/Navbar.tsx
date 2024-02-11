import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-[--secondary-contrast]">
      <div className="py-4 w-full max-w-screen-lg">
        <Link href="/">Booking</Link>
      </div>
    </nav>
  );
}
