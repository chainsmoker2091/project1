import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Page1.css";

function Page1({ language }) {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const translations = {
    subSection: {
      ko: "야생 멧돼지와 까마귀는 후쿠시마 현에서 남겨진 고양이들과 음식 조각을 놓고 경쟁합니다.",
      en: "When animals attack: Wild boar and crows in Fukushima Prefecture compete with abandoned cats for scraps of food.",
      jp: "野生のイノシシとカラスは、福島県で捨てられた猫と食べ物の切れ端を巡って争います。",
    },
    heading: {
      ko: "후쿠시마에 남겨진 동물들",
      en: "Animals Left in Fukushima",
      jp: "福島に取り残された動物たち",
    },
    articleSection: {
      ko: [
        "후쿠시마의 동물들에게 무슨 일이 일어났을까요?",
        "2011년 3월 일본 동북부를 강타한 대지진과 쓰나미로 인해 후쿠시마 원전 사고가 발생했습니다. 방사능 유출로 인해 주민들은 갑작스러운 대피 명령을 받았고 집을 떠나야 했습니다. 이 대피로 인해 많은 반려동물과 가축이 인간의 손길 없이 위험 지역에 남겨졌습니다.",
        "그중 한 어미 소는 위험 지역 한가운데서 송아지를 낳고 돌봐야 했습니다. 그러나 점점 음식과 물을 구하기 어려워졌고, 더 이상 도움의 손길도 받을 수 없었습니다. 어미 소는 송아지를 위해 자신의 건강을 희생했지만, 지켜보는 사람들은 아무것도 할 수 없는 상황이었습니다.",
        "몇 년 후 일부 자원봉사자들과 동물 복지 단체들은 위험을 무릅쓰고 후쿠시마로 돌아가기 시작했습니다. 그들은 여전히 남아있는 동물들을 구조하거나 먹이를 제공하며 그들의 삶을 천천히 바꿔갔습니다. 구조된 동물들은 새로운 보호소에서 안전을 찾고 건강을 회복하며 편안한 삶을 살게 되었습니다.",
        "하지만 여전히 많은 동물들이 방사능 위험 지역에 남아 있으며, 인간의 관심과 지원 없이 힘든 환경 속에서 생존하고 있습니다.",
        "후쿠시마에 남겨진 동물들의 이야기는 단순히 그들의 고통을 보여주는 것이 아닙니다. 이는 인간과 동물이 서로 연결되어 있으며, 우리가 그들을 위해 더 많은 일을 해야 한다는 메시지를 전달합니다.",
        "남겨진 동물들이 더 나은 삶을 살 수 있도록 우리는 무엇을 할 수 있을까요?",
      ],
      en: [
        "What happens to the animals in Fukushima?",
        "The massive earthquake and resulting tsunami that struck northeastern Japan in March 2011 caused the Fukushima nuclear power plant accident. Due to radioactive leakage, residents received a sudden evacuation order and had to leave their homes. In the aftermath of this evacuation, many pets and livestock were left untouched by humans in dangerous areas.",
        "One of them, a mother cow, had to live and care for her calf in the middle of the danger zone. However, finding food and water became increasingly difficult, and there was no longer any help around. The mother cow sacrificed her health for her calf, but the people watching were in a situation where they could do nothing.",
        "A few years later, some volunteers and animal welfare groups started going back to Fukushima despite the risks. By rescuing or feeding the remaining animals, they slowly changed their lives. Rescued animals found safety in their new shelters, recovered their health, and began living comfortable lives.",
        "However, many animals still remain in radioactive hazard areas, surviving in challenging environments without human attention and support.",
        "The stories of the animals left behind in Fukushima are not just about their suffering. They deliver a message that humans and animals are connected, and we must do more for them.",
        "What can we do to help the animals left behind have a better life?",
      ],
      jp: [
        "福島の動物たちに何が起こったのか？",
        "2011年3月、日本の東北地方を襲った大地震と津波は福島原子力発電所の事故を引き起こしました。放射性物質の漏洩により、住民は突然の避難命令を受け、家を離れなければなりませんでした。この避難の影響で、多くのペットや家畜が人間の手が届かない危険な地域に取り残されました。",
        "その中の1頭、母牛は危険地域の真ん中で子牛を産み、世話をしなければなりませんでした。しかし、食べ物や水を見つけることがますます困難になり、もはや助けを得ることもできませんでした。母牛は子牛のために自分の健康を犠牲にしましたが、見ている人々は何もできない状況でした。",
        "数年後、一部のボランティアや動物福祉団体がリスクを冒して福島に戻り始めました。彼らはまだ残っている動物を救出したり餌を与えたりして、その生活を徐々に変えていきました。救出された動物たちは新しい避難所で安全を見つけ、健康を回復し、快適な生活を送るようになりました。",
        "しかし、今でも多くの動物たちが放射線危険地帯に残り、人間の注意と支援なしで困難な環境で生き延びています。",
        "福島に取り残された動物たちの物語は、単に彼らの苦しみを示すものではありません。それは人間と動物がつながっていること、そして私たちが彼らのためにもっと努力する必要があることを伝えるメッセージです。",
        "取り残された動物たちがより良い生活を送れるように、私たちにできることは何でしょうか？",
      ],
    },
    popup: {
      text: {
        ko: "희망은 우리의 작은 행동에서 시작됩니다.",
        en: "Hope begins with our small actions.",
        jp: "希望は私たちの小さな行動から始まります。",
      },
      survey: {
        ko: "설문 조사에 참여하기",
        en: "Take the survey",
        jp: "アンケートに参加する",
      },
    },
  };

  const articleText = translations.articleSection[language];

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        setShowPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page1-container">
      <div className="page1-content">
        {/* 이미지와 제목 섹션 */}
        <div className="image-box">
          <div className="text-box">
            <h3>{translations.heading[language]}</h3>
          </div>
          <button className="arrow-button" onClick={() => navigate("/page2")}>
            ▶
          </button>
        </div>

        <p>{translations.subSection[language]}</p>
        
        {/* 본문 텍스트 섹션 */}
        <div className="article-section">
          <h1>{articleText[0]}</h1>
          {articleText.slice(1).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* 팝업 창 */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{translations.popup.text[language]}</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8Q1uzLo8epHuZeRofbeG5ML5vH1my_FGwuTi0lYfTtgaXSA/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {translations.popup.survey[language]}
            </a>
            <div>
              <button onClick={() => setShowPopup(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page1;
