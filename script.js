let btnBuscar = document.querySelector('#btnBuscar')

btnBuscar.addEventListener('click', function() {

    let inputCEP = document.querySelector('#inputCEP').value

    let api = ` http://viacep.com.br/ws/${inputCEP}/json/`

    let request = new XMLHttpRequest()

    request.open('GET', api)

    request.onload = function() {

        let endereco = JSON.parse(request.responseText)

        let cep = document.querySelector('#cep')
        cep.innerHTML = endereco.cep

        let logradouro = document.querySelector('#logradouro')
        logradouro.innerHTML = endereco.logradouro

        let bairro = document.querySelector('#bairro')
        bairro.innerHTML = endereco.bairro

        let localidade = document.querySelector('#localidade')
        localidade.innerHTML = endereco.localidade

    }

    request.send()

})