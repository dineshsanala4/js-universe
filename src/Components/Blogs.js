import { useEffect, useRef } from "react";
import {
  LinkedList,
  LinkedListNode,
} from "../Utils/Data Structures/LinkedList/LinkedList";
import hasCycle from "../Utils/Data Structures/Examples/CyclicLinkedList";
import checkValidString from "../Utils/Data Structures/Examples/BalanceBraces";

function Blogs({ blogs }) {
  const blogsContainerRef = useRef(null);

  const setIntersectionObserver = (blogElements) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            const img = entry.target.querySelector("img[data-src]");
            if (img) {
              img.src = img.getAttribute("data-src");
              img.removeAttribute("data-src");
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    blogElements.forEach((blogElement) => {
      observer.observe(blogElement);
    });

    return () => {
      blogElements.forEach((blogElement) => {
        observer.unobserve(blogElement);
      });
    };
  };

  useEffect(() => {
    const blogElements =
      blogsContainerRef.current.querySelectorAll(".blog-item");

    setIntersectionObserver(blogElements);
  }, [blogs]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  if (blogs) {
    let list = LinkedList();
    list.fromArray(blogs);
    list.print();

    // Cyclic Linked Lists

    const node4 = LinkedListNode(-4, null);
    const node3 = LinkedListNode(0, node4);
    const node2 = LinkedListNode(2, node3);
    const node1 = LinkedListNode(3, node2);
    node4.next = node2;
    console.log(hasCycle(node1));

    // Valid Braces

    console.log(checkValidString("()"));
  }

  return (
    <>
      <h1 className="ml-6 mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Blogs
      </h1>
      <div className="flex gap-2 max-w-6xl flex-wrap" ref={blogsContainerRef}>
        {blogs &&
          blogs.map((blog, index) => {
            return (
              <div
                key={index}
                className="blog-item min-w-[220px] min-h-[100px] border-black border rounded p-4 m-5 cursor-pointer"
              >
                <img
                  alt="Article"
                  src={
                    isElementInViewport(blogsContainerRef.current)
                      ? blog.image
                      : ""
                  }
                  data-src={blog.image}
                  className="w-[190px] h-[150px]"
                />
                <h1>{blog.title}</h1>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Blogs;
