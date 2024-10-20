// mockEventService.js
const STORAGE_KEY = 'MOCK_EVENTS';

// Initialize with some dummy data
const initialEvents = [
    {
        title: "An Apple Event",
        image: "https://www.apple.com/v/apple-events/home/ae/images/meta/overview__bcphzsdb4fpu_og.png?202404240337",
        date: "2024-05-30",
        description: "This is an apple event",
        id: "1c7260e5-948d-4902-8b8d-5114e459942a"
    },
    {
        title: "The Event",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png",
        date: "2024-05-07",
        description: "This is a test event",
        id: "b39881dc-6b2e-4db8-a095-7ecabc909a11"
    },
    {
        title: "Annual Meet",
        image: "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
        date: "2023-02-22",
        description: "Join this amazing event and connect with fellow developers.",
        id: "e1"
    }
];

// Initialize localStorage with dummy data if empty
if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));
}

// Validation functions
const isValidText = (text) => text && text.trim().length > 0;
const isValidDate = (date) => date && new Date(date).toString() !== 'Invalid Date';
const isValidImageUrl = (url) => url && url.startsWith('http');

// Mock API functions
export const mockEventApi = {
  // GET all events
  getAllEvents: async () => {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    const events = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { events };
  },

  // GET single event
  getEvent: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const events = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const event = events.find(e => e.id === id);
    if (!event) throw new Error('Event not found');
    return { event };
  },

  // POST new event
  addEvent: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Validation
    const errors = {};
    if (!isValidText(data.title)) errors.title = 'Invalid title.';
    if (!isValidText(data.description)) errors.description = 'Invalid description.';
    if (!isValidDate(data.date)) errors.date = 'Invalid date.';
    if (!isValidImageUrl(data.image)) errors.image = 'Invalid image.';

    if (Object.keys(errors).length > 0) {
      throw { 
        status: 422, 
        message: 'Adding the event failed due to validation errors.',
        errors 
      };
    }

    const events = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const newEvent = { ...data, id: Math.random().toString(36).substr(2, 9) };
    events.push(newEvent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    
    return { message: 'Event saved.', event: newEvent };
  },

  // PATCH existing event
  updateEvent: async (id, data) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Validation
    const errors = {};
    if (!isValidText(data.title)) errors.title = 'Invalid title.';
    if (!isValidText(data.description)) errors.description = 'Invalid description.';
    if (!isValidDate(data.date)) errors.date = 'Invalid date.';
    if (!isValidImageUrl(data.image)) errors.image = 'Invalid image.';

    if (Object.keys(errors).length > 0) {
      throw { 
        status: 422, 
        message: 'Updating the event failed due to validation errors.',
        errors 
      };
    }

    const events = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const eventIndex = events.findIndex(e => e.id === id);
    if (eventIndex === -1) throw new Error('Event not found');
    
    events[eventIndex] = { ...data, id };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    
    return { message: 'Event updated.', event: events[eventIndex] };
  },

  // DELETE event
  deleteEvent: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const events = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const filteredEvents = events.filter(e => e.id !== id);
    if (filteredEvents.length === events.length) throw new Error('Event not found');
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredEvents));
    return { message: 'Event deleted.' };
  }
};