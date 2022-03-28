const quotes = [
  {
    quote: "나를 죽이지 못하는 고통은 나를 강하게 만든다.",
    author: "프리드리히 니체",
  },
  {
    quote: "너 자신이 되어라.",
    author: "프리드리히 니체",
  },
  {
    quote: "하루라도 책을 읽지 않으면 입안에 가시가 돋는다.",
    author: "안중근",
  },
  {
    quote: "Stay Hungry, Stay Foolish.",
    author: "Steve Jobs",
  },
  {
    quote: "거인의 어깨위에 올라서라.",
    author: "아이작 뉴턴",
  },
  {
    quote: "누구나 그럴 듯한 계획을 가지고 있다. 한 대 쳐 맞기 전까지는.",
    author: "무하마드 알리",
  },
  {
    quote: "완벽은 불가능하지만, 변화는 가능하다.",
    author: "마음챙김",
  },
  {
    quote: "내적 사랑과 충만함의 외적 확장.",
    author: "김형준",
  },
  {
    quote: "도망치는 곳에 낙원은 없다.",
    author: "슬램덩크",
  },
  {
    quote: "A great pleasure in life is doing what people say you cannot do.",
    author: "Walter Bagehot",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
