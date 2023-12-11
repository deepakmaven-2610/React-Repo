import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout()      //3
{
  return  <>
    <MainNavigation/>
    <main>
        <Outlet/>
    </main>
    </>
}

export default RootLayout;