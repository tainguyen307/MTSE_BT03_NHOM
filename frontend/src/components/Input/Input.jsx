import { forwardRef } from 'react';

export const Input = forwardRef(function Input(props, ref) {
  const {
    label,
    type = "text",
    placeholder,
    error,
    icon,
    iconPosition = "left",
    disabled = false,
    fullWidth = true,
    required = false,
    className = "",
    ...rest
  } = props;

  const baseInputStyles = "bg-[#f6f3f2] flex-1 text-[#1c1b1c] text-[14px] md:text-[16px] font-['Inter:Regular',sans-serif] outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  const inputPadding = icon ?
    (iconPosition === "left" ? "pl-[40px] md:pl-[48px] pr-[16px]" : "pl-[16px] pr-[40px] md:pr-[48px]")
    : "px-[16px]";

  return (
    <div className={`flex flex-col gap-[4.8px] ${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic text-[#44474a] text-[12px] md:text-[14px] tracking-[0.7px]">
          <p className="leading-[1.2]">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </p>
        </label>
      )}

      <div className="relative">
        <div className="bg-[#f6f3f2] h-[48px] relative rounded-[12px] w-full">
          <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
            <input
              ref={ref}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={`${baseInputStyles} ${inputPadding} py-[14px] md:py-[16px] w-full`}
              {...rest}
            />
          </div>
        </div>

        {icon && (
          <div className={`absolute bottom-[28.57%] top-[28.57%] ${iconPosition === 'left' ? 'left-[12px] md:left-[16px]' : 'right-[12px] md:right-[16px]'}`}>
            <div className="relative shrink-0 size-[16px] md:size-[20px]">
              {icon}
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-[12px] md:text-[14px] font-['Inter:Regular',sans-serif]">
          {error}
        </p>
      )}
    </div>
  );
});
