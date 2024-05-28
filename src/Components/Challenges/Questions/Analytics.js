/*
Our company switches to data driven product development.
To make this initiative work we need to design a reusable function capable of
collecting and delivering UI analytics to the backend server.

To get you started we created a small snippet of code which should explain
how we intend to use that API function.
*/
/*
Notes

Functional Req

1. UI view needs a mechanism to emit events for analytics.
2. UI can emits events any time through out the customer experience.
3. mechanism - sendAnalyticsEvent()
4. 
*/

/*
Tech Tasks
1. mapper ---> data --map-> event
2. Analytics Factory


*/

class Component {
  constructor(event) {
    // this is where the function could be called for example
    sendAnalyticsEvent(event);
    setTimeout(this.init, 100);
  }

  init(event) {
    sendAnalyticsEvent(event);
  }
}

//Your goal is to implement the sendAnalyticsEvent(event) API function.

const sendAnalyticsEvent = (event) => {
  // TODO: add your code here
  // example event
  // {
  // "type": "pageView",
  // "data": {
  //   "userId": "abc123"
  // }
  // what needs to be done - send the event to the BE services
};

// eventual

// 7 capacity 10

/*
  Triger of publishing events
  1. regular publishing of events - interval
  2. consumer publishing from the consumer
  */

class AnalyticsFactory {
  constructor(delay) {
    this.events = [];
    this.pendingQueue = [];
    this.isPublishing = false;
    // setInterval(this.publishEvents, delay);
  }

  // potenial benifits = source: "trello/jira",
  eventMapFrom(type, data) {
    return {
      type,
      data,
    };
  }

  doPublish(events) {
    // give event to actual BE service
    return new Promise((resolve, reject) => {
      return resolve({
        ok: true,
        json: () => Promise.resolve({}),
      });
    });
  }

  // explicity called via consumer
  publishEvents() {
    console.log("publishing started !!!");
    this.isPublishing = true;
    return this.doPublish(this.events)
      .then((res) => {
        this.events = this.pendingQueue;
        this.pendingQueue = [];
        console.log("publishing completed");
      })
      .catch((err) => {
        console.log("publishing failed");
        console.log("error from server", err);
      })
      .finally(() => {
        this.isPublishing = false;
        this.events.add(this.pendingQueue);
        this.pendingQueue = [];
      });
  }

  registerAnalyticsEventToBeSent(event) {
    if (this.isPublishing) this.pendingQueue.push(event);
    else this.events.push(event);
    console.log("event got saved, will be send later which batch");
  }
}

const analyticsFactory = new AnalyticsFactory(3000);
const event1 = analyticsFactory.eventMapFrom("", "");
analyticsFactory.registerAnalyticsEventToBeSent(event1);
const event2 = analyticsFactory.eventMapFrom("", "");
analyticsFactory.registerAnalyticsEventToBeSent(event2);

// // she click on cart btn
// analyticsFactory.publishEvents();

// When using an API, you would need to POST those analytics events down to the backend. To get you started weâ€™ve developed a simple mock
// template of the server API. Feel free to change this implementation.

// Server returns 200 HTTP code and empty response when API worked fine.
