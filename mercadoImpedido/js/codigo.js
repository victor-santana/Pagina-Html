$(document).ready(function() {
   $("#btAdd").click(function() {
       var nome = $("#txtNome").val();
       var mail = $("#txtMail").val();
       var fone = $("#txtFone").val();
       var cpf= $("#texcpf").val();
       var cep= $("#texcep").val();
       var cpf= $("#texcpf").val();
       var password= $("#texSenha").val();
       
       
       if($(this).data("tipo")=="N") {
       
           bloco  = "<tr>";
           bloco += "<td>" + nome + "</td>";
           bloco += "<td>" + mail + "</td>";
           bloco += "<td>" + fone + "</td>";
           bloco += "<td style='text-align:right' class='valor'>" + sal + "</td>";
           bloco += "<td>";
           bloco += "   <button class='btn btn-warning btn-sm btEdit'><i class='fa fa-pencil'></i> Editar</button>";
           bloco += "</td>";
           bloco += "<td>";
           bloco += "<button class='btn btn-success btn-sm btDel'><i class='fa fa-times'></i> Apagar</button>";
           bloco += "</td>";
           bloco += "</tr>";

           $("#tabela tbody").append(bloco);
           $("form")[0].reset();
           conta();
       } else {
           $(".active").find("td:eq(0)").html(nome);
           $(".active").find("td:eq(1)").html(mail);
           $(".active").find("td:eq(2)").html(fone);
           $(".active").find("td:eq(3)").html(sal);
           
           $(".active").removeClass("active");
           $("#form")[0].reset();
       }
       
       $("#insere").modal("hide");
           
   }); 
    
    
    
    $("#btCrieSua").click(function() {
        $("#btAdd").data("tipo","N");
        $("#CrieSua").modal("show");
    });
    
    $(document).on("click",".btCrieSua",function() {
       el = $(this);
       var nome = el.closest("tr").find("td:eq(0)").html();      
       var mail = el.closest("tr").find("td:eq(1)").html();
       var fone = el.closest("tr").find("td:eq(2)").html();
       var sal  = el.closest("tr").find("td:eq(3)").html();
        
        //insere uma classe na linha pra marcá-la
        el.closest("tr").addClass("active");
        
        //alimenta os campos do modal
        $("#txtNome").val(nome);
        $("#txtMail").val(mail);
        $("#txtFone").val(fone);
        $("#txtSalario").val(sal);
        
        $("#btAdd").data("tipo","E");
        $("#btAdd").html("<i class='fa fa-edit'></i> Editar");
        
        $("#insere").modal("show");
        
    });
    

    
    
});










$(document).ready(function() {
   $("#btAdd").click(function() {
       var nome = $("#txtNome").val();
       var mail = $("#txtMail").val();
       var fone = $("#txtFone").val();
       var cpf= $("#texcpf").val();
       var cep= $("#texcep").val();
       var cpf= $("#texcpf").val();
       var password= $("#texSenha").val();
       
       
       if($(this).data("tipo")=="N") {
       
           bloco  = "<tr>";
           bloco += "<td>" + nome + "</td>";
           bloco += "<td>" + mail + "</td>";
           bloco += "<td>" + fone + "</td>";
           bloco += "<td style='text-align:right' class='valor'>" + sal + "</td>";
           bloco += "<td>";
           bloco += "   <button class='btn btn-warning btn-sm btEdit'><i class='fa fa-pencil'></i> Editar</button>";
           bloco += "</td>";
           bloco += "<td>";
           bloco += "<button class='btn btn-success btn-sm btDel'><i class='fa fa-times'></i> Apagar</button>";
           bloco += "</td>";
           bloco += "</tr>";

           $("#tabela tbody").append(bloco);
           $("form")[0].reset();
           conta();
       } else {
           $(".active").find("td:eq(0)").html(nome);
           $(".active").find("td:eq(1)").html(mail);
           $(".active").find("td:eq(2)").html(fone);
           $(".active").find("td:eq(3)").html(sal);
           
           $(".active").removeClass("active");
           $("#form")[0].reset();
       }
       
       $("#insere").modal("hide");
           
   }); 
    
    
    
    $("#btEntre").click(function() {
        $("#btAdd").data("tipo","N");
        $("#Entre").modal("show");
    });
    
    $(document).on("click",".btEntre",function() {
       el = $(this);
       var nome = el.closest("tr").find("td:eq(0)").html();      
       var mail = el.closest("tr").find("td:eq(1)").html();
       var fone = el.closest("tr").find("td:eq(2)").html();
       var sal  = el.closest("tr").find("td:eq(3)").html();
        
        //insere uma classe na linha pra marcá-la
        el.closest("tr").addClass("active");
        
        //alimenta os campos do modal
        $("#txtNome").val(nome);
        $("#txtMail").val(mail);
        $("#txtFone").val(fone);
        
        
        $("#btAdd").data("tipo","E");
        $("#btAdd").html("<i class='fa fa-edit'></i> Editar");
        
        $("#insere").modal("show");
        
    });
    

    
    
});




$(document).ready(function() {
   $("#btAdd").click(function() {
       var nome = $("#txtNome").val();
       var mail = $("#txtMail").val();
       var fone = $("#txtFone").val();
       var cpf= $("#texcpf").val();
       var cep= $("#texcep").val();
       var cpf= $("#texcpf").val();
       var password= $("#texSenha").val();
       
       
       if($(this).data("tipo")=="N") {
       
           bloco  = "<tr>";
           bloco += "<td>" + nome + "</td>";
           bloco += "<td>" + mail + "</td>";
           bloco += "<td>" + fone + "</td>";
           bloco += "<td style='text-align:right' class='valor'>" + sal + "</td>";
           bloco += "<td>";
           bloco += "   <button class='btn btn-warning btn-sm btEdit'><i class='fa fa-pencil'></i> Editar</button>";
           bloco += "</td>";
           bloco += "<td>";
           bloco += "<button class='btn btn-success btn-sm btDel'><i class='fa fa-times'></i> Apagar</button>";
           bloco += "</td>";
           bloco += "</tr>";

           $("#tabela tbody").append(bloco);
           $("form")[0].reset();
           conta();
       } else {
           $(".active").find("td:eq(0)").html(nome);
           $(".active").find("td:eq(1)").html(mail);
           $(".active").find("td:eq(2)").html(fone);
           $(".active").find("td:eq(3)").html(sal);
           
           $(".active").removeClass("active");
           $("#form")[0].reset();
       }
       
       $("#insere").modal("hide");
           
   }); 
    
        $("#btRealizarCompra").click(function() {
        $("#ComprarAgora").modal("close");
    });
    
    
    $("#btComprarAgora").click(function() {
        $("#btAdd").data("tipo","N");
        $("#ComprarAgora").modal("show");
    });
    
    $(document).on("click",".btComprarAgora",function() {
       el = $(this);
       var nome = el.closest("tr").find("td:eq(0)").html();      
       var mail = el.closest("tr").find("td:eq(1)").html();
       var fone = el.closest("tr").find("td:eq(2)").html();
       var sal  = el.closest("tr").find("td:eq(3)").html();
        
        //insere uma classe na linha pra marcá-la
        el.closest("tr").addClass("active");
        
        //alimenta os campos do modal
        $("#txtNome").val(nome);
        $("#txtMail").val(mail);
        $("#txtFone").val(fone);
        
        
        $("#btAdd").data("tipo","E");
        $("#btAdd").html("<i class='fa fa-edit'></i> Editar");
        
        $("#insere").modal("show");
        
        
    });
    
    

    
    
});







$(document).ready(function(){
   
    var cont = 0;
    numCarros = $(".thumb").length-1;
    
    function mostraCarro(idx) {
        el = $(".thumb:eq(" + idx + ")");
        img = el.attr("src");
        tit = el.attr("title");
        
        //joga na imagem grande
        $("#imgGrande img").hide();
        $("#imgGrande img").attr("src",img);
        $("#legenda").html(tit);
        $("#imgGrande img").fadeIn();
    }
    
    
    $(".thumb").click(function() {
        var id = $(this).index(".thumb");
        mostraCarro(id);
    });
    
    $("#flechaDir").click(function(ev) {
        ev.preventDefault();
        cont++;
        if(cont > numCarros) cont = 0;
        mostraCarro(cont);
    });
    
    $("#flechaEsq").click(function(ev) {
        ev.preventDefault();
        cont--;
        if(cont < 0) cont = numCarros;
        mostraCarro(cont);
    });
    
    $("#lupa").click(function(ev) {
        ev.preventDefault();
        img = $("#imgGrande img").attr("src");
        tit = $("#legenda").html();
        //joga no modal
        $("#detImagem").attr("src",img);
        $("#detLegenda").html(tit);
        $("#mdViewImg").modal("show");
    });
    
    $(".trocaFundo").click(function() {
        var fundo = $(this).data("fundo");
        $("body").css({
            "background-image":"url(" + fundo + ")"
        });
    });   
    
    
    $("#play").click(function(ev) {
        ev.preventDefault();
        x = setInterval(function() {
            $("#flechaDir").trigger("click");
        }, 3000);
    });
    $("#pausa").click(function(ev) {
        ev.preventDefault();
        clearInterval(x);
    });
    
    $("#play").trigger("click");
    
    
    
    
});

$(document).ready(function(){
   
    var cont = 0;
    numProduto = $(".colar").length-1;
    
    function mostraProduto(idx) {
        el = $(".colar:eq(" + idx + ")");
        img = el.attr("src");
        tit = el.attr("title");
        
        //joga na imagem grande
        $("#imgfotoCentralProduto img").hide();
        $("#imgfotoCentralProduto img").attr("src",img);
        $("#legenda").html(tit);
        $("#imgfotoCentralProduto img").fadeIn();
    }
    
    $(".colar").click(function() {
        var id = $(this).index(".colar");
        mostraProduto(id);
    });
});

//ki//ji
$(document).ready(function(){
   
    var cont = 0;
    numCarros = $(".thumb").length-1;
    
    function mostraCarro(idx) {
        el = $(".thumb:eq(" + idx + ")");
        img = el.attr("src");
        tit = el.attr("title");
        
        //joga na imagem grande
        $("#imgGrande img").hide();
        $("#imgGrande img").attr("src",img);
        $("#legenda").html(tit);
        $("#imgGrande img").fadeIn();
    }
    
    
    $(".thumb").click(function() {
        var id = $(this).index(".thumb");
        mostraCarro(id);
    });
    
   
    
    
    
    
});


$(document).ready(function() {
            $(".detalhe").slideUp();
        
    
            
            $("#botao01").click(function() {
                $(".detalhe").slideDown();
            });
            $("#botao02").click(function() {
                $(".detalhe").slideUp();
            });
            /*
            $(".btEsconde").click(function() {
                idx = $(this).index(".btEsconde");
                $(".detalhe:eq(" + idx + ")").slideToggle();
            });
            */
            $(".btEsconde").click(function() {
               $(this).parent().next().slideToggle(); 
            });
            
            
            
        });


