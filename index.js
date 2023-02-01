const menuIcon = document.getElementById("menu-icon")
const smallScreen = window.matchMedia("(max-width: 479px)")
const navEl = document.getElementById("header-nav")

window.addEventListener("load", () => {
    showHideNavUl(smallScreen)
  })

smallScreen.addEventListener("change", showHideNavUl) 

function showHideNavUl(smallScreen) {
    if (smallScreen.matches) { 
        navEl.style.display = "none"
        document.getElementById("close-icon").classList.add("hidden")
        document.getElementById("hamburger-icon").classList.remove("hidden")
    } else {
        navEl.style.display = "flex"
        document.getElementById("close-icon").classList.add("hidden")
        document.getElementById("hamburger-icon").classList.add("hidden")
    }
  }

// toggle menu / close icons and dropdown menu display
menuIcon.addEventListener("click", toggleDropdownMenu)

function toggleDropdownMenu() {
    document.getElementById("close-icon").classList.toggle("hidden")
    document.getElementById("hamburger-icon").classList.toggle("hidden")

    navEl.style.display === "none" ? 
        navEl.style.display = "flex" : 
        navEl.style.display = "none"
}