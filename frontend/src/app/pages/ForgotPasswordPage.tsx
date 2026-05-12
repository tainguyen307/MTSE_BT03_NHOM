import { Link } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/ForgotPasswordPicklePro-1/svg-fqo2w8rxux";

export function ForgotPasswordPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div
      className="content-stretch flex flex-col items-start relative min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
      }}
    >
      <MainContentStage onSubmit={() => setShowSuccess(true)} />
      <FooterSpace />
      <HeaderTopNavBarShell />
      {showSuccess && <SuccessMessageToast onClose={() => setShowSuccess(false)} />}
    </div>
  );
}

function MainContentStage(props) {
  const { onSubmit } = props;

  return (
    <div className="relative shrink-0 w-full flex-1 flex items-center justify-center">
      <div className="content-stretch flex items-center justify-center py-[80px] md:py-[120px] px-[16px] md:px-[32px] relative size-full">
        <Container onSubmit={onSubmit} />
      </div>
    </div>
  );
}

function Container(props) {
  const { onSubmit } = props;

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[448px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(24,28,31,0.2)] blur-[32px] right-[-48px] rounded-[9999px] size-[128px] top-[-48px] pointer-events-none" />
      <div className="absolute bg-[rgba(227,226,228,0.2)] blur-[32px] bottom-[-48px] left-[-48px] rounded-[9999px] size-[128px] pointer-events-none" />
      <OverlayCard onSubmit={onSubmit} />
      <ContextualInformationCard />
    </div>
  );
}

function OverlayCard(props) {
  const { onSubmit } = props;

  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] relative rounded-[24px] md:rounded-[32px] shrink-0 w-full border border-[rgba(255,255,255,0.3)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[24px] md:p-[33px] relative size-full gap-[20px] md:gap-[24px]">
          <IconBranding />
          <Heading />
          <Description />
          <FormSection onSubmit={onSubmit} />
          <BackToLogin />
        </div>
      </div>
    </div>
  );
}

function IconBranding() {
  return (
    <div className="bg-[#181c1f] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[56px] md:size-[64px]">
      <div className="relative shrink-0 size-[24px] md:size-[26.667px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667">
          <g id="Container">
            <path d={svgPaths.p2d47e8c0} fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[24px] md:text-[32px] text-center tracking-[-0.64px]">
      <p className="leading-[1.2]">Reset Your Password</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[280px] relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] text-center">
        <p className="leading-[1.5] mb-0">Enter the email address associated</p>
        <p className="leading-[1.5] mb-0">with your PicklePro account to</p>
        <p className="leading-[1.5]">receive a reset link.</p>
      </div>
    </div>
  );
}

function FormSection(props) {
  const { onSubmit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[20px] md:gap-[24px] items-start relative shrink-0 w-full">
      <EmailField />
      <SendButton />
    </form>
  );
}

function EmailField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#1c1b1c] text-[14px] md:text-[16px]">
        <p className="leading-[1.5]">Email Address</p>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full">
          <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
            <input
              type="email"
              placeholder="player@picklepro.com"
              className="bg-transparent flex-1 pl-[40px] md:pl-[48px] pr-[16px] py-[16px] md:py-[18px] text-[#1c1b1c] text-[14px] md:text-[16px] font-['Inter:Regular',sans-serif] outline-none w-full"
            />
          </div>
        </div>
        <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start left-[12px] md:left-[16px] top-[28.57%]">
          <div className="h-[16px] relative shrink-0 w-[20px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p13e73800} fill="#44474A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SendButton() {
  return (
    <button
      type="submit"
      className="bg-[#181c1f] content-stretch flex gap-[8px] items-center justify-center py-[20px] md:py-[24px] relative rounded-[12px] shrink-0 w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#2a2e31] transition-colors cursor-pointer"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-white text-[14px] md:text-[16px] text-center">
        <p className="leading-[1.5]">Send Reset Link</p>
      </div>
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Container">
            <path d={svgPaths.p1a406200} fill="white" />
          </g>
        </svg>
      </div>
    </button>
  );
}

function BackToLogin() {
  return (
    <div className="relative shrink-0 w-full flex flex-col items-center gap-[16px]">
      <Link to="/login" className="content-stretch flex gap-[4px] items-center hover:opacity-80 transition-opacity">
        <div className="relative shrink-0 size-[9.333px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <g id="Container">
              <path d={svgPaths.p306f9a98} fill="black" />
            </g>
          </svg>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-black">
          <p className="leading-[1.5]">Back to Login</p>
        </div>
      </Link>
      <div className="bg-[rgba(197,198,202,0.3)] h-px w-[48px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#75777a] text-[11px] md:text-[12px] text-center">
        <p className="leading-[1.4]">
          <span>Need help? </span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#5e5e60] hover:underline cursor-pointer">Contact Support</span>
        </p>
      </div>
    </div>
  );
}

function ContextualInformationCard() {
  return (
    <div className="bg-[rgba(235,231,231,0.5)] relative rounded-[16px] shrink-0 w-full border border-[rgba(197,198,202,0.2)]">
      <div className="content-stretch flex gap-[12px] md:gap-[16px] items-start p-[20px] md:p-[25px] relative size-full">
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p6c8ea80} fill="#5E5E60" />
          </svg>
        </div>
        <div className="relative shrink-0 flex-1">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic text-[#44474a] text-[11px] md:text-[12px]">
            <p className="leading-[1.4] mb-0">For security reasons, we will only send a reset link if an</p>
            <p className="leading-[1.4] mb-0">account exists for this email address. Please check your spam</p>
            <p className="leading-[1.4]">folder if you don't receive it within 5 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterSpace() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[24px] md:pb-[32px] pt-[24px] md:pt-[31px] px-[16px] md:px-[32px] relative size-full">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c6ca] text-[11px] md:text-[12px] text-center">
            <p className="leading-[1.4]">© 2024 PicklePro Court Management Systems. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavBarShell() {
  return (
    <div className="fixed backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center left-0 pb-px top-0 w-full z-50 border-b border-[rgba(197,198,202,0.3)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="h-[64px] md:h-[80px] max-w-[1440px] relative shrink-0 w-full">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[16px] md:px-[32px] relative size-full w-full">
            <div className="content-stretch flex gap-[12px] md:gap-[16px] items-center relative shrink-0">
              <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e60] text-[20px] md:text-[24px] tracking-[-0.6px]">
                <p className="leading-[1.3]">PicklePro</p>
              </div>
              <div className="content-stretch hidden md:flex gap-[20px] md:gap-[24px] items-center relative shrink-0 pl-[12px]">
                <Link to="/login" className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] hover:text-black transition-colors">
                  <p className="leading-[1.5]">Courts</p>
                </Link>
                <Link to="/login" className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] hover:text-black transition-colors">
                  <p className="leading-[1.5]">Bookings</p>
                </Link>
                <Link to="/login" className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] hover:text-black transition-colors">
                  <p className="leading-[1.5]">Leagues</p>
                </Link>
                <Link to="/login" className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] hover:text-black transition-colors">
                  <p className="leading-[1.5]">Events</p>
                </Link>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] md:gap-[16px] items-center relative shrink-0">
              <button className="bg-black content-stretch flex items-start justify-center px-[16px] md:px-[24px] py-[6px] md:py-[8px] relative rounded-[12px] shrink-0 hover:bg-gray-800 transition-colors">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-center text-white">
                  <p className="leading-[1.5]">Book Now</p>
                </div>
              </button>
              <Link to="/profile" className="bg-[#ebe7e7] relative rounded-[9999px] shrink-0 size-[36px] md:size-[40px] border border-[#c5c6ca] overflow-clip hover:bg-[#e0dcd9] transition-colors">
                <img alt="Profile" className="absolute left-0 max-w-none size-full top-0 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessMessageToast(props) {
  const { onClose } = props;

  useState(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bg-[#181c1f] content-stretch flex gap-[12px] md:gap-[15.99px] items-center left-1/2 -translate-x-1/2 px-[20px] md:px-[25px] py-[14px] md:py-[17px] rounded-[12px] top-[80px] md:top-[96px] max-w-[90vw] border border-[rgba(0,0,0,0.2)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] animate-[fadeIn_0.3s_ease-in-out] z-[100]">
      <div className="relative shrink-0 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Container">
            <path d={svgPaths.p7b061c0} fill="#818488" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#818488] text-[14px] md:text-[16px]">
          <p className="leading-[1.5]">Link sent successfully</p>
        </div>
      </div>
    </div>
  );
}
