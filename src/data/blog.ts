export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  content: BlogSection[];
}

export interface BlogSection {
  heading?: string;
  text: string;
}

export const categories = ["All", "Pain Relief", "Posture", "Sports", "Education", "Exercises"];

export const articles: BlogArticle[] = [
  {
    slug: "cka-eshte-meniskusi",
    title: "Çka është Meniskusi? Simptomat, Lëndimet dhe Trajtimi",
    excerpt: "Dhimbja në gju mund të jetë shenjë e lëndimit të meniskusit. Mësoni çka është meniskusi, si dëmtohet dhe si trajtohet me fizioterapi.",
    category: "Education",
    date: "2026-02-13",
    readTime: "7 min read",
    metaTitle: "Çka është Meniskusi? Simptomat dhe Trajtimi | Reactive Physio Prishtinë",
    metaDescription: "Mësoni çka është meniskusi, si ndodh lëndimi i meniskusit dhe si trajtohet me fizioterapi në Prishtinë. Këshilla profesionale nga Reactive Physio.",
    image: "/blog/meniskusi.jpg",
    content: [
      {
        text: "Meniskusi është një strukturë shumë e rëndësishme në gjurin tonë që vepron si amortizator midis kockave të kofshës dhe të kërcirit. Ai ndihmon në shpërndarjen e peshës, stabilizimin e gjurit dhe zvogëlimin e fërkimit gjatë lëvizjes. Kur meniskusi dëmtohet, mund të shkaktojë dhimbje, ënjtje dhe vështirësi në ecje.",
      },
      {
        heading: "Çfarë është Meniskusi?",
        text: "Në secilin gju kemi dy meniskuse - një në pjesën e brendshme (medial) dhe një në pjesën e jashtme (lateral). Këto janë struktura në formë gjysmëhëne të përbëra nga kërc elastik. Funksioni i tyre kryesor është të absorbojnë goditjet dhe të mbrojnë nyjën e gjurit gjatë aktiviteteve si ecja, vrapimi apo kërcimi.",
      },
      {
        heading: "Si Dëmtohet Meniskusi?",
        text: "Lëndimi i meniskusit zakonisht ndodh gjatë lëvizjeve të papritura rrotulluese të gjurit, veçanërisht gjatë sporteve si futbolli, basketbolli apo skijimi. Megjithatë, tek personat mbi 40 vjeç, meniskusi mund të dëmtohet edhe nga konsumimi gradual (degjenerimi) pa pasur ndonjë traumë të madhe.",
      },
      {
        heading: "Simptomat e Lëndimit të Meniskusit",
        text: "Simptomat më të zakonshme përfshijnë dhimbje në pjesën e brendshme ose të jashtme të gjurit, ënjtje, ndjesi bllokimi të gjurit, zhurmë klikimi gjatë lëvizjes dhe vështirësi në përkulje ose drejtim të plotë të këmbës. Në disa raste, gjuri mund të ndjehet i paqëndrueshëm.",
      },
      {
        heading: "Trajtimi i Meniskusit me Fizioterapi",
        text: "Shumica e lëndimeve të meniskusit mund të trajtohen pa operacion përmes fizioterapisë profesionale. Programi përfshin uljen e inflamacionit, terapi manuale, ushtrime për forcimin e muskujve të kofshës dhe përmirësimin e stabilitetit të gjurit. Në Reactive Physio në Prishtinë, ne krijojmë plane individuale rehabilitimi për rikthim të sigurt dhe të shpejtë në aktivitet.",
      },
      {
        heading: "Kur Duhet të Vizitoni Fizioterapistin?",
        text: "Nëse dhimbja në gju vazhdon për më shumë se disa ditë, nëse keni ënjtje të vazhdueshme ose ndjesi bllokimi të gjurit, është e rëndësishme të kërkoni ndihmë profesionale. Trajtimi i hershëm parandalon përkeqësimin dhe redukton nevojën për ndërhyrje kirurgjikale.",
      },
    ],
  },
  {
    slug: "i-ftohti-vs-i-nxehti",
    title: "I Ftohti vs I Nxehti: Kur Duhet të Përdorim Secilën?",
    excerpt: "Akulli apo nxehtësia? Zbuloni kur duhet të përdorni terapi me të ftohtë dhe kur me të nxehtë për dhimbje muskujsh dhe lëndime.",
    category: "Pain Relief",
    date: "2026-01-22",
    readTime: "6 min read",
    metaTitle: "I Ftohti vs I Nxehti për Dhimbje | Reactive Physio Prishtinë",
    metaDescription: "Mësoni kur të përdorni akull dhe kur nxehtësi për dhimbje muskujsh, lëndime dhe inflamacion. Këshilla profesionale nga fizioterapistët në Prishtinë.",
    image: "/blog/ftohte-nxehte.jpg",
    content: [
      {
        text: "Shumë pacientë pyesin: A duhet të përdor akull apo nxehtësi për dhimbjen time? Përdorimi i duhur i terapisë me të ftohtë ose me të nxehtë mund të përshpejtojë rikuperimin dhe të reduktojë ndjeshëm dhimbjen. Por përdorimi i gabuar mund të përkeqësojë situatën.",
      },
      {
        heading: "Kur Duhet të Përdorim Të Ftohtin (Akullin)?",
        text: "Terapia me të ftohtë përdoret kryesisht në fazën akute të lëndimit, zakonisht brenda 24-72 orëve të para. Akulli ndihmon në uljen e inflamacionit, zvogëlimin e ënjtjes dhe mpirjen e zonës së dhimbshme. Është ideal për ndrydhje, përplasjet, lëndime sportive dhe inflamacion të freskët.",
      },
      {
        heading: "Si të Aplikoni Akullin?",
        text: "Vendosni akullin për 15-20 minuta çdo 2-3 orë. Mos e vendosni direkt mbi lëkurë - përdorni një peshqir për të shmangur djegien nga të ftohtit. Mos e aplikoni për më shumë se 20 minuta për të shmangur dëmtimin e indeve.",
      },
      {
        heading: "Kur Duhet të Përdorim Nxehtësinë?",
        text: "Nxehtësia është më e përshtatshme për dhimbje kronike, tension muskulor dhe ngurtësi. Ajo përmirëson qarkullimin e gjakut dhe relakson muskujt. Përdoret shpesh për dhimbje të qafës, shpinës apo muskuj të ngurtë pas aktivitetit fizik.",
      },
      {
        heading: "Si të Aplikoni Nxehtësinë?",
        text: "Aplikoni kompresë të ngrohtë për 15-20 minuta. Sigurohuni që temperatura të jetë e rehatshme dhe jo shumë e lartë. Mos e përdorni nxehtësinë në zona të fryra ose të inflamuara akutisht.",
      },
      {
        heading: "Gabimi Më i Shpeshtë",
        text: "Gabimi më i zakonshëm është përdorimi i nxehtësisë menjëherë pas një lëndimi akut. Kjo mund të rrisë inflamacionin dhe të përkeqësojë dhimbjen. Në fazën e parë të lëndimit gjithmonë preferohet akulli.",
      },
       {
        heading: "Kur Duhet të Konsultoheni me Fizioterapist?",
        text: "Nëse dhimbja vazhdon për më shumë se disa ditë, nëse keni ënjtje të vazhdueshme ose kufizim të lëvizjes, është e rëndësishme të kërkoni ndihmë profesionale. Në Reactive Physio në Prishtinë, ne vlerësojmë shkakun e dhimbjes dhe rekomandojmë trajtimin më të përshtatshëm për rikuperim të sigurt.",
      },
    ],
  },
  {
    slug: "a-ke-nevoje-per-dry-needling",
    title: "A ke Nevojë për Dry Needling? Kur Ndihmon Kjo Terapi?",
    excerpt: "Dry needling është një metodë efektive për dhimbje muskujsh dhe tension kronik. Zbuloni kur rekomandohet dhe si funksionon.",
    category: "Pain Relief",
    date: "2026-01-09",
    readTime: "7 min read",
    metaTitle: "A ke Nevojë për Dry Needling? | Reactive Physio Prishtinë",
    metaDescription: "Dry needling për dhimbje muskujsh dhe tension kronik. Mësoni si funksionon dhe kur rekomandohet nga fizioterapistët në Prishtinë.",
    image: "/blog/dry-needling-prishtine.jpg",
    content: [
      {
        text: "Dry needling është një teknikë moderne e fizioterapisë që përdoret për trajtimin e dhimbjeve muskulore dhe tensionit kronik. Shumë pacientë pyesin nëse kjo terapi është e përshtatshme për ta. Përgjigja varet nga shkaku i dhimbjes dhe gjendja e muskujve.",
      },
      {
        heading: "Çfarë është Dry Needling?",
        text: "Dry needling është një teknikë ku përdoren gjilpëra shumë të holla për të stimuluar pikat e tensionit në muskuj, të njohura si 'trigger points'. Këto pika janë zona të ngurtësuara që shkaktojnë dhimbje lokale ose dhimbje që përhapet në zona të tjera të trupit.",
      },
      {
        heading: "Si Funksionon?",
        text: "Kur gjilpëra vendoset në pikën e tensionit, ajo stimulon relaksimin e muskulit dhe përmirëson qarkullimin e gjakut. Kjo ndihmon në reduktimin e dhimbjes, rritjen e lëvizshmërisë dhe përshpejtimin e rikuperimit. Shumë pacientë ndjejnë lehtësim të menjëhershëm pas seancës.",
      },
      {
        heading: "Për Çfarë Probleme Rekomandohet?",
        text: "Dry needling përdoret shpesh për dhimbje të qafës dhe shpinës, dhimbje të shpatullave, tension muskulor nga qëndrimi i gjatë ulur, lëndime sportive dhe dhimbje kronike që nuk janë përmirësuar me metoda të tjera.",
      },
      {
        heading: "A Është e Dhimbshme?",
        text: "Shumica e pacientëve ndjejnë vetëm një pickim të lehtë. Kur gjilpëra stimulon pikën e tensionit, mund të ndodhë një reagim i shpejtë i muskulit (twitch response), i cili është normal dhe tregon se terapia po vepron.",
      },
      {
        heading: "Sa Seanca Nevojiten?",
        text: "Numri i seancave varet nga gjendja dhe kohëzgjatja e dhimbjes. Disa pacientë përjetojnë përmirësim pas 1-2 seancash, ndërsa në raste kronike mund të nevojiten më shumë trajtime të kombinuara me ushtrime terapeutike.",
      },
      {
        heading: "Kur Duhet të Konsultoheni?",
        text: "Nëse vuani nga tension i vazhdueshëm muskulor, dhimbje që përsëriten ose lëvizshmëri e kufizuar, është e rëndësishme të bëni një vlerësim profesional. Në Reactive Physio në Prishtinë, ne vlerësojmë gjendjen tuaj dhe përcaktojmë nëse dry needling është metoda e duhur për ju.",
      },
    ],
  },
  {
    slug: "si-ndikon-fizioterapia-ne-trupin-e-njeriut",
    title: "Si Ndikon Fizioterapia në Trupin e Njeriut?",
    excerpt: "Fizioterapia ndihmon në reduktimin e dhimbjes, përmirësimin e lëvizshmërisë dhe rikthimin e funksionit normal të trupit. Zbuloni si funksionon.",
    category: "Education",
    date: "2025-12-23",
    readTime: "5 min read",
    metaTitle: "Si Ndikon Fizioterapia në Trup? | Reactive Physio Prishtinë",
    metaDescription: "Mësoni si ndikon fizioterapia në trupin e njeriut, si redukton dhimbjen dhe përmirëson lëvizjen. Shërbime profesionale fizioterapie në Prishtinë.",
    image: "/blog/si-ndikon-fizioterapia.jpg",
    content: [
      {
        text: "Fizioterapia është një nga metodat më efektive për trajtimin e dhimbjes, rikuperimin pas lëndimeve dhe përmirësimin e funksionit të trupit. Ajo nuk trajton vetëm simptomat, por adreson shkakun e problemit për një rikuperim afatgjatë dhe të qëndrueshëm.",
      },
      {
        heading: "Si Ndikon Fizioterapia në Muskuj?",
        text: "Fizioterapia ndihmon në relaksimin e muskujve të tensionuar, forcimin e muskujve të dobësuar dhe përmirësimin e koordinimit. Përmes ushtrimeve terapeutike dhe teknikave manuale, muskujt rifitojnë funksionin normal dhe reduktohet rreziku i lëndimeve të përsëritura.",
      },
      {
        heading: "Ndikimi në Nyje dhe Lëvizshmëri",
        text: "Kur nyjet janë të ngurtësuara ose të dhimbshme, lëvizja bëhet e kufizuar. Fizioterapia përmirëson mobilitetin përmes teknikave të mobilizimit dhe ushtrimeve specifike, duke ndihmuar pacientët të rikthehen në aktivitetet e përditshme pa dhimbje.",
      },
      {
        heading: "Reduktimi i Dhimbjes",
        text: "Një nga efektet kryesore të fizioterapisë është reduktimi i dhimbjes. Përmes teknikave si terapia manuale, dry needling, ushtrimet korrigjuese dhe modalitetet fizike, dhimbja zvogëlohet në mënyrë natyrale pa u varur vetëm nga medikamentet.",
      },
      {
        heading: "Përmirësimi i Qarkullimit të Gjakut",
        text: "Ushtrimet dhe stimulimi i indeve ndihmojnë në përmirësimin e qarkullimit të gjakut. Kjo përshpejton procesin e shërimit, zvogëlon inflamacionin dhe përmirëson furnizimin me oksigjen të muskujve dhe indeve.",
      },
      {
        heading: "Rehabilitimi pas Lëndimeve dhe Operacioneve",
        text: "Pas një operacioni ose lëndimi, fizioterapia është thelbësore për rikthimin e forcës dhe stabilitetit. Programet e individualizuara të rehabilitimit ndihmojnë në rikuperim të sigurt dhe reduktojnë rrezikun e komplikimeve afatgjata.",
      },
      {
        heading: "Fizioterapia si Parandalim",
        text: "Fizioterapia nuk është vetëm për trajtim, por edhe për parandalim. Ajo ndihmon në korrigjimin e qëndrimit, balancimin e muskujve dhe optimizimin e lëvizjes, duke reduktuar rrezikun e dhimbjeve kronike dhe lëndimeve të ardhshme.",
      },
    ],
  },
  {
    slug: "cka-jane-ndezjet-e-muskujve",
    title: "Çka Janë Ndezjet e Muskujve dhe Si Trajtohen?",
    excerpt: "Ndezjet e muskujve shkaktojnë dhimbje dhe ndjesi djegieje pas aktivitetit fizik. Mësoni pse ndodhin dhe si trajtohen.",
    category: "Pain Relief",
    date: "2025-12-16",
    readTime: "6 min read",
    metaTitle: "Çka Janë Ndezjet e Muskujve? | Reactive Physio Prishtinë",
    metaDescription: "Mësoni çka janë ndezjet e muskujve, pse ndodhin dhe si trajtohen me fizioterapi në Prishtinë. Këshilla profesionale për rikuperim të shpejtë.",
    image: "/blog/ndezjet-e-muskujve.jpg",
    content: [
      {
        text: "Ndezjet e muskujve janë një gjendje e zakonshme që shfaqet pas aktivitetit fizik intensiv ose lëvizjeve të pazakonshme. Ato shkaktojnë dhimbje, ndjesi djegieje dhe ngurtësi në muskuj, veçanërisht 24-48 orë pas ushtrimeve.",
      },
      {
        heading: "Pse Ndodhin Ndezjet e Muskujve?",
        text: "Ndezjet e muskujve ndodhin për shkak të mikro-dëmtimeve në fijet muskulore gjatë ushtrimeve intensive ose lëvizjeve të reja. Ky proces është pjesë normale e adaptimit të trupit dhe shpesh quhet 'DOMS' (Delayed Onset Muscle Soreness).",
      },
      {
        heading: "Simptomat Kryesore",
        text: "Simptomat përfshijnë dhimbje gjatë prekjes, ngurtësi, ndjesi rëndese në muskuj dhe ulje të përkohshme të forcës. Dhimbja zakonisht arrin kulmin 24-72 orë pas aktivitetit dhe pastaj fillon të përmirësohet gradualisht.",
      },
      {
        heading: "Si Trajtohen?",
        text: "Pushimi aktiv është shumë i rëndësishëm - lëvizje të lehta si ecja ose shtrirjet ndihmojnë në përmirësimin e qarkullimit të gjakut. Terapia me të ftohtë në fazën fillestare mund të reduktojë inflamacionin, ndërsa më vonë mund të përdoret nxehtësia për relaksim muskulor.",
      },
      {
        heading: "Roli i Fizioterapisë",
        text: "Në raste të dhimbjeve më të forta ose të përsëritura, fizioterapia ndihmon në rikuperim më të shpejtë përmes teknikave manuale, ushtrimeve të kontrolluara dhe metodave si dry needling apo terapia me pajisje moderne.",
      },
      {
        heading: "Si t'i Parandaloni?",
        text: "Ngrohja para ushtrimeve, rritja graduale e intensitetit dhe rikuperimi i duhur janë çelësi për të reduktuar ndezjet e muskujve. Gjithashtu, hidratimi dhe gjumi i mjaftueshëm luajnë rol të rëndësishëm në rikuperim.",
      },
    ],
  },
  {
    slug: "3-shenja-qe-ki-nevoje-per-fizioterapi",
    title: "3 Shenja që ki Nevojë për Fizioterapi",
    excerpt: "Dhimbja nuk është gjithmonë normale. Zbulo 3 shenjat kryesore që tregojnë se është koha të vizitosh një fizioterapist.",
    category: "Education",
    date: "2025-11-30",
    readTime: "5 min read",
    metaTitle: "3 Shenja që ki Nevojë për Fizioterapi | Reactive Physio Prishtinë",
    metaDescription: "A ke dhimbje të vazhdueshme? Mëso 3 shenjat kryesore që tregojnë se ke nevojë për fizioterapi në Prishtinë.",
    image: "/blog/3-shenja-per-fizioterapi.jpg",
    content: [
      {
        text: "Shumë njerëz presin derisa dhimbja bëhet e padurueshme para se të kërkojnë ndihmë profesionale. Por trupi zakonisht jep sinjale më herët. Nëse i njeh këto shenja me kohë, rikuperimi është më i shpejtë dhe më i lehtë.",
      },
      {
        heading: "1. Dhimbja zgjat më shumë se disa ditë",
        text: "Dhimbjet e lehta pas aktivitetit fizik janë normale. Por nëse dhimbja vazhdon më shumë se 3-5 ditë ose rikthehet vazhdimisht, kjo është një shenjë që problemi nuk po zgjidhet vetë. Dhimbjet e vazhdueshme në shpinë, qafë, gjunjë apo shpatulla janë arsye të forta për një vlerësim fizioterapeutik.",
      },
      {
        heading: "2. Lëvizja është e kufizuar",
        text: "Nëse ndjen ngurtësi, vështirësi në përkulje, ngritje ose kthim të qafës, kjo tregon që lëvizshmëria e trupit është e reduktuar. Kufizimi i lëvizjes shpesh vjen si pasojë e inflamacionit, tensionit muskulor ose dëmtimeve të vogla që përkeqësohen me kohë.",
      },
      {
        heading: "3. Dhimbja ndikon në jetën e përditshme",
        text: "Nëse dhimbja po të pengon të flesh mirë, të punosh normalisht ose të ushtrohesh, atëherë është koha për veprim. Nuk është normale të jetosh me dhimbje kronike. Fizioterapia synon jo vetëm uljen e dhimbjes, por rikthimin e funksionit dhe cilësisë së jetës.",
      },
      {
        heading: "Pse të mos presësh?",
        text: "Sa më herët të trajtohet problemi, aq më e lehtë është zgjidhja. Kur injorohet dhimbja, trupi fillon të kompensojë me lëvizje të gabuara, gjë që mund të shkaktojë probleme të reja në zona të tjera.",
      },
      {
        heading: "Si Ndihmon Reactive Physio?",
        text: "Në Reactive Physio në Prishtinë, ne ofrojmë vlerësim të detajuar, plan trajtimi të personalizuar dhe teknika moderne për rikuperim të sigurt dhe efektiv. Qëllimi ynë është të rikthejmë lëvizjen, forcën dhe jetën pa dhimbje.",
      },
    ],
  },
];
