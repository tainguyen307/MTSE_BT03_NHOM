import svgPaths from "./svg-yazx4az4xv";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[32px] tracking-[-0.64px] w-full">
        <p className="leading-[38.4px]">Welcome Back</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] w-full">
        <p className="leading-[24px]">Enter your credentials to access your court.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#75777a] text-[16px] w-full">
        <p className="leading-[normal]">name@example.com</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f6f3f2] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[14px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function EmailField() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full" data-name="Email Field">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[16.8px]">Email Address</p>
      </div>
      <Input />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#75777a] text-[16px] w-full">
        <p className="leading-[normal]">••••••••</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f6f3f2] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[14px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function PasswordField() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full" data-name="Password Field">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[16.8px]">Password</p>
      </div>
      <Input1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[105.41px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#44474a] text-[14px] top-[7.5px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[16.8px]">Remember me</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#c5c6ca] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Container5 />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[133.92px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[14px] text-black top-[7.5px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[16.8px]">Forgot password?</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex items-center justify-between pt-px relative shrink-0 w-full" data-name="Options">
      <Label />
      <Link />
    </div>
  );
}

function Container6() {
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

function LoginButton() {
  return (
    <div className="bg-[#e0e3e7] content-stretch flex gap-[8px] h-[57px] items-center justify-center pt-px relative rounded-[12px] shrink-0 w-full" data-name="Login Button">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[56px] left-0 right-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-px" data-name="Login Button:shadow" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181c1f] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Login</p>
      </div>
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex inset-[1px_0_0_0] items-center justify-center" data-name="Container">
      <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#c5c6ca] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[182.22px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[16px] not-italic text-[#75777a] text-[14px] top-[7.5px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[16.8px]">OR CONTINUE WITH</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[16.8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Background />
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-[17px] relative shrink-0 w-full" data-name="Divider">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Google() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Google">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="496de1a053592d43011ce5f883764dca24ffdc38.png" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] h-[48px] items-center justify-center justify-self-start pl-[66.92px] pr-[66.94px] py-px relative rounded-[12px] row-1 shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c5c6ca] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Google />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Google</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p20467500} fill="var(--fill-0, #1877F2)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] h-[48px] items-center justify-center justify-self-start pl-[54.84px] pr-[54.86px] py-px relative rounded-[12px] row-1 shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c5c6ca] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Facebook</p>
      </div>
    </div>
  );
}

function SocialLogins() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_48px] pt-[0.99px] relative shrink-0 w-full" data-name="Social Logins">
      <Button />
      <Button1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full" data-name="Form">
      <EmailField />
      <PasswordField />
      <Options />
      <LoginButton />
      <Divider />
      <SocialLogins />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.59px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[16px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[25.6px]">{`Don't have an account? `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[25.6px] not-italic text-black">Sign up</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <Container1 />
      <Form />
      <Container10 />
    </div>
  );
}

function SectionLeftSideLoginForm() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[560px]" data-name="Section - Left Side: Login Form">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[682.81px] pt-[681.81px] px-[32px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function PickleballCourt() {
  return (
    <div className="absolute inset-[0_0_-0.4px_0] opacity-80" data-name="Pickleball Court">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.63%] left-0 max-w-none top-[-0.81%] w-full" src="4f15139057a848559167046031f5960a0cc03aa8.png" />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p42e11c0} fill="var(--fill-0, #E0E3E7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e3e7] text-[16px] tracking-[1.6px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">ELITE COURT MANAGEMENT</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[9px] relative size-full">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white tracking-[-1.92px] w-full">
          <p className="leading-[60px]">Elevate Your Game.</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.59px] pt-[7.8px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c6c8] text-[18px] w-full">
          <p className="leading-[28.8px] mb-0">PicklePro offers seamless court reservations,</p>
          <p className="leading-[28.8px] mb-0">league tracking, and event management for the</p>
          <p className="leading-[28.8px]">modern athlete. Join the elite community today.</p>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="max-w-[446px] mr-[-16px] relative rounded-[9999px] shadow-[0px_0px_0px_4px_#1a1c1d] shrink-0 size-[48px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="b0e089970a5d5e538595a811867acc28d0a16283.png" />
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="max-w-[446px] relative rounded-[9999px] shadow-[0px_0px_0px_4px_#1a1c1d] shrink-0 size-[48px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="b81b934854f28cedddedc481d24c58f87a055805.png" />
      </div>
    </div>
  );
}

function ImgAvatarMargin() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[430px] mr-[-16px] relative shrink-0 size-[48px]" data-name="Img - Avatar:margin">
      <Avatar1 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="max-w-[446px] relative rounded-[9999px] shadow-[0px_0px_0px_4px_#1a1c1d] shrink-0 size-[48px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="3b0d678080d20de7713abd8b3cd0b837af4ec11d.png" />
      </div>
    </div>
  );
}

function ImgAvatarMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[430px] mr-[-16px] relative shrink-0 size-[48px]" data-name="Img - Avatar:margin">
      <Avatar2 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e0e3e7] content-stretch flex items-center justify-center pb-[16.4px] pt-[14.6px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_4px_#1a1c1d] size-[48px] top-0" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#181c1f] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16.8px]">+12k</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[48px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip pt-[17px] relative rounded-[inherit] size-full">
        <Avatar />
        <ImgAvatarMargin />
        <ImgAvatarMargin1 />
        <Margin />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c7c6c8] text-[12px] w-full">
          <p className="leading-[16.8px]">Trusted by players worldwide</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[7px] items-start max-w-[512px] p-[33px] relative shrink-0 w-[512px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <Container11 />
      <Heading1 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function GlassmorphismOverlayContent() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(26,28,29,0.9)] inset-[0_0_-0.4px_0] items-start justify-end p-[48px] to-[rgba(26,28,29,0)] via-1/2 via-[rgba(26,28,29,0)]" data-name="Glassmorphism Overlay Content">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function SectionRightSideHighQualityIllustrationPhoto() {
  return (
    <div className="bg-[#1a1c1d] flex-[1_0_0] min-w-px overflow-clip relative self-stretch" data-name="Section - Right Side: High-Quality Illustration/Photo">
      <PickleballCourt />
      <GlassmorphismOverlayContent />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex h-[2047.6px] items-start overflow-clip pt-[80px] relative shrink-0 w-full" data-name="Main">
      <SectionLeftSideLoginForm />
      <SectionRightSideHighQualityIllustrationPhoto />
    </div>
  );
}

function Container18() {
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
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Courts</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Bookings</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Leagues</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Events</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Nav">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Book Now</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[80px] max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[32px] pr-[32.01px] relative size-full">
          <Container18 />
          <Nav />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavBarShellSuppressionHiddenOnLoginAsPerRulesButUserExplicitlyAskedForIt() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-start left-0 pb-px px-[560px] top-0 w-[2560px]" data-name="Header - TopNavBar (Shell Suppression: Hidden on Login as per rules, but user explicitly asked for it)">
      <div aria-hidden="true" className="absolute border-[rgba(197,198,202,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container17 />
    </div>
  );
}

export default function LoginPicklePro() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Login - PicklePro">
      <Main />
      <HeaderTopNavBarShellSuppressionHiddenOnLoginAsPerRulesButUserExplicitlyAskedForIt />
    </div>
  );
}