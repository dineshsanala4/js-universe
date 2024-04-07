const Node = (value) => {
  return {
    value,
    next: null,
  };
};

const LinkedList = () => {
  let head = null;
  let tail = null;

  // Complexity: O(1)
  const prepend = (value) => {
    const newNode = Node(value);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
  };

  // Complexity: O(1)
  const append = (value) => {
    const newNode = Node(value);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  };

  // Complexity: O(n)
  const insertAt = (value, position) => {
    if (position <= 1) {
      prepend(value);
      return;
    }

    const newNode = Node(value);
    let current = head;
    let prev = null;
    let count = 1;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    prev.next = newNode;
    newNode.next = current;

    if (!current) {
      tail = newNode;
    }
  };

  // Complexity: O(1)
  const deleteAtStart = () => {
    if (!head) {
      return;
    }

    head = head.next;
    if (!head) {
      tail = null;
    }
  };

  // Complexity: O(n)
  const deleteAtEnd = () => {
    if (!head) {
      return;
    }

    if (head === tail) {
      head = null;
      tail = null;
      return;
    }

    let current = head;
    while (current.next !== tail) {
      current = current.next;
    }
    current.next = null;
    tail = current;
  };

  // Complexity: O(n)
  const deleteAtPosition = (position) => {
    if (position <= 1) {
      deleteAtStart();
      return;
    }

    let current = head;
    let prev = null;
    let count = 1;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    if (!current) {
      return;
    }

    prev.next = current.next;
    if (!prev.next) {
      tail = prev;
    }
  };

  // Complexity: O(n)
  const print = () => {
    let current = head;
    const values = [];
    while (current) {
      values.push(
        typeof current.value === "object"
          ? JSON.stringify(current.value)
          : current.value
      );
      current = current.next;
    }
    console.log(values.join(" -> "));
  };

  // Complexity: O(n)
  const search = (value) => {
    let current = head;
    let position = 1;
    while (current) {
      if (current.value === value) {
        return { found: true, position };
      }
      current = current.next;
      position++;
    }
    return { found: false, position: -1 };
  };

  // Complexity: O(n)
  const sort = () => {
    const array = toArray();
    array.sort((a, b) => a - b);
    const sortedList = fromArray(array);
    head = sortedList.head;
    tail = sortedList.tail;
  };

  // Complexity: O(n)
  const toArray = () => {
    let current = head;
    const array = [];
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  };

  // Complexity: O(n)
  const fromArray = (arr) => {
    arr.map((item) => {
      append(item);
    });
  };

  return {
    prepend,
    insertAt,
    append,
    deleteAtStart,
    deleteAtEnd,
    deleteAtPosition,
    fromArray,
    toArray,
    search,
    sort,
    print,
  };
};

export default LinkedList;

// Notes :-

// Compared to Arrays, Adding & Removing items in Linked Lists is O(1)
// Therfore when there is dynamic data where so many updates are happening on the data,
// In such cases linked lists are preferred over arrays
// For normal data where not so many changes are happening, Arrays can be preffered
