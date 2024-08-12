import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs()',() => {
    test('debe retornarun arreglo de gifs', async() => {
        const gifs = await getGifs('Dragon Ball');
        console.log(gifs);
       
        
    });
});