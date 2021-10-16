import { useState } from 'react'
import logo from './imgs/nav-logo.png'
import Lottie from 'react-lottie'
// import domtoimage from 'dom-to-image'
// import html2canvas from 'html2canvas'
// import { saveAs } from 'file-saver'


import * as intj from './imgs/intj.json'
import * as intp from './imgs/intp.json'
import * as entj from './imgs/entj.json'
import * as entp from './imgs/entp.json'
import * as infj from './imgs/infj.json'
import * as infp from './imgs/infp.json'
import * as enfj from './imgs/enfj.json'
import * as enfp from './imgs/enfp.json'
import * as istj from './imgs/istj.json'
import * as isfj from './imgs/isfj.json'
import * as estj from './imgs/estj.json'
import * as esfj from './imgs/esfj.json'
import * as istp from './imgs/istp.json'
import * as isfp from './imgs/isfp.json'
import * as estp from './imgs/estp.json'
import * as esfp from './imgs/esfp.json'

import './App.css'
const avatarData = {
  intj,
  intp,
  entj,
  entp,
  infj,
  infp,
  enfj,
  enfp,
  istj,
  isfj,
  estj,
  esfj,
  istp,
  isfp,
  estp,
  esfp,
}
const question_list = [
  // '週末工作了一整天，如果你覺得精疲力盡。你會比較傾向用哪一種方式紓壓?',
  '你覺得哪一種學習形式對你比較有幫助?',
  '回想你的筆記或者平常跟人的對談，內容通常是？',
  '當你的朋友遇事向你求助，你會？',
  '通常在挑選線上課程時，遇到選擇障礙，你會？'
]

const answer_list = [
  [
    {
      desc: '- 揪團上線上課程，一起討論交流，互相督促 👄',
      value: 'e'
    },
    {
      desc: '- 自己編排進度，按線上課程的進度走 😇',
      value: 'i'
    },
  ],
  [
    {
      desc: '- 工作跟生活的點點滴滴 📖',
      value: 's'
    },
    {
      desc: '- 對事件的一些感悟 💡',
      value: 'n'
    },
  ],
  [
    {
      desc: '- 先釐清事情狀況，包含前後緣由 💙',
      value: 't',
    },
    {
      desc: '- 先關心對方的心理狀況 ❤️',
      value: 'f',
    },
  ],
  [
    {
      desc: '- 實在無法抉擇，覺得再想想或者多找一點資料會做出更好的決定 🧐',
      value: 'p'
    },
    {
      desc: '- 按照心中的直覺或者之前規劃的標準做決定，不太能忍受這種彆扭的狀態 😛',
      value: 'j'
    },
  ],
]

// const type_list = [
//   'intj',
//   'intp',
//   'entj',
//   'entp',
//   'infj',
//   'infp',
//   'enfj',
//   'enfp',
//   'istj',
//   'isfj',
//   'estj',
//   'esfj',
//   'istp',
//   'isfp',
//   'estp',
//   'esfp',
// ]

// avatar rules 參考顏色跟面相
// nt 是紫色
// nf 是綠色
// sj 是藍色
// sp 是黃色

// 內外向，能量來源
// e 眼睛比較大
// i 眼睛比較小

// 思考方式，實際 or 抽象
// s 是頭髮比較直線
// n 是頭髮比較曲線

// 處理資訊方式，邏輯 or 感性
// t 嘴巴比較方
// f 嘴巴比較圓

// 決策，蒐集資料 or 指揮
// p 是臉比較圓
// j 是臉比較方

const type_details = {
  intj: {
    name: '系統建造者',
    desc: '具有特殊的特質組合——想像力和務實性。他們尋求以全新的角度或創新的方法來看待事物，對自己的想法和目標非常投入和堅定。在面對相反的意見時，通常持懷疑的態度。他們是所有性格類型中最獨立的。',
    lead: '臉書創辦人小柏',
    job: '投資銀行家、個人理財顧問、軟體工程師、經濟學家、高階主管',
    keywords: ['投資', '管理課程', '前端', '後端', '程式'],
    type: 'nt',
  },
  intp: {
    name: '邏輯學家',
    desc: '喜歡獨自工作，不在意頭銜，屬於安靜、有思想、善於解析的類型。他們傾向獨處，以尋找問題解決的方法。適合從事和科學、建築和法律相關的職業，他們接受一個觀念，是因為其優點，而非傳統或權威。該人格類型約占人口的1.8%。',
    lead: 'Google共同創始人佩奇和布林',
    job: '軟體工程師，財務分析師、建築師、大學教授、經濟學家',
    keywords: ['數據分析', '理財', '經濟', '前端', '後端', '程式'],
    type: 'nt',
  },
  entj: {
    name: '指揮官',
    desc: '非常實際、邏輯性強，善於從事需要推理和用腦的工作，是天生熱心坦誠的領導者。他們能夠快速地看到不合邏輯和低效率的產品和策略，通過建立整合策略來解決組織架構的問題。該人格類型約占人口的1.8%。',
    lead: '蘋果創辦人喬布斯、特斯拉執行長馬斯克（Elon Musk）',
    job: '高階主管、律師、市場研究分析員、管理與商業顧問、創投者',
    keywords: ['市場', '創業', '管理', '商業', 'PM'],
    type: 'nt',
  },
  entp: {
    name: '辯論家',
    desc: '富創新的精神、機智靈敏、喜歡有挑戰性的工作，熱衷與人爭辯，只要認為有意思，一點都不在乎爭論的內容，這類型的人很適合去解決具有挑戰性的問題。',
    lead: '英國喜劇演員豆豆先生（Rowan Atkinson）',
    job: '創業家、地產開發商、廣告創意總監、行銷總監、政治家或政治顧問',
    keywords: ['創業', '文案', '行銷', '說話'],
    type: 'nt',
  },
  infj: {
    name: '提倡者',
    desc: '有責任心、受價值觀驅使，安靜內斂的人，喜歡在幕後發揮影響力。他們有清晰的洞察力，十分關心別人，是很多不同類型的人口中所謂的「密友」或「知己」。雖然如此，他們可能不很輕易將內在世界和別人分享。',
    lead: '甘地',
    job: '治療師或心理諮商師、社工人員、組織多樣化管理經理（HR diversity manager）、組織發展顧問、客戶關係經理',
    keywords: ['心理', '業務', '關係', '溝通'],
    type: 'nf',
  },
  infp: {
    name: '調停者',
    desc: '隨和、通情達理，將精力集中於內在世界，但對現實世界充滿強烈的感情以及倫理道德信念，他們希望尋找一個能符合這些價值觀的外在世界。對人和事很忠誠，能迅速發現實現理想的機遇。',
    lead: '哈利波特系列小說作者JK羅琳',
    job: '心理學家或治療師、平面設計師、作家或編輯、物理治療師、人力資源管理訓練師',
    keywords: ['心理', '文案', '關係', '溝通'],
    type: 'nf',
  },

  enfj: {
    name: '主人公',
    desc: '溫暖、盡責並積極回應讚揚與批評。喜歡幫助他人，涉及到個人與團隊成長方面，會表現得富有感染力。',
    lead: '臉書營運長桑德伯格（Sheryl Sandberg）',
    job: '心理學家或治療師、平面設計師、作家或編輯、物理治療師、人力資源管理訓練師',
    keywords: ['關係', '溝通', '公關', '簡報', '業務'],
    type: 'nf',
  },
  enfp: {
    name: '競選者',
    desc: '溫暖熱情、富想像力、處事靈活變通。在他們的生活中，充滿着各種可能性。可以在事件與信息之間快速建立聯繫，然後有自信地行動，這類人的即興創作和語言表達能力很強。',
    lead: '迪士尼創始人華特·迪士尼',
    job: '記者、廣告創意總監、顧問、活動策劃人員、餐館老闆',
    keywords: ['文案', '活動', '社群'],
    type: 'nf',
  },

  istj: {
    name: '物流師',
    desc: '嚴肅的態度讓生活和環境井然有序，對細節也一絲不苟。他們為人忠誠、有責任感，是明智的傳統主義者，在高品質的工作尚未結束前是不會休息的。該人格類型約占人口的10－14%。',
    lead: '巴菲特、亞馬遜創始人貝索斯（Jeff Bezos）',
    job: '會計師、財務長、稽核員、網站開發工程師、公務人員',
    keywords: ['理財', '前端', '後端', '程式'],
    type: 'sj',
  },

  isfj: {
    name: '守衛者',
    desc: '致力於生活周遭的和睦，關心照料別人並尊重他人感受，卻不要求其感謝或報償。他們腳踏實地、一絲不苟地處理自己分內的工作，同時以人為本，且觀察力敏鋭。ISFJ是體貼、可信賴的人。',
    lead: '德蕾莎修女',
    job: '牙醫、小學老師、圖書館員、經銷權擁有人、客服專員',
    keywords: ['心理', '關係', '溝通'],
    type: 'sj',
  },

  estj: {
    name: '總經理',
    desc: '講求實際、具邏輯性、好分析、處事果斷，具天生企業經營的天份，可承擔責任，並快速做出務實的決定。該人格類型約占人口的8－12%。',
    lead: '福特汽車創始人福特（Henry Ford）',
    job: '律師、專案經理、藥劑師、法官、保險員',
    keywords: ['PM', '法律', '思考', '管理'],
    type: 'sj',
  },

  esfj: {
    name: '執政官',
    desc: '將注意力放在外部世界，誠摯地關心他人，認真對待自己應盡的責任。他們的決定多基於價值觀以及可能對人造成的影響。他們經常通過改變自己來滿足別人的期望。如果在一個有高道德標準的環境長大，通常會展現出真正的慷慨和善意。',
    lead: '美國「鋼鐵大王」安德魯·卡內基（Andrew Carnegie）',
    job: '業務員、護士或醫療人員、社工人員、公關專員、信貸員',
    keywords: ['心理', '公關', '業務', '溝通', '影響'],
    type: 'sj',
  },

  istp: {
    name: '鑑賞家',
    desc: '善於分析問題核心，並能立即完成補救工作。該人格類型適合工程學領域。他們關心具體事物，具有安静、坦率以及誠實的個性。對問題解決的方式充滿自信。該人格類型約占人口的4－10%。',
    lead: 'Twitter創始人多西（Jack Dorsey）',
    job: '土木工程師、經濟學家、飛行員、數據通信分析師、急診部外科醫生',
    keywords: ['經濟', '數據分析', '程式', '前端', '後端', '程式'],
    type: 'sp',
  },

  isfp: {
    name: '探險家',
    desc: '具有隨和、體貼和關懷他人的人生態度，討人喜歡，自己卻不喜歡辯論或發表意見，但是他們的價值觀對自己很重要。對環境敏感，可以很清楚察覺夥伴在做什麼，但卻寧可讓他人帶領自己。',
    lead: '蘋果天才設計師伊夫（Jonathan Ive）',
    job: '時尚設計師、物理治療師、按摩治療師、園林建築師、倉庫管理員',
    keywords: ['時尚', '藝術', '旅遊', '溝通', '關係'],
    type: 'sp',
  },

  estp: {
    name: '企業家',
    desc: '積極與身邊的人互動，喜愛社交活動，是親身實踐的學習者。是所有類型中最擅長影響他人的人格類型。他們的語言實在、行動功利，是優秀的危機處理者。',
    lead: '歐洲太平洋資本（Euro Pacific Capital）總裁薛夫（Peter Schiff）',
    job: '偵探、銀行家、投資者、經紀人、運動教練',
    keywords: ['簡報', '社群', '溝通', '關係', '行銷'],
    type: 'sp',
  },

  esfp: {
    name: '表演者',
    desc: '追求極致的生活體驗，喜歡物質上的享受，總能以新點子來滿足個人的需求，很少讓傳統阻礙自己的決定。他們是優秀的團隊成員，觀察力敏鋭、實際，通常是根據自己的標準來做決定。',
    lead: '英國維珍集團創辦人布蘭森（Richard Branson）、甲骨文創始人埃里森（Larry Ellison）',
    job: '兒童福利顧問、主治醫生、演員、室內設計師、環境設計師',
    keywords: ['旅遊', '文案', '行銷'],
    type: 'sp',
  },
}
function App() {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [third, setThird] = useState('')
  const [forth, setForth] = useState('')
  const [page, setPage] = useState(0)
  const [result, setResult] = useState('')
  const [type, setType] = useState('')
  const [avatar, setAvatar] = useState(avatarData.intj)
  const funcion_list = [
    setFirst,
    setSecond,
    setThird,
    setForth,
  ]

  const setValue = (index, radioIndex) => {
    if (index === 4) {
      let result_type = first + second + third + forth
      setResult(type_details[result_type])
      setType(type_details[result_type].type)
      setPage(index + 1)
      setAvatar(avatarData[result_type])
    } else {
      funcion_list[index](answer_list[index][radioIndex].value)
      setPage(index + 1)
    }

    // console.log(first, second, third, forth)
    // if (index + 1 === 4) {
    //   console.log(type_details[first + second + third + forth], first + second + third + forth)
    //   setResult(type_details[first + second + third + forth])
    // }
  }

  // console.log(type_details, type_list)

  const reset = () => {
    setFirst('')
    setSecond('')
    setThird('')
    setForth('')
    setPage(0)
    setResult('')
    setType('')
  }

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share({
            title: 'Howcobe',
            text: 'Howcobe 心理測驗 幫助你挑選適合的課程',
            url: window.location.href
          })
          .then(() =>
            console.log("Hooray! Your content was shared to tha world")
          )
      } catch (error) {
        // window.alert(`Oops! I couldn't share to the world because: ${error}`)
      }
    } else {
      // fallback code
      window.alert(
        "Web share is currently not supported on this browser. Please provide a callback"
      )
    }
  }

  // const shareIG = async () => {
  //   try {
  //     const canvas = await html2canvas(document.querySelector(".screen"), {
  //       allowTaint: true,
  //       useCORS: true
  //     })
  //     canvas.style.display = "none"
  //     document.body.appendChild(canvas)
  //     // const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")

  //     canvas.toBlob(function (blob) {
  //       const a = document.createElement("a")
  //       a.setAttribute("download", `info.png`)
  //       a.href = URL.createObjectURL(blob)
  //       a.click()
  //     })
  //     // a.setAttribute("download", `info.png`)
  //     // a.setAttribute("href", image)
  //     // a.click()

  //   } catch (e) {
  //     window.alert(e)
  //   }
  //   // domtoimage.toBlob(document.querySelector('.screen'))
  //   //   .then(function (blob) {
  //   //     saveAs(blob, '心理測驗.png')
  //   //   })
  //   // domtoimage.toJpeg(document.querySelector('.screen'), { quality: 0.95 })
  //   //   .then(function (dataUrl) {
  //   //     var link = document.createElement('a')
  //   //     link.download = '心理測驗.jpeg'
  //   //     link.href = dataUrl
  //   //     link.click()
  //   //   })
  //   // const screen = document.querySelector('.screen')
  //   // domtoimage.toPng(screen)
  //   //   .then(function (dataUrl) {
  //   //     var img = new Image()
  //   //     img.src = dataUrl
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.error('oops, something went wrong!', error)
  //   //   })
  //   // window.open('instagram://story-camera')
  // }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: avatar.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className={`screen page-${page} ${type}`}>
      <div className="content">
        {page < 4 && <div className="brand-title">Howcobe 心理測驗</div>}
        {page < 4 && <div className="brand-desc">在自我學習這塊領域中，幫助你找到想要的課程</div>}
        {/* 問題頁 */}
        {question_list.map((question, index) => (
          (page === index) && <div key={`question-${index}`}>
            <div className="question-title">
              <span>{`${index + 1}/${question_list.length}`}</span>
              {question}
            </div>
            <div className="ans-title" onClick={() => setValue(index, 0)}>{answer_list[index][0].desc}</div>
            <div className="ans-title" onClick={() => setValue(index, 1)}>{answer_list[index][1].desc}</div>
          </div>))}
        {/* 看結果 */}
        {

          (page === 4 && !result) && <div className="check">
            <div className="question-title">
              恭喜你完成測試 😄<br />
              Howcobe 會根據你的選擇推薦適合你的課程
            </div>
            <div className="btn-check" onClick={() => setValue(4)}>看結果 👀</div>
          </div>
        }
        {/* 答案頁 */}
        {
          result &&
          <div className="result">
            <img src={logo} className="logo" alt="logo" />
            <div className="result-title">
              你是
            </div>
            <div className="result-name">
              {result.name} / {first + second + third + forth}
            </div>
            <div className="lottie-avatar">
              <Lottie options={defaultOptions}
                height={'100%'}
                width={'100%'}
                isStopped={false}
                isPaused={false} />
            </div>
            <div className="result-title">
              描述
            </div>
            <div className="result-desc">
              {result.desc}
            </div>
            <div className="result-title">
              代表人物
            </div>
            <div className="result-lead">
              {result.lead}
            </div>
            <div className="result-title">
              適合職業
            </div>
            <div className="result-job">
              {result.job}
            </div>
            <div className="result-title">
              建議課程關鍵字🔥
            </div>

            <div className="result-keywords">
              {result.keywords.map(keyword => (<div className="result-keyword">{keyword}</div>))}
            </div>
            <br />
            <div className="btns">
              <a className="btn-submit blue" href="https://lin.ee/mghSNDp?type=enfj">推薦課程</a>
              {/* <div className="btn-submit purple" onClick={shareIG}>分享IG</div> */}
              <div className="btn-submit green" onClick={shareLink}>分享鏈結</div>
              <div className="btn-submit gray" onClick={reset}>重做測驗</div>
            </div>
          </div>
        }
      </div>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />

          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.15)" />
        </g>
      </svg>
    </div >

  )
}

// TODO
// 1. 頁面樣式調整 v
// 3. 首頁文案 v
// 6. 看結果文案 v
// 7. 結果頁樣式 v
// 4. 分享連結給朋友 v
// 2. 分享 IG x
// 9. 紀錄結果
// 8 讓測試結果可以被 line chatbot 捕捉到 x
// 11.  line chatbot 網頁開了兩次問題
// 12. line chatbot 新增心理測驗專區

export default App
