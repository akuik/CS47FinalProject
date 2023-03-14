export class Event {
  constructor() {
    this.title = ""; // string
    this.date = ""; // eg. (Wed, Mar 15, 2023)
    this.time = ""; // eg. (7:00 PM) (issue: 'Need to set to local timezone') - maybe store as int
    this.location = ""; // string (issue: 'Private Location (sign in to display))
    this.description = ""; // string (potentially remove)
    this.image = ""; // url to the image
    this.urlsrc = ""; // url to the source of the event
    this.tags = []; // array of strings
    this.tokens = 0;
  }
}
