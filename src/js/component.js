class Component {
  constructor(parent, children) {
    // parent는 element 여야함
    // children도
    this.parent = parent;
    this.children = children;
  }

  render() {
    if (typeof children === 'string') {
      this.parent.textContent = this.children;
    } else {
      this.parent.innerHTML = this.children;
    }
  }
}

export default Component;
