function Graph() {
  const nodes = new Map();

  function addNode(nodeValue) {
    if (!nodes.has(nodeValue)) {
      nodes.set(nodeValue, new Set());
    }
  }

  function addEdge(fromNode, toNode) {
    if (!nodes.has(fromNode)) {
      addNode(fromNode);
    }
    if (!nodes.has(toNode)) {
      addNode(toNode);
    }
    nodes.get(fromNode).add(toNode);
    nodes.get(toNode).add(fromNode); // For undirected graphs
  }

  function removeNode(nodeValue) {
    if (nodes.has(nodeValue)) {
      nodes.delete(nodeValue);
      for (const adjacentNode of nodes.values()) {
        adjacentNode.delete(nodeValue);
      }
    }
  }

  function removeEdge(fromNode, toNode) {
    if (nodes.has(fromNode) && nodes.has(toNode)) {
      nodes.get(fromNode).delete(toNode);
      nodes.get(toNode).delete(fromNode); // For undirected graphs
    }
  }

  function getAdjacentNodes(nodeValue) {
    if (nodes.has(nodeValue)) {
      return Array.from(nodes.get(nodeValue));
    }
    return [];
  }

  function getAllNodes() {
    return Array.from(nodes.keys());
  }

  return {
    addNode,
    addEdge,
    removeNode,
    removeEdge,
    getAdjacentNodes,
    getAllNodes,
  };
}

export default Graph;
