const myApiKey = "XRxJxJjpzd2rIydauxtiH0n57O0BH01M";

const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const gifsContainer = document.getElementById("gifs-container");

searchButton.addEventListener("click", function() {
    const userWord = searchInput.value; // تم تعديل الفاصلة إلى ;

    if (userWord === "") {
        alert("search Gifs");
        return;
    }

    gifsContainer.innerHTML = "";

    // تم تصحيح الرابط البرمجي بالكامل هنا
    const url = `https://api.giphy.com/v1/gifs/search?q=${userWord}&api_key=${myApiKey}&limit=10`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const responseDate = JSON.parse(xhr.responseText);
            const gifsArray = responseDate.data; // تم تصحيح الكلمة إلى data

            // تم حذف كلمة array الزائدة هنا
            gifsArray.forEach(function(gif) {
                const imageUrl = gif.images.fixed_height.url;

                // تم تصحيح اسم المتغير gifsContainer وحذف علامة -
                gifsContainer.innerHTML += `<img src="${imageUrl}" style="margin: 10px;" />`;
            });
        }
    };
    
    xhr.send();
});