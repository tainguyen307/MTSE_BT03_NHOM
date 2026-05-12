import { Link } from "react-router";

export function Navbar(props) {
  const { user, onLogout } = props;

  return (
    <nav className="fixed backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center left-0 pb-px px-[16px] md:px-[32px] top-0 w-full z-50 border-b border-[rgba(197,198,202,0.3)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="h-[64px] md:h-[80px] max-w-[1440px] relative shrink-0 w-full">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full w-full">
            <div className="content-stretch flex gap-[16px] md:gap-[32px] items-center relative shrink-0">
              <Link to={user ? "/profile" : "/"} className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e60] text-[20px] md:text-[24px] tracking-[-0.6px]">
                <p className="leading-[1.3]">PicklePro</p>
              </Link>

              <div className="content-stretch hidden md:flex gap-[20px] md:gap-[24px] items-center relative shrink-0">
                <NavLink to="/courts">Courts</NavLink>
                <NavLink to="/bookings">Bookings</NavLink>
                <NavLink to="/leagues">Leagues</NavLink>
                <NavLink to="/events">Events</NavLink>
              </div>
            </div>

            <div className="content-stretch flex gap-[12px] md:gap-[16px] items-center relative shrink-0">
              <button className="bg-[#181c1f] content-stretch flex flex-col items-center justify-center px-[16px] md:px-[24px] py-[6px] md:py-[8px] relative rounded-[12px] shrink-0 hover:bg-[#2a2e31] transition-colors">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#818488] text-[14px] md:text-[16px] text-center">
                  <p className="leading-[1.5]">Book Now</p>
                </div>
              </button>

              {user ? (
                <Link to="/profile" className="bg-[#ebe7e7] relative rounded-[9999px] shrink-0 size-[36px] md:size-[40px] border border-[#c5c6ca] overflow-clip hover:bg-[#e0dcd9] transition-colors">
                  <img
                    alt="Profile"
                    className="absolute left-0 max-w-none size-full top-0 object-cover"
                    src={user.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces"}
                  />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink(props) {
  const { to, children } = props;

  return (
    <Link
      to={to}
      className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#44474a] text-[18px] md:text-[20px] hover:text-black transition-colors"
    >
      <p className="leading-[1.4]">{children}</p>
    </Link>
  );
}
