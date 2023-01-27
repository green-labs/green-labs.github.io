"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[257],{9307:function(e,n,a){a.r(n),a.d(n,{default:function(){return i}});var t=a(7294),l=a(9626);function r(e){var n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",a:"a",h3:"h3",strong:"strong",div:"div",ul:"ul",li:"li",ol:"ol",h4:"h4"},(0,l.ah)(),e.components),a=n.Author;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Author",!0),t.createElement(t.Fragment,null,t.createElement(n.p,null,"자바스크립트나 다른 동적 타입을 가진 언어에서는, 함수나 분기문에서 타입이 다른 데이터를 리턴하는 것이 자연스럽습니다.\n하지만 ReasonML에서는 항상 같은 데이터 타입이 리턴되어야 합니다. 처음 ReasonML을 접하게 되면 이런 타입 시스템의 특성 때문에 당황하실 수 있습니다. 코드 예시를 통해 바로 확인해보겠습니다."),"\n",t.createElement(n.h2,null,"자바스크립트 vs. ReasonML"),"\n",t.createElement(n.p,null,"아래의 test 함수는 인자가 숫자(number)일 때는 숫자를, 문자열일때는 문자열을, 그 외에는 ",t.createElement(n.code,null,'{foo: "bar"}'),"라는 객체를 반환합니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-javascript"},'let test = (input) => {\n  if (typeof input === "number") return input;\n  else if (typeof input === "string") return input;\n  else return { foo: "bar" };\n};\n\ntest(1); /*  1  */\ntest("hello world!"); /*  hello world!  */\ntest([1 2 3 4]); /*  {foo: "bar"}  */\n')),"\n",t.createElement(n.p,null,"혹은 각 분기문마다 같은 타입의 다른 필드를 가진 객체를 리턴 할 수도 있습니다.\n아래의 함수는 인자가 참일 때는 ",t.createElement(n.code,null,'{foo: "bar"}'),"를, 거짓일 때는 ",t.createElement(n.code,null,'{hello: "world"}'),"를 반환합니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-javascript"},"if (input === true) {\n  return { foo: 'bar' };\n} else {\n  return { hello: 'world' };\n}\n/*  OK  */\n")),"\n",t.createElement(n.p,null,"하지만 ReasonML에선 안전한(sound) 타입 시스템을 위해 모든 분기문의 리턴값은 반드시 한 타입으로 정해져 있습니다.\n위의 ",t.createElement(n.code,null,'{foo: "bar"}'),"와 ",t.createElement(n.code,null,'{hello: "world"}'),"는 다른 타입으로 간주되어 컴파일이 실패합니다.\n하나의 예시를 더 보겠습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'if (input === true) {\n  2;  /*  ReasonML에선 마지막 표현식이 리턴으로 간주됩니다.*/\n} else {\n  "hello";\n}\n')),"\n",t.createElement(n.p,null,"결과는 아래와 같습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-console"},"This has type: string\nSomewhere wanted: int\n\nYou can convert string to int with Belt.Int.fromString.\n")),"\n",t.createElement(n.p,null,"타입이 객체인 경우 세부 모든 세부 필드의 값이 일치해야(구조적 타입) 오류가 나지 않습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'switch ((input: bool)) {\n| true => {"foo": "bar"}\n| false => {"hello": "world"}\n}\n')),"\n",t.createElement(n.p,null,"결과는 마찬가지로 컴파일 오류입니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-console"},'  This has type: {. "hello": string}\n  Somewhere wanted: {. "foo": string}\n  The second object type has no method hello\n')),"\n",t.createElement(n.p,null,"하지만 개발을 하다보면 다른 객체를 반환하는 것이 꼭 필요한 경우가 생깁니다. 아래의 예시처럼요."),"\n",t.createElement(n.h2,null,"현업에서 마주친 상황"),"\n",t.createElement(n.p,null,"그린랩스에선 프리즈마(Prisma)",t.createElement(n.a,{href:"%5Bhttps://www.prisma.io/%5D(https://www.prisma.io/)"},"^1")," 라는 DB 클라이언트를 사용하여 백엔드 개발을 하고 있습니다.\n프리즈마는 ORM처럼 고유의 문법을 사용하며, 중첩된 객체들로 관계형 쿼리를 표현할 수 있습니다. ",t.createElement(n.a,{href:"%5Bhttps://www.prisma.io/docs/concepts/components/prisma-client/filtering%5D(https://www.prisma.io/docs/concepts/components/prisma-client/filtering)"},"^2")," 아래는 간략화된 실제 코드입니다.\nisHeavy 라는 bool 변수의 값에 따라 참일 경우 20kg보다 무거운 수박을, 거짓일 경우 20kg과 같거나 가벼운 수박을 조회하는 함수입니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-javascript"},"/*\n  수박 중에서, 조건(isHeavy)에 따라\n  20kg보다 무겁거나, 20kg과 같거나 작은 모든 데이터를 리턴해라\n*/\nawait prisma.watermelon.findMany({\n  where: isHeavy\n    ? { weight: { gt: 20 } }\n    : { weight: { lte: 20 } };\n  });\n")),"\n",t.createElement(n.p,null,"위 코드를 ReasonML로 옮기면 아래와 같습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'prisma.watermelon\n->Prisma.findMany({\n  "where": {\n    isHeavy\n      ? {\n        "weight": {\n          "gt": 20,\n        },\n      }\n      : {\n        "weight": {\n          "lte": 20,\n        },\n      };\n  },\n});\n')),"\n",t.createElement(n.p,null,"하지만 위의 ReasonML 코드는 컴파일이 실패하고 아래의 오류가 뜹니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-console"},'Error:\nThis expression has type {. "weight": {. "lte": int}}\nbut an expression was expected of type {. "weight": {. "gt": int}}\nThe second object type has no method lte\n')),"\n",t.createElement(n.p,null,"ReasonML의 객체 타입 추론은 재귀적으로 작동하여 중첩된 필드까지 전부 검사합니다.\n얼핏 보면 똑같은 ",t.createElement(n.code,null,'{"weight":...}')," 객체처럼 보일 수 있지만, 그 안에 하나는 gt라는 키를, 다른 하나는 lte라는 키를 가진 서로 다른 객체이기에 컴파일이 안되는 것이죠.\n그럼 이 문제를 어떻게 해결할까요?"),"\n",t.createElement(n.h3,null,"해결 방안 1 - [%raw]로 JS코드 직접 넣기"),"\n",t.createElement(n.p,null,"[%raw]를 쓰면 ",t.createElement(n.strong,null,"JS 코드를 직접 삽입"),"하고 타입 검사를 피할 수 있습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'[%raw {| console.log("hello world!") |}] /* Js.log("hello world!) 와 동일*/\n')),"\n",t.createElement(n.p,null,"아래는 [%raw]를 적용해본 예시입니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'prisma.watermelon -> Prisma.findMany{\n%raw {|\n  where: isHeavy\n   ? {"weight": {"gt": 20},}\n   : {"weight": {"lte": 20},}\n  |};\n};\n')),"\n",t.createElement(n.p,null,"위의 코드가 컴파일되면 %raw 안의 구문이 그대로 Js 코드가 되어 나옵니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-javascript"},"isHeavy ? { weight: { gt: 20 } } : { weight: { lte: 20 } };\n")),"\n",t.createElement(n.h3,null,"해결 방안 2 - Obj.magic 컴파일러 속이기"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"Obj.magic"),"은 ReasonML 내장함수 중 하나로, 마술(magic)이라는 이름처럼 교묘한 트릭으로 코드를 왜곡합니다. 아래처럼 사용할 수 있습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},"isHeavy\n  ? {weight: {gt: 20}}\n  : Obj.magic( /* 컴파일러가 체크하지 않음! */\n      {weight: {lte: 20}}\n    );\n")),"\n",t.createElement(n.p,null,"Obj.magic는 OCaml의 %identity의 바인딩인데요, %identity는 컴파일러에게 '값이 동일하더라도 타입을 다르게 인식해라'라고 말하는 역할을 합니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},"external magic : 'a -> 'b = \"%identity\";\n")),"\n",t.createElement(n.p,null,"따라서 ",t.createElement(n.code,null,"{lte ...}")," 는 사실상 ",t.createElement(n.code,null,"{gt ...}"),"와 같은 타입으로 인식되어 위의 문제를 회피할 수 있습니다.\n그러나 위 두 방법은 안전하게(sound) 느껴지지 않습니다. 다른 언어를 직접 사용하거나 컴파일러를 속이지 않고, ReasonML 안전한 방법으로 해결할 수는 없을까요?"),"\n",t.createElement(n.h3,null,"해결 방안 3 - Js.Dict"),"\n",t.createElement(n.p,null,"조금 더 나은 방법으로는 Js.Dict를 사용해 볼 수 있습니다."),"\n",t.createElement(n.p,null,"Js.Dict는 ReasonML에서 사용할 수 있는 Dictionary 모듈입니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'let test = Js.Dict.empty();\ntest->Js.Dict.set("foo", "bar");\n\ntest->Js.log; /* => {foo: "bar"} */\n')),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://rescript-lang.org/docs/manual/latest/api/js/dict"},"공식문서"),"에 다양한 쓰임이 나와 있으니 참고하세요."),"\n",t.createElement(n.p,null,"Js.Dict를 사용하여 조건에 따라 gt 혹은 lte를 리턴하는 conditionFunc를 만들었습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'let result = Js.Dict.empty();\nlet conditionFunc = (isHeavy: bool) => {\n  isHeavy\n    ? result->Js.Dict.set("gt", 20)\n    : result->Js.Dict.set("lte", 20);\n  result;\n};\n')),"\n",t.createElement(n.p,null,"conditionFunc를 호출하여 콘솔에 찍어보면, 우리가 원했던 객체가 나옵니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-console"},"{ gt: '20' } //conditionFunc(true)\n{ lte: '20' } //conditionFunc(false)\n")),"\n",t.createElement(n.p,null,"위 표현이 가능한 이유는 아래와 같습니다.\n",t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/116d6855a86bbcb7d69e71bf2a9b3aa3/97bfd/reasonml-dict.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 84.73895582329317%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAACn0lEQVQ4y21U30/TUBTe/+o/4IPRBxOMUR8wPpFAAlEDxhgNPBJAF9TxYyACOphsrGxtWbu13datW9t7u7b7zL1dy7pxk9ue3nvud75zznebGY1GGIGNEcLISA22P/m+b2/SzkQGA4sWBLWPG9VCEPjcic0wDPnekBC49gCu64LagwRoEjjDHuGYmqS2sbjbx/JhiOUfXTQ6buLIAnbrErqnexhcHMNSJJ5ZGAQp0ExsDByC9wcuHi4e4sHzz5jfcVC8teFTB6IoIQgCqD83sbfwElvzTyHubMCUqzMlSAAJHeJj3sKzLxLmPlXwattDrswYhhAlGZQQNHNbKLx9g/2FFxA33kErFeBSD71eD57nTaQ8BjUtG0s5ivVzH9+LPQhSE+XSFTRdj2pIKVr5LKyjbzxllxAIQgXZbBamaaabEjM1ui4opXzNsQc4Pv6FWq2WpGVbPVDPw5CSKMhwCNu24ft+uoZRYTHRhFmJTEvnvu/MpON9DkwyKb2NJTQdaKbLsdaMVgvVahU3N9Vx6neBYh9N03B9fc1nvJYATn4QSqHUb1G/laEoCj/IapTyIQSNhgpVVWDoOgzDSOo3JRuKtqFBqIqQ63WY7ciZ3Yp4UOpBVVU0tAZaLR263oSqKGlAZjDRtlsGrgQRT5a2Mbe6j5M/lyCuzUH6/T5nqus6hEoZB+trOFxfQ6l4gW63y8+nAIe+D9cZoCyqeLSyj8cf/uKoUIHvuSCEcqaO4/DZbNRxsLqA/MprVEuX6JgmgmmGjDJjYWgKzks1bGZzODs75dHjG8AGuxGqWofwr4D87lec/D7hdZ5hyDrFWHQ6bVi9DrSGAlmWky7HnWQpd9ptHpzdHlmSkhrH0knJhkXy/SD5+0xr887HT4JM+/wHnOAMl8y05rwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ReasonML-Dict-Example"\n        title="ReasonML-Dict-Example"\n        src="/static/116d6855a86bbcb7d69e71bf2a9b3aa3/5caea/reasonml-dict.png"\n        srcset="/static/116d6855a86bbcb7d69e71bf2a9b3aa3/6a5fb/reasonml-dict.png 249w,\n/static/116d6855a86bbcb7d69e71bf2a9b3aa3/79e1b/reasonml-dict.png 498w,\n/static/116d6855a86bbcb7d69e71bf2a9b3aa3/5caea/reasonml-dict.png 996w,\n/static/116d6855a86bbcb7d69e71bf2a9b3aa3/97bfd/reasonml-dict.png 1078w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(n.p,null,'Js.Dict로 감싼 두 표현은 Js.Dict.t 타입으로 인식되기 때문에 컴파일상 아무 문제가 없습니다. 마치 "foo"와 "bar"가 값은 다르지만 같은 string 타입인 것처럼요.\nraw나 obj.magic을 썼을 때 보다는 조금 더 타입 안정성이 확보된 것 같습니다. 하지만 ',t.createElement(n.strong,null,"Js.Dict.t 타입이면 다 받을 수 있기 때문에 gt, lte와 같은 키만 들어갈 수 있는지는 보장되지 않습니다."),"\n만약 ",t.createElement(n.code,null,"gt"),"가 들어갈 자리에 ",t.createElement(n.code,null,"gd"),"를 치면 런타임에서 에러가 나겠죠?"),"\n",t.createElement(n.h3,null,"해결 방안 4 - 배리언트(Variant)"),"\n",t.createElement(n.p,null,"배리언트를 사용해 타입 안정성을 더 높힐 수 있습니다.\n배리언트는 다른 언어의 ",t.createElement(n.strong,null,"enum")," 과 비슷한 기능인데, 임의의 데이터를 배리언트로 감싸 표현할 수 있습니다. 또한 패턴 매칭 되기 때문에 다양한 방법으로 활용 가능한 자료형입니다. 간단한 예로 account라는 타입을 보겠습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},"type account =\n  | None\n  | Instagram(string)\n  | Facebook(string, int)\n")),"\n",t.createElement(n.p,null,"account는 None, Instagram, Facebook 중 하나의 타입이 될 수 있는 배리언트입니다. 패턴매칭으로 안의 값을 가져 올 수 있습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'let myAccount = Facebook("Josh", 26);\nlet friendAccount = Instagram("Jenny");\n\nswitch (myAccount) {\n| Facebook(name, age) => "my name is " ++ name ++ " and, " ++ string_of_int(age) ++ " years old."\n| Instagram(name) => "my name is " ++ name ++ "."\n};\n/* my name is Josh and I am 26 years old. 출력!! */\n')),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://reasonml.github.io/docs/en/variant"},"공식문서"),"에 다양한 쓰임새가 나와있습니다.\n실제로는 아래처럼 쓰일 수 있습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},"/*  allType 배리언트 선언  */\ntype allType =\n  | GT(int)\n  | LTE(int);\n\n/*  배리언트로 감싸진 객체 반환 */\nlet conditionFunc = (isHeavy: bool) => {\n  isHeavy ? GT(20) : LTE(20);\n};\n\n\nconditionFunc(true)->Js.log; /*  { TAG: 0, _0: 20 }  */\n")),"\n",t.createElement(n.p,null,"conditionFunc를 실행하면 원하는 객체가 아닌 **","{"," TAG: 0, _0: 20 ","}","**와 같은 배리언트로 둘러싼 값이 나오기 때문에, 원하는 값으로 만들기 위해 앞서 설명한 Js.Dict를 활용하겠습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'let toData = (input: allType) => {\n  let ret = Js.Dict.empty();\n  switch (input) {\n  | GT(v) => ret->Js.Dict.set("gt", v)\n  | LTE(v) => ret->Js.Dict.set("lte", v)\n  };\n  ret;\n};\n\nconditionFunc(true)->toData->Js.log; /*  { gt: \'20\' }  */\n')),"\n",t.createElement(n.p,null,"이렇게 해서 배리언트를 사용하여 서로 다른 객체를 반환하는데 성공했습니다! 그림으로 다시 보겠습니다."),"\n",t.createElement(n.p,null,t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/2eae3b7dd99f9fe5e7ab9e3901555ced/9937c/reasonml-variant1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 58.23293172690762%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABwklEQVQoz32Tb0/aUBSH+f5fYMleLDoTCRhFTJC5hZnNKasbReilLVhbhqWM1fBiLi1Q6LMUvKwVs19y03vOyX16/tybI6U4jlcrkeu6dIS+9hFnYnKftqVyPNNyuVx9G2qDs9q7jZ2BIQHxFjyXdkjndDbli/2R94MyH4wKf4LHJ9hScpjNZkhuJsPESLJI1mKxWDlt74495TXV2xLF9g43VkPmQzSP+O58pdI54tL8RBRFmTZslZxo4P2gcL3Lob5HobHL/XiwiXU9neNunnIvT8065cF/QLlW6Pf76wxt20ZRFDRNw7IsvJGH/8vH/z3mm3PFwHfWvX0q13AFB9pbKuKInt3Fc0cIIZhMJmtgs9mk3W5Tr9dRVRXTNFc9DB9DTo+rGJqRGVYQBhyc5/H8IcP7IZ1bwTyab8reKjkIAoauh3BaVG/KtJ3mpvkS2nJUTrQiFf2QC/OcRbT4B5QDSQw5lPFkREnsczYoUdL3cUZ3mbITQO+ngT7UCKdhZtK59ITkgf7IZufqFSdGkbz6BmG3NsD0FUk/iBdLloEkA8W6pCwKfDZr6zv37GACT/8gk+FL0KRv01lIvNx+Xv/TX3JBjlnLeTZhAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ReasonML-Variant-Example"\n        title="ReasonML-Variant-Example"\n        src="/static/2eae3b7dd99f9fe5e7ab9e3901555ced/5caea/reasonml-variant1.png"\n        srcset="/static/2eae3b7dd99f9fe5e7ab9e3901555ced/6a5fb/reasonml-variant1.png 249w,\n/static/2eae3b7dd99f9fe5e7ab9e3901555ced/79e1b/reasonml-variant1.png 498w,\n/static/2eae3b7dd99f9fe5e7ab9e3901555ced/5caea/reasonml-variant1.png 996w,\n/static/2eae3b7dd99f9fe5e7ab9e3901555ced/9937c/reasonml-variant1.png 1156w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(n.p,null,"이렇게 allType 배리언트를 선언하고, 안에 20을 넣었습니다."),"\n",t.createElement(n.p,null,t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/746b8d584540a2a592a1856c1406c432/51800/reasonml-variant2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 95.18072289156626%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAACg0lEQVQ4y42S3W7aQBCFedu+QZ+gt71pFalqFfWiaislSi9KepFUTZOo+W9JQoBA/hBgY3u9BmMbG7Dhq9YRJCWEdKTRrmZGM2fmnMxoNEK5MvXqmo7v+YzN9wKMpkmSxJOacf0sy4yLlCXxkL3cLprRmBQUymfsHP0i7t81nGeZ24IRoyH8qe7ztbLEamkFx5PURJVsaYnVyjLneuH/EI6TYRSycvyJxY0F3u8uUGrk2bnY5N3mKxa3FlgrZRnGoydRThoyhMObXbKXS3wrr2A6BtfGJdnKMtnKEoXG6W3ZaDhBOX3/GTdM0GSdXhyxvrbOeekcv9fBahtz73YfcWZ6gkIqbUm5XKZWq5EMhvSjAUHgE4UBQbdLEAR0u93UHyCchm6aJvV6HSll+tctDd1oYFiSqiZo2RatVivNVatVer3ew5XvB2zbpt1uUywV0Rs6omtSsyoID37mW7hnB/SjkHqjQbPZfLqhECJF1+l0cF0XS1hYtonjtPC8Di15O1C5pmmzG95fOUkSfN9PXd1K1/W0sXrVEM/38TwvdZWfy/IsffX7/TtBD0dPszwdjKIIYeq4joW0RYosjuNUUmp96UgcaaNr2r/DZiFUkmjqDbaP8nzfy3Nzc4XrttOVFQHnhVMuiidcX1+mLKtBMxGOA77Xoa4bPH+7xbPX2+wcV0gGEULYOO0Wh18+sPH6BRcnR7Rdl+SphmEYIoXB5x9nvFw+5CB3Rhj4qe483+N0e52dj2/I/95H2IJ4MJjfUE211Z1sk3LxlEL+BD8I0pVtW2BLwcXVJblcDkfKmWRmpglRcul2Q6KoRxhGE6aVRFRe6U69jykjM4v6xyTxWO4+wr8DAa6fZgOMcQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ReasonML-Variant-Example"\n        title="ReasonML-Variant-Example"\n        src="/static/746b8d584540a2a592a1856c1406c432/5caea/reasonml-variant2.png"\n        srcset="/static/746b8d584540a2a592a1856c1406c432/6a5fb/reasonml-variant2.png 249w,\n/static/746b8d584540a2a592a1856c1406c432/79e1b/reasonml-variant2.png 498w,\n/static/746b8d584540a2a592a1856c1406c432/5caea/reasonml-variant2.png 996w,\n/static/746b8d584540a2a592a1856c1406c432/51800/reasonml-variant2.png 1196w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n그 후 배리언트 안의 값을 꺼내어, toData 함수를 사용하여 객체를 재구성했습니다."),"\n",t.createElement(n.p,null,"배리언트를 통한 작업은 Js.Dict만 사용한 이전의 해법보다 더 엄밀한 타이핑이 적용되었습니다. 이제 conditionFunc는 GT, LTE만 리턴하며 allType에 정의되지 않은 타입을 절대 리턴하지 않습니다.\nJs.Dict가 key-value 쌍이 있는 모든 객체를 리턴했던것과 차별되는 부분입니다. 하지만 코드가 길고 배리언트 안의 값을 뽑아서 Js.Dict로 재구성하는 등의 부수적인 절차가 필요했습니다."),"\n",t.createElement(n.h3,null,"해결 방안 5 - 배리언트와 언박싱 GADT(심화)"),"\n",t.createElement(n.p,null,"마지막으로, GADT(General Algebraic Data Types)와 언박싱 태그(@unboxed)를 이용한 좀 더 고차원적인 해법도 있습니다.\n그 중에서도 GADT는 난이도가 높은 개념이라 다른 포스팅에서 추가로 다루도록 하고, 간략히 언박싱에 대해서만 먼저 다루겠습니다. 설명은 BuckleScript를 개발한 Hongbo님이 작성한 ",t.createElement(n.a,{href:"https://rescript-lang.org/blog/bucklescript-release-7-0-2"},"리스크립트 블로그 글"),"을 참고했습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'/*  언박싱  */\n[@unboxed]\n/*  GADT 정의  */\ntype t =\n  | Any (\'a) : t;\n\n/*  GADT 배리언트의 배열 정의  */\nlet array = [|Any(3), Any("a")|];\n')),"\n",t.createElement("br"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-javascript"},"/*  컴파일 결과  */\nvar array = [3, 'a'];\n")),"\n",t.createElement(n.p,null,'3, "a"처럼 서로 타입이 다른 데이터를 Any 로 감싸 한 배열에 넣었습니다. 컴파일 결과 배열 안에는 Any의 실 값 3과 "a"가 잘 들어 있습니다. 여기서 만약 언박싱 태그가 없었다면 컴파일 결과는 어땠을까요? 아래와 같습니다.'),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-javascript"},"/*  @unboxed가 없을 때  */\nvar array = [\n  /*  Any  */ {\n    _0: 'hello',\n  },\n  /*  Any  */ {\n    _0: 3,\n  },\n];\n")),"\n",t.createElement(n.p,null,"이렇듯 _0 같은 메타 정보가 붙어 안의 값을 직접 불러오는 것이 번거로워집니다. 하지만 언박싱을 이용하면 값을 바로 가져오기 때문에 서로 다른 타입의 데이터를 한 배열에서 직접 사용할 수 있습니다. 이제 실제 코드에서 사용해보겠습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},'[@unboxed]\ntype t =\n  | Any(Js.t({..})): t;\n  /*\n    - t는 GADT의 개념으로 사용되었습니다.\n    - Any 안의 값을 JSON으로 제한합니다.\n  */\n\n[...]\n"weight":\n  if (isHeavy) {\n    Any({"gt": 20}); /*  Any에 @unboxed가 있으므로 실 값이 바로 리턴됩니다.  */\n  } else {\n    Any({"lte": 20});\n  }\n')),"\n",t.createElement("br"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-reason"},"type t =\n  | Any(Js.t({..})): t;\n")),"\n",t.createElement(n.p,null,"위의 코드는 Any 안의 데이터를 JS 객체로 한정하는 역할을 합니다. 다른 원시타입(int, string 등)은 올 수 없습니다.\n아래는 JS로 컴파일된 결과입니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-javascript"},'"where": {\n  "weight":\n    if (isHeavy) {\n      return {"gt": 20};\n    } else {\n      return {"lte": 20};\n    }\n},\n')),"\n",t.createElement(n.p,null,"무엇을 한 것인지 다시 한번 짚어보겠습니다."),"\n",t.createElement(n.p,null,t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 482px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/a74d67e41b62629100d006efb32b3e35/37e0d/reasonml-any1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 77.51004016064257%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVQ4y4VS247SUBTtl/oJPvhgog8+GdSY8QkTjdFgHJ04ySjEBCJDJkFuEqIDAsOlIJcKEYr2Qgult2X2KSWlQV3J6TlNd9fZe63FAcDstwZJ0QCYAFy4Lm30oM2F4zjs7Ng2HBewbBubzQY+3G0tgZOUJV7mFbz9YuFdRcX3n7r3s+vuFRI2xhpiqwptxEPqtXaXuNtaWtz78hx3TgXcfFbB3aSB3JXk3bol0TQNPZ5n51n3CsKHY3x++hCdxGuI7TojDIJ7dGHjxuNPuHbrOR4kZRyXVtCXCgzDG6nZbOLk5A07L5pf0XpxhFe3r6Py5D5+5D5CUVSYponVagXLssBd1Oa4l1wiWgCOzldIVH5hIozQaDZRKBQwGAxgb7tQxBnEShbL81MsShkM+j3w3S6KxSIa9ToURQFnWxucVVRkvslYyDo2pglZllCtVpHJZDAajTzCrZ6GrkEUhjBWOpZLFaPxGOl0Go1Gg8nDMb0ci+Td08J3l8bxBKe6/RpmiuPs6mjn3F08vEU6jMdjpkkYQTfdAylgpgQLCev1GrlcjplBoHHpdl/HMFn4Ai4cTtIhkUggGo1C171Mdrtd8DyPdrvNhD8U6L0Ogx9lWUYsFkMkEoEgCKyz+XzOliRJMAyDTTGdTg+ScmGNgri8vMRwOMRkMmF7q9VCv99nctD5n4RBTcgYWhSdTqfDskhj0zvFo1QqsY59l/9L6BcRSblcZiTUFb3XajXk8/k9k/46cphcVVWkUikkk0nU63Vks1nE43HW9aHuDhIGOyWQEaIo7iLlmxGOm0/4B8VguaZxbznvAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ReasonML-Not-Compile-Example"\n        title="ReasonML-Not-Compile-Example"\n        src="/static/a74d67e41b62629100d006efb32b3e35/37e0d/reasonml-any1.png"\n        srcset="/static/a74d67e41b62629100d006efb32b3e35/6a5fb/reasonml-any1.png 249w,\n/static/a74d67e41b62629100d006efb32b3e35/37e0d/reasonml-any1.png 482w"\n        sizes="(max-width: 482px) 100vw, 482px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"하나의 분기문에서 리턴하는 객체의 구조가 다르면, 컴파일이 되지 않습니다."),"\n",t.createElement(n.li,null,"따라서 GADT를 활용하여 JSON이 올 수 있는 Any타입을 만들었습니다."),"\n"),"\n",t.createElement(n.p,null,t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 553px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/cabea5c70d646c773fec04e8c22ed316/74cfa/reasonml-any2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 77.10843373493977%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmklEQVQ4y3VUbW/SYBTtr1Wj2SeT7bOJJouJ0TiVxG1+8MPUbDPZhjEhDNyGDjZBzYIMYaVAGQXKa0tLX4+5t2szfDnJk/Z5yj3Puefei+D7PmiFCPfhmed5UBQFpVIJw+GQn91uF9Vqlfez2QyyLEexQkjkXSf2fSYi1Go1qKqKVquFTqfD5EQwHo/R6/Vg2zYqlQoTEwTXdWEYRqRQ13UmD0EkjuNAkiSIosiqCBRDZ/1+ny/RNC0gJOZcLgexPQFpKhaLqJ6X4M2CS05OTpBKpZiILidFhOl0yurDTKKUiblcLmN19xSJT1/QaNRxls0gsbmBelPG0uIiBEFg4jAoJCRloc/huWBZFsvtdRVIUg3BXsfFhYjRaIR0Oo2FhQXk83lOv9ls8qL0Kd0/CxkVJZKN/4NUmaYRqbquOFLIzMFP5uhM02S19J2KQpWnyrqeD0PX4LnunHchhODdxsd8B/lfPSjqBJphwbJmTBoEBGqU71nonUtcHqdgh9+u/LuWso+jszaeHvhYywJPUhZ2vw6vFAcBBFWuQzn4AGl7HZV3q2idHqFXq/xli1BtDbGSGGBp/RtuPNjGvfcK3mY1OPZsLp1RU4S89RLri3cQu3sL9TfP0Socw/E8toTaiXwV9k57WE64uHl/E7cfxrG808bKgY+y1GVPbdthZzvSBeT9Hah7r9HfeYV2Ng2xeAZZbqJer6PRaPBECbphYePwEo9SHl4cA49TLtYONfw8r3IbZTIZXjS7Js3t5yTU0g+oUhXqaIxCoYBYLIZ4PM6jyG2j9DU829exlRug0hxgqJmY6hr3WjKZ5F6kWabUTGPKiskJ8ncwGPCfBambTCYQwrkdTaZwHXvOYMe2ebZpUQ/O9Zz/7479DY9FXlQxFQDHAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ReasonML-Compile-Example"\n        title="ReasonML-Compile-Example"\n        src="/static/cabea5c70d646c773fec04e8c22ed316/74cfa/reasonml-any2.png"\n        srcset="/static/cabea5c70d646c773fec04e8c22ed316/6a5fb/reasonml-any2.png 249w,\n/static/cabea5c70d646c773fec04e8c22ed316/79e1b/reasonml-any2.png 498w,\n/static/cabea5c70d646c773fec04e8c22ed316/74cfa/reasonml-any2.png 553w"\n        sizes="(max-width: 553px) 100vw, 553px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"이후 언박싱 태그를 붙여 Any 안의 값을 바로 꺼내올 수 있도록 했습니다."),"\n"),"\n",t.createElement(n.h2,null,"비교"),"\n",t.createElement(n.p,null,"ReasonML의 타입 시스템을 상대하는 다섯가지 방법에 대해 알아보았습니다. 흥미롭게도, 타입 안정성과 코드의 간결함은 반비례 관계에 있습니다.\n모든 데이터에 타입을 적용하면 안정성은 높아지는 대신 코드가 길어지고, 반대로 타입 시스템을 무시하고 코드를 작성하면 코드는 짧지만 안전하지 않습니다. 그림으로 이 느낌을 표현해보았습니다."),"\n",t.createElement(n.p,null,t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 465px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/f8710f6f5c30854d95d9f98213d49474/9ff85/reasonml-graph.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 71.88755020080322%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVQ4y4VUy27aQBRl2f/Ituq3dJlP6Ed02S6yrrKI1G+osmbXKiFCKIASKoEBGTIueBxjE+PHjMfjE83YBgMhHWk89szVuefec8aNPM/BOdczSRJEUYQ8l1BDndXX+qjv1d8bcRxjOBxiPp9jMpmg3W6D82QbWAVLKSGEQBAEyLLsTTANuGUBYDB4RCYPmJRrmqZYr9c6uWmasCxLJzhMvAOUGYzpExjtYvHrM9jDD0x/fgJEoM85Y/B9H+PxGK1WC67rvl1yfWPh+GC0B+v6HKM/V/DuvgGSFYCca4aGYaDT6cC2bVBKNfM6RqNOl5AnZGWyIN4vXfVNibbZbLBareB5ngat+rkFrH8QovpSZAT3kNJ7iJc5uPUb742TJRNCINKiRPfuAsbVRzjNLxhdnhVKlyIpxavKDq11DFgqh3gJn3Rh/r0FQrNQm/uQgXnE7H2GQhSZS0Zc7Kzj33xF9/sH/JsNIXPoC3DI9AjwRJeK58sEgjQRBJs9licBZ7OZVk6pqHxWTUod2PYS9NmH7YZwHEcbu9frHYmzB8gY02DKwNVU3gvDUN/xKArBkki3RcUpgysS/X5fx20ZnvoB/M8qVSIFpoyvAF8BGcE21uyo++UAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ReasonML-Comparison-Graph"\n        title="ReasonML-Comparison-Graph"\n        src="/static/f8710f6f5c30854d95d9f98213d49474/9ff85/reasonml-graph.png"\n        srcset="/static/f8710f6f5c30854d95d9f98213d49474/6a5fb/reasonml-graph.png 249w,\n/static/f8710f6f5c30854d95d9f98213d49474/9ff85/reasonml-graph.png 465w"\n        sizes="(max-width: 465px) 100vw, 465px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(n.p,null,"이처럼 트레이드 오프가 명확한 상황에선 ",t.createElement(n.strong,null,"어떤 부분의 안정성을 중요시 할 것인가"),"가 중요한 질문입니다.\n그랜랩스는 ",t.createElement(n.strong,null,"비즈니스 데이터는 완전한 타이핑"),"으로 오류 없는 코드를, ",t.createElement(n.strong,null,"라이브러리 혹은 기존의 API를 사용할 때는 선택적인 타이핑"),"으로 개발의 효율을 추구하고 있습니다.\n위의 프리즈마 쿼리를 작성하는 예시는 후자에 해당하므로 5번(언박싱과 GADT) 방식을 사용하였습니다."),"\n",t.createElement(n.h2,null,"맺으며"),"\n",t.createElement(n.p,null,"이번 글에서는 ReasonML의 타입시스템을 적용하며 만날 수 있는 기본적인 문제에 대한 대처방안을 알아보았습니다."),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"[%raw]")," 를 통해 직접 JS 코드 넣기"),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"Obj.magic"),"을 이용한 컴파일러 속이기"),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"Js.Dict")," 로 감싸서 리턴하기"),"\n",t.createElement(n.li,null,"배리언트를 이용한 해법"),"\n",t.createElement(n.li,null,"언박싱과 GADT을 이용한 해법"),"\n"),"\n",t.createElement(n.p,null,"이번에 설명하지 못했던 GADT의 개념과 배리언트의 더 자세한 사용법은 앞으로의 포스팅에서 다루도록 하겠습니다.\n또 다른 글에서 만나길 기대하며, Merry ReasonML, Happy new year!"),"\n",t.createElement("br"),"\n",t.createElement("br"),"\n",t.createElement("br"),"\n",t.createElement("br"),"\n",t.createElement(n.h4,null,"참고자료"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://reasonml.github.io/"},"https://reasonml.github.io/")),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://rescript-lang.org/blog/bucklescript-release-7-0-2"},"https://rescript-lang.org/blog/bucklescript-release-7-0-2")),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://rescript-lang.org/docs/manual/latest/api/js/dict"},"https://rescript-lang.org/docs/manual/latest/api/js/dict")),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://rescript-lang.org/docs/manual/latest/object"},"https://rescript-lang.org/docs/manual/latest/object")),"\n"),"\n",t.createElement(a,{email:"tlonist.sang@gmail.com",name:"김상현",description:"백엔드 개발자",date:"2020-12-21"}))}var s=function(e){void 0===e&&(e={});var n=Object.assign({},(0,l.ah)(),e.components).wrapper;return n?t.createElement(n,e,t.createElement(r,e)):r(e)};var c=a(3710);function i(e){return t.createElement(c.Z,e,t.createElement(s,e))}c.Z}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-content-file-path-users-namenu-green-tech-blog-content-posts-unbox-the-variant-index-mdx-da04fe5bce9e1e9832ab.js.map