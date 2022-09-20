const movies = require("./movies");
const users = require("./users");

// from movies array, return the movie with highest votes count
const movieVotes = movies.map((movie) => movie.votes);
const maxNumber = Math.max(...movieVotes);

const movieWithHighestVotes = movies.filter(
  (movie) => movie.votes === maxNumber
);

// from movies array, return the movie with lowest votes count
const minNumber = Math.min(...movieVotes);

const movieWithLowestVotes = movies.filter(
  (movie) => movie.votes === minNumber
);

// from movies array, return all movies from year 2018
const moviesFrom2018 = movies.filter((movie) => movie.year === 2018);

// from movies array, return all movies that were filmed between 2018 and 2019
const moviesFilmedBetween2018And2019 = movies.filter(
  (movie) => movie.year === 2018 || movie.year === 2019
);

// from movies array, return all movies that were filmed in 2021 and have a minimum of 100 votes
const moviesFilmedIn2021 = movies.filter((movie) => movie.year === 2021);

const moviesFilmedIn2021With100Votes = moviesFilmedIn2021.filter(
  (movie) => movie.votes <= 100
);
// from movies array, is thre any movie with title Home Alone? if so return true, else false
const thereIsHomeAloneMovie = movies.some(
  (movie) => movie.title === "Home Alone"
);
// from movies array, return all movies that include the word 'The' in their title
const moviesThatIncludeThe = movies.filter((movie) =>
  movie.title.includes("The")
);
// from movies array, return all movies with only 2 genreIds
const moviesWithTwoGenereIds = movies.filter(
  (movie) => movie.genreIds.length === 2
);
// from movies array, return the title and description of the movie that includes following genreIds - [ 80, 53, 18 ]
const genreIds = [80, 53, 18];
const movieWithGenereId = movies.filter((movie) =>
  movie.genreIds.indexOf([genreIds])
);
console.log(movieWithGenereId);

// from movies array, return all the movies that include 878 genreId
const moviesThatInclude878 = movies.filter((movie) =>
  movie.genreIds.includes(878)
);

// from movies array, are thre any movies from 2022? if so return true, else false
const moviesFrom2020 = movies.some((movie) => movie.year === 2022);

// from users array, return only the users which email ends with .biz
const usersEmailEndsBiz = users.filter((email) => email.email.endsWith(".biz"));

// from users array, for all users return in the console a message including user name, company name and city
// example: Leanne Graham works at Romaguera-Crona and lives in Gwenborough city
// const usersMessage = users.forEach((user) =>
//   console.log(
//     `${user.name} works at ${user.company.name} and lives in ${user.address.city} city`
//   )
// );

// from users array, for all users return in the console following message including user city and geography
// example: Wisokyburgh city. Coordenates: latitude is -43.9509 and longitude is -34.4618
// const cityAndGeographyMessage = users.forEach((user) =>
//   console.log(
//     `${user.address.city} city. Coordenates: latitud is ${user.address.geo.lat} and longitude is ${user.address.geo.lng}`
//   )
// );

// from users array, return all users wich website domain ends with .org
const usersWebsiteDomainOrg = users.filter((user) =>
  user.website.endsWith(".org")
);

// from users array, return all usernames wich phone numbers include an extension
// FYI - extension is followed after x character "1-770-736-8031 x56442" where in example 56442 is the extension.

const usernameExtension = users.filter((user) => user.phone.includes("x"));

// from users array, return all usernames in capitals
// example: ['DELPHINE', 'BRETE', 'ANTONETTE', ...]
const usernameInCapitals = users.map((user) => user.username.toUpperCase());

// from users array, return only users that live in an Apt.
const usersThatLiveInApt = users.filter((user) =>
  user.address.suite.includes("Apt")
);

// from users array, are there any users wich city is CDMX or London ? if so return true else false
const usersCdmxOrLondon = users.some(
  (user) =>
    user.address.city.includes("CDMX") || user.address.city.includes("London")
);
// from users array, return longer company catchPhrase
const companyCatchPhrase = users.map((user) => user.company.catchPhrase);
// console.log(companyCatchPhrase);

const longerCatchPhrase = Math.max(companyCatchPhrase.length);
// console.log(longerCatchPhrase);

const longerCompanyCatchPhrase = companyCatchPhrase.filter(
  (user) => user < longerCatchPhrase
);
// console.log(longerCompanyCatchPhrase);
