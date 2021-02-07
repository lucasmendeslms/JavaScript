/*As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto...*/

const bissexto = (ano) => {

    if (ano % 4 == 0) {

        if (ano % 100 != 0) { console.log('\n' + ano + ': Ano Bissexto !!') }

        else if (ano % 100 == 0 && ano % 400 != 0) { console.log('\n' + ano + ': Não é Bissexto !!') }

        else { console.log('\n' + ano + ': Ano Bissexto !!') }

    } else { console.log('\n' + ano + ': Não é Bissexto !!') }

}

bissexto(1992)

bissexto(2000)

bissexto(1900)

bissexto(2022)

bissexto(1584)

bissexto(1696)

bissexto(1728)

bissexto(1912)