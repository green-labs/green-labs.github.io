"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[514],{1216:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var l=n(7294),r=n(9626);function c(e){var t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code",strong:"strong",ol:"ol",li:"li",ul:"ul"},(0,r.ah)(),e.components),n=t.Author;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Author",!0),l.createElement(l.Fragment,null,l.createElement(t.p,null,l.createElement(t.a,{href:"https://freshcodeit.com/how-to-stop-being-afraid-of-clojure"},"다음글"),"을 번역했습니다."),"\n",l.createElement(t.h2,null,"3. 클로저의 여러 모습"),"\n",l.createElement(t.p,null,"클로저는 단지 ",l.createElement(t.a,{href:"https://freshcodeit.com/services/web-development"},"웹"),"이나 ",l.createElement(t.a,{href:"https://freshcodeit.com/services/mobile-development"},"모바일 개발")," 뿐만 아니라, 데이터 사이언스와 DL/ML(",l.createElement(t.a,{href:"https://github.com/incanter/incanter"},"incanter"),", ",l.createElement(t.a,{href:"https://github.com/scicloj"},"scicloj"),")에도 활발히 활용되고 있습니다."),"\n",l.createElement(t.p,null,"아직 개인적으로 이 분야의 일을 경험하진 못했습니다. 하지만 DSL의 경험은, 클로저의 우아함을 다시금 느껴볼 수 있게 해줬습니다."),"\n",l.createElement(t.h3,null,"3.1 DSL (domain specific language)"),"\n",l.createElement(t.p,null,"도메인 특화 언어는 특정한 문제를 풀기 위한 한 단계 더 추상회된 언어입니다. 클로저에서 DSL은 주로 데이터 구조로 표현됩니다. 아래의 ",l.createElement(t.a,{href:"https://github.com/seancorfield/honeysql"},"honeysql")," 예제를 볼까요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-clojure"},'{:select [:a :b :c]\n :from   [:foo]\n :where  [:= :f.a "baz"]}\n')),"\n",l.createElement(t.p,null,"이처럼 컨텍스트에 구애받지 않는 문법은 DSL를 커스터마이즈 할 수 있도록 합니다."),"\n",l.createElement(t.p,null,"좀 더 현실적인 예를 들어보겠습니다. 언젠가 ",l.createElement(t.a,{href:"https://demo.searchkit.co/"},"searchkit"),"과 비슷한 GUI 필터링 모드를 만들어야 했었는데요, SQL 과 복잡한 논리 표현을 이용해서 GUI 필터를 확장하는 것이 요구사항이었습니다."),"\n",l.createElement(t.p,null,"이전 GUI 에서의 필터 조건은 오직 AND만 쓰거나 OR만 쓰거나 둘 중 하나였기 때문에, 그 둘을 동시에 사용하거나 다시 그룹핑 하는 것이 불가능했습니다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-clojure"},"condition_1 AND (condition_2 OR condition_3)\n")),"\n",l.createElement(t.p,null,"문제는 ",l.createElement(t.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/xpack-sql.html"},"ElasticSearch SQL JDBC")," driver가 SQL 쿼리들을 올바른 ElasticSearch 쿼리에 맵핑하지 않는 것에 있었습니다."),"\n",l.createElement(t.p,null,"팀 내부에선 SQL 쿼리를 파싱해서 그와 동형인(isomorphic) Elasticsearch 쿼리로 바꾸는 일을 진행해야 했습니다. 동시에 컨텍스트에 기반해 에러 하이라이팅과 쿼리 요소들을 자동완성해주는 (예약어와 식별자 등) 기능을 구현하는 것도 필요했고요."),"\n",l.createElement(t.p,null,"예를 들어, 사용 가능한 컬럼들을 드랍다운으로 모아서 보여주거나, BETWEEN 과 같은 오퍼레이터를 숫자 필드에서 사용할 수 있도록 하는 일들이 전부 일의 범주에 포함되었습니다."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://freshcodeit.com/services/clojure-development-company"},"클로저는 이 작업에 완벽히 적합"),"한 언어였습니다. ",l.createElement(t.strong,null,"클로저의 동형성(homoiconicity)와 데이터 지향 접근이 바로 해결"),"이었죠. 다시 한번 구현해야하는 개념을 집어보면,"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"SQL 문자를 추상 구문 트리로 바꿈 (AST, abstract syntax tree)"),"\n",l.createElement(t.li,null,"AST를 ElasticSearch 쿼리로 바꿈"),"\n"),"\n",l.createElement(t.p,null,"첫 번째 단계에선 Instaparse 라이브러리(",l.createElement(t.a,{href:"https://github.com/Engelberg/instaparse"},"instaparse"),")가 쓰였습니다."),"\n",l.createElement(t.p,null,"컨텍스트에 구애받지 않는 문법인 Backus-Naur 형태(BNF) 표현을 실행 가능한 파서로 바꾸는 데 쓰이는 라이브러리로, 문자열을 입력받아 AST를 중첩된 클로저 컬렉션의 형태로 출력하는 역할을 합니다."),"\n",l.createElement(t.p,null,"결과로 받은 파스 트리의 모든 노드는 자동 완성 기능에 필요한 유용한 메타데이터 정보를 포함하고 있습니다. (라인에 맵핑되거나 인풋 문자의 컬럼에 해당하는) 또한 Instaparse는 파싱 실패에 대한 자세한 정보를 줄과 에러 구문의 컬럼등에 대해서 제공합니다."),"\n",l.createElement(t.p,null,"두번째 스테이지는 AST를 순회하며 각각에 패턴 매칭을 적용하며 구현될 수 있습니다.\n",l.createElement(t.a,{href:"https://gist.github.com/idozorenko/a0c5bb5e5d38a5ba92cca7f43d1d3392"},"여기")," 이 접근에 대한 간략한 요약이 있는데요, 위의 케이스와 우리가 한 구현이 다른 점은, 우리는 수학적 AST 표현을 바로 클로저 코드로 바꿔 평가(evaluation)까지 해버렸다는 점입니다."),"\n",l.createElement(t.h3,null,"3.2 클로저스크립트"),"\n",l.createElement(t.p,null,"지금 현재는 자바스크립트가 브라우저, 그리고 많은 모바일 기기에서 가장 우세를 점하고 있는 언어입니다."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://clojurescript.org/"},"클로저스크립트"),"는 ",l.createElement(t.strong,null,"클로저를 자바스크립트로 변환시켜주는 컴파일러를 포함"),"합니다. 내부에서 구글의 Closure 도구들과 minification 컴파일러를 사용하는데요, ClojureScript는 컴파일러 말고 그 언어 자체를 의미하기도 합니다. (줄여서 cljs)"),"\n",l.createElement(t.p,null,"cljs는 클로저의 모든 장점 - 데이터 구조, 함수형 접근, 매크로 등등 - 을 전부 포함함과 동시에, 언제든 프로덕션에 사용 가능한 생태계와 라이브러리들을 제공합니다. 클로저와는 플랫폼 레벨의 차이밖에 느껴지지 않는 셈이죠."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"클로져 백엔드 + cljs 프론트엔드를 사용하면 한 언어와 공유된 모드로 풀스택 개발"),"이 가능합니다! npm 패키징과의 매끄러운 연결도 ",l.createElement(t.a,{href:"https://github.com/thheller/shadow-cljs"},"shadow-cljs")," 컴파일러를 통해 구현되어 있습니다."),"\n",l.createElement(t.p,null,"그리고 ",l.createElement(t.a,{href:"https://cljsrn.org/"},"cljs"),"는 ",l.createElement(t.a,{href:"https://freshcodeit.com/portfolio-cases/tipster"},"React Native 모바일 앱"),"을 만들 때 쓰일 수도 있습니다."),"\n",l.createElement(t.h2,null,"4. ... 단점들?"),"\n",l.createElement(t.p,null,"다른 어떤 기술과 마찬가지로, 클로저도 수많은 장점에 대한 트레이드 오프가 있습니다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"클로저의 영속 자료 구조는 자바의 그것에 비해 ",l.createElement(t.a,{href:"http://www.diva-portal.org/smash/get/diva2:1424342/FULLTEXT01.pdf"},"약간 덜 효율적"),"입니다. 성능을 향상하기 위한 팁들 - 벡터의 ",l.createElement(t.a,{href:"https://clojure.org/reference/transients"},"transient")," 버전을 사용한 백터, 맵, 셋을 사용한다거나 - 이 있지만, 동시 접근이 필요할 경우엔 지양됩니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"클로저는 호스트 플랫폼의 기능을 전부 사용할 수 있지만(자바 라이브러리들과 데이터 구조들), 통상적으로 동일한 자바나 스칼라 코드보다 약간 느립니다. 대부분의 애플리케이션에 대해서는 미미한 차이겠지만, 정말 높은 성능을 요구하는 시스템이나 모듈에 적용할 때는 신중해야 합니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"클로저는 또한 초심자에게 그리 배우기 쉬운 언어는 아닙니다. 하지만 대부분은 함수형 접근 때문에 어려운 것이 아니라 호스팅 플랫폼과의 상호작용 부분을 어려워 합니다. 시간을 갖고, 연습을 하다 보면 별 문제가 아니게 될 것입니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"모든 걸 고려해 보았을 때, 제 생각에 가장 심각한 클로저의 단점은 '마케팅' 입니다. 클로저는 최소한의 문법과, 잘 짜여진 생태계, 그리고 높은 잠재성을 가진 단순한 언어입니다. 클로저를 알기 전과 후는 명백히 다를 것입니다!\n하지만 리습으로 부터 물려받은 과도한 복잡성과 부족한 표준 등의 클로저가 갖고 있는 '대중적 이미지' 는 실제로는 완전 반대임에도 불구하고 새로 유입된 개발자들로 하여금 클로저(혹은 클로저스크립트)에 투자하기를 꺼리게 만듭니다. 클로저를 마스터함으로써 얻을 수 있는 이득이 훨씬 큼에도 불구하고요!"),"\n"),"\n"),"\n",l.createElement(t.h2,null,"5. 뉴비를 위한 팁: 클로저, 어떻게 시작하면 좋을까?"),"\n",l.createElement(t.h3,null,"5.1 클로저 마스터의 세가지 원칙"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"연습하세요. 모든 기술에 통용되는 조언입니다. 만약 함수형 프로그래밍을 막 시작하셨다면, ",l.createElement(t.a,{href:"https://adventofcode.com/"},"Advent of Code"),"나 ",l.createElement(t.a,{href:"https://projecteuler.net/"},"Project Euler"),"들을 풀면서 언어에 대한 감각을 익히셔야 합니다. 저는 몇 개의 사이드 프로젝트에 클로저를 적용해보며 실력이 부쩍 늘었었습니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"다른 사람들에게 배우세요. 커뮤니티나 클로저/리습 관련 서적을 참고하세요. 정말 ",l.createElement(t.a,{href:"http://landoflisp.com/"},"재미있고")," ",l.createElement(t.a,{href:"https://www.braveclojure.com/"},"훌륭한")," 자료들을 찾으실 수 있습니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://awesomeopensource.com/project/tallesl/Rich-Hickey-fanclub"},"리치 히키의 발표"),"를 들으세요. 클로저 기능과 기술 솔루션들을 언어 창시자에게서 직접 명료하고 단순한 표현으로 들을 수 있습니다. 클로저리안들의 영감의 원천입니다."),"\n"),"\n"),"\n",l.createElement(t.h3,null,"5.2 도움이 되는 링크"),"\n",l.createElement(t.p,null,"Clojure-how-to와 튜토리얼 링크를 공유합니다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://clojurians.slack.com/ssb/redirect"},"클로저리안")," ",l.createElement("br"),"\n슬랙 Clojure 채널입니다. 초보자들을 위한 섹션 (beginners, clojure, clojurescript)과\n구직에 대한 정보(jobs, remote-jobs)도 제공합니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.reddit.com/r/Clojure"},"클로저 레딧")," ",l.createElement("br"),"\n레딧의 클로저 하위 게시판입니다. 각종 발표와 라이브러리, 강의에 대한 정보가 공유됩니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.clojure-toolbox.com/"},"클로저 툴박스")," ",l.createElement("br"),"\n최신의 클로저-클로저스크립트 라이브러리들의 모음입니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://awesomeopensource.com/project/tallesl/Rich-Hickey-fanclub"},"리치 히키의 팬클럽")," ",l.createElement("br"),"\n리치 히키의 강연과 인터뷰 모음집입니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://jobs.braveclojure.com/"},"클로저 잡스")," ",l.createElement("br"),"\n클로저 구루가 되실 분들을(이미 되신 분들도 포함해서!) 위한 실질적으로 클로저를\n사용하는 구직 리스트입니다."),"\n"),"\n"),"\n",l.createElement(t.h2,null,"6. 요약"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"클로저는 ",l.createElement(t.strong,null,"풀스택 웹개발"),"과 ",l.createElement(t.strong,null,"모바일 개발"),"을 위한 언어임과 동시에 ",l.createElement(t.strong,null,"데이터 사이언스, 스크립팅과 DSL에도 적용"),"될 수 있습니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"클로저는 성능과 재미를 둘 다 잡고자 하는 초보 혹은 숙련된 프로그래머 ",l.createElement(t.strong,null,"모두에게 매력적인 함수형 언어"),"입니다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"리습의 방언으로, ",l.createElement(t.a,{href:"https://freshcodeit.com/freshcode-post/clojure-development-challenges"},"도전을 좋아하는")," 재능있는 개발자들에게 인기 있습니다. 하지만 궁극적으로 ",l.createElement(t.strong,null,"클로저는 개발을 단순화하는데 목적을 두고 만들어졌고, 제 생각엔 정말 완벽하게 목적을 달성"),"하고 있습니다! ",l.createElement("br")),"\n"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"클로저, 지금 바로 시작하시죠!")),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement("hr"),"\n",l.createElement("br"),"\n",l.createElement(n,{email:"tlonist.sang@gmail.com",name:"김상현",description:"백엔드 개발자",date:"2021-06-01"}))}var a=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?l.createElement(t,e,l.createElement(c,e)):c(e)};var m=n(3710);function o(e){return l.createElement(m.Z,e,l.createElement(a,e))}m.Z}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-content-file-path-users-namenu-green-tech-blog-content-posts-start-your-clojure-now-2-index-mdx-7ad7fcbac00b58d6709f.js.map