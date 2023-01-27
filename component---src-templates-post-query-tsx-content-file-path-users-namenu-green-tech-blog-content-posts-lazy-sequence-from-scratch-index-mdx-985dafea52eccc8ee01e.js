"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[861],{716:function(e,n,l){l.r(n),l.d(n,{default:function(){return E}});var a=l(7294),t=l(9626);function r(e){var n=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ol:"ol",li:"li",ul:"ul"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h2,null,"소개"),"\n",a.createElement(n.p,null,"제가 함수형 프로그래밍으로 개발한다고 말하면, 때때로 저에게 함수만으로 무엇을 할 수 있는지 물어보는 분들이 있습니다.\n저는 그분들에게 무엇이든 할 수 있다고 답합니다. 하지만 이 말로는 부족할 때가 많습니다.\n오늘은 그 질문에 대한 저만의 답변이 될 만한 이야기들을 간단하게 적어보려고 합니다."),"\n",a.createElement(n.h2,null,"자연수 만들기"),"\n",a.createElement(n.p,null,"함수만으로 우리는 자연수를 표현할 수 있습니다.\n저는 처치 인코딩(Church numerals)을 이용하려고 합니다. 자세한 설명은 다음 링크를 참고해주시기 바랍니다. ",a.createElement(n.a,{href:"#ref-1"},"[1]"),a.createElement(n.a,{href:"#ref-5"},"[5]"),"\n개발자는 코드로 말하므로 이론적인 설명은 치우고 곧바로 코드를 만들도록 하겠습니다."),"\n",a.createElement(n.p,null,"숫자 0, 1, 2, 3 만들어 보겠습니다. 숫자의 크기는 함수",a.createElement(n.code,null,"f"),"가 얼마나 감싸고 있느냐로 표현합니다.\n언어는 자바스크립트를 사용합니다.",a.createElement(n.a,{href:"#ref-4"},"[4]")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var zero = (f) => (x) => x;\nvar one = (f) => (x) => f(x);\nvar two = (f) => (x) => f(f(x));\nvar three = (f) => (x) => f(f(f(x)));\n")),"\n",a.createElement(n.p,null,"다음 수, 더하기, 곱하기 함수를 만들어보겠습니다. (빼기, 나누기, 지수 등 추가적으로 관심이 있으시다면 ",a.createElement(n.a,{href:"#ref-5"},"[5]"),"를 참고해주세요)"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"// f를 1개 추가합니다.\nvar SUCC = (n) => (f) => (x) => f(n(f)(x));\n// f를 n개 추가합니다.\nvar PLUS = (m) => (n) => m(SUCC)(n);\nvar MULT = (m) => (n) => m(PLUS(n))(zero);\n")),"\n",a.createElement(n.p,null,"하지만 람다표현식이 정말로 제대로 동작하는지 확인하기는 쉽지 않습니다. 모두 함수로 감싸져있기 때문입니다.\n임의로 출력하는 함수는 만들어보았습니다. 함수로 문자를 표현하는 것은 생각하겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var printNumber = (f) => f((n) => n + '+1')('0');\n")),"\n",a.createElement(n.p,null,"실제로 출력을 해보겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"console.log(printNumber(zero)); // 0\nconsole.log(printNumber(one)); // 0+1\nconsole.log(printNumber(two)); // 0+1+1\nconsole.log(printNumber(three)); // 0+1+1+1\n")),"\n",a.createElement(n.p,null,"계승, 더하기, 곱하기는 잘 작동하는지 보겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"console.log(printNumber(SUCC(three))); // 0+1+1+1+1\nconsole.log(printNumber(MULT(two(one)))); // 0+1+1\nconsole.log(printNumber(MULT(two)(three))); // 0+1+1+1+1+1+1\n")),"\n",a.createElement(n.h2,null,"함수로 만드는 자료구조"),"\n",a.createElement(n.p,null,"우리는 자료구조 중에 두 개의 요소를 저장할 수 있는 ",a.createElement(n.code,null,"pair"),"를 만들어 볼 것입니다.\n이제부터 숫자는 자바스크립트 타입을 그대로 사용하겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var pair = (a) => (b) => (f) => f(a)(b);\nvar first = (a) => (b) => a;\nvar second = (a) => (b) => b;\n\npair(1)(2)(first); // 1\npair(1)(2)(second); // 2\n")),"\n",a.createElement(n.p,null,"이렇게 구현한 pair를 이용하여 우리는 N개의 요소를 나열하는 자료구조를 만들 수 있습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"pair(1)(pair(2)(3))(first); // 1\npair(1)(pair(2)(3))(second)(first); // 2\n")),"\n",a.createElement(n.h2,null,"함수로 만드는 조건절"),"\n",a.createElement(n.p,null,"조건절을 만드려면 참과 거짓이 있어야합니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var TRUE = (a) => (b) => a;\nvar FALSE = (a) => (b) => b;\n")),"\n",a.createElement(n.p,null,"이 함수가 참과 거짓을 잘 나타내는지 확인해보기위해 ",a.createElement(n.code,null,"AND"),", ",a.createElement(n.code,null,"OR")," 를 만들어보겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var AND = (a) => (b) => a(b)(FALSE);\nvar OR = (a) => (b) => a(TRUE)(b);\n")),"\n",a.createElement(n.p,null,"진리표에 부합하는 값이 나오는지 테스트해보겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"AND(TRUE)(TRUE); // [Function: TRUE]\nAND(TRUE)(FALSE); // [Function: FALSE]\nAND(FALSE)(TRUE); // [Function: FALSE]\nAND(FALSE)(FALSE); // [Function: FALSE]\n\nOR(TRUE)(TRUE); // [Function: TRUE]\nOR(TRUE)(FALSE); // [Function: TRUE]\nOR(FALSE)(TRUE); // [Function: TRUE]\nOR(FALSE)(FALSE); // [Function: FALSE]\n")),"\n",a.createElement(n.p,null,"조건절은 아래처럼 만들 수 있습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var COND = (p) => (a) => (b) => p(a)(b);\n")),"\n",a.createElement(n.p,null,a.createElement(n.code,null,"TRUE"),", ",a.createElement(n.code,null,"FALSE")," 가 잘 작동하는지 보겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"COND(TRUE)(1)(2); // 1\nCOND(FALSE)(1)(2); // 2\n")),"\n",a.createElement(n.p,null,"실제로 사용을 하려면 ",a.createElement(n.code,null,"TRUE"),", ",a.createElement(n.code,null,"FALSE")," 람다를 리턴하는 함수가 필요합니다.\n위에서 생성한 숫자를 테스트하는 ",a.createElement(n.code,null,"ISZERO")," 를 만들어 보겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var ISZERO = (f) => f((a) => FALSE)(TRUE);\nISZERO(zero); // [Function: TRUE]\nISZERO(one); // [Function: FALSE]\n")),"\n",a.createElement(n.p,null,a.createElement(n.code,null,"COND")," 에 대입하면 작동하는 것을 볼 수 있습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"COND(ISZERO(zero))(10)(20); // 10\nCOND(ISZERO(one))(10)(20); // 20\n")),"\n",a.createElement(n.h2,null,"함수로 만드는 반복문"),"\n",a.createElement(n.p,null,"함수로 반복문을 만들 때는 재귀를 이용합니다.\n하지만 만약 이름이 없는 익명함수(람다)인 경우는 어떻게 할 수 있을까요?"),"\n",a.createElement(n.p,null,"오로지 익명함수만으로 재귀를 호출할 수 있는 '와이콤비네이터'라는 것이 있습니다.\n이것은 일전에 제가 블로그로 소개하는 것이 있으니 그것을 참고해주시면 감사하겠습니다. ",a.createElement(n.a,{href:"#ref-2"},"[2]")),"\n",a.createElement(n.h2,null,"함수로 만드는 지연성"),"\n",a.createElement(n.p,null,"대부분의 프로그래밍 언어는 함수가 실행되기 전에 인자를 먼저 평가합니다. ",a.createElement(n.a,{href:"#ref-3"},"[3]"),"\n아래 코드에서 우리는 ",a.createElement(n.code,null,"1 + 1")," 표현식의 평가를 지연시켜야 합니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"someFunction(1 + 1);\n")),"\n",a.createElement(n.p,null,"그러기 위해서 우리는 함수로 감싸서 평가를 지연시킬 것입니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var delayedTwo = () => 1 + 1;\n")),"\n",a.createElement(n.p,null,"다시 실행하려면 인자가 없이 함수를 실행시키면 됩니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"delayedTwo();\n2;\n")),"\n",a.createElement(n.p,null,"이제 우리는 아주 쉽게 평가가 지연된 배열을 만들 수 있습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"// 가독성을 위해 인자 2개를 한번에 받도록 하였습니다.\nvar l = pair(1)(() => 2);\nl(second)();\n")),"\n",a.createElement(n.p,null,"하지만 중간중간마다 ",a.createElement(n.code,null,"()")," 을 이용하여 지연(delay)된 값을 강제로 평가해서 가져와야 합니다.\n우리는 이것을 ",a.createElement(n.code,null,"force"),"라는 함수로 대신하도록 할 것입니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var force = (a) => a();\n")),"\n",a.createElement(n.p,null,"이제 ",a.createElement(n.code,null,"second"),"의 경우 수행될 때마다 한번은 강제로 평가를 수행하는 ",a.createElement(n.code,null,"force"),"를 추가로 수행해야 합니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var force = (a) => a();\nvar secondForce = (a) => (b) => b(force);\n")),"\n",a.createElement(n.p,null,"이제 다음처럼 호출할 수 있습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"l(secondForce);\n2;\n")),"\n",a.createElement(n.p,null,"우리는 이제 특정 범위의 숫자를 지연된 리스트로 만들어낼 수 있습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var range = (start) => (end) => {\n  if (start > end) {\n    return null;\n  } else {\n    return pair(start)(() => range(start + 1)(end));\n  }\n};\n")),"\n",a.createElement(n.p,null,"테스트를 해보겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var a = range(1)(3);\na(first); // 1\na(secondForce)(first); // 2\na(secondForce)(secondForce)(first); // 3\n")),"\n",a.createElement(n.p,null,"테스트하기 위해 좀 지연된 리스트를 모두 리턴하는 함수를 만들어 보겠습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var printAll = (list) => {\n  while (list != null) {\n    console.log(list(first));\n    list = list(secondForce);\n  }\n};\n\nprintAll(range(1)(10));\n")),"\n",a.createElement(n.p,null,"무한으로 반복하는 ",a.createElement(n.code,null,"repeat"),"이라는 함수도 만들 수 있습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var repeat = (n) => pair(n)(() => repeat(n));\n\nvar ones = repeat(1);\nones(first); // 1\nones(secondForce)(first); // 1\nones(secondForce)(secondForce)(first); // 1\n// printAll() // 브라우저가 멈출 수 있습니다.\n")),"\n",a.createElement(n.p,null,"우린 방금 무한으로 만들어지는 자료구조를 생성하였습니다.\n이제 ",a.createElement(n.code,null,"take"),"라는 함수를 이용해서 무한 자료구조에서 N개만을 가져올 수 있도록 해볼 것입니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var take = (n) => (list) => {\n  if (n <= 0) return null;\n  return pair(list(first))(() => take(n - 1)(list(secondForce)));\n};\n\nprintAll(take(100)(repeat(1))); // 1이 100번 출력됩니다.\nprintAll(take(1)(range(1)(10000000000000000000000000000000000))); // 1\n")),"\n",a.createElement(n.p,null,"아래는 지금까지 소개한 코드를 모두 모아놓은 것입니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var zero = (f) => (x) => x;\nvar one = (f) => (x) => f(x);\nvar two = (f) => (x) => f(f(x));\nvar three = (f) => (x) => f(f(f(x)));\n\nvar SUCC = (n) => (f) => (x) => f(n(f)(x));\nvar PLUS = (m) => (n) => m(SUCC)(n);\nvar MULT = (m) => (n) => m(PLUS(n))(zero);\n\nvar printNumber = (f) => f((n) => n + '+1')('0');\n\nvar pair = (a) => (b) => (f) => f(a)(b);\nvar first = (a) => (b) => a;\nvar second = (a) => (b) => b;\n\nvar TRUE = (a) => (b) => a;\nvar FALSE = (a) => (b) => b;\n\nvar AND = (a) => (b) => a(b)(FALSE);\nvar OR = (a) => (b) => a(TRUE)(b);\n\nvar COND = (p) => (a) => (b) => p(a)(b);\n\nvar ISZERO = (f) => f((a) => FALSE)(TRUE);\n\nvar force = (a) => a();\nvar secondForce = (a) => (b) => b(force);\n\nvar range = (start) => (end) => {\n  if (start > end) {\n    return null;\n  } else {\n    return pair(start)(() => range(start + 1)(end));\n  }\n};\n\nvar repeat = (n) => pair(n)(() => repeat(n));\n\nvar take = (n) => (list) => {\n  if (n <= 0) return null;\n  return pair(list(first))(() => take(n - 1)(list(secondForce)));\n};\n\nvar printAll = (list) => {\n  while (list != null) {\n    console.log(list(first));\n    list = list(secondForce);\n  }\n};\n")),"\n",a.createElement(n.h2,null,"Clojure Macro로 Javascript의 한계를 넘어보기"),"\n",a.createElement(n.p,null,"이번장은 람다표현식에 대한 장이 아닙니다. 함수를 넘어서 매크로를 설명하는 번외편입니다."),"\n",a.createElement(n.p,null,"우리는 지금까지 자바스크립트를 사용하여 함수의 강력함을 알아보았습니다.\n자바스크립트의 함수는 가능한 모든 것을 만들기에 충분합니다.\n하지만 저에게는 한 가지 아쉬운 점이 남아있습니다."),"\n",a.createElement(n.p,null,"바로 지연하기 위한 코드를 함수로 만들 수 없다는 점입니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"var delay = (a) => () => a;\n")),"\n",a.createElement(n.p,null,"이 코드는 지연이 되는 것 같지만 우리가 원하는 대로 수행되지 않습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"delay(console.log('지연되지 않는다'));\n")),"\n",a.createElement(n.p,null,"왜냐하면 ",a.createElement(n.code,null,"delay")," 가 수행되기 전에 인자가 먼저 평가되기 때문입니다. ",a.createElement(n.a,{href:"#ref-3"},"[3]"),"\n우리는 아래처럼 직접 익명함수로 감싸줘야합니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"// 이렇게 말이지요\n() => console.log('지연되었습니다.');\n")),"\n",a.createElement(n.p,null,"하지만 지연성이 필요할 때마다 ",a.createElement(n.code,null,"() =>")," 를 직접 넣고 싶지는 않습니다.\n저는 코드가 좀 더 가독성 있고 자연스러웠으면 좋겠습니다.\n저는 이름을 붙이고 싶습니다."),"\n",a.createElement(n.p,null,"우리는 자바스크립트로 이것을 해결하기 위해 ",a.createElement(n.code,null,"eval"),", ",a.createElement(n.code,null,"new Function"),"을 이용한다면 코드를 문자열로 변경해야 할 것입니다.\n혹은 바벨이나 직접 트랜스파일링을 할 수도 있겠죠. 그렇다면 일이 엄청나게 커질 것입니다."),"\n",a.createElement(n.p,null,"하지만 이번에는 그린랩스에서 사용하는 Clojure코드를 이용하여 ",a.createElement(n.code,null,"delay"),"가 얼마나 쉽게 생성되는지 소개하겠습니다.\n우리는 ",a.createElement(n.code,null,"delay"),"라는 매크로를 사용하여 아래 코드를 지연시킬 것입니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-clojure"},'(delay (println "지연이 되어야 합니다."))\n')),"\n",a.createElement(n.p,null,"생성된 코드는 다음과 같습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-clojure"},'(defmacro delay [expr]\n  `(fn [] ~expr))\n\n(def delayed-print (delay (println "지연되어야 합니다."))) ;; 이곳에서는 아무것도 출력되지 않습니다.\n(delayed-print)  ;; "지연되어야 합니다." 가 출력됩니다.\n')),"\n",a.createElement(n.p,null,"Clojure의 매크로는 아주 자연스럽게 언어를 확장합니다. 원래 그랬던 것처럼요."),"\n",a.createElement(n.p,null,"감사합니다."),"\n",a.createElement(n.h2,null,"참고문헌"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"lambda calculus에 대한 개요"),"\n"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"[1] : ",a.createElement(n.a,{href:"https://helloworld.kurly.com/blog/lambda-calculus-1/"},"Lambda Calculus에 대해 알아보자")," ",a.createElement("a",{name:"ref-1"})),"\n"),"\n",a.createElement(n.ol,{start:"2"},"\n",a.createElement(n.li,null,"Y-Combinator"),"\n"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"[2] : ",a.createElement(n.a,{href:"https://helloworld.kurly.com/blog/y-combinator/"},"https://helloworld.kurly.com/blog/y-combinator/")," ",a.createElement("a",{name:"ref-2"})),"\n"),"\n",a.createElement(n.ol,{start:"3"},"\n",a.createElement(n.li,null,"applicative order eveluation"),"\n"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"[3] : ",a.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Evaluation_strategy"},"언어의 평가 순서")," ",a.createElement("a",{name:"ref-3"})),"\n"),"\n",a.createElement(n.ol,{start:"4"},"\n",a.createElement(n.li,null,"설명하는 언어로 자바스크립트를 사용한 이유"),"\n"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"[4] : ",a.createElement(n.a,{href:"https://www.crockford.com/javascript/javascript.html"},"https://www.crockford.com/javascript/javascript.html")," ",a.createElement("a",{name:"ref-4"})),"\n"),"\n",a.createElement(n.ol,{start:"5"},"\n",a.createElement(n.li,null,"처치 인코딩"),"\n"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"[5] : ",a.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Church_encoding"},"https://en.wikipedia.org/wiki/Church_encoding")," ",a.createElement("a",{name:"ref-5"})),"\n"))}var c=function(e){void 0===e&&(e={});var n=Object.assign({},(0,t.ah)(),e.components).wrapper;return n?a.createElement(n,e,a.createElement(r,e)):r(e)},m=l(3710);function E(e){return a.createElement(m.Z,e,a.createElement(c,e))}m.Z}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-content-file-path-users-namenu-green-tech-blog-content-posts-lazy-sequence-from-scratch-index-mdx-985dafea52eccc8ee01e.js.map