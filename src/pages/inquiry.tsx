import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";

interface IFormProps {
  userName: string | undefined;
  phoneNumber: string | undefined;
  email: string | undefined;
  companyName: string | undefined;
  title: string | undefined;
  detail: string | undefined;
  funnel: string | undefined;
}

export default function Inquiry() {
  const [form, setForm] = useState<IFormProps>({
    userName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    title: "",
    detail: "",
    funnel: "",
  });

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const nextInputs = {
      //spread 문법. 현재 상태의 내용이 이 자리로 온다. 
      ...form,
      [name]: value,
    };
    //객체를 새로운 상태로 쓰겠다. 
    setForm(nextInputs);
  }

  async function inquiry_postData() {
    try {
      //응답 성공 
      const response = await axios.post('https://admin.ejincare.com/wp-json/wp/v2/inquiry',{
          //보내고자 하는 데이터 
          user_name: form.userName,//
          user_phone: form.phoneNumber,
          user_email: form.email,
          user_company: form.companyName,
          title: form.title,
          user_content: form.detail,
          user_ref: form.funnel
      });
      
      if(response){
        Swal.fire({
          icon: "success",
          title: "접수 완료",
          text: "정상적으로 접수 완료되었습니다.",
        });
      }
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  return (
    <div>
      <Header pageName={"subMenu"} />
      <main className="max-w-screen-xl mx-auto grid sm:justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px] md:gap-[90px]" >
        <SubHeader title_kor={"견적문의"} title_eng={"Inquiry"}/>

        <div className="md:w-[1000px] bg-white md:bg-[#f2f2f6] rounded-[10px] px-4 pt-6 pb-8 md:p-16 flex flex-col gap-2 md:gap-5 text-si-primary-text">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <label htmlFor="userName" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px] text-left">이름<span className="text-[#e68600] ml-[6px]">*</span>
              </label>
              <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                <input id="userName" name="userName" type="text" className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6 text-black" placeholder="이름을 입력해 주세요." value={form.userName} onChange={onChangeValue} />
              </div>
            </div>
            <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <label htmlFor="phoneNumber" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px] text-left">연락처<span className="text-[#e68600] ml-[6px]">*</span>
              </label>
              <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                <input id="phoneNumber" name="phoneNumber" type="text" className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6 text-black" placeholder="“-” 없이 숫자만 입력해 주세요." value={form.phoneNumber} onChange={onChangeValue} /></div>
            </div>
            <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <label htmlFor="email" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px] text-left">이메일<span className="text-[#e68600] ml-[6px]">*</span>
              </label>
              <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                <input id="email" name="email" type="text" className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6 text-black" placeholder="이메일 주소를 입력해 주세요." value={form.email} onChange={onChangeValue} /></div>
            </div>
            <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <label htmlFor="companyName" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px] text-left">회사명<span className="text-[#e68600] ml-[6px]">*</span>
              </label>
              <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                <input id="companyName" name="companyName" type="text" className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6 text-black" placeholder="회사명을 입력해 주세요." value={form.companyName} onChange={onChangeValue} /></div>
            </div>
            <div className="flex justiTfy-between w-full md:max-w-[580px] ml-auto"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <label htmlFor="title" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px] text-left">제목<span className="text-[#e68600] ml-[6px]">*</span></label>
              <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                <input id="title" name="title" type="text" className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6 text-black" placeholder="제목을 입력해 주세요." value={form.title} onChange={onChangeValue} /></div>
            </div>
            <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex md:flex-row flex-col items-start gap-[10px] justify-between">
              <label htmlFor="detail" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[100px] xl:w-[140px] py-0 md:py-[10px] text-left">내용<span className="text-[#e68600] ml-[6px]">*</span>
              </label>
              <div className="flex flex-col gap-2 flex-1 md:max-w-[580px] w-full">
                <textarea id="detail" rows={10} name="detail" className="focus:outline-none focus:border-2 focus:border-si-gray-6 w-full md:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6 text-black" placeholder={'- 문의 서비스 내용 - 최대 :- 지역 :- 요청 및 문의 :'} onChange={onChangeValue} ></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
              <label htmlFor="funnel" className="font-medium leading-[120%] text-[17px] shrink-0 text-[#131f35] w-[100px] xl:w-[140px] py-[10px] md:mr-[10px] text-left">유입경로 <span className="text-[#e68600] font-medium text-[17px]">*</span>
              </label>
              <div className="flex items-center relative h-fit w-full md:max-w-[580px] ">
                <select id="funnel" name="funnel" className="focus:outline-none focus:border-2 focus:border-si-gray-6 h-[52px] invalid:border-si-main-red border border-solid w-full border-si-gray-3 rounded-[5px] px-4 bg-white text-[17px] text-si-gray-6 md:text-si-primary-text appearance-none text-black" onChange={onChangeValue}>
                  <option value="">선택</option>
                  <option value="광고">광고</option>
                  <option value="도서">도서</option>
                  <option value="지인소개">지인소개</option>
                  <option value="인터넷 검색">인터넷 검색</option>
                  <option value="기타">기타</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" className="rotate-0 transition-all absolute right-4">
                  <path d="M10.7607 0H1.16847C0.315064 0 -0.146177 1.00019 0.407908 1.64926L5.08706 7.13056C5.47995 7.5908 6.18838 7.59936 6.59227 7.14876L11.5054 1.66746C12.0826 1.02348 11.6256 0 10.7607 0Z" fill="#8E8E93"></path>
                </svg>
              </div>
            </div>
            <div className="flex justify-end w-full md:max-w-[580px] ml-auto mt-4">
              <button className="right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={inquiry_postData}>제출</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
