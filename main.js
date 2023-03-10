const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-vector/stegosaurus-dinosaur-cartoon-character_1308-62778.jpg?w=2000",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6ENLEX-npb3lfmodHpTJGc1cmdrhSVfp9w&usqp=CAU"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOahcVhHPT5pasjSdmJNE3G12NhfyAuDhHWw&usqp=CAU"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://i0.wp.com/bucketlistjourney.net/wp-content/uploads/2018/02/Dog-Pug-Blanket-Unsplash.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://t4.ftcdn.net/jpg/01/64/97/85/360_F_164978534_Nt7VabnGZa7XqyLKvu9ZWIjuP2AIwlH9.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven???t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://preview.redd.it/wxxpd51s2z381.jpg?auto=webp&s=46a2bdcaee5a9157111f86caf7068cb349c1698c"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://t3.ftcdn.net/jpg/04/71/84/22/360_F_471842288_huIRSfiXfpkwbsYyRU6cNNuMDSzO12h9.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVtfkx4nuMnmi2olGqgLU4WIAmhHANUuvtQ&usqp=CAU"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/09/orange-cat-breeds-Maine-Coon-.jpg?fit=1360%2C800"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F10%2F15%2Fchocolate-lab-puppy-503937116-2000.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://www.thesprucepets.com/thmb/y5JGbldlBUUtRA7ZqeVdQsbVvxg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn???t get weirded out by the word ???moist.???",
      type: "dino",
      imageUrl: "https://cdn.dribbble.com/users/1044993/screenshots/6634466/triceratops_dribbble.png?compress=1&resize=400x300"
    }
  ];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = htmlToRender
}

  // const app = document.querySelector(".pets");
  // let domString = "";
  const cardsOnDom = (array) => {
    let domString = "";
  for (const pet of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text name">${pet.name}</p>
      <p class="color">${pet.color}</p>
      <p class="specialSkill">${pet.specialSkill}</p>
      <p class="type">${pet.type}</p>
      <button id="delete--${pet.id}">Delete</button>
    </div>
  </div>`
  }

  renderToDom(".pets", domString)
}

// app.innerHTML = domString; 

const filter = (array, petString) => {
  const petsArray = [];
  for (const pet of array) {
    if (pet.type === petString) {
      petsArray.push(pet)
    }
  } return petsArray
}

cardsOnDom(pets)

const showAllButton = document.querySelector("#all")
const catsButton = document.querySelector("#cats")
const dogsButton = document.querySelector("#dogs")
const dinosButton = document.querySelector("#dinos")

showAllButton.addEventListener("click", () => {
  cardsOnDom(pets);
})

catsButton.addEventListener("click", () => {
  const catsFilter = filter(pets, "cat")
  cardsOnDom(catsFilter)
})

dogsButton.addEventListener("click", () => {
  const dogsFilter = filter(pets, "dog")
  cardsOnDom(dogsFilter)
})

dinosButton.addEventListener("click", () => {
  const dinosFilter = filter(pets, "dino") 
  cardsOnDom(dinosFilter)
})

// Add button functionality

const createPet = (event) => {
  event.preventDefault(); 
  const name = document.querySelector("#name")
  const color = document.querySelector("#color")
  const specialSkill = document.querySelector("#special-skill")
  const type = document.querySelector("#type")
  const image = document.querySelector("#image")

  const newPet = {
    name: name.value,
    color: color.value,
    specialSkill: specialSkill.value,
    type: type.value,
    image: image.value
  }

console.log("new pet", newPet)

  pets.push(newPet)

  cardsOnDom(pets)

}

const addButton = document.querySelector(".add")
addButton.addEventListener("click", createPet)

// Delete button functionality

const petsDiv = document.querySelector(".pets")

petsDiv.addEventListener("click", (event) => {
  if (event.target.id.includes("delete")) {
    const [throwAway, petsId] = event.target.id.split("--")
    const indexofPet = pets.findIndex(
      (obj) => obj.id === Number(petsId)
    )
    pets.splice(indexofPet, 1)
  }
  cardsOnDom(pets)
})
