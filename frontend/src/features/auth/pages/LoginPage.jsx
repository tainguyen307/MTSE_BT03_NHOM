import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ROUTES } from "../../../constants";
import svgPaths from "../../../imports/LoginPicklePro-1/svg-yazx4az4xv";

export function LoginPage() {
  const { login, isLoading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({ email, password });
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%)"
      }}
    >
      <Main onSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} isLoading={isLoading} error={error} />
      <HeaderTopNavBar />
    </div>
  );
}

function Main(props) {
  const { onSubmit, email, setEmail, password, setPassword, isLoading, error } = props;

  return (
    <div className="content-stretch flex h-[100vh] md:h-[2047.6px] items-start overflow-clip pt-[80px] relative shrink-0 w-full">
      <SectionLeftSideLoginForm onSubmit={onSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} isLoading={isLoading} error={error} />
      <SectionRightSideHero />
    </div>
  );
}

function SectionLeftSideLoginForm(props) {
  const { onSubmit, email, setEmail, password, setPassword, isLoading, error } = props;

  return (
    <div className="bg-white relative self-stretch shrink-0 w-full md:w-[560px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center py-[80px] md:pb-[682.81px] md:pt-[681.81px] px-[32px] relative size-full">
          <LoginFormContainer onSubmit={onSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  );
}

function LoginFormContainer(props) {
  const { onSubmit, email, setEmail, password, setPassword, isLoading, error } = props;

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

      {error && (
        <div className="w-full p-[12px] bg-red-50 border border-red-200 rounded-[8px]">
          <p className="text-red-600 text-[14px]">{error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="content-stretch flex flex-col gap-[20px] md:gap-[23px] items-start relative shrink-0 w-full">
        <Input
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="content-stretch flex items-center justify-between pt-px relative shrink-0 w-full">
          <label className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer">
            <input type="checkbox" className="bg-white relative rounded-[4px] shrink-0 size-[20px] border border-[#c5c6ca] cursor-pointer" />
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] tracking-[0.7px]">
              <p className="leading-[1.2]">Remember me</p>
            </div>
          </label>
          <Link to={ROUTES.FORGOT_PASSWORD} className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic text-[14px] text-black tracking-[0.7px] hover:underline">
            <p className="leading-[1.2]">Forgot password?</p>
          </Link>
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div className="content-stretch flex flex-col items-center pb-[0.59px] pt-[16px] relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[14px] md:text-[16px] text-center">
          <p>
            <span className="leading-[1.6]">Don't have an account? </span>
            <Link to={ROUTES.REGISTER} className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] not-italic text-black hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
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
              <Link to={ROUTES.LOGIN} className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e60] text-[20px] md:text-[24px] tracking-[-0.6px]">
                <p className="leading-[1.3]">PicklePro</p>
              </Link>
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
