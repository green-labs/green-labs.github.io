"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[172],{815:function(a,e,n){n.r(e),n.d(e,{default:function(){return r}});var t=n(7294),l=n(9626);function i(a){var e=Object.assign({p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",div:"div",code:"code",pre:"pre",a:"a",em:"em",img:"img"},(0,l.ah)(),a.components),n=e.Author;return n||function(a,e){throw new Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Author",!0),t.createElement(t.Fragment,null,t.createElement(n,{email:"mccha0407@gmail.com",name:"차민철",description:"신선하이 백엔드 개발자",date:"2022-07-21"}),"\n",t.createElement(e.p,null,"안녕하세요. 신선하이 백엔드 개발자 차민철입니다. 그린랩스에 입사한지 이제 막 1년이 지나 그간의 경험을 공유해보려고 합니다."),"\n",t.createElement(e.h2,null,"입사 전"),"\n",t.createElement(e.p,null,"입사 전부터 함수형 프로그래밍에 관심이 많았었는데요. 이 글을 읽고 계실 여러분처럼 실제로 현업에서 함수형 언어를 어떻게 사용하고 있는지도 궁금했고, 또 한 번 쯤은 함수형 언어로 개발해보고 싶은 마음에 지원했습니다. 지난 3년간 자바스크립트를 사용하여 웹 어플리케이션 개발을 했었고, 그린랩스에 합류하면서 클로저란 언어를 처음 접하고 사용하게 되었습니다."),"\n",t.createElement(e.p,null,"국내에서 클로저라는 언어를 사용하는 기업은 그린랩스가 거의 유일하다고 볼 수 있어 커리어에 대한 걱정도 조금 있었습니다. 하지만 회사에서 사용하는 언어를 클로저로 선택하는 것은 분명 쉽지 않았을 테고, 사용하기로 결정했다면, 이 언어만의 확실한 장점이 있으리라 생각했습니다. 그리고 이런 결정을 할 수 있는 회사라면 실무자들의 의사결정을 존중하는 문화를 가졌을 거라는 믿음이 있었습니다."),"\n",t.createElement(e.blockquote,null,"\n",t.createElement(e.p,null,"능서불택필 - 글씨를 잘 쓰는 이는 붓을 가리지 않는다. 즉 일에 능한 사람은 도구를 탓하지 않는다"),"\n"),"\n",t.createElement(e.p,null,t.createElement(e.strong,null,"개발자의 성장에는 어떤 언어를 쓰느냐보다 누구와 함께 일하는지가 더 중요하다고 생각합니다.")," 그린랩스에 이미 합류하신, 그리고 앞으로 합류하실 분들 모두 변화를 두려워하지 않고 도전하는 멋진 분들이라고 확신할 수 있었습니다. 한편으로는, 도구를 가리지 않는 장인들의 모임일 수도 있겠다고 생각했습니다. 1년이 지난 지금 돌이켜보면, 제 인생에서 잘한 선택 중 하나라고 생각합니다.😀"),"\n",t.createElement(e.h2,null,"((클로저))의 첫 인상"),"\n",t.createElement(e.p,null,"클로저(Clojure) 뿐 아니라 리습(Lisp) 계열의 언어를 처음 접해보는 터라 걱정이 많았습니다."),"\n",t.createElement(e.p,null,t.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 331px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/42f5b39b94cd8902758de5649df2c490/62452/image1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 45.78313253012048%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2klEQVQoz1XQzW+aYACAcf71Zcct2aGHNtuSJTs1eplNat3UdFUG8l35fEHgVQGRT5lWPoV3WXfac/9dHsxxNgCohgFs21ytdNfd7nbu8ZjFcWgYAABV1zXTNCC0AFABUPP85Xw+nU6/w3CPJUlcljmE1j7wm6YqyyIMg6oqIDQVRWIYShC4f56mSZ7n6rqyLKMq86oqMcMAHEsNHwbD4QAANYqCKAriOBTF51ewkGXRtk0A1M0GMgz1+HPS632dTEaO42CbNWRZnKGepuPRdrvNsjRJIs9zZFmE0FosCEWRbNu0LCNJ4vn88X5wRf6ayLJk2zaWZQeOJz9/+jCffkcIte1FVWWOY2RZlGWRokhB4FYrva6Lrmtplrj7ck3cPSCEiiLHdF1bCsLVzZsfk/4rbmh6QVGkJC1peoHjM5al0zRGqK2qwg082JvJtw9lW55fTpjve3VdzvFvLD9umqrrLjg+m07HPM8SBD4aDTVNQahr26Ysc8sE/Y/vrt+/ZUg8L85YGO49z1mZ+npjx3GYprFhANM01msbQkvTFNf9OyJN4yxLdV257d+MR/eSuNz5Hrbf74LAPx4z3/eSJDockrZt0X91CLUItV13QQg9C0uSIGma5jjmD7950CrCemGWAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="그림"\n        title="그림"\n        src="/static/42f5b39b94cd8902758de5649df2c490/62452/image1.png"\n        srcset="/static/42f5b39b94cd8902758de5649df2c490/6a5fb/image1.png 249w,\n/static/42f5b39b94cd8902758de5649df2c490/62452/image1.png 331w"\n        sizes="(max-width: 331px) 100vw, 331px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(e.p,null,"처음에는 괄호가 너무 많아서 (특히, 맨 끝의 괄호모음... ",t.createElement(e.code,null,"))))"),") 당황하기도 했고 코드를 읽는게 어렵게 느껴졌습니다. 이런 문법 에러를 만나기도 하구요."),"\n",t.createElement(e.pre,null,t.createElement(e.code,null,"Unmatched delimiter: )\n")),"\n",t.createElement(e.p,null,"하지만, 퍼레딧(paredit)과 퍼린퍼(parinfer) 같은 리습용 편집 도구를 사용하면 이런 괄호를 쉽게 다룰 수 있습니다. 괄호가 익숙해지면서는 오히려 평가 순서가 명확하게 보이고 필요한 부분만 한 눈에 볼 수 있어 가독성이 훨씬 좋아진 것을 느꼈습니다."),"\n",t.createElement(e.p,null,"클로저를 사용하는 유저들의 경력이 많아서인지 입문자를 위한 문서화, 튜토리얼 등이 다른 언어에 비해 부족하다고 느껴지기도 했고, 종종 라이브러리 코드를 직접 살펴봐야 하는 경우도 있었습니다. 하지만 지금 돌이켜보면 이런 부분 덕분에 다양한 것들을 학습할 수 있었습니다."),"\n",t.createElement(e.p,null,"그린랩스에 입사하면 3주간 클로저를 학습하는 부트캠프 과정을 진행합니다. 부트캠프의 커리큘럼이 잘 짜여있고 좋은 리뷰어와 함께하는 과정이라 **클로저의 사고방식(The Clojure Way)**으로 전환하는데 크게 어렵지 않았습니다.\n부트캠프 과정과 후기가 궁금하시다면 ",t.createElement(e.a,{href:"https://green-labs.github.io/clojure-bootcamp"},'"그린랩스에서 클로저 시작하기"'),"라는 글을 추천합니다."),"\n",t.createElement(e.h2,null,"그린랩스에서 만난 동료들 🤟"),"\n",t.createElement(e.p,null,"👋 그린랩스에서 함께 일하는 멋진 동료들 소개합니다."),"\n",t.createElement(e.p,null,t.createElement(e.strong,null,"1) 개발 생산성을 높이기 위해 도구를 만들어 쓰는 동료"),"\n",t.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 52.20883534136546%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiklEQVQoz42S247bMAxE/f+/VqDFPnSxWzi2ZceSr4ljSb7bp5CSpts+tEtgIEIghhxygqquUUXJPM8Mw8AwrQzjxLIsHMfBvu/s+/EH3P+27fTaYseZ/bj/OQRN2yKloqxqpmliXHbGaWHbNv4VN2tI8ozL5eKHeRLmUhKeIk86jiODtfdJhwFrLdbeX60NxjhYP1Eah7x8/eKn7LX5TVhVNYlIEWnKKYoIk5wfp5gwSohSxdvbOyLNKMsKpQpUUaCNpTgLvr9849r1vomLp2SlFEVzRZU1UinOuaRtL9y0pes6jNFMy0ZvJ7TWfjXzsnDrtSf5ReYJi6JEiJRECBKRcRLS57mqkFKSywKpSrLzmVwq39AMA9s4Ury+YrKMtSqZlWTtOgJXIISgaRq6XtN0luu1o7ncqOuGunV5R900ODVO3vxwwLquz+MdDwTuumGc0ve9L5jnyb//i/0h9aNcL9ldMcmkl51mGXEc++W7zh8LP4vALdld2NnHGVzklbeBM/Tf3T9D+BMxOAD9BhxalgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="그림"\n        title="그림"\n        src="/static/264920d57a2ba84b348ac92520dc341a/5caea/image3.png"\n        srcset="/static/264920d57a2ba84b348ac92520dc341a/6a5fb/image3.png 249w,\n/static/264920d57a2ba84b348ac92520dc341a/79e1b/image3.png 498w,\n/static/264920d57a2ba84b348ac92520dc341a/5caea/image3.png 996w,\n/static/264920d57a2ba84b348ac92520dc341a/061c7/image3.png 1216w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(e.a,{href:"https://hasura.io/"},"하수라(Hasura)"),"에 영감을 받은 개발자들이 그래프QL API를 만들 때 반복적으로 작성해야하는 부분들을 자동화 해주는 도구 ",t.createElement(e.a,{href:"https://github.com/green-labs/gosura"},"고수라(Gosura)"),"를 직접 만들어서 사용하고, 공개도 하고 있습니다."),"\n",t.createElement(e.p,null,t.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/d183ad21e2f85aa35be3ba930cb1b07a/669eb/image4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 33.734939759036145%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABK0lEQVQoz4WQzW6DMBCEef8XyC0PkmvUW06VShW1QAhJ82NswIBjfr/KbtMeKjUrrbxezc7OTmBtxzzPTNP0fzrMHQdc0xQlJK0x1HXt+y6CKE4YhoFH4QYcbuh7/99unkijN2RRcjx+UNfNF2GWHZBSUZYVRVFSVRVKKZQqKH1doHX9Z4G9Gay1jDP0/YAxN7802GcHcikReY4QgquQnC45p/MFIdx7xhhDGIYsFguWyyVaa2Qu2MURhThhGu2XOOuCdJ+hioKmabwXbTdRd9C0hrZtfbpTpZSsVivW6zXjNBNtX4nCZ3YvG47J+y+hOzmOE5Jk55UOQ888jQ89tV3v/bPj9EPmCZ2CqtL+jMbVWtN9G38H3XMcR+/TDF65zCVlXWL6G67pCD8BbjYZ8vWWNewAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="그림"\n        title="그림"\n        src="/static/d183ad21e2f85aa35be3ba930cb1b07a/5caea/image4.png"\n        srcset="/static/d183ad21e2f85aa35be3ba930cb1b07a/6a5fb/image4.png 249w,\n/static/d183ad21e2f85aa35be3ba930cb1b07a/79e1b/image4.png 498w,\n/static/d183ad21e2f85aa35be3ba930cb1b07a/5caea/image4.png 996w,\n/static/d183ad21e2f85aa35be3ba930cb1b07a/669eb/image4.png 1244w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(e.p,null,"프론트엔드에서 사용하는 리스크립트도 비슷한데요. 라이브러리의 부족한 부분을 보완해서 사용하고, 여기서 그치지 않고 외부의 다른 개발자들도 도움을 받을 수 있도록 공개하고 있습니다."),"\n",t.createElement(e.p,null,"클로저와 리스크립트 생태계에 기여하는 동료들을 보고 2022년이 다 가기 전에 저도 클로저 생태계에 한 가지라도 기여해야겠다는 목표를 세울 수 있었습니다.\n두 오픈소스에 대한 내용들은 컨트리뷰터들이 기술 블로그나 밋업에서 더 자세히 설명해주실 날이 있을 것 같습니다.🙂"),"\n",t.createElement(e.p,null,t.createElement(e.strong,null,"2) 꼼꼼한 배포 계획으로 인해 침대에 누운 것처럼 편안한 배포를 가능케 한 동료")),"\n",t.createElement(e.p,null,"배포 시나리오를 미리 작성하고 배포 전에 함께 스쿼드 구성원들이 함께 리뷰한 내용의 일부입니다.\n",t.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/f28a490352a1d3c1b51630bb2aaf982b/709cb/image12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 71.88755020080322%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiUlEQVQ4y42T147bMBBF9/9/MQ/JYr0UVSwWsYgqPIFoy3HRGhlggAFJnblT9AGQcybnEmDHBWUsvfhGdy0+eELwxBiJMRBCKHEo54F1XdkZm31wtf1AjwtVp2hlRdM0tG3LMFhSSozjWPwSxxLv3z0ALwqLRKYMoh/wlcC1Dc4Y1uvjnyzf3b8oFG7mj5DormEeR+aUWJbllvTI3yiENM+lR847fAhvVR1BX4C1MnR9j3cD1trSP+9cGYj3nhDjQ4nPFb6UPK1gfUArhdaKXvW0XVdA2zCmrQ3zfPO9HT8ozAX4qxuQsireyYr+9EVdCVrxTV8JpJQopXBFeXwF/lOYmTO0ekC3DcpaJueYjCFZw2g0MYSidt/LKaVjIHd91HGi/v3JUAmMtfRaFcCyrrdF/q8e7oc2jNSfX+ha4txwGYy/lJeuit5O+ZZhuwTOPnGWNbbb/pIBYzTzPB0u8vPEX4Ab8TQkqpOgEydkLTFaPyz3c0WHwPtsfsmo9kwwuiz3ssyHao7sL1YuSaHBPEMdAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="그림"\n        title="그림"\n        src="/static/f28a490352a1d3c1b51630bb2aaf982b/5caea/image12.png"\n        srcset="/static/f28a490352a1d3c1b51630bb2aaf982b/6a5fb/image12.png 249w,\n/static/f28a490352a1d3c1b51630bb2aaf982b/79e1b/image12.png 498w,\n/static/f28a490352a1d3c1b51630bb2aaf982b/5caea/image12.png 996w,\n/static/f28a490352a1d3c1b51630bb2aaf982b/709cb/image12.png 1034w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(e.p,null,"온라인에 다 같이 모여서 배포를 진행한 모습입니다.\n",t.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/9d3002334a518bacc5ee6f628da25479/b6529/image6.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 52.20883534136546%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVQoz52QW0iTcRjGv+u6qZvuKggmO33bPNYyJBArTVO3qalsUGnmAccKssiopQlhGUMwKCsi6kLLCwuUiIhACCwPc+FmKERCB7KZzh389u0X+zKjLnvg5X3+7/PwvC9/QSVmYEjLwmBKR6M3odEZUeuNaEQTGr0RrSEV7RpX3qIJlVpPds5equwOyioqqHbU0Og6i+NIHULevnzKyiux2soptdgoLrVScOAgRYeKKSwswmK1YbGVUWKxUWKxUmq1kZuXj/uSm5fD/Ty87WFgoJ/hVyN0XetGGB19Q4IEkUhEqagksfThI99Gx1mY9LE8P08kEiYaixGNRhWPJMW52tlJo93G6doq6p1OmlwNpGflIni9Xv5FLBImsriIvBKG1fhfWiKRUHpDYzMbNm5i85atXDzTytzIc/p67yFMTEwqhng8jizLCl9Y/M6nr19YCoX4HA0iyXElSE7Iii8Jl+sU27bvQK1Po/mog7uXW2hvrv0TmAz7vX0lFGL5xxLR1Rje4ByrsrR+XeIX4X7fIzw3erjp8VDXVEfvhXqutzkRxscnFLMkSetXhtf+MzkLBoNKT86TeiK5OC7zeGiIO7d6eNDdxcnWFjqclXjaGhCmp/38D9rbO8jM3sP+4sPk2+wUlNmpPt6EMDj4lNnZOZLBgcAMMzPvmfL5eDs2hnfKx7Q/oGh+f4B3/gAvfK8ZePaEEzX1pJjNiObdHKk6hrvlHO7zVxC0OgOiIQ2DMR21RlwvlUYkS2cgLyOL1EwzxkwzpekZ5IgmUrQG1Bo9arUelUqDTmtk185sdDoTPwHZrUMVpInwMAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="그림"\n        title="그림"\n        src="/static/9d3002334a518bacc5ee6f628da25479/5caea/image6.png"\n        srcset="/static/9d3002334a518bacc5ee6f628da25479/6a5fb/image6.png 249w,\n/static/9d3002334a518bacc5ee6f628da25479/79e1b/image6.png 498w,\n/static/9d3002334a518bacc5ee6f628da25479/5caea/image6.png 996w,\n/static/9d3002334a518bacc5ee6f628da25479/b6529/image6.png 1049w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(e.p,null,"캡쳐를 통해 어떤 히스토리로 배포 되었는지도 스레드에 남깁니다.\n",t.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 996px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/ad1f1a127c25db4a8d56bfa2f93cf566/393aa/image10.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 73.09236947791165%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgklEQVQ4y5WTC2+CQBCE/f9/rk2rvVI4DgSOl7wUBQWcZjdilCi1l5BNuGPum9llgcs6n89ct2UJ7XtwXRe+78NxHJimiSRJcDgccDqdrufHb8ZKazEVzOII7o+BINDQWiOKIgRBgDiO0TQNhmF4KnYnON0syxJVVaGud0w2XS8TjnW/38PzPKzXLhylkGUZX1Lk+Z3tWcHbA0RFuZHtoij4IdE0TbHb7dD3/euE52FA27bX/G4r5UiXkYMpyGyG9BF1WeuAxYhsFHkW00PCtmlQlSXCMOIMaXyklGyXOtx1Hdex238KxoEH8f4Gw/iGkhYsy4JhGNxxou6600NHTwU3kYYpBD6kB6F8mJaEEIJJyfYmTbHdblHX9XyG48tEBzCWS3yaDoR0oRwHtm0jDEOmpDiI9Hg8via4iUJIsYKyJRxbQinFo0NUY37/spxoH9bXCu7a4znM85wFyxuykeqlpnAH+57/hqLIeR4vB/jMbYdnBacbw2W4iYis3g3+DOEvkp+Oc0G0kYoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="그림"\n        title="그림"\n        src="/static/ad1f1a127c25db4a8d56bfa2f93cf566/5caea/image10.png"\n        srcset="/static/ad1f1a127c25db4a8d56bfa2f93cf566/6a5fb/image10.png 249w,\n/static/ad1f1a127c25db4a8d56bfa2f93cf566/79e1b/image10.png 498w,\n/static/ad1f1a127c25db4a8d56bfa2f93cf566/5caea/image10.png 996w,\n/static/ad1f1a127c25db4a8d56bfa2f93cf566/393aa/image10.png 1190w"\n        sizes="(max-width: 996px) 100vw, 996px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",t.createElement(e.p,null,"운영 배포는 경험이 많아도 떨리는 작업 중 하나 입니다. 🤯 \n하지만 이렇게 시나리오를 꼼꼼하게 작성해두고 작업을 하니 실수 없이 안정적인 배포를 할 수 있었습니다.\n배포 과정에 이슈가 생겼을 때도 당황하지 않고 대응을 할 수 있었고 이슈 추적을 할 때도 배포 기록이 꼼꼼하게 남아있어 도움이 많이 되었습니다."),"\n",t.createElement(e.p,null,"그린랩스 제품개발본부가 이렇게 일할 수 있는 것은 형식에 매몰되지 않고 ‘진짜 필요한 것이 무엇인지' 고민해 주는 리더와\n개발자가 지속적으로 성장하고 성취할 수 있게 지지해 주는 동료, 그리고 제품 품질과 일정을 모두 지키려는 열정으로 꾸준히 공부하고 성장하는 동료들이 주변에 많기 때문입니다."),"\n",t.createElement(e.h2,null,"마무리"),"\n",t.createElement(e.p,null,"그린랩스는 저를 한층 더 성장할 수 있게 만들어준 소중한 곳입니다. 훌륭한 동료들과 함께 일하며 많은 것을 배우고 있고, 다른 곳에서 쉽게 할 수 없는 클로저로만으로 개발하는 경험을 하고 있습니다.\n그리고, 클로저를 사용하면서 REPL, 불변, 데이터 중심적 사고, 순수 함수, 고차 함수의 소중함 뿐만 아니라 개발의 즐거움까지 느끼고 있습니다."),"\n",t.createElement(e.p,null,t.createElement(e.em,null,"Thanks to Rich Hickey~ and Greenlabs")),"\n",t.createElement(e.p,null,t.createElement(e.img,{src:"https://c.tenor.com/Ls5-aOfqpnEAAAAC/thank-you-thanks.gif",alt:"그림"})),"\n",t.createElement(e.p,null,"클로저의 우아함을 맛보고 그린랩스의 훌륭한 동료분들과 일할 기회를 놓치지 마세요!"))}var s=function(a){void 0===a&&(a={});var e=Object.assign({},(0,l.ah)(),a.components).wrapper;return e?t.createElement(e,a,t.createElement(i,a)):i(a)};var c=n(3710);function r(a){return t.createElement(c.Z,a,t.createElement(s,a))}c.Z}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-content-file-path-users-namenu-green-tech-blog-content-posts-with-greenlabs-for-1-yr-index-mdx-fd21491127b39a7ace9c.js.map