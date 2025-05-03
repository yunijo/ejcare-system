import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";

export default function business() {
  return (
    <>  
      <div>
        <Header pageName={"subMenu"}/>    
        <main className="max-w-screen-xl mx-auto flex justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px]">
          <SubHeader title_kor={"사업분야"} title_eng={"Business"}/>
        </main>
        <div>
          <Image src="/IMG_4636.png" alt="company" width={1000} height={1000} className="mx-auto mt-[100px]"/>
        </div>
        <div>
          <Image src="/IMG_4637.png" alt="company" width={1000} height={1000} className="mx-auto mt-[100px]"/>
        </div>        
      </div>
      <Footer />
    </>
  );
}
