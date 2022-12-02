"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[223],{4157:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var l=t(7294),r=t(9626);function a(e){var n=Object.assign({blockquote:"blockquote",p:"p",a:"a",code:"code",h3:"h3",del:"del",ul:"ul",li:"li",pre:"pre",h4:"h4",ol:"ol",div:"div"},(0,r.ah)(),e.components),t=n.Author;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Author",!0),l.createElement(l.Fragment,null,l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"수정사항 (2022-11-17) ",l.createElement("br")," > ",l.createElement(n.a,{href:"https://green-labs.github.io/rescript-compiler-jsx-ppx#:~:text=%EA%B0%80%20%EC%9E%88%EB%8A%94%20%EA%B2%BD%EC%9A%B0-,JSX%EC%9D%98%20%EC%99%B8%EC%97%B0%20%ED%99%95%EB%8C%80,-v3%EB%8A%94%20React"},"JSX의 외연 확대"),"의 예로 들었던 ",l.createElement(n.code,null,"Remix")," 대신 ",l.createElement(n.code,null,"Preact")," 로 변경"),"\n"),"\n",l.createElement("br"),"\n",l.createElement(n.p,null,"리스크립트 컴파일러에 내장된 JSX v4를 개발하게 된 계기와 여정을 소개합니다. 그리고 v3 대비 어떤 점들이 개선되었는지도 소개합니다."),"\n",l.createElement(n.h3,null,"JSX v3 개선의 움직임 ",l.createElement(n.del,null,"(당시 나는 전혀 몰랐던)")),"\n",l.createElement(n.p,null,"코어팀은 기존의 JSX v3의 개선해야할 부분에 대해 정의하고 v4 개발 계획을 수립했던 것 같습니다. 당시 저는 몰랐지만요."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/rescript-lang/syntax/pull/235"},"https://github.com/rescript-lang/syntax/pull/235")),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"컴파일러와의 인터페이스를 정리하자"),"\n",l.createElement(n.li,null,"에러를 일으킬 때, 원본 코드의 위치를 더 잘 표시하자"),"\n",l.createElement(n.li,null,"레거시 ReasonReact를 정리하자"),"\n",l.createElement(n.li,null,"테스트를 더 추가하자"),"\n",l.createElement(n.li,null,"돔 요소의 어트리뷰트를 더 추가하자 (예, ",l.createElement(n.code,null,"aria-*"),")"),"\n"),"\n",l.createElement(n.p,null,"현재 개발된 v4의 모습에 비하면 당시 계획은 v3 대비 크게 달라지는 모습을 그리지는 않았던 것 같습니다. 특히 오브젝트로 표현되는 리액트 컴포넌트 props를 레코드로 바꿔야겠다는 생각은 없었던 것 같습니다."),"\n",l.createElement(n.h3,null,"JSX v4 개발에 걸려듬(?)"),"\n",l.createElement(n.p,null,"컴파일러 내부를 들여다보고 코드를 읽다보니, 이렇게 해서는 제대로 이해할 수 없겠다는 생각이 들었습니다. 직접 코드를 수정하고 만들어봐야 익힐 수 있겠다는 마음을 먹고 무엇을 만들까 고민했습니다. 그래서 머리속에 떠올랐던 기능이 Spread props였습니다. 자바스크립트나 타입스크립트에서는 자주 쓰는 표현인데, 리스크립트에서는 지원되지 않았습니다."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"{...p}")," Spread props 표현을 파싱하고, ",l.createElement(n.code,null,"p"),"라는 이름의 레코드를 모듈에서 찾아 각 필드의 값을 prop으로 전달하는 기능을 파서와 JSX PPX에 구현한 PR을 하였습니다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/rescript-lang/syntax/pull/517"},"https://github.com/rescript-lang/syntax/pull/517")),"\n"),"\n",l.createElement(n.p,null,"PR에 대해 메인테이너는 몇 가지 한계점을 지적하였습니다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"같은 이름의 레코드를 찾아서 필드들을 prop으로 전달하는 방식: alias 된 이름은 찾을 수가 없다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"// A.res\ntype p = {a: int, b: int}\nlet p = {a: 1, b: 2}\n\n// B.res\nlet q = A.p\n\n<Comp {...q} />\n// q는 찾을 수 있지만, 바인딩된 A.p는 문자 정보일 뿐 레코드라는 타입 정보는 없음.\n")),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"다른 모듈의 레코드는 참조할 수가 없다."),"\n"),"\n"),"\n",l.createElement(n.p,null,"PPX는 파서가 파싱 결과로 만든 Parsetree를 조작하는 프로그램이기 때문에, 컴파일러가 타입 정보를 추가해준 Typedtree는 PPX가 모르기 때문입니다. PPX가 가진 정보라고는 ",l.createElement(n.code,null,"q"),"는 타입 선언이고, ",l.createElement(n.code,null,"A.p"),"라는 문자와 바인딩되어 있구나 정도밖에 없습니다. 만약 ",l.createElement(n.code,null,"A.p"),"라는 레코드 타입이 다른 모듈에 선언되어있다면, 더더욱 알 길이 없죠. 그 한계를 알고는 있었습니다. 하지만 어떻게 해결할 수 있을 지는 몰랐습니다."),"\n",l.createElement(n.p,null,"내가 구현하고자 하는 기능이 컴파일러 안에서 작동하게 만들었다는 점에 '그래, 난 성장했어!'라고 만족했거든요."),"\n",l.createElement(n.p,null,"그런데 메인테이너가 예고없이 v3 개선 논의들과 v4의 청사진을 만들어서 공유해주기 시작합니다. (당황, 나한테 왜 그러는거지..) 그리고 이 한계를 개선할 수 있는 방법은 언어 자체를 활용해야한다는 걸 알려주었습니다. (그게 무슨 말이야..)"),"\n",l.createElement(n.h3,null,"JSX v3의 문제점과 개선 방향"),"\n",l.createElement(n.p,null,"v3를 개선해보자 했던 초기 계획보다 훨씬 큰 계획을 메인테이너가 공유해주었습니다. 저는 '음...이게 다 무슨 말이야?'라고 생각을 했습니다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/rescript-lang/syntax/issues/521"},"https://github.com/rescript-lang/syntax/issues/521")),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"@react.component")," 어트리뷰트 없이 함수만으로 리액트 컴포넌트를 표현할 수 있도록 하자."),"\n",l.createElement(n.li,null,"내부 표현에서 ",l.createElement(n.code,null,"makeProps")," 같은 요술을 제거하자."),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"makeProps"),"에서 사용하는 ",l.createElement(n.code,null,"@obj")," 대신 레코드의 표현력을 개선해보자."),"\n",l.createElement(n.li,null,"React v17에 소개된 새로운 JSX transform API를 도입하자."),"\n",l.createElement(n.li,null,"v3와의 하위호환: 가능한 점진적 마이그레이션이 가능한 방법을 찾자."),"\n"),"\n",l.createElement(n.p,null,"그리고 제가 이해할 수 있는 팁도 줍니다. ",l.createElement(n.code,null,'"레코드를 업데이트하는 문법이 있으니 레코드를 이용하면 Spread props을 구현할 수 있을거야."')),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"let q = {...p, a: 1} // 오!!\n")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/rescript-lang/syntax/pull/517"},"https://github.com/rescript-lang/syntax/pull/517"),l.createElement("br"),l.createElement(n.a,{href:"https://github.com/rescript-lang/syntax/pull/547"},"https://github.com/rescript-lang/syntax/pull/547")),"\n"),"\n",l.createElement(n.p,null,"첫번째 PR에서는 총 246개의 댓글을 통해 구현에 대해 논의하였고, PR의 제목도 JSX v4 WIP로 변경하였습니다. 본격적인 개발을 위해 새로운 PR을 만들고 메인테이너와 논의하면서 개발을 이어갔습니다."),"\n",l.createElement(n.p,null,"본격적인 v4 개발이 시작되었습니다."),"\n",l.createElement(n.h3,null,"JSX v4 개발"),"\n",l.createElement(n.h4,null,l.createElement(n.code,null,"makeProps"),"는 왜 필요한 것일까?"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"@obj external makeProps: ..."),"은 리액트 컴포넌트 props에 해당하는 오브젝트를 생성하고 각 prop의 타입을 체크해주는 역할을 합니다. 오브젝트 대신 레코드를 사용하려면 ",l.createElement(n.code,null,"makeProps"),"없이 props를 표현할 수 있어야 합니다."),"\n",l.createElement(n.p,null,"컴파일러는 리액트 컴포넌트를 정의(Definition)한 원본 코드를 이렇게 변환합니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'// 원본 코드\nmodule C = {\n  @react.component\n  let make = (~x, ~y) => React.string(x ++ y)\n}\n\n// v3로 변환한 결과\nmodule C = {\n  @obj\n  external makeProps: (\n    ~x: \'x,\n    ~y: \'y,\n    ~key: string=?, // key 타입 체크를 위한 인자 추가\n    unit,\n  ) => {"x": \'x, "y": \'y} = "" // 생성된 오브젝트\n\n  @react.component let make = (~x, ~y) => React.string(x ++ y)\n  let make = {\n    let \\"C" = (\\"Props": {"x": \'x, "y": \'y}) =>\n      make(~y=\\"Props"["y"], ~x=\\"Props"["x"])\n    \\"C"\n  }\n}\n\n')),"\n",l.createElement(n.p,null,"리액트 컴포넌트를 사용(application)하는 곳에서 ",l.createElement(n.code,null,"makeProps")," 함수를 호출해서 ",l.createElement(n.code,null,"x"),"와 ",l.createElement(n.code,null,"y"),"의 타입을 체크하고, ",l.createElement(n.code,null,'{"x": "x", "y": "y"}')," 오브젝트를 생성합니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'// 원본 코드\n<C x="x" y="y" />\n\n// v3가 변환한 결과\nReact.createElement(C.make, C.makeProps(~x="x", ~y="y", ()))\n    // 타입 체크 & 오브젝트 생성 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n')),"\n",l.createElement(n.p,null,"애초에 props 타입을 레코드 대신 ",l.createElement(n.code,null,"makeProps"),"가 생성하는 오브젝트로 대신하는 이유가 있습니다. 왜냐하면, 리액트 컴포넌트의 prop들은 일부만 사용할 수 있기 때문에, 레코드로 표현하면 필드의 타입이 option 타입을 사용해야하기 때문입니다. option 타입을 사용하면 ",l.createElement(n.code,null,'<C z=Some("z")>'),"라고 표현할 수 밖에 없으니까요. 그래서 v3는 레코드 대신 ",l.createElement(n.code,null,"makeProps")," 함수가 생성하는 오브젝트를 사용하여 구현할 수 밖에 없었을 것입니다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"오브젝트 대신 레코드"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"makeProps")," 함수를 대신하려면 레코드는 표현력이 더 좋아져야만 했습니다."),"\n",l.createElement(n.p,null,"컴포넌트의 props을 레코드로 표현했을 때, 각 필드는 하나의 prop 입니다. ",l.createElement(n.code,null,"x"),"와 ",l.createElement(n.code,null,"y"),"는 필수 prop이고, ",l.createElement(n.code,null,"z"),"는 선택 prop입니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"type props = {\n  x: string,\n  y: string,\n  z: option<string>,\n}\n")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"props를 사용하지 않은 경우: ",l.createElement(n.code,null,"let props = {}")),"\n",l.createElement(n.li,null,"props 중 일부만 사용하는 경우: ",l.createElement(n.code,null,'let props = {x: "x", y: "y"}')),"\n",l.createElement(n.li,null,"props 전부를 사용하는 경우: ",l.createElement(n.code,null,'let props = {x: "x", y: "y", z: Some("z")}')),"\n",l.createElement(n.li,null,"선택 필드 z를 Some 없이 사용하는 경우: ",l.createElement(n.code,null,'let props = {x: "x", y: "y", z: "z"}')),"\n"),"\n",l.createElement(n.p,null,"이 중 컴파일러 v9에서 레코드로 가능한 표현은 3번 뿐 입니다. 하지만 4번의 경우 리액트 컴포넌트를 표현할 때 꼭 필요합니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'// 선택 prop에 Some?? 이건 좀 별론데..\n<Profile name="정식" nickname=Some("리스크립트 고수")>\n')),"\n",l.createElement(n.p,null,"표현력의 한계를 해결하기 위한 방법이 필요했고, 이미 레코드의 구조를 타입 체크할 수 있는 ",l.createElement(n.a,{href:"https://forum.rescript-lang.org/t/rfc-more-general-type-checking-for-structural-typings/1485"},"RFC"),"가 있었습니다. 이 RFC는 레코드의 필드 중 일부만 작성해도 안전하게 타입 체크를 해주는 기능입니다. 2번의 경우죠."),"\n",l.createElement(n.p,null,"JSX v4를 위해 이 RFC를 개선해나갑니다. 1번과 4번을 해결해야 했습니다. 특히 4번 표현은 리액트 컴포넌트를 표현할 때 꼭 필요했기 때문에 RFC를 바탕으로 메인테이너와 기능 설계를 해서 이런 문법을 추가 합니다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/rescript-lang/rescript-compiler/pull/5423"},"https://github.com/rescript-lang/rescript-compiler/pull/5423")),"\n"),"\n",l.createElement(n.p,null,"개선의 결과로 레코드는 1 ~ 4번 모두에 해당하는 표현력을 갖게 됩니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'type t = {\n  name: string,\n  nickname?: string, // ?를 붙이면 선택 필드\n}\n\nlet woonki = {name: "운기"}\nlet jeongsik = {\n  name: "정식",\n  nickname: "리스크립트 고수" // Some("...") 하지 않아도 됩니다.\n}\n')),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"@optional")," 대신 ",l.createElement(n.code,null,"?")," 표현이 추가되고, 옵션 생성자를 사용하지 않고 표현할 수 있도록 개선되어 갑니다.\n그래서 리액트 컴포넌트를 이렇게 표현할 수 있게 됐습니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'<C name="운기" />\n<C name="정식" nickname="리스크립트 고수" />\n')),"\n",l.createElement(n.p,null,"명목적 타입(Nominal type)을 사용하고 안전한(Sound) 타입 시스템에서 레코드가 이런 표현력을 갖게 되는 것은 놀라운 일입니다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"React의 새로운 jsx runtime API 도입"),"\n",l.createElement(n.p,null,"리액트 17버젼에서 소개된 ",l.createElement(n.a,{href:"https://ko.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"API")," 입니다. 앞서 보여드렸던 내부 표현을 보면서 짐작하셨겠지만, 리스크립트는 JSX를 변환하기 위해 Babel이 필요하지 않습니다. 컴파일러가 변환하기 때문이죠. 그래서 새로운 jsx runtime API를 사용하려면 JSX v4에 구현을 해야했습니다."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"rescript-react")," 바인딩 모듈에 PR을 하고, 추가한 API를 v4가 호출했습니다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/rescript-lang/rescript-react/pull/49"},"https://github.com/rescript-lang/rescript-react/pull/49"),l.createElement("br"),l.createElement(n.a,{href:"https://github.com/rescript-lang/syntax/pull/614"},"https://github.com/rescript-lang/syntax/pull/614")),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'// 원본 코드\n<C x="x" y="y" />\n<C key="c" x="x" y="y" />\n\n// 내부 표현\nReact.jsx(C.make, {x: "x", y: "y"})\nReact.jsxKeyed(C.make, {x: "x", y: "y"}, "c") // key가 있는 경우\n')),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"JSX의 외연 확대"),"\n",l.createElement(n.p,null,"v3는 React ppx의 역할이었습니다. ",l.createElement(n.code,null,"rescript-react"),"에 바인딩된 리액트 API를 호출해서 내부 표현을 만듭니다. v4 작업 중 코어팀과 논의하는 과정에서 JSX는 리액트만의 표현이 아니기 때문에, Solid.js, ",l.createElement(n.del,null,"Remix"),"Preact 와 같은 라이브러리나 프레임워크에도 대응할 수 있게 하자는 의견이 나왔습니다."),"\n",l.createElement(n.p,null,"그래서 컴파일러 내부에 ",l.createElement(n.code,null,"Jsx"),", ",l.createElement(n.code,null,"JsxDOM")," 등의 모듈을 추가하고, ",l.createElement(n.code,null,"Jsx.element"),", ",l.createElement(n.code,null,"Jsx.component")," 등의 타입을 ",l.createElement(n.code,null,"rescript-react"),"에 정의된 타입에 바인딩 하였습니다. 앞으로 ",l.createElement(n.code,null,"rescript-solid"),", ",l.createElement(n.del,null,l.createElement(n.code,null,"rescript-remix")),l.createElement(n.code,null,"rescript-preact")," 바인딩이 나온다면, ",l.createElement(n.code,null,"Jsx")," 모듈을 바인딩할 수 있습니다. 그럼, JSX 표현을 공유할 수 있게 됩니다. 예를 들어, 리액트 프로젝트에서 만든 모듈을 Solid.js 프로젝트에서 사용할 수 있습니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"// React.res\ntype element = Jsx.element // Jsx.element는 컴파일러 내부에 정의된 타입입니다.\n")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/rescript-lang/rescript-compiler/pull/5484"},"https://github.com/rescript-lang/rescript-compiler/pull/5484"),l.createElement("br"),l.createElement(n.a,{href:"https://github.com/rescript-lang/rescript-react/pull/49"},"https://github.com/rescript-lang/rescript-react/pull/49")),"\n"),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"점진적 마이그레이션: v3와의 하위 호환"),"\n",l.createElement(n.p,null,"JSX v4의 구현보다 더 어려운 작업이었습니다. 왜냐하면 작업해야하는 레포지토리가 3개 입니다. 컴파일러, syntax, rescript-react에 걸쳐 의존성이 있는 작업이었습니다."),"\n",l.createElement(n.p,null,"우선, ",l.createElement(n.code,null,"bsconfig.json"),"에 v3와 v4를 설정할 수 있는 설정값을 추가하고, 컴파일러에서 그 설정값을 읽고 JSX ppx를 작동시키는 로직을 추가했습니다. 설정에 따라 v3 혹은 v4를 활성화 시킵니다. 기존의 ",l.createElement(n.code,null,'"reason"."react-jsx"'),"와 같은 속성은 제거하고, 새로운 ",l.createElement(n.code,null,'"jsx"')," 속성을 추가했습니다."),"\n",l.createElement(n.p,null,"또, v3와 v4는 서로 다른 내부 표현을 생성하기 때문에, ",l.createElement(n.code,null,"rescript-react"),"의 리액트 바인딩도 ",l.createElement(n.code,null,"ReactV3")," 모듈을 추가해서 v3를 계속 사용하는 프로젝트에서 사용이 가능하도록 하였습니다. 최신 버젼의 컴파일러와 ",l.createElement(n.code,null,"rescript-react"),"를 설치한 프로젝트에서 v3와 v4를 모두 사용할 수 있습니다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/rescript-lang/rescript-compiler/pull/5484"},"https://github.com/rescript-lang/rescript-compiler/pull/5484")),"\n"),"\n",l.createElement("br"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"bsconfig.json")," 설정"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"V3"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-json"},'{\n  "jsx": {\n    "version": 3,\n    "v3-dependencies": [\n      "rescript-relay" // v3를 사용할 의존 모듈을 추가해줍니다.\n    ]\n  },\n  "bsc-flags": ["-open ReactV3"]\n}\n')),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"V4"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-json"},'{\n  "jsx": {\n    "version": 4,\n    "mode": "classic", // "automatic" 는 jsx runtime API 사용\n    "module": "react" // 생략 가능. 향후 "solidjs", "preact" 등 가능할지도..\n  }\n}\n')),"\n",l.createElement(n.p,null,"이 무렵 컴파일러, syntax에 걸쳐있는 작업들을 효율적으로 하기 위해 리스크립트 GitHub 조직에 초대를 받았습니다. ✌️"),"\n",l.createElement(n.p,null,l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/7ad7e6ccb8e38c0943a47816928919c9/97755/rescript-github-org-member.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 37.75100401606426%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABUklEQVQoz3WR3UoDMRCFA4pYW/cn2U0m+5NNS92Wtr6AWLxQUasi4oV441P5DL7mkcnSpWK9GDaZCed8Z1Z8v76hGc/gz1aIJSFWNlSSFYgkYZTovk5Ts7eGcQ5djNFMFxBf6ysY62GqCXLbQBc+fKmaQOrql9B/4nxniFRXEIV14cAiihyUcUGI72lehjObZOT+iDMZ19aEzyLVDlFW9hG3xY6RKhApuzcm99nI1hOkedG9lwRhJ+cgvwg0u5EiRaDxHNa1gZYNd+mSzKLkuV9A121YUZpXEMo2kMYhzkrEqnPqCAiqdJCG53XX30nAb45HEgeDFEcjhcNBgmGsIcivYPwK2s1DBCYJS5YE62bQfglybd9noZMoC0TXDy+4ub3D5cUaz49PsJWHyE0NqcsQod+RJCTKgqj7QWpLyOSBjueE949PbO43KCqPabsMa/sB5OLNTApwjqsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="rescript github org member"\n        title="rescript github org member"\n        src="/static/7ad7e6ccb8e38c0943a47816928919c9/5caea/rescript-github-org-member.png"\n        srcset="/static/7ad7e6ccb8e38c0943a47816928919c9/6a5fb/rescript-github-org-member.png 249w,\n/static/7ad7e6ccb8e38c0943a47816928919c9/79e1b/rescript-github-org-member.png 498w,\n/static/7ad7e6ccb8e38c0943a47816928919c9/5caea/rescript-github-org-member.png 996w,\n/static/7ad7e6ccb8e38c0943a47816928919c9/7db30/rescript-github-org-member.png 1494w,\n/static/7ad7e6ccb8e38c0943a47816928919c9/cc418/rescript-github-org-member.png 1992w,\n/static/7ad7e6ccb8e38c0943a47816928919c9/97755/rescript-github-org-member.png 2536w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",l.createElement(n.h3,null,"JSX v4의 개선점"),"\n",l.createElement(n.p,null,"새로운 JSX v4는 v3와 비교했을 때 어떤 점이 개선되고 어떤 장점이 있는 지 살펴보겠습니다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"스펙 문서",l.createElement("br"),l.createElement(n.a,{href:"https://github.com/rescript-lang/syntax/blob/master/cli/JSXV4.md"},"https://github.com/rescript-lang/syntax/blob/master/cli/JSXV4.md")),"\n"),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,l.createElement(n.code,null,"@react.component")," 없이 표현할 수 있습니다"),"\n",l.createElement("br"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"module C = {\n  type props = {x: string, y: string}\n  let make = {x, y} => React.string(x ++ y)\n}\n")),"\n",l.createElement(n.p,null,"타입스크립트 코드와 비슷하게 표현하지만, 강력한 타입 시스템이 타입을 추론해주고 체크해줍니다. v3 대비 표현력이 좋아지고, 코드가 간결해졌습니다."),"\n",l.createElement(n.p,null,"특히 ",l.createElement(n.code,null,"Context")," API를 사용할 때, ",l.createElement(n.code,null,"@react.component"),"를 사용하지 않고 표현하면 훨씬 간결해집니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'// v3\nmodule Context = {\n  let context = React.createContext(() => ())\n\n  module Provider = {\n    let provider = React.Context.provider(context)\n\n    @react.component\n    let make = (~value, ~children) => {\n      React.createElement(provider,\n        {"value": value, "children": children} // Error\n      )\n    }\n  }\n}\n\n// v4\nmodule Context = {\n  let context = React.createContext(() => ())\n\n  module Provider = {\n    let make = React.Context.provider(context)\n  }\n}\n')),"\n",l.createElement(n.p,null,"다만, ",l.createElement(n.code,null,"@react.component"),"가 하는 일 중 하나가 함수의 이름을 대문자로 만들어주는 것인데요. 리스크립트에서 대문자 이름은 모듈이나 배리언트 생성자에게 허용되어 있고, ",l.createElement(n.code,null,"let")," 바인딩 값에는 허용되지 않기 때문입니다. 리액트 컴포넌트 이름은 대문자로 시작하지 않으면 React Fast Refresh가 작동하지 않는다는 이슈가 보고되어서, 이 부분은 메인테이너와 함께 더 살펴볼 예정 입니다. 그래서 React Fast Refresh 이슈가 있는 경우에는 ",l.createElement(n.code,null,"@react.component"),"를 사용하시는 편이 좋을 것 같습니다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"Spread props을 사용할 수 있습니다."),"\n",l.createElement(n.p,null,"특히, DOM 요소의 어트리뷰트에 해당하는 props를 전달할 때 유용하게 사용할 수 있을 것 같습니다."),"\n",l.createElement("br"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'// 사용자 정의 컴포넌트\n<Comp {...props} x="x" />\n\n// DOM 요소 컴포넌트\nlet props: Jsx.domProps = {id: "id", name: "그린랩스"}\n<div {...props} />\n')),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"새로운 jsx runtime API를 활용할 수 있습니다."),"\n",l.createElement(n.p,null,"리액트를 import 하지 않아도 리액트 컴포넌트를 생성할 수 있는 API를 활용해서 번들 사이즈를 조금 더 줄일 수 있습니다. 리액트 팀 감사합니다. 😉"),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"컴포넌트들 간 props 타입을 공유할 수 있습니다."),"\n",l.createElement("br"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"type sharedProps = {\n  x: string,\n  y: string,\n}\n\nmodule A = {\n  @react.component(:sharedProps)\n  let make = (~x, ~y) => React.string(x ++ y)\n}\n\nmodule B = {\n  @react.component(:sharedProps)\n  let make = (~x, ~y) => React.string(x ++ y)\n}\n")),"\n",l.createElement(n.p,null,"리스크립트는 명목적 타입(Nominal type)을 사용하고 있습니다. A 모듈의 ",l.createElement(n.code,null,"props"),"와 B 모듈의 ",l.createElement(n.code,null,"props"),"는 다른 타입이죠. 예를 들어, React Native Navigation의 Screen 컴포넌트에 ",l.createElement(n.code,null,"component")," prop에 A, B 컴포넌트를 전달하는 경우 타입 에러가 발생합니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},'type screenProps = { navigation: navigation, route: route }\n\nmodule Screen: {\n  @react.component\n  let make: (\n    ~name: string,\n    ~component: React.component<screenProps>,\n    ...\n  ) => React.element\n}\n\n// 타입 에러\n// component: React.component<screenProps>\n// A.make: React.component<A.props>\n<Screen name="A" component={A.make} />\n<Screen name="B" component={B.make} />\n')),"\n",l.createElement(n.p,null,"이런 경우 shared props 기능을 사용할 수 있습니다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-rescript"},"module A = {\n  @react.component(:screenProps)\n  let make = (\n    ~navigation: navigation,\n    ~route: route\n  ) => ...\n}\n\nmodule B = {\n  @react.component(:screenProps)\n  let make = (\n    ~navigation: navigation,\n    ~route: route\n  ) => ...\n}\n")),"\n",l.createElement("br"),"\n",l.createElement(n.h3,null,"기여를 하며 배운 점"),"\n",l.createElement(n.p,null,"돌이켜보면 어쩌다 여기까지 오게 됐는지 잘 알 수 없지만, 필요한 건 직접 PR을 만들어서 제안해보면 좋겠다는 시도에서 시작된 것 같습니다. 그 시작은 보잘 것 없어서 머지가 되지 못할 Spread props 문법의 구현이었지만, 운좋게도 코어팀의 필요와 맞물려서 컨트리뷰터가 될 수 있었습니다."),"\n",l.createElement(n.p,null,"컴파일러 8개, syntax 22개, rescript-react 9개, 총 39개의 PR을 만들면서 배운점과 느낀점을 정리해보았습니다."),"\n",l.createElement(n.p,null,l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/c5dea6aeb0fb63d5999f563383afaa2c/a7895/jsx-ppx-v4-congrats.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 14.457831325301203%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAcWFkB//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAEFAn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAXEAADAQAAAAAAAAAAAAAAAAAAARAR/9oACAEBAAE/IdHP/9oADAMBAAIAAwAAABCH3//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABkQAAMAAwAAAAAAAAAAAAAAAAABESFR4f/aAAgBAQABPxBNOD5K9n//2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="jsx ppx v4 congrats"\n        title="jsx ppx v4 congrats"\n        src="/static/c5dea6aeb0fb63d5999f563383afaa2c/a820a/jsx-ppx-v4-congrats.jpg"\n        srcset="/static/c5dea6aeb0fb63d5999f563383afaa2c/5a8a8/jsx-ppx-v4-congrats.jpg 249w,\n/static/c5dea6aeb0fb63d5999f563383afaa2c/4e442/jsx-ppx-v4-congrats.jpg 498w,\n/static/c5dea6aeb0fb63d5999f563383afaa2c/a820a/jsx-ppx-v4-congrats.jpg 996w,\n/static/c5dea6aeb0fb63d5999f563383afaa2c/f8188/jsx-ppx-v4-congrats.jpg 1494w,\n/static/c5dea6aeb0fb63d5999f563383afaa2c/a7895/jsx-ppx-v4-congrats.jpg 1826w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"1차 마무리 후 메인테이너의 감사 코멘트. ",l.createElement(n.del,null,"덕분에 제가 많이 배웠습니다, 근데 이제 시작이었다..")),"\n"),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"RFC -> 기술 스펙 -> 구현 -> 테스트, TDD"),"\n",l.createElement(n.p,null,"오픈 소스에 기여한 적이 처음은 아니지만, 긴 기간(약 4개월) 동안 꾸준히 개발하고 같이 협업을 한 적은 처음이었습니다. RFC를 만들어서 공개하고, 커뮤니티에 의견을 묻고, 코어팀 뿐만 아니라 커뮤니티 개발자들과 함께 기능과 구현을 논의하는 과정을 경험해볼 수 있었습니다. 기술 스펙 문서를 작성하고, 구현하고, 테스트 후 알파, RC 버젼을 배포해서 다시 테스트하고 테스트를 커뮤니티에 요청하는 하나의 개발 싸이클 속에 있어 본 좋은 기회였습니다."),"\n",l.createElement(n.p,null,"그리고 TDD라고 거창하게 말할 수준은 아니지만, 구현하거나 수정해야할 테스트 샘플을 추가한 뒤 원본 코드가 파싱된 AST(Parsetree), Typedtree, Lambda 표현, 그리고 자바스크립트 결과물을 prettier printer로 출력하면서 원하는 구현을 해나가는 방식은 인상적이었습니다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"영어가 한계가 될 수 있지만, 코드가 좋은 소통 수단"),"\n",l.createElement(n.p,null,"구현의 방향을 논의하고 리뷰를 주고 받는 과정은 모두 영어로 해야했습니다. 영어 글쓰기가 편할리만은 없었고, 내 생각과 맥락을 충분히 표현하기는 쉽지 않았습니다. 오히려 구현하는데 드는 시간보다 설명하는데 시간이 더 필요한 경우도 종종 있었습니다. 하지만 코드가 훌륭한 소통 수단이어서, 오픈 소스에 기여하기 위해서 물론 영어 공부를 하는 것도 중요하지만, 코드를 더 잘 짜고 기여를 많이 하는 편이 더 나을 수 있겠다는 생각을 했습니다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"리스크립트 컴파일러 내부를 더 잘 이해하는 계기"),"\n",l.createElement(n.p,null,"리스크립트 컴파일러 내부와 소스 코드를 이해하고 싶어서 기웃 기웃 레포를 뒤지고 코드를 읽어보긴 했지만, 직접 개발에 참여하는 것만큼 이해하는데 좋은 계기는 없는 것 같습니다. 컴파일러의 설정 값을 파싱하여 사용하는 모듈, syntax 모듈의 인터페이스와 호출되는 방식, 내장 PPX들의 구현, 테스트 방법, 타입 체커, 람다 표현, 자바스크립트 코드 생성이 어떤 모듈에서 어떻게 작동하는지 더 많이 알게 된 좋은 기회였습니다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"리스크립트, 오캐믈에 대한 믿음"),"\n",l.createElement(n.p,null,"컴파일러 코드는 대부분 오캐믈로 작성되어있습니다. 코드를 더 잘 읽고, 구현을 하는데 있어서 오캐믈의 타입 시스템이 큰 도움이 되었습니다. 그리고 배리언트로 표현된 AST인 Parsetree, Typedtree, Lambda, 그리고 모듈 시스템은 이해하기 쉽고 안전한 코드를 작성하는데 든든한 길잡이었습니다."),"\n",l.createElement(n.p,null,"그만큼 오캐믈과 동일한 타입시스템을 갖고 있는 리스크립트에 대한 믿음과 기대도 더 커졌습니다."),"\n",l.createElement(n.h3,null,"마치며"),"\n",l.createElement(n.p,null,"JSX v4 개발에 기여하면서 느낀 점 중 하나가 리스크립트는 자바스크립트, 타입스크립트 개발자들에게 더 친숙한 문법과 표현력을 가지는 방향으로 개발되어가고 있다는 점 입니다. 현재 진행 중인 ",l.createElement(n.code,null,"Uncurried as default"),"도 같은 목표 아래에서 개발되고 있는 기능이구요. 더 많은 자바스크립트, 타입스크립트 개발자들에게 더 친숙하게 접근할 수 있는 언어가 되어서, 훌륭하고 안전한 타입 시스템의 혜택을 더 많은 분들이 즐길 수 있게 되면 좋겠습니다."),"\n",l.createElement("br"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://youtu.be/Ql-YAnVneGA"},"그린랩스 Dev Dive 2022, 발표 영상")),"\n"),"\n",l.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ql-YAnVneGA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement("hr"),"\n",l.createElement("br"),"\n",l.createElement(t,{email:"woonki.moon@gmail.com",name:"문운기",description:"프론트엔드 개발자",date:"2022-10-30"}))}var c=function(e){void 0===e&&(e={});var n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?l.createElement(n,e,l.createElement(a,e)):a(e)};var m=t(6488);function p(e){return l.createElement(m.Z,e,l.createElement(c,e))}m.Z}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-content-file-path-users-hyejin-documents-tech-blog-content-posts-rescript-jsx-ppx-index-mdx-c9821bf2ac7f4a6c4496.js.map