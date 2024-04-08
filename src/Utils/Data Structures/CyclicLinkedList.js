// Floyd's Cycle Detection Algorithm,
// also known as the "tortoise and hare" algorithm

const hasCycle = (head) => {
  if (!head || !head.next) {
    return false; // No cycle if there are less than 2 nodes
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false; // Reached end of list, no cycle
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true; // Cycle detected
};

export default hasCycle;
