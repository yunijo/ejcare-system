interface TitleName{
    title_kor: string;
    title_eng: string;
}

export default function SubHeader({title_kor, title_eng}: TitleName) {
    return (        
        <div className="flex-col items-center gap-[10px] mt-[100px]">
          <p className="text-si-main-red text-[17px] text-[#e68600] md:text-xl font-medium md:font-semibold leading-[120%]">{title_eng}</p>
          <h1 className="text-[28px] text-[#131f35] md:text-[46px] font-bold leading-[120%]">{title_kor}</h1>
        </div>
    )
}