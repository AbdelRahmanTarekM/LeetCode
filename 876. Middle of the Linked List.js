/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (head == null) return null;
  let fastNode = head;
  let mid = 0;
  while (fastNode && fastNode.next) {
    mid++;
    fastNode = fastNode.next.next;
  }
  while (mid > 0) {
    head = head.next;
    mid--;
  }
  return head;
};
