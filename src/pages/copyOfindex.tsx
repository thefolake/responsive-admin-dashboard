import React, { useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Link from 'next/link'
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

type Props = {
    children?: React.ReactNode;
};

const Home = ({children} : Props): JSX.Element => {
    const { currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  // const activeMenu = true;
  return (
    <div>
      {/* remove bg-main-dark-bg */}
      <div className='flex relative bg-slate-100 dark:bg-main-dark-bg'>
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
            <button
                type="button"
                style={{ background: 'pink', borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar/>
          </div>
        ): (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
          <div
              className={
                  activeMenu
                      ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full  '
                      : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2 '
              }
          >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
              </div>
          </div>
          <div>
              {themeSettings && (<ThemeSettings />)}
          </div>
          <div className=" w-full mt-[70px] bg-main-bg dark:bg-main-dark-bg h-full">
              {children}
              <Footer />
          </div>

          {/*<div*/}
          {/*    className={`dark:bg-main-dark-bg bg-main-bg ${*/}
          {/*        activeMenu ? " md:ml-72" : ""*/}
          {/*    }`}*/}
          {/*>*/}
          {/*    <div*/}
          {/*        className={`fixed top-0 ${*/}
          {/*            activeMenu ? "w-[calc(100vw-288px)]" : " w-screen"*/}
          {/*        }  bg-main-bg dark:bg-main-dark-bg navbar`}*/}
          {/*    >*/}
          {/*        <Navbar />*/}
          {/*    </div>*/}
          {/*</div>*/}

      </div>
    </div>
  )
}

export default Home ;