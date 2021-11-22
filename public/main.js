// var trash = document.getElementsByClassName("fa-trash");

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const number = this.parentNode.parentNode.childNodes[3].innerText
//         const email = this.parentNode.parentNode.childNodes[5].innerText
//         fetch('contacts', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'number': number,
//             'email': email
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });



let vote = document.getElementsByClassName('vote')

// battle (profile.ejs) -> "can't select same ninja" function

let parentSelect = document.querySelector('.parentSelect')

parentSelect.addEventListener('change', function(event) {
  let otherSelect
  event.target.name == 'ninjaOne' ? otherSelect = document.querySelector('#ninjaTwo') : otherSelect = document.querySelector('#ninjaOne')

  let op = otherSelect.getElementsByTagName('option')

  for (let i=0; i<op.length; i++) {
    op[i].value == event.target.value ? op[i].disabled = true : op[i].disabled = false
  }
})

let onePercent = document.querySelector('#onePercent')
let twoPercent = document.querySelector('#twoPercent')

let n1name = document.querySelector('#n1name')
let n2name = document.querySelector('#n2name')

let n1amount = document.querySelector('#n1amount')
let n2amount = document.querySelector('#n2amount')

let n1 = n1name.innerText
let n2 = n2name.innerText

let n1votes = parseInt(n1amount.innerText)
let n2votes = parseInt(n2amount.innerText)

// battle win or loss affects "battlesWon" property

Array.from(vote).forEach(function(element) {
  element.addEventListener('click', function() {
    let ninjaWon
    let ninjaLost
    if (n1votes > n2votes) {
      ninjaWon = n1
      ninjaLost = n2
      fetch('/updateWins', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'ninjaWon': ninjaWon,
          'ninjaLost': ninjaLost
        })
      }).then(function (response) {
        window.location.reload()
      })
    } else if (n1votes < n2votes){
      ninjaWon = n2
      ninjaLost = n1
      fetch('/updateWins', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'ninjaWon': ninjaWon,
          'ninjaLost': ninjaLost
        })
      }).then(function (response) {
        window.location.reload()
      })
    }
  })
})

Array.from(vote).forEach(function(element) {
  element.addEventListener('click', function() {
    let ninjaWon
    let ninjaLost
    if (n1votes > n2votes) {
      ninjaWon = n1
      ninjaLost = n2
      fetch('/updateLoss', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'ninjaWon': ninjaWon,
          'ninjaLost': ninjaLost
        })
      }).then(function (response) {
        window.location.reload()
      })
    } else if (n1votes < n2votes){
      ninjaWon = n2
      ninjaLost = n1
      fetch('/updateLoss', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'ninjaWon': ninjaWon,
          'ninjaLost': ninjaLost
        })
      }).then(function (response) {
        window.location.reload()
      })
    }
  })
})

// voting for ninja to win battle function

Array.from(vote).forEach(function(element) {
  element.addEventListener('click', function() {
    if (this.parentNode.childNodes[3].innerText == n1name.innerText) {
      n1votes = parseInt(n1amount.innerText) + 1
      n2votes = parseInt(n2amount.innerText)
    } else {
      n1votes = parseInt(n1amount.innerText)
      n2votes = parseInt(n2amount.innerText) + 1
    }
    fetch('/battles', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'n1votes': n1votes,
        'n2votes': n2votes,
        'n1': n1,
        'n2': n2
      })
    }).then(function (response) {
      window.location.reload()
    })
  })  
})