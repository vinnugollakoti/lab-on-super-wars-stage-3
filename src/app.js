// const PLAYERS = [
//     "Spiderman",
//     "Captain America",
//     "Wonderwoman",
//     "Popcorn",
//     "Gemwoman",
//     "Bolt",
//     "Antwoman",
//     "Mask",
//     "Tiger",
//     "Captain",
//     "Catwoman",
//     "Fish",
//     "Hulk",
//     "Ninja",
//     "Black Cat",
//     "Volverine",
//     "Thor",
//     "Slayer",
//     "Vader",
//     "Slingo",
//   ];
  
//   // initialize players with image and strength
//   const initPlayers = (players) => {
//     // Instead of forloop use Map method
//     // Code here
//     let x = players.map((v, i) => {
//       return {
//         name: v,
//         img: "images/super-" + (i + 1) + ".png",
//         str: getRandomStrength(),
//         type: i % 2 == 0 ? "hero" : "villain",
//       };
//     });
//     return x;
//   };
  
//   // getting random strength
//   const getRandomStrength = () => {
//     return Math.ceil(Math.random() * 100) + 1;
//   };
  
//   // Build player template
//   const buildPlayers = (players, type) => {
//     fragment=""
  
//     // Instead of using for loop
//     // Use chaining of Array methods - filter, map and join
//     // Type your code here
//     f = players.filter((v) => {
//       return v.type ==type;
//     }).map((i)=>{
//       fragment+="<div class='player'>"+
//       "<img src="+i.img+" alt=''>"+
//       "<div class='name'>"+i.name+"</div>"+
//       "<div class='strength'>"+i.str+"</div>"+
//    "</div>"
//     });
//     return fragment
//   };
  
//   // Display players in HTML
//   const viewPlayers = (players) => {
//     document.getElementById("heroes").innerHTML += buildPlayers(players, "hero");
//     document.getElementById("villains").innerHTML += buildPlayers( players,"villain");
//   };
  
//   window.onload = () => {
//     viewPlayers(initPlayers(PLAYERS));
//   };
const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo",
  ];
  
  // initialize players with image and strength
  const initPlayers = (players) => {
    // Instead of forloop use Map method
    // Code here
    let x = players.map((v, i) => {
      return {
        name: v,
        img: "images/super-" + (i + 1) + ".png",
        str: getRandomStrength(),
        type: i % 2 == 0 ? "hero" : "villain",
      };
    });
    return x;
  };
  
  // getting random strength
  const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100) + 1;
  };
  
  // Build player template
  const buildPlayers = (players, type) => {
    fragment=""
  
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    f = players.filter((v) => {
      return v.type ==type;
    }).map((i)=>{
      fragment+="<div class='player'>"+
      "<img src="+i.img+" alt=''>"+
      "<div class='name'>"+i.name+"</div>"+
      "<div class='strength'>"+i.str+"</div>"+
   "</div>"
    });
    return fragment
  };
  
  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById("heroes").innerHTML += buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML += buildPlayers( players,"villain");
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };