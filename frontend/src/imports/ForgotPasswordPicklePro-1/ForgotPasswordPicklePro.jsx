import svgPaths from "./svg-fqo2w8rxux";

function Container1() {
  return (
    <div className="relative shrink-0 size-[26.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667">
        <g id="Container">
          <path d={svgPaths.p2d47e8c0} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function IconBranding() {
  return (
    <div className="bg-[#181c1f] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]" data-name="Icon/Branding">
      <Container1 />
    </div>
  );
}

function IconBrandingMargin() {
  return (
    <div className="h-[88px] relative shrink-0 w-[64px]" data-name="Icon/Branding:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <IconBranding />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[-1px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[32px] text-center tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[38.4px]">Reset Your Password</p>
      </div>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="h-[46.39px] relative shrink-0 w-[317.42px]" data-name="Heading 1:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[280px] pl-[8.08px] pr-[8.09px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">Enter the email address associated</p>
        <p className="leading-[24px] mb-0">with your PicklePro account to</p>
        <p className="leading-[24px]">receive a reset link.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="max-w-[280px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[32px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#75777a] text-[16px] w-full">
        <p className="leading-[normal]">player@picklepro.com</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[48px] pr-[16px] py-[18px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start left-[16px] top-[28.57%]" data-name="Container">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #44474A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[32px]" data-name="Container">
      <Input />
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4px] not-italic text-[#1c1b1c] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[24px]">Email Address</p>
      </div>
      <Container4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #181C1F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e0e3e7] content-stretch flex gap-[8px] items-center justify-center py-[24px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181c1f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Send Reset Link</p>
      </div>
      <Container7 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form">
      <Container3 />
      <Button />
    </div>
  );
}

function FormMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Form />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p306f9a98} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[3.99px] items-center left-[calc(50%-0.01px)] top-0" data-name="Link">
      <Container9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Back to Login</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 pb-[0.8px] top-[56px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#75777a] text-[12px] whitespace-nowrap">
        <p>
          <span className="leading-[16.8px]">{`Need help? `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] not-italic text-[#5e5e60]">Contact Support</span>
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[73.8px] relative shrink-0 w-[163.63px]" data-name="Container">
      <Link />
      <div className="-translate-x-1/2 absolute bg-[rgba(197,198,202,0.3)] h-px left-[calc(50%-0.01px)] top-[40px] w-[48px]" data-name="Horizontal Divider" />
      <Container10 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <IconBrandingMargin />
          <Heading1Margin />
          <Margin />
          <FormMargin />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[50.39px] relative shrink-0 w-[357.98px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#44474a] text-[12px] top-[24.29px] whitespace-nowrap">
          <p className="leading-[16.8px] mb-0">For security reasons, we will only send a reset link if an</p>
          <p className="leading-[16.8px] mb-0">account exists for this email address. Please check your spam</p>
          <p className="leading-[16.8px]">{`folder if you don't receive it within 5 minutes.`}</p>
        </div>
      </div>
    </div>
  );
}

function ContextualInformationCard() {
  return (
    <div className="bg-[rgba(235,231,231,0.5)] relative rounded-[16px] shrink-0 w-full" data-name="Contextual Information Card">
      <div aria-hidden="true" className="absolute border border-[rgba(197,198,202,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[25px] relative size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p6c8ea80} fill="var(--fill-0, #5E5E60)" id="Icon" />
          </svg>
        </div>
        <Container11 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="absolute bg-[rgba(24,28,31,0.2)] blur-[32px] right-[-48px] rounded-[9999px] size-[128px] top-[-48px]" data-name="Background Decorative Element" />
      <div className="absolute bg-[rgba(227,226,228,0.2)] blur-[32px] bottom-[-48px] left-[-48px] rounded-[9999px] size-[128px]" data-name="Overlay+Blur" />
      <OverlayBorderOverlayBlur />
      <ContextualInformationCard />
    </div>
  );
}

function MainContentStage() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content Stage">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[64.31px] pt-[144.31px] px-[32px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c6ca] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16.8px]">© 2024 PicklePro Court Management Systems. All rights reserved.</p>
      </div>
    </div>
  );
}

function FooterSpace() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Space">
      <div className="content-stretch flex flex-col items-start pb-[32px] pt-[31px] px-[32px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e60] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[31.2px]">PicklePro</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Courts</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Bookings</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Leagues</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Events</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container14 />
      <Margin2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black content-stretch flex items-start justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Book Now</p>
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="666bf56459573c941501e0324ee6e8f6568a0320.png" />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#ebe7e7] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <UserProfile />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5c6ca] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button1 />
      <BackgroundBorder />
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[80px] max-w-[1440px] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <Container13 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavBarShell() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-start left-0 pb-px top-0 w-[1280px]" data-name="Header - TopNavBar Shell">
      <div aria-hidden="true" className="absolute border-[rgba(197,198,202,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Nav />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p7b061c0} fill="var(--fill-0, #818488)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#818488] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Link sent successfully</p>
        </div>
      </div>
    </div>
  );
}

function SuccessMessageToastComponent() {
  return (
    <div className="absolute bg-[#181c1f] content-stretch flex gap-[15.99px] items-center left-[511.38px] px-[25px] py-[17px] rounded-[12px] top-[96px] w-[257.25px]" data-name="Success Message (Toast Component)">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[257.25px]" data-name="Success Message (Toast Component):shadow" />
      <Container17 />
      <Container18 />
    </div>
  );
}

export default function ForgotPasswordPicklePro() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Forgot Password - PicklePro">
      <MainContentStage />
      <FooterSpace />
      <HeaderTopNavBarShell />
      <SuccessMessageToastComponent />
    </div>
  );
}