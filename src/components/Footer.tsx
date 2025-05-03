export default function Footer() {
    return (        
        <footer className="flex justify-center px-4 py-8 bg-[#f2f2f6] text-gray-800">
            <div className="flex flex-col max-w-[1190px] w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-wrap text-[1rem] font-medium leading-4 gap-x-6 gap-y-3">
                    <a className="text-si-main-red" href="/policy">개인정보처리방침</a>
                    <button>이메일무단수집거부</button>
                    <a href="https://ethics.sni.co.kr/report/write" target="_blank" rel="noreferrer">윤리경영 제보하기</a>
                </div>
                <section className="relative group flex h-fit w-fit items-start mt-4 lg:mt-0">
                    <button className="flex gap-4 lg:justify-between items-center border border-si-gray-6 rounded-[5px] w-fit lg:w-[165px] pl-[10px] pr-2 lg:px-4 h-8 lg:h-10">
                    <span className="text-[13px] lg:text-[15px] leading-[100%] text-si-gray-6">Family site</span>
                    </button>
                    <div className="absolute bottom-[100%] w-full h-3 bg-transparent"></div>
                    <div className="z-20 absolute bottom-[calc(100%+4px)] min-w-[140px] w-full group-hover:scale-100 scale-0 origin-top-right transition-all flex flex-col rounded-lg overflow-hidden border border-si-gray-6 bg-si-gray-1">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="w-full text-[13px] lg:text-[15px] leading-[100%] text-si-gray-6 px-4 py-3 hover:bg-si-gray-2">조회 시스템</a>
                    </div>
                </section>
                </div>
                <div className="flex lg:flex-row flex-col gap-4 mt-4 lg:mt-6 text-[0.875rem] leading-[0.875rem] ">
                <span>㈜이진케어시스템</span><span>대표이사 : 조원규</span><span>사업자등록번호 : 707-86-02404</span><span>주소 : 서울시 강서구 마곡중앙로 105-7 K스퀘어마곡 타워1 11,12층</span><a href="tel:1661-1119">고객센터 : 1661-1119</a>
                </div>
                <div className="flex gap-2 mt-8 text-si-gray-6 text-[0.875rem] leading-[0.875rem]"><span>Copyright</span><span>ⓒ</span><span>2024 S&amp;I Corp.</span><span>All Rights Reserved.</span></div>
                <div className="flex flex-row items-center gap-2 mt-16 sm:gap-7">
                <div className="flex items-center gap-2 sm:gap-6 max-sm:flex-wrap">
                    <div className="flex flex-col gap-3 max-sm:order-1 max-sm:w-full max-sm:mb-6">
                    <a className="text-si-gray-6 text-[12px] leading-[15.6px] font-normal" href="https://isms.kisa.or.kr/main/ispims/issue/?certificationMode=list&amp;crtfYear=&amp;pageFlag=ISMS-P&amp;searchCondition=2&amp;searchKeyword=%EC%97%90%EC%8A%A4%EC%95%A4%EC%95%84%EC%9D%B4%EC%BD%94%ED%8D%BC%EB%A0%88%EC%9D%B4%EC%85%98" target="_blank" rel="noopener noreferrer" />
                    [인증범위] B2B/B2C 대외 운영 서비스 <br className="max-sm:hidden"/> (홈페이지, <br className="sm:hidden"/> atG, 통근버스, 샌디앱)
                    </div>
                    <p className="text-si-gray-6 text-[12px] leading-[12px] font-normal">[유효기간] 2024.07.17 ~ 2027.07.16</p>
                </div>
                </div>
            </div>
        </footer>
    )
}