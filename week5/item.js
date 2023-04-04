class GbItem {
  constructor(title, todayDate) {
    this.title = title;
    this.todayDate = todayDate;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}

export default GbItem;
