import type { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{ img: { src: string; alt: string } }>;

export const Header = ({ img, children }: HeaderProps) => {
  return (
    <header>
      <img {...img} />
      {children}
    </header>
  );
};
