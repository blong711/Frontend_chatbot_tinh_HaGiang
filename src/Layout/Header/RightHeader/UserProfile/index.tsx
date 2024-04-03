import { Href, ImagePath } from "@/Constant";
import { UserProfileData } from "@/Data/Header";
import { useAppSelector } from "@/Redux/Hooks";
import { AdminUsersSvg } from "@/svgIcons";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "react-feather";
import { Media } from "reactstrap";
import jwt_decode from "jwt-decode";

const UserProfile = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  const isLoggedIn = !!Cookies.get("token");
  const token = Cookies.get("token"); 
  let userEmail = ""; 

  if (token) {
    const decodedToken = jwt_decode(token);
    userEmail = decodedToken.email;
  }

  const LogOutUser = () => {
    Cookies.remove("token");
    router.push("/auth/login");
  };

  return (
       <li className="profile-nav onhover-dropdown pe-0 py-0 me-0">
         <Media className="profile-media">
           <Image src={`${ImagePath}/avtar/man.png`} alt="" height={40} width={40}/>
           <Media body>
             <span>{userEmail}</span>
           </Media>
         </Media>
         <ul className="profile-dropdown onhover-show-div">
           {UserProfileData.map((item, i) => (
             <li key={i}>
               <Link href={`/${i18LangStatus}${item.link}`}>
                 {item.logo}
                 <span>{item.name} </span>
               </Link>
             </li>
           ))}
           <li>
             <Link href={Href} onClick={LogOutUser}>
               <div>
                 <LogOut />
                 <span>Log Out</span>
               </div>
             </Link>
           </li>
         </ul>
       </li>
     )}

export default UserProfile;
