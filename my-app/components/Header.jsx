import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div>
      <header className="header">
        <nav>
          <div className="logo">
            <Link href="/"> <Image src={"https://cdn-icons-png.flaticon.com/512/5339/5339181.png"} width={50} height={50} alt="NextJS"/> </Link>
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
