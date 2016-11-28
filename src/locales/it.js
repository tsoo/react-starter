module.exports = {
  getting_started: {
    title: "Pronto per creare il tuo libro?",
    cta: "Inizia"
  },
  pricing: {
    heading: "Calcolatore di prezzi",
    tabs: {
      "photo-books": {
        title: "Fotolibri",
        description: "Fotolibri professionali per ogni tipo di espressione creativa."
      },
      "trade-books": {
        title: "Libri tascabili",
        description: "Libri economici con copertina morbida o rigida. Perfetti per la vendita."
      },
      magazines: {
        title: "Riviste",
        description: "Il formato rivista offre una soluzione elegante per contenuti a più uscite."
      },
      ebooks: {
        title: "e-book",
        description: "Facili da condividere, gli e-book si possono leggere sia su Apple iPad® che su Kindle."
      }
    },
    pricingTable: {
      "photo-books": {
        bookSizes: {
          square: {
            title: "Quadrato piccolo",
            dimensions_inch: "7×7 pollici",
            dimensions_cm: "18×18 cm",
            default_pages: "20 pagine predefinite"
          },
          standard_portrait: {
            title: "Verticale standard",
            dimensions_inch: "8×10 pollici",
            dimensions_cm: "20×25 cm",
            default_pages: "20 pagine predefinite"
          },
          standard_landscape: {
            title: "Orizzontale standard",
            dimensions_inch: "10×8 pollici",
            dimensions_cm: "25×20 cm",
            default_pages: "20 pagine predefinite"
          },
          large_square: {
            title: "Quadrato grande",
            dimensions_inch: "12×12 pollici",
            dimensions_cm: "30×30 cm",
            default_pages: "20 pagine predefinite"
          },
          large_format_landscape: {
            title: "Orizzontale grande",
            dimensions_inch: "13×11 pollici",
            dimensions_cm: "33×28 cm",
            default_pages: "20 pagine predefinite"
          }
        },
        paperTypes: {
          standard_paper: {
            title: "Carta standard",
            summaryTitle: "CARTA STANDARD",
            description: "Semiopaca (118 g/m²)"
          },
          premium_paper: {
            title: "Carta premium, lucida o opaca",
            summaryTitle: "CARTA PREMIUM",
            description: "Premium lucida o Premium opaca (148 g/m²)"
          },
          pro_uncoated_paper: {
            title: "ProLine non patinata",
            summaryTitle: "PROLINE NON PATINATA",
            description: "Mohawk Superfine non patinata (148 g/m²)"
          },
          pro_medium_gloss_paper: {
            title: "ProLine perlata",
            summaryTitle: "PROLINE PERLATA",
            description: "Mohawk Photo lucida (190 g/m²)"
          }
        },
        coverTypes: {
          softcover: {
            title: "Copertina morbida",
            summaryTitle: "Morbida"
          },
          dustjacket: {
            title: "Copertina rigida, sovraccoperta",
            summaryTitle: "Con sovraccoperta"
          },
          imagewrap: {
            title: "Copertina rigida, rivestita",
            summaryTitle: "Rivestita"
          },
          additional_pages: {
            title: "Pagine aggiuntive"
          }
        }
      },
      "trade-books": {
        bookSizes: {
          pocket_text: {
            title: "5×8",
            dimensions_inch: "5×8 pollici",
            dimensions_cm: "13×20 cm",
            default_pages: "24 pagine predefinite"
          },
          large_text: {
            title: "6×9",
            dimensions_inch: "6×9 pollici",
            dimensions_cm: "15×23 cm",
            default_pages: "24 pagine predefinite"
          },
          standard_portrait_true8x10: {
            title: "8×10",
            dimensions_inch: "8×10 pollici",
            dimensions_cm: "20×25 cm",
            default_pages: "24 pagine predefinite"
          }
        },
        paperTypes: {
          economy_trade_bw_matte_paper: {
            title: "STAMPA ECONOMICA IN BIANCO E NERO",
            summaryTitle: "ECONOMICA IN BIANCO E NERO",
            description: "Bianca non patinata (75 g/m²) o crema non patinata (80 g/m²)",
            pages: "24-480 pagine"
          },
          standard_trade_bw_matte_paper: {
            title: "STAMPA STANDARD IN BIANCO E NERO",
            summaryTitle: "STANDARD IN BIANCO E NERO",
            description: "Carta usomano bianca non patinata (75 g/m²)",
            pages: "24-480 pagine"
          },
          economy_trade_matte_paper: {
            title: "STAMPA ECONOMICA A COLORI",
            summaryTitle: "ECONOMICA A COLORI",
            description: "Bianca non patinata (105 g/m²)",
            pages: "24-480 pagine"
          },
          standard_trade_matte_paper: {
            title: "STAMPA STANDARD A COLORI",
            summaryTitle: "STANDARD A COLORI",
            description: "Bianca non patinata (105 g/m²)",
            pages: "24-480 pagine"
          }
        },
        coverTypes: {
          softcover: {
            summaryTitle: "Morbida",
            title: "Copertina morbida"
          },
          dustjacket: {
            summaryTitle: "Con sovraccoperta",
            title: "Copertina rigida, sovraccoperta"
          },
          imagewrap: {
            summaryTitle: "Rivestita",
            title: "Copertina rigida, rivestita"
          },
          additional_pages: {
            title: "Pagine aggiuntive"
          }
        }
      },
      magazines: {
        bookSizes: {
          economy: {
            title: "RIVISTA ECONOMICA",
            dimensions_inch: "8.5×11 pollici",
            dimensions_cm: "22×28 cm",
            default_pages: "20 pagine predefinite"
          },
          premium: {
            title: "RIVISTA PREMIUM",
            dimensions_inch: "8.5×11 pollici",
            dimensions_cm: "22×28 cm",
            default_pages: "20 pagine predefinite"
          }
        },
        paperTypes: {
          magazine: {
            title: "Riviste",
            description: "",
            pages: ""
          },
          economy: {
            summaryTitle: "ECONIOMICA"
          },
          premium: {
            summaryTitle: "Premium"
          }
        },
        coverTypes: {
          magazine: {
            title: "Prezzo"
          },
          additional_pages: {
            id: "",
            title: "Pagine aggiuntive"
          }
        }
      },
      ebooks: {
        bookSizes: {
          fixed_layout_ebook: {
            title: "E-BOOK A LAYOUT FISSO",
            description: "Formattato per iPad®",
            price_description: "Tariffa di conversione"
          },
          kindle: {
            title: "E-BOOK CON ADATTAMENTO AUTOMATICO",
            description: "Formattato per Kindle",
            freeConversion: "Conversione gratuita",
            price_description: "In versione beta"
          },
          pdf: {
            title: "PDF",
            description: "Visualizzabile sulla maggior parte dei dispositivi",
            price_description: ""
          }
        }
      }
    },
    calculator: {
      "photo-books": {
        minPages: "Un libro deve contenere almeno 20 pagine.",
        overPageCount: "Un libro può avere al massimo 440 pagine.",
        unevenPageCount: "Il numero di pagine deve essere pari.",
        standardPaperOnly: "I libri con più di 240 pagine possono essere stampati solo su carta standard.",
        largeOrder: "Per ordini superiori ai 100 libri, contatta il team del Servizio clienti per un supporto a tutto tondo.",
        removeBlurbLogo: "Il logo Blurb verrà rimosso dall'ultima pagina del libro.",
        upgradeLinens: "Tele: disponibili per libri con copertina rigida con sovraccoperta.",
        upgradeEndsheets: "Risguardi: disponibili per libri con copertina rigida rivestita e con sovraccoperta."
      },
      "trade-books": {
        minPages: "Un libro deve contenere almeno 24 pagine.",
        overPageCount: "Un libro può avere al massimo 480 pagine.",
        unevenPageCount: "Il numero di pagine deve essere pari.",
        largeOrder: "Per ordini superiori ai 100 libri, contatta il team del Servizio clienti per un supporto a tutto tondo."
      },
      "magazines": {
        minPages: "Un libro deve contenere almeno 20 pagine.",
        multipleOfFour: "Solo multipli di 4",
        largeOrder: "Per ordini superiori ai 100 libri, contatta il team del Servizio clienti per un supporto a tutto tondo.",
        overPageCount: "Un libro può avere al massimo 240 pagine.",
        unevenPageCount: "Il numero di pagine deve essere pari."
      },
      "quantity": {
        header: "Quantità",
        pageCount: "Numero pagine",
        save10: "Risparmi il 10%%.",
        save20: "Risparmi il 20%%.",
        save25: "Risparmi il 25%%.",
        largeOrder: "Per ordini superiori ai 100 libri, contatta il team del Servizio clienti per un supporto a tutto tondo."
      },
      options: {
        removeBlurbLogo: "Rimuovi logo Blurb",
        upgradeLinens: "Upgrade copertina in tela",
        upgradeEndsheets: "Upgrade risguardi"
      },
      summary: {
        size: "dimensioni",
        cover: "copertina",
        paper: "carta",
        printing: "stampa",
        volumeDiscount: "sconto quantità",
        noDiscountMessage: "a partire da 10 copie",
        total: "totale",
        totalPriceDescription: "Il totale non include né l'IVA né la spedizione.",
        totalPriceDescriptionVat: "Il totale include l'IVA ma non include la spedizione."
      },
      "taxMessage": "I prezzi indicati sono calcolati per una unità (IVA inclusa) senza spedizione.",
      "header": "Calcolatore di prezzi",
      "calculate": "Calcola",
      "notAvailable": "Non disponibile"
    },
    grid: {
      "photo-books": {
        columnOneTitle: "Calcolatore di spedizioni",
        columnOneDescription: "Vuoi calcolare i costi di spedizione e i tempi di consegna? Utilizza il nostro <a href='%(link)s'>calcolatore di spedizioni</a>.",
        columnTwoTitle: "Grandi quantità",
        columnTwoDescription: "Devi ordinare tante copie? Oppure vuoi personalizzare la tua opera? Le nostre <a href='%(link)s'>opzioni per la stampa</a> fanno al caso tuo.",
        columnThreeTitle: "Vendi il tuo libro",
        columnThreeDescription: "<a href='%(link)s'>Vendi il tuo libro cartaceo o e-book</a> sul tuo sito web e sui social media tramite Blurb, oppure vendilo su Amazon."
      },
      "trade-books": {
        columnOneTitle: "Calcolatore di spedizioni",
        columnOneDescription: "Vuoi calcolare i costi di spedizione e i tempi di consegna? Utilizza il nostro <a href='%(link)s'>calcolatore di spedizioni</a>.",
        columnTwoTitle: "Grandi quantità",
        columnTwoDescription: "Devi ordinare tante copie? Oppure vuoi personalizzare la tua opera? Le nostre <a href='%(link)s'>opzioni per la stampa</a> fanno al caso tuo.",
        columnThreeTitle: "Vendi il tuo libro",
        columnThreeDescription: "<a href='%(link)s'>Vendi il tuo libro cartaceo o e-book</a> sul tuo sito web e sui social media tramite Blurb, oppure vendilo su Amazon."
      },
      magazines: {
        columnOneTitle: "Calcolatore di spedizioni",
        columnOneDescription: "Vuoi calcolare i costi di spedizione e i tempi di consegna? Utilizza il nostro <a href='%(link)s'>calcolatore di spedizioni</a>.",
        columnTwoTitle: "Grandi quantità",
        columnTwoDescription: "Devi ordinare tante copie? Oppure vuoi personalizzare la tua opera? Le nostre <a href='%(link)s'>opzioni per la stampa</a> fanno al caso tuo.",
        columnThreeTitle: "Vendi il tuo libro",
        columnThreeDescription: "<a href='%(link)s'>Vendi la tua rivista</a> sul tuo sito web e sui social media tramite Blurb."
      },
      ebooks: {
        columnOneTitle: "Lasciti ispirare",
        columnOneDescription: "Non sai da dove iniziare? <a href='%(link)s'>Dai un'occhiata</a> ai bellissimi e-book creati dalla community di autori Blurb.",
        columnTwoTitle: "Ingaggia un esperto",
        columnTwoDescription: "Sei uno scrittore in cerca di un illustratore, o viceversa? I professionisti approvati da Blurb del <a href='%(link)s'>Dream Team possono aiutarti</a>  in entrambi i casi. E in molti altri.",
        columnThreeTitle: "Vendi il tuo e-book",
        columnThreeDescription: "<a href='%(link)s'>Vendi il tuo e-book</a> sul tuo sito web e sui social media tramite Blurb, oppure vendilo sull'Apple iBooks Store."
      }
    },
    heroBanner: {
      paperBooks: {
        heading: "Copertina e carte",
        text: "Puoi scegliere tra un'ampia gamma di carte, tipi di copertina e formati. Vuoi toccare con mano le nostre carte? <a href='%(link)s'>Ordina uno swatch kit</a> oggi stesso."
      },
      ebooks: {
        heading: "Scopri di più sugli e-book",
        text: "Gli e-book sono un modo semplice ed economico per condividere e vendere le tue opere."
      },
      button: "Per saperne di più"
    },
    ctaBanner: {
      "photo-books": {
        heading: "Pronto per creare il tuo fotolibro?"
      },
      "trade-books": {
        heading: "Pronto per creare il tuo libro tascabile?"
      },
      "magazines": {
        heading: "Pronto per creare la tua rivista?"
      },
      "ebooks": {
        heading: "Pronto per creare il tuo e-book?"
      },
      button: "Inizia"
    }
  },
  volumePricing: {
    heading: "Sconti quantità",
    quantity: "QUANTITÀ",
    discount: "SCONTO",
    basePrice: "Costo base",
    books1to9: "1–9 libri",
    books10to19: "10–19 libri",
    books20to49: "20–49 libri",
    books51books: "50+ libri",
    clientServices: {
      heading: "Servizio clienti",
      content: "Per ordini di oltre 100 copie, <a href='/volume-printing#quote-form'>contatta il team del Servizio clienti</a> per un supporto completo."
    }
  }
};
