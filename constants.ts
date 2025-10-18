import { BeetleSuborder } from './types';
import { AdephagaImage, PolyphagaImage, ArchostemataImage, MyxophagaImage } from './components/BeetleImages';

export const BEETLE_SUBORDERS: BeetleSuborder[] = [
  {
    name: 'Adephaga',
    imageComponent: AdephagaImage,
    description: 'Conocidos como los "escarabajos carnívoros", este suborden incluye a muchos depredadores terrestres y acuáticos. Son uno de los linajes más antiguos de escarabajos.',
    characteristics: [
      'Principalmente depredadores.',
      'Antenas filiformes (en forma de hilo).',
      'Las coxas (segmentos de la pata) traseras están fusionadas e inmovilizan el primer esternito abdominal.',
      'Incluye a los carábidos (escarabajos de tierra) y ditíscidos (escarabajos buceadores).',
    ],
    families: [
        'Carabidae', 'Dytiscidae', 'Gyrinidae', 'Haliplidae', 
        'Hygrobiidae', 'Noteridae', 'Amphizoidae', 'Trachypachidae', 'Rhysodidae'
    ],
    commonExamples: 'Calosoma scrutator (buscador de orugas), Cicindela spp. (escarabajos tigre).',
  },
  {
    name: 'Polyphaga',
    imageComponent: PolyphagaImage,
    description: 'Es el suborden más grande y diverso de coleópteros, abarcando aproximadamente el 90% de todas las especies de escarabajos descritas. Ocupan casi todos los nichos ecológicos.',
    characteristics: [
      'Hábitos alimenticios extremadamente variados: herbívoros, xilófagos, carroñeros, etc.',
      'Antenas de formas muy diversas (lameladas, pectinadas, clavadas), pero nunca filiformes como en Adephaga.',
      'Las coxas traseras son móviles y no están fusionadas al esternito abdominal.',
      'Incluye a las mariquitas, escarabajos rinoceronte, gorgojos y luciérnagas.',
    ],
    families: [
        'Staphylinidae', 'Scarabaeidae', 'Buprestidae', 'Elateridae', 'Lycidae', 
        'Cantharidae', 'Dermestidae', 'Bostrichidae', 'Anobiidae', 'Cleridae', 
        'Tenebrionidae', 'Cerambycidae', 'Chrysomelidae', 'Curculionidae', 
        'Coccinellidae', 'Lampyridae', 'Hydrophilidae', 'Silphidae', 'Histeridae'
    ],
    commonExamples: 'Dynastes hercules (escarabajo hércules), Coccinella septempunctata (mariquita de siete puntos).',
  },
  {
    name: 'Archostemata',
    imageComponent: ArchostemataImage,
    description: 'Considerado el suborden más primitivo de escarabajos. Son un grupo relicto con pocas especies, a menudo asociados a la madera en descomposición.',
    characteristics: [
      'Linaje muy antiguo, con fósiles que datan del Pérmico.',
      'Generalmente se encuentran en madera muerta o con hongos (micetófagos o xilófagos).',
      'Presencia de suturas notorias en el tórax que no se ven en otros subórdenes.',
      'Élitros (alas duras) con un patrón de venación reticulado en algunas especies.',
    ],
    families: [
        'Crowsoniellidae', 'Cupedidae', 'Jurodidae', 'Micromalthidae', 'Ommatidae'
    ],
    commonExamples: 'Tenomerga cinerea, Priacma serrata (escarabajo del cedro telefónico).',
  },
  {
    name: 'Myxophaga',
    imageComponent: MyxophagaImage,
    description: 'Un pequeño suborden de escarabajos diminutos que viven en hábitats acuáticos o muy húmedos, donde se alimentan principalmente de algas.',
    characteristics: [
      'Tamaño corporal muy pequeño, generalmente menos de 3 mm.',
      'Asociados a ambientes acuáticos como arroyos o musgo húmedo (higropétricos).',
      'Se alimentan de algas (algófagos).',
      'Antenas clavadas (con una maza en el extremo).',
    ],
    families: [
        'Hydroscaphidae', 'Microsporidae', 'Sphaeriusidae', 'Torridincolidae'
    ],
    commonExamples: 'Sphaerius acaroides (escarabajo minuto de los pantanos).',
  },
];