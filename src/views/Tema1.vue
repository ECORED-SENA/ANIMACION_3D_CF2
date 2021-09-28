<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Generación de ideas

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/24Yp0QFbZcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="slide-left") Crear una nueva idea es una de las labores más difíciles que hay, puesto que la inspiración no es algo que llegue espontáneamente en la gran mayoría de los casos, generalmente requiere de trabajo arduo el crear una buena idea; sin embargo, no se puede negar que algunas pocas veces puede llegar mágicamente de la nada, pero para cuando no es el caso, a continuación se proponen algunas metodologías que pueden ayudar a establecer un rumbo efectivo para la creatividad.

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_1.h2 1.1 La Regla del 9

    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        figure
          img.img-a(src='@/assets/curso/tema_1/img_1.png', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-right")
        p John Vorhaus es un guionista de comedia que ha estado activo desde finales de los ochenta y es reconocido entre otras cosas por escribir The comic toolbox y brindar asesoría a Walt Disney Feature Animation.

        p Vorhaus plantea con la regla del 9 que básicamente de cada 10 ideas que un autor escriba, 9 van a ser malas. La intención de este planteamiento es reforzar la necesidad de un trabajo constante y disciplinado para obtener buenos resultados, pues por absurda o mala que sea una idea es fundamental escribirla de principio a fin para que en algún momento se llegue a desarrollar esa buena idea que merece ser contada.

        p Lo primordial es perder el miedo al fracaso, ya que este es solo un paso en el proceso creativo y es primordial entender que fracasar está bien y que a base de esfuerzo y aprender de los errores se puede llegar a un resultado óptimo.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img.img-a(src='@/assets/curso/tema_1/img_2.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              strong #[i The rule of nine: learning to willingly fail]
              p.mb-0 #[i Vorhaus says, “Depressing? Not really. In fact, the rule of nine turns out to be highly liberating because once you embrace it, you instantly and permanently lose the toxic expectation of succeeding every time. It’s that expectation and the consequent fear of failure that give your ferocious editor power over you. Remove the expectation and you remove the power.”]

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_2.h2  1.2 Asociación libre

    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
        p Hay muchas formas de hacer asociación libre, pero el propósito principal es tomar conceptos de forma aleatoria y asociarlos para empezar a crear ideas por absurdas que estas puedan ser. Lo ideal es utilizar un generador de palabras aleatorias de los tantos que se encuentran en internet y por cada palabra que se obtenga tratar de generar una pequeña historia de manera rápida, vale la pena poner límite de tiempo a la generación de cada historia, pues si no es posible crear algo con alguna palabra esto da una pauta para descartarla y pasar a la siguiente.      
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
        figure
          img.img-a(src='@/assets/curso/tema_1/img_3.png', alt='')

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_3.h2 1.3 Poema dadaísta

    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        figure
          img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-right")
        p El dadá fue un movimiento cultural fundado en 1916 en Suiza por el poeta y ensayista Hugo Ball, buscaba rebelarse en contra de las convenciones establecidas en las corrientes artísticas, creó para el campo literario un estilo de escritura automática y sin sentido aparente más allá de burlarse de la escritura convencional. Sin embargo, a día de hoy sirve como herramienta para estimular la creatividad, especialmente en momentos de bloqueo creativo.

        p La técnica consiste básicamente en recortar palabras de un periódico, mezclarlas en una caja o bolsa y empezar a extraerlas para crear un texto, en muchas ocasiones puede generar cosas sin sentido, pero en procura de explorar ideas se puede tener la libertad de ordenar el conjunto de palabras o complementarlo de forma que se obtengan ideas comprensibles.

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_4.h2 1.4 Silogismos

    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
        p El silogismo hace uso de deducciones lógicas para construir conceptos, es una forma de razonamiento deductivo en el que se toman dos planteamientos, una premisa mayor o universal y una premisa menor o particular, a partir de estas premisas se genera un nuevo planteamiento que tiene la función de conclusión.

        p Para empezar, se parte de una premisa mayor que expone una información universal, en segundo lugar, se usa una premisa menor con información específica o puntual para contrastar con la primera, finalmente se obtiene una conclusión originada de una deducción al contrastar la premisa menor con la mayor.
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
        figure
          img.img-a(src='@/assets/curso/tema_1/img_5.png', alt='')

    p.text-center.mb-5(data-aos="flip-up")
      strong De esta forma se podría obtener los siguiente:

    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
            tr.text-center
              td.bg_td.bor1 Premisa A	
              td.bg_td1.bor1 Los perros son animales
            tr.text-center
              td.bg_td.bor1 Premisa B	
              td.bg_td1.bor1 Algunos animales vuelan.
            tr.text-center 
              td.bg_td2 Conclusión	
              td.bg_td1 Algunos perros vuelan
          .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
            p Aunque todos saben y aceptan que en la realidad los perros no vuelan, este podría ser el punto de partida de una gran idea, sobre todo para animación donde los límites solo se encuentran en la imaginación.

            p Vale aclarar que en el sentido filosófico estricto hay una serie de reglas más amplias para evitar llegar a errores en los planteamientos y sus conclusiones, pero como el objetivo es generar un estímulo creativo que permita producir ideas, es válido hacer un uso simplificado del silogismo en procura de la creatividad.

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_5.h2 1.5 Cadáver exquisito

    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
        p El cadáver exquisito es una técnica de creación colectiva en la que varias personas intervienen para generar contenido, sea un texto o una imagen, la técnica funciona de la siguiente manera: un primer autor escribe algo ya sea una palabra o una frase en un papel y lo dobla para ocultar lo que escribió, acto seguido el segundo autor sin tener conocimiento del texto que reposa en el fragmento doblado continúa la escritura y dobla nuevamente el papel para ocultar su escrito y así entregárselo a un tercer autor; este proceso se repite con la cantidad de autores presentes y al final se desdobla el papel y se lee el texto resultante.

        p La técnica se hace de la misma manera para la creación de imágenes, con la diferencia que deben dejarse unas pequeñas líneas de indicio para que los nuevos autores inicien su dibujo desde estas.

        p La técnica se llama así debido a que la frase originada la primera vez que se jugó fue: «Le cadavre - exquis - boira - le vin - nouveau» (El cadáver exquisito beberá el vino nuevo).
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
        figure
          img.img-a(src='@/assets/curso/tema_1/img_6.png', alt='')
  
    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_6.h2 1.6 Cartografía social

    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        figure
          img.img-a(src='@/assets/curso/tema_1/img_6.png', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-right")
        p La cartografía social corresponde a una observación del entorno. En términos simples consiste en salir a la calle y explorar en busca de historias mediante la interacción con los individuos, la documentación fotográfica o escrita de forma que se pueda recopilar información que sirva de fuente de ideas.

        p Una vez realizado el trabajo de campo la idea es generar un mapa donde se plasmen de manera visual las dinámicas sociales identificadas, ubicando los sitios importantes de interacción, como cafés, mercados, sitios de reunión (tiendas) y así mismo los personajes relevantes hallados en cada lugar.

        p En principio no da una idea como tal, pero sí es una fuente valiosa de información para construir historias interesantes desde las vivencias propias.

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_7.h2 1.7 Cuaderno de ideas

    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
        p Una herramienta imprescindible para todo creativo es la libreta de ideas, esta debe convertirse en un acompañante obligatorio para el día a día, pues nunca se sabe en qué lugar se pueden encontrar elementos o situaciones interesantes.

        p Su funcionamiento es simple, se alimenta momento a momento en base de la observación, ya sea a partir de textos mediante la descripción de una imagen o situación que atrae la atención, dibujos rápidos y sencillos que expresen la idea de lo que se observa o incluso la captura de sueños extraños que se tienen en ocasiones. Toda la información consignada, en este cuaderno o libreta, puede convertirse en una fuente inagotable de ideas para estimular la creatividad.
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
        figure
          img.img-a(src='@/assets/curso/tema_1/img_7.png', alt='')



</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
