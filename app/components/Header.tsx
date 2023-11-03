import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Link href="/">
        <div>logo</div>
      </Link>
      <nav className="flex gap-6">
        <div>item 1</div>
        <div>item 1</div>
        <div>item 1</div>
      </nav>
    </header>
  );
}
