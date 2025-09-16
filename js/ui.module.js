import { Details } from "./details.module.js";

export class Ui {
  constructor() {
    this.gameDataContainer = document.getElementById("gameData");
    this.detailsContent = document.getElementById("detailsContent");
    this.h1Details = document.querySelector(".h1Details");
    this.detailsObj = new Details();
  }
  
  displayGames(data) {
    let gameHtml = "";
    for (let i = 0; i < data.length; i++) {
      gameHtml += `
        <a href="details.html?id=${data[i].id}" 
           class="itemGame p-3 rounded cursorPointer d-block text-decoration-none" 
           id="${data[i].id}"
           data-aos="fade-up" 
           data-aos-delay="${(i % 10) * 100}">
          <div class="inner rounded">
            <img src="${data[i].thumbnail}" alt="${data[i].title}" class="rounded">
            <div class="title d-flex justify-content-between mt-4">
              <h4>${data[i].title}</h4>
              <p class="logoPrice rounded">Free</p>
            </div>
            <p>${data[i].short_description ? data[i].short_description.split(" ", 8).join(" ") : ""}</p>
            <div class="gamecode d-flex justify-content-between mt-2">
              <span>${data[i].genre}</span>
              <span>${data[i].platform}</span>
            </div>
          </div>
        </a>`;
    }
    this.gameDataContainer.innerHTML = gameHtml;
    this.itemGame = document.querySelectorAll(".itemGame");
  }
  
  displayDetails(data) {
    const content = `
      <div class="col-md-4" data-aos="fade-right" data-aos-delay="200">
        <img src="${data.thumbnail}" class="w-100" alt="${data.title}" />
      </div>
      <div class="col-md-8" data-aos="fade-left" data-aos-delay="400">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
        <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
        <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
        <p class="small">${data.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
        <a class="btn btn-outline-warning ms-4" href="index.html">Back To Home</a>
      </div>`;
    
    this.detailsContent.innerHTML = content;
    this.h1Details.innerHTML = data.title + " Game Details";
    
    
  }
}