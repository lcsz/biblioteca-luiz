(function() {

    var url = "http://localhost:8080/users";

    this.Usuario = function() {}

    // Metodos Publicos

    Usuario.prototype.create = async function(name, email) {
        var body = {
            "name": name,
            "email": email
        };
        var data = await post("create", body);
        console.log(data);
    }

    Usuario.prototype.buscaTodos = async function() {
        var data = await get("busca", "todos");
        console.log(data);
    }
    
    Usuario.prototype.busca = async function(id) {
        var data = await get("busca", id);
        console.log(data);
    }

    Usuario.prototype.update = async function(id, name, email) {
        var body = {
            "name": name,
            "email": email
        };
        var data = await put("update", id, body);
        console.log(data);
    }

    Usuario.prototype.delete = async function(id) {
        var status = await del("delete", id);
        console.log(status);
    }


    // Metodos Privados
    async function get(path, id) {
       
        // concatenacao de strings
        var _url = `${url}/${path}/${id}`;
        
        // chamada do serviço
        var response = await fetch(_url);

        // lendo a resposta do serviço como json
        var data = await response.json();

        // retornando os dados do serviço
        return data;
    }

    async function post(path, body) {
        var _url = `${url}/${path}`;
        
        var response = await fetch(_url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        var data = await response.json();
        return data;
    }

    async function put(path, id, body) {
        var _url = `${url}/${path}/${id}`;
            
        var response = await fetch(_url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        var data = await response.json();
        return data;
    }

    async function del(path, id) {
        var _url = `${url}/${path}/${id}`;
        var response = await fetch(_url, {
            method: 'DELETE'
        });
        var status = response.status;
        return status;
    }

}())
