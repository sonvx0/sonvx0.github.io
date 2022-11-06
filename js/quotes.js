const quotes = [
    {
    quote: '당신이 할 수 있다고 믿든, 할 수 없다고 믿든 믿는 대로 될 것이다.',
    author: 'Henry Ford'
    },
    {
    quote: '희망은 밝고 환한 양초 불빛처럼 우리 인생의 행로를 장식하고 용기를 준다. 밤의 어둠이 짙을수록 그 빛은 더욱 밝다.',
    author: 'Oliver Goldsmith'
    },
    {
    quote: '행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다.',
    author: 'Hellen Adams Keller'
    },
    {
    quote: '아무 것도 성취하지 못했을지라도 자신을 존경하라. 거기에 상황을 바꿀 힘이 있으니. 자신을 함부로 비하하지 말라. 멋진 인생을 만드는 첫걸음은 바로 자신을 존경하는 것이다.',
    author: '니체'
    },
    {
    quote: '춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지녀야 한다.',
    author: '니체'
    },
    {
    quote: '너는 안이하게 살고자 하는가? 그렇다면 항상 군중 속에 머물러 있으라. 그리고 군중에 섞여 너 자신을 잃어버려라.',
    author: '니체'
    },
    {
    quote: '나흘째가 되자 헛소문이 곰팡이처럼 퍼져나갔다. 나는 마침내 합리적인 대화를 이어갈 지각있고 진실한 대화 상대를 찾아냈다. 바로 내 자신이었다.',
    author: '한나 아렌트'
    },
    {
    quote: '나를 믿어라. 인생에서 최대의 성과와 기쁨을 수확하는 비결은 위험한 삶을 사는 데 있다.',
    author: '니체'
    },
    {
    quote: '살면서 어느 사이에 꿈과 이상을 버리게 되면 그것을 말하는 사람을 비웃게 되고 시샘으로 인해 마음이 어지러워진다. 그러면 발전하겠다는 의지나 자기 자신을 극복하겠다는 강고한 마음 또한 버려지게 된다.',
    author: '니체'
    },
    {
    quote: '열정으로부터 견해가 생기고, 정신적 태만이 이를 신념으로 굳어지게 한다.',
    author: '니체'
    },
    ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

ranQuote=quotes[Math.floor(Math.random()*quotes.length)]; //10나오면어뜩함? 그리고 철자오타 오짐
quote.innerText=`${ranQuote.quote}`;
author.innerText=`${ranQuote.author}`; 

