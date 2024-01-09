//Buscar os links salvos//

export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || []

    return linksSaves;
}

//Salvar um link no localStorage//[

export async function saveLink(key, newLink){

    let linksStorage = await getLinkSave(key);

//Evitar duplicação de id dos links ou duplicação dos links
const hasLink = linksStorage.some(Link => Link.id === newLink.id)
if(hasLink){
console.log("Esse link já existe em sua lista!")
return;
}
//Adicionar o link na nova lista//
linksStorage.push(newLink)
await localStorage.setItem(key, JSON.stringify(linksStorage))
console.log("Link salvo com sucesso!");
}

//deletar link //

export function deleteLink(Links, id){
    let myLinks = Links.filter( item => {
        return(item.id !== id)
    })
    localStorage.setItem("@encurtaLink", JSON.stringify(myLinks))
    console.log("Link deletado com sucesso!")
    return myLinks;
}
