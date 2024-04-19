import hasCycle from "./CyclicLinkedList";
import { LinkedList, LinkedListNode } from "../LinkedList/LinkedList";

test("(Using Node) Non Cyclick linked list should return false", () => {
  const node4 = LinkedListNode(-4, null);
  const node3 = LinkedListNode(0, node4);
  const node2 = LinkedListNode(2, node3);
  const node1 = LinkedListNode(3, node2);
  expect(hasCycle(node1)).toBe(false);
});

test("(Using Node) Cyclick linked list should return true", () => {
  const node4 = LinkedListNode(-4, null);
  const node3 = LinkedListNode(0, node4);
  const node2 = LinkedListNode(2, node3);
  const node1 = LinkedListNode(3, node2);
  node4.next = node2;
  expect(hasCycle(node1)).toBe(true);
});

test("(Using Linked List) Non Cyclick linked list should return false", () => {
  let list = LinkedList();
  list.fromArray([1, 2, 3, 4, 5, 6]);
  expect(hasCycle(list.getHead())).toBe(false);
});

test("(Using Linked List) Cyclick linked list should return true", () => {
  let list = LinkedList();
  list.fromArray([1, 2, 3, 4, 5, 6]);
  list.getTail().next = list.getHead().next.next;
  expect(hasCycle(list.getHead())).toBe(true);
});
