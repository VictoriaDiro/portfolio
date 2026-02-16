export const blogPosts = {
    "20251001": `
        <article class="blog__post blog-20251001">
            <h2>Guía completa de Markdown</h2>
            <img src="../assets/images/blog/20251001/markdown.png" alt="" class="blog__main-image"> 
    
            <p class="">Markdown nació como herramienta de conversión de texto plano a HTML. Esta herramienta fue creada en 2004 por John Gruber, y se distribuye de manera gratuita bajo una licencia BSD.</p>
            <p class="">Aunque en realidad Markdown también se considera un lenguaje que tiene la finalidad de permitir crear contenido de una manera sencilla de escribir, y que en todo momento mantenga un diseño legible, así que para simplificar puedes considerar Markdown como un método de escritura.</p>
            <p class="">Fuente: www.markdown.es</p>

            <p class="">Personalmente, utlizo muchísimo Markdown para tomar notas relacionadas con el mundo de la programación, y a lo largo de este tiempo he encontrado algunas sintáxis menos conocidas de este lenguaje, aquí comparto una guía completa para que puedas consultarlas cuando tengas alguna duda.</p>

            <h3 class="">Encabezados</h3>
            <pre class="">
                # Encabezado 1
                ## Encabezado 2
                ### Encabezado 3
                #### Encabezado 4
                ##### Encabezado 5
                ###### Encabezado 6
            </pre>
            <img src="../assets/images/blog/20251001/20251001_encabezados.png" alt="Encabezados" class="">

            <h3 class="">Citas</h3>
            <pre class="">
                > Si no me podéis dar poesía, ¿me podéis dar ciencia poética?. — Ada Lovelace
            </pre>
            <img src="../assets/images/blog/20251001/20251001_citas.png" alt="Citas" class="">

            <h3 class="">Citas anidadas</h3>
            <pre class="">
                > Si no me podéis dar poesía, ¿me podéis dar ciencia poética?.
                >> Ada Lovelace
            </pre>
            <img src="../assets/images/blog/20251001/20251001_citas-anidadas.png" alt="Citas anidadas" class="">

            <h3 class="">Listas no ordernadas</h3>
            <p class="">Se pueden utilizar diferentes signos de inicio de ítems del listado.</p>
            <pre class="">
                - Elemento de lista 1
                - Elemento de lista 2
                * Elemento de lista 3
                * Elemento de lista 4
                + Elemento de lista 5
                + Elemento de lista 6
            </pre>
            <img src="../assets/images/blog/20251001/20251001_listas-no-ordenadas.png" alt="Listas no ordernadas" class="">

            <h3 class="">Listas ordenadas</h3>
            <pre class="">
                1. Elemento de lista
                2. Elemento de lista
                3. Elemento de lista
            </pre>
            <img src="../assets/images/blog/20251001/20251001_listas-ordenadas.png" alt="Listas ordenadas" class="">

            <h3 class="">Listas anidadas</h3>
            <pre class="">
                - Elemento de lista 1
                - Elemento de lista 2
                    - Elemento de lista 3
                    - Elemento de lista 4
                        - Elemento de lista 5
                        - Elemento de lista 6
            </pre>
            <img src="../assets/images/blog/20251001/20251001_listas-anidadas.png" alt="Listas anidadas" class="">

            <h3 class="">Listas de tareas</h3>
            <pre class="">
                ### Solar System Exploration, 1950s – 1960s
                - [ ] Mercury
                - [x] Venus
                - [x] Earth (Orbit/Moon)
                - [x] Mars
                - [ ] Jupiter
                - [ ] Saturn
                - [ ] Uranus
                - [ ] Neptune
                - [ ] Comet Haley
            </pre>
            <img src="../assets/images/blog/20251001/20251001_listas-de-tareas.png" alt="Listas de tareas" class="">

            <h3 class="">Líneas horizontales</h3>
            <pre class="">
                ***
                ---
                ___
            </pre>
            <img src="../assets/images/blog/20251001/20251001_lineas-horizontales.png" alt="Líneas horizontales" class="">

            <h3 class="">Tipos de texto</h3>
            <pre class="">
                *cursiva*
                _cursiva_
                **negrita**
                __negrita__
                ***cursiva y negrita***
                ___cursiva y negrita___
                ~~tachado~~
            </pre>
            <img src="../assets/images/blog/20251001/20251001_tipos-de-texto.png" alt="Tipos de texto" class="">

            <h3 class="">Enlaces</h3>
            <pre class="">
                [enlace en línea](http://www.web.com)
            </pre>
            <img src="../assets/images/blog/20251001/20251001_enlaces.png" alt="Enlaces" class="">

            <h3 class="">Imágenes</h3>
            <pre class="">
                ![Texto alternativo](images/gato_con_gafas_de_sol.jpg)
            </pre>
            <img src="../assets/images/blog/20251001/20251001_imagenes.png" alt="Imágenes" class="">

            <h3 class="">Imágenes con enlace</h3>
            <pre class="">
                [![Click here](images/click-here.jpg)](https://www.google.com/)
            </pre>
            <img src="../assets/images/blog/20251001/20251001_imagenes-con-enlace.png" alt="Imágenes con enlace" class="">

            <h3 class="">Tablas</h3>
            <pre class="">
                | Cabecera 1 | Caecera 2 |
                | -- | -- |
                | Contenido 1 | Contenido 2 |
                | Contenido 1 | Contenido 2 |
                | Contenido 1 | Contenido 2 |
            </pre>
            <img src="../assets/images/blog/20251001/20251001_tablas.png" alt="Tablas" class="">

            <h3 class="">Tablas con alineado de contenido</h3>
            <p class="">Existe la posibilidad de indicar con estos dos puntos en el separador el lado de la alineación que se desea, añadiéndolo solo a un lado u a otro.</p>
            <pre class="">
                | Cabcera | Cabecera con texto largo, item centrado |
                | :--: | :--: |
                | Item | Item |
                | Item | Item | 
            </pre>
            <img src="../assets/images/blog/20251001/20251001_tablas-con-alineado.png" alt="Tablas con alineado de contenido" class="">

            <h3 class="">Tablas con elimentos listados internos</h3>
            <pre class="">
                | Proyecto     | Dificultad | Tareas                        |
                | ------------ | :--------: | ----------------------------- |
                | Proyecto 1   | ♥ ♥ ♥ ♥    | &lt;li&gt;Item1&lt;/li&gt;&lt;/li&gt;Item2&lt;/li&gt; |
                | Proyecto 1   | ♥ ♥ ♥      | &lt;li&gt;Item1&lt;/li&gt;&lt;/li&gt;Item2&lt;/li&gt; |
            </pre>
            <img src="../assets/images/blog/20251001/20251001_tablas-con-listados.png" alt="Tablas con elimentos listados internos" class="">

            <h3 class="">Línea de Código</h3>
            <pre class="">
                &#96;Esto es una línea de código&#96;
            </pre>
            <img src="../assets/images/blog/20251001/20251001_linea-de-codigo.png" alt="Línea de Código" class="">

            <h3 class="">Bloque de Código</h3>
            <p class="">Especificando el leguaje que se está comentando la parte visual tomará unos colores u otros en función de dicho leguaje.</p>
            <pre class="">
                &#96;&#96;&#96;css
                    /* Esto es un comentario dentro de un bloque de código */
                    css {
                        font: Esto es un bloque de codigo;
                    }
                &#96;&#96;&#96;
            </pre>
            <img src="../assets/images/blog/20251001/20251001_bloque-de-codigo.png" alt="Bloque de Código" class="">

            <h3 class="">Listado de contenidos con ancla</h3>
            <pre class="">
                - [Heading](#heading)
                    * [Sub-heading](#sub-heading)
                        + [Sub-sub-heading](#sub-sub-heading)
                # Heading levels
                > This is a fixture to test heading levels
                <!-- toc -->
                ## Heading
                This is an h1 heading
                ### Sub-heading
                This is an h2 heading
                #### Sub-sub-heading
                This is an h3 heading
            </pre>
            <img src="../assets/images/blog/20251001/20251001_contenido-con-ancla.png" alt="Listado de contenidos con ancla" class="">

            <h3 class="">Omitir markdown</h3>
            <p class="">Sólo hace falta añadir una barra invertida ( &#92; ) para omitir cualquier símbolos de Markdown, así, cualquiera de las normas anteriores no tendrá efecto.</p>
        </article>
    `,

    // "20251002": `
    //     <article>
    //         <h2>Segundo post de ejemplo</h2>
    //         <p>Contenido del segundo post...</p>
    //     </article>
    // `
};