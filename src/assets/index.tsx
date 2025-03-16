import clsx from "clsx";
import HamburgerMenuSVG from "./svg/hamburger-menu.svg";

export const HamburgerMenuIcon = ({
  className,
  ...rest
}: {
  className?: string;
} & React.SVGProps<SVGSVGElement>) => {
  return (
    <span className={clsx(className, "inline-block")}>
      <HamburgerMenuSVG {...rest} />
    </span>
  );
};
