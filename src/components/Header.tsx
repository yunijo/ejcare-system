import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import Navigator from "./Navigator";
import ShareBtn from "./ShareBtn";
import HamburgerBtn from "./HamburgerBtn";
import SiteMap from "./SiteMap";
import { useState } from "react";


export default function Header() {
    const [isMenu, setIsMenu] = useState(false);
    const SiteMapOpen = () =>   {
        console.log("^^^^^^^^^^^^^"+isMenu);
        setIsMenu((isMenu) => !isMenu);
    };

    return (
        <div id="header" className="py-4 px-4 sm:px-0 box-border border-b">
            <div className="h_in max-w-screen-xl mx-auto">
                <h1 className="logo">
                    <Link href={"/"} className="logo">
                        <Image src={"/img/logo.png"} width={30} height={30} alt="" />
                        <span>이진케어시스템</span>
                    </Link>
                </h1>
                <nav>
                    <Navigator />
                </nav>
                <div className="right_btn justify-end" onClick={SiteMapOpen}>
                    <HamburgerBtn />
                </div>
                <div className={"sitemap" + (isMenu ? " on":"")}>
                    <SiteMap siteMapClose={SiteMapOpen}/>
                </div>
            </div>
        </div>
    )
}