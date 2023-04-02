let menuIcon = document.querySelector('.burger-icon');
let menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menu.classList.contains('active') ? menuIcon.src = '../assets/shared/icon-close.svg' : menuIcon.src = '../assets/shared/icon-hamburger.svg';
});

let planetsMenu = document.querySelectorAll('.menu-planet-info li');
let planetcounter = 1;

planetsMenu.forEach(li => {
    li.addEventListener('click', (e) => {
        planetsMenu.forEach(li => {
            li.classList.remove('active');
        });
        e.target.classList.add('active');
        let dataPlanete = e.target.getAttribute('data-planetNum');
        planetcounter = dataPlanete;
        dataPlanet();
    });
});


function dataPlanet() {
    let planetImg = document.querySelector('.content .planet img');
    let planetName = document.querySelector('.planet-name');
    let planetDesc = document.querySelector('.planet-desc');
    let planetAvgDistance = document.querySelector('.avg-distance');
    let planetEstTravel = document.querySelector('.est-travel');

    planetImg.style.cssText = 'opacity:0;';
    planetName.style.cssText = 'opacity:0;';
    planetDesc.style.cssText = 'opacity:0;';
    planetAvgDistance.style.cssText = 'opacity:0;';
    planetEstTravel.style.cssText = 'opacity:0;';
    fetch('../data.json').then(
        data => data.json()
    ).then(planets => {
        console.log(planets)
        setTimeout(() => {
            planetImg.style.cssText = 'opacity:1;';
            planetName.style.cssText = 'opacity:1;';
            planetDesc.style.cssText = 'opacity:1;';
            planetAvgDistance.style.cssText = 'opacity:1;';
            planetEstTravel.style.cssText = 'opacity:1;';

            planetImg.src = planets.destinations[planetcounter].images.png;
            planetName.innerText = planets.destinations[planetcounter].name;
            planetDesc.innerText = planets.destinations[planetcounter].description;
            planetAvgDistance.innerText = planets.destinations[planetcounter].distance;
            planetEstTravel.innerText = planets.destinations[planetcounter].travel;
        }, 300);
    });
};



let crewCounter = 3;
let bullets = document.querySelectorAll('.bullets li');
bullets.forEach(li => {
    li.addEventListener('click', (e) => {
        bullets.forEach(li => {
            li.classList.remove('active');
        });
        e.target.classList.add('active');
        let dataCrewe = e.target.getAttribute('data-crew');
        crewCounter = dataCrewe;
        dataCrew();
    });
});


function dataCrew() {
    let job = document.querySelector('.job');
    let name = document.querySelector('.name');
    let desc = document.querySelector('.desc');
    let pic = document.querySelector('.pic img');

    job.style.cssText = 'opacity:0;';
    name.style.cssText = 'opacity:0;';
    desc.style.cssText = 'opacity:0;';
    pic.style.cssText = 'opacity:0;';
    fetch('../data.json').then(
        data => data.json()
    ).then(crews => {
        setTimeout(() => {
            job.style.cssText = 'opacity:1;';
            name.style.cssText = 'opacity:1;';
            desc.style.cssText = 'opacity:1;';
            pic.style.cssText = 'opacity:1;';

            job.innerText = crews.crew[crewCounter].role;
            name.innerText = crews.crew[crewCounter].name;
            desc.innerText = crews.crew[crewCounter].bio;
            pic.src = crews.crew[crewCounter].images.png;
        }, 300);
    });
};




let techMenuItems = document.querySelectorAll('.nums li');
let techCounter = 0;
techMenuItems.forEach(li => {
    li.addEventListener('click', (e) => {
        techMenuItems.forEach(li => {
            li.classList.remove('active');
        });
        e.target.classList.add('active');
        let dataTeche = e.target.getAttribute('data-tech');
        techCounter = dataTeche;
        dataTech();
    });
});


function dataTech() {
    let name = document.querySelector('.tech-name');
    let desc = document.querySelector('.tech-desc');
    let pic = document.querySelector('.pic img');

    name.style.cssText = 'opacity:0;';
    desc.style.cssText = 'opacity:0;';
    pic.style.cssText = 'opacity:0;';
    fetch('../data.json').then(
        data => data.json()
    ).then(techs => {
        setTimeout(() => {
            name.style.cssText = 'opacity:1;';
            desc.style.cssText = 'opacity:1;';
            pic.style.cssText = 'opacity:1;';

            name.innerText = techs.technology[techCounter].name;
            desc.innerText = techs.technology[techCounter].description;
            pic.src = techs.technology[techCounter].images.portrait;
        }, 300);
    });
};