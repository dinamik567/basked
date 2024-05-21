import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  styleActive: string;
}

export function NavLink({ href, children, styleActive }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const class_name = isActive ? `${styleActive}` : "";

  return (
    <Link href={href}>
      <span className={class_name}>{children}</span>
    </Link>
  );
}
