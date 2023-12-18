const globalData = {
    navbar : {
        logoImg: "https://picsum.photos/200/300",
        title: {
            text: "My Website",
            type: "h1",
        },
        menu: [
            "menu1",
            "menu2",
            "menu3",
            "menu4"
        ]
        
    },

    main: {
        card: [
            {
                title: "Title Card",
                img: "https://picsum.photos/200/300",
                description: "Questo è il mio bellissimo oggetto"
            },

            {
                title: "Title Card2",
                img: "https://picsum.photos/200/300",
                description: "Questo è il mio bellissimo oggetto"
            }
        ]
    }
}

console.log(globalData.main.card[1].title); 

const navbar = document.getElementById("navBar"); 

function createAndAppendLogo() {
    const logoContainer = document.createElement("div");
    const img = document.createElement("img");
    img.src = globalData.navbar.logoImg;
    logoContainer.append(img);
    navbar.append(logoContainer);
}

function createAndAppendTitle() {
    const titleContainer = document.createElement("div");
    const title = document.createElement(globalData.navbar.title.type);
    title.textContent = globalData.navbar.title.text;
    titleContainer.append(title);
}

createAndAppendLogo();
createAndAppendTitle(); 