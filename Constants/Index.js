export const Colors = ["#ff6961", "#77dd77", "#aec6cf", "#f49ac2", "#f49ac2"];

function colorCode() {
  var colorNum = Math.floor(Math.random() * 5);
  return Colors[colorNum];
}

function formatDate(date) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const currentDate = date;
    const day = currentDate.getDate();
    const monthName = months[currentDate.getMonth()];

    return `${day} ${monthName}`;
}

export const Notes = [
  {
    id: 1,
    title: "Note 1",
    content: "This is the first note",
    formatedDate: formatDate(new Date()),
    author: "Author 1",
    color: colorCode(),
  },
  {
    id: 2,
    title: "Note 2",
    content: "This is the second note",
    date: new Date(),
    formatedDate: formatDate(new Date()),
    author: "Author 2",
    color: colorCode(),
  },
  {
    id: 3,
    title: "Note 3",
    content: "This is the third note",
    date: new Date(),
    formatedDate: formatDate(new Date()),
    author: "Author 3",
    color: colorCode(),
  },
  {
    id: 4,
    title: "Note 4",
    content: "This is the fourth note",
    formatedDate: formatDate(new Date()),
    author: "Author 4",
    color: colorCode(),
  },
  {
    id: 5,
    title: "Note 5",
    content: "This is the fifth note",
    formatedDate: formatDate(new Date()),
    author: "Author 5",
    color: colorCode(),
  },
  {
    id: 6,
    title: "Note 6",
    content: "This is the sixth note",
    formatedDate: formatDate(new Date()),
    author: "Author 6",
    color: colorCode(),
  },
];
