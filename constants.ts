import { BeetleSuborder, BeetleFamily } from './types';
import {
  AdephagaImage,
  DytiscidaeImage,
  CicindelidaeImage,
  GyrinidaeImage,
  PolyphagaImage,
  CoccinellidaeImage,
  LucanidaeImage,
  CerambycidaeImage,
  CurculionidaeImage,
  LampyridaeImage,
  BuprestidaeImage,
  StaphylinidaeImage,
  ArchostemataImage,
  MyxophagaImage
} from './components/BeetleImages';

export const BEETLE_SUBORDERS: BeetleSuborder[] = [
  {
    name: 'Adephaga',
    imageComponent: AdephagaImage,
    specimens: [
      {
        name: 'Escarabajo Cazador Terrestre',
        scientificName: 'Calosoma scrutator',
        family: 'Carabidae',
        habitat: 'Suelo forestal y praderas (depredador veloz)',
        component: AdephagaImage
      },
      {
        name: 'Escarabajo Buceador Gigante',
        scientificName: 'Dytiscus marginalis',
        family: 'Dytiscidae',
        habitat: 'Charcas y aguas dulces (patas traseras en remo)',
        component: DytiscidaeImage
      },
      {
        name: 'Escarabajo Tigre Verde',
        scientificName: 'Cicindela campestris',
        family: 'Cicindelidae',
        habitat: 'Suelos arenosos soleados (ojos gigantes y sprint veloz)',
        component: CicindelidaeImage
      },
      {
        name: 'Escarabajo Torbellino',
        scientificName: 'Gyrinus substriatus',
        family: 'Gyrinidae',
        habitat: 'Superficie de ríos y lagos (visión subacuática y aérea)',
        component: GyrinidaeImage
      }
    ],
    morphologySummary: {
      antennaeType: 'Filiformes (en hilo cilíndrico uniforme)',
      coxaeRelation: 'Metacoxas fusionadas que dividen el 1er esternito',
      wingFolding: 'Plegado longitudinal y transversal rápido',
      dietHabit: 'Depredadores carnívoros especializados'
    },
    description: 'Conocidos como los "escarabajos carnívoros", este suborden incluye a formidables depredadores terrestres y acuáticos. Constituyen uno de los linajes más antiguos y veloces.',
    characteristics: [
      'Depredadores activos con mandíbulas prominentes y agudas.',
      'Antenas filiformes (en forma de hilo fino de 11 artejos).',
      'Las metacoxas traseras están fusionadas e inmovilizan e interrumpen el primer esternito abdominal.',
      'Patas típicamente cursorias (corredoras) o natatorias remiformes con cerdas.',
    ],
    detailedCharacteristics: [
      'Primer esternito abdominal completamente dividido por las coxas posteriores.',
      'Fórmula tarsal generalmente pentámera (5-5-5 en las seis patas).',
      'Larvas campodeiformes: muy activas, con patas largas y mandíbulas succionadoras.',
      'Presencia de glándulas pigidiales que disparan compuestos químicos defensivos (ácido fórmico, quinonas).'
    ],
    families: [
      'Carabidae', 'Dytiscidae', 'Cicindelidae', 'Gyrinidae', 'Haliplidae', 
      'Hygrobiidae', 'Noteridae', 'Amphizoidae', 'Trachypachidae', 'Rhysodidae'
    ],
    commonExamples: 'Calosoma scrutator (buscador de orugas), Cicindela spp. (escarabajos tigre), Dytiscus marginalis (escarabajo buceador), Gyrinus (torbellino).',
  },
  {
    name: 'Polyphaga',
    imageComponent: PolyphagaImage,
    specimens: [
      {
        name: 'Escarabajo Rinoceronte / Hércules',
        scientificName: 'Dynastes hercules / Oryctes nasicornis',
        family: 'Scarabaeidae',
        habitat: 'Madera podrida y humus (con cuernos torácicos)',
        component: PolyphagaImage
      },
      {
        name: 'Mariquita de Siete Puntos',
        scientificName: 'Coccinella septempunctata',
        family: 'Coccinellidae',
        habitat: 'Follaje y cultivos (depredadora de pulgones)',
        component: CoccinellidaeImage
      },
      {
        name: 'Ciervo Volante',
        scientificName: 'Lucanus cervus',
        family: 'Lucanidae',
        habitat: 'Robledales y bosques caducifolios (mandíbulas cuerno)',
        component: LucanidaeImage
      },
      {
        name: 'Escarabajo Longicornio Alpino',
        scientificName: 'Rosalia alpina',
        family: 'Cerambycidae',
        habitat: 'Hayedos maduros (antenas hiper-alargadas)',
        component: CerambycidaeImage
      },
      {
        name: 'Gorgojo / Picudo',
        scientificName: 'Curculio elephas / Rhynchophorus',
        family: 'Curculionidae',
        habitat: 'Semillas, frutos y palmeras (rostro / trompa larga)',
        component: CurculionidaeImage
      },
      {
        name: 'Luciérnaga Mayor',
        scientificName: 'Lampyris noctiluca',
        family: 'Lampyridae',
        habitat: 'Prados y setos húmedos (linterna abdominal bioluminiscente)',
        component: LampyridaeImage
      },
      {
        name: 'Escarabajo Joya Esmeralda',
        scientificName: 'Chrysochroa fulgidissima',
        family: 'Buprestidae',
        habitat: 'Copas de árboles tropicales (élitros metálicos iridiscentes)',
        component: BuprestidaeImage
      },
      {
        name: 'Estafilínido Oloroso',
        scientificName: 'Ocypus olens',
        family: 'Staphylinidae',
        habitat: 'Hojarasca y bajo piedras (élitros truncados muy cortos)',
        component: StaphylinidaeImage
      }
    ],
    morphologySummary: {
      antennaeType: 'Lameladas, clavadas, pectinadas o aserradas (diversas)',
      coxaeRelation: 'Metacoxas libres; 1er esternito completo de lado a lado',
      wingFolding: 'Plegado altamente especializado bajo élitros convexos',
      dietHabit: 'Omnívoros, herbívoros, xilófagos y micófagos'
    },
    description: 'Es el suborden más colosal y diverso del reino animal, abarcando cerca del 90% de todas las especies de escarabajos conocidas (más de 300.000 especies descritas).',
    characteristics: [
      'Diversidad ecológica ilimitada: herbívoros, barrenadores, carroñeros y depredadores.',
      'Antenas de morfología sumamente variada (lameladas, en maza, pectinadas), nunca estrictamente filiformes como en Adephaga.',
      'Las metacoxas son móviles y no fusionadas al esternito abdominal.',
      'Pleuritos protorácicos ocultos bajo el pronoto.',
    ],
    detailedCharacteristics: [
      'Primer esternito abdominal continuo e intacto (no dividido por las metacoxas traseras).',
      'Fórmula tarsal sumamente variable según la familia (5-5-5, 4-4-4, criptotetrámera en Chrysomelidae/Curculionidae).',
      'Larvas diversas: escarabeiformes (cuerpos carnosos en forma de "C"), elateriformes o eruciformes.',
      'Capacidad de invadir ecosistemas extremos, desde madera dura hasta granos almacenados y desiertos.'
    ],
    families: [
      'Scarabaeidae', 'Coccinellidae', 'Lucanidae', 'Cerambycidae', 'Curculionidae',
      'Lampyridae', 'Buprestidae', 'Staphylinidae', 'Elateridae', 'Chrysomelidae', 'Tenebrionidae'
    ],
    commonExamples: 'Dynastes hercules (hércules), Coccinella (mariquita), Lucanus cervus (ciervo volante), Rosalia alpina (longicornio), Lampyris (luciérnaga).',
  },
  {
    name: 'Archostemata',
    imageComponent: ArchostemataImage,
    specimens: [
      {
        name: 'Escarabajo Reticulado Arcaico',
        scientificName: 'Tenomerga cinerea',
        family: 'Cupedidae',
        habitat: 'Troncos antiguos en descomposición con hongos',
        component: ArchostemataImage
      }
    ],
    morphologySummary: {
      antennaeType: 'Moniliformes o aserradas rígidas',
      coxaeRelation: 'Metacoxas con surcos protectores femorales',
      wingFolding: 'Plegado alar en espiral (modo primitivo único)',
      dietHabit: 'Xilófagos y micófagos de madera muerta'
    },
    description: 'Considerado el suborden más antiguo y primitivo viviente de Coleoptera. Son auténticos fósiles vivientes con registros fósiles directos que se remontan al período Pérmico.',
    characteristics: [
      'Linaje relicto fósil con menos de 50 especies vivientes en todo el mundo.',
      'Élitros con diseño primitivo de venación en celdas reticuladas tipo ventana.',
      'Cabeza con constricción posterior conspicua en forma de cuello evidente.',
      'Protórax con suturas notopleurales nítidas y expuestas.',
    ],
    detailedCharacteristics: [
      'Alas membranosas posteriores plegadas en espiral apical en reposo, como un pergamino enrollado.',
      'Mandíbulas fuertes adaptadas a roer madera colonizada por micelios fúngicos.',
      'Élitros provistos de tubérculos y escamas protectoras que imitan la corteza forestal.',
      'Larvas con hábitos perforadores de maderas duras prehistóricas con ciclo de vida multianual.'
    ],
    families: [
      'Cupedidae', 'Crowsoniellidae', 'Jurodidae', 'Micromalthidae', 'Ommatidae'
    ],
    commonExamples: 'Tenomerga cinerea (escarabajo reticulado), Priacma serrata (escarabajo del cedro).',
  },
  {
    name: 'Myxophaga',
    imageComponent: MyxophagaImage,
    specimens: [
      {
        name: 'Escarabajo Esquife Diminuto',
        scientificName: 'Hydroscapha natans',
        family: 'Hydroscaphidae',
        habitat: 'Corrientes de agua sobre películas de algas microscópicas',
        component: MyxophagaImage
      }
    ],
    morphologySummary: {
      antennaeType: 'Clavadas cortas con maza apical compacta',
      coxaeRelation: 'Coxas adaptadas a caminar bajo micro-láminas de agua',
      wingFolding: 'Alas estrechas con flecos y plegado apical',
      dietHabit: 'Algófagos microscópicos (micro-pastadores)'
    },
    description: 'Un fascinante suborden de escarabajos enanos (la mayoría menores a 1.5 milímetros) especializados en hábitats higropétricos: películas de agua corriente sobre rocas ricas en algas.',
    characteristics: [
      'Dimensiones corporales microscópicas (generalmente 0.5 a 1.8 mm).',
      'Habitan en microambientes acuáticos y musgos húmedos de corrientes rápidas.',
      'Alimentación exclusivamente algófaga (pastadores de diatomeas y algas microscópicas).',
      'Antenas cortas clavadas terminadas en una maza sensitiva redondeada.',
    ],
    detailedCharacteristics: [
      'Alas posteriores estrechas bordeadas de largos pelos marginales que asisten en la sustentación aerodinámica.',
      'Suturas notopleurales presentes en los flancos del protórax.',
      'Larvas provistas de branquias traqueales externas plumosas para respiración subacuática directa.',
      'Élitros acortados que dejan al descubierto los últimos segmentos abdominales en familias como Hydroscaphidae.'
    ],
    families: [
      'Hydroscaphidae', 'Sphaeriusidae', 'Microsporidae', 'Torridincolidae'
    ],
    commonExamples: 'Hydroscapha natans (escarabajo esquife), Sphaerius acaroides (escarabajo diminuto de los pantanos).',
  },
];

/* =========================================================================
   CATÁLOGO COMPLETO DE FAMILIAS ILUSTRADAS
   ========================================================================= */
export const FAMILIES_DATA: BeetleFamily[] = [
  // --- ADEPHAGA ---
  {
    id: 'carabidae',
    name: 'Carabidae',
    commonName: 'Escarabajos de Tierra / Cárabos',
    suborder: 'Adephaga',
    speciesExample: 'Calosoma scrutator (Buscador de orugas)',
    component: AdephagaImage,
    diversity: '> 40.000 especies',
    distinctiveFeature: 'Mandíbulas curvas en tijera, largas patas corredoras (fórmula 5-5-5) y glándulas pigidiales con secreciones químicas defensivas.',
    biology: 'Cazadores nocturnos y crepusculares voraces de gusanos, orugas y caracoles; esenciales para el control biológico en agroecosistemas.',
    antennaeType: 'Filiformes (11 artejos cilíndricos delgados)',
    diet: 'Carnívora estricta (Depredadores activos)',
    habitat: 'Hojarasca, mantillo vegetal, bajo rocas y corteza'
  },
  {
    id: 'dytiscidae',
    name: 'Dytiscidae',
    commonName: 'Escarabajos Buceadores Gigantes',
    suborder: 'Adephaga',
    speciesExample: 'Dytiscus marginalis',
    component: DytiscidaeImage,
    diversity: '> 4.000 especies',
    distinctiveFeature: 'Patas traseras aplanadas en forma de remo con cerdas natatorias; machos con ventosas en patas anteriores; reservorio de aire subelitral.',
    biology: 'Depredadores acuáticos que cazan renacuajos y pequeños peces. Suben el ápice del abdomen a la superficie para renovar su burbuja de aire.',
    antennaeType: 'Filiformes cortas',
    diet: 'Carnívora acuática (Peces pequeños, renacuajos, larvas)',
    habitat: 'Estanques, lagunas y charcas de agua dulce'
  },
  {
    id: 'cicindelidae',
    name: 'Cicindelidae (Cicindelinae)',
    commonName: 'Escarabajos Tigre',
    suborder: 'Adephaga',
    speciesExample: 'Cicindela campestris / C. hybrida',
    component: CicindelidaeImage,
    diversity: '> 2.600 especies',
    distinctiveFeature: 'Ojos compuestos gigantes y saltones que abarcan 360°; mandíbulas descomunales armadas de dientes afilados; patas larguísimas tipo zancos.',
    biology: 'Considerados los insectos terrestres más rápidos en proporción a su tamaño corporal (corren a tanta velocidad que su visión debe pausar por ceguera temporal de procesamiento).',
    antennaeType: 'Filiformes insertadas sobre la frente',
    diet: 'Depredadores velocistas diurnos de otros artrópodos',
    habitat: 'Playas arenosas, orillas de ríos y dunas desérticas'
  },
  {
    id: 'gyrinidae',
    name: 'Gyrinidae',
    commonName: 'Escarabajos Torbellino',
    suborder: 'Adephaga',
    speciesExample: 'Gyrinus substriatus',
    component: GyrinidaeImage,
    diversity: '> 700 especies',
    distinctiveFeature: 'Ojos divididos en 4 (dos para visión aérea y dos para visión submarina simultánea); patas intermedias y traseras transformadas en aletas cortas.',
    biology: 'Nadan a velocidad vertiginosa en círculos y espirales sobre la tensión superficial del agua. Detectan ondas con sus antenas especializadas.',
    antennaeType: 'Auriculadas cortas (órgano de Johnston)',
    diet: 'Insectos atrapados en la película superficial del agua',
    habitat: 'Superficie de ríos lentos, lagos y arroyos'
  },

  // --- POLYPHAGA ---
  {
    id: 'scarabaeidae',
    name: 'Scarabaeidae',
    commonName: 'Escarabajos Rinoceronte, Peloteros y Hércules',
    suborder: 'Polyphaga',
    speciesExample: 'Dynastes hercules / Oryctes nasicornis',
    component: PolyphagaImage,
    diversity: '> 30.000 especies',
    distinctiveFeature: 'Cuernos cefálicos y torácicos en machos; tibias anteriores anchas y dentadas (fosorias); antenas lameladas capaces de desplegar láminas en abanico.',
    biology: 'Incluye a los insectos más fuertes del mundo (capaces de levantar cientos de veces su masa) y a los escarabajos peloteros sagrados del antiguo Egipto.',
    antennaeType: 'Lameladas (placas móviles en abanico)',
    diet: 'Materia orgánica en descomposición, estiércol, savia y frutas',
    habitat: 'Bosques, praderas y zonas agrícolas'
  },
  {
    id: 'coccinellidae',
    name: 'Coccinellidae',
    commonName: 'Mariquitas / Catarinas',
    suborder: 'Polyphaga',
    speciesExample: 'Coccinella septempunctata (Mariquita de 7 puntos)',
    component: CoccinellidaeImage,
    diversity: '> 6.000 especies',
    distinctiveFeature: 'Cuerpo hemisférico fuertemente convexo; coloraciones aposemáticas (rojo, naranja, amarillo con manchas negras); sangrado reflejo defensivo tóxico.',
    biology: 'Voraces devoradoras de pulgones y cochinillas tanto en estadio larvario como adulto. Aliadas indispensables de la agricultura sostenible.',
    antennaeType: 'Clavadas cortas terminadas en una pequeña maza',
    diet: 'Afidófaga (Pulgones, ácaros y cochinillas)',
    habitat: 'Jardines, cultivos, prados y arboledas'
  },
  {
    id: 'lucanidae',
    name: 'Lucanidae',
    commonName: 'Ciervos Volantes / Escarabajos Cornudos',
    suborder: 'Polyphaga',
    speciesExample: 'Lucanus cervus',
    component: LucanidaeImage,
    diversity: '> 1.200 especies',
    distinctiveFeature: 'Mandíbulas colosales hipertrofiadas en los machos que imitan las astas de un ciervo para entablar combates rituales nupciales.',
    biology: 'El coleóptero más grande de Europa. Sus larvas habitan troncos de robles centenarios durante 4 a 6 años antes de emerger.',
    antennaeType: 'Geniculadas (acodadas) con maza peinada',
    diet: 'Savia de árboles maduros y fruta fermentada',
    habitat: 'Bosques caducifolios viejos con robles y castaños'
  },
  {
    id: 'cerambycidae',
    name: 'Cerambycidae',
    commonName: 'Escarabajos Longicornios / Capricórneos',
    suborder: 'Polyphaga',
    speciesExample: 'Rosalia alpina / Cerambyx cerdo',
    component: CerambycidaeImage,
    diversity: '> 35.000 especies',
    distinctiveFeature: 'Antenas extremadamente largas, que a menudo superan con creces la longitud total del cuerpo del insecto; ojos escotados abrazando la base antenal.',
    biology: 'Barrenadores xilófagos primarios en madera viva o muerta; polinizadores en etapa adulta y bioindicadores de bosques maduros bien conservados.',
    antennaeType: 'Filiformes larguísimas articuladas',
    diet: 'Madera (xilófagos en larva), polen y néctar (adultos)',
    habitat: 'Bosques de coníferas y caducifolios'
  },
  {
    id: 'curculionidae',
    name: 'Curculionidae',
    commonName: 'Gorgojos / Picudos',
    suborder: 'Polyphaga',
    speciesExample: 'Rhynchophorus ferrugineus (Picudo rojo)',
    component: CurculionidaeImage,
    diversity: '> 83.000 especies (Familia más diversa)',
    distinctiveFeature: 'Cabeza prolongada en un rostro o pico alargado ("trompa") con aparato bucal minúsculo en el extremo y antenas acodadas insertadas en los lados.',
    biology: 'La familia biológica más numerosa del planeta. Usan su probóscide para perforar semillas, tallos y frutos donde depositan sus huevos.',
    antennaeType: 'Geniculadas (en ángulo de 90° con maza)',
    diet: 'Herbívoros fitófagos estrictos (Semillas, madera, hojas)',
    habitat: 'Prácticamente cualquier hábitat vegetal terrestre'
  },
  {
    id: 'lampyridae',
    name: 'Lampyridae',
    commonName: 'Luciérnagas',
    suborder: 'Polyphaga',
    speciesExample: 'Lampyris noctiluca / Photinus pyralis',
    component: LampyridaeImage,
    diversity: '> 2.200 especies',
    distinctiveFeature: 'Linterna abdominal ventral con células fotocitos productoras de luz fría (reacción luciferasa-luciferina con 100% de eficiencia lumínica sin calor).',
    biology: 'Emiten destellos y patrones rítmicos luminosos en la oscuridad de la noche para atraer a la pareja reproductiva adecuada.',
    antennaeType: 'Filiformes o serradas',
    diet: 'Depredadoras en etapa larvaria (caracoles y babosas)',
    habitat: 'Zonas húmedas, orillas de bosques, praderas de ribera'
  },
  {
    id: 'buprestidae',
    name: 'Buprestidae',
    commonName: 'Escarabajos Joya',
    suborder: 'Polyphaga',
    speciesExample: 'Chrysochroa fulgidissima / Anthaxia',
    component: BuprestidaeImage,
    diversity: '> 15.000 especies',
    distinctiveFeature: 'Coloración estructural metálica iridiscente espectacular (verdes, púrpuras, dorados) que no se decolora con el tiempo; cuerpo cónico en torpedo.',
    biology: 'Amantes del calor solar directo (termófilos activos en las horas más cálidas). Históricamente sus élitros se usaron en joyería y vestidos de la realeza.',
    antennaeType: 'Aserradas cortas',
    diet: 'Xilófagos (larvas perforan túneles planos en madera)',
    habitat: 'Copas soleadas de árboles, troncos calientes y flores'
  },
  {
    id: 'staphylinidae',
    name: 'Staphylinidae',
    commonName: 'Estafilínidos / Escarabajos de Alas Cortas',
    suborder: 'Polyphaga',
    speciesExample: 'Ocypus olens (Escarabajo del diablo)',
    component: StaphylinidaeImage,
    diversity: '> 63.000 especies',
    distinctiveFeature: 'Élitros extremadamente reducidos que dejan la mayor parte del abdomen libre y flexible; postura defensiva alzando la cola como un escorpión.',
    biology: 'Su cuerpo flexible les permite introducirse en túneles diminutos de hojarasca y hormigueros. Pliegan sus alas de vuelo mediante intrincados pliegues bajo los micro-élitros.',
    antennaeType: 'Filiformes o moniliformes',
    diet: 'Depredadores generalistas de invertebrados del suelo',
    habitat: 'Hojarasca, estiércol, carroña, compost y hongos'
  },

  // --- ARCHOSTEMATA ---
  {
    id: 'cupedidae',
    name: 'Cupedidae',
    commonName: 'Escarabajos Reticulados Arcaicos',
    suborder: 'Archostemata',
    speciesExample: 'Tenomerga cinerea / Priacma serrata',
    component: ArchostemataImage,
    diversity: '< 35 especies vivientes',
    distinctiveFeature: 'Élitros con malla reticulada con perforaciones cuadradas como ventanas; cuello cefálico nítidamente estrangulado; cuerpo cubierto de escamas protectoras.',
    biology: 'Verdaderos fósiles vivientes que apenas han cambiado su morfología desde el período Pérmico y Triásico hace más de 250 millones de años.',
    antennaeType: 'Moniliformes o aserradas rígidas',
    diet: 'Micófagos y xilófagos en madera en descomposición húmeda',
    habitat: 'Bosques relictos primarios antiguos'
  },

  // --- MYXOPHAGA ---
  {
    id: 'hydroscaphidae',
    name: 'Hydroscaphidae',
    commonName: 'Escarabajos Esquife',
    suborder: 'Myxophaga',
    speciesExample: 'Hydroscapha natans',
    component: MyxophagaImage,
    diversity: '~ 25 especies',
    distinctiveFeature: 'Dimensiones microscópicas (1 a 1.8 mm); cuerpo hidrodinámico en forma de cuña o bote (esquife) con abdomen alargado puntiagudo.',
    biology: 'Viven sumergidos en láminas de agua que fluyen a gran velocidad sobre rocas tapizadas de algas microscópicas (hábitat higropétrico).',
    antennaeType: 'Clavadas muy cortas (8 artejos)',
    diet: 'Algófagos (Diatomeas y cianobacterias)',
    habitat: 'Filtraciones rocosas, cascadas y arroyos de montaña'
  }
];