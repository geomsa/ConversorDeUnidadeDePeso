function calculaConversao(event){
    event.preventDefault()
    const pesoInicial = document.getElementById('pesoInicial').value
    const pesoConvertido = document.getElementById('pesoConvertido').value
    const resultado = document.getElementById('resultado').value
    const valor = document.getElementById('valor').value

    let calculaConversao /*fórmulas de conversão*/

    if(pesoInicial == 'Kg' && pesoConvertido =='lb'){
        calculaConversao = valor * 2.2046
        }else if(pesoInicial == 'Kg' && pesoConvertido == 'oz'){
            calculaConversao = valor * 35.274
        } else if(pesoInicial == 'Kg' && pesoConvertido =='g'){
            calculaConversao = valor * 1000
        } 
    
        if(pesoInicial == 'lb' && pesoConvertido =='Kg'){
        calculaConversao = valor * 0.454
        }else if(pesoInicial == 'lb' && pesoConvertido == 'oz'){
            calculaConversao = valor * 16.000
        } else if(pesoInicial == 'lb' && pesoConvertido == 'g'){
            calculaConversao = valor * 453.592 
        } 
    
        if(pesoInicial == 'oz' && pesoConvertido =='Kg'){
        calculaConversao = valor * 0.0283
        }else if(pesoInicial == 'oz'&& pesoConvertido == 'lb'){
            calculaConversao = valor * 0.0625
        } else if(pesoInicial == 'oz'&& pesoConvertido == 'g'){
            calculaConversao = valor * 28.35
        } 
    
        if(pesoInicial == 'g'&& pesoConvertido == 'lb'){
            calculaConversao = valor * 0.00220462
        }else if(pesoInicial == 'g'&& pesoConvertido == 'oz'){
            calculaConversao = valor * 0.0353
        }else if(pesoInicial == 'g' && pesoConvertido =='Kg'){
            calculaConversao = valor / 1000
        }else if(pesoInicial == pesoConvertido){
            calculaConversao = 'Insira um opção válida para converter em'
        }
        
    document.getElementById('resultado').innerHTML = ` O resultado é: ${calculaConversao} ${pesoConvertido}`

    
    
   
}
