var array = [
    {"Id":0,
    "Nome":"Matheus",
    "Telefone":"(11) 111111111"},
    {"Id":1,
    "Nome":"Amanda",
    "Telefone":"(11) 111111111"}
    ]

    
    
   


function listarAgenda(arraydaagenda) {
    arraydaagenda.sort(function(a, b) {
        if(a.Nome < b.Nome) {
          return -1;
        } else {
          return true;
        }
      });
    let lista = document.getElementById("cont").innerHTML;
     for (let index = 0; index < arraydaagenda.length; index++) {
        lista += `<p class="linha">  ${arraydaagenda[index].Nome } &nbsp;&nbsp;  ${arraydaagenda[index].Telefone } &nbsp;&nbsp; <input type="button" class="myButton" id="${index}" onclick="deleteLi(id)" value="Deletar"> </p>`;
     }
     lista+= `<div id="btninserir"><input class="add" type="button" onclick="adicionar()" value="+"></div>` 
   document.getElementById("cont").innerHTML = lista;
}

function onLoad() {
    listarAgenda(array);
   
}

function deleteLi(id){

    console.log(id)
   // idord = array.indexOf(id);
    array.splice(id,1);
    console.log(array)
    document.getElementById("cont").innerHTML = '';
    listarAgenda(array)

    
    
}
function adicionar() {

    var nome=prompt("Digite seu Nome:");
    
    
    if (nome == '' || nome == null) {
        alert('Nome Invalido');
    }
    else
    {
        var telefone = prompt("Digite seu telefone :");
        if(telefone == '' || telefone == null)
        {
            alert('Numero Invalido')
        }
        else
        {  
            let objeto = {
                 "Id":array.length,
                 "Nome":nome,
                "Telefone":telefone
                
            }
            
            array.push(objeto)
            console.log(array)
            document.getElementById("cont").innerHTML = '';
            listarAgenda(array)
        }
    }
    

   

    
   

    
    
}

function procurar() {
    var palavra = document.getElementById("NomeProcurado").value;
    if(palavra == '')
    {
        document.getElementById("cont").innerHTML = '';
        listarAgenda(array)
    }
    else
    {
        var arrayFiltrado = array.filter((objeto)=>{return objeto.Nome == palavra})
        console.log(arrayFiltrado)
        document.getElementById("cont").innerHTML = '';
        listarAgenda(arrayFiltrado)
    }
    
    
}
