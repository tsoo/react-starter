module.exports = {
  getting_started: {
    title: "¿Estás listo/a para crear tu próximo libro?",
    cta: "Lancez-vous"
  },
  pricing: {
    heading: "Calculateur de tarif",
    tabs: {
      "photo-books": {
        title: "Livres photos",
        description: "Des livres photos de qualité professionnelle pour que la créativité puisse s’exprimer sous toutes ses formes."
      },
      "trade-books": {
        title: "Grands poches",
        description: "Des livres abordables à couverture souple ou rigide, qui se vendront comme des petits pains."
      },
      magazines: {
        title: "Magazines",
        description: "Le format magazine offre une solution élégante aux contenus en série."
      },
      ebooks: {
        title: "Ebooks",
        description: "Faciles à partager, les ebooks peuvent être consultés sur l’iPad® d’Apple et sur Kindle."
      }
    },
    pricingTable: {
      "photo-books": {
        bookSizes: {
          square: {
            title: "Petit carré",
            dimensions_inch: "7×7 po",
            dimensions_cm: "18×18 cm",
            default_pages: "20 pages par défaut"
          },
          standard_portrait: {
            title: "Portrait standard",
            dimensions_inch: "8×10 po",
            dimensions_cm: "20×25 cm",
            default_pages: "20 pages par défaut"
          },
          standard_landscape: {
            title: "Paysage standard",
            dimensions_inch: "10×8 po",
            dimensions_cm: "25×20 cm",
            default_pages: "20 pages par défaut"
          },
          large_square: {
            title: "Grand carré",
            dimensions_inch: "12×12 po",
            dimensions_cm: "30×30 cm",
            default_pages: "20 pages par défaut"
          },
          large_format_landscape: {
            title: "Grand paysage ",
            dimensions_inch: "13×11 po",
            dimensions_cm: "33×28 cm",
            default_pages: "20 pages par défaut"
          }
        },
        paperTypes: {
          standard_paper: {
            title: "Papier standard",
            summaryTitle: "papier standard",
            description: "Demi-mat (118 g/m²)"
          },
          premium_paper: {
            title: "Papier Premium, satiné ou mat",
            summaryTitle: "papier premium",
            description: "Premium satiné ou Premium mat (148 g/m²)"
          },
          pro_uncoated_paper: {
            title: "ProLine non couché",
            summaryTitle: "proline non couché",
            description: "Mohawk Superfine non couché (148 g/m²)"
          },
          pro_medium_gloss_paper: {
            title: "ProLine perle",
            summaryTitle: "proline perle",
            description: "Mohawk photo brillant (190 g/m²)"
          }
        },
        coverTypes: {
          softcover: {
            title: "Couverture souple",
            summaryTitle: "Souple"
          },
          dustjacket: {
            title: "Couverture rigide à jaquette",
            summaryTitle: "Rigide à jaquette"
          },
          imagewrap: {
            title: "Couverture rigide imprimée",
            summaryTitle: "Rigide imprimée"
          },
          additional_pages: {
            title: "Pages supplémentaires"
          }
        }
      },
      "trade-books": {
        bookSizes: {
          pocket_text: {
            title: "5×8",
            dimensions_inch: "5×8 po",
            dimensions_cm: "13×20 cm",
            default_pages: "24 pages par défaut"
          },
          large_text: {
            title: "6×9",
            dimensions_inch: "6×9 po",
            dimensions_cm: "15×23 cm",
            default_pages: "24 pages par défaut"
          },
          standard_portrait_true8x10: {
            title: "8×10",
            dimensions_inch: "8×10 po",
            dimensions_cm: "20×25 cm",
            default_pages: "24 pages par défaut"
          }
        },
        paperTypes: {
          economy_trade_bw_matte_paper: {
            title: "IMPRESSION NB ÉCO",
            summaryTitle: "noir et blanc éco",
            description: "Blanc non couché (75 g/m²) ou Crème non couché (80 g/m²)",
            pages: "24-480 pages"
          },
          standard_trade_bw_matte_paper: {
            title: "IMPRESSION STANDARD NB",
            summaryTitle: "standard noir et blanc",
            description: "Papier texte blanc non couché (75 g/m²)",
            pages: "24-480 pages"
          },
          economy_trade_matte_paper: {
            title: "IMPRESSION COULEUR ÉCO",
            summaryTitle: "couleur éco",
            description: "Blanc non couché (105 g/m²)",
            pages: "24-480 pages"
          },
          standard_trade_matte_paper: {
            title: "IMPRESSION STANDARD COULEUR",
            summaryTitle: "standard couleur",
            description: "Blanc non couché (105 g/m²)",
            pages: "24-480 pages"
          }
        },
        coverTypes: {
          softcover: {
            summaryTitle: "Souple",
            title: "Couverture souple"
          },
          dustjacket: {
            summaryTitle: "Rigide à jaquette",
            title: "Couverture rigide à jaquette"
          },
          imagewrap: {
            summaryTitle: "Rigide imprimée",
            title: "Couverture rigide imprimée"
          },
          additional_pages: {
            title: "Pages supplémentaires"
          }
        }
      },
      magazines: {
        bookSizes: {
          economy: {
            title: "MAGAZINE ÉCO",
            dimensions_inch: "8.5×11 po",
            dimensions_cm: "22×28 cm",
            default_pages: "20 pages par défaut"
          },
          premium: {
            title: "MAGAZINE PREMIUM",
            dimensions_inch: "8.5×11 po",
            dimensions_cm: "22×28 cm",
            default_pages: "20 pages par défaut"
          }
        },
        paperTypes: {
          magazine: {
            title: "Magazines",
            description: "",
            pages: ""
          },
          economy: {
            summaryTitle: "éco"
          },
          premium: {
            summaryTitle: "premium"
          }
        },
        coverTypes: {
          magazine: {
            title: "Prix"
          },
          additional_pages: {
            id: "",
            title: "Pages supplémentaires"
          }
        }
      },
      ebooks: {
        bookSizes: {
          fixed_layout_ebook: {
            title: "EBOOK AU FORMAT FIXE",
            description: "Formaté pour l’iPad®",
            price_description: "de frais de conversion"
          },
          kindle: {
            title: "EBOOK REFORMATABLE",
            description: "Formaté pour Kindle",
            freeConversion: "Conversion gratuite",
            price_description: "tant que le logiciel est en version bêta"
          },
          pdf: {
            title: "PDF",
            description: "Consultable sur la plupart des appareils",
            price_description: ""
          }
        }
      }
    },
    calculator: {
      "photo-books": {
        minPages: "Le nombre minimal de pages requis pour un livre est de 20.",
        overPageCount: "Un livre peut contenir au maximum 440 pages.",
        unevenPageCount: "Le nombre de pages doit être un nombre pair.",
        standardPaperOnly: "Les livres de plus de 240 pages ne peuvent être imprimés que du papier standard.",
        largeOrder: "Pour plus de 100 exemplaires, contactez notre équipe du Service client pour une assistance de projet complète.",
        removeBlurbLogo: "Le logo Blurb sur la dernière page de votre livre sera supprimé.",
        upgradeLinens: "Toiles : disponibles pour les livres à couverture rigide à jaquette.",
        upgradeEndsheets: "Pages de garde : disponibles pour les livres rigides imprimés ou à jaquette."
      },
      "trade-books": {
        minPages: "Le nombre minimal de pages requis pour un livre est de 24.",
        overPageCount: "Un livre peut contenir au maximum 480 pages.",
        unevenPageCount: "Le nombre de pages doit être un nombre pair.",
        largeOrder: "Pour plus de 100 exemplaires, contactez notre équipe du Service client pour une assistance de projet complète."
      },
      "magazines": {
        minPages: "Le nombre minimal de pages requis pour un livre est de 20.",
        multipleOfFour: "Multiples de 4 seulement",
        largeOrder: "Pour plus de 100 exemplaires, contactez notre équipe du Service client pour une assistance de projet complète.",
        overPageCount: "Un livre peut contenir au maximum 240 pages.",
        unevenPageCount: "Le nombre de pages doit être un nombre pair."
      },
      "quantity": {
        header: "Quantité",
        pageCount: "Nombre de pages",
        save10: "Vous économisez 10 %%.",
        save20: "Vous économisez 20 %%.",
        save25: "Vous économisez 25 %%.",
        largeOrder: "Pour plus de 100 exemplaires, contactez notre équipe du Service client pour une assistance de projet complète."
      },
      options: {
        removeBlurbLogo: "Retirer le logo Blurb",
        upgradeLinens: "Option Couverture toile",
        upgradeEndsheets: "Option pages de garde"
      },
      summary: {
        size: "format",
        cover: "couverture",
        paper: "papier",
        printing: "impression",
        volumeDiscount: "remise sur la quantité",
        noDiscountMessage: "à partir de 10 exemplaires",
        total: "total",
        totalPriceDescription: "Le total ne comprend pas les taxes ni les frais de port",
        totalPriceDescriptionVat: "Le total comprend la TVA, mais pas les frais de port"
      },
      "taxMessage": "Les prix affichés sont calculés par livre, TVA incluse, et ne comprennent pas les frais de port.",
      "header": "Calculateur de tarif",
      "calculate": "Calculer",
      "notAvailable": "Non disponible"
    },
    grid: {
      "photo-books": {
        columnOneTitle: "Calculateur de frais de port",
        columnOneDescription: "Vous souhaitez calculer vos frais de port et votre date de livraison ? Consultez notre <a href='%(link)s'>calculateur de frais de port</a>.",
        columnTwoTitle: "Impression en grande quantité",
        columnTwoDescription: "Que vous souhaitiez passer une grosse commande ou demander des options sur mesure, nous avons les <a href='%(link)s'>options d’impression</a> qu’il vous faut.",
        columnThreeTitle: "Vendre votre livre",
        columnThreeDescription: "<a href='%(link)s'>Vendez votre livre ou votre ebook</a>  sur votre propre site Internet et sur les réseaux sociaux via Blurb, ou vendez via Amazon."
      },
      "trade-books": {
        columnOneTitle: "Calculateur de frais de port",
        columnOneDescription: "Vous souhaitez calculer vos frais de port et votre date de livraison ? Consultez notre <a href='%(link)s'>calculateur de frais de port</a>.",
        columnTwoTitle: "Impression en grande quantité",
        columnTwoDescription: "Que vous souhaitiez passer une grosse commande ou demander des options sur mesure, nous avons les <a href='%(link)s'>options d’impression</a> qu’il vous faut.",
        columnThreeTitle: "Vendre votre livre",
        columnThreeDescription: "<a href='%(link)s'>Vendez votre livre ou votre ebook</a>  sur votre propre site Internet et sur les réseaux sociaux via Blurb, ou vendez via Amazon."
      },
      magazines: {
        columnOneTitle: "Calculateur de frais de port",
        columnOneDescription: "Vous souhaitez calculer vos frais de port et votre date de livraison ? Consultez notre <a href='%(link)s'>calculateur de frais de port</a>.",
        columnTwoTitle: "Impression en grande quantité",
        columnTwoDescription: "Que vous souhaitiez passer une grosse commande ou demander des options sur mesure, nous avons les <a href='%(link)s'>options d’impression</a> qu’il vous faut.",
        columnThreeTitle: "Vendre votre livre",
        columnThreeDescription: "<a href='%(link)s'>Vendez votre magazine</a> sur votre propre site Internet et sur les réseaux sociaux via Blurb."
      },
      ebooks: {
        columnOneTitle: "Trouvez l’inspiration",
        columnOneDescription: "Vous ne savez pas par où commencer ? <a href='%(link)s'>Jetez un œil</a>  aux superbes ebooks réalisés par la communauté des créateurs de livres.",
        columnTwoTitle: "Faites appel à un expert",
        columnTwoDescription: "Vous êtes un écrivain en recherche d’illustrateur ? Ou l’inverse ? Nos professionnels de la <a href='%(link)s'>Dream Team approuvés par Blurb peuvent vous aider</a>  pour les deux, et pour bien d’autres choses encore.",
        columnThreeTitle: "Vendez votre ebook",
        columnThreeDescription: "<a href='%(link)s'>Vendez votre ebook</a> sur votre propre site Internet et sur les réseaux sociaux via Blurb, ou vendez-le via l’iBooks Store d’Apple."
      }
    },
    heroBanner: {
      paperBooks: {
        heading: "Couvertures et papiers",
        text: "Nous offrons un large choix de papiers, de types de couverture et de formats de découpe. Vous souhaitez voir les différents papiers par vous-même ? Commandez un <a href='%(link)s'>Ensemble d’échantillons</a> dès aujourd’hui."
      },
      ebooks: {
        heading: "En savoir plus sur les ebooks",
        text: "Les ebooks constituent un moyen simple et économique de partager et de vendre votre travail."
      },
      button: "En savoir plus"
    },
    ctaBanner: {
      "photo-books": {
        heading: "Prêt à créer votre livre photo ?"
      },
      "trade-books": {
        heading: "Prêt à créer votre grand poche ?"
      },
      "magazines": {
        heading: "Prêt à créer votre magazine ?"
      },
      "ebooks": {
        heading: "Prêt à créer votre ebook ?"
      },
      button: "Lancez-vous"
    }
  },
  volumePricing: {
    heading: "Remises sur la quantité",
    quantity: "QUANTITÉ",
    discount: "REMISE",
    basePrice: "Prix de base",
    books1to9: "1–9 livres",
    books10to19: "10–19 livres",
    books20to49: "20–49 livres",
    books51books: "50+ livres",
    clientServices: {
      heading: "Client Services",
      content: "Pour plus de 100 livres, <a href='/volume-printing#quote-form'>contactez notre Service Client</a> pour une assistance complète sur votre projet."
    }
  }
};
