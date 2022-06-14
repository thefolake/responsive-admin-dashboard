import React from 'react'
import Link from 'next/link'
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  console.log(setActiveMenu(true), "activeMenu")

  const handleCloseSideBar = () => {
    console.log('close')
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:hover:text-black hover:bg-light-gray m-2';
  // dark:text-gray-200 to normalLink

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight  text-slate-900">
              {/*            <a className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight  text-slate-900"> */}
              <SiShopware /> <span>Fola Taylor</span>
            </a>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                // style={{ color: 'black' }}
                onClick={handleCloseSideBar}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block "
              >
                {/*md:hidden*/}
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
        </div>
          <div className="mt-10">
            {links?.map((item) => (
                <div key={item?.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {item?.title}
                  </p>
                  {item?.links?.map((link) => (
                      <Link href={`/${link?.name}`} key={link?.name}>
                        <a
                            className={!activeMenu ? activeLink : normalLink}
                            onClick={handleCloseSideBar}
                        >
                          {link?.icon}
                          <span className="capitalize">{link?.name}</span>
                        </a>
                      </Link>
                  ))}
                </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar