/**
 * Lista de laboratorios audiovisuales de investigación en México
 * 
 * Cada elemento contiene las siguientes propiedades (obligatorios con asterísco):
 * {
 *  name*: string, // nombre del laboratorio
 *  description*: string, // breve descripción
 *  keywords: [string], // actividades que se realizan
 *  socialMedia: [{
 *      url: string, // dirección web
 *      username: string, // nombre de perfil/cuenta/usuario
 *      type: string, // nombre de la red social
 *      icon: string, // Material Design icono a mostrar
 *      faIcon: string, // Font Awesome icono a mostrar
 *  }],
 *  contact: {
 *      mail: string, // correo electrónico
 *      name: string, // Nombre de contacto
 *  },
 *  website: string, // URL de la página web
 *  fullLocation*: {
 *      name: string, // Dirección
 *      latLng*: [number, number], // Ubicación GPS (latitud, longitud)
 *      url: string, // Enlace de Google Maps
 *  },
 *  images: {
 *      path: string, // Nombre de directorio con imagenes
 *      src: [string], // Nombres de srchivos de imagen (jpg y png)
 *  },
 *  video: string, // Enlace de YouTube
 *  verified: boolean, // La información se verificó desde formulario en línea
 * }
 */

export const laboratorios = [
    {
        name: "Laboratorio Nacional de Materiales Orales (LANMO)",
        id: 1,
        description:
        "El Laboratorio Nacional de Materiales Orales es un espacio de trabajo interinstitucional para el estudio multidisciplinario de los discursos orales y las manifestaciones asociadas a ellos (gestos, sonoridad, memoria, corporalidad, ritualidad, expresiones musicales, etc.). Con esto se pretende abordar desde distintas perspectivas un tipo de materiales orales, que son el objeto de estudio para entender dinámicas sociales, formas de comunicación, estructuras de pensamiento, conformación de saberes locales, prácticas tradicionales, manifestaciones artísticas, etc.",
        keywords: ['Digitalización', 'Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita', 'Resguardo'],
        socialMedia: [
            {
                url: "https://www.facebook.com/lanmo.mx",
                username: "lanmo.mx",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
            {
                url: "https://www.instagram.com/lanmo.mx",
                username: "lanmo.mx",
                type: "instagram",
                icon: "mdi-instagram",
                faIcon: "fa-brands fa-instagram",
            },
            {
                url: "https://twitter.com/lanmo_mx",
                username: "lanmo_mx",
                type: "twitter",
                icon: "mdi-twitter",
                faIcon: "fa-brands fa-twitter",
            },
            {
                url: 'https://www.tiktok.com/@lanmo.mx',
                username: 'lanmo.mx',
                type: 'tiktok',
                icon: 'mdi-video',
                faIcon: "fa-brands fa-tiktok",
            },
        ],
        contact: {
            mail: "andres.arroyo@lanmo.unam.mx",
            name: "",
        },
        website: "https://lanmo.unam.mx/",
        location: "Michoacán",
        fullLocation: {
            name: "Escuela Nacional de Estudios Superiores Unidad Morelia, UNAM Campus Morelia",
            latLng: [19.64957329489176, -101.22234970227854],
            url: "https://goo.gl/maps/nqpnE573rSoEvZmi7",
        },
        images: {
            path: "LANMO",
            src: [
                "LANMO_V2 - Andres Arroyo Vallín.png",
                "Repositorio Color-17 - Andres Arroyo Vallín.jpg",
                "Repositorio Color-25 - Andres Arroyo Vallín.jpg",
                "Repositorio Color-30 - Andres Arroyo Vallín.jpg",
            ],
        },
        video: 'https://www.youtube.com/embed/YEn9H2wzaNk',
        verified: true,
    },
    // {
    //   // No participó en el Encuentro de Laboratorios 2022
    //   name: "El Archivo de la Palabra: Taller de Historia Oral",
    //   description:
    //     "Constituido por un grupo de profesores de la Facultad de Ciencias Antropológicas de la Universidad Autónoma de Yucatán en torno a la práctica de la historia oral, imparte cursos de historia oral a nivel licenciatura y doctorado, y se encuentra recopilando los testimonios orales de los normalista de la península. Nuestro interés como grupo de trabajo está en consolidar nuestros planteamientos teóricos-metodológicos de la historial para que a través del trabajo interdisciplinario pueda construirse nuevas perspectivas para la investigación social e histórica.",
    //   keywords: ['Docencia', 'Investigación'],
    //   socialMedia: [],
    //   contact: {
    //     mail: "lorgio.coba@correo.uady.mx",
    //     name: "Lorgio Gilberto Cobá Noh",
    //   },
    //   website: "",
    //   fullLocation: {
    //     name: "Universidad Autónoma de Yucatán, Facultad de Ciencias Antropológicas",
    //     latLng: [21.025869788653967, -89.55807547800507],
    //     url: "https://goo.gl/maps/mPWi2s4E8hiY6UgW9",
    //   },
    //   images: {
    //     path: "",
    //     src: [],
    //   },
    //   video: '',
    //   verified: false,
    // },
    {
        name: "Laboratorio de Medios UCEMICH",
        id: 2,
        description:
        "El Laboratorio de Medios UCEMICH, es un espacio que nació dentro de la Licenciatura en Estudios Multiculturales, de la Universidad de La Ciénega del Estado de Michoacán de Ocampo, la cual comprende tres ejes formativos: Investigación, gestión cultural y producción de medios. Su finalidad es que estudiantes, profesores e investigadores cuenten con las herramientas y tecnologías para que desarrollen sus actividades escolares, académicas y de investigación. Se impulsa la producción audiovisual estudiantil: cortometrajes, reportajes, programas de televisión y podcast. Asimismo, de la mano del LabMed, surgió la iniciativa de crear el Encuentro y Muestrario de Investigaciones Audiovisuales. Este proyecto se encuentra en etapa de consolidación y ampliación de su oferta, actividades y alcance.",
        keywords: ['Docencia', 'Investigación', 'Producción AV'],
        socialMedia: [
            {
                url: "https://www.facebook.com/lab.med.9469",
                username: "lab.med.9469",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
            {
                url: "https://www.youtube.com/@laboratoriodemediosucemich5898",
                username: "laboratoriodemediosucemich5898",
                type: "youtube",
                icon: "mdi-youtube",
                faIcon: "fa-brands fa-youtube",
            },
        ],
        contact: {
            // mail: "rzepeda@ucemich.edu.mx",
            mail: "labmedios@ucemich.edu.mx",
            name: "Roberto Zepeda Anaya",
        },
        website: "",
        location: "Michoacán",
        fullLocation: {
            name: "Universidad de La Ciénega del Estado de Michoacán de Ocampo (UCEMICH)",
            latLng: [20.01450176227876, -102.74359077448634],
            url: "https://goo.gl/maps/US3AoS4eSG2GCLiW9",
        },
        images: {
            path: "UCEMICH",
            src: ['LABORATORIOS DE MEDIOS ucemich blanco.png', 'LABORATORIOS DE MEDIOS ucemich color.png'],
        },
        video: 'https://www.youtube.com/embed/3M_mUw5gPvE',
        verified: true,
    },
    {
        name: 'Laboratorio de Investigación Audiovisual, Secundaria Mixta 59',
        id: 3,
        description:
        "Un proyecto de investigación audiovisual con alumnos de educación básica, historia oral y documental, con el objetivo de incorporar en la formación de los alumnos nociones básicas de investigación de temas basados en testimonios, búsqueda de archivos familiares y las técnicas de registro en imagen y sonido. Se conforma de dos vertientes, la asignatura Taller de Investigación Audiovisual y el Laboratorio de Producción",
        keywords: ['Docencia', 'Investigación'],
        socialMedia: [
            {
                url: "https://www.youtube.com/@liainvestigacionaudiovisua632",
                username: "liainvestigacionaudiovisua632",
                type: "youtube",
                icon: "mdi-youtube",
                faIcon: "fa-brands fa-youtube",
            },
        ],
        contact: {
            mail: "kultudoc@gmail.com",
            name: "Fernando López Martínez",
        },
        website: "",
        location: "Jalisco",
        fullLocation: {
            name: "Secundaria Mixta 59, Tlaquepaque, Jalisco",
            latLng: [20.615029095430028, -103.31401318508095],
            url: "https://goo.gl/maps/1jUyzgx3FpjKXz3P9",
        },
        images: {
            path: "Secundaria",
            src: ["Secundaria1.jpg", "Secundaria2.jpg", "Secundaria3.jpg"],
        },
        video: 'https://www.youtube.com/embed/TxBcpz1OVvk',
        verified: true,
    },
    {
        name: "Laboratorio de Investigación-Creación Audiovisual (Lab i-CreA)",
        id: 4,
        description:
        'El Lab i-CreA nace en 2019 el marco del proyecto de investigación "Comunidades Emergentes de Conocimiento y Procesos de Investigación-Creación Audiovisual" ganador de la convocatoria Ciencia Básica Fondo SEP-CONACYT , dentro del cual se plantea que el conocimiento se genera y circula en formatos que van más allá del textual y se propone la creación de sistemas de información en formatos visuales, sonoros, cartográficos, entre otros. Es producto también de más de 10 años de trabajo de investigación en los cruces entre artes y ciencias sociales. Desde perspectivas teóricas relacionadas con la interdisciplina, los sistemas complejos, las metodologías participativas, los estudios visuales, asumimos que la investigación/creación tiene lugar cuando implica reflexividad creativa constante. ',
        keywords: ['Difusión', 'Investigación', 'Producción AV'],
        socialMedia: [],
        contact: {
            mail: "adrihana@gmail.com",
            name: "Adriana Marcela Moreno Acosta",
        },
        website: "",
        location: "Coahuila",
        fullLocation: {
            name: "Facultad de Ciencias Sociales, Universidad Autónoma de Coahuila",
            latLng: [25.421544273802244, -101.00076170221335],
            url: "https://goo.gl/maps/TdjHccpPfhPhW6Va8",
        },
        images: {
            path: "Lab i-CreA",
            src: ["Logo Lab i-CreA - Adriana Moreno.png"],
        },
        video: 'https://www.youtube.com/embed/Xs7J4lzq3PY',
        verified: true,
    },
    {
        name: "Laboratorio Iberoamericano de Documental",
        id: 5,
        description:
        "Espacio de reflexión, experimentación y producción documental perteneciente al Departamento de Comunicación de la Universidad Iberoamericana Ciudad de México.  Trabajamos con una perspectiva crítica y expandida del arte documental como un modo de investigación e intervención de la realidad. Promovemos la innovación técnica y narrativa mediante estrategias pedagógicas y estéticas transmedia. ",
        keywords: ['Docencia', 'Investigación', 'Producción AV'],
        socialMedia: [
            {
                url: "https://www.facebook.com/iberodocslab",
                username: "iberodocslab",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
            {
                url: "https://www.instagram.com/iberodocslab/",
                username: "iberodocslab",
                type: "instagram",
                icon: "mdi-instagram",
                faIcon: "fa-brands fa-instagram",
            },
        ],
        contact: {
            mail: "pablo.martinez@ibero.mx",
            name: "Pablo Martínez-Zárate",
        },
        website: "https://iberodocslab.org",
        location: "Ciudad de México",
        fullLocation: {
            name: "Universidad Iberoamericana, Ciudad de México",
            latLng: [19.369799781902778, -99.2638998033329],
            url: "https://goo.gl/maps/ezFhDVWSDZqLdrms9",
        },
        images: {
            path: "IberoDocsLab",
            src: ['laboratorioiberoamericano.png'],
        },
        video: 'https://www.youtube.com/embed/-pEPJP33IJo',
        verified: true,
    },
    {
        name: 'Laboratorio de lo Invisible',
        id: 6,
        description: 'El Laboratorio de lo Invisible es una iniciativa de experimentación y creación audiovisual para personas con y sin discapacidad, cuenta con 5 años de vida pública. Nace a partir de la colaboración entre Cine para Imaginar (el único colectivo en México que realiza traducción audiovisual y accesibilidad de cine para personas con discapacidad) y personas interesadas en la búsqueda de prácticas participativas entre personas con ceguera o baja visión, y sin ceguera. En la actualidad personas de la Comunidad Sorda de México dedicadas al cine, desarrollan piezas en lengua de señas mexicana, visual vernacular, teatro de sombras con gestualidad, y mediación cultural en Lengua de Señas Mexicana junto al Encuentro de Estudios en Comunidades Sordas ECOS. Es un laboratorio nómada, que ha contado con ediciones en México y en el extranjero. Basamos nuestras prácticas con la intuición y diálogos permanentes con la comunalidad, y experiencias e investigación sentidas, como es La Expansión Social propuesta por el fotógrafo ciego Lorenzo Morales.',
        keywords: ['Digitalización', 'Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita', 'Resguardo'],
        socialMedia: [
            {
                url: "https://www.facebook.com/laboratoriodeloinvisible",
                username: "laboratoriodeloinvisible",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
            {
                url: "https://www.instagram.com/laboratoriodeloinvisible/",
                username: "laboratoriodeloinvisible",
                type: "instagram",
                icon: "mdi-instagram",
                faIcon: "fa-brands fa-instagram",
            },
            {
                url: "https://www.youtube.com/@laboratorioinvisible6490",
                username: "laboratorioinvisible6490",
                type: "youtube",
                icon: "mdi-youtube",
                faIcon: "fa-brands fa-youtube",
            },
            {
                url: "https://vimeo.com/laboinvisible",
                username: "laboinvisible",
                type: "vimeo",
                icon: "mdi-vimeo",
                faIcon: "fa-brands fa-vimeo-v",
            },
        ],
        contact: {
            mail: "laboratoriodeloinvisible@gmail.com",
            name: "Moisés García Rojas",
        },
        website: 'http://www.laboratoriodeloinvisible.com',
        location: "Puebla",
        fullLocation: {
            // Presencial virtual, con múltiples sedes. Solo se incluyó la primera indicada
            name: "CINEMA | Escuela de Cinematografía y Medios Audiovisuales, Puebla",
            latLng: [19.008178409943753, -98.21217772606161],
            url: "https://goo.gl/maps/kzSqNgcDSsjBHqibA",
        },
        images: {
            path: "Invisible",
            src: [
                "28N, Comunidades Sordas Floreciendo, Cortomtraje - Moises Garcia.jpg",
                "Historias de la Comunidad Sorda Largometraje - Moises Garcia.jpg",
                "Laboratorio de lo Invisible Costa Oaxaca - Moises Garcia.jpg",
                "Pintado con Luz Xalapa - Moises Garcia.jpg",
                "Visual Vernacular Puebla - Moises Garcia.jpg",
            ],
        },
        video: 'https://www.youtube.com/embed/y-iN5FizSpk',
        verified: true,
    },
    {
        name: "Laboratorio Interdisciplinario de Investigación Audiovisual (LABIIA)",
        id: 7,
        description:
        "LABIIA es un espacio de creación colectiva en el que se desarrollan actividades de formación, investigación, archivo y divulgación de saberes a través de proyectos audiovisuales que planteen otras formas de narrar historias. Partimos de un conocimiento interdisciplinario que establece un diálogo entre varias disciplinas, metodologías, saberes, lenguajes, artes, tecnologías y procesos creativos.",
        keywords: ['Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita'],
        socialMedia: [
            {
                url: "https://www.facebook.com/labiiamx",
                username: "labiiamx",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
        ],
        contact: {
            mail: "labiiamx@gmail.com",
            name: "David Flores Magón Guzmán",
        },
        website: "https://labiia.webnode.mx/",
        location: "Jalisco",
        fullLocation: {
            // name: "C. San Felipe 1291 Col Americana, Santa Teresita, 44600 Guadalajara, Jal.",
            name: "Guadalajara, Jalisco",
            latLng: [20.679189968086952, -103.36570563214711],
            url: "https://goo.gl/maps/qCUQU4s1Z1vvDxTQ8",
        },
        images: {
            path: "LABIIA",
            src: ['LAbIIA.jpg'],
        },
        video: 'https://www.youtube.com/embed/C2352z3Eb-E',
        verified: true,
    },
    {
        name: "Laboratorio de Medios Audiovisuales (LaMA)",
        id: 8,
        description:
        "Espacio de investigación, docencia y producción audiovisual que desarrolla actividades diversas divididas en tres grandes categorías: producción, investigación y docencia. Las actividades que desarrolla el laboratorio se pueden identificar con alguna de estas categorías, en la mayoría de los casos están vinculadas, de forma que los procesos que se inician en actividades de docencia (diplomados, talleres, seminarios etc.), pasan a etapas de investigación y producción audiovisual.",
        keywords: ['Digitalización', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita'],
        socialMedia: [
            {
                url: "https://www.facebook.com/LAMACHYCSUACM",
                username: "LAMACHYCSUACM",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
            {
                url: "https://twitter.com/LamaChycsUACM",
                username: "LamaChycsUACM",
                type: "twitter",
                icon: "mdi-twitter",
                faIcon: "fa-brands fa-twitter",
            },
        ],
        website: "",
        contact: {
            mail: "rodrigo.martinez@uacm.edu.mx",
            name: "",
        },
        location: 'Ciudad de México',
        fullLocation: {
            // name: "Calle San Lorenzo 290. Col. Del Valle, Del. Benito Juárez",
            name: "Colegio de Humanidades y Ciencias Sociales, UACM, Ciudad de México",
            latLng: [19.374591361838846, -99.171600800434],
            url: "https://goo.gl/maps/poDp21YeYtendUgQ8",
        },
        images: {
            path: "LAMA",
            src: ["Logo LaMA PNG - Laboratorio Medios Audiovisuales.png"],
        },
        video: 'https://www.youtube.com/embed/4Xw2kEigmnc',
        verified: true,
    },
    {
        name: "Acervo Audiovisual InterNeta. Memoria de las y los Invisibles",
        id: 9,
        description:
        "El Acervo Audiovisual InterNeta tiene el objetivo de acopiar, preservar, conservar y catalogar documentos audiovisuales para su acceso público proactivo y reactivo, ya que dichos documentos contienen valor histórico y cultural producido como herencia audiovisual de quienes “no han sido vistos” hasta ahora por las instituciones culturales y académicas de nuestro país. El Acervo se integra con siete colecciones de documentos audiovisuales realizado con colectivos, grupos y organizaciones indígenas, de pueblos originarios, de cultura popular urbana y de movimientos contraculturales",
        keywords: ['Producción AV', 'Producción escrita', 'Resguardo'],
        socialMedia: [
            {
                url: "https://www.facebook.com/culturasmetropolitanas",
                username: "culturasmetropolitanas",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
            {
                url: "https://www.youtube.com/@culturasmetropolitanas569",
                username: "culturasmetropolitanas569",
                type: "youtube",
                icon: "mdi-youtube",
                faIcon: "fa-brands fa-youtube",
            },
        ],
        contact: {
            mail: "pablogaytansantiago@gmail.com",
            // mail: "pgs_uamx@hotmail.com",
            name: "Pablo Gaytán Santiago",
        },
        website: "",
        location: 'Ciudad de México',
        fullLocation: {
            // name: "Cerrada de Reforma No.8 Sn.Miguel Xicalco, Tlalpan, Ciudad de México",
            name: "Tlalpan, Ciudad de México",
            latLng: [19.235077711906378, -99.16401970333501],
            url: "https://goo.gl/maps/GJ8a3dHHTXVB1SAdA",
        },
        images: {
            path: "InterNeta",
            src: ['inter_gif2-9.png', 'k_w.png'],
        },
        video: 'https://www.youtube.com/embed/cF5txaRLkNg',
        verified: true,
    },
    {
        name: "Tlacuilo Producción Comunitaria",
        id: 10,
        description:
        "Es un colectivo interdisciplinario interesado en el arte, el patrimonio, la comunicación y la historia de las comunidades y pueblos originarios del país. A través del uso de los medios audiovisuales, el colectivo pretende contribuir a la recuperación de la memoria y la formación de un archivo que resguarde la historia individual y colectiva.",
        keywords: ['Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita'],
        socialMedia: [
            {
                url: "https://www.facebook.com/profile.php?id=100077468262989",
                username: "",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
        ],
        contact: {
            mail: "carmen.diaz@uacm.edu.mx",
            name: "María del Carmen Díaz Vázquez",
        },
        website: "",
        location: 'Ciudad de México',
        fullLocation: {
            // name: "Cubículo 213 , Plantel Centro Histórico UACM, Ciudad de México",
            name: "Plantel Centro Histórico UACM, Ciudad de México",
            latLng: [19.423988868706267, -99.13832000228066],
            url: "https://goo.gl/maps/Md76WXvod9gK6R5v7",
        },
        images: {
            path: "Tlacuilo",
            src: [
                "DSC_0377 - María del Carmen Díaz Vázquez.JPG",
                "DSC_0491 - María del Carmen Díaz Vázquez.JPG",
                "DSC_0517 - María del Carmen Díaz Vázquez.JPG",
                "DSC_0596 (1) - María del Carmen Díaz Vázquez.JPG",
                "Logo-Tlacuilo Blanco - María del Carmen Díaz Vázquez.png",
            ],
        },
        video: 'https://www.youtube.com/embed/skQHkii6jKo',
        verified: true,
    },
    {
        name: "Faz a Faz A.C.",
        id: 11,
        description:
        "Faz a Faz tiene como objetivo promover procesos de encuentro y diálogo a través de actividades de exhibición, análisis, formación, realización y resguardo de archivo audiovisual. Por lo anterior, desde 2017 se han desarrollado proyectos que atiendan a dichas áreas del cine aplicando metodologías participativas y colaborativas. Se apuesta por que los procesos se desarrollen al ritmo de quienes se involucran, para así afianzar y solidificar los aprendizajes, alianzas y experiencias.",
        keywords: ['Digitalización', 'Difusión', 'Docencia', 'Investigación', 'Producción AV'],
        socialMedia: [
            {
                url: "https://www.facebook.com/PerfilFFaz",
                username: "PerfilFFaz",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
            {
                url: "https://vimeo.com/fazafaz",
                username: "fazafaz",
                type: "vimeo",
                icon: "mdi-vimeo",
                faIcon: "fa-brands fa-vimeo-v",
            },
        ],
        contact: {
            mail: "faf.inbox@gmail.com",
            name: "Diana Isabel Armenta Ramírez",
        },
        website: "",
        location: 'Tabasco',
        fullLocation: {
            name: "Villahermosa, Tabasco",
            latLng: [17.987667771429468, -92.91945043868668],
            url: "https://goo.gl/maps/mPpcpHK7bGBd7MhG7"
        },
        images: {
            path: "Faz a Faz",
            src: ['faf - Diana Armenta.png'],
        },
        video: 'https://www.youtube.com/embed/roQr6WFqZXE',
        verified: true,
    },
    {
        name: "Laboratorio Audiovisual de Investigación Social (LAIS)",
        id: 12,
        description:
        "El Laboratorio Audiovisual de Investigación Social (LAIS) es un espacio colectivo e interdisciplinario dedicado a la investigación social con imágenes. Creado en 2002 con un equipo multidisciplinario, el LAIS realiza estudios que incorporan imágenes y material audiovisual como fuentes primarias de investigación, sean estas recopiladas en diversidad de acervos y colecciones, o bien generadas desde la misma investigación; forma recursos humanos en esta línea de manera permanente; e impulsa la documentación y divulgación de investigaciones sociales y acervos documentales.",
        keywords: ['Digitalización', 'Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita', 'Resguardo'],
        socialMedia: [
            {
                url: "https://www.facebook.com/LAIS.InstitutoMora",
                username: "LAIS.InstitutoMora",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
            {
                url: "https://www.instagram.com/lais.im",
                username: "lais.im",
                type: "instagram",
                icon: "mdi-instagram",
                faIcon: "fa-brands fa-instagram",
            },
            {
                url: "https://www.youtube.com/laismora",
                username: "laismora",
                type: "youtube",
                icon: "mdi-youtube",
                faIcon: "fa-brands fa-youtube",
            },
        ],
        contact: {
            mail: "lais@mora.edu.mx",
            name: "",
        },
        website: "http://lais.mora.edu.mx/",
        location: 'Ciudad de México',
        fullLocation: {
            name: "Instituto Mora, Ciudad de México",
            latLng: [19.376215866305298, -99.18507349164311],
            url: "https://goo.gl/maps/RVPgGkMp4QNyT6a37",
        },
        images: {
            path: "LAIS",
            src: ['Taller_2022.jpg', 'Entrevista Juanita_0005.jpg', 'LIM9875.jpg', 'DSC_0327.jpg', 'LAM_0894.jpg'],
        },
        video: 'https://www.youtube.com/embed/RRjnueT4a58',
        verified: true,
    },
    {
        name: "Laboratorio de Antropología Visual",
        id: 13,
        description:
        "El Laboratorio de Antropología Visual es un espacio dedicado a la investigación y a la docencia en donde alumnos y profesores desarrollan proyectos antropológicos que requieren de la utilización de la fotografía y el video.",
        keywords: ['Difusión', 'Docencia', 'Investigación', 'Producción AV'],
        socialMedia: [
            {
                url: "https://www.facebook.com/labantrovisual",
                username: "labantrovisual",
                type: "facebook",
                icon: "mdi-facebook",
                faIcon: "fa-brands fa-facebook-f",
            },
        ],
        contact: {
            mail: "labantrovisual@gmail.com",
            name: "Karla Ballesteros Gómez",
        },
        website: "https://divcsh.izt.uam.mx/depto_antropologia/",
        location: 'Ciudad de México',
        fullLocation: {
            name: "Universidad Autónoma Metropolitana Unidad Iztapalapa",
            latLng: [19.36600425171695, -99.07274990644807],
            url: "https://goo.gl/maps/FkgoqWQLtJ9ESR44A",
        },
        images: {
            path: "UAM-I",
            src: ["Logo del LAV - LAV UAM-I.png"],
        },
        video: 'https://www.youtube.com/embed/oY15_7XRsi0',
        verified: true,
    },
    {
        name: "Laboratorio Audiovisual del CIESAS",
        id: 14,
        description: "El Laboratorio Audiovisual del CIESAS (LAV) participa en las actividades relacionadas con la producción de conocimiento sociocultural audiovisual en la institución. Realiza proyectos propios como la realización de videos y podcasts y la co-organización del Festival Afrodescendencias, así como el Encuentro de Antropología Visual, integrante de la Red Mexicana de Antropología Visual (REMAV) y miembro de la Red de Investigaciones Audiovisuales del CIESAS (RIAV). Imparte cursos de investigación audiovisual en ciencias sociales y talleres de capacitación en el manejo de diferentes soportes tecnológicos (audio y video); promueve la catalogación y archivo de productos audiovisuales (fotografías, pictografías, registros sonoros y videos) realizados por investigadores de la institución; y participa en el Seminario de Investigación Audiovisual del CIESAS, así como en encuentros nacionales e internacionales sobre temáticas audiovisuales.",
        keywords: ['Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita', 'Resguardo'],
        socialMedia: [
            {
                url: "https://www.youtube.com/CIESASAudiovisual",
                username: "CIESASAudiovisual",
                type: "youtube",
                icon: "mdi-youtube",
                faIcon: "fa-brands fa-youtube",
            },
        ],
        contact: {
            mail: "msa@ciesas.edu.mx",
            name: "Mauricio Sánchez Álvarez",
        },
        website: "https://lab.ciesas.edu.mx/audiovisual/",
        location: 'Ciudad de México',
        fullLocation: {
            name: "Calle Juárez 222, Tlalpan Centro, Tlalpan, Ciudad de México",
            latLng: [19.289301832744933, -99.16887930029213],
            url: "https://goo.gl/maps/DfJPXjL2A6oqyEMx5",
        },
        images: {
            path: "CIESAS",
            src: [
                "Laboratorio CIESAS logo.jpg",
                "IMG_5666.jpg",
                "IMG_5667.jpg",
                "IMG_6953.jpg",
                "IMG_7781.jpg"
            ],
        },
        video: 'https://www.youtube.com/embed/hzhVeJgWVfw',
        verified: false,
    },
    {
        name: "Laboratorio de Antropología Visual de El Colegio de San Luis (LAVSAN)",
        id: 15,
        description:
        "El LAVSAN es un espacio para realizar prácticas e investigación de carácter audiovisual promoviendo el diálogo entre arte y antropología con el fin de construir conocimiento social. Sus objetivos son 1) desarrollar una línea de investigación en antropología visual; 2) fortalecer la investigación y la docencia apoyando a investigadores y a estudiantes con acervo filmográfico y fotográfico, equipo, capacitación audiovisual y vinculación; y 3) contribuir al intercambio, difusión y divulgación de la producción audiovisual etnográfica y antropológica.",
        keywords: ['Docencia', 'Investigación', 'Producción AV'],
        socialMedia: [],
        contact: {
            mail: "lavsan.colsan@gmail.com",
            name: "",
        },
        website: "https://lavsan.colsan.edu.mx/",
        location: 'San Luis Potosí',
        fullLocation: {
            // name: "Parque Macul 155, Colinas del Parque, 78260 San Luis, S.L.P.",
            name: "El Colegio de San Luis (COLSAN), San Luis Potosí",
            latLng: [22.12836307981747, -101.01548413244936],
            url: "https://goo.gl/maps/7hck7h9qG19gtiki7",
        },
        images: {
            path: "LAVSAN",
            src: ["Logo LAVSAN - Frances Paola Garnica Quiñones.png"],
        },
        video: 'https://www.youtube.com/embed/l75ltOBJP3o',
        verified: true,
    },
]