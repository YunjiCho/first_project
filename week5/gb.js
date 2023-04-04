import GbItem from "./item.js";

//guestbook 항목 관리 모듈 정의
const gbList = {
  items: [],

  //새로운 항목 추가하는 메소드
  add(title, todayDate) {
    const item = new GbItem(title, todayDate);
    this.items.push(item);
    this.save();
    return item;
  },

  // 항목을 삭제하는 메소드
  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.save();
    }
  },

  // 항목의 완료 여부를 토글하는 메소드
  toggleComplete(item) {
    item.toggleComplete();
    this.save();
  },

  save() {
    // console.log(this.items);
    // console.log(JSON.stringify(this.items));
    localStorage.setItem("gbList", JSON.stringify(this.items));
  },
  load() {
    const items = localStorage.getItem("gbList");
    if (items) {
      this.items = JSON.parse(items);
    }
  },
};
export { gbList };
