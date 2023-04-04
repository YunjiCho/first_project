import { gbList } from "./gb.js";

//UI 모듈 정의하기
const app = {
  gbList: document.getElementById("gbList"), // 방명록 항목 리스트 엘리먼트
  form: document.querySelector("form"), // 방명록 항목 입력 폼 엘리먼트
  titleInput: document.getElementById("title"), // 할 말 제목 입력 필드 엘리먼트
  todayDateInput: document.getElementById("todayDate"), // 오늘 날짜 입력 필드 엘리먼트

  // To-Do 항목을 렌더링하는 메소드
  renderItem(item) {
    const li = document.createElement("li"); // 방명록 항목을 표시하는 li 엘리먼트 생성
    if (item.completed) {
      // 항목이 완료되었는지 여부에 따라 CSS 클래스 추가
      li.classList.add("completed");
    }

    const titleText = document.createElement("div"); // 할 말 제목을 표시하는 div 엘리먼트 생성
    titleText.textContent = `${item.title} - ${item.todayDate}`; // 할 말 제목과 오늘 날짜를 텍스트로 설정
    titleText.classList.add("title"); // CSS 클래스 추가

    const toggleBtn = document.createElement("button"); // 완료 여부를 토글하는 버튼 엘리먼트 생성
    toggleBtn.textContent = "♡"; //텍스트 설정
    toggleBtn.addEventListener("click", () => {
      // 클릭 이벤트 핸들러 등록
      // 클릭 이벤트 핸들러 등록
      if (toggleBtn.textContent === "♡") {
        toggleBtn.textContent = "♥";
        item.completed = true;
      } else {
        toggleBtn.textContent = "♡";
        item.completed = false;
      }
      gbList.toggleComplete(item); // 항목의 완료 여부를 토글
      this.renderList(); // To-Do 항목 리스트 렌더링

      gbList.save(); // 로컬 스토리지에 방명록 항목 리스트 저장
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = " "; // 텍스트 설정
    removeBtn.addEventListener("click", () => {
      // 클릭 이벤트 핸들러 등록
      gbList.remove(item); //항목 삭제- 이 방명록리스트는 맨 윗줄의 gb.js의 방명록리스트 가져온 것
      this.renderList(); // 방명록 항목 리스트 렌더링
    });

    li.appendChild(toggleBtn); // li 엘리먼트에 toggleBtn 엘리먼트 추가
    li.appendChild(removeBtn); // li 엘리먼트에 removeBtn 엘리먼트 추가
    li.appendChild(titleText); // li 엘리먼트에 titleText 엘리먼트 추가
    this.gbList.appendChild(li); // 방명록 항목 리스트 엘리먼트에 li 엘리먼트 추가- 이 방명록은 자기 자신의 객체
  },

  // To-Do 항목 리스트를 렌더링하는 메소드
  renderList() {
    this.gbList.innerHTML = ""; // 기존 방명록 항목 리스트 엘리먼트 내용 삭제
    gbList.items.forEach((item) => {
      this.renderItem(item); // 방명록 항목 리스트를 순회하면서 항목을 렌더링
    });
  },

  //초기화 메소드
  init() {
    gbList.load(); // 로컬 스토리지에서 방명록 항목 리스트 불러오기
    this.renderList(); // 방명록 항목 리스트 렌더링

    this.form.addEventListener("submit", (event) => {
      // 폼 제출 이벤트 핸들러 등록
      event.preventDefault(); // 기본 동작 취소
      const title = this.titleInput.value; // 입력된 할말 제목
      const todayDate = this.todayDateInput.value; //입력된 오늘 날짜

      if (title && todayDate) {
        // 할말과 오늘날짜가 모두 입력됐는지 확인
        const item = gbList.add(title, todayDate); //gb리스트에 항목 추가
        this.renderItem(item); //추가된 항목 렌더링
        this.titleInput.value = ""; // 입력 필드 초기화
        this.todayDateInput.value = ""; // 입력 필드 초기화
      }
    });
  },
};

app.init(); // UI 모듈 초기화
