# 코드유니콘

### 진행 기간 : 22.05.09 ~ 22.07.15

## ✅ 프로젝트 소개

<p align="center">
<img src="https://user-images.githubusercontent.com/60283977/179400500-72f23f66-907a-4796-89be-c6f94d8121cf.png">
</p>
<p align="center">
<strong>⭐️  무료 온라인 강의 사이트 ⭐️</strong>
</p>

<h3 align="center"><b>🛠 Tech Stack 🛠</b></h3>
</br>
<p align="center">
<img src="https://img.shields.io/badge/HTML5-rgb(255, 128, 0)?style=flat&logo=html5&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/CSS3-rgb(21, 114, 182)?style=flat&logo=CSS3&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/JavaScript-rgb(247, 223, 30)?style=flat&logo=JavaScript&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/React-rgb(97,218,215)?style=flat&logo=JavaScript&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/TypeScript-rgb(49,120,198)?style=flat&logo=TypeScript&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/Next.js-rgb(0,0,0)?style=flat&logo=Next.js&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/Redux-rgb(118,74,188)?style=flat&logo=Redux&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/styled-components-rgb(219,112,147)?style=flat&logo=styled-components&logoColor=white"/> &nbsp
</p>
<h3 align="center"><b>배포 URL</b></h3>
<p align="center"><strong>https://codeunicorn.kr</strong></p>
</br>

## ✅ 프로젝트 구조

| **모듈**       | **설명**                                    |
| -------------- | ------------------------------------------- |
| **Components** | 모든 컴포넌트를 관리하는 디렉토리           |
| **Pages**      | 라우팅 기능을 담당하는 디렉토리             |
| **Core**       | API 모듈을 관리하는 디렉토리                |
| **Slices**     | 리덕스 모듈을 관리하는 디렉토리             |
| **Interface**  | 재사용 가능한 interface를 관리하는 디렉토리 |
| **Config**     | SEO 등 설정 관련 모듈을 관리하는 디렉토리   |

## ✅ 프로젝트 주요 기능

### ⭐️ 메인 페이지

![스크린샷 2022-07-19 오후 5 18 18](https://user-images.githubusercontent.com/60283977/179702376-1f3da175-95a1-476e-b253-a07817ab03bd.png)

- 베너에서 신규 강의를 보여줍니다.
- 카테고리를 선택하여 다양한 강의를 볼 수 있습니다.
- 추천 강의를 보여줍니다.
- 검색을 통해 원하는 강의를 찾을 수 있습니다.
  </br>

### ⭐️ 회원가입, 로그인

![회원가입,로그인](https://user-images.githubusercontent.com/60283977/179707800-00388cf4-c295-47e3-8948-82385aa1a9a0.gif)

- 소셜 로그인을 통해서 회원가입, 로그인 할 수 있습니다.
  </br>

### ⭐️ 전체 강의 조회

![전체강의](https://user-images.githubusercontent.com/60283977/179713323-f2433965-c388-4a87-b434-a84d7be52f3e.gif)

- 카테고리별 전체 강의를 볼 수 있습니다.
  </br>

### ⭐️ 강의 검색

![강의검색](https://user-images.githubusercontent.com/60283977/179714448-a97157af-d0fd-43ac-afaf-62f9724cef3a.gif)

- 원하는 강의를 검색할 수 있습니다.
- 공백 입력 후 검색시 모든 강의를 보여줍니다.
  </br>

### ⭐️ 유저 프로필 수정

![프로필수정](https://user-images.githubusercontent.com/60283977/179709762-372e6527-cfeb-4781-846e-b7f2d6d06a19.gif)

- 프로필 이미지 및 닉네임을 변경할 수 있습니다.
  </br>

### ⭐️ 관심 교육 등록 및 강의 수강

![관심및강의수강](https://user-images.githubusercontent.com/60283977/179712438-ba5d66c6-7b15-40d4-b490-445a4690a285.gif)

- 유저는 로그인 후 마음에 드는 강의를 관심 교육으로 등록할 수 있습니다.
- 유저는 로그인 후 강의를 수강할 수 있습니다.
- 유저는 마이페이지에서 관심 교육, 보고 있는 교육 목록을 확인 할 수 있습니다.
  </br>

## ❗️ 프로젝트 이슈

### 1. Maximum update depth exceeded

https://www.notion.so/Maximum-update-depth-exceeded-93b94c9fdedd465986186a784f2616e4#ae9d56bbef65406eb38acd2583f4d7fe

### 2. 새로고침시 redux의 상태를 유지하지 못하는 이슈

https://rigorous-nutmeg-f1f.notion.site/Store-80b9e8e8a2734838a935ee65dbeba378

## ✅ 프로젝트 UI

![스크린샷 2022-07-19 오후 5 08 35](https://user-images.githubusercontent.com/60283977/179700472-c9abfd2a-9ca9-401b-a720-f634f5802ed4.png)

## ✅ 프로젝트 시연 영상

🔗 (링크 추가 예정)

## ✅ 프로젝트 회고

### ⭐️ 1. 개선하고 싶은 부분

1. <strong>토스트 메시지 컴포넌트 보완</strong>
   - <strong>개선 방향 : </strong>현재 토스트 메시지 컴포넌트는 state로 message만 가지고 있다. 만약 message뿐만 아니라 type, color, time과 같은 state를 추가해준다면, 타입 or 중요도에 따른 토스트 메시지의 색상, 보여지는 시간을 지정할 수 있어서 UX에 긍정적인 영향을 줄 수 있다고 생각한다.
2. <strong>불필요한 리렌더링이 발생하는 컴포넌트 성능 최적화</strong>
   - <strong>개선 방향 : </strong>현재 강의 시청 페이지에서 커리큘럼 변경 시 전체 페이지가 리렌더링 되는 등의 불필요한 리렌더링이 발생하는 컴포넌트들을 찾아서 컴포넌트를 분리하고, state, props가 변경되지 않는다면 리렌더링이 발생되지 않도록 성능 최적화를 진행하고 싶다.</strong>
3. <strong>기능 추가</strong>
   - <strong>개선 방향 : </strong>정해진 기간 안에 빠르게 MVP 기능만을 선정하여 개발했기 떄문에 프로젝트를 진행하면서 추가하면 좋을 것 같은 기능들을 따로 정리해놨는데, 추후에 시간적인 여유가 생긴다면 더 좋은 서비스를 제공하기 위해 리뷰, 강의를 들으면서 내용을 정리할 수 있는 메모장 등의 기능을 추가해보고 싶다.

---

### ⭐️ 2. 프로젝트를 진행하면서 느낀점

1. <strong>재사용 가능한 컴포넌트 정리</strong>
   https://rigorous-nutmeg-f1f.notion.site/7b85682001834dabacb29b024f168166

2. <strong>props 통한 값 전달 방식에 대한 고민</strong>
   https://rigorous-nutmeg-f1f.notion.site/props-9196a9fac23a4cc7b3c62ce9b380fd5d

3. <strong>상태관리 라이브러리의 필요성 및 선택</strong>
   https://rigorous-nutmeg-f1f.notion.site/dc39d83392be4e49aad80b519f368300

4. <strong>CSR, SSR, SSG 적용 고민</strong>
   https://rigorous-nutmeg-f1f.notion.site/CSR-SSR-SSG-05d7f8be1c494663ac57845414420538

5. <strong>SEO 최적화를 위한 고민</strong>
   https://rigorous-nutmeg-f1f.notion.siteSEO-3e5e7f1a9a0143d39bed4da358e7a9c0

6. <strong>이미지 최적화에 대한 고민</strong>
   https://www.notion.so/Next-Image-Optimization-f73e5b9216bb42f09c89e1bc8128660b#13ddba1f09c144078cc4925ee9ee410d

## ✅ 프로젝트 버전 기록

<strong>배포 후에도 추가 기능 및 발생하는 이슈에 대한 버전관리를 진행하고 있습니다.</strong>

![스크린샷 2022-07-20 오후 3 27 42](https://user-images.githubusercontent.com/60283977/179912072-a731cbc0-e160-4837-b024-433d08da5b28.png)
