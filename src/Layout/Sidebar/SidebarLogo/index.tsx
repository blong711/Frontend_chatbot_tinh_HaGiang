import { Href, ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { useAppDispatch } from "@/Redux/ReduxStore";
import { sidebarToggle } from "@/Redux/Slices/HeaderSlice";
import Image from "next/image";
import { Media } from "reactstrap";

export const SidebarLogo = () => {
  const dispatch = useAppDispatch();
  const { backgroundChange } = useAppSelector((store) => store.headerSlice);

  return (
    <div className="logo-wrapper">
      <h3>ChatBot Hà Giang</h3>
      <div className="back-btn " onClick={() => dispatch(sidebarToggle("close_icon"))}>
        <i className="fa fa-angle-left " />
      </div>
    </div>
  );
};
