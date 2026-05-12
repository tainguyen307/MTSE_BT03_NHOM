import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ROUTES } from "../../../constants";

export function RegisterPage() {
  const { register, isLoading, error } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await register({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <div
      className="content-stretch flex flex-col isolate items-center relative min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%)"
      }}
    >
      <TopNavBar />
      <MainContentStage
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="fixed backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center left-0 pb-px px-[16px] md:px-[32px] top-0 w-full z-50 border-b border-[rgba(197,198,202,0.3)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="h-[64px] md:h-[80px] max-w-[1440px] relative shrink-0 w-full">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full w-full">
            <Link to={ROUTES.LOGIN} className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e60] text-[20px] md:text-[24px] tracking-[-0.6px]">
              <p className="leading-[1.3]">PicklePro</p>
            </Link>
            <button className="bg-[#181c1f] content-stretch flex flex-col items-center justify-center px-[16px] md:px-[24px] py-[6px] md:py-[8px] relative rounded-[12px] shrink-0 hover:bg-[#2a2e31] transition-colors">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#818488] text-[14px] md:text-[16px] text-center">
                <p className="leading-[1.5]">Book Now</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContentStage(props) {
  const { formData, errors, handleChange, handleSubmit, isLoading, error } = props;

  return (
    <div className="relative shrink-0 w-full flex items-center justify-center py-[120px] md:py-[150px] px-[16px] md:px-[32px]">
      <div className="bg-white max-w-[520px] relative shrink-0 w-full border border-[rgba(197,198,202,0.2)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] rounded-[16px]">
        <div className="content-stretch flex flex-col items-start p-[24px] md:p-[32px] relative size-full gap-[20px] md:gap-[24px]">
          <div className="flex flex-col gap-[8px] w-full text-center">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#1c1b1c] text-[24px] md:text-[32px] tracking-[-0.64px] leading-[1.2]">
              Join the Pro Circuit
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-[#44474a] text-[14px] md:text-[16px] leading-[1.5]">
              Create your PicklePro account to start playing
            </p>
          </div>

          {error && (
            <div className="w-full p-[12px] bg-red-50 border border-red-200 rounded-[8px]">
              <p className="text-red-600 text-[14px]">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full">
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              error={errors.fullName}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={errors.email}
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              error={errors.phone}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                error={errors.password}
                required
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                error={errors.confirmPassword}
                required
              />
            </div>

            <div className="flex gap-[12px] items-start">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
                className="mt-[2px] size-[20px] rounded border-[#c5c6ca] cursor-pointer"
              />
              <p className="flex-1 text-[14px] md:text-[16px] text-[#44474a] leading-[1.4]">
                I agree to the{" "}
                <span className="font-semibold text-black">Terms of Service</span> and{" "}
                <span className="font-semibold text-black">Privacy Policy</span>.
              </p>
            </div>
            {errors.agreeToTerms && <p className="text-red-500 text-[12px] -mt-[16px]">{errors.agreeToTerms}</p>}

            <Button type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </Button>

            <div className="text-center">
              <p className="text-[14px] md:text-[16px] text-[#44474a]">
                Already have an account?{" "}
                <Link to={ROUTES.LOGIN} className="font-bold text-black hover:underline">
                  Log in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
