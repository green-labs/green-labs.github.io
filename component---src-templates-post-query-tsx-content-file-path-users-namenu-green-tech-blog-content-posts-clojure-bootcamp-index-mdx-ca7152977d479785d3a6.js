"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[807],{5752:function(e,n,l){l.r(n),l.d(n,{default:function(){return o}});var t=l(7294),a=l(9626),c=l.p+"static/diploma-d65ebecdfd8e827c0da3a3c17cfc0892.png";function r(e){var n=Object.assign({p:"p",h2:"h2",h3:"h3",a:"a",blockquote:"blockquote",strong:"strong",code:"code",pre:"pre",ol:"ol",li:"li",ul:"ul",div:"div",br:"br"},(0,a.ah)(),e.components),l=n.Author;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Author",!0),t.createElement(t.Fragment,null,t.createElement(n.p,null,"안녕하세요. 저는 7월에 그린랩스에 백엔드 개발자로 입사한 권정인이라고 합니다. 저는 파이썬으로 6개월간 인턴십을 수행하고, 현업에서는 자바로 1년, 자바스크립트(및 타입스크립트)로 3년 정도 개발을 했습니다. 그러던 중, 그린랩스에서 함수형으로 개발을 한다는 소문을 듣고 입사하게 되었습니다."),"\n",t.createElement(n.p,null,"그린랩스의 부트캠프에 대해 궁금해하시는 분들이 많다고 들었습니다. (저도 입사 전에 너무 궁금했거든요!) 클로저 무경험인 제가 겪은 부트캠프는 어땠는지 이 글을 통해 공유해보려고 합니다."),"\n",t.createElement(n.h2,null,"부트캠프 소개"),"\n",t.createElement(n.p,null,"그린랩스에 백엔드 개발자로 입사하시면 '부트캠프'라는 온보딩 과정이 제공됩니다. 클로저 숙련도에 따라 초급자는 3주, 중급자는 1주에 걸쳐 진행됩니다."),"\n",t.createElement(n.p,null,"초급자 과정은 ",t.createElement("u",null,"Advent of Code 10문제 풀고 리팩토링하기"),", ",t.createElement("u",null,"클로저로 작성한 AWS Lambda 배포해보기"),", ",t.createElement("u",null,"클로저 웹서버 띄워보기"),"로 구성되어 있습니다."),"\n",t.createElement(n.p,null,"중급자 과정은 ",t.createElement("u",null,"Advent of Code 4문제 풀고 리팩토링하기"),", ",t.createElement("u",null,"클로저 웹서버 띄워보기"),"로 구성되어 있습니다."),"\n",t.createElement(n.h2,null,"1~2주차"),"\n",t.createElement(n.h3,null,"📙 클로저 시작하기"),"\n",t.createElement(n.p,null,"문제를 풀기 전에 팀원분이 빌려주신 ",t.createElement(n.a,{href:"https://blog.insightbook.co.kr/2016/03/30/%ED%81%B4%EB%A1%9C%EC%A0%80-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90%EA%B3%BC-7%EC%A3%BC-%ED%9B%88%EB%A0%A8-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8/"},"<","클로저 시작하기",">","(캐린 마이어 저, 인사이트 출판)"),"라는 책을 2장까지 읽었습니다."),"\n",t.createElement(n.p,null,"1장에서는 데이터 타입에 대해 공부했습니다."),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"클로저의 데이터 타입은 정수, 실수, 분수, 문자열, 불린(boolean)을 포함하는 ",t.createElement(n.strong,null,"단순값"),", 리스트(list), 벡터(vector), 맵(map), 집합(set)을 포함하는 ",t.createElement(n.strong,null,"컬렉션"),"이 있습니다."),"\n"),"\n",t.createElement(n.p,null,"2장에서는 함수(defn), if, reduce, map 등에 대해 공부했습니다."),"\n",t.createElement(n.p,null,"부트캠프 코치님이 이 정도면 문제 풀기에 충분할 거라 하시더라고요. 문제가 어렵지 않을 거라는 예감이 들었습니다."),"\n",t.createElement(n.h3,null,"Advent of Code 문제풀기"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"🎄 ",t.createElement(n.a,{href:"https://adventofcode.com"},"Advent of Code(이하 AoC)"),"는 2015년부터 시작된 12월 1일부터 25일까지 크리스마스를 테마로 진행되는 문제 풀기 행사입니다."),"\n"),"\n",t.createElement(n.p,null,"클로저 초급자인 저는 10개의 AoC 문제를 받았습니다. 동료분들이 한국어로 번역한 문제를 제공해 주어, 문제를 푸는 데만 시간을 쏟을 수 있었습니다. 한국어로 번역된 문제는 ",t.createElement(n.a,{href:"https://github.com/green-labs/bootcamp-aoc/tree/main/translations"},"그린랩스 GitHub"),"에 공개되어 있습니다."),"\n",t.createElement(n.p,null,"제가 풀었던 기초적인 문제를 하나 살펴보겠습니다."),"\n",t.createElement(n.p,null,t.createElement(n.strong,null,"주어진 입력의 숫자를 더할 때마다 나오는 숫자 중, 처음으로 두 번 나오는 숫자를 구하시오.")),"\n",t.createElement(n.p,null,"문제의 입력 예로 ",t.createElement(n.code,null,"+3 +3 +4 -2 -4"),"를 들어 봅시다. ",t.createElement(n.code,null,"3(+3) -> 6(+3) -> 10(+4) -> 8(-2) -> 4(-4) -> 7(+3) -> 10(+3)")," 와 같이 입력 순서에 따라 수를 반복하여 더합니다. 그러면 ",t.createElement(n.code,null,"10"),"이 처음으로 두 번 나오는 것을 발견할 수 있습니다. 이 입력 예의 답은 ",t.createElement(n.code,null,"10")," 입니다."),"\n",t.createElement(n.p,null,"문제가 어렵지 않죠? 진짜 문제는 자바스크립트 코드밖에 떠오르지 않는 제 머릿속이었습니다..."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-javascript"},"let seen = new Set();\nlet sum = 0;\n\nfor (let index = 0; ; index++) {\n  sum += input[index % input.length];\n  if (seen.has(sum)) break; // 두 번 나오는 숫자가 있을 경우 break\n  seen.add(sum);\n}\n\nconsole.log(sum); // 답\n")),"\n",t.createElement(n.p,null,"자바스크립트 풀이와 비슷한 방법으로 클로저 코드를 작성해 보았습니다. 클로저에서는 ",t.createElement(n.code,null,"loop/recur"),"를 사용하여 코드를 반복 실행할 수 있었습니다. ",t.createElement(n.code,null,"#{}"),"은 클로저에서 집합을 만드는 표현입니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-clojure"},"(loop [input (cycle input)\n       sum 0\n       seen? #{}]\n  (let [sum (+ sum (first input))]\n    (if (seen? sum) ; 두 번 나오는 숫자가 있을 경우\n      (println sum) ; 답\n      (recur (next input) sum (conj seen? sum)))))\n")),"\n",t.createElement(n.h3,null,"매일 오후 5:30 피드백의 시간"),"\n",t.createElement(n.p,null,"문제를 풀다 보면 어느새 리뷰 시간인 오후 5시 30분이 되었고, 회의실이나 개더타운 앱에서 코드를 함께 보며 리뷰를 했습니다. 많은 피드백을 받았지만, 그중 몇 가지만 정리해 보겠습니다."),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"코드 스타일"),"\n",t.createElement(n.p,null,"처음에는 코드 스타일을 개선하라는 의견을 많이 받았습니다. 클로저에 익숙하지 않은 채로 작성하여 클로저에 어울리지 않는 코드를 많이 작성했습니다. 함수형 언어는 ",t.createElement(n.strong,null,"가독성"),"이 높은 것이 장점이라는데, 뜻밖에도 제가 함수형 언어로 짠 코드는 다음날이 되면 저 자신도 읽지 못하는 사태가 벌어지곤 했습니다. 😂"),"\n",t.createElement(n.p,null,"동료 분들이 클로저 코드 스타일을 개선하는 데 도움이 되는 문서들을 공유해주셨습니다."),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://guide.clojure.style/"},"https://guide.clojure.style/")),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://bsless.github.io/code-smells/"},"https://bsless.github.io/code-smells/")),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"쓰레딩 매크로를 사용하기"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-clojure"},'(update (assoc {:name "Socrates", :age 39} :hair-color :gray) :age inc))\n\n;; 쓰레딩 매크로 사용\n(-> {:name "Socrates", :age 39}\n    (assoc :hair-color :gray) ; 위의 식을 평가한 결과가 assoc 뒤의 첫번째 인자로 삽입된다\n    (update :age inc)) ; 위의 식을 평가한 결과가 update 뒤의 첫번째 인자로 삽입된다\n')),"\n",t.createElement(n.p,null,"1번째 줄의 코드와 4~6번째 줄의 코드는 같은 동작을 합니다. ",t.createElement(n.code,null,"->")," 쓰레딩 매크로를 사용하면 이전 식을 평가한 결괏값이 첫 번째 인자로 사용되기 때문이죠. 이전 식의 평가치를 마지막 인자로 사용하는 ",t.createElement(n.code,null,"->>")," 쓰레딩 매크로도 있습니다. 쓰레딩 매크로를 사용하면 순서가 드러나기 때문에 가독성이 더 높아집니다."),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"함수 잘 나누기"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-clojure"},";; 줄줄 풀어서 문제를 푼 예\n(->> input\n     (reduce (fn []\n       ; 문자열 파싱하기\n     )\n     (filter (fn []\n       ; 값이 유효한지 검사하기\n     )\n     count)\n\n;; 함수를 잘 나눈 예\n(->> (parse input)\n     (filter valid?)\n     count)\n")),"\n",t.createElement(n.p,null,"함수를 잘 나눠 추상화 수준을 높이면 어떤 로직을 처리하고자 하는지 쉽게 파악할 수 있습니다. 함수를 잘 나눈 예를 보면, 'input을 파싱하고 유효한 값을 count 하려는' 의도를 쉽게 읽을 수 있습니다."),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"문제 많이 풀기"),"\n",t.createElement(n.p,null,"처음부터 문제 하나를 완벽하게 풀려고 드는 것보다, 일단 단순 무식한 해법으로라도 문제를 많이 풀어보는 접근법이 더 좋았습니다. 어차피 배우면서 고쳐야 하기 때문이죠!"),"\n"),"\n"),"\n",t.createElement(n.h3,null,"끝나지 않는 리팩토링"),"\n",t.createElement(n.p,null,"위에서 풀었던 문제를 ",t.createElement(n.code,null,"loop/recur")," 대신 ",t.createElement(n.code,null,"reduce"),"로 리팩토링해 보기로 했습니다. ",t.createElement(n.code,null,"reduce"),"는 시퀀스를 하나의 값으로 축약하는 함수입니다. ",t.createElement(n.code,null,"reduce"),"는 출력을 예상할 수 있어, 그렇지 못한 ",t.createElement(n.code,null,"loop/recur"),"보다 간단한 코드를 만들 수 있습니다. 답을 찾으면 바로 반환하는 ",t.createElement(n.code,null,"loop/recur"),"에 비해 모든 값을 확인해야 하는 ",t.createElement(n.code,null,"reduce"),"가 더 비효율적이라고 생각했지만, 클로저의 ",t.createElement(n.code,null,"reduce"),"에는 중간에 탈출할 수 있는 ",t.createElement(n.code,null,"reduced"),"가 있어 그런 비효율도 피할 수 있습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-clojure"},"(reduce\n  (fn [{:keys [sum seen?]} x]\n    (let [sum (+ sum x)]\n      (if (seen? sum) ; 두 번 나오는 숫자가 있을 경우\n        (reduced sum) ; 답\n        {:sum sum :seen? (conj seen? sum)})))\n  {:sum 0 :seen? #{}} (cycle input))\n")),"\n",t.createElement(n.p,null,"각 반복 단계마다 ",t.createElement(n.code,null,"sum"),"을 구하여 ",t.createElement(n.code,null,"seen?"),"에 추가해두고, 다음 단계에서 이전에 본 ",t.createElement(n.code,null,"sum"),"들을 ",t.createElement(n.code,null,"seen?"),"에서 확인하는 방식으로 문제를 풀 수 있었습니다. ",t.createElement(n.code,null,"if")," 의 조건식인 ",t.createElement(n.code,null,"(seen? sum)")," 은 ",t.createElement(n.code,null,"seen?")," 집합에 ",t.createElement(n.code,null,"sum"),"이 있으면 그 값을 반환하므로 참으로 평가됩니다. (클로저에서는 ",t.createElement(n.code,null,"false"),", ",t.createElement(n.code,null,"nil"),"을 제외한 모든 값이 참으로 평가(truthy)됩니다.)"),"\n",t.createElement(n.h3,null,"지연 시퀀스"),"\n",t.createElement(n.p,null,"며칠 후엔 클로저의 지연 평가라는 개념을 배우게 되었습니다. 지연 평가는 실제로 필요해지는 순간까지 평가를 미루는 방법인데요. 이로 인해 클로저에서는 무한한 시퀀스를 다룰 수 있다고 합니다. ",t.createElement(n.code,null,"range")," 함수로 무한 시퀀스를 쉽게 만들 수 있습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-clojure"},"(range 5) ; => (0 1 2 3 4)\n(range 5 10) ; => (5 6 7 8 9)\n(range) ; => (0 1 2 3 4 5 6 7 8 9 10 ...)\n(take 10 (range)) ; => ?\n")),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"range"),"함수는 인자 없이 사용하면 위 예시의 3번째 줄처럼 무한한 시퀀스를 생성합니다. 3번째 줄을 실제로 평가하면 오류가 발생합니다."),"\n",t.createElement(n.p,null,t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 537px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/c21080d829f347bc56b70401207ca44e/b1cde/crash.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 10.04016064257028%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXUlEQVQI142JQQqAIBQFvUlpUEpgQvo1SKWgRZvuf5sXmLhuMTzeDDPmhrMPxBDABaH/AS/49ru6QniwbT5x6AtBZZBMWKYdXiU4mYqzMkGPn6PqqbWIVcbSvMqlvRyXPfrkr7y4AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Crash"\n        title="Crash"\n        src="/static/c21080d829f347bc56b70401207ca44e/b1cde/crash.png"\n        srcset="/static/c21080d829f347bc56b70401207ca44e/6a5fb/crash.png 249w,\n/static/c21080d829f347bc56b70401207ca44e/79e1b/crash.png 498w,\n/static/c21080d829f347bc56b70401207ca44e/b1cde/crash.png 537w"\n        sizes="(max-width: 537px) 100vw, 537px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n4번째 줄을 평가하면 어떤 일이 일어날까요? ",t.createElement(n.code,null,"take")," 함수는 시퀀스 앞에서 n개의 요소를 가져오는 함수입니다. 오류가 날 것으로 생각할 수도 있지만, 오류 없이 ",t.createElement(n.code,null,"(0 1 2 3 4 5 6 7 8 9)"),"가 반환됩니다. 무한 시퀀스를 생성한 후 10개의 값을 가져오는 게 아니라, 실제로 필요한 10개의 요소만을 생성하는 것이죠. 지연 시퀀스의 힘이 느껴지시나요?"),"\n",t.createElement(n.p,null,"지연 시퀀스를 사용해서 다시 문제를 풀어봅시다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-clojure"},"(defn first-duplicate\n  [input]\n  (reduce (fn [seen? x]\n            (if (seen? x) ; 두 번 나오는 숫자가 있을 경우\n              (reduced x) ; 답\n              (conj seen? x)))\n          #{} input))\n\n(->> (cycle input) ; (1)\n     (reductions +) ; (2)\n     first-duplicate) ; (3)\n")),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"reduce"),"를 사용하여 시퀀스의 처음 중복되는 숫자를 찾는 함수 ",t.createElement(n.code,null,"first-duplicate"),"를 작성했습니다."),"\n",t.createElement(n.p,null,"(1) 입력을 무한히 반복해서 넣습니다.",t.createElement(n.br),"\n","(2) 더하기(+)를 적용한 시퀀스를 생성합니다. ",t.createElement(n.code,null,"reductions"),"는 입력에 함수(여기서는 +)를 적용한 지연 시퀀스를 생성하는 코어 함수입니다.",t.createElement(n.br),"\n","(3) 첫 번째 반복되는 숫자를 찾습니다."),"\n",t.createElement(n.p,null,"저는 리팩토링을 통해 무엇을 얻었을까요? ",t.createElement(n.code,null,"reduce"),"를 사용한 풀이에서는 현재 값을 더하고 중복 여부를 확인하는 일을 한 함수 안에서 모두 했습니다. 개선된 풀이에서는 함수들을 작은 역할로 분리하여 가독성과 재사용성을 높일 수 있었습니다. ",t.createElement(n.code,null,"first-duplicate")," 함수는 어떤 컬렉션에 대해서도 사용할 수 있어 재사용성이 높습니다. 또한 ",t.createElement(n.code,null,"reductions"),"와 같은 코어 함수를 잘 활용해서 코드가 간결해졌습니다."),"\n",t.createElement(n.p,null,"어떤 언어든지 잘 활용하기 위해서는 언어가 제공하는 라이브러리에 익숙해야 할 것입니다. 특히나 클로저에는 강력한 코어 함수가 많아서 이들을 잘 활용하면 코드 품질이 극적으로 향상되는 것 같습니다. 이 글에서 소개한 문제 외에도 여러 문제를 풀면서 ",t.createElement(n.code,null,"juxt"),", ",t.createElement(n.code,null,"frequencies")," 등 유용한 코어 함수들을 접할 수 있었습니다. 코드 리뷰를 받다 보면, '이럴 때 이 함수!' 하면서 다들 보따리에서 하나씩 꺼내 주시기도 합니다. 특히 문제를 풀려는 방식과 의도를 잘 전달했을 때 그런 유용한 피드백을 더 많이 받을 수 있었던 것 같습니다."),"\n",t.createElement(n.h2,null,"3주차"),"\n",t.createElement(n.p,null,"3주차에는 클로저 관련 도구에 익숙해지기 위해 ",t.createElement("u",null,"클로저로 작성한 AWS Lambda 배포해보기"),"와 ",t.createElement("u",null,"클로저 웹서버 띄워보기"),"를 실습했습니다."),"\n",t.createElement(n.h3,null,"클로저로 작성한 AWS Lambda 배포해보기"),"\n",t.createElement(n.p,null,"AWS Lambda가 지원하는 런타임의 목록에는 클로저가 명시되어 있지 않습니다. 하지만 JVM 기반 언어를 지원하기 때문에 클로저를 사용할 수 있습니다. 동료들이 작성해 둔 매뉴얼을 보며 Lambda 함수를 몇 가지 만들어보는 실습을 했습니다. 이 과정은 다른 언어와 비슷합니다. 소스 코드와 dependency를 묶은 패키지를 생성하고 AWS에 올리는 방식입니다."),"\n",t.createElement(n.h3,null,"클로저 웹서버 띄워보기"),"\n",t.createElement(n.p,null,"그린랩스에는 농사에 관한 정보를 한눈에 볼 수 있는 '팜모닝'이라는 서비스가 있습니다. 이 서비스의 백엔드는 클로저로 개발되어 있어요. 클로저 웹 프로젝트에 친숙해지기 위해, 그리고 앞으로 실제 개발에 사용하기 위해 로컬에서 웹서버를 띄워보는 실습을 했습니다."),"\n",t.createElement(n.p,null,t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/403c4363d1f056fc3f310a3a495e579b/d7ab4/farmmorning.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.22489959839358%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABv0lEQVQoz02QTYvTQBiA8/O8+z+8eN+LN8GjR/0FHrzYUsHDgl22uOsuwqpQXZvdtGmSZt6v+UymjaQjRXjgheeZdwYmI8ET2oqx2ljNmv73rMlYsc6wJmQ4+Yw1JUiwKIv5n5tv+U+AVgwnL4aJ4ebh+3z5tVWNWE7XsaaMDSVI0+JqMfs0m86mRVkYb0gTG0bBxZfLycfJZDY9/3yuSImVlDKxLJbZkHGaNe/apoWd8Sb58R2NZV3WTdWq3bbeosApZeJYHLMjF+whHpy1+xjjPiYvjrWTPvZ934cQhmHQXthSShmPm8yetTd1w49Fo8D40LPnhHjZlJX33TAMh2EQL+QppSwN8iROA3K/38f94IJndzwRSIJsVneLy+n7D+/mFxegFXdyTJxxYBqhda3yogFQbduKjBkDoScT7ds3r5+fPX324snLV2e12nLUGIg6yqgbBwZUdVmVm2K9ruoKENDjv2Th5vrq7sf1Mr/NH3IwiB0lMuwRe4QewaLCVluxx69WAcYUcce738tf9/erfPXY1I14UT3AcSWDiAn0hAShc6FztrMqooqgIjS23dZVud0UZVHv6taq5FWEv55XYgt3br9/AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="farmmorning"\n        title="farmmorning"\n        src="/static/403c4363d1f056fc3f310a3a495e579b/5caea/farmmorning.png"\n        srcset="/static/403c4363d1f056fc3f310a3a495e579b/6a5fb/farmmorning.png 249w,\n/static/403c4363d1f056fc3f310a3a495e579b/79e1b/farmmorning.png 498w,\n/static/403c4363d1f056fc3f310a3a495e579b/5caea/farmmorning.png 996w,\n/static/403c4363d1f056fc3f310a3a495e579b/d7ab4/farmmorning.png 1014w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(n.p,null,"팜모닝 서비스 개발자분들의 도움을 받아 IDE를 설정하고 구조를 살펴봤습니다. 이 프로젝트는 ",t.createElement(n.a,{href:"https://github.com/ring-clojure/ring"},"ring"),", ",t.createElement(n.a,{href:"https://github.com/metosin/reitit"},"reitit"),", ",t.createElement(n.a,{href:"https://github.com/seancorfield/honeysql"},"honeysql"),", ",t.createElement(n.a,{href:"https://github.com/walmartlabs/lacinia"},"lacinia"),", ",t.createElement(n.a,{href:"https://github.com/tomekw/hikari-cp"},"hikari-cp")," 등의 오픈 소스로 구성되어 있는데요. 하나하나 역할을 이해하고 코드를 눈에 익히다 보니 일주일이 금방 지나갔습니다."),"\n",t.createElement(n.p,null,"곧 클로저 웹서버 구성 튜토리얼도 블로그를 통해 공개될 예정이라고 하니 기대해주세요!"),"\n",t.createElement(n.h2,null,"🎓 졸업"),"\n",t.createElement("div",{style:{width:"50%",maxWidth:"354px",margin:"0 auto"}},t.createElement("img",{src:c})),"\n",t.createElement(n.p,null,"이름이 부트캠프라 처음엔 겁나기도 했지만 되돌아보니 사실 신규입사자에 대한 그린랩스 개발팀의 열렬한 환영이었던 것 같습니다."),"\n",t.createElement(n.p,null,"귀여운 졸업장도 받고 부트캠프도 끝났지만, 저의 클로저 프로그래밍은 이제 시작입니다. 실무에 투입된 지 한 달 정도 되었는데, 실무에서 쓰이는 클로저는 AoC 문제처럼 복잡하고 어렵진 않지만 고민해야 할 부분이 더 많습니다. 실제 세상에는 예외가 많아서 코드가 지저분해지기 쉽기도 하고요. 그런 와중에도 아름다운 코드를 놓치지 않는 멋진 개발자가 되어야 합니다."),"\n",t.createElement(n.p,null,"부트캠프는 클로저뿐 아니라 동료들과도 가까워질 수 있는 시간이었습니다. 처음 프로젝트 설정에 도움을 주셨던 분들, 코드를 리뷰해주시는 분들, 같이 밥을 먹으며 문제에 대한 생각을 나누었던 분들, 부트캠프를 응원해주시는 분들, 같이 리뷰를 받으며 더 좋은 코드를 쓰기 위해 고민했던 분들 모두 감사드립니다."),"\n",t.createElement(n.p,null,"덕분에 부트캠프 과정을 재미있고 뜻깊게 보냈습니다. 앞으로 그린랩스에서의 여정도 즐거울 것이라는 기대가 됩니다."),"\n",t.createElement("br"),"\n",t.createElement("br"),"\n",t.createElement("hr"),"\n",t.createElement("br"),"\n",t.createElement(l,{email:"jungin.kwon1@gmail.com",name:"권정인",description:"백엔드 개발자",date:"2021-09-13"}))}var m=function(e){void 0===e&&(e={});var n=Object.assign({},(0,a.ah)(),e.components).wrapper;return n?t.createElement(n,e,t.createElement(r,e)):r(e)};var u=l(3710);function o(e){return t.createElement(u.Z,e,t.createElement(m,e))}u.Z}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-content-file-path-users-namenu-green-tech-blog-content-posts-clojure-bootcamp-index-mdx-ca7152977d479785d3a6.js.map