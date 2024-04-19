function BinarySearch() {
  let array = []; // Array to store sorted elements

  // Private function to perform binary search recursively
  function binarySearchRecursive(start, end, target) {
    if (start > end) {
      return -1; // Element not found
    }

    const mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return mid; // Element found at index mid
    } else if (array[mid] < target) {
      return binarySearchRecursive(mid + 1, end, target); // Search in the right half
    } else {
      return binarySearchRecursive(start, mid - 1, target); // Search in the left half
    }
  }

  // Public method to add elements to the sorted array
  function addElement(element) {
    array.push(element);
    array.sort((a, b) => a - b); // Sort the array after adding a new element
  }

  // Public method to search for an element using binary search
  function searchElement(target) {
    return binarySearchRecursive(0, array.length - 1, target);
  }

  // Return an object with public methods
  return {
    addElement,
    searchElement,
  };
}

export default BinarySearch;
