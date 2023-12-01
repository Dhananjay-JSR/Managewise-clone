import Link from "next/link";

export default function NavLinks({ children }: { children: React.ReactNode }) {
    return (
      <Link
        className="font-medium px-2 py-2 hover:text-[#8247ff] transition-all hover:transition-all  hover:duration-200 duration-300"
        href={"/"}
      >
        {children}
      </Link>
    );
  }