import { Link } from "react-router";
import svgPaths from "../../imports/RegisterPicklePro-1/svg-ucyrwx34w1";

export function RegisterPage() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-center relative min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
      }}
    >
      <TopNavBar />
      <MainContentStage />
      <SectionFooter />
      <DecorativeElements />
    </div>
  );
}

function TopNavBar() {
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
                <Link to="/login" className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Courts</p>
                </Link>
                <Link to="/login" className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Bookings</p>
                </Link>
                <Link to="/login" className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Leagues</p>
                </Link>
                <Link to="/login" className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Events</p>
                </Link>
              </nav>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <button className="bg-[#181c1f] content-stretch flex flex-col items-center justify-center px-[16px] md:px-[24px] py-[6px] md:py-[8px] relative rounded-[12px] shrink-0 hover:bg-[#2a2e31] transition-colors">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#818488] text-[14px] md:text-[16px] text-center">
                  <p className="leading-[1.5]">Book Now</p>
                </div>
              </button>
              <Link to="/profile" className="bg-[#ebe7e7] relative rounded-[9999px] shrink-0 size-[36px] md:size-[40px] border border-[#c5c6ca] overflow-clip hover:bg-[#e0dcd9] transition-colors">
                <img
                  alt="Profile"
                  className="absolute left-0 max-w-none size-full top-0 object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContentStage() {
  return (
    <div className="relative shrink-0 w-full flex items-center justify-center py-[120px] md:py-[200px] px-[16px] md:px-[32px]">
      <RegistrationCard />
    </div>
  );
}

function RegistrationCard() {
  return (
    <div className="bg-white max-w-[520px] relative shrink-0 w-full border border-[rgba(197,198,202,0.2)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] rounded-[16px]">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pb-[17px] pt-px px-px relative rounded-[inherit] size-full">
        <GlassmorphismHeader />
        <RegistrationForm />
      </div>
    </div>
  );
}

function GlassmorphismHeader() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full border-b border-[rgba(197,198,202,0.1)]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[25px] pt-[24px] px-[24px] md:px-[32px] relative size-full">
        <div className="relative shrink-0 w-full flex justify-center">
          <div className="bg-[#181c1f] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]">
            <div className="h-[29.423px] relative shrink-0 w-[26.667px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 29.4231">
                <g id="Container">
                  <path d={svgPaths.p38341260} fill="black" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[24px] md:text-[32px] text-center tracking-[-0.64px] pt-[3px] w-full">
          <p className="leading-[1.2]">Join the Pro Circuit</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] text-center w-full">
          <p className="leading-[1.5]">Create your PicklePro account to start playing</p>
        </div>
      </div>
    </div>
  );
}

function RegistrationForm() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] md:gap-[24px] items-start p-[24px] md:p-[32px] relative size-full">
        <FormFields />
        <TermsConditions />
        <RegisterButton />
        <LoginLink />
      </div>
    </div>
  );
}

function FormFields() {
  return (
    <div className="flex flex-col gap-[20px] md:gap-[24px] relative shrink-0 w-full">
      <FormField label="Full Name" placeholder="John Doe" icon={svgPaths.p85bff00} />
      <FormField label="Email Address" placeholder="john@example.com" icon={svgPaths.p13e73800} iconClass="h-[16px] w-[20px]" />
      <FormField label="Phone Number" placeholder="+1 (555) 000-0000" icon={svgPaths.p143e1930} iconClass="size-[18px]" />
      <PasswordFields />
    </div>
  );
}

function FormField(props) {
  const { label, placeholder, icon, iconClass = "size-[16px]" } = props;

  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[12px] md:text-[14px] tracking-[0.7px]">
        <p className="leading-[1.2]">{label}</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full">
          <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
            <input
              placeholder={placeholder}
              className="bg-transparent flex-1 pl-[32px] pr-[16px] py-[16px] md:py-[18px] text-[#1c1b1c] text-[14px] md:text-[16px] font-['Inter:Regular',sans-serif] outline-none w-full"
            />
          </div>
        </div>
        <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start left-[12px] md:left-[16px] top-[28.57%]">
          <div className={`relative shrink-0 ${iconClass}`}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={icon} fill="#75777A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PasswordFields() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-[20px] md:gap-[24px] relative shrink-0 w-full">
      <PasswordField label="Password" />
      <PasswordField label="Confirm Password" />
    </div>
  );
}

function PasswordField(props) {
  const { label } = props;

  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[12px] md:text-[14px] tracking-[0.7px]">
        <p className="leading-[1.2]">{label}</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full">
          <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
            <input
              type="password"
              placeholder="••••••••"
              className="bg-transparent flex-1 pl-[32px] pr-[16px] py-[16px] md:py-[18px] text-[#1c1b1c] text-[14px] md:text-[16px] font-['Inter:Regular',sans-serif] outline-none w-full"
            />
          </div>
        </div>
        <div className="absolute bottom-[28.57%] content-stretch flex flex-col items-start left-[12px] md:left-[16px] top-[28.57%]">
          <div className="h-[21px] relative shrink-0 w-[16px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
              <path d={svgPaths.p12930f00} fill="#75777A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TermsConditions() {
  return (
    <div className="content-stretch flex gap-[12px] md:gap-[16px] items-start pt-[8px] relative shrink-0 w-full">
      <div className="content-stretch flex h-[20px] items-center relative shrink-0 pt-[2px]">
        <input type="checkbox" className="bg-[#f6f3f2] relative rounded-[4px] shrink-0 size-[20px] border border-[#c5c6ca] cursor-pointer" />
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] flex-1">
        <p className="leading-[1.25]">
          <span>I agree to the </span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-black">Terms of Service</span>
          <span> and </span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-black">Privacy Policy</span>
          <span>.</span>
        </p>
      </div>
    </div>
  );
}

function RegisterButton() {
  return (
    <Link
      to="/profile"
      className="bg-[#181c1f] content-stretch flex gap-[12px] md:gap-[16px] items-center justify-center py-[20px] md:py-[24px] relative rounded-[12px] shrink-0 w-full shadow-[0px_10px_15px_-3px_rgba(24,28,31,0.2),0px_4px_6px_-4px_rgba(24,28,31,0.2)] hover:bg-[#2a2e31] transition-colors cursor-pointer"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-white text-[18px] md:text-[20px] text-center">
        <p className="leading-[1.4]">Register</p>
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

function LoginLink() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] text-center">
        <p className="leading-[1.5]">
          <span>Already have an account? </span>
          <Link to="/login" className="font-['Inter:Bold',sans-serif] font-bold not-italic text-black hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}

function SectionFooter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px] max-w-[1440px] pb-[48px] px-[16px] md:px-[32px] relative shrink-0 w-full">
      <FeatureCard
        bgColor="bg-[#e3e2e4]"
        icon={svgPaths.p30feaf00}
        iconColor="#5E5E60"
        title="League Play"
        description="Find players at your skill level."
      />
      <FeatureCard
        bgColor="bg-[#c4c7cb]"
        icon={svgPaths.p36846100}
        iconColor="black"
        title="Court Search"
        description="250+ courts across the country."
      />
      <div className="bg-[#5e5e60] relative rounded-[12px] shrink-0 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] min-h-[114px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[20px] md:gap-[24px] items-center p-[20px] md:p-[24px] relative size-full">
            <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[56px] md:size-[64px]">
              <div className="h-[35px] relative shrink-0 w-[26.667px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 35">
                  <g id="Container">
                    <path d={svgPaths.p1eda6480} fill="#E0E3E7" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] md:text-[20px] text-white mb-[-1px]">
                <p className="leading-[1.4]">PicklePro Plus</p>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c7c6c8] text-[12px] pb-[0.8px]">
                <p className="leading-[1.4]">Join 10k+ elite members.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard(props) {
  const { bgColor, icon, iconColor, title, description } = props;

  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 border border-[rgba(197,198,202,0.3)] min-h-[114px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] md:gap-[24px] items-center p-[20px] md:p-[25px] relative size-full">
          <div className={`${bgColor} relative rounded-[8px] shrink-0 size-[56px] md:size-[64px] flex items-center justify-center`}>
            <div className="relative shrink-0 w-[32px] h-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <path d={icon} fill={iconColor} />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 flex-1">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[18px] md:text-[20px] mb-[-1px]">
              <p className="leading-[1.4]">{title}</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[12px] pb-[0.8px]">
              <p className="leading-[1.4]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DecorativeElements() {
  return (
    <>
      <div className="absolute bg-[rgba(227,226,228,0.3)] blur-[50px] bottom-[-2.97%] left-[-5%] right-3/4 rounded-[9999px] top-[74.89%] z-[-1] pointer-events-none" />
      <div className="absolute bg-[rgba(224,227,231,0.2)] blur-[60px] inset-[-9.36%_-5%_71.92%_65%] rounded-[9999px] z-[-2] pointer-events-none" />
      <div className="absolute inset-[0_0_162px_0] opacity-10 z-[-3] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 2560 2372\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(181.02 0 0 167.73 1280 1186)\"><stop stop-color=\"rgba(71,104,0,1)\" offset=\"0.014731\"/><stop stop-color=\"rgba(71,104,0,0)\" offset=\"0.014731\"/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(249, 251, 235) 0%, rgb(249, 251, 235) 100%)" }} />
    </>
  );
}
