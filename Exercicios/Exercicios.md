# Enunciados

> Trátase de entender `react-router-dom`, a través de exercicios

> Lémbrate que dentro de `react-router-dom` está os seguintes compoñentes `BrowserRoutes, Routes, Route,Outlet, Link, useNavigate e useParams`

> Inicialmente crea un arquivo, o cal, teña unha función que sexa exportada e nese mesmo arquivo xenera o resto de compoñentes, salvo que desexes separalos en arquivos (que é máis adecuado e recomendable)

1. Crea unha ruta , de tal xeito que cando poñas no navegador dita ruta, visualizarás un compoñente que poña:

- ¡ Benvido a miña primeira ruta!
- Ca ruta creada, crea un compoñente que dispoña dun Link que faga que o clicar sobre él vaia á ruta creada

2. Crea outra ruta, a cal, no si escribimos no explorador dita ruta, escriba:

- ¡Benvido a miña segunda ruta!
- A esta, créalle un elemento Link que o clicar vaia a esta.

3. Crea unha ruta , na que crees outra ruta anidada. Éstas deberán ter o seu compoñente.
- Próbaas utilizando o navegador.
- A continuación, crea diferentes Links para ir a eles

4. Crea unha ruta relativa, de tal xeito, que no compoñente recollas o parámetro pasado.
- Próbao utilizando o navegador.
- Posteriormente, utiliza o Link

5. Crea unha ruta, sobre a cal teñas diferentes botóns que permitan ir a diferentes rutas. Para iso, utiliza o Hook `useNavigate`. 

- Crea unha función que o clicar vaia a ruta elexida.
- Crea unha función para a elección da ruta elexida en función dun nome.
- Crea unha función para a elección da ruta en base a un valor numérico.

6. Crea un menú que asocie diferentes rutas, o cal, unha vez que clique sobre cada un deles teña neses compoñentes un botón que volva a ese menú anterior.

7. Crea un menú que teña diferentes links, o cal faga que o pulsar a un Link saia outros Links.
- Un dos links se o clicas, sairá máis links debaixo.
- Outro dos Links deberá ir a outra ruta onde non haberá nada.

