import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { useStateContext } from '../contexts/ContextProvider';
import Carts from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import NavButton from "./NavButton";
import avatar from '../data/avatar.jpg'
import {useEffect} from "react";

const NavBar = () => {
  const { setActiveMenu, isClicked, handleClick, setScreenSize, activeMenu, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);


  return (
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton
            title="Menu"
            customFunc={handleActiveMenu}
            icon={<AiOutlineMenu />}
            color="blue"
        />

        <div className="flex">
          <NavButton
              title="Cart"
              customFunc={() => handleClick("cart")}
              icon={<FiShoppingCart />}
              color="blue"
          />

          <NavButton
              title="Chat"
              customFunc={() => handleClick("chat")}
              icon={<BsChatLeft />}
              color="blue"
              dotColor="#03c9d7"
          />

          <NavButton
              title="Notification"
              customFunc={() => handleClick("notification")}
              icon={<RiNotification3Line />}
              color="blue"
              dotColor="#03c9d7"
          />

          <TooltipComponent content={"Profile"} position="BottomCenter">
            <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                onClick={() => handleClick("userProfile")}
            >
              <Image
                  src={avatar}
                  className="rounded-full "
                  width="50px"
                  height="50px"
                  alt=""
              />
              <p>
                <span className="text-gray-400 text-14">Hi,</span>
                <span className="text-gray-400 font-bold ml-1 text-14">Folake</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>
          {console.log(isClicked)}
          {isClicked?.cart && <Carts />}
          {isClicked?.chat && <Chat />}
          {isClicked?.notification && <Notification />}
          {isClicked?.userProfile && <UserProfile />}
        </div>
      </div>
  );
};

export default NavBar;