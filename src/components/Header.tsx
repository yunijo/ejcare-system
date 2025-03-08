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
        <div id="header" className="py-3 px-3 sm:px-0 box-border">
            <div className="h_in max-w-screen-xl mx-auto">
                <h1 className="logo max-w-[125] sm:max-w-48">
                    <Link href={"/"} className="logo">
                        <Image src={"/img/logo6.jpg"} width={512} height={168} alt="" className="" />
                    </Link>
                </h1>
                <nav>
                    <Navigator />
                </nav>
                <div className="right_btn justify-end" onClick={SiteMapOpen}>
                    <HamburgerBtn />
                </div>
                <div className={"sitemap mt-[70]" + (isMenu ? " on":"")}>
                    <SiteMap siteMapClose={SiteMapOpen}/>
                </div>
            </div>
        </div>
    )
}