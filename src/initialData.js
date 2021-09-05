const initialData = {

    cats: {
        "cat-1": { id: "cat-1", title: "furry freak", link: "https://cdn2.thecatapi.com/images/f2.jpg" },
        "cat-2": { id: "cat-2", title: "nice cat", link: "https://cdn2.thecatapi.com/images/bhl.jpg" },
        "cat-3": { id: "cat-3", title: "sweet beast", link: "https://cdn2.thecatapi.com/images/e0i.jpg" },
        "cat-4": { id: "cat-4", title: "crazy monster", link: "https://cdn2.thecatapi.com/images/YTWh7RBvd.jpg" },
    },

    columns: {
        "column-1": {
            id: "column-1",
            title: "Meow",
            catIds: ["cat-1", "cat-2", "cat-3", "cat-4"],
        },
    },
    columnOrder: ['column-1'],
}

export default initialData;   
   
  