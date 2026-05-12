import svgPaths from "./svg-ucyrwx34w1";

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e60] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[31.2px]">PicklePro</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Courts</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Bookings</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Leagues</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Events</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[24px] h-[28px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#181c1f] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#818488] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Book Now</p>
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="882a501ccc4ab8a75b83e0dad62480d6f1b832d6.png" />
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

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button />
      <BackgroundBorder />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] max-w-[1440px] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <Container1 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[80px] items-start justify-center left-0 pb-px px-[560px] right-0 top-0 z-[6]" data-name="TopNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(197,198,202,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[29.423px] relative shrink-0 w-[26.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 29.4231">
        <g id="Container">
          <path d={svgPaths.p38341260} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#181c1f] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[3px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[32px] text-center tracking-[-0.64px] whitespace-nowrap">
          <p className="leading-[38.4px]">Join the Pro Circuit</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Create your PicklePro account to start playing</p>
        </div>
      </div>
    </div>
  );
}

function GlassmorphismHeader() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full" data-name="Glassmorphism Header">
      <div aria-hidden="true" className="absolute border-[rgba(197,198,202,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[25px] pt-[24px] px-[32px] relative size-full">
        <Container5 />
        <Heading />
        <Container7 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">John Doe</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[32px] pr-[16px] py-[18px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start left-[16px] top-[28.57%]" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #75777A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container11 />
    </div>
  );
}

function FullName() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4.8px] items-start relative row-1 self-start shrink-0 w-[454px]" data-name="Full Name">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[16.8px]">Full Name</p>
      </div>
      <Container9 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">john@example.com</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[32px] pr-[16px] py-[18px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start left-[16px] top-[28.57%]" data-name="Container">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #75777A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container14 />
    </div>
  );
}

function Email() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4.8px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Email">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[16.8px]">Email Address</p>
      </div>
      <Container12 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">+1 (555) 000-0000</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[32px] pr-[16px] py-[18px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start left-[16px] top-[28.57%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, #75777A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input2 />
      <Container17 />
    </div>
  );
}

function PhoneNumber() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4.79px] items-start justify-self-stretch relative row-3 self-start shrink-0" data-name="Phone Number">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[16.8px]">Phone Number</p>
      </div>
      <Container15 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">••••••••</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[32px] pr-[16px] py-[18px] relative size-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start left-[16px] top-[28.57%]" data-name="Container">
      <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
          <path d={svgPaths.p12930f00} fill="var(--fill-0, #75777A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input3 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4.8px] items-start relative row-1 self-start shrink-0 w-[215px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[16.8px]">Password</p>
      </div>
      <Container19 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">••••••••</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[32px] pr-[16px] py-[18px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start left-[16px] top-[28.57%]" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p2b677030} fill="var(--fill-0, #75777A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input4 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[4.8px] items-start relative row-1 self-start shrink-0 w-[215px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[16.8px]">Confirm Password</p>
      </div>
      <Container23 />
    </div>
  );
}

function PasswordFields() {
  return (
    <div className="col-1 gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_76.80px] justify-self-stretch relative row-4 self-start shrink-0" data-name="Password Fields">
      <Container18 />
      <Container22 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[____76.80px_76.80px_76.80px_76.80px] relative shrink-0 w-full" data-name="Container">
      <FullName />
      <Email />
      <PhoneNumber />
      <PasswordFields />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#f6f3f2] relative rounded-[4px] shrink-0 size-[20px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#c5c6ca] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function TermsConditions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Terms & Conditions">
      <Container26 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] whitespace-nowrap">
        <p>
          <span className="leading-[20px]">{`I agree to the `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic text-black">Terms of Service</span>
          <span className="leading-[20px]">{` and `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic text-black">Privacy Policy</span>
          <span className="leading-[20px]">.</span>
        </p>
      </div>
    </div>
  );
}

function Container27() {
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

function RegisterButton() {
  return (
    <div className="bg-[#181c1f] content-stretch flex gap-[16px] items-center justify-center py-[24px] relative rounded-[12px] shrink-0 w-full" data-name="Register Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(24,28,31,0.2),0px_4px_6px_-4px_rgba(24,28,31,0.2)]" data-name="Register Button:shadow" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181c1f] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Register</p>
      </div>
      <Container27 />
    </div>
  );
}

function LoginLink() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Login Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[24px]">{`Already have an account? `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-black">Log in here</span>
        </p>
      </div>
    </div>
  );
}

function RegistrationForm() {
  return (
    <div className="relative shrink-0 w-full" data-name="Registration Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <Container8 />
        <TermsConditions />
        <RegisterButton />
        <LoginLink />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white max-w-[520px] relative shrink-0 w-[520px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pb-[17px] pt-px px-px relative rounded-[inherit] size-full">
        <GlassmorphismHeader />
        <RegistrationForm />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(197,198,202,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function MainContentStage() {
  return (
    <div className="min-h-[2372px] relative shrink-0 w-full z-[5]" data-name="Main Content Stage">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] pb-[721.72px] pt-[817.7px] px-[16px] relative size-full">
          <BackgroundBorderShadow />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 20">
        <g id="Container">
          <path d={svgPaths.p30feaf00} fill="var(--fill-0, #5E5E60)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e3e2e4] relative rounded-[8px] shrink-0 size-[64px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">League Play</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px]">Find players at your skill level.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-[171.78px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Container30 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[114px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(197,198,202,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[25px] relative size-full">
          <Background1 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[33.333px] relative shrink-0 w-[26.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 33.3333">
        <g id="Container">
          <path d={svgPaths.p36846100} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#c4c7cb] relative rounded-[8px] shrink-0 size-[64px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Court Search</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px]">250+ courts across the country.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-[184.11px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Container33 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[114px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(197,198,202,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[25px] relative size-full">
          <Background2 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[35px] relative shrink-0 w-[26.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 35">
        <g id="Container">
          <path d={svgPaths.p1eda6480} fill="var(--fill-0, #E0E3E7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[64px]" data-name="Overlay">
      <Container34 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">PicklePro Plus</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c7c6c8] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px]">Join 10k+ elite members.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[142.53px]" data-name="Container">
      <Heading3 />
      <Container36 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#5e5e60] col-3 h-[114px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_0_0] rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Overlay />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function SectionFooterGraphicContentAsymmetricLayout() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_114px] max-w-[1440px] pb-[48px] px-[32px] relative shrink-0 w-[1440px] z-[4]" data-name="Section - Footer Graphic Content (Asymmetric Layout)">
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <Background3 />
    </div>
  );
}

export default function RegisterPicklePro() {
  return (
    <div className="content-stretch flex flex-col isolate items-center relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Register - PicklePro">
      <TopNavBar />
      <MainContentStage />
      <SectionFooterGraphicContentAsymmetricLayout />
      <div className="absolute bg-[rgba(227,226,228,0.3)] blur-[50px] bottom-[-2.97%] left-[-5%] right-3/4 rounded-[9999px] top-[74.89%] z-[3]" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(224,227,231,0.2)] blur-[60px] inset-[-9.36%_-5%_71.92%_65%] rounded-[9999px] z-[2]" data-name="Overlay+Blur" />
      <div className="absolute inset-[0_0_162px_0] opacity-10 z-[1]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 2560 2372\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(181.02 0 0 167.73 1280 1186)\\'><stop stop-color=\\'rgba(71,104,0,1)\\' offset=\\'0.014731\\'/><stop stop-color=\\'rgba(71,104,0,0)\\' offset=\\'0.014731\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(249, 251, 235) 0%, rgb(249, 251, 235) 100%)" }} data-name="Subtle Sport Background Decorations" />
    </div>
  );
}