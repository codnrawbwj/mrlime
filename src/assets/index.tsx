import clsx from "clsx";
import HamburgerMenuSVG from "./svg/burger-menu-icon.svg";
import SearchIconSVG from "./svg/search-icon.svg";
import CloseIconSVG from "./svg/close-icon.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const HamburgerMenuIcon: React.FC<IconProps> = ({
  className,
  ...rest
}) => {
  return (
    <span className={clsx(className, "inline-block")}>
      <HamburgerMenuSVG {...rest} />
    </span>
  );
};

export const SearchIcon: React.FC<IconProps> = ({ className, ...rest }) => {
  return (
    <span className={clsx(className, "inline-block")}>
      <SearchIconSVG {...rest} />
    </span>
  );
};

export const CloseIcon: React.FC<IconProps> = ({ className, ...rest }) => {
  return (
    <span className={clsx(className, "inline-block")}>
      <CloseIconSVG {...rest} />
    </span>
  );
};
