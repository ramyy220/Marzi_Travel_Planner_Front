import destinationImg01 from "../images/destinationImg01.webp";
import destinationImg02 from "../images/destinationImg02.webp";
import destinationImg03 from "../images/destinationImg03.webp";
import destinationImg04 from "../images/destinationImg04.webp";
import destinationImg05 from "../images/destinationImg05.webp";
import destinationImg06 from "../images/destinationImg06.webp";
import destinationImg07 from "../images/destinationImg07.webp";
import destinationImg08 from "../images/destinationImg08.webp";
import destinationImg09 from "../images/destinationImg09.webp";
import destinationImg10 from "../images/destinationImg10.webp";
import destinationImg11 from "../images/destinationImg11.webp";
import destinationImg12 from "../images/destinationImg12.webp";
import destinationImg13 from "../images/destinationImg13.webp";
import destinationImg14 from "../images/destinationImg14.webp";
import destinationImg15 from "../images/destinationImg15.webp";
import destinationImg16 from "../images/destinationImg16.webp";
import destinationImg17 from "../images/destinationImg17.webp";
import destinationImg18 from "../images/destinationImg18.webp";
import destinationImg19 from "../images/destinationImg19.webp";
import destinationImg20 from "../images/destinationImg20.webp";

const destinations = [
  {
    id: "01",
    destinationName: "New York City",
    imgUrl: destinationImg01,
    country: "USA",
    continent: "North America",
    category: "destinations",
    description: "New York City is a bustling metropolis known for its iconic landmarks such as Times Square, Central Park, and the Statue of Liberty.",
    rating: 4.7,
    price: 350,
    adventureType: "urban"
  },
  {
    id: "02",
    destinationName: "Paris",
    imgUrl: destinationImg02,
    country: "France",
    continent: "Europe",
    category: "destinations",
    description: "Paris is the capital city of France, famous for its art, fashion, gastronomy, and cultural attractions like the Eiffel Tower and Louvre Museum.",
    rating: 4.8,
    price: 400,
    adventureType: "urban"
  },
  {
    id: "03",
    destinationName: "Tokyo",
    imgUrl: destinationImg03,
    country: "Japan",
    continent: "Asia",
    category: "destinations",
    description: "Tokyo is Japan's bustling capital, known for its neon skyscrapers, historic temples, vibrant street fashion, and bustling markets.",
    rating: 4.6,
    price: 300,
    adventureType: "urban"
  },
  {
    id: "04",
    destinationName: "London",
    imgUrl: destinationImg04,
    country: "UK",
    continent: "Europe",
    category: "destinations",
    description: "London is the capital city of England and the United Kingdom, famous for its rich history, iconic landmarks like the Big Ben and Buckingham Palace.",
    rating: 4.9,
    price: 375,
    adventureType: "urban"
  },
  {
    id: "05",
    destinationName: "Rome",
    imgUrl: destinationImg05,
    country: "Italy",
    continent: "Europe",
    category: "destinations",
    description: "Rome is the capital city of Italy, known for its ancient ruins such as the Colosseum, Roman Forum, and the Vatican City.",
    rating: 4.7,
    price: 320,
    adventureType: "cultural"
  },
  {
    id: "06",
    destinationName: "Sydney",
    imgUrl: destinationImg06,
    country: "Australia",
    continent: "Australia",
    category: "destinations",
    description: "Sydney is Australia's largest city, famous for its stunning harbor, Sydney Opera House, and Bondi Beach.",
    rating: 4.5,
    price: 450,
    adventureType: "sea"
  },
  {
    id: "07",
    destinationName: "Dubai",
    imgUrl: destinationImg07,
    country: "UAE",
    continent: "Asia",
    category: "destinations",
    description: "Dubai is a city and emirate in the United Arab Emirates known for its luxury shopping, ultramodern architecture, and vibrant nightlife scene.",
    rating: 4.8,
    price: 500,
    adventureType: "urban"
  },
  {
    id: "08",
    destinationName: "Hong Kong",
    imgUrl: destinationImg08,
    country: "China",
    continent: "Asia",
    category: "destinations",
    description: "Hong Kong is a vibrant city known for its skyscrapers, bustling street markets, and rich culinary scene.",
    rating: 4.6,
    price: 300,
    adventureType: "urban"
  },
  {
    id: "09",
    destinationName: "Istanbul",
    imgUrl: destinationImg09,
    country: "Turkey",
    continent: "Europe",
    category: "destinations",
    description: "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait, known for its historic sites like the Hagia Sophia and Topkapi Palace.",
    rating: 4.7,
    price: 250,
    adventureType: "cultural"
  },
  {
    id: "10",
    destinationName: "Bangkok",
    imgUrl: destinationImg10,
    country: "Thailand",
    continent: "Asia",
    category: "destinations",
    description: "Bangkok is the capital city of Thailand, known for its ornate shrines, vibrant street life, and bustling markets.",
    rating: 4.8,
    price: 200,
    adventureType: "cultural"
  },
  {
    id: "11",
    destinationName: "Barcelona",
    imgUrl: destinationImg11,
    country: "Spain",
    continent: "Europe",
    category: "destinations",
    description: "Barcelona is the capital city of the Catalonia region in Spain, famous for its unique architecture, vibrant culture, and beautiful beaches.",
    rating: 4.7,
    price: 280,
    adventureType: "cultural"
  },
  {
    id: "12",
    destinationName: "Los Angeles",
    imgUrl: destinationImg12,
    country: "USA",
    continent: "North America",
    category: "destinations",
    description: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry, known for its iconic landmarks like the Hollywood Sign and Walk of Fame.",
    rating: 4.6,
    price: 330,
    adventureType: "urban"
  },
  {
    id: "13",
    destinationName: "Amsterdam",
    imgUrl: destinationImg13,
    country: "Netherlands",
    continent: "Europe",
    category: "destinations",
    description: "Amsterdam is the capital city of the Netherlands, known for its picturesque canals, historic architecture, and vibrant cultural scene.",
    rating: 4.7,
    price: 310,
    adventureType: "cultural"
  },
  {
    id: "14",
    destinationName: "Singapore",
    imgUrl: destinationImg14,
    country: "Singapore",
    continent: "Asia",
    category: "destinations",
    description: "Singapore is a city-state and island country in Southeast Asia, known for its modern skyline, tropical climate, and multicultural population.",
    rating: 4.8,
    price: 400,
    adventureType: "urban"
  },
  {
    id: "15",
    destinationName: "Venice",
    imgUrl: destinationImg15,
    country: "Italy",
    continent: "Europe",
    category: "destinations",
    description: "Venice is a city in northeastern Italy known for its canals, historic architecture, and art scene.",
    rating: 4.7,
    price: 350,
    adventureType: "cultural"
  },
  {
    id: "16",
    destinationName: "Seoul",
    imgUrl: destinationImg16,
    country: "South Korea",
    continent: "Asia",
    category: "destinations",
    description: "Seoul is the capital city of South Korea, known for its cutting-edge technology, K-pop music, and vibrant street food scene.",
    rating: 4.6,
    price: 280,
    adventureType: "urban"
  },
  {
    id: "17",
    destinationName: "Vienna",
    imgUrl: destinationImg17,
    country: "Austria",
    continent: "Europe",
    category: "destinations",
    description: "Vienna is the capital city of Austria, known for its imperial palaces, cultural events, and classical music heritage.",
    rating: 4.7,
    price: 290,
    adventureType: "cultural"
  },
  {
    id: "18",
    destinationName: "Prague",
    imgUrl: destinationImg18,
    country: "Czech Republic",
    continent: "Europe",
    category: "destinations",
    description: "Prague is the capital city of the Czech Republic, known for its historic Old Town, medieval architecture, and vibrant nightlife.",
    rating: 4.6,
    price: 220,
    adventureType: "cultural"
  },
  {
    id: "19",
    destinationName: "Marrakech",
    imgUrl: destinationImg19,
    country: "Morocco",
    continent: "Africa",
    category: "destinations",
    description: "Marrakech is a major city in the Kingdom of Morocco, known for its vibrant souks, historic palaces, and colorful gardens.",
    rating: 4.7,
    price: 180,
    adventureType: "cultural"
  },
  {
    id: "20",
    destinationName: "Budapest",
    imgUrl: destinationImg20,
    country: "Hungary",
    continent: "Europe",
    category: "destinations",
    description: "Budapest is the capital city of Hungary, known for its stunning architecture, historic thermal baths, and vibrant cultural scene.",
    rating: 4.6,
    price: 210,
    adventureType: "cultural"
  },
];

export default destinations;
