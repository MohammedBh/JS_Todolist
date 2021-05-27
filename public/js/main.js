let firstInput = document.querySelector('#firstInput')
let addBtn = document.querySelector('#addBtn')
let listUndone = document.querySelector('#notdoneList')
let listDone = document.querySelector('#doneList')


addBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    let resultatInput = document.createElement('li')
    resultatInput.classList.add('resultatList')
    listUndone.appendChild(resultatInput)
    let resultatSpan = document.createElement('span')
    resultatInput.appendChild(resultatSpan)
    resultatSpan.innerText = firstInput.value
    
    //Bouton Supprimer
    let suppBtn = document.createElement('button')
    suppBtn.classList.add('suppBtn')
    resultatInput.appendChild(suppBtn)
    suppBtn.innerText = 'Supprimer'
    
    //Bouton Modifier
    let modifBtn = document.createElement('button')
    modifBtn.classList.add('modifBtn')
    resultatInput.appendChild(modifBtn)
    modifBtn.innerText = 'Modifier'

    //------------
    modifBtn.addEventListener('click', function() {
        let modif = prompt('Inserez votre texte :')
        resultatSpan.innerText = modif
    })
    
    // Bouton Valider
    let valideBtn = document.createElement('button')
    valideBtn.classList.add('valideBtn')
    resultatInput.appendChild(valideBtn)
    valideBtn.innerText = 'Valider'
    //------------
    valideBtn.addEventListener('click', e =>{
        if (e.target.parentElement.classList == 'resultatList done') {
            e.target.parentElement.classList.add('undone')
            e.target.parentElement.classList.remove('done')
            e.target.innerText = 'Valider'
            let elementUndone = listDone.querySelector('.undone')
            listUndone.appendChild(elementUndone)
        } else {
            e.target.parentElement.classList.add('done')
            e.target.parentElement.classList.remove('undone')
            e.target.innerText = 'Annuler'
            let elementDone = listUndone.querySelector('.done')
            console.log(elementDone);
            listDone.appendChild(elementDone)
        }
    })
    
    //Bouton Supprimer de la Liste
    suppBtn.addEventListener('click', function(){
        let validDelete = confirm("Etes vous sure de supprimer cette tache?")
        if (validDelete == true) {
            let parent1 = this.parentNode;
            parent1.remove();
        }
    })
})

let tousBtn = document.querySelector('#tousBtn')
let encoursBtn = document.querySelector('#encoursBtn')
let finiBtn = document.querySelector('#finiBtn')
let valideDiv = document.querySelector('.valideDiv')
let nonvalideDiv = document.querySelector('.nonvalideDiv')

encoursBtn.addEventListener('click', () =>{
    if (nonvalideDiv.style.display == 'none') {
        nonvalideDiv.style.display = 'inherit'
        valideDiv.style.display = 'none'
    }else{
        valideDiv.style.display = 'none'
    }
})

finiBtn.addEventListener('click', () =>{
    if (valideDiv.style.display == 'none') {
        valideDiv.style.display = 'inherit'
        nonvalideDiv.style.display = 'none'
    }else{
        nonvalideDiv.style.display = 'none'
    }
})

tousBtn.addEventListener('click', () =>{
    valideDiv.style.display = 'inherit'
    nonvalideDiv.style.display = 'inherit'
})