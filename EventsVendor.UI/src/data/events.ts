const events = [
  {
    id: 1,
    name: "Concert at the Park",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "An outdoor concert featuring local bands.",
    location: "Central Park, NY",
    date: "2024-09-15",
    availableTickets: 100,
    price: 50.0,
  },
  {
    id: 2,
    name: "Art Gallery Opening",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "A grand opening of a modern art gallery.",
    location: "Downtown LA, CA",
    date: "2024-09-20",
    availableTickets: 50,
    price: 25.0,
  },
  {
    id: 3,
    name: "Food Festival",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "A festival showcasing diverse culinary experiences.",
    location: "San Francisco, CA",
    date: "2024-10-05",
    availableTickets: 200,
    price: 30.0,
  },
  {
    id: 4,
    name: "Tech Conference",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Annual conference featuring the latest in technology.",
    location: "Silicon Valley, CA",
    date: "2024-10-10",
    availableTickets: 300,
    price: 150.0,
  },
  {
    id: 5,
    name: "Jazz Night",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "An evening of smooth jazz music.",
    location: "New Orleans, LA",
    date: "2024-09-25",
    availableTickets: 75,
    price: 40.0,
  },
  {
    id: 6,
    name: "Film Screening",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Exclusive screening of an independent film.",
    location: "Austin, TX",
    date: "2024-10-18",
    availableTickets: 120,
    price: 20.0,
  },
  {
    id: 7,
    name: "Mountain Hike",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Guided hike through the scenic mountains.",
    location: "Boulder, CO",
    date: "2024-09-30",
    availableTickets: 30,
    price: 60.0,
  },
  {
    id: 8,
    name: "Yoga Retreat",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "A weekend retreat focused on mindfulness and yoga.",
    location: "Sedona, AZ",
    date: "2024-10-12",
    availableTickets: 25,
    price: 200.0,
  },
  {
    id: 9,
    name: "Cooking Workshop",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Hands-on cooking class with a professional chef.",
    location: "Chicago, IL",
    date: "2024-09-28",
    availableTickets: 15,
    price: 80.0,
  },
  {
    id: 10,
    name: "Book Fair",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Annual book fair featuring local and international authors.",
    location: "Boston, MA",
    date: "2024-10-01",
    availableTickets: 500,
    price: 10.0,
  },
  {
    id: 11,
    name: "Charity Run",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "5K charity run for a good cause.",
    location: "Miami, FL",
    date: "2024-09-22",
    availableTickets: 400,
    price: 35.0,
  },
  {
    id: 12,
    name: "Live Theater",
    imageUrl:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "A live performance of a classic play.",
    location: "Seattle, WA",
    date: "2024-10-07",
    availableTickets: 60,
    price: 70.0,
  },
];
export default events;
