//One of the creatures will be the prototype of magician
const magician = {
  _hat: './assets/images/hat.png',
  _getPortrait() {
    if (this._portrait) return this._portrait;
    else return './assets/images/magician.png';
  },
  'do magic'() {
    console.log(`ABRACADABRAThe prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
    console.log(this);
  }
}


function Creature(name, age, species) {
  this.name = name
  this.age = age
  this.species = species
}

Creature.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}!`)
}

Creature.prototype = Object.assign(Creature.prototype, magician)

function Human(name, age, species, job) {
  Creature.call(this, name, age, species)
  this.job = job
  this._portrait = "./assets/images/human.png"
}

function Dog(name, age, species, color) {
  Creature.call(this, name, age, species)
  this.color = color
  this._portrait = "./assets/images/dog.png"
}

function Vampire(name, age, species, job, title) {
  Human.call(this, name, age, species, job)
  this.title = title
  this._portrait = "./assets/images/vampire.png"
}


Human.prototype = Object.create(Creature.prototype)
Dog.prototype = Object.create(Creature.prototype)
Vampire.prototype = Object.create(Human.prototype)


let human = new Human("Linda", 22, "human", "doctor")
let dog = new Dog("Fluffy", 3, "dog", "brown")
let vampire = new Vampire("Vlad", 915, "vampire", "unemployed", "count")

human['do magic'] = human['do magic'].bind(human)
dog['do magic'] = dog['do magic'].bind(dog)
vampire['do magic'] = vampire['do magic'].bind(vampire)

human['sayHello'] = human['sayHello'].bind(human)
dog['sayHello'] = dog['sayHello'].bind(dog)
vampire['sayHello'] = vampire['sayHello'].bind(vampire)


const btnTypes = {
  NO_PROTOTYPE: 'no prototype',
  HUMAN: 'human prototype',
  VAMPIRE: 'vampire prototype',
  DOG: 'dog prototype',
}

function changeStatus(item) {
  const controls = document.getElementById("controls")
  const head = document.getElementById("head")
  const properties = document.getElementById("properties")

  //Clear active styles
  for(let i = 0; i < controls.children.length; i++) {
    const child = controls.children[i]
    child.classList.remove('active')
  }

  item.classList.add('active')

  //Clean properties
  properties.innerHTML = ''

  switch(item.textContent.toLowerCase()) {
    case btnTypes.NO_PROTOTYPE: {
      head.src = magician._getPortrait()

      const doMagic = document.createElement('button')
      doMagic.textContent = 'do magic'
      doMagic.onclick = magician['do magic']

      properties.append(doMagic)

      break
    }
    
    case btnTypes.HUMAN: {
      head.src = human._getPortrait()

      const doMagic = document.createElement('button')
      doMagic.textContent = 'do magic'
      doMagic.onclick = human['do magic']

      const sayHello = document.createElement('button')
      sayHello.textContent = 'say hello'
      sayHello.onclick = human.sayHello

      properties.append(doMagic)
      properties.append(sayHello)


      const nameWrapper = document.createElement('div')
      const ageWrapper = document.createElement('div')
      const speciesWrapper = document.createElement('div')
      const jobWrapper = document.createElement('div')

      nameWrapper.textContent = 'name: '
      ageWrapper.textContent = 'age: '
      speciesWrapper.textContent = 'species: '
      jobWrapper.textContent = 'job: '

      const name = document.createElement('span')
      const age = document.createElement('span')
      const species = document.createElement('span')
      const job = document.createElement('span')

      name.classList.add('propValue')
      age.classList.add('propValue')
      species.classList.add('propValue')
      job.classList.add('propValue')

      name.textContent = human.name
      age.textContent = human.age
      species.textContent = human.species
      job.textContent = human.job

      nameWrapper.append(name)
      ageWrapper.append(age)
      speciesWrapper.append(species)
      jobWrapper.append(job)

      properties.append(nameWrapper)
      properties.append(ageWrapper)
      properties.append(speciesWrapper)
      properties.append(jobWrapper)

      break
    }

    case btnTypes.VAMPIRE: {
      head.src = vampire._getPortrait()

      const doMagic = document.createElement('button')
      doMagic.textContent = 'do magic'
      doMagic.onclick = vampire['do magic']

      const sayHello = document.createElement('button')
      sayHello.textContent = 'say hello'
      sayHello.onclick = vampire.sayHello

      properties.append(doMagic)
      properties.append(sayHello)


      const nameWrapper = document.createElement('div')
      const ageWrapper = document.createElement('div')
      const speciesWrapper = document.createElement('div')
      const jobWrapper = document.createElement('div')
      const titleWrapper = document.createElement('div')

      nameWrapper.textContent = 'name: '
      ageWrapper.textContent = 'age: '
      speciesWrapper.textContent = 'species: '
      jobWrapper.textContent = 'job: '
      titleWrapper.textContent = 'title: '

      const name = document.createElement('span')
      const age = document.createElement('span')
      const species = document.createElement('span')
      const job = document.createElement('span')
      const title = document.createElement('span')

      name.classList.add('propValue')
      age.classList.add('propValue')
      species.classList.add('propValue')
      job.classList.add('propValue')
      title.classList.add('propValue')

      name.textContent = vampire.name
      age.textContent = vampire.age
      species.textContent = vampire.species
      job.textContent = vampire.job
      title.textContent = vampire.title

      nameWrapper.append(name)
      ageWrapper.append(age)
      speciesWrapper.append(species)
      jobWrapper.append(job)
      titleWrapper.append(title)

      properties.append(nameWrapper)
      properties.append(ageWrapper)
      properties.append(speciesWrapper)
      properties.append(jobWrapper)
      properties.append(titleWrapper)

      break
    }

    case btnTypes.DOG: {
      head.src = dog._getPortrait()

      const doMagic = document.createElement('button')
      doMagic.textContent = 'do magic'
      doMagic.onclick = dog['do magic']

      const sayHello = document.createElement('button')
      sayHello.textContent = 'say hello'
      sayHello.onclick = dog.sayHello

      properties.append(doMagic)
      properties.append(sayHello)
      

      const nameWrapper = document.createElement('div')
      const ageWrapper = document.createElement('div')
      const speciesWrapper = document.createElement('div')
      const colorWrapper = document.createElement('div')

      nameWrapper.textContent = 'name: '
      ageWrapper.textContent = 'age: '
      speciesWrapper.textContent = 'species: '
      colorWrapper.textContent = 'color: '

      const name = document.createElement('span')
      const age = document.createElement('span')
      const species = document.createElement('span')
      const color = document.createElement('span')

      name.classList.add('propValue')
      age.classList.add('propValue')
      species.classList.add('propValue')
      color.classList.add('propValue')

      name.textContent = dog.name
      age.textContent = dog.age
      species.textContent = dog.species
      color.textContent = dog.color

      nameWrapper.append(name)
      ageWrapper.append(age)
      speciesWrapper.append(species)
      colorWrapper.append(color)

      properties.append(nameWrapper)
      properties.append(ageWrapper)
      properties.append(speciesWrapper)
      properties.append(colorWrapper)

      break
    }
  }
}
