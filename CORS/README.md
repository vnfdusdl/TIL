# SOP(Same-Origin Policy)

- '동일 출처 정책'이라 부르며, 어떤 출처에서 불러온 문서, 스크립트, 리소스가 다른 출처에서 가져온 리소스와 상호작용하는 것을 제한하는 보안 방식
- same-origin 서버로부터만 리소스를 주고받을 수 있다.
- 잠재적으로 해로울 수 있는 문서를 분리하여 공격받을 수 있는 경로를 줄이는 역할을 해준다.
- Same-origin이란 프로트콜(Protocol), 호스트(Host), 포트(Port)가 같아야 함을 의미함. 포트는 드러나 있을 때만 같아야하고, 드러나있지 않다면 같지 않아도 상관없음.
- 현재 도메인의 리소스와 (위험할 수 있는) 다른 도메인의 리소스가 섞이는 것을 방지하기 위해 서로 상호작용 하지 못하도록 한다.
- 리소스란, JavaScript 파일, css, img. video, audio, @font-face, iframe 등을 의미

# CORS(Cross Origin Resource Sharing)

- '교차 출처 리소스 공유', 동일 출처 정책과 반대되는 개념
- 본래는 SOP 정책에 의해서, 같은 도메인(출처)의 리소스에만 접근할 수 있었는데, CORS 정책에서는 추가 HTTP 헤더를 사용하여서, 다른 도메인에서도 해당 리소스에 접근이 가능하게 할 수 있도록 한다.
- 즉, 다른 도메인의 리소스라도 상호작용을 할 수 있도록 하는 것이 CORS이다.
- CORS 에러가 뜨는 것은, 사실 SOP때문에 접근이 막혔을 때, CORS를 허용해달라는 에러이다.
- header의 origin 에 요청하는 쪽의 scheme이랑 도메인, port가 담김. scheme 등은 http 등의 프로토콜을 말함.

  - https://computer.com:443 이라고 했을 때, https가 scheme, computer.com이 도메인, :443이 port

- 이 요청을 받은 서버는 답장의 헤더에 access-control-allow-origin 정보를 실어서 보냄
- origin에서 보낸 출처값이 서버에 답장에 담긴 - access-control-allow-origin에 똑같이 담기면 안전한 요청으로 간주하고 응답 요청을 받음
