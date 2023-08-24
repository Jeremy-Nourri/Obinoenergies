import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function ArrowToScroll() {

  return (
    <div className="hidden lg:block fixed bottom-10 right-10 z-50">
      <Link
        to="header"
        spy={true}
        smooth={true}
        duration={1000}
        title="Revenir au menu"
        activeStyle={{ display: "none" }}
      >
        <BsFillArrowUpSquareFill className="text-5xl text-slate-900 cursor-pointer hover:text-slate-700" />
      </Link>
    </div>
  );
}

