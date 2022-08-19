class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
var removeNthFromEnd = function (head, n) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  arr.splice(-n, 1);
  head = null;
  for (let j = arr.length - 1; j >= 0; j--) {
    head = new Node(arr[j], head);
  }
  return head;
};
