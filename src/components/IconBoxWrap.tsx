import Image from "next/image";
import { useQuery, gql } from "@apollo/client";

export default function IconBoxWrap() {

  interface IconboxwrapImage {
    altText: string;
    filePath: string;
    fileSize: number;
  }
  interface iconBoxConImageNode {
    node: IconboxwrapImage;
  }
  interface Iconboxwrap {
    id: string;
    title: string;
    iconboxTxt: string;
    iconboxImage: iconBoxConImageNode
  }
  interface IconBoxConNode {
    node: Iconboxwrap;
  }
  
  interface IconBoxWrapsData {
    iconboxwraps: {
      edges: IconBoxConNode[]
    }
  }
  
  const GET_ICONBOXCON = gql`
    query Iconboxwrap {
      iconboxwraps {
        edges {
          node {
            id
            title
            iconboxTxt
            iconboxImage {
              node {
                altText
                filePath
                fileSize
              }
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery<IconBoxWrapsData>(GET_ICONBOXCON);

  if (loading) {
    return <h2>로딩중</h2>;
  }

  if (error) {
    return <h1>에러 발생</h1>;
  }
    // edges 배열을 꺼내고, node를 매핑해서 실제 iconboxwraps 리스트를 만든다
  const iconboxwraps = data?.iconboxwraps.edges.map((edge) => edge.node).slice(0, 4);

  const iconBoxConImageUrl = (src: string) => {
    const wordpressDomain = "https://admin.ejincare.com"; // 실제 WordPress 사이트 도메인
    const imageUrl = src.startsWith('http')
    ? src
    : `${wordpressDomain}${src}`;
    return imageUrl;
  }

    return (
        <section className="max-w-screen-xl mx-auto min-h-48 text-gray-800 sm:mt-[200px] mt-[0px] text-2xl font-bold">
            <div className="flex-1 flex flex-col gap-6">
                <ul className="grid grid-cols-2 gap-x-[40px] gap-y-[30px] sm:gap-y-[220px] md:grid-cols-3 lg:grid-cols-4">
                    {iconboxwraps?.map((iconboxwrap: Iconboxwrap, idx: number) => (
                        
                      <li className={`${
                        idx%2 == 0 ? 'sm:translate-y-[-120px]' : 'translate-y-[0px]'
                      }`}>

                        {
                          iconboxwrap?.iconboxImage?.node?.filePath ? (
                            <Image
                              width={290}
                              height={387}
                              className="flex-none w-full"
                              src={iconBoxConImageUrl(iconboxwrap.iconboxImage.node.filePath)}
                              unoptimized alt={""}                            />
                          ) : (
                            <></>
                          )
                        }
                          <div className="text-[15px] sm:text-[19px] block leading-[1.3] mt-3">{iconboxwrap.title}</div>
                          <div className="text-[13px] font-light leading-[1.6667em] mt-3">{iconboxwrap.iconboxTxt}</div>
                      </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}