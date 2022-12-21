// -----------Social Media Dashboard Data ------------------ \\

const followerData = [
  {
    id: 1,
    icon: "icon-facebook.svg",
    user: "@nathanf",
    userNo: 1987,
    title: "Followers",
    colorCode: "hsl(163, 72%, 41%)",
    userDaily: 12,
    platformName: "--fb-tw",
  },
  {
    id: 2,
    icon: "icon-twitter.svg",
    user: "@nathanf",
    userNo: 1044,
    title: "Followers",
    colorCode: "hsl(208, 92%, 53%)",
    userDaily: 99,
    platformName: "--fb-tw",
  },
  {
    id: 3,
    icon: "icon-instagram.svg",
    user: "@realnathanf",
    userNo: "11k",
    title: "Followers",
    colorCode: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
    userDaily: 1090,
    platformName: "--insta",
  },
  {
    id: 4,
    icon: "icon-youtube.svg",
    user: "Nathan F.",
    userNo: 8239,
    title: "Subscribers",
    colorCode: "hsl(348, 97%, 39%)",
    userDaily: -114,
    platformName: "--yt",
  },
];

/*---------------- NavBar ----------------*/
const navbar = document.querySelector("#navbar");
navbar.innerHTML = `
    <div class="main-text">
        <h1 class="dashboard-title">Social Media Dashboard</h1>
        <p class="dashboard-subtitle">Total Followers: 23,004</p>
    </div>
    <div class="dark-mode-container">
        <p class="dark-mode-text">Dark Mode</p>
        <div class="slider-container">
            <input type="checkbox" id="toggle-button" class="toggle-button" aria-label="dark mode slider">
        </div>
    </div>
`;

// NavBar Toggle Dark Mode/Light Mode
const modeToggler = document.querySelector(".toggle-button");
modeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

/*---------------- Main Grid Cards ----------------*/
const markup = (data) => {
  return `
    <div class="main-card main-card${data.platformName}">
        <div class="icon-container">
          <img src="./images/${data.icon}" alt="" class="social-icon">
          <p class="icon-text">${data.user}</p>
        </div>
        <p class="followers-num">${data.userNo}</p>
        <p class="followers-text">${data.title}</p>
        <p class="today-num ${data.userDaily > 0 ? "green" : "red"}">${
    data.userDaily
  } Today</p>
      </div>
    `;
};

const mainGrid = document.querySelector("#mainGrid");
const elements = followerData.map((data) => markup(data)).join("");
mainGrid.innerHTML = elements;

/*---------------- Overview Data ----------------*/

const overviewData = [
  {
    id: 1,
    icon: "icon-facebook.svg",
    userNo: 87,
    title: "Page Views",
    growth: 3,
  },
  {
    id: 2,
    icon: "icon-facebook.svg",
    userNo: 52,
    title: "Likes",
    growth: -2,
  },
  {
    id: 3,
    icon: "icon-instagram.svg",
    userNo: 5462,
    title: "Likes",
    growth: 2257,
  },
  {
    id: 4,
    icon: "icon-instagram.svg",
    userNo: 52000,
    title: "Profile Views",
    growth: 1375,
  },
  {
    id: 5,
    icon: "icon-twitter.svg",
    userNo: 117,
    title: "Retweets",
    growth: 303,
  },
  {
    id: 6,
    icon: "icon-twitter.svg",
    userNo: 507,
    title: "Likes",
    growth: 553,
  },
  {
    id: 7,
    icon: "icon-youtube.svg",
    userNo: 107,
    title: "Likes",
    growth: -19,
  },
  {
    id: 8,
    icon: "icon-youtube.svg",
    userNo: 1407,
    title: "Total Views",
    growth: -12,
  },
];

/*---------------- Overview Cards ----------------*/

const overview = (data) => {
  return `
    <div class="overview-card">
  <p class="overview-card-label">${data.title}</p>
  <p class="overview-card-num">${data.userNo}</p>
  <img src="/images/${data.icon}" class="social-icon overview-icon"/>
  <p class="overview-percent ${data.growth > 0 ? "green" : "red"}">${
    data.growth
  }%</p>
</div>
`;
};

const bottomGrid = document.getElementById("bottomGrid");
const overviewGrid = overviewData.map((data) => overview(data)).join("");
bottomGrid.innerHTML = overviewGrid;
/**
 * Map --> Returning A NEW Array
 * Each Element --> parameter
 * function --> process
 * return --> *
 * returned Value --> treated As an object/ variable push to the array
 */

/**
 * join --> take any array -> and merge it and return a string
 * [1, 2, 3, 4, 5].join('') -> 1 2 3 4 5
 */
