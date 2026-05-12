export function Card(props) {
  const {
    children,
    variant = "default",
    padding = "md",
    className = "",
    ...rest
  } = props;

  const baseStyles = "bg-white relative rounded-[12px] shrink-0";

  const variants = {
    default: "border border-[#c5c6ca] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]",
    elevated: "border border-[rgba(197,198,202,0.2)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]",
    outlined: "border border-[#c5c6ca]",
    ghost: "border-none shadow-none"
  };

  const paddings = {
    none: "",
    sm: "p-[16px]",
    md: "p-[24px] md:p-[32px]",
    lg: "p-[32px] md:p-[48px]"
  };

  const classes = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`;

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export function CardHeader(props) {
  const { children, className = "", ...rest } = props;

  return (
    <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] mb-[20px] md:mb-[24px] ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle(props) {
  const { children, className = "", ...rest } = props;

  return (
    <h3 className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1c] text-[18px] md:text-[20px] leading-[1.4] ${className}`} {...rest}>
      {children}
    </h3>
  );
}

export function CardContent(props) {
  const { children, className = "", ...rest } = props;

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
