import { Outlet, Link } from "react-router-dom";
import {BsCartCheck} from "react-icons/bs"
import {AiOutlineMenuFold, AiOutlineHome} from "react-icons/ai"
import {VscSignIn} from  "react-icons/vsc"

const Layout = () => {
  return (
    <>
      <nav className="text-white  uppercase font-semibold text-xl leading-6">
        <ul className="flex justify-evenly ">
          <li>
            <Link to="/"><AiOutlineHome size={26}/></Link>
          </li>
          <li>
            <Link to="/order"><AiOutlineMenuFold size={26}/></Link>
          </li>
          <li>
            <Link to="/contact"><BsCartCheck size={26}/></Link>
          </li>
          <li>
            <Link to="/contact"><VscSignIn size={26}/></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;