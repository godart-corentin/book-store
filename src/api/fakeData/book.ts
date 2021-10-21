import {Book} from '../types/book'

export const fakeBooks: Book[] = [
  {
    title: 'Astérix et le Griffon - n°39',
    date: new Date('21-10-2021'),
    authors: [
      'René Goscinny',
      'Albert Uderzo',
      'Didier Conrad',
      'Jean-Yves Ferri',
    ],
    ratings: 3.5,
    cover: 'Astérix-Griffon-n°39-René-Goscinny.jpg',
    price: 9.99,
    description: `Astérix, Obélix et Idéfix sont de retour pour une 39e aventure. Accompagnés du plus célèbre des druides, ils s’apprêtent à partir pour un long voyage en quête d’une créature étrange et terrifiante.

        Mi-aigle, mi-lion, énigmatique à souhait, le Griffon sera l’objet de ce grand voyage !
        Toujours réalisée par le talentueux duo formé par Jean-Yves Ferri au scénario et Didier Conrad au dessin, nul doute que cette nouvelle aventure proposera une quête épique et semée d’embûches à nos héros à la recherche de cet animal fantastique !`,
  },
  {
    title: 'Le Monde sans fin',
    date: new Date('29-10-2021'),
    authors: ['Christophe Blain', 'Jean-Marc Jancovici'],
    ratings: 4,
    cover: 'monde-sans-fin-Christophe-Blain.jpg',
    price: 27,
    description:
      'La rencontre entre un auteur majeur de la bande dessinée et un éminent spécialiste des questions énergétiques et de l’impact sur le climat a abouti à ce projet, comme une évidence, une nécessité de témoigner sur des sujets qui nous concernent tous. Intelligent, limpide, non dénué d’humour, cet ouvrage explique sous forme de chapitres les changements profonds que notre planète vit actuellement et quelles conséquences, déjà observées, ces changements parfois radicaux signifient. Jean-Marc Jancovici étaye sa vision remarquablement argumentée en plaçant la question de l’énergie et du changement climatique au coeur de sa réflexion tout en évoquant les enjeux économiques (la course à la croissance à tout prix est-elle un leurre ?), écologiques et sociétaux. Ce témoignage éclairé s’avère précieux, passionnant et invite à la réflexion sur des sujets parfois clivants, notamment celui de la transition énergétique. Christophe Blain se place dans le rôle du candide, à la façon de son livre "En cuisine avec Alain Passard" et de "Quai d’Orsay" signé avec l’expertise d’un coauteur : un pavé de 120 pages indispensable pour mieux comprendre notre monde, tout simplement !',
  },
  {
    title: "Au-delà de l'affaire de la chloroquine",
    date: new Date('14-10-2021'),
    authors: ['Didier Raoult'],
    ratings: 4,
    cover: 'Au-delà-laffaire-chloroquine-Didier-Raoult.jpg',
    price: 14,
    description: `Chloroquine contre COVID-19 : un médicament à l'innocuité reconnue, et un succès spectaculaire en Chine et à l'IHU de Marseille... La chloroquine a pourtant été interdite en France et a valu au Pr Raoult des attaques d'une violence inouïe. Pourquoi ? Parce que c'est un médicament générique, donc pas cher, alors que la distribution internationale du Remdesivir, non dénué de danger mais pas tombé dans le domaine public, a procuré des bénéfices astronomiques au laboratoire qui le fabrique.
    Ainsi disparaissent des centaines de vieux remèdes efficaces et sans risque, au profit de nouveaux produits qui n'ont pas toujours fait l'objet d'un contrôle très strict, mais ont bénéficié d'un lancement honteux. Études parfois faussées par des liens d'intérêts avec les laboratoires, journalistes scientifiques et médias de tous bords achetés pour promouvoir ces nouveautés, médecins financés pour les prescrire, et scandales à l'avenant mais trop tard.`,
  },
  {
    title: 'Dieu - La science Les preuves',
    date: new Date('13-10-2021'),
    authors: ['Michel-Yves Bolloré', 'Olivier Bonnassies'],
    ratings: 4.5,
    cover: 'Dieu-science-preuves-Michel-Yves-Bolloré.jpg',
    price: 24,
    description: `Trois ans de travail avec plus de vingt scientifiques et de spécialistes de haut niveau : voici révélées les preuves modernes de l'existence de Dieu.

    Pendant près de quatre siècles, de Copernic à Freud en passant par Galilée et Darwin, les découvertes scientifiques se sont accumulées de façon spectaculaire, donnant l'impression qu'il était possible d'expliquer l'Univers sans avoir besoin de recourir à un dieu créateur. Et c'est ainsi qu'au début du XXe siècle, le matérialisme triomphait intellectuellement. De façon aussi imprévue qu'étonnante, le balancier de la science est reparti dans l'autre sens, avec une force incroyable. Les découvertes de la Relativité, de la mécanique quantique, de l'expansion de l'Univers, de sa mort thermique, du Big Bang, du réglage fin de l'Univers ou de la complexité du vivant, se sont succédées. Ces connaissances nouvelles sont venues dynamiter les certitudes ancrées dans l'esprit collectif du XXe siècle, au point que l'on peut dire aujourd'hui que le matérialisme, qui n'a jamais été qu'une croyance comme une autre, est en passe de devenir une croyance irrationnelle. Dans une langue accessible à tous, les auteurs de ce livre retracent de façon passionnante l'histoire de ces avancées et offrent un panorama rigoureux des nouvelles preuves de l'existence de Dieu. À l'orée du XXe siècle, croire en un dieu créateur semblait s'opposer à la science. Aujourd'hui, ne serait-ce pas le contraire ? Une invitation à la réflexion et au débat.`,
  },
  {
    title: 'Goldorak',
    date: new Date('15-10-2021'),
    authors: ['Xavier Dorison'],
    ratings: 4,
    cover: 'BD-Goldorak-Dorison-Xavier.jpg',
    price: 24.9,
    description:
      "La guerre entre les forces de Véga et Goldorak est un lointain souvenir. Actarus et sa soeur sont repartis sur Euphor tandis qu'Alcor et Vénusia tentent de mener une vie normale. Mais, des confins de l'espace, surgit le plus puissant des golgoths : l'Hydragon. Alors que le monstre de l'ultime Division Ruine écrase les armées terriennes, les exigences des derniers représentants de Véga sidèrent la planète : sous peine d'annihilation totale, tous les habitants du Japon ont sept jours pour quitter leur pays et laisser les envahisseurs coloniser l'archipel. Face à cet ultimatum, il ne reste qu'un dernier espoir... Goldorak.",
  },
  {
    title: "La France n'a pas dit son dernier mot",
    date: new Date('15-09-2021'),
    authors: ['Eric Zemmour'],
    ratings: 4.5,
    cover: 'France-pas-dit-son-dernier.jpg',
    price: 21.9,
    description: `
        Dans la tête d'Eric Zemmour. Journal d'une autobiographie politique.
        " J'avais mis au jour dans le Suicide français la mécanique de l'idéologie progressiste qui a conduit notre pays à l'abîme. Mises en danger, ses élites ont compris que la survie de leur projet passerait par la radicalisation du processus de destruction.
        Rarement nous n'avons été aussi affaiblis, désunis, subvertis, envahis qu'aujourd'hui.
        Pas un jour sans sa provocation, sans sa déconstruction, sans sa dérision, sans son humiliation.
        J'ai décidé de poursuivre le récit des choses vues, des choses tues, trop longtemps tues. Pour que la France ne se contente pas d'avoir un futur mais trace aussi les voies d'un avenir. Pour continuer l'histoire de France.
        L'histoire n'est pas finie.
        La France n'a pas dit son dernier mot "
    `,
  },
]
