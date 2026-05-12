import { Link } from "react-router";

export function Button(props) {
  const {
    children,
    variant = "primary",
    size = "md",
    type = "button",
    disabled = false,
    fullWidth = false,
    icon,
    iconPosition = "left",
    to,
    href,
    onClick,
    className = "",
    ...rest
  } = props;

  const baseStyles = "inline-flex items-center justify-center gap-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold rounded-[12px] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#181c1f] text-white hover:bg-[#2a2e31] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]",
    secondary: "bg-[#e0e3e7] text-[#181c1f] hover:bg-[#d5d8dc] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]",
    outline: "border border-[#c5c6ca] text-[#181c1f] hover:bg-gray-50",
    ghost: "text-[#181c1f] hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700"
  };

  const sizes = {
    sm: "px-[12px] py-[6px] text-[14px]",
    md: "px-[20px] py-[12px] text-[16px]",
    lg: "px-[24px] py-[16px] text-[18px]"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span className="leading-[1.5]">{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
