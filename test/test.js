let http = new XMLHttpRequest();
    http.open('GET'," https://jsonplaceholder.typicode.com");
    http.send();
    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
        console.log('Response from the server:' ,  http.response);
      }
    };