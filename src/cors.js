function handleResponse(data) {
    console.log(data); // Process data here
  }
  
  const script = document.createElement("script");
  script.src = "https://api.deezer.com/chart/0/tracks?limit=4&output=jsonp&callback=handleResponse";
  document.body.appendChild(script);
  