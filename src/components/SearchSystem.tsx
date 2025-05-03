import Link from "next/link";


interface SearchSystemProps {
  url: string;
  title: string;
  description: string;
}

export default function SearchSystem({url, title, description}: SearchSystemProps) {
    return (
      <div className="max-w-screen-xl sm:max-w-[380px] sm:float-right sm:mr-[10px] sm:top-20 sm:sticky mx-auto justify-center w-full h-full box-border xl:px-0 sm:z-[2]">
        <section className="h-full bg-[#f6f7fa] p-4 rounded-xl lg:rounded-2xl overflow-hidden font-bold text-xl text-[#383940] mt-5 sm:fixed sm:right-10 sm:h-[150px] sm:w-[350px]">
          <Link href={url}>
            {title}
            <div className="text-sm text-gray-500 font-normal mt-5">{description}</div>
          </Link>
          <div>
          {/* mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto */}
            <button type="submit" className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3">조회하러 가기</button>
          </div>
        </section>
      </div> 
    )
}