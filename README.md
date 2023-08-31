<h1> 🌿project name : Nature-coin :Frontend 🌿 </h1> 
<p>개인 project ✨</p>
<h2>## 기간 : 2023.08.07~2023.08.27</h2> 
<br/>
<p> 팀원 : 개인</p>
<h2>프로젝트 소개</h2> 
사용자가 자동차 대신 자전거 이용, 일회용 컵 대신 텀블로 이용, 일회용 비닐 대신 에코백 이용, 온실가스배출 감소를 위한 채소를 <br/>
먹는 사진을 올리면 관리자가 사진 검토 후 코인을 지급해주고 사용자는 지급된 코인으로 상품을 살 수 있는 지속적인 환경보호 라이프 권장 캠페인 사이트입니다!<br/>
<br/>
<h2>기술 선정 (BACKEND)</h2>
✅ React, Redux Saga  <br/>
◼  컴포넌트 상태 중앙 집중화 방식  <br/>
◼  Redux Saga 로 상태와 비동기식 통신 관리  <br/>
✅ Mui라이브러리
<br/>
<h2>시연 영상 </h2>
https://minjoo0603.tistory.com/59
<br/>
<h2>✅ 파일구조</h2>h2>
  
📦src
 ┣ 📂assets <br/>
 ┃ ┣ 📂items <br/>
 ┃ ┗ 📜homeBackground.mp4 <br/>
 ┣ 📂components <br/>
 ┃ ┣ 📂common<br/>
 ┃ ┃ ┣ 📜BasicPagination.js<br/>
 ┃ ┃ ┣ 📜Image.js<br/>
 ┃ ┃ ┗ 📜style.js<br/>
 ┃ ┣ 📂footers<br/>
 ┃ ┃ ┗ 📜Footer.js<br/>
 ┃ ┣ 📂headers<br/>
 ┃ ┃ ┗ 📜Header.js<br/>
 ┃ ┣ 📂home<br/>
 ┃ ┃ ┣ 📜HomeBackground.js<br/>
 ┃ ┃ ┣ 📜HomePosts.js<br/>
 ┃ ┃ ┗ 📜HomeSection.js<br/>
 ┃ ┣ 📂Image_board<br/>
 ┃ ┃ ┣ 📜ImageModifyForm.js<br/>
 ┃ ┃ ┣ 📜ImageRead.js<br/>
 ┃ ┃ ┗ 📜ImageRegisterForm.js<br/>
 ┃ ┣ 📂item_board<br/>
 ┃ ┃ ┗ 📜ItemList.js<br/>
 ┃ ┣ 📂login<br/>
 ┃ ┃ ┗ 📜SignInForm.js<br/>
 ┃ ┣ 📂mypage<br/>
 ┃ ┃ ┣ 📜MyImageList.js<br/>
 ┃ ┃ ┣ 📜MyItemList.js<br/>
 ┃ ┃ ┣ 📜MyPageMenu.js<br/>
 ┃ ┃ ┣ 📜Profile.js<br/>
 ┃ ┃ ┗ 📜ProfileModifyForm.js<br/>
 ┃ ┣ 📂signup<br/>
 ┃ ┃ ┣ 📜AdminSetupForm.js<br/>
 ┃ ┃ ┗ 📜SignUpForm.js<br/>
 ┃ ┗ 📜NotFound.js<br/>
 ┣ 📂containers<br/>
 ┃ ┣ 📂header<br/>
 ┃ ┃ ┗ 📜HeaderContainer.js<br/>
 ┃ ┣ 📂home<br/>
 ┃ ┃ ┗ 📜HomeContainer.js<br/>
 ┃ ┣ 📂image_board<br/>
 ┃ ┃ ┣ 📜AlbumContainer.js<br/>
 ┃ ┃ ┣ 📜CategoryContainer.js<br/>
 ┃ ┃ ┣ 📜ImageListContainer.js<br/>
 ┃ ┃ ┣ 📜ImageModifyContainer.js<br/>
 ┃ ┃ ┣ 📜ImageReadContainer.js<br/>
 ┃ ┃ ┗ 📜ImageRegisterContainer.js<br/>
 ┃ ┣ 📂item_board<br/>
 ┃ ┃ ┗ 📜ItemListContainer.js<br/>
 ┃ ┣ 📂mypage<br/>
 ┃ ┃ ┣ 📜ModifyProfileContainer.js<br/>
 ┃ ┃ ┗ 📜MyPageContainer.js<br/>
 ┃ ┣ 📂Signin<br/>
 ┃ ┃ ┗ 📜SignInContainer.js<br/>
 ┃ ┗ 📂signup<br/>
 ┃ ┃ ┣ 📜AdminSetupContainer.js<br/>
 ┃ ┃ ┗ 📜SignUpContainer.js<br/>
 ┣ 📂dummyData<br/>
 ┃ ┗ 📜itemsData.js<br/>
 ┣ 📂lib<br/>
 ┃ ┣ 📜api.js<br/>
 ┃ ┗ 📜client.js<br/>
 ┣ 📂modules<br/>
 ┃ ┣ 📜auth.js<br/>
 ┃ ┣ 📜coin.js<br/>
 ┃ ┣ 📜imageboard.js<br/>
 ┃ ┣ 📜index.js<br/>
 ┃ ┣ 📜loading.js<br/>
 ┃ ┣ 📜member.js<br/>
 ┃ ┣ 📜selector.js<br/>
 ┃ ┗ 📜useritem.js<br/>
 ┣ 📂redux<br/>
 ┃ ┣ 📂reducers<br/>
 ┃ ┃ ┣ 📜AuthReducer.js<br/>
 ┃ ┃ ┗ 📜PersistStore.js<br/>
 ┃ ┣ 📜configStore.js<br/>
 ┃ ┗ 📜requestToken.js<br/>
