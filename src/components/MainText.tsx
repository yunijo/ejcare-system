import { useEffect, useRef, useState } from "react"

export default function MainText() {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', calculateDistanceToCenter);
    window.addEventListener('resize', calculateDistanceToCenter); // 창 크기 변경 시에도 계산

    // 초기 계산
    calculateDistanceToCenter();

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('scroll', calculateDistanceToCenter);
      window.removeEventListener('resize', calculateDistanceToCenter);
    };
  }, []);

  const calculateDistanceToCenter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 뷰포트 중앙의 Y좌표
      const viewportCenterY = viewportHeight * (1/2);

      // 요소의 상단과 뷰포트 중앙 간의 거리 계산
      // const distanceToCenter = rect.top - viewportCenterY;      
      
      // 비율 계산 (0: 화면 아래, 100: 중앙)
      const normalizedDistance = ((viewportHeight) - rect.top) * (100 / viewportCenterY) - (rect.height / 2);

      // 0 이하일 경우 0으로 설정
      const clampedDistance = Math.max(normalizedDistance, 0);

      // 100 이상일 경우 100으로 설정
      const finalDistance = Math.min(clampedDistance, 100);

      setDistance(finalDistance);
    }
  };
  
    return (
        <section className="px-2 py-24 sm:px-8 sm:py-8 md:py-32 xl:py-24 justify-center w-full text-center">
          <h2 className="text-black text-2xl text-pretty fade-in-left my-4">
            반도체 설계업체인 마벨테크놀로지의 <br className="hidden sm:block" />실적이 시장 전망치를 소폭 웃돌았지만 <br className="hidden sm:block" />투자자들의 높은 기대치에는 부응하는<br/>건물을 사랑하는 기업 
          </h2>
            <p ref={ref} className="inline-block relative whitespace-break-spaces px-30 sm:px-0 sm:whitespace-nowrap text-gray-300 text-[28px] md:text-[48px] font-bold leading-[140%] leading-2 ">
              (주) 이진 케어 시스템이 함께합니다
              <span className="absolute left-0 top-0 w-0 h-full text-[28px] md:text-[48px] font-bold leading-[140%] text-[#131f36] overflow-hidden whitespace-nowrap"
              style={{width: `${distance}%`}}>
              (주) 이진 케어 시스템이 함께합니다
              </span>
            </p> 
            {/* <p>{distance}</p>          */}
        </section>
    )
}