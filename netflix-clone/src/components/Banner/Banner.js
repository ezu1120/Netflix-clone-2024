// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axioss";
// import requests from "../../utils/requests";
// import "./banner.css";

// const Banner = () => {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     (async () => {
//       try {
//         // Fetch data from the TMDb API
//           const request = await axios.get(requests.fetchNetflixOriginals);
//           console.log(request)
//         // Set a random movie from the results
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );
//       } catch (error) {
//         console.log("error", error);
//       }
//     })();
//   }, []);

//   // Function to truncate text
//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button play">Play</button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
//       </div>
//       <div className="banner_fadeBottom" />
//     </div>
//   );
// };

// export default Banner;
 import React, { useEffect, useState } from "react";
 import axios from "../../utils/axios";
 import requests from "../../utils/requests";
 import "./banner.css";

 const Banner = () => {
   const [movie, setMovie] = useState({});

   useEffect(() => {
     (async () => {
       try {
         const request = await axios.get(requests.fetchNetflixOriginals);
         console.log("API Response:", request); // Log the API response
         const randomMovie =
           request.data.results[
             Math.floor(Math.random() * request.data.results.length)
           ];
         setMovie(randomMovie);
         console.log("Selected Movie:", randomMovie); // Log selected movie
       } catch (error) {
         console.log("error", error);
       }
     })();
   }, []);

   function truncate(str, n) {
     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   }

   const bannerStyle = {
     backgroundSize: "cover",
     backgroundImage: movie?.backdrop_path
       ? `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`
       : `url('path-to-your-fallback-image.jpg')`, // Optional fallback
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
   };

   return (
     <div className="banner" style={bannerStyle}>
       <div className="banner_contents">
         <h1 className="banner_title">
           {movie?.title || movie?.name || movie?.original_name}
         </h1>
         <div className="banner_buttons">
           <button className="banner_button play">Play</button>
           <button className="banner_button">My List</button>
         </div>
         <h1 className="banner_description">
           {truncate(movie?.overview, 150)}
         </h1>
       </div>
       <div className="banner_fadeBottom" />
     </div>
   );
 };

 export default Banner;
