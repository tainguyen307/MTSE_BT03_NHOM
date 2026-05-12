import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-[rgb(252,248,248)]">
      <Navbar />

      <main className="pt-[64px] md:pt-[80px] min-h-screen">
        <Outlet />
      </main>

      <Footer />
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
