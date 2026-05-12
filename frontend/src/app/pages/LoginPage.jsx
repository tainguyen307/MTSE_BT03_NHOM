import { Link } from "react-router";
import svgPaths from "../../imports/LoginPicklePro-1/svg-yazx4az4xv";

export function LoginPage() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
      }}
    >
      <Main />
      <HeaderTopNavBar />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex h-[100vh] md:h-[2047.6px] items-start overflow-clip pt-[80px] relative shrink-0 w-full">
      <SectionLeftSideLoginForm />
      <SectionRightSideHero />
    </div>
  );
}

function SectionLeftSideLoginForm() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-full md:w-[560px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center py-[80px] md:pb-[682.81px] md:pt-[681.81px] px-[32px] relative size-full">
          <LoginFormContainer />
        </div>
      </div>
    </div>
  );
}

function LoginFormContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start max-w-[448px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[28px] md:text-[32px] tracking-[-0.64px] w-full">
          <p className="leading-[1.2]">Welcome Back</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] w-full">
          <p className="leading-[1.5]">Enter your credentials to access your court.</p>
        </div>
      </div>
      <LoginForm />
      <div className="content-stretch flex flex-col items-center pb-[0.59px] pt-[16px] relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] text-center">
          <p>
            <span className="leading-[1.6]">Don't have an account? </span>
            <Link to="/register" className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] not-italic text-black hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[23px] items-start relative shrink-0 w-full">
      <EmailField />
      <PasswordField />
      <Options />
      <LoginButton />
      <Divider />
      <SocialLogins />
    </div>
  );
}

function EmailField() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px]">
        <p className="leading-[1.2]">Email Address</p>
      </div>
      <div className="bg-[#f6f3f2] h-[48px] relative rounded-[12px] shrink-0 w-full">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <input
            type="email"
            placeholder="name@example.com"
            className="bg-transparent flex-1 px-[16px] py-[14px] text-[#1c1b1c] text-[16px] font-['Inter:Regular',sans-serif] outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}

function PasswordField() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px]">
        <p className="leading-[1.2]">Password</p>
      </div>
      <div className="bg-[#f6f3f2] h-[48px] relative rounded-[12px] shrink-0 w-full">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <input
            type="password"
            placeholder="••••••••"
            className="bg-transparent flex-1 px-[16px] py-[14px] text-[#1c1b1c] text-[16px] font-['Inter:Regular',sans-serif] outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex items-center justify-between pt-px relative shrink-0 w-full">
      <label className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer">
        <input type="checkbox" className="bg-white relative rounded-[4px] shrink-0 size-[20px] border border-[#c5c6ca] cursor-pointer" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px]">
          <p className="leading-[1.2]">Remember me</p>
        </div>
      </label>
      <Link to="/forgot-password" className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic text-[14px] text-black tracking-[0.7px] hover:underline">
        <p className="leading-[1.2]">Forgot password?</p>
      </Link>
    </div>
  );
}

function LoginButton() {
  return (
    <Link
      to="/profile"
      className="bg-[#181c1f] content-stretch flex gap-[8px] h-[56px] items-center justify-center pt-px relative rounded-[12px] shrink-0 w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#2a2e31] transition-colors cursor-pointer"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-white text-[18px] md:text-[20px] text-center">
        <p className="leading-[1.4]">Login</p>
      </div>
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Container">
            <path d={svgPaths.p1a406200} fill="white" />
          </g>
        </svg>
      </div>
    </Link>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-[17px] relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative">
        <div className="flex-[1_0_0] h-px min-w-px relative border-t border-[#c5c6ca]" />
      </div>
      <div className="content-stretch flex h-[16.8px] items-start justify-center relative shrink-0 w-full">
        <div className="bg-white relative self-stretch shrink-0 px-[16px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[16px] not-italic text-[#75777a] text-[12px] md:text-[14px] top-[7.5px] tracking-[0.7px] uppercase whitespace-nowrap">
            <p className="leading-[1.2]">OR CONTINUE WITH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLogins() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-2 grid-rows-1 pt-[0.99px] relative shrink-0 w-full">
      <button className="content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[24px] py-px relative rounded-[12px] shrink-0 border border-[#c5c6ca] hover:bg-gray-50 transition-colors cursor-pointer">
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          className="size-[20px]"
        />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[14px] md:text-[16px] text-center">
          <p className="leading-[1.5]">Google</p>
        </div>
      </button>
      <button className="content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[24px] py-px relative rounded-[12px] shrink-0 border border-[#c5c6ca] hover:bg-gray-50 transition-colors cursor-pointer">
        <div className="h-[19px] relative shrink-0 w-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
            <g id="Container">
              <path d={svgPaths.p20467500} fill="#1877F2" />
            </g>
          </svg>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[14px] md:text-[16px] text-center">
          <p className="leading-[1.5]">Facebook</p>
        </div>
      </button>
    </div>
  );
}

function SectionRightSideHero() {
  return (
    <div className="bg-[#1a1c1d] flex-[1_0_0] min-w-px overflow-clip relative self-stretch hidden md:block">
      <div className="absolute inset-[0_0_-0.4px_0] opacity-80">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt="Pickleball Court"
            className="absolute h-full left-0 max-w-none top-0 w-full object-cover"
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=2048&fit=crop"
          />
        </div>
      </div>
      <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(26,28,29,0.9)] inset-[0_0_-0.4px_0] items-start justify-end p-[48px] to-[rgba(26,28,29,0)] via-1/2 via-[rgba(26,28,29,0)]">
        <GlassmorphismOverlay />
      </div>
    </div>
  );
}

function GlassmorphismOverlay() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[7px] items-start max-w-[512px] p-[24px] md:p-[33px] relative shrink-0 w-full border border-[rgba(255,255,255,0.3)] rounded-[16px]">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Container">
              <path d={svgPaths.p42e11c0} fill="#E0E3E7" />
            </g>
          </svg>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e0e3e7] text-[14px] md:text-[16px] tracking-[1.6px] uppercase">
          <p className="leading-[1.5]">ELITE COURT MANAGEMENT</p>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[36px] md:text-[48px] text-white tracking-[-1.92px] w-full pt-[9px]">
        <p className="leading-[1.25]">Elevate Your Game.</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c6c8] text-[16px] md:text-[18px] w-full pb-[0.59px] pt-[7.8px]">
        <p className="leading-[1.6] mb-0">PicklePro offers seamless court reservations,</p>
        <p className="leading-[1.6] mb-0">league tracking, and event management for the</p>
        <p className="leading-[1.6]">modern athlete. Join the elite community today.</p>
      </div>
      <div className="flex items-start overflow-clip pt-[17px] relative shrink-0 w-full">
        <div className="mr-[-16px] relative rounded-[9999px] shadow-[0px_0px_0px_4px_#1a1c1d] shrink-0 size-[48px]">
          <img
            alt="User 1"
            className="absolute left-0 max-w-none size-full top-0 rounded-[9999px] object-cover"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=48&h=48&fit=crop&crop=faces"
          />
        </div>
        <div className="mr-[-16px] relative rounded-[9999px] shadow-[0px_0px_0px_4px_#1a1c1d] shrink-0 size-[48px]">
          <img
            alt="User 2"
            className="absolute left-0 max-w-none size-full top-0 rounded-[9999px] object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=faces"
          />
        </div>
        <div className="mr-[-16px] relative rounded-[9999px] shadow-[0px_0px_0px_4px_#1a1c1d] shrink-0 size-[48px]">
          <img
            alt="User 3"
            className="absolute left-0 max-w-none size-full top-0 rounded-[9999px] object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=faces"
          />
        </div>
        <div className="bg-[#e0e3e7] content-stretch flex items-center justify-center pb-[16.4px] pt-[14.6px] relative rounded-[9999px] shrink-0 size-[48px] shadow-[0px_0px_0px_4px_#1a1c1d]">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#181c1f] text-[12px] text-center">
            <p className="leading-[1.4]">+12k</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c7c6c8] text-[12px] w-full pb-[0.8px]">
        <p className="leading-[1.4]">Trusted by players worldwide</p>
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="fixed backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center left-0 pb-px px-[16px] md:px-[32px] top-0 w-full z-50 border-b border-[rgba(197,198,202,0.3)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="h-[64px] md:h-[80px] max-w-[1440px] relative shrink-0 w-full">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full w-full">
            <div className="content-stretch flex gap-[16px] md:gap-[32px] items-center relative shrink-0">
              <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e60] text-[20px] md:text-[24px] tracking-[-0.6px]">
                <p className="leading-[1.3]">PicklePro</p>
              </div>
              <nav className="content-stretch hidden md:flex gap-[24px] items-center relative shrink-0">
                <Link to="/login" className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Courts</p>
                </Link>
                <Link to="/login" className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Bookings</p>
                </Link>
                <Link to="/login" className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Leagues</p>
                </Link>
                <Link to="/login" className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Events</p>
                </Link>
              </nav>
            </div>
            <button className="bg-black content-stretch flex flex-col items-center justify-center px-[16px] md:px-[24px] py-[6px] md:py-[8px] relative rounded-[12px] shrink-0 hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-center text-white">
                <p className="leading-[1.5]">Book Now</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
