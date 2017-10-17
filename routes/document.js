const Responses = require("../helpers/responses");   
var _ = require('underscore');

module.exports =
[   
   {   
        method: "POST",
        path: "/upload",
        handler: (request, reply) => {   
            // setTimeout(function() {
                console.log(request.payload);
                res = Responses.fileList(request.payload);
                reply(res);
            // }, 3000);
        }
    },
    {   
        method: "GET",
        path: "/doc_list",
        handler: (request, reply) => {   
            // setTimeout(function() {
                console.log(request.payload);

                var params = request.query
                let result = [];
                if (params.offset !== docList.length) {
                  result = _.chain(docList).rest(params.offset).first(params.limit);
                } 
                res = Responses.fetch(result);
                reply(res);
            // }, 3000);
        }
    },
    {   
        method: "GET",
        path: "/doc_list_count",
        handler: (request, reply) => {   
          setTimeout(function() {
              console.log(request.payload);
              let result = docList.length
              console.log('Length is: ' + result);
              res = Responses.fetch(result);
              reply(res);
          }, 3000);
        }  
      },
      {   
            method: "GET",
            path: "/doc_list_last",
            handler: (request, reply) => {   
              setTimeout(function() {
                  console.log(request.payload);
                  let result = _.last(docList);
                  res = Responses.fetch(result);
                  reply(res);
              }, 3000);
            }  
       },
       {   
             method: "GET",
             path: "/doc_list_search",
             handler: (request, reply) => {   
               setTimeout(function() {
                   console.log(request.payload);                   
                   var params = request.query
                   let result = [];
                   console.log(params);
                   if (params.search == "" || params.reset === "true") {
                     result = docList;
                   } else {
                     result = docList.slice(5, _.random(5, 25) );
                   }
                   res = Responses.fetch(result);
                   reply(res);
               }, 1000);
             }  
        },
        {   
              method: "POST",
              path: "/document-manager/metadata",
              handler: (request, reply) => {   
                setTimeout(function() {
                    console.log(request.payload);                   
                    const { recordName, recordDetails } = request.payload;
                    var res;
                    if (recordName == 'error') {
                      res = Responses.resultNotFound(request.payload);
                    } else {
                      res = Responses.fetch(request.payload);
                    }
                    console.log(JSON.stringify(recordName));
                    reply(res);
                }, 1000);
              }  
         }

];

const docList = [{
  "id": 1,
  "documentName": "Id.ppt",
  "filename": "Nisl.mp3",
  "fileType": "InLeoMaecenas.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 2,
  "documentName": "VestibulumSed.ppt",
  "filename": "EgestasMetusAenean.mp3",
  "fileType": "FermentumJusto.pdf",
  "belongsTo": null,
  "official": false
}, {
  "id": 3,
  "documentName": "Rhoncus.ppt",
  "filename": "NisiAt.mp3",
  "fileType": "DiamInMagna.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 4,
  "documentName": "DolorQuis.pdf",
  "filename": "Hac.mp3",
  "fileType": "Sit.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 5,
  "documentName": "MaurisNonLigula.pdf",
  "filename": "AuctorGravidaSem.mpeg",
  "fileType": "SapienUrna.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 6,
  "documentName": "InQuam.xls",
  "filename": "FermentumJustoNec.avi",
  "fileType": "EnimLeoRhoncus.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 7,
  "documentName": "Phasellus.ppt",
  "filename": "AtTurpis.avi",
  "fileType": "QuisqueErat.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 8,
  "documentName": "Id.xls",
  "filename": "Volutpat.avi",
  "fileType": "Vestibulum.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 9,
  "documentName": "NisiVenenatisTristique.xls",
  "filename": "EratTortor.mp3",
  "fileType": "NislVenenatisLacinia.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 10,
  "documentName": "Nullam.xls",
  "filename": "EnimLorem.avi",
  "fileType": "TurpisIntegerAliquet.doc",
  "belongsTo": null,
  "official": false
}, {
  "id": 11,
  "documentName": "Eget.doc",
  "filename": "Cursus.avi",
  "fileType": "SitAmetCursus.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 12,
  "documentName": "Imperdiet.xls",
  "filename": "PharetraMagna.mpeg",
  "fileType": "NullamMolestie.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 13,
  "documentName": "Sit.ppt",
  "filename": "JustoIn.avi",
  "fileType": "In.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 14,
  "documentName": "NamCongueRisus.ppt",
  "filename": "IpsumInteger.mpeg",
  "fileType": "FacilisiCrasNon.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 15,
  "documentName": "NequeDuis.doc",
  "filename": "Ultricies.mp3",
  "fileType": "Pellentesque.pdf",
  "belongsTo": null,
  "official": false
}, {
  "id": 16,
  "documentName": "VestibulumQuamSapien.ppt",
  "filename": "Eget.avi",
  "fileType": "Est.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 17,
  "documentName": "SagittisSapien.xls",
  "filename": "DonecDiam.mp3",
  "fileType": "TurpisSedAnte.doc",
  "belongsTo": null,
  "official": true
}, {
  "id": 18,
  "documentName": "DolorMorbiVel.xls",
  "filename": "AtIpsumAc.mp3",
  "fileType": "VelitNec.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 19,
  "documentName": "VitaeIpsum.xls",
  "filename": "In.mpeg",
  "fileType": "InTempusSit.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 20,
  "documentName": "UltricesLibero.xls",
  "filename": "NibhLigula.avi",
  "fileType": "Sem.doc",
  "belongsTo": null,
  "official": true
}, {
  "id": 21,
  "documentName": "VolutpatEratQuisque.xls",
  "filename": "EuTinciduntIn.avi",
  "fileType": "NullaUtErat.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 22,
  "documentName": "SitAmetConsectetuer.doc",
  "filename": "EgetTinciduntEget.avi",
  "fileType": "PretiumIaculis.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 23,
  "documentName": "MagnisDis.ppt",
  "filename": "UtEratId.mp3",
  "fileType": "Tincidunt.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 24,
  "documentName": "Tincidunt.doc",
  "filename": "EgetSemper.avi",
  "fileType": "AtVulputateVitae.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 25,
  "documentName": "EratErosViverra.ppt",
  "filename": "MetusArcu.avi",
  "fileType": "ArcuLiberoRutrum.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 26,
  "documentName": "In.ppt",
  "filename": "Volutpat.mp3",
  "fileType": "NonMattis.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 27,
  "documentName": "VestibulumVelitId.xls",
  "filename": "Metus.mpeg",
  "fileType": "Sapien.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 28,
  "documentName": "NullamOrci.ppt",
  "filename": "VelAugueVestibulum.mpeg",
  "fileType": "Lacus.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 29,
  "documentName": "ConsectetuerAdipiscing.ppt",
  "filename": "MalesuadaInImperdiet.avi",
  "fileType": "EratTortor.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 30,
  "documentName": "Eleifend.xls",
  "filename": "CondimentumIdLuctus.avi",
  "fileType": "TristiqueTortorEu.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 31,
  "documentName": "PedePosuereNonummy.xls",
  "filename": "Nulla.avi",
  "fileType": "Nisi.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 32,
  "documentName": "PharetraMagnaAc.xls",
  "filename": "Auctor.mov",
  "fileType": "Diam.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 33,
  "documentName": "InLacus.ppt",
  "filename": "Adipiscing.mp3",
  "fileType": "IpsumAc.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 34,
  "documentName": "Sapien.ppt",
  "filename": "Id.mp3",
  "fileType": "TortorEuPede.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 35,
  "documentName": "VariusNullaFacilisi.doc",
  "filename": "In.avi",
  "fileType": "EratErosViverra.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 36,
  "documentName": "Cras.pdf",
  "filename": "VelAccumsan.avi",
  "fileType": "ProinInterdum.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 37,
  "documentName": "AcNequeDuis.xls",
  "filename": "ArcuSed.avi",
  "fileType": "QuamAOdio.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 38,
  "documentName": "VelEstDonec.ppt",
  "filename": "DonecQuisOrci.mp3",
  "fileType": "LuctusEtUltrices.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 39,
  "documentName": "MiNullaAc.ppt",
  "filename": "SapienNon.mp3",
  "fileType": "TortorRisusDapibus.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 40,
  "documentName": "MassaDonec.ppt",
  "filename": "PosuereCubilia.mpeg",
  "fileType": "ProinAt.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 41,
  "documentName": "Quam.xls",
  "filename": "Donec.avi",
  "fileType": "At.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 42,
  "documentName": "Quisque.xls",
  "filename": "PotentiNullam.mpeg",
  "fileType": "OdioInHac.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 43,
  "documentName": "Nisi.ppt",
  "filename": "Odio.mp3",
  "fileType": "UltricesVelAugue.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 44,
  "documentName": "Donec.xls",
  "filename": "SitAmetSapien.mp3",
  "fileType": "PellentesqueViverraPede.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 45,
  "documentName": "QuisOdioConsequat.ppt",
  "filename": "ConsequatDui.mpeg",
  "fileType": "PrimisIn.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 46,
  "documentName": "Varius.pdf",
  "filename": "Etiam.mpeg",
  "fileType": "Praesent.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 47,
  "documentName": "PellentesqueViverraPede.xls",
  "filename": "NuncPurus.mp3",
  "fileType": "IdPretium.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 48,
  "documentName": "Amet.ppt",
  "filename": "Convallis.avi",
  "fileType": "NullaUtErat.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 49,
  "documentName": "NullaUt.ppt",
  "filename": "InHacHabitasse.avi",
  "fileType": "Amet.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 50,
  "documentName": "EratFermentum.ppt",
  "filename": "FelisSed.mp3",
  "fileType": "CursusId.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 51,
  "documentName": "NequeVestibulum.xls",
  "filename": "Tempor.mp3",
  "fileType": "SapienSapien.pdf",
  "belongsTo": null,
  "official": false
}, {
  "id": 52,
  "documentName": "ElementumPellentesque.xls",
  "filename": "FelisFuscePosuere.mp3",
  "fileType": "ElementumEu.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 53,
  "documentName": "VehiculaCondimentum.xls",
  "filename": "Erat.mp3",
  "fileType": "AmetSapien.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 54,
  "documentName": "MassaDonecDapibus.ppt",
  "filename": "DiamId.mp3",
  "fileType": "HacHabitasse.pdf",
  "belongsTo": null,
  "official": false
}, {
  "id": 55,
  "documentName": "TortorQuis.ppt",
  "filename": "Laoreet.mp3",
  "fileType": "DictumstEtiamFaucibus.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 56,
  "documentName": "ElitProin.xls",
  "filename": "PotentiNullamPorttitor.mp3",
  "fileType": "TortorSollicitudinMi.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 57,
  "documentName": "LuctusTincidunt.xls",
  "filename": "Sit.mov",
  "fileType": "NibhQuisqueId.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 58,
  "documentName": "LigulaSit.xls",
  "filename": "Vitae.avi",
  "fileType": "MaecenasLeoOdio.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 59,
  "documentName": "InConsequatUt.xls",
  "filename": "NibhIn.mp3",
  "fileType": "NasceturRidiculusMus.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 60,
  "documentName": "CondimentumNequeSapien.xls",
  "filename": "Massa.avi",
  "fileType": "DonecVitae.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 61,
  "documentName": "Curabitur.doc",
  "filename": "DolorSit.mp3",
  "fileType": "Interdum.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 62,
  "documentName": "Varius.ppt",
  "filename": "Sapien.mov",
  "fileType": "NonummyIntegerNon.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 63,
  "documentName": "AdipiscingElitProin.ppt",
  "filename": "VelitDonecDiam.mp3",
  "fileType": "AOdio.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 64,
  "documentName": "DuisMattisEgestas.ppt",
  "filename": "LaciniaAeneanSit.mp3",
  "fileType": "QuamPharetraMagna.pdf",
  "belongsTo": null,
  "official": false
}, {
  "id": 65,
  "documentName": "IdTurpis.xls",
  "filename": "Dapibus.avi",
  "fileType": "Volutpat.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 66,
  "documentName": "VolutpatInCongue.ppt",
  "filename": "Semper.mp3",
  "fileType": "FeugiatNonPretium.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 67,
  "documentName": "Eleifend.ppt",
  "filename": "Parturient.mp3",
  "fileType": "LacusMorbi.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 68,
  "documentName": "PedeMalesuadaIn.ppt",
  "filename": "LiberoNon.avi",
  "fileType": "Justo.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 69,
  "documentName": "PretiumIaculisJusto.ppt",
  "filename": "OrciMaurisLacinia.avi",
  "fileType": "PhasellusIn.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 70,
  "documentName": "DisParturient.ppt",
  "filename": "Proin.mov",
  "fileType": "Mi.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 71,
  "documentName": "NibhIn.xls",
  "filename": "NullaNequeLibero.avi",
  "fileType": "AcEnimIn.pdf",
  "belongsTo": null,
  "official": false
}, {
  "id": 72,
  "documentName": "Turpis.ppt",
  "filename": "PenatibusEtMagnis.mp3",
  "fileType": "Dolor.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 73,
  "documentName": "AtVelit.xls",
  "filename": "Convallis.mp3",
  "fileType": "Sapien.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 74,
  "documentName": "Dui.ppt",
  "filename": "Semper.mp3",
  "fileType": "Habitasse.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 75,
  "documentName": "Aliquet.xls",
  "filename": "UtErat.mp3",
  "fileType": "MagnisDisParturient.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 76,
  "documentName": "UltricesLiberoNon.ppt",
  "filename": "IntegerAcNeque.mp3",
  "fileType": "InPorttitorPede.doc",
  "belongsTo": null,
  "official": true
}, {
  "id": 77,
  "documentName": "ConsequatUtNulla.xls",
  "filename": "MassaDonec.mp3",
  "fileType": "FaucibusOrciLuctus.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 78,
  "documentName": "PorttitorLacusAt.pdf",
  "filename": "Sit.avi",
  "fileType": "Turpis.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 79,
  "documentName": "NullaIntegerPede.ppt",
  "filename": "Consectetuer.mp3",
  "fileType": "Nulla.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 80,
  "documentName": "MaurisLaoreetUt.ppt",
  "filename": "InQuisJusto.mpeg",
  "fileType": "LacusAtTurpis.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 81,
  "documentName": "Curabitur.ppt",
  "filename": "DolorQuis.mpeg",
  "fileType": "AIpsumInteger.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 82,
  "documentName": "HendreritAtVulputate.xls",
  "filename": "CurabiturAtIpsum.mp3",
  "fileType": "SuspendisseOrnareConsequat.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 83,
  "documentName": "VelNisl.ppt",
  "filename": "InLeoMaecenas.mp3",
  "fileType": "EnimLorem.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 84,
  "documentName": "HacHabitasse.ppt",
  "filename": "VenenatisTristique.mpeg",
  "fileType": "AeneanSit.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 85,
  "documentName": "InConsequat.ppt",
  "filename": "InBlandit.avi",
  "fileType": "NamCongueRisus.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 86,
  "documentName": "Nibh.xls",
  "filename": "LeoRhoncus.avi",
  "fileType": "NonPretiumQuis.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 87,
  "documentName": "SuspendisseAccumsanTortor.ppt",
  "filename": "Vestibulum.mp3",
  "fileType": "PharetraMagnaAc.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 88,
  "documentName": "NislDuisAc.ppt",
  "filename": "InFaucibusOrci.mpeg",
  "fileType": "Ante.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 89,
  "documentName": "Proin.doc",
  "filename": "LoremIpsumDolor.mp3",
  "fileType": "EnimLorem.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 90,
  "documentName": "TellusNisiEu.xls",
  "filename": "Amet.mp3",
  "fileType": "VariusUtBlandit.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 91,
  "documentName": "NuncVestibulumAnte.ppt",
  "filename": "Pede.avi",
  "fileType": "NatoquePenatibusEt.ppt",
  "belongsTo": null,
  "official": true
}, {
  "id": 92,
  "documentName": "TinciduntLacus.ppt",
  "filename": "Ridiculus.mp3",
  "fileType": "MaurisUllamcorper.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 93,
  "documentName": "Libero.xls",
  "filename": "Neque.mp3",
  "fileType": "AliquamQuisTurpis.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 94,
  "documentName": "NibhIn.ppt",
  "filename": "Nunc.mp3",
  "fileType": "PellentesqueViverra.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 95,
  "documentName": "Auctor.ppt",
  "filename": "VelAugueVestibulum.mp3",
  "fileType": "InQuam.xls",
  "belongsTo": null,
  "official": true
}, {
  "id": 96,
  "documentName": "ElementumIn.ppt",
  "filename": "UllamcorperPurusSit.avi",
  "fileType": "VestibulumAnteIpsum.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 97,
  "documentName": "NonPretium.ppt",
  "filename": "Sagittis.avi",
  "fileType": "Tempus.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 98,
  "documentName": "RutrumNequeAenean.doc",
  "filename": "DuiVel.avi",
  "fileType": "Nisi.ppt",
  "belongsTo": null,
  "official": false
}, {
  "id": 99,
  "documentName": "Ultrices.xls",
  "filename": "AliquamLacusMorbi.mp3",
  "fileType": "MiPede.xls",
  "belongsTo": null,
  "official": false
}, {
  "id": 100,
  "documentName": "SollicitudinMiSit.ppt",
  "filename": "VitaeIpsumAliquam.mpeg",
  "fileType": "NonMiInteger.xls",
  "belongsTo": null,
  "official": true
}];  
