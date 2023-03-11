import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'
import WebIntIconLogo from "../logo/_icon_logo";

const ProfileHeader = () => {
  return (
    <>
      <header className='shadow-2xl z-0 w-full bg-[#e5e5e5]'>
      <div className="navbar text-neutral-content shadow-2xl p-0">
          <div className="flex flex-row w-full">
            <div className="container">
              <a className="btn btn-ghost normal-case text-xl">
                <WebIntIconLogo classCode="w-[172px] h-[52px]" />
              </a>
            </div>
          </div>
      </div>
      </header>
    </>
  );
};

export default ProfileHeader;
