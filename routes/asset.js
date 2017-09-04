const Responses = require('../helpers/responses');

const asset = [
    {
      "assetName": "Carex ebenea Rydb.",
      "companyName": "Lakin-Trantow",
      "clientName": "carex-ebenea-rydb.",
      "description": "Some description"
    },
    {
      "assetName": "Lecidea somphoterella Vain.",
      "companyName": "Schuppe, Dach and Schiller",
      "clientName": "lecidea-somphoterella-vain.",
      "description": "Some description"
    },
    {
      "assetName": "Poeltinula cerebrina (DC.) Hafellner",
      "companyName": "Lockman LLC",
      "clientName": "poeltinula-cerebrina-(dc.)-hafellner",
      "description": "Some description"
    },
    {
      "assetName": "Leptochloa scabra Nees",
      "companyName": "Schamberger Group",
      "clientName": "leptochloa-scabra-nees",
      "description": "Some description"
    },
    {
      "assetName": "Fuirena coerulescens Steud.",
      "companyName": "Keeling-Schulist",
      "clientName": "fuirena-coerulescens-steud.",
      "description": "Some description"
    },
    {
      "assetName": "Helenium brevifolium (Nutt.) Alph. Wood",
      "companyName": "Stark Group",
      "clientName": "helenium-brevifolium-(nutt.)-alph.-wood",
      "description": "Some description"
    },
    {
      "assetName": "Poa compressa L.",
      "companyName": "Schuppe Inc",
      "clientName": "poa-compressa-l.",
      "description": "Some description"
    },
    {
      "assetName": "Nephroma helveticum Ach. ssp. sipeanum (Gyel.) Goward & Ahti",
      "companyName": "Romaguera, Ankunding and Grady",
      "clientName": "nephroma-helveticum-ach.-ssp.-sipeanum-(gyel.)-goward-&-ahti",
      "description": "Some description"
    },
    {
      "assetName": "Quercus havardii Rydb. var. tuckeri S.L. Welsh",
      "companyName": "Keebler Group",
      "clientName": "quercus-havardii-rydb.-var.-tuckeri-s.l.-welsh",
      "description": "Some description"
    },
    {
      "assetName": "Astragalus micromerius Barneby",
      "companyName": "Wilderman-Wolff",
      "clientName": "astragalus-micromerius-barneby",
      "description": "Some description"
    },
    {
      "assetName": "Acacia constricta Benth.",
      "companyName": "McKenzie Group",
      "clientName": "acacia-constricta-benth.",
      "description": "Some description"
    },
    {
      "assetName": "Julella sublactea (Nyl.) R.C. Harris",
      "companyName": "Auer LLC",
      "clientName": "julella-sublactea-(nyl.)-r.c.-harris",
      "description": "Some description"
    },
    {
      "assetName": "Cryptantha tenuis (Eastw.) Payson",
      "companyName": "Reynolds-Jaskolski",
      "clientName": "cryptantha-tenuis-(eastw.)-payson",
      "description": "Some description"
    },
    {
      "assetName": "Phlox hoodii Richardson ssp. hoodii",
      "companyName": "Breitenberg Inc",
      "clientName": "phlox-hoodii-richardson-ssp.-hoodii",
      "description": "Some description"
    },
    {
      "assetName": "Salix wolfii Bebb",
      "companyName": "Medhurst-Franecki",
      "clientName": "salix-wolfii-bebb",
      "description": "Some description"
    },
    {
      "assetName": "Lycopus europaeus L.",
      "companyName": "Connelly-Schuppe",
      "clientName": "lycopus-europaeus-l.",
      "description": "Some description"
    },
    {
      "assetName": "Artemisia packardiae J. Grimes & Ertter",
      "companyName": "Fadel LLC",
      "clientName": "artemisia-packardiae-j.-grimes-&-ertter",
      "description": "Some description"
    },
    {
      "assetName": "Artemisia furcata M. Bieb. var. furcata",
      "companyName": "Jast, Ratke and Stark",
      "clientName": "artemisia-furcata-m.-bieb.-var.-furcata",
      "description": "Some description"
    },
    {
      "assetName": "Lupinus shockleyi S. Watson",
      "companyName": "Strosin-Bernier",
      "clientName": "lupinus-shockleyi-s.-watson",
      "description": "Some description"
    },
    {
      "assetName": "Rinodina luridata (KÃ¶rb.) H. Mayrh., Scheid. & Sheard",
      "companyName": "Cassin Inc",
      "clientName": "rinodina-luridata-(kã¶rb.)-h.-mayrh.,-scheid.-&-sheard",
      "description": "Some description"
    },
    {
      "assetName": "Aegilops L.",
      "companyName": "Brown, McKenzie and Becker",
      "clientName": "aegilops-l.",
      "description": "Some description"
    },
    {
      "assetName": "Plagiomnium ellipticum (Brid.) T. Kop.",
      "companyName": "Hills LLC",
      "clientName": "plagiomnium-ellipticum-(brid.)-t.-kop.",
      "description": "Some description"
    },
    {
      "assetName": "Salvia dorrii (Kellogg) Abrams",
      "companyName": "Goldner, Kling and Kuhn",
      "clientName": "salvia-dorrii-(kellogg)-abrams",
      "description": "Some description"
    },
    {
      "assetName": "Diodia radula Cham. & Schltdl.",
      "companyName": "Block-Kemmer",
      "clientName": "diodia-radula-cham.-&-schltdl.",
      "description": "Some description"
    },
    {
      "assetName": "Myosotis laxa Lehm.",
      "companyName": "Senger-Lakin",
      "clientName": "myosotis-laxa-lehm.",
      "description": "Some description"
    },
    {
      "assetName": "Packera antennariifolia (Britton) W.A. Weber & Ã. LÃ¶ve",
      "companyName": "Barrows-Rath",
      "clientName": "packera-antennariifolia-(britton)-w.a.-weber-&-ã.-lã¶ve",
      "description": "Some description"
    },
    {
      "assetName": "Ipomoea cardiophylla A. Gray",
      "companyName": "Gislason-Kling",
      "clientName": "ipomoea-cardiophylla-a.-gray",
      "description": "Some description"
    },
    {
      "assetName": "Dudleya cymosa (Lem.) Britton & Rose",
      "companyName": "Bartell LLC",
      "clientName": "dudleya-cymosa-(lem.)-britton-&-rose",
      "description": "Some description"
    },
    {
      "assetName": "Packera crocata (Rydb.) W.A. Weber & Ã. LÃ¶ve",
      "companyName": "Schaden, Gottlieb and Pollich",
      "clientName": "packera-crocata-(rydb.)-w.a.-weber-&-ã.-lã¶ve",
      "description": "Some description"
    },
    {
      "assetName": "Astragalus molybdenus Barneby",
      "companyName": "Johnston-Green",
      "clientName": "astragalus-molybdenus-barneby",
      "description": "Some description"
    },
    {
      "assetName": "Machaeranthera gypsophila B.L. Turner",
      "companyName": "Jast LLC",
      "clientName": "machaeranthera-gypsophila-b.l.-turner",
      "description": "Some description"
    },
    {
      "assetName": "Schizachyrium spadiceum (Swallen) Wipff",
      "companyName": "Reichert, Lesch and Hettinger",
      "clientName": "schizachyrium-spadiceum-(swallen)-wipff",
      "description": "Some description"
    },
    {
      "assetName": "Arabis serotina Steele",
      "companyName": "O'Connell, Mueller and Labadie",
      "clientName": "arabis-serotina-steele",
      "description": "Some description"
    },
    {
      "assetName": "Grimmia donniana Sm.",
      "companyName": "Bogan and Sons",
      "clientName": "grimmia-donniana-sm.",
      "description": "Some description"
    },
    {
      "assetName": "Ribes oxyacanthoides L. ssp. irriguum (Douglas) Sinnott",
      "companyName": "Harvey LLC",
      "clientName": "ribes-oxyacanthoides-l.-ssp.-irriguum-(douglas)-sinnott",
      "description": "Some description"
    },
    {
      "assetName": "Clinopodium dentatum (Chapm.) Kuntze",
      "companyName": "Abbott and Sons",
      "clientName": "clinopodium-dentatum-(chapm.)-kuntze",
      "description": "Some description"
    },
    {
      "assetName": "Lansium CorrÃªa",
      "companyName": "Reinger-Hilpert",
      "clientName": "lansium-corrãªa",
      "description": "Some description"
    },
    {
      "assetName": "Eriogonum lonchophyllum Torr. & A. Gray var. lonchophyllum",
      "companyName": "Spinka, Herman and Corkery",
      "clientName": "eriogonum-lonchophyllum-torr.-&-a.-gray-var.-lonchophyllum",
      "description": "Some description"
    },
    {
      "assetName": "Remya montgomeryi W.L. Wagner & D.R. Herbst",
      "companyName": "Smith-Schamberger",
      "clientName": "remya-montgomeryi-w.l.-wagner-&-d.r.-herbst",
      "description": "Some description"
    },
    {
      "assetName": "Polygala macradenia A. Gray",
      "companyName": "Hammes Group",
      "clientName": "polygala-macradenia-a.-gray",
      "description": "Some description"
    },
    {
      "assetName": "Carex wahuensis C.A. Mey.",
      "companyName": "Schumm LLC",
      "clientName": "carex-wahuensis-c.a.-mey.",
      "description": "Some description"
    },
    {
      "assetName": "Dendropanax arboreus (L.) Decne. & Planch. ex Britton",
      "companyName": "Jerde LLC",
      "clientName": "dendropanax-arboreus-(l.)-decne.-&-planch.-ex-britton",
      "description": "Some description"
    },
    {
      "assetName": "Breynia J.R. Forst. & G. Forst.",
      "companyName": "Towne-Kuvalis",
      "clientName": "breynia-j.r.-forst.-&-g.-forst.",
      "description": "Some description"
    },
    {
      "assetName": "Parkia clappertoniana Keay",
      "companyName": "Fadel, Huels and Schaden",
      "clientName": "parkia-clappertoniana-keay",
      "description": "Some description"
    },
    {
      "assetName": "Erysimum menziesii (Hook.) Wettst. ssp. concinnum (Eastw.) R.A. Price",
      "companyName": "Boyer-Herman",
      "clientName": "erysimum-menziesii-(hook.)-wettst.-ssp.-concinnum-(eastw.)-r.a.-price",
      "description": "Some description"
    },
    {
      "assetName": "Berberis wilcoxii Kearney",
      "companyName": "Gerhold, Goyette and Price",
      "clientName": "berberis-wilcoxii-kearney",
      "description": "Some description"
    },
    {
      "assetName": "Tiarella trifoliata L. var. unifoliata (Hook.) Kurtz",
      "companyName": "MacGyver-Muller",
      "clientName": "tiarella-trifoliata-l.-var.-unifoliata-(hook.)-kurtz",
      "description": "Some description"
    },
    {
      "assetName": "Linum subteres (Trel.) Winkl.",
      "companyName": "Lueilwitz Group",
      "clientName": "linum-subteres-(trel.)-winkl.",
      "description": "Some description"
    },
    {
      "assetName": "Ariocarpus Scheidw.",
      "companyName": "Crooks, Feil and Lemke",
      "clientName": "ariocarpus-scheidw.",
      "description": "Some description"
    },
    {
      "assetName": "Menziesia ferruginea Sm.",
      "companyName": "Fadel-Quitzon",
      "clientName": "menziesia-ferruginea-sm.",
      "description": "Some description"
    },
    {
      "assetName": "Acacia constricta Benth. var. paucispina Wooton & Standl.",
      "companyName": "Kshlerin Inc",
      "clientName": "acacia-constricta-benth.-var.-paucispina-wooton-&-standl.",
      "description": "Some description"
    },
    {
      "assetName": "Pluchea odorata (L.) Cass. var. succulenta (Fernald) Cronquist",
      "companyName": "Senger, Graham and Morissette",
      "clientName": "pluchea-odorata-(l.)-cass.-var.-succulenta-(fernald)-cronquist",
      "description": "Some description"
    },
    {
      "assetName": "Ramalina fastigiata (Pers.) Ach.",
      "companyName": "Aufderhar, Hoeger and Harris",
      "clientName": "ramalina-fastigiata-(pers.)-ach.",
      "description": "Some description"
    },
    {
      "assetName": "Psilostrophe tagetina (Nutt.) Greene var. tagetina",
      "companyName": "Collins, Buckridge and Pollich",
      "clientName": "psilostrophe-tagetina-(nutt.)-greene-var.-tagetina",
      "description": "Some description"
    },
    {
      "assetName": "Alyssum desertorum Stapf var. himalayensis Dudley",
      "companyName": "Gaylord, Mayer and Hayes",
      "clientName": "alyssum-desertorum-stapf-var.-himalayensis-dudley",
      "description": "Some description"
    },
    {
      "assetName": "Arabis gracilipes Greene",
      "companyName": "Koelpin-Fisher",
      "clientName": "arabis-gracilipes-greene",
      "description": "Some description"
    },
    {
      "assetName": "Gossypianthus lanuginosus (Poir.) Moq. var. lanuginosus",
      "companyName": "Rolfson, Ruecker and Marvin",
      "clientName": "gossypianthus-lanuginosus-(poir.)-moq.-var.-lanuginosus",
      "description": "Some description"
    },
    {
      "assetName": "Anema dodgei Herre",
      "companyName": "Cole-Mertz",
      "clientName": "anema-dodgei-herre",
      "description": "Some description"
    },
    {
      "assetName": "Eustachys paspaloides (Vahl) Lanza & Mattei",
      "companyName": "Cartwright-Barrows",
      "clientName": "eustachys-paspaloides-(vahl)-lanza-&-mattei",
      "description": "Some description"
    },
    {
      "assetName": "Cyperus flavicomus Michx.",
      "companyName": "Orn, Lueilwitz and Bechtelar",
      "clientName": "cyperus-flavicomus-michx.",
      "description": "Some description"
    },
    {
      "assetName": "Erigeron petrophilus Greene",
      "companyName": "Cormier, O'Connell and Cremin",
      "clientName": "erigeron-petrophilus-greene",
      "description": "Some description"
    },
    {
      "assetName": "Plagiobothrys stipitatus (Greene) I.M. Johnst. var. stipitatus",
      "companyName": "McKenzie and Sons",
      "clientName": "plagiobothrys-stipitatus-(greene)-i.m.-johnst.-var.-stipitatus",
      "description": "Some description"
    },
    {
      "assetName": "Rubus insons L.H. Bailey",
      "companyName": "Champlin-Hahn",
      "clientName": "rubus-insons-l.h.-bailey",
      "description": "Some description"
    },
    {
      "assetName": "Cypselea humifusa Turp.",
      "companyName": "Wolff Inc",
      "clientName": "cypselea-humifusa-turp.",
      "description": "Some description"
    },
    {
      "assetName": "Butomus L.",
      "companyName": "Wintheiser-Graham",
      "clientName": "butomus-l.",
      "description": "Some description"
    },
    {
      "assetName": "Trifolium andersonii A. Gray",
      "companyName": "Dickinson, Rath and Ferry",
      "clientName": "trifolium-andersonii-a.-gray",
      "description": "Some description"
    },
    {
      "assetName": "Anagallis arvensis L. ssp. foemina (Mill.) Schinz & Thell.",
      "companyName": "Rosenbaum, Wyman and Smitham",
      "clientName": "anagallis-arvensis-l.-ssp.-foemina-(mill.)-schinz-&-thell.",
      "description": "Some description"
    },
    {
      "assetName": "Thymophylla Lag.",
      "companyName": "Beatty-Satterfield",
      "clientName": "thymophylla-lag.",
      "description": "Some description"
    },
    {
      "assetName": "Vulpia microstachys (Nutt.) Munro var. microstachys",
      "companyName": "Goyette LLC",
      "clientName": "vulpia-microstachys-(nutt.)-munro-var.-microstachys",
      "description": "Some description"
    },
    {
      "assetName": "Oreostemma peirsonii (Sharsm.) G.L. Nesom",
      "companyName": "Gibson Inc",
      "clientName": "oreostemma-peirsonii-(sharsm.)-g.l.-nesom",
      "description": "Some description"
    },
    {
      "assetName": "Chorizanthe xanti S. Watson var. xanti",
      "companyName": "Herman, Larkin and Batz",
      "clientName": "chorizanthe-xanti-s.-watson-var.-xanti",
      "description": "Some description"
    },
    {
      "assetName": "Prockia P. Br. ex L.",
      "companyName": "Hansen-Johns",
      "clientName": "prockia-p.-br.-ex-l.",
      "description": "Some description"
    },
    {
      "assetName": "Helleborus viridis L.",
      "companyName": "Trantow, McDermott and Kuvalis",
      "clientName": "helleborus-viridis-l.",
      "description": "Some description"
    },
    {
      "assetName": "Cypripedium Ã—alaskanum P.M. Brown",
      "companyName": "Wisoky-Lesch",
      "clientName": "cypripedium-ã—alaskanum-p.m.-brown",
      "description": "Some description"
    },
    {
      "assetName": "Oenothera caespitosa Nutt.",
      "companyName": "Paucek-Bernhard",
      "clientName": "oenothera-caespitosa-nutt.",
      "description": "Some description"
    },
    {
      "assetName": "Ambrosia trifida L. var. trifida",
      "companyName": "Buckridge-Kris",
      "clientName": "ambrosia-trifida-l.-var.-trifida",
      "description": "Some description"
    },
    {
      "assetName": "Leucophysalis Rydb.",
      "companyName": "Cartwright, Pollich and Bartell",
      "clientName": "leucophysalis-rydb.",
      "description": "Some description"
    },
    {
      "assetName": "Amygdalaria haidensis Brodo & Hertel",
      "companyName": "Jones-Schamberger",
      "clientName": "amygdalaria-haidensis-brodo-&-hertel",
      "description": "Some description"
    },
    {
      "assetName": "Umbilicaria deusta (L.) Baumg.",
      "companyName": "MacGyver LLC",
      "clientName": "umbilicaria-deusta-(l.)-baumg.",
      "description": "Some description"
    },
    {
      "assetName": "Pennisetum flaccidum Griseb.",
      "companyName": "King-Tromp",
      "clientName": "pennisetum-flaccidum-griseb.",
      "description": "Some description"
    },
    {
      "assetName": "Physcomitrium hookeri Hampe",
      "companyName": "Upton and Sons",
      "clientName": "physcomitrium-hookeri-hampe",
      "description": "Some description"
    },
    {
      "assetName": "Milium effusum L.",
      "companyName": "Osinski, Hilpert and West",
      "clientName": "milium-effusum-l.",
      "description": "Some description"
    },
    {
      "assetName": "Grindelia camporum Greene var. bracteosa (J.T. Howell) M.A. Lane",
      "companyName": "Beier Inc",
      "clientName": "grindelia-camporum-greene-var.-bracteosa-(j.t.-howell)-m.a.-lane",
      "description": "Some description"
    },
    {
      "assetName": "Kyllinga Rottb.",
      "companyName": "Quigley-Little",
      "clientName": "kyllinga-rottb.",
      "description": "Some description"
    },
    {
      "assetName": "Strigula wilsonii (Riddle) R.C. Harris",
      "companyName": "Casper, Roberts and Brown",
      "clientName": "strigula-wilsonii-(riddle)-r.c.-harris",
      "description": "Some description"
    },
    {
      "assetName": "Ochrolechia arborea (Kreyer) Almb.",
      "companyName": "Schinner-Brakus",
      "clientName": "ochrolechia-arborea-(kreyer)-almb.",
      "description": "Some description"
    },
    {
      "assetName": "Physalis angulata L.",
      "companyName": "Greenholt and Sons",
      "clientName": "physalis-angulata-l.",
      "description": "Some description"
    },
    {
      "assetName": "Gilia tenuiflora Benth. ssp. arenaria (Benth.) A.D. Grant & V.E. Grant",
      "companyName": "Kulas-Dach",
      "clientName": "gilia-tenuiflora-benth.-ssp.-arenaria-(benth.)-a.d.-grant-&-v.e.-grant",
      "description": "Some description"
    },
    {
      "assetName": "Prosthechea cochleata (L.) W.E. Higgins var. triandra (Ames) W.E. Higgins",
      "companyName": "Larson-Stoltenberg",
      "clientName": "prosthechea-cochleata-(l.)-w.e.-higgins-var.-triandra-(ames)-w.e.-higgins",
      "description": "Some description"
    },
    {
      "assetName": "Plectritis congesta (Lindl.) DC. ssp. nitida (A. Heller) Morey",
      "companyName": "Flatley-Bernhard",
      "clientName": "plectritis-congesta-(lindl.)-dc.-ssp.-nitida-(a.-heller)-morey",
      "description": "Some description"
    },
    {
      "assetName": "Callitriche heterophylla Pursh",
      "companyName": "Wilderman, Turner and Lemke",
      "clientName": "callitriche-heterophylla-pursh",
      "description": "Some description"
    },
    {
      "assetName": "Pneumatopteris sandwicensis (Brack.) Holttum",
      "companyName": "Cummerata, Lebsack and Ernser",
      "clientName": "pneumatopteris-sandwicensis-(brack.)-holttum",
      "description": "Some description"
    },
    {
      "assetName": "Cirsium foliosum (Hook.) DC.",
      "companyName": "VonRueden Group",
      "clientName": "cirsium-foliosum-(hook.)-dc.",
      "description": "Some description"
    },
    {
      "assetName": "Anchusa L.",
      "companyName": "Nienow-Johns",
      "clientName": "anchusa-l.",
      "description": "Some description"
    },
    {
      "assetName": "Sapindus saponaria L.",
      "companyName": "Nitzsche Inc",
      "clientName": "sapindus-saponaria-l.",
      "description": "Some description"
    }
   ];        

module.exports =
[   
    {  
        method: 'POST',
        path: '/asset',
        handler: (request, reply) => {   
            console.log(request.payload);
            res = Responses.recordSaved();
            console.log(res);
            reply(res);
       }
   },
   {   
        method: 'GET',
        path: '/list-limit',
        handler: (request, reply) => {   
            console.log(request.payload);
            var params = request.query
            let result = asset.slice(0, params.limit)
            res = Responses.fetch(
                { 
                    data: result,
                    total_record: String(asset.length)
                
                }
            );
            console.log(res);
            reply(res);
        }
    },
    {  
         method: 'GET',
         path: '/list',
         handler: (request, reply) => {   
             console.log(request.payload);
             res = Responses.fetch(asset);
             console.log(res);
             reply(res);
         }
     }
];