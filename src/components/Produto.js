export default function Produto({nome,imagem}){
    return(
        <container>
    <div className="produto" text-transform = 'uppercase'>
        <img src = {imagem} />
        <p>{nome}</p>
    </div>
    </container>
    );
}