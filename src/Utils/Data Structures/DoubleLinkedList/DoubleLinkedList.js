const DoubleLinkedListNode = (value, prev = null, next = null) => {
  return {
    value,
    prev: prev,
    next: next,
  };
};

const DoubleLinkedList = () => {
  let head = null;
  let tail = null;

  const append = () => {};
};

export { DoubleLinkedList, DoubleLinkedListNode };
