import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ROUTES } from "../../../constants";

export function ForgotPasswordPage() {
  const { forgotPassword, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await forgotPassword(email);
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Failed to send reset link");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%)"
      }}
    >
      <TopNavBar />

      <main className="flex-1 flex items-center justify-center px-[16px] md:px-[32px] py-[100px] md:py-[120px]">
        <div className="max-w-[448px] w-full">
          <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] relative rounded-[24px] md:rounded-[32px] w-full border border-[rgba(255,255,255,0.3)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
            <div className="p-[24px] md:p-[33px] flex flex-col gap-[20px] md:gap-[24px]">
              <div className="flex flex-col items-center gap-[16px] text-center">
                <div className="bg-[#181c1f] rounded-[16px] size-[56px] md:size-[64px] flex items-center justify-center">
                  <span className="text-[24px]">🔒</span>
                </div>

                <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#1c1b1c] text-[24px] md:text-[32px] tracking-[-0.64px] leading-[1.2]">
                  Reset Your Password
                </h1>

                <p className="font-['Inter:Regular',sans-serif] text-[#44474a] text-[14px] md:text-[16px] leading-[1.5] max-w-[280px]">
                  Enter the email address associated with your PicklePro account to receive a reset link.
                </p>
              </div>

              {error && (
                <div className="w-full p-[12px] bg-red-50 border border-red-200 rounded-[8px]">
                  <p className="text-red-600 text-[14px]">{error}</p>
                </div>
              )}

              {success ? (
                <div className="w-full p-[16px] bg-green-50 border border-green-200 rounded-[12px] text-center">
                  <p className="text-green-700 text-[14px] md:text-[16px] font-medium mb-[8px]">
                    Reset link sent successfully!
                  </p>
                  <p className="text-green-600 text-[12px] md:text-[14px]">
                    Please check your email for instructions to reset your password.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="player@picklepro.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>
              )}

              <div className="flex flex-col items-center gap-[16px] pt-[16px] border-t border-[rgba(197,198,202,0.3)]">
                <Link to={ROUTES.LOGIN} className="flex items-center gap-[4px] text-[14px] md:text-[16px] text-black hover:underline font-['Inter:Regular',sans-serif]">
                  <span>←</span>
                  <span>Back to Login</span>
                </Link>

                <p className="text-[11px] md:text-[12px] text-[#75777a] font-['Inter:Medium',sans-serif] text-center">
                  Need help?{" "}
                  <span className="font-semibold text-[#5e5e60] hover:underline cursor-pointer">
                    Contact Support
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Contextual Information */}
          <div className="mt-[24px] bg-[rgba(235,231,231,0.5)] rounded-[16px] border border-[rgba(197,198,202,0.2)] p-[20px] md:p-[25px] flex gap-[12px] md:gap-[16px]">
            <div className="shrink-0 size-[20px] mt-[2px]">
              <span>ℹ️</span>
            </div>
            <p className="text-[11px] md:text-[12px] text-[#44474a] font-['Inter:Medium',sans-serif] leading-[1.4]">
              For security reasons, we will only send a reset link if an account exists for this email address. Please check your spam folder if you don't receive it within 5 minutes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="fixed backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] w-full z-50 border-b border-[rgba(197,198,202,0.3)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="h-[64px] md:h-[80px] max-w-[1440px] mx-auto px-[16px] md:px-[32px]">
        <div className="flex items-center justify-between h-full">
          <Link to={ROUTES.LOGIN} className="font-['Inter:Black',sans-serif] font-black text-[#5e5e60] text-[20px] md:text-[24px] tracking-[-0.6px] leading-[1.3]">
            PicklePro
          </Link>
          <button className="bg-black text-white px-[16px] md:px-[24px] py-[6px] md:py-[8px] rounded-[12px] font-['Inter:Bold',sans-serif] font-bold text-[14px] md:text-[16px] hover:bg-gray-800 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(197,198,202,0.3)]">
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[32px] py-[24px] md:py-[32px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#c5c6ca] text-[11px] md:text-[12px] text-center leading-[1.4]">
          © 2024 PicklePro Court Management Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
