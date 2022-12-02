"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[766],{7772:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var l=t(7294),a=t(9626);function r(e){var n=Object.assign({p:"p",h2:"h2",a:"a",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components),t=n.Author;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Author",!0),l.createElement(l.Fragment,null,l.createElement(n.p,null,"안녕하세요. 그린랩스 웹 개발팀에서 프론트엔드 엔지니어로 근무하고 있는 김효은입니다."),"\n",l.createElement(n.p,null,"입사 전에는 타입스크립트 환경에서 서비스를 개발했습니다. 개발자로서 성장 자극을 찾던 중에 '함수형 프로그래밍' 패러다임을 소개하는 온라인 강의를 듣게 되었어요. 순수 함수의 유연함과 간결함에 감탄하며 그동안 당연시했던 고정 관념들을 깨뜨리는 낯선 관점에 빠르게 매료되었습니다."),"\n",l.createElement(n.p,null,"하지만 기초 이론을 익혔음에도 프로덕션 환경에 적용하기는 쉽지 않았어요. 때마침 풀스택 함수형 프로그래밍으로 실제 서비스를 개발하고 있는 회사- 그린랩스를 알게 되었어요. 함수형 프로그래밍을 위해 비주류 언어로 서비스를 개발하고 있는 것을 보고, 이 회사는 함수형 프로그래밍에 진심이라고 생각했어요. 저의 갈망을 충족시켜 줄 것을 확신하며 입사를 결정했습니다."),"\n",l.createElement(n.p,null,"그린랩스 프론트엔드 팀에서는 리스크립트(ReScript)와 리스크립트 리액트(ReScript React)를 사용하고 있습니다. 리스크립트는 타입스크립트보다 더 강력한 타입 시스템을 제공하는 함수형 언어이며, 타입스크립트와 마찬가지로 자바스크립트 코드로 트랜스파일할 수 있습니다. 리스크립트 리액트는 리액트를 리스크립트에서 사용할 수 있도록 바인딩한 라이브러리입니다."),"\n",l.createElement(n.p,null,"이 포스팅에서 간략한 프론트엔드 부트캠프 소개와 리스크립트를 사용하면서 개인적으로 좋았던 점을 공유합니다."),"\n",l.createElement(n.h2,null,"부트캠프"),"\n",l.createElement(n.p,null,"그린랩스에 프론트엔드 개발자로 입사하시면 3주 동안의 온보딩 과정- 부트캠프에 참여하실 수 있어요. 부트캠프는 리스크립트 공식 문서를 읽고, *Advent of Code 문제들을 풀고, 페어 프로그래밍도 해보고, 코치에게서 리뷰를 받고, 더 멋진 코드로 리팩터링 해보는 과정이예요."),"\n",l.createElement(n.p,null,"한 주당 문제 세 개씩을 푸는데, 문제를 푸는 과정에서 하루에 한 시간씩 리뷰도 받을 수 있어요. 리뷰 시간에는 부트캠프 코치와 함께 문제 풀이를 살펴보며 더 개선할 방향을 찾을 수 있습니다. 풀이를 슬랙에 공유하면 코치 외의 동료들도 적극적으로 리뷰를 해줍니다."),"\n",l.createElement(n.p,null,"*",l.createElement(n.a,{href:"https://adventofcode.com/2020/about"},"Advent of Code"),": 2015년부터 시작된 12월 1일부터 25일까지 크리스마스를 테마로 진행되는 문제 풀이 행사"),"\n",l.createElement(n.h2,null,"리스크립트를 사용하면서 좋았던 점"),"\n",l.createElement(n.h3,null,"패턴 매치로 빈틈 없애기"),"\n",l.createElement(n.p,null,"리스크립트에는 '패턴 매치(pattern match)'라는 기능이 있습니다. 패턴 매치는 데이터의 형태에 따라 적절한 로직을 선택하여 실행하도록 합니다. 이프(if)나 스위치(switch) 같은 선택문과 유사해 보이지만, 데이터가 취할 수 있는 모든 형태를 엄격하게 정의해야 한다는 점이 구별됩니다. 규칙이 컴파일 타임에 강제되므로, 모든 경우를 정의하지 않으면 컴파일 에러가 발생하여 아예 빌드가 되지 않습니다."),"\n",l.createElement(n.p,null,"프론트엔드 환경은 온갖 비동기 요청과 사용자의 입력이 난무하는 수라도이죠. 우리는 이런 혼란 속에서 의도치 않게 수많은 빈틈을 만들어내곤 합니다. 패턴 매치의 엄격한 점검을 받으면 조그만 구멍조차도 빠트리지 않고 점검할 수 있습니다."),"\n",l.createElement(n.p,null,"다음은 패턴 매치의 예입니다. ① ",l.createElement(n.code,null,"state"),"라는 타입에 '로딩', '성공', '실패'라는 세 가지 상태를 정의했습니다. ② ",l.createElement(n.code,null,"state")," 타입의 상태에 따라 컴포넌트를 올바르게 렌더할 수 있도록, ",l.createElement(n.code,null,"state")," 타입이 가질 수 있는 세 가지 상태에 대한 모든 대응을 구현해야 합니다. ③ 그렇지 않으면 컴파일 에러가 발생합니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"type state = Loading | Success | Fail  // ①\n\n// ② 올바름: state 타입의 모든 사례 구현\nswitch state {\n\t| Loading =>  <LoadingComponent />\n\t| Success =>  <SuccessComponent />\n\t| Fail =>  <FailComponent />\n}\n\n// ③ 컴파일 오류: Loading 미구현\nswitch state {\n\t| Success =>  <SuccessComponent />\n\t| Fail =>  <FailComponent />\n}\n")),"\n",l.createElement(n.h3,null,"배리언트를 이용하여 타입을 더 구체적으로 선언 가능"),"\n",l.createElement(n.p,null,"배리언트(variant)는 여러가지 타입을 OR(논리합, 합집합)로 결합하는 데이터 구조입니다. 여러가지 타입을 포괄하고자 할 때, 너무 일반적인 타입을 사용하는 대신 배리언트로 구체적인 타입 여러 개를 결합할 수 있습니다. 다음은 한 AoC 문제 풀이에서 값과 단위(inch, cm)로 이루어진 키를 파스하는 사례입니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'// 원본 텍스트: "height:165cm", "height:65inch"\n// ① 배리언트를 사용하지 않은 방식\n// height : (165, "cm"), (65, "inch")\ntype height = (int, string)\n\n// ② 배리언트를 사용하는 방식\n// height : Cm(165), Inch(65)\ntype height = Cm(int) | Inch(int)\n')),"\n",l.createElement(n.p,null,"① 배리언트를 사용하지 않은 예에서는 키를 정수와 문자열의 튜플 ",l.createElement(n.code,null,"(int, string)"),"로 정의했습니다. ② 배리언트를 사용한 방식에서는 키를 센티미터 단위 정수",l.createElement(n.code,null,"Cm(Int)"),"나 인치 단위 정수",l.createElement(n.code,null,"Inch(int)"),"로 정의했습니다. 이처럼 배리언트를 사용함으로써 값의 유형을 더 구체적으로 정의할 수 있습니다."),"\n",l.createElement(n.p,null,"배리언트를 이용한 타입 정의는 패턴 매칭과 결합할 때 더욱 유용합니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"// ① 배리언트를 사용하지 않는 방식\nlet (value, unit) = height  // 정수와 문자열의 튜플을 구조분해\nif (unit == 'cm') {\n  ...  // 센티미터 단위 처리\n}\nelse if (unit == 'inch') {\n  ...  // 인치 단위 처리\n}\nelse {\n  ...  // 'cm', 'inch' 가 아닌 경우. 에러 처리\n}\n\n// ② 배리언트를 사용하는 방식\nswitch height {\n\t| Cm(value) => ...  // 센티미터 단위 처리\n\t| Inch(value) => ...  // 인치 단위 처리\n}\n")),"\n",l.createElement(n.p,null,"배리언트를 사용하지 않을 때는 문자열 비교를 이용하기 때문에 안전하게 하려고 ",l.createElement(n.code,null,"else"),"를 추가합니다. 논리상 ",l.createElement(n.code,null,"else"),"는 ",l.createElement(n.code,null,"unit"),"에서 나올 수 없는 경우이지만 ",l.createElement(n.code,null,"else"),"를 정의해야 하기 때문에 에러로 처리합니다. 하지만 배리언트를 사용하면 두 가지의 구체적으로 상태로 한정했기 때문에 ",l.createElement(n.code,null,"unit"),"의 의미가 그대로 코드에 적용됩니다. 따라서 그 외 경우(",l.createElement(n.code,null,"else"),")가 일어나지 않습니다."),"\n",l.createElement(n.p,null,"배리언트는 유지보수에도 유용합니다. 후에 새로운 단위 피트(Feet)가 추가된다고 생각해봅시다. ①에서는 ",l.createElement(n.code,null,"unit"),"이 사용된 부분을 개발자가 직접 찾으며 조건을 추가해야 합니다. 에러가 발생하지 않기 때문에 어쩌면 개발자가 모르고 지나갈 수 있죠. 그러나 ② 경우 배리언트에 Feet(Int)만 추가하면 컴파일러가 모든 상태를 다루지 않은 패턴 매치를 위치와 함께 수정하라고 에러를 발생시킬 것입니다."),"\n",l.createElement(n.h3,null,"옵션 타입"),"\n",l.createElement(n.p,null,"리스크립트에는 자바스크립트의 ",l.createElement(n.code,null,"null"),"과 ",l.createElement(n.code,null,"undefined"),"가 없습니다. 값이 없는 상태는 '옵션(option)' 타입으로 정의할 수 있습니다. 옵션 타입은 값이 있거나 없거나 둘 중 하나의 상태를 갖습니다."),"\n",l.createElement(n.p,null,"옵션은 자바스크립트 런타임에서 ",l.createElement(n.code,null,"null"),", ",l.createElement(n.code,null,"undefined")," 때문에 발생하는 오류들을 막아줍니다. 옵션을 처음 접했을 때는 낯설고 어려워 보였지만, 익숙해지니 ",l.createElement(n.code,null,"undefined is not a function"),", ",l.createElement(n.code,null,"cannot read properties of null")," 등 프론트엔드 개발자들을 괴롭히는 온갖 오류들을 피할 수 있어 고마웠습니다. 타입을 이용해 값이 없을 수 있음을 명시함으로써, 로직에서 값이 없는 경우를 대응하지 않을 경우 컴파일 에러가 일어나도록 합니다. 런타임 에러를 컴파일 에러로 완화하고 예방하는 것이죠."),"\n",l.createElement(n.p,null,"옵션 타입을 위한 연산 중, map 함수를 살펴봅시다. map 함수는 인자로 받은 함수를 실행해주는데, 이를 이용하여 값이 있을 때만 함수를 실행하는 로직을 if 문 없이 선언적으로 구현할 수 있습니다."),"\n",l.createElement(n.p,null,"자바스크립트에서는 다음과 같이 실수로 null 관련 오류를 일으키기 쉽습니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'// "dog"이 "hello cat"에 매치되지 않아 dog 에 null 이 대입됩니다.\nvar dog = \'hello cat\'.match(/dog/g)\n\n// null 에서 length 속성을 읽을 수 없어 오류가 발생합니다.\ndog.length\n')),"\n",l.createElement(n.p,null,"리스크립트의 옵션을 이용하면 null 에러를 컴파일 타임에 막을 수 있습니다. if 문도 사용하지 않고 말이죠."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'// dog : Option<Array<string>> 타입. match_ 메서드에 반환 타입이 정의되어 있습니다.\nlet dog = Js.String2.match_("hello cat", %re("/dog/g"))\n\n// 컴파일 에러: 옵션 타입에서는 배열 타입의 length 함수를 직접 사용할 수 없습니다.\ndog -> Array.length\n\n// 올바른 코드: 값이 없는 경우 0을 반환하고, 값이 있는 경우 함수를 실행합니다.\ndog -> Option.mapWithDefault(0, d => d -> Array.length)\n')),"\n",l.createElement(n.h3,null,"함수의 입출력 타입에 대한 고려"),"\n",l.createElement(n.p,null,"리스크립트에서는 모든 변수의 타입을 구체적으로 명시하는데, 그 덕분에 함수의 인터페이스를 파악할 때도 함수의 인자와 반환값의 타입을 중심으로 고려하게 됩니다. 저는 이런 특성 덕분에 함수형 프로그래밍 원리를 더 쉽게 이해할 수 있었습니다."),"\n",l.createElement(n.p,null,"예전에는 함수형 프로그래밍이라는 게 단순히 반복문 대신 맵(map)과 리듀스(reduce)를 사용하는 것이라고 막연하게 생각했습니다. 물론, 반복문을 사용하지 않는 것이 곧 함수형 프로그래밍인 것은 아닙니다. 하지만 실제로 함수형 프로그래밍에서는 절차형 프로그래밍에서보다 반복문을 적게 사용합니다. 함수의 타입 시그니처를 살펴보다가 그 이유를 명확히 알 수 있었습니다."),"\n",l.createElement(n.p,null,"반복문의 타입 시그니처는 ",l.createElement(n.code,null,"input<a'..> → void"),"입니다. 컬렉션을 입력받지만 반환값은 없는 것이죠. 반환값이 없다는 건 함수 외부의 상태를 변경하는 부작용(side-effect)으로만 실행 결과를 낼 수 있다는 걸 뜻합니다. 부작용을 일으키는 코드가 많아지면 프로그램의 데이터 흐름이 복잡해지고 유지보수가 어려워지기 때문에 함수형 패러다임에서는 부작용이 없는 순수 함수를 선호합니다."),"\n",l.createElement(n.p,null,"반복문은 반환값이 없으므로 조합도 불가능합니다. 조합(compose)이란 한 순수 함수의 출력을 다른 순수 함수의 입력으로 잇는 식으로 연결하여 더 큰 로직을 만들어내는 방법입니다. 함수형 프로그래밍의 핵심 방법 중 하나입니다."),"\n",l.createElement(n.p,null,"다음 코드는 반복문 함수인 ",l.createElement(n.code,null,"forEach"),"로 작성한 코드와, 그 코드를 반복문을 사용하지 않도록 개선해 본 것입니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"// 반복문 함수 forEach를 사용하여 부작용을 일으킨 코드\n// 순수 함수가 좋다는 걸 알아도 처음에는 이런 코드를 만들기 쉽습니다.\nlet a = []\n\nRange.forEach(start, end, i => {\n  if condition(split_arr[i]) {\n    return\n  } else {\n    let b = processing(split_arr[i])\n    a.push(b)\n  }\n})\n\n// 리뷰 의견: forEach를 사용해 부작용이 발생했습니다. forEach를 사용하지 않도록 수정해보세요.\n\n// 개선\nlet result = split_arr\n  ->Array.keep(s => condition(s))\n  ->Array.map(s => processing(s))\n")),"\n",l.createElement(n.h3,null,"작은 함수들의 조합으로 프로그램을 구성하기"),"\n",l.createElement(n.p,null,'코드 리뷰 중 "코드를 작성하기 전에 함수 시그니처를 먼저 정의해보라"라는 의견이 있었습니다. 그렇게 해보니 각 입력 타입을 출력 타입으로 변환하는 형태를 미리 파악할 수 있었고, 변환 단계마다 각각의 작은 함수가 담당해야 할 기능을 분리하여 생각하고 구현할 수 있었습니다.'),"\n",l.createElement(n.p,null,"절차적으로 사고하면 각 단계의 행동을 서술하는 식으로 코드를 작성하게 됩니다. 반면, 함수 시그니처를 먼저 정의하면 함수의 역할과 데이터의 형태를 중심으로 코드를 작성할 수 있습니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-text"},"// 절차적으로 생각하는 방식\n- string 을 passport 데이터 객체로 바꾸는 함수\n  - input string 을 split 한다.\n  - split된 요소를 key, value 값으로 나누어 passport 객체로 만든다.\n\n// 선언적으로 생각하는 방식\n- parser : string -> Array<passport>\n  - splitter: string -> Array<string>\n  - stringToPassport: Array<string> -> Array<passport>\n\nparser = splitter o stringToPassport\n")),"\n",l.createElement(n.p,null,"이런 연습을 하니 자연히 사고 방식도 함수형 패러다임으로 옮겨갔습니다. 전에는 각 함수마다 수행해야 할 단계별 동작을 생각하는 절차적 프로그래밍 방식에 익숙했습니다. 지금은 각 단계를 시그니처로 표현합니다. 그러면 전체 처리 과정이 데이터 구조의 변화에 따라 명확하게 분리됩니다. 시그니처로 표현한 단계들은 곧 작은 함수들이 되는데, 이 함수들은 전후 문맥과 독립적으로 자신의 일만을 담당하도록 정의합니다. 그러면 전체 프로그램도 여러 개의 순수 함수를 조합하는 형태로 구성됩니다."),"\n",l.createElement(n.p,null,"시그니처를 먼저 정의하면, 시그니처만 보고도 함수를 어떻게 구현해야할지 미리 예상할 수 있습니다. 앞의 코드에서 ",l.createElement(n.code,null,"stringToPassport")," 함수는 시그니처만 보고도 map 함수를 사용해야 한다는 걸 알 수 있습니다. 왜 그럴까요? map 함수의 시그니처를 살펴보면 다음과 같습니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"- Array<'a>.map(Array<'a>, ('a) ⇒ 'b) : Array<'b>\n- List<'a>.map(List<'a>, ('a) ⇒ 'b) : List<'b>\n- Option<'a>.map(Option<'a>, ('a) ⇒ 'b) : Option<'b>\n")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Array"),", ",l.createElement(n.code,null,"List"),", ",l.createElement(n.code,null,"Option"),"을 어떤 값을 감싸는 컨테이너로 생각한다면, map 함수는 그 안의 값의 타입을 바꾸는 함수로 볼 수 있습니다. 이에 따라 ",l.createElement(n.code,null,"stringToPassport")," 함수는 ",l.createElement(n.code,null,"Array"),"라는 컨테이너 안의 값의 타입을 ",l.createElement(n.code,null,"string"),"에서 ",l.createElement(n.code,null,"passport"),"로 바꾸는 것이기에 map 함수를 사용하는 것이 적절합니다."),"\n",l.createElement(n.h3,null,"그 외의 장점"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"리스크립트는 다양한 컬렉션 타입을 조작하는 함수를 내장 API로 지원합니다. 그래서 컬렉션 조작을 위해 람다(Ramda), 로대시(Lodash) 같은 라이브러리를 사용하지 않아도 됩니다."),"\n",l.createElement(n.li,null,"파이프 연산자 ",l.createElement(n.code,null,"->"),"를 지원합니다. 방향을 명확히 알 수 있어 체이닝보다 좋습니다."),"\n",l.createElement(n.li,null,"트랜스파일된 자바스크립트 코드의 가독성이 매우 좋습니다. 리스크립트 코드가 자바스크립트 코드로 트랜스파일되는 방식을 파악하기 쉽습니다."),"\n"),"\n",l.createElement(n.h2,null,"마치며"),"\n",l.createElement(n.p,null,"리스크립트는 다른 언어와 차이점이 많아 처음 접했을 때는 손발이 묶인 듯 불편했습니다. 문제를 풀며 언어를 익히는 동안 빠르게 답을 내려고 서두르기보다는, 언어가 제공하는 특징을 최대한 활용하는 구현을 찾으려고 노력했습니다. 감사하게도 프론트엔드 팀 동료들이 코드를 친절하게 리뷰해주고, 도움 될 자료들을 아낌없이 공유해 주었습니다. 그결과 지금은 코드를 이해하고 구현하는데 어느정도 익숙해졌습니다."),"\n",l.createElement(n.p,null,"부트캠프에서 리스크립트를 배우며 얻은 것이 참 많습니다. 새로운 언어와 함께 그 언어의 철학(함수형 패러다임)을 더 자세히 이해할 수 있었습니다. 절차형 코드를 함수형 코드로 개선하며 그 구성의 차이를 직접 느껴본 것도 즐거웠습니다. 무엇보다도 함수형 프로그래밍에 관해 이야기 나눌 수 있는 팀원들이 있어 행복합니다. 앞으로 그린랩스에서 함수형 프로그래머로서 팀원들과 함께 성장하게 될 것이 기대됩니다."),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t,{email:"hyosaritech@gmail.com",name:"김효은",description:"프론트엔드 엔지니어",date:"2021-10-29"}),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(n.h2,null,"참고자료"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://rescript-lang.org/docs/manual/latest/introduction"},"https://rescript-lang.org/docs/manual/latest/introduction")),"\n"))}var c=function(e){void 0===e&&(e={});var n=Object.assign({},(0,a.ah)(),e.components).wrapper;return n?l.createElement(n,e,l.createElement(r,e)):r(e)};var m=t(6488);function u(e){return l.createElement(m.Z,e,l.createElement(c,e))}m.Z}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-content-file-path-users-hyejin-documents-tech-blog-content-posts-rescript-bootcamp-index-mdx-866a2f6845423b515166.js.map