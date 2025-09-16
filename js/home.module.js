import { Ui } from "./ui.module.js";
export class Home {
  constructor() {
    this.allLinks = document.querySelectorAll(".nav-link");
    this.activeLink = document.querySelector(".active");
    this.loading = document.querySelector(".loading");
    this.allGamesArr = [];
    this.defaultGameShown = [];
    this.uiObj = new Ui();
    this.changeActiveLink();
    this.displayDefaultGame();
  }
  changeActiveLink() {
    this.allLinks.forEach((link) => {
      link.addEventListener("click", async () => {
        link.classList.add("active");
        this.activeLink.classList.remove("active");
        this.activeLink = link;
        console.log("Active link is", link.innerHTML);
        this.getGames(link.innerHTML.toLowerCase());
        this.loading.classList.remove("d-none");
        this.allGamesArr = await this.getGames(link.innerHTML.toLowerCase());
        this.uiObj.displayGames(this.allGamesArr);
        this.loading.classList.add("d-none");
      });
    });
  }
  async displayDefaultGame() {
    this.loading.classList.remove("d-none");
    this.defaultGameShown = await this.getGames("mmorpg");
    this.uiObj.displayGames(this.defaultGameShown);
    this.loading.classList.add("d-none");
  }

  async getGames(category) {
    let response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "7803ba6203mshdc86242967e2f42p1434dejsn04f55b38b57c",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    let data = await response.json();
    console.log(data);
    return data;
  }
}
