function load_menu(){
    const container = document.getElementById("menu");

    const pages = [
        {
            "link": "2022",
        },
        {
            "link": "2023"
        },
        {
            "link": "2024"
        }
    ]

    for (let x = 0; x < pages.length; x++){
        container.innerHTML += "<li><a class='link' href=https://dataviz-supsi.github.io/" + pages[x].link + ">" + pages[x].link +" </a></li>"
    }                
}

document.addEventListener("DOMContentLoaded", function(){
    load_menu()
});
