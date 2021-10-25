var trash = document.getElementsByClassName("fa-trash");



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const number = this.parentNode.parentNode.childNodes[3].innerText
        const email = this.parentNode.parentNode.childNodes[5].innerText
        fetch('contacts', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'number': number,
            'email': email
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
