import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import { useUser } from "../../../hooks/useUser";
import { ROUTES } from "../../../constants";
import svgPaths from "../../../imports/UserProfilePicklePro-1/svg-32x009dzzc";
import imgPlayerProfile from "../../../imports/UserProfilePicklePro-1/aaede8b37bd4b7cfc7ce226ca695ce1e1b728d58.png";

export function ProfilePage() {
  const { profile, stats, fetchProfile, isLoading } = useUser();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div
      className="content-stretch flex flex-col items-start relative min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%)"
      }}
    >
      <TopNavBar profile={profile} />
      <MainContentArea profile={profile} stats={stats} isLoading={isLoading} />
    </div>
  );
}

function TopNavBar(props) {
  const { profile } = props;

  return (
    <div className="fixed backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center left-0 pb-px px-[16px] md:px-[32px] top-0 w-full z-50 border-b border-[rgba(197,198,202,0.3)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="h-[64px] md:h-[80px] max-w-[1440px] relative shrink-0 w-full">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full w-full">
            <div className="content-stretch flex gap-[16px] md:gap-[32px] items-center relative shrink-0">
              <Link to={ROUTES.PROFILE} className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e60] text-[20px] md:text-[24px] tracking-[-0.6px]">
                <p className="leading-[1.3]">PicklePro</p>
              </Link>
              <nav className="content-stretch hidden md:flex gap-[20px] md:gap-[24px] items-center relative shrink-0">
                <Link to={ROUTES.PROFILE} className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Courts</p>
                </Link>
                <Link to={ROUTES.PROFILE} className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Bookings</p>
                </Link>
                <Link to={ROUTES.PROFILE} className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Leagues</p>
                </Link>
                <Link to={ROUTES.PROFILE} className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors">
                  <p className="leading-[1.4]">Events</p>
                </Link>
              </nav>
            </div>
            <div className="content-stretch flex gap-[12px] md:gap-[16px] items-center relative shrink-0">
              <button className="bg-[#181c1f] content-stretch flex flex-col items-center justify-center px-[16px] md:px-[24px] py-[6px] md:py-[8px] relative rounded-[12px] shrink-0 hover:bg-[#2a2e31] transition-colors">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#818488] text-[14px] md:text-[16px] text-center">
                  <p className="leading-[1.5]">Book Now</p>
                </div>
              </button>
              <div className="bg-[#ebe7e7] relative rounded-[9999px] shrink-0 size-[36px] md:size-[40px] border border-[#c5c6ca] overflow-clip">
                <img
                  alt="Profile"
                  className="absolute left-0 max-w-none size-full top-0 object-cover"
                  src={profile?.avatar || imgPlayerProfile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContentArea(props) {
  const { profile, stats, isLoading } = props;

  if (isLoading && !profile) {
    return (
      <div className="relative shrink-0 w-full pt-[64px] md:pt-[80px] flex-1 flex items-center justify-center">
        <p className="text-[#44474a] text-[16px]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 w-full pt-[64px] md:pt-[80px] flex-1">
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

function PageHeader() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[24px] md:text-[32px] tracking-[-0.64px]">
          <p className="leading-[1.2]">My Dashboard</p>
        </div>
        <button onClick={handleLogout} className="content-stretch flex gap-[8px] items-center px-[20px] md:px-[24px] py-[10px] md:py-[12px] relative rounded-[12px] shrink-0 border border-[#c5c6ca] hover:bg-gray-50 transition-colors">
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

function StatsGrid(props) {
  const { stats } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[24px] relative shrink-0 w-full">
      <StatCard
        icon={svgPaths.p116b1b00}
        iconBg="#181C1F"
        iconFill="#818488"
        badge="+12% vs last month"
        title="TOTAL BOOKINGS"
        value={stats?.totalBookings || 0}
      />
      <StatCard
        icon={svgPaths.p782a700}
        iconBg="#E3E2E4"
        iconFill="#646466"
        badge="Upcoming: 2"
        title="MATCHES THIS WEEK"
        value={stats?.matchesThisWeek || 0}
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

function StatCard(props) {
  const { icon, iconBg, iconFill, badge, button, title, value, badgeBg = "transparent", borderLeft = false } = props;

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
              <div className={`${badgeBg !== 'transparent' ? 'bg-[' + badgeBg + ']' : ''} content-stretch flex flex-col items-start ${badgeBg !== 'transparent' ? 'px-[8px] py-[4px] rounded-[9999px]' : ''} relative shrink-0`}>
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

function ProfileInformationCard(props) {
  const { profile } = props;
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

function CardHeader(props) {
  const { isEditing, setIsEditing } = props;

  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1c] text-[18px] md:text-[20px]">
          <p className="leading-[1.4]">Profile Information</p>
        </div>
        <button onClick={() => setIsEditing(!isEditing)} className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-gray-100 transition-colors">
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

function ProfileContent(props) {
  const { profile, isEditing, setIsEditing } = props;
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
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
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

function ProfileImageSection(props) {
  const { profile } = props;
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
              src={profile?.avatar || imgPlayerProfile}
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

function FormField(props) {
  const { label, value, onChange, readOnly = false } = props;

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

function SelectField(props) {
  const { label, value, onChange, disabled = false } = props;

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
