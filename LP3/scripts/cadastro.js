function verificaCep(){
var cep = $(".campo-cep").val();
    $.ajax({
        method: "GET",
        url: "https://viacep.com.br/ws/"+ cep + "/json/",
        success : function(data){
            $(".campo-rua").val(data.logradouro);
            $(".campo-bairro").val(data.bairro);
            $(".campo-complemento").val(data.complemento);
            $(".campo-cidade").val(data.localidade);
            $(".campo-estado").val(data.uf);
        },
        error : function(){
            $(".campo-rua").attr('disabled',true);
            $(".campo-bairro").attr('disabled',true);
            $(".campo-complemento").attr('disabled',true);
            $(".campo-cidade").attr('disabled',true);
            $(".campo-estado").attr('disabled',true);
        }
    });

    function validaEmail(email){        
        let valida = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(email.test(valida)){
            console.log("email valido");
        } else{
            console.log("email invalido");
        };
    }
    
}