import "./Challenges.css";

function Challenges() {
  return (
    <>
      <div className="challenges-container">
        <div className="heading-text">Challenging Coding Questions:</div>
        <div className="question">
          1. Difference between thread and process?
        </div>
        <div className="answer">
          <p>
            A thread and a process are both fundamental concepts in operating
            systems and concurrent programming, but they serve different
            purposes and have distinct characteristics. Here's a comparison
            between threads and processes:
          </p>

          <p>Definition:</p>

          <p>
            Process: A process is an independent unit of execution in an
            operating system. It has its own memory space, resources, and state.
            Thread: A thread is a subset of a process. It represents a single
            sequence of execution within the process. Multiple threads within
            the same process share the same memory space and resources. Memory
            and Resources:
          </p>

          <p>
            Process: Each process has its own memory space, including code,
            data, and stack. Processes do not share memory unless explicitly
            designed to do so (e.g., using inter-process communication
            mechanisms). Thread: Threads within the same process share the same
            memory space. They can access shared data directly, which can lead
            to synchronization issues if not managed properly. Creation
            Overhead:
          </p>

          <p>
            Process: Creating a new process typically incurs higher overhead
            compared to creating a thread. This is because a new process
            requires separate memory allocation, initialization of resources,
            and context switching. Thread: Creating a new thread within an
            existing process is faster and requires less overhead because it
            shares resources with the parent process. Communication and
            Synchronization:
          </p>

          <p>
            Process: Processes communicate with each other using inter-process
            communication (IPC) mechanisms such as pipes, sockets, shared
            memory, or message queues. Synchronization between processes often
            involves more overhead due to the need for IPC. Thread: Threads
            within the same process communicate directly through shared memory.
            Synchronization between threads is typically faster and more
            efficient than between processes, but it requires careful management
            to avoid race conditions and other concurrency issues. Parallelism:
          </p>

          <p>
            Process: Processes can run in parallel on multi-core systems because
            each process has its own memory space and resources. Parallelism
            between processes is achieved by the operating system scheduler.
            Thread: Threads within the same process can run concurrently on
            multi-core systems, utilizing parallelism within the process.
            However, the degree of parallelism depends on the number of
            available cores and the design of the program (e.g., parallelism can
            be limited by synchronization points). Fault Isolation:
          </p>

          <p>
            Process: Processes provide better fault isolation because a failure
            in one process (e.g., a segmentation fault) does not directly affect
            other processes. Thread: Threads within the same process share the
            same memory space, so a fault in one thread can potentially corrupt
            data or affect the execution of other threads in the same process.
            In summary, processes provide stronger isolation and can run in
            parallel on multi-core systems but incur higher overhead, while
            threads within a process share memory and resources, making
            communication and synchronization more efficient but requiring
            careful management of concurrency issues. The choice between using
            processes or threads depends on the specific requirements and design
            considerations of the application.
          </p>
        </div>

        <div className="question">
          2. What happens in js with this code var b = [1, 2][3, 4];
        </div>
      </div>
    </>
  );
}

export default Challenges;
