import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useUser } from "../../../hooks/useUser";
import { ROUTES } from "../../../constants";
import svgPaths from "../../../imports/UserProfilePicklePro-1/svg-32x009dzzc";

const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=faces";

export function ProfilePage() {
  const { profile, stats, fetchProfile, isLoading } = useUser();

  // fetchProfile bọc bằng useCallback để ổn định reference
  const stableFetchProfile = useCallback(fetchProfile, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    stableFetchProfile();
  }, [stableFetchProfile]);

  return (
    <div
      className="content-stretch flex flex-col items-start relative min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%)"
      }}
    >
      {/* Navbar được cung cấp bởi MainLayout — không cần render riêng */}
      <MainContentArea profile={profile} stats={stats} isLoading={isLoading} />
    </div>
  );
}

// ─── Main Content ─────────────────────────────────────────────────────────────

function MainContentArea({ profile, stats, isLoading }) {
  if (isLoading && !profile) {
    return (
      <div className="relative shrink-0 w-full flex-1 flex items-center justify-center min-h-[60vh]">
        <p className="text-[#44474a] text-[16px]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 w-full flex-1">
      <div className="content-stretch flex flex-col items-center p-[16px] md:p-[48px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start max-w-[1440px] relative shrink-0 w-full">
          <PageHeader />
          <StatsGrid stats={stats} />
          <ProfileInformationCard profile={profile} />
        </div>
      </div>
    </div>
  );
}

// ─── Page Header (có nút Log Out) ─────────────────────────────────────────────

function PageHeader() {
  const { logout } = useAuth();

  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[24px] md:text-[32px] tracking-[-0.64px]">
          <p className="leading-[1.2]">My Dashboard</p>
        </div>
        <button
          onClick={logout}
          className="content-stretch flex gap-[8px] items-center px-[20px] md:px-[24px] py-[10px] md:py-[12px] relative rounded-[12px] shrink-0 border border-[#c5c6ca] hover:bg-gray-50 transition-colors"
        >
          <div className="relative shrink-0 size-[16px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p2d5ed380} fill="#181C1F" />
            </svg>
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-black text-center">
            <p className="leading-[1.5]">Log Out</p>
          </div>
        </button>
      </div>
    </div>
  );
}

// ─── Stats Grid ───────────────────────────────────────────────────────────────

function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[24px] relative shrink-0 w-full">
      <StatCard
        icon={svgPaths.p116b1b00}
        iconBg="#181C1F"
        iconFill="#818488"
        badge="+12% vs last month"
        title="TOTAL BOOKINGS"
        value={stats?.totalBookings ?? 0}
      />
      <StatCard
        icon={svgPaths.p782a700}
        iconBg="#E3E2E4"
        iconFill="#646466"
        badge="Upcoming: 2"
        title="MATCHES THIS WEEK"
        value={stats?.matchesThisWeek ?? 0}
        badgeBg="#e0e3e7"
      />
      <StatCard
        icon={svgPaths.peaa4ca0}
        iconBg="#EBE7E7"
        iconFill="#44474A"
        button="Refill"
        title="CLUB CREDITS"
        value={stats?.clubCredits ? `$${stats.clubCredits}` : "$0.00"}
        borderLeft
      />
    </div>
  );
}

function StatCard({ icon, iconBg, iconFill, badge, button, title, value, badgeBg = "transparent", borderLeft = false }) {
  return (
    <div className={`bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 ${borderLeft ? 'border-l-4 border-[#c5c6ca]' : 'border border-[#c5c6ca]'} min-h-[180px] md:min-h-[197px]`}>
      <div className={`content-stretch flex flex-col gap-[3px] items-start p-[24px] md:p-[33px] ${borderLeft ? 'md:pl-[36px]' : ''} relative size-full`}>
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
            <div className="relative shrink-0 size-[48px] md:size-[52px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 54">
                <g id="Background">
                  <rect fill={iconBg} height="54" rx="12" width="52" />
                  <path d={icon} fill={iconFill} />
                </g>
              </svg>
            </div>
            {badge && (
              <div className={`${badgeBg !== 'transparent' ? `bg-[${badgeBg}] px-[8px] py-[4px] rounded-[9999px]` : ''} content-stretch flex flex-col items-start relative shrink-0`}>
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] md:text-[12px] text-black">
                  <p className="leading-[1.4]">{badge}</p>
                </div>
              </div>
            )}
            {button && (
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] md:text-[12px] text-black text-center cursor-pointer hover:underline">
                <p className="leading-[1.4]">{button}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[11px] md:text-[12px] tracking-[0.6px] uppercase w-full pt-[12px] pb-[0.8px]">
          <p className="leading-[1.4]">{title}</p>
        </div>
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[28px] md:text-[32px] tracking-[-0.64px] w-full">
          <p className="leading-[1.2]">{value}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Profile Information Card ─────────────────────────────────────────────────

function ProfileInformationCard({ profile }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full border border-[#c5c6ca] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
      <div className="content-stretch flex flex-col gap-[24px] md:gap-[33px] items-start p-[24px] md:p-[33px] relative size-full">
        <CardHeader isEditing={isEditing} setIsEditing={setIsEditing} />
        <ProfileContent profile={profile} isEditing={isEditing} setIsEditing={setIsEditing} />
      </div>
    </div>
  );
}

function CardHeader({ isEditing, setIsEditing }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[18px] md:text-[20px]">
          <p className="leading-[1.4]">Profile Information</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-gray-100 transition-colors"
        >
          <div className="relative shrink-0 size-[10.5px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
              <g id="Container">
                <path d={svgPaths.p2cbc1080} fill="black" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-black text-center">
            <p className="leading-[1.5]">{isEditing ? "Cancel" : "Edit Profile"}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function ProfileContent({ profile, isEditing, setIsEditing }) {
  const { updateProfile } = useUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skillLevel: "Advanced (4.5+)"
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name:       profile.name       || "",
        email:      profile.email      || "",
        phone:      profile.phone      || "",
        skillLevel: profile.skillLevel || "Advanced (4.5+)"
      });
    }
  }, [profile]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await updateProfile(formData);
      setIsEditing(false);
    } catch (err) {
      console.error("Update profile error:", err);
    }
  };

  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[48px] items-start relative self-stretch shrink-0 w-full">
      <ProfileImageSection profile={profile} />
      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px] relative w-full">
          <FormField
            label="FULL NAME"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            readOnly={!isEditing}
          />
          <FormField
            label="EMAIL ADDRESS"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            readOnly={!isEditing}
          />
          <FormField
            label="PHONE NUMBER"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            readOnly={!isEditing}
          />
          <SelectField
            label="SKILL LEVEL"
            value={formData.skillLevel}
            onChange={(e) => handleChange("skillLevel", e.target.value)}
            disabled={!isEditing}
          />
        </div>
        {isEditing && (
          <div className="mt-[24px] flex gap-[12px]">
            <button
              onClick={handleSave}
              className="bg-[#181c1f] text-white px-[24px] py-[12px] rounded-[12px] font-['Inter:Bold',sans-serif] font-bold text-[14px] md:text-[16px] hover:bg-[#2a2e31] transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-[#e0e3e7] text-[#181c1f] px-[24px] py-[12px] rounded-[12px] font-['Inter:Bold',sans-serif] font-bold text-[14px] md:text-[16px] hover:bg-[#d5d8dc] transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileImageSection({ profile }) {
  const { uploadAvatar } = useUser();

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await uploadAvatar(file);
    } catch (err) {
      console.error("Upload avatar error:", err);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full md:w-auto">
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className="pointer-events-none relative rounded-[20px] md:rounded-[24px] shrink-0 size-[120px] md:size-[128px] border-4 border-[#181c1f]">
          <div className="absolute inset-0 overflow-hidden rounded-[20px] md:rounded-[24px]">
            <img
              alt="Profile"
              className="absolute left-0 max-w-none size-full top-0 object-cover"
              src={profile?.avatar || DEFAULT_AVATAR}
            />
          </div>
        </div>
        <label className="absolute bg-black bottom-[-8px] content-stretch flex flex-col items-center justify-center p-[10px] md:p-[12px] right-[-8px] rounded-[9999px] border-4 border-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-gray-800 transition-colors cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <div className="relative shrink-0 size-[16px] md:size-[18px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
              <g id="Container">
                <path d={svgPaths.p15b83880} fill="white" />
              </g>
            </svg>
          </div>
        </label>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[11px] md:text-[12px] text-center">
        <p className="leading-[1.4]">JPG or PNG. Max 2MB.</p>
      </div>
    </div>
  );
}

// ─── Shared Fields ────────────────────────────────────────────────────────────

function FormField({ label, value, onChange, readOnly = false }) {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[11px] md:text-[12px] tracking-[0.6px] uppercase">
        <p className="leading-[1.4]">{label}</p>
      </div>
      <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <input
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            className="bg-transparent flex-1 p-[14px] md:p-[16px] text-[#1c1b1c] text-[14px] md:text-[16px] font-['Inter:Semi_Bold',sans-serif] outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}

function SelectField({ label, value, onChange, disabled = false }) {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[11px] md:text-[12px] tracking-[0.6px] uppercase">
        <p className="leading-[1.4]">{label}</p>
      </div>
      <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[14px] md:p-[16px] relative size-full">
            <div className="absolute content-stretch flex flex-col inset-0 items-end justify-center overflow-clip pr-[12px] md:pr-[16px] pointer-events-none">
              <div className="relative shrink-0 size-[20px] md:size-[24px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="image">
                    <path d="M7.2 9.6L12 14.4L16.8 9.6" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                  </g>
                </svg>
              </div>
            </div>
            <select
              value={value}
              onChange={onChange}
              disabled={disabled}
              className="bg-transparent flex-1 text-[#1c1b1c] text-[14px] md:text-[16px] font-['Inter:Semi_Bold',sans-serif] outline-none w-full appearance-none cursor-pointer"
            >
              <option value="Beginner (1.0-2.5)">Beginner (1.0-2.5)</option>
              <option value="Intermediate (3.0-3.5)">Intermediate (3.0-3.5)</option>
              <option value="Advanced (4.0-4.5)">Advanced (4.0-4.5)</option>
              <option value="Advanced (4.5+)">Advanced (4.5+)</option>
              <option value="Professional (5.0+)">Professional (5.0+)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
