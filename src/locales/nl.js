module.exports = {
  getting_started: {
    title: "Klaar om aan de slag te gaan met je boek?",
    cta: "Aan de slag"
  },
  pricing: {
    heading: "Prijscalculator",
    tabs: {
      "photo-books": {
        title: "Fotoboeken",
        description: "Fotoboeken van professionele kwaliteit voor multi-creatieve ideeën."
      },
      "trade-books": {
        title: "Standaard boeken",
        description: "Betaalbare paperbacks en hardcovers - klaar voor de verkoop."
      },
      magazines: {
        title: "Magazines",
        description: "In een magazine kun je op vele manieren je creativiteit kwijt."
      },
      ebooks: {
        title: "e-Books",
        description: "Eenvoudig om met anderen te delen: e-books kunnen worden gelezen op de Apple iPad® en Kindle."
      }
    },
    pricingTable: {
      "photo-books": {
        bookSizes: {
          square: {
            title: "Klein vierkant",
            dimensions_inch: "7×7 inch",
            dimensions_cm: "18×18 cm",
            default_pages: "20 pagina's"
          },
          standard_portrait: {
            title: "Standaard Staand",
            dimensions_inch: "8×10 inch",
            dimensions_cm: "20×25 cm",
            default_pages: "20 pagina's"
          },
          standard_landscape: {
            title: "Standaard Liggend",
            dimensions_inch: "10×8 inch",
            dimensions_cm: "25×20 cm",
            default_pages: "20 pagina's"
          },
          large_square: {
            title: "Groot Vierkant",
            dimensions_inch: "12×12 inch",
            dimensions_cm: "30×30 cm",
            default_pages: "20 pagina's"
          },
          large_format_landscape: {
            title: "Groot Liggend",
            dimensions_inch: "13×11 inch",
            dimensions_cm: "33×28 cm",
            default_pages: "20 pagina's"
          }
        },
        paperTypes: {
          standard_paper: {
            title: "Standaard Papier",
            summaryTitle: "STANDAARD PAPIER",
            description: "80 # Semi Matte (118 GSM)"
          },
          premium_paper: {
            title: "Kwaliteitspapier, glans of mat",
            summaryTitle: "KWALITEITSPAPIER",
            description: "# 100 Kwaliteitspapier glans of Kwaliteitspapier mat (148 GSM)"
          },
          pro_uncoated_paper: {
            title: "ProLine ongecoat",
            summaryTitle: "PROLINE ONGECOAT",
            description: "100 # Mohawk Superfine ongecoat (148 GSM)"
          },
          pro_medium_gloss_paper: {
            title: "ProLine Pearl",
            summaryTitle: "PROLINE PEARL",
            description: "140 # Mohawk glanzend fotopapier (190 GSM)"
          }
        },
        coverTypes: {
          softcover: {
            title: "Paperback",
            summaryTitle: "Paperback"
          },
          dustjacket: {
            title: "Stofhoes, Hardcover",
            summaryTitle: "Stofhoes"
          },
          imagewrap: {
            title: "ImageWrap, Hardcover",
            summaryTitle: "ImageWrap"
          },
          additional_pages: {
            title: "Extra pagina's"
          }
        }
      },
      "trade-books": {
        bookSizes: {
          pocket_text: {
            title: "5×8",
            dimensions_inch: "5×8 inch",
            dimensions_cm: "13×20 cm",
            default_pages: "24 pagina’s"
          },
          large_text: {
            title: "6×9",
            dimensions_inch: "6×9 inch",
            dimensions_cm: "15×23 cm",
            default_pages: "24 pagina’s"
          },
          standard_portrait_true8x10: {
            title: "8×10",
            dimensions_inch: "8×10 inch",
            dimensions_cm: "20×25 cm",
            default_pages: "24 pagina’s"
          }
        },
        paperTypes: {
          economy_trade_bw_matte_paper: {
            title: "ECONOMY ZWART-WIT AFDRUK",
            summaryTitle: "ECONOMY Z/W",
            description: "50 # Wit ongecoat (75 GSM) of 50 # Off white ongecoat (80 GSM)",
            pages: "24-480 pagina's"
          },
          standard_trade_bw_matte_paper: {
            title: "STANDAARDPAPIER, ZWART-WIT",
            summaryTitle: "STANDAARDPAPIER Z/W",
            description: "50 # Wit ongecoat tekstpapier (75 GSM)",
            pages: "24-480 pagina's"
          },
          economy_trade_matte_paper: {
            title: "ECONOMY KLEUR",
            summaryTitle: "ECONOMY KLEUR",
            description: "70 # Wit ongecoat (105 GSM)",
            pages: "24-480 pagina's"
          },
          standard_trade_matte_paper: {
            title: "STANDAARDPAPIER KLEUR",
            summaryTitle: "STANDAARDPAPIER KLEUR",
            description: "70 # Wit ongecoat (105 GSM), ",
            pages: "24-480 pagina's"
          }
        },
        coverTypes: {
          softcover: {
            summaryTitle: "Paperback",
            title: "Paperback"
          },
          dustjacket: {
            summaryTitle: "Stofhoes",
            title: "Stofhoes, Hardcover"
          },
          imagewrap: {
            summaryTitle: "ImageWrap",
            title: "ImageWrap, Hardcover"
          },
          additional_pages: {
            title: "Extra pagina's"
          }
        }
      },
      magazines: {
        bookSizes: {
          economy: {
            title: "Economy Magazine",
            dimensions_inch: "8.5×11 inch",
            dimensions_cm: "22×28 cm",
            default_pages: "20 pagina's"
          },
          premium: {
            title: "Premium Magazine",
            dimensions_inch: "8.5×11 inch",
            dimensions_cm: "22×28 cm",
            default_pages: "20 pagina's"
          }
        },
        paperTypes: {
          magazine: {
            title: "Magazines",
            description: "",
            pages: ""
          },
          economy: {
            summaryTitle: "Economy"
          },
          premium: {
            summaryTitle: "Premium"
          }
        },
        coverTypes: {
          magazine: {
            title: "Prijs"
          },
          additional_pages: {
            id: "",
            title: "Extra pagina's"
          }
        }
      },
      ebooks: {
        bookSizes: {
          fixed_layout_ebook: {
            title: "E-BOOK MET VASTE LAY-OUT",
            description: "Geformatteerd voor iPad®",
            price_description: "Conversiekosten"
          },
          kindle: {
            title: "E-BOOK MET FLEXIBELE LAY-OUT",
            description: "Geformatteerd voor de Kindle",
            freeConversion: "Geen conversiekosten",
            price_description: "in Beta"
          },
          pdf: {
            title: "PDF",
            description: "Te lezen op de meeste apparaten",
            price_description: ""
          }
        }
      }
    },
    calculator: {
      "photo-books": {
        minPages: "Een boek moet minimaal 20 pagina’s tellen.",
        overPageCount: "Een boek kan niet meer dan uit 440 pagina’s bestaan",
        unevenPageCount: "Het totale aantal pagina’s moet een even aantal zijn.",
        standardPaperOnly: "Boeken met meer dan 240 pagina’s kunnen alleen op standaard papier gedrukt worden.",
        largeOrder: "Neem contact op met onze klantenservice als je meer dan 100 exemplaren wilt bestellen ",
        removeBlurbLogo: "Het Blurb-logo op de laatste pagina van je boek zal verwijderd worden.",
        upgradeLinens: "Linnen hoes: Beschikbaar voor hardcover en stofhoes.",
        upgradeEndsheets: "Achterschutbladen: Beschikbaar voor hardcover, stofhoes en ImageWrap."
      },
      "trade-books": {
        minPages: "Een boek moet minimaal 24 pagina’s tellen.",
        overPageCount: "Een boek kan niet meer dan uit 480 pagina’s bestaan",
        unevenPageCount: "Het totale aantal pagina’s moet een even aantal zijn.",
        largeOrder: "Neem contact op met onze klantenservice als je meer dan 100 exemplaren wilt bestellen "
      },
      "magazines": {
        minPages: "Een boek moet minimaal 20 pagina’s tellen.",
        multipleOfFour: "Alleen meervouden van 4",
        largeOrder: "Neem contact op met onze klantenservice als je meer dan 100 exemplaren wilt bestellen ",
        overPageCount: "Een boek kan niet meer dan uit 240 pagina’s bestaan",
        unevenPageCount: "Het totale aantal pagina’s moet een even aantal zijn."
      },
      "quantity": {
        header: "Hoeveelheid",
        pageCount: "Aantal pagina's",
        save10: "Je bespaart 10%%",
        save20: "Je bespaart 20%%",
        save25: "Je bespaart 25%%",
        largeOrder: "Neem contact op met onze klantenservice als je meer dan 100 exemplaren wilt bestellen "
      },
      options: {
        removeBlurbLogo: "Blurb-logo verwijderen ",
        upgradeLinens: "Upgrade - Linnen omslag",
        upgradeEndsheets: "Upgrade - Achterschutblad"
      },
      summary: {
        size: "formaat",
        cover: "omslag",
        paper: "papier",
        printing: "afdrukken",
        volumeDiscount: "volumekorting",
        noDiscountMessage: "volumekortingen gelden vanaf 10 exemplaren",
        total: "totaal",
        totalPriceDescription: "Totaalbedrag is exclusief btw en verzendkosten",
        totalPriceDescriptionVat: "Totaalbedrag is inclusief btw, maar exclusief verzendkosten"
      },
      "taxMessage": "Getoonde prijzen zijn per boek inclusief btw, en exclusief verzendkosten.",
      "header": "Prijscalculator",
      "calculate": "Prijs berekenen",
      "notAvailable": "Niet beschikbaar"
    },
    grid: {
      "photo-books": {
        columnOneTitle: "Verzendkosten berekenen",
        columnOneDescription: "Wil je je verzendkosten en levertijd berekenen? Kijk op onze pagina <a href='%(link)s'>Verzendkosten berekenen</a>.",
        columnTwoTitle: "Bulkorders",
        columnTwoDescription: "Of je nu een grote bestelling of een bestelling op maat plaatst, we bieden <a href='%(link)s'>afdrukmogelijkheden</a> afgestemd op wat je nodig hebt.",
        columnThreeTitle: "Verkoop je boek",
        columnThreeDescription: "Verkoop je <a href='%(link)s'>gedrukte boek of e-book</a> via je eigen website of via Blurbs social media-kanalen, of verkoop via Amazon."
      },
      "trade-books": {
        columnOneTitle: "Verzendkosten berekenen",
        columnOneDescription: "Wil je je verzendkosten en levertijd berekenen? Kijk op onze pagina <a href='%(link)s'>Verzendkosten berekenen</a>.",
        columnTwoTitle: "Bulkorders",
        columnTwoDescription: "Of je nu een grote bestelling of een bestelling op maat plaatst, we bieden <a href='%(link)s'>afdrukmogelijkheden</a> afgestemd op wat je nodig hebt.",
        columnThreeTitle: "Verkoop je boek",
        columnThreeDescription: "Verkoop je <a href='%(link)s'>gedrukte boek of e-book</a> via je eigen website of via Blurbs social media-kanalen, of verkoop via Amazon."
      },
      magazines: {
        columnOneTitle: "Verzendkosten berekenen",
        columnOneDescription: "Wil je je verzendkosten en levertijd berekenen? Kijk op onze pagina <a href='%(link)s'>Verzendkosten berekenen</a>.",
        columnTwoTitle: "Bulkorders",
        columnTwoDescription: "Of je nu een grote bestelling of een bestelling op maat plaatst, we bieden <a href='%(link)s'>afdrukmogelijkheden</a> afgestemd op wat je nodig hebt.",
        columnThreeTitle: "Verkoop je boek",
        columnThreeDescription: "Verkoop <a href='%(link)s'>je magazine</a> op je eigen website en op Blurbs social media-kanalen."
      },
      ebooks: {
        columnOneTitle: "Meer inspiratie",
        columnOneDescription: "Weet je niet waar te beginnen? <a href='%(link)s'>Neem een kijkje</a> op de community van onze leden waar je prachtige e-books vindt.",
        columnTwoTitle: "Extra hulptroepen",
        columnTwoDescription: "Heb je hulp nodig van een expert? Blurb beschikt over het <a href='%(link)s'>Dreamteam</a>, een door Blurb erkend team dat hulp kan bieden bij schrijven, ontwerpen en illustreren en meer.",
        columnThreeTitle: "Verkoop je e-book",
        columnThreeDescription: "Verkoop <a href='%(link)s'>je boeken</a> via je eigen website of via Blurbs social media-kanalen of verkoop via de iBook Store van Apple."
      }
    },
    heroBanner: {
      paperBooks: {
        heading: "Omslagen & Papier",
        text: "We bieden een breed scala aan papiersoorten, soorten omslag, en afmetingen om uit te kiezen. Wil je de papiersoorten eerst zien? <a href='%(link)s'>Bestel vandaag nog een Stalenpakket</a>  met papiersoorten."
      },
      ebooks: {
        heading: "Meer informatie over e-books",
        text: "E-books zijn een makkelijke, betaalbare manier om je geschreven werk te delen en te verkopen."
      },
      button: "Meer informatie"
    },
    ctaBanner: {
      "photo-books": {
        heading: "Klaar om je fotoboek te maken?"
      },
      "trade-books": {
        heading: "Klaar om je boek te maken?"
      },
      "magazines": {
        heading: "Klaar om je magazine te maken?"
      },
      "ebooks": {
        heading: "Klaar om je e-book te maken?"
      },
      button: "Aan de slag"
    }
  },
  volumePricing: {
    heading: "Kwantumkortingen",
    quantity: "AANTAL",
    discount: "KORTING",
    basePrice: "Basisprijs",
    books1to9: "1–9 boeken",
    books10to19: "10–19 boeken",
    books20to49: "20–49 boeken",
    books51books: "50+ boeken",
    clientServices: {
      heading: "Klantenservice",
      content: "<a href='/volume-printing#quote-form'>Neem contact op met onze klantenservice bij</a> meer dan 100 boeken. Zij begeleiden je door het hele besteltraject."
    }
  }
};
