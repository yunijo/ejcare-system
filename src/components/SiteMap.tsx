import Link from "next/link";
import React from "react";

const SiteMap = () => {

  const menuList = [
      {
        id: '1',
        title: '회사소개',
        href: './customerService'
      },
      {
        id: '2',
        title: '사업분야',
        href: './business'
      },
      {
        id: '3',
        title: '견적문의',
        href: './inquiry'
      },
      {
        id: '4',
        title: '사업실적',
        href: './businessPerformance'
      },
      {
        id: '5',
        title: 'Contact us',
        href: './company'
      },            
    ] 

    return (
      <div className="cont">
        <ul className="list mt-3 flex flex-col text-left">
          {menuList.map((menu) => (
            <li className="depth1 px-4 py-3" key={menu.id}>
              <Link href={menu.href} className="text-white block">
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default SiteMap;