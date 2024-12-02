
## 📔 Careernote 




<p align="center">
  <img src="https://github.com/user-attachments/assets/2ca55d4e-0f5f-4c8a-8bc6-f081cdb1ccaa"/>
</p>

<br/>

#####   배포 주소 : http://kdt-react-1-team01.elicecoding.com
<br/>
<br/>



## 👥팀원 및 팀 소개

|                               박주호                               |                            김선규                            |                              이주영                              |                               조아라                                |                               하정우                                |
| :----------------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/37bbb579-b730-4e0d-9c2b-1d1fa95df369" alt="박주호" width="150"> | <img src="https://github.com/user-attachments/assets/9fa06f2f-6943-4059-8d57-82d123b9353f" alt="김선규" width="150"> | <img src="https://github.com/user-attachments/assets/3a52cc39-3119-4bf5-9bd0-42f7899aa09c" alt="이주영" width="150"> | <img src="https://github.com/user-attachments/assets/2e12bf15-c7ed-4172-9c73-b72614942866" alt="조아라" width="150"> | <img src="https://github.com/user-attachments/assets/6290ef15-82cc-4449-b15d-ed62067b7534" alt="하정우" width="150"> |
|                                 FE                                 |                              FE                              |                                FE                                |                                 BE                                  |                                 BE                                  |
|               [GitHub](https://github.com/Intin1217)                |        [GitHub](https://github.com/seongyu-Kim)         |          [GitHub](https://github.com/jjyy0804)          |               [GitHub](https://kdt-gitlab.elice.io/aj02468)               |                [GitHub](https://kdt-gitlab.elice.io/Jay7314)                 |

<br/>
<br/>

## 🔎프로젝트 소개

- 저희가 제작한 프로젝트는 취업을 준비하는 사람들이 면접 경험, 취업 정보, 채용 공고 등 다양한 취업 관련 정보를 공유할 수 있도록 돕기 위한 플랫폼입니다.
  취준생들이 서로 유익한 정보를 교환하고, 이를 통해 취업 준비를 효율적으로 할 수 있도록 돕는 커뮤니티 중심의 사이트입니다. 사용자는 카테고리를 통해 정보에 쉽게 접근할 수 있으며, 
  자신만의 경험과 정보를 추가하고 공유할 수 있습니다.




<br/>
<br/>
  
## 💡공통 기능
### 1. 로그인
- 사용자는 비회원/ 삐약이 회원/ 꼬꼬닭 회원/ 관리자 로 나뉘며 각 등급의 회원은  접근할 수 있는 페이지가 다릅니다.
### 2. 회원가입
- 이메일(아이디)과 닉네임은 중복검사를 진행해야 가입이 완료됩니다.
- 각 필드는 유효성 검사를 진행합니다.
### 3. 비밀번호 찾기
- 가입한 이메일로 비밀번호 재설정 링크가 발송됩니다.
- 링크를 통해 재설정 페이지로 들어와 비밀번호를 재설정합니다.

   
## 💡사용자 기능
### 1. 내 정보 수정
- 비밀번호 입력 시 닉네임과 비밀번호를 변경할 수 있습니다.
- 닉네임 변경 시 중복 검사를 진행합니다.
### 2. 카테고리 별 게시글 보기
- 게시판을 카테고리 별로 접근할 수 있습니다.
- 공지 글과 그 외 카테고리들로 나뉘며 각각 api를 호출합니다.
- 페이지 당 공지글 제외 20개씩 페이지네이션 처리하여 보여줍니다.
### 3. 게시글 등록, 수정, 삭제
- 등급에 따라 글을 작성할 수 있는 게시판이 제한되며 자신의 글일 경우 수정 삭제가 가능합니다.
- 글 CRUD시 tostify를 통해 성공여부를 알 수 있습니다.
### 4. 댓글 등록, 수정, 삭제
- 게시글에 댓글을 작성할 수 있으며 자신의 댓글일 경우 수정, 삭제가 가능합니다.
- 댓글 CRUD시 tostify를 통해 성공여부를 알 수 있습니다.
### 5. 내 글 모아보기
- 본인이 작성한 글만 모아볼 수 있습니다.
### 6. 회원 탈퇴
- soft delete로 이루어지며 탈퇴한 사용자의 글은 같이 삭제되지 않습니다.


## 💡관리자 기능
### 1. 사용자 관리
- react-dnd 를 사용하여 사용자의 등급을 드래그앤드랍으로 변경합니다.
- 관리자의 권한으로 사용자를 탈퇴시킬 수 있습니다.
### 2. 카테고리 관리
- 게시판의 카테고리를 새로 생성하거나 삭제할 수 있습니다.
### 3. 게시판 관리
- 관리자만 공지글을 작성할 수 있으며 수정, 삭제 가능합니다.
- 다른 사용자의 게시글과 댓글을 삭제할 수 있습니다.

<br/>
<br/>

## 📺 화면 구성
<div>
   <p>[로그인 페이지]</p>  
   <img src ="https://github.com/user-attachments/assets/61a1a7ad-133b-4924-96bc-dbba8f1c63ae" width="600px"/>
</div>
<br/>
<div>
   <p>[회원가입 페이지]</p>  
   <img src ="https://github.com/user-attachments/assets/4895cd32-7d30-4043-87a9-188dc3557e03" width="600px"/>
</div>
<br/>
<div>
   <p>[비밀번호 찾기 페이지]</p>  
   <img src ="https://github.com/user-attachments/assets/06194592-09e5-45be-99df-73ec5db3913f" width="600px"/>
</div>
<br/>

 <div>
   <p>[사용자 메인 페이지]</p>
  <img src ="https://github.com/user-attachments/assets/77fb90ee-28e3-4d53-b3fe-6bff03765733" width="600px"/>
  <img src ="https://github.com/user-attachments/assets/d751ab60-8404-4152-8971-3cbba1391094" width="600px"/>
  <img src="https://github.com/user-attachments/assets/8ab969e7-9854-4cb2-b732-e72f5964f291" width="600px"/> 
  <p>- 햄버거 메뉴 클릭 시 사용자 정보 수정 및 카테고리별 게시판 접근이 가능합니다.</p>
 </div>
<br/>
 
<div>
  <p>[상세 조회 페이지]</p>
  <img src ="https://github.com/user-attachments/assets/c1492f35-08a8-45a8-96b0-660eb956b624" width="600px"/>
 </div>
<br/>

<div>
   <p>[글 작성 페이지]</p>  
   <img src ="https://github.com/user-attachments/assets/c2ce8f73-3205-4ccf-bc64-697da55ec576" width="600px"/>
</div>
<br/>
<div>
   <p>[관리자 메인 페이지]</p>
   <img src ="https://github.com/user-attachments/assets/b6c83a35-3969-4ed0-bb38-934f9709ca28" width="600px"/>
</div>
 



<br/>
<br/>

## 📦프론트 엔드 디렉토리 구조

<br/>

```

src
 ┣ assets
 ┃ ┣ Banner.png
 ┃ ┣ icon.png
 ┃ ┣ landing.png
 ┃ ┣ logo.png
 ┃ ┣ logo_b.png
 ┃ ┣ logo_bg_gray.png
 ┃ ┣ logo_bg_skyblue.png
 ┃ ┗ logo_w.png
 ┣ components
 ┃ ┣ Alert
 ┃ ┃ ┣ Alert.styled.ts
 ┃ ┃ ┗ Alert.tsx
 ┃ ┣ AuthenticationInput
 ┃ ┃ ┣ AuthenticationInput.styled.ts
 ┃ ┃ ┗ AuthenticationInput.tsx
 ┃ ┣ Button
 ┃ ┃ ┣ Button.styled.ts
 ┃ ┃ ┗ Button.tsx
 ┃ ┣ Comment
 ┃ ┃ ┣ Comment.styled.ts
 ┃ ┃ ┗ Comment.tsx
 ┃ ┣ DropDown
 ┃ ┃ ┣ DropDown.styled.ts
 ┃ ┃ ┗ DropDown.tsx
 ┃ ┣ Form
 ┃ ┃ ┣ EditNickNameForm
 ┃ ┃ ┃ ┗ EditNickNameForm.tsx
 ┃ ┃ ┗ EditPasswordForm
 ┃ ┃ ┃ ┗ EditPasswordForm.tsx
 ┃ ┣ Input
 ┃ ┃ ┣ Input.styled.ts
 ┃ ┃ ┗ Input.tsx
 ┃ ┣ InputChecker
 ┃ ┃ ┗ InputChecker.tsx
 ┃ ┣ InputErrorMessage
 ┃ ┃ ┗ InputErrorMessage.tsx
 ┃ ┣ Modal
 ┃ ┃ ┣ ModalPortal
 ┃ ┃ ┃ ┗ ModalPortal.ts
 ┃ ┃ ┗ ModalView
 ┃ ┃ ┃ ┗ ModalView.tsx
 ┃ ┣ Navbar
 ┃ ┃ ┣ Navbar.styled.ts
 ┃ ┃ ┗ Navbar.tsx
 ┃ ┣ NavbarContainer
 ┃ ┃ ┣ NavbarContainer.styled.ts
 ┃ ┃ ┗ NavbarContainer.tsx
 ┃ ┣ Pagination
 ┃ ┃ ┣ Pagination.styled.ts
 ┃ ┃ ┗ Pagination.tsx
 ┃ ┣ PostList
 ┃ ┃ ┣ PostList.styled.ts
 ┃ ┃ ┗ PostList.tsx
 ┃ ┣ Toast
 ┃ ┃ ┣ Toast.styled.ts
 ┃ ┃ ┗ Toast.tsx
 ┃ ┗ index.ts
 ┣ hooks
 ┃ ┗ ex.txt
 ┣ pages
 ┃ ┣ admin
 ┃ ┃ ┣ AddCategory
 ┃ ┃ ┃ ┗ AddCategory.tsx
 ┃ ┃ ┣ Main
 ┃ ┃ ┃ ┣ Dnd
 ┃ ┃ ┃ ┃ ┣ DraggableUser.tsx
 ┃ ┃ ┃ ┃ ┗ UserSection.tsx
 ┃ ┃ ┃ ┣ AdminMain.styled.ts
 ┃ ┃ ┃ ┗ AdminMain.tsx
 ┃ ┃ ┣ NoAuthPage
 ┃ ┃ ┃ ┗ NoAuthPage.tsx
 ┃ ┃ ┣ PostView
 ┃ ┃ ┃ ┣ PostCard
 ┃ ┃ ┃ ┃ ┣ PostCard.styled.ts
 ┃ ┃ ┃ ┃ ┗ PostCard.tsx
 ┃ ┃ ┃ ┗ AdminPostView.tsx
 ┃ ┃ ┗ WritePost
 ┃ ┃ ┃ ┗ AdminWritePost.tsx
 ┃ ┗ user
 ┃ ┃ ┣ Error
 ┃ ┃ ┃ ┗ ErrorPage.tsx
 ┃ ┃ ┣ FindPassword
 ┃ ┃ ┃ ┗ FindPassword.tsx
 ┃ ┃ ┣ Login
 ┃ ┃ ┃ ┗ Login.tsx
 ┃ ┃ ┣ Main
 ┃ ┃ ┃ ┣ Main.styled.ts
 ┃ ┃ ┃ ┗ Main.tsx
 ┃ ┃ ┣ MyInfo
 ┃ ┃ ┃ ┗ MyInfo.tsx
 ┃ ┃ ┣ PostView
 ┃ ┃ ┃ ┗ PostView.tsx
 ┃ ┃ ┣ Register
 ┃ ┃ ┃ ┗ RegisterPage.tsx
 ┃ ┃ ┣ ResetPassword
 ┃ ┃ ┃ ┗ ResetPassword.tsx
 ┃ ┃ ┗ WritePost
 ┃ ┃ ┃ ┣ WritePost.styled.ts
 ┃ ┃ ┃ ┗ WritePost.tsx
 ┣ routes
 ┃ ┣ apiRoutes.ts
 ┃ ┣ privateRoutes.tsx
 ┃ ┗ routes.tsx
 ┣ stores
 ┃ ┣ store.ts
 ┃ ┣ useCategoryStore.ts
 ┃ ┣ useCheckDuplication.ts
 ┃ ┣ usePostStore.ts
 ┃ ┗ userStore.ts
 ┣ styles
 ┃ ┣ Authentication
 ┃ ┃ ┗ Authentication.styled.ts
 ┃ ┗ Globalstyles.ts
 ┣ types
 ┃ ┣ button.ts
 ┃ ┣ input.ts
 ┃ ┣ post.ts
 ┃ ┗ user.ts
 ┣ utils
 ┃ ┣ apiUtils.ts
 ┃ ┣ dndUtils.ts
 ┃ ┣ editDeleteUtils.ts
 ┃ ┣ RegEx.ts
 ┃ ┗ ToastUtils.ts
 ┣ App.tsx
 ┣ image.d.ts
 ┗ index.tsx

```

## 📋작업 및 역할 분담

<img src="https://github.com/user-attachments/assets/df9750a8-cfa4-46ae-87f6-dcca119fa22b" /> 
<br/>
<br/>

## 🛠기술 스택

### Frotend
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white">

<br/>

### Backend
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javaScript&logoColor=white">


<br/>


<br/>

## 🎬 시연 영상

[시연 영상](https://www.youtube.com/watch?v=wGmRV-elPxM)

