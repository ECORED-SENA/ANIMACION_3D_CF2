export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generación de ideas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La Regla del 9',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Asociación libre',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Poema dadaísta',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Silogismos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Cadáver exquisito',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Cartografía social',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Cuaderno de ideas',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Esquemas de narración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Modelo Aristotélico y el paradigma',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'El viaje del héroe',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Creación y diseño de personajes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Guion',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'El guion en la animación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Guion literario',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aranda, D. Pujol, C. y Felipe, F. (2016). Cómo construir un buen guion audiovisual. Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/58615',
    },

    {
      referencia:
        'Baiz, F. (s.f). Claves para la escritura de un buen guion de cine. Consultado el 28 de agosto de 2020 en: ',
      link:
        'https://issuu.com/pedromenesesmontes/docs/claves-para-la-escritura-de-un-buen',
    },

    {
      referencia: 'Castillo, A. P. (2013). Estructura dramática. ',
      link: 'https://es.calameo.com/read/004944011fa9360605829',
    },

    {
      referencia:
        'Cubero, D. E. (2017). Cómo aplicar el viaje del héroe a tu historia. ',
      link: 'https://cursosdeguion.com/55-como-aplicar-viaje-del-heroe/',
    },

    {
      referencia: 'Field, S. (1995). El manual del guionista. Plot Ediciones. ',
      link:
        'http://www.laescaleta.mx/wp-content/uploads/2017/09/syd-field-el-manual-del-guionista-.pdf',
    },

    {
      referencia:
        'Forero, M. T. (2017). Los secretos de un buen guion. Eudeba. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/119864',
    },

    {
      referencia:
        'Hunt, R. E., Marland J., Richards, J. & Carvajal, A. (2010). Bases Del Cine: Guion. Parramón. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/156au80/sena_aleph000054287',
    },

    {
      referencia:
        'Voytilla, S. (1999). Myth and the Movies: Discovering the Mythic Structure of 50 Unforgettable Films. Studio City CA, EEUU: Michael Wiese Productions. ',
      link:
        'https://www.tlu.ee/~rajaleid/montaazh/Hero%27s%20Journey%20Arch.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Arquetipo',
      significado:
        'modelo o patrón original que sirve como pauta, del cual se derivan otros objetos, ideas o conceptos.',
    },
    {
      termino: 'Clímax',
      significado:
        'es el punto de mayor tensión dramática, después del cual todo se concluye o soluciona.',
    },
    {
      termino: 'Flashback',
      significado:
        'es un recurso usado en el cine para mostrar acciones del pasado o recuerdos del personaje.',
    },
    {
      termino: 'Flashforward',
      significado:
        'es un recurso usado en el cine para mostrar acciones del futuro.',
    },
    {
      termino: 'Peripecia',
      significado:
        'las peripecias normalmente son situaciones adversas que suceden repentinamente y logran alterar la determinación del personaje central. De esta manera las peripecias cambian la condición en la que se encuentra la historia, pero no consiguen resolver el conflicto; sin embargo, logran acercar al personaje a su meta u objetivo.',
    },
    {
      termino: 'Punto argumental (plot point)',
      significado:
        'acontecimiento que cambia radicalmente el sentido de la acción o historia.',
    },
  ],
  complementario: [
    {
      texto:
        'David Esteban Cubero, (2017), Cómo aplicar el viaje del héroe a tu historia.',
      tipo: 'Podcast, blog',
      link: 'https://cursosdeguion.com/55-como-aplicar-viaje-del-heroe/ ',
    },
    {
      texto: 'Sala 1 - Canal de cine y series, (2017), El Viaje del Héroe.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RF1uKuKCIgE',
    },
    {
      texto: 'Luis Francisco Pérez, (s.f.), Curso cinematográfico.',
      tipo: 'Página web',
      link: 'https://aprendercine.com/',
    },
    {
      texto: 'Luis Francisco Pérez, (s.f.), Curso cinematográfico.',
      tipo: 'Canal de YouTube Aprendercine.com',
      link: 'https://www.youtube.com/c/Aprendercinecom',
    },
    {
      texto:
        'Sinjania, (2019), 25 cosas en las que pensar antes de crear un personaje.',
      tipo: 'Portal web',
      link: 'https://www.sinjania.com/crear-un-personaje/',
    },

    {
      texto: 'Andrew Stanton, (2012), The Clues to a great story.',
      tipo: 'Página web',
      link:
        'https://www.ted.com/talks/andrew_stanton_the_clues_to_a_great_story ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Alexander García',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martin',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Eulises Orduz'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
