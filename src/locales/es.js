module.exports = {
  getting_started: {
    title: "¿Estás listo/a para crear tu próximo libro?",
    cta: "Empieza ya"
  },
  pricing: {
    heading: "Calculadora de precios",
    tabs: {
      "photo-books": {
        title: "Libros de fotos",
        description: "Libros de fotos de calidad profesional para expresiones creativas de todo tipo."
      },
      "trade-books": {
        title: "Libros comerciales",
        description: "Libros de bolsillo y de tapa dura asequibles, perfectos para venderlos."
      },
      magazines: {
        title: "Revistas",
        description: "El formato de revista ofrece una solución elegante para el contenido en serie."
      },
      ebooks: {
        title: "Ebooks",
        description: "Los ebooks son fáciles de compartir y pueden verse en el iPad® de Apple y en el Kindle."
      }
    },
    pricingTable: {
      "photo-books": {
        bookSizes: {
          square: {
            title: "Cuadrado pequeño",
            dimensions_inch: "7×7 in",
            dimensions_cm: "18×18 cm",
            default_pages: "20 páginas (tamaño mínimo)"
          },
          standard_portrait: {
            title: "Vertical estándar",
            dimensions_inch: "8×10 in",
            dimensions_cm: "20×25 cm",
            default_pages: "20 páginas (tamaño mínimo)"
          },
          standard_landscape: {
            title: "Apaisado estándar",
            dimensions_inch: "10×8 in",
            dimensions_cm: "25×20 cm",
            default_pages: "20 páginas (tamaño mínimo)"
          },
          large_square: {
            title: "Cuadrado grande",
            dimensions_inch: "12×12 in",
            dimensions_cm: "30×30 cm",
            default_pages: "20 páginas (tamaño mínimo)"
          },
          large_format_landscape: {
            title: "Apaisado grande",
            dimensions_inch: "13×11 in",
            dimensions_cm: "33×28 cm",
            default_pages: "20 páginas (tamaño mínimo)"
          }
        },
        paperTypes: {
          standard_paper: {
            title: "Papel estándar",
            summaryTitle: "PAPEL ESTÁNDAR",
            description: "Papel fotográfico semi-mate (118 g/m²)"
          },
          premium_paper: {
            title: "Premium, papel",
            summaryTitle: "PAPEL PREMIUM",
            description: "fotográfico satinado o mate (148 g/m²)"
          },
          pro_uncoated_paper: {
            title: "ProLine no estucado",
            summaryTitle: "PROLINE NO ESTUCADO",
            description: "Papel fotográfico Mohawk Superfine no estucado (148 g/m²)"
          },
          pro_medium_gloss_paper: {
            title: "ProLine perlado",
            summaryTitle: "PROLINE PERLADO",
            description: "Papel fotográfico Mohawk brillante (190 g/m²)"
          }
        },
        coverTypes: {
          softcover: {
            title: "Tapa blanda",
            summaryTitle: "Tapa blanda"
          },
          dustjacket: {
            title: "Tapa dura con sobrecubierta",
            summaryTitle: "Tapa dura con sobrecubierta"
          },
          imagewrap: {
            title: "Tapa dura impresa",
            summaryTitle: "Tapa dura impresa"
          },
          additional_pages: {
            title: "Páginas adicionales"
          }
        }
      },
      "trade-books": {
        bookSizes: {
          pocket_text: {
            title: "5×8",
            dimensions_inch: "5×8 in",
            dimensions_cm: "13×20 cm",
            default_pages: "24 páginas (tamaño mínimo)"
          },
          large_text: {
            title: "6×9",
            dimensions_inch: "6×9 in",
            dimensions_cm: "15×23 cm",
            default_pages: "24 páginas (tamaño mínimo)"
          },
          standard_portrait_true8x10: {
            title: "8×10",
            dimensions_inch: "8×10 in",
            dimensions_cm: "20×25 cm",
            default_pages: "24 páginas (tamaño mínimo)"
          }
        },
        paperTypes: {
          economy_trade_bw_matte_paper: {
            title: "IMPRESIÓN ECONÓMICA EN BLANCO Y NEGRO",
            summaryTitle: "ECONÓMICA BLANCO Y NEGRO",
            description: "Papel no estucado blanco (75 g/m²) o crema (80 g/m²)",
            pages: "24-480 páginas"
          },
          standard_trade_bw_matte_paper: {
            title: "IMPRESIÓN ESTÁNDAR EN BLANCO Y NEGRO",
            summaryTitle: "ESTÁNDAR BLANCO Y NEGRO",
            description: "Papel para texto no estucado blanco (75 g/m²)",
            pages: "24-480 páginas"
          },
          economy_trade_matte_paper: {
            title: "IMPRESIÓN ECONÓMICA EN COLOR",
            summaryTitle: "ECONÓMICA COLOR",
            description: "Papel blanco no estucado (105 g/m²)",
            pages: "24-480 páginas"
          },
          standard_trade_matte_paper: {
            title: "IMPRESIÓN ESTÁNDAR EN COLOR",
            summaryTitle: "ESTÁNDAR COLOR",
            description: "Papel blanco no estucado (105 g/m²)",
            pages: "24-480 páginas"
          }
        },
        coverTypes: {
          softcover: {
            summaryTitle: "Tapa blanda",
            title: "Tapa blanda"
          },
          dustjacket: {
            summaryTitle: "Tapa dura con sobrecubierta",
            title: "Tapa dura con sobrecubierta"
          },
          imagewrap: {
            summaryTitle: "Tapa dura impresa",
            title: "Tapa dura impresa"
          },
          additional_pages: {
            title: "Páginas adicionales"
          }
        }
      },
      magazines: {
        bookSizes: {
          economy: {
            title: "REVISTA DE FORMATO ECONÓMICO",
            dimensions_inch: "8.5×11 in",
            dimensions_cm: "22×28 cm",
            default_pages: "20 páginas (tamaño mínimo)"
          },
          premium: {
            title: "REVISTA PREMIUM",
            dimensions_inch: "8.5×11 in",
            dimensions_cm: "22×28 cm",
            default_pages: "20 páginas (tamaño mínimo)"
          }
        },
        paperTypes: {
          magazine: {
            title: "Revistas",
            description: "",
            pages: ""
          },
          economy: {
            summaryTitle: "ECONÓMICA"
          },
          premium: {
            summaryTitle: "Premium"
          }
        },
        coverTypes: {
          magazine: {
            title: "Precio"
          },
          additional_pages: {
            id: "",
            title: "Páginas adicionales"
          }
        }
      },
      ebooks: {
        bookSizes: {
          fixed_layout_ebook: {
            title: "EBOOK DE FORMATO FIJO",
            description: "Formato apto para el iPad®",
            price_description: "Precio de conversión de"
          },
          kindle: {
            title: "EBOOK AJUSTABLE",
            description: "Formato apto para el Kindle",
            freeConversion: "Conversión gratis",
            price_description: "durante la versión beta"
          },
          pdf: {
            title: "PDF",
            description: "Visible en la mayoría de dispositivos",
            price_description: ""
          }
        }
      }
    },
    calculator: {
      "photo-books": {
        minPages: "Los libros deben tener como mínimo 20 páginas.",
        overPageCount: "Los libros pueden tener como máximo 440 páginas.",
        unevenPageCount: "El número de páginas debe ser par.",
        standardPaperOnly: "Los libros de más de 240 páginas solo pueden imprimirse en papel estándar.",
        largeOrder: "Si tu libro tiene más de 100 páginas, contacta con nuestro equipo de Atención al Cliente para obtener ayuda con el proyecto.",
        removeBlurbLogo: "El logotipo de Blurb se quitará de la última página del libro.",
        upgradeLinens: "Cubiertas de tela: disponibles para los libros de tapa dura con sobrecubierta.",
        upgradeEndsheets: "Guardas: disponibles para los libros de tapa dura con sobrecubierta y de tapa dura impresa."
      },
      "trade-books": {
        minPages: "Los libros deben tener como mínimo 24 páginas.",
        overPageCount: "Los libros pueden tener como máximo 480 páginas.",
        unevenPageCount: "El número de páginas debe ser par.",
        largeOrder: "Si tu libro tiene más de 100 páginas, contacta con nuestro equipo de Atención al Cliente para obtener ayuda con el proyecto."
      },
      "magazines": {
        minPages: "Los libros deben tener como mínimo 20 páginas.",
        multipleOfFour: "Sólo múltiples de 4",
        largeOrder: "Si tu libro tiene más de 100 páginas, contacta con nuestro equipo de Atención al Cliente para obtener ayuda con el proyecto.",
        overPageCount: "Los libros pueden tener como máximo 240 páginas.",
        unevenPageCount: "El número de páginas debe ser par."
      },
      "quantity": {
        header: "Cantidad",
        pageCount: "Número de páginas",
        save10: "Ahorras un 10%%",
        save20: "Ahorras un 20%%",
        save25: "Ahorras un 25%%",
        largeOrder: "Si tu libro tiene más de 100 páginas, contacta con nuestro equipo de Atención al Cliente para obtener ayuda con el proyecto."
      },
      options: {
        removeBlurbLogo: "Quite el logotipo de Blurb",
        upgradeLinens: "Mejora a cubierta de tejido",
        upgradeEndsheets: "Adición de guarda"
      },
      summary: {
        size: "tamaño",
        cover: "cubierta",
        paper: "papel",
        printing: "impresión",
        volumeDiscount: "descuento por volumen",
        noDiscountMessage: "A partir de 10 copias",
        total: "total",
        totalPriceDescription: "No incluye IVA ni gastos de envío.",
        totalPriceDescriptionVat: "Incluye IVA, pero no incluye gastos de envío."
      },
      "taxMessage": "Los precios mostrados están calculados por libro e incluyen el IVA. No incluyen los gastos de envío.",
      "header": "Calculadora de precios",
      "calculate": "Cacular",
      "notAvailable":  "No disponible"
    },
    grid: {
      "photo-books": {
        columnOneTitle: "Calculadora de gastos de envío",
        columnOneDescription: "¿Quieres calcular los costes y el plazo de envío? Echa un vistazo a nuestra <a href='%(link)s'>calculadora de gastos de envío</a>.",
        columnTwoTitle: "Impresión por volumen",
        columnTwoDescription: "Si vas a hacer un pedido grande o quieres utilizar opciones personalizadas, tenemos <a href='%(link)s'>opciones de impresión</a> que se adaptan a tus necesidades.",
        columnThreeTitle: "Vende tu libro",
        columnThreeDescription: "<a href='%(link)s'>Vende tu libro impreso o ebook</a> en tu propio sitio web y en las redes sociales a través de Blurb, o en Amazon."
      },
      "trade-books": {
        columnOneTitle: "Calculadora de gastos de envío",
        columnOneDescription: "¿Quieres calcular los costes y el plazo de envío? Echa un vistazo a nuestra <a href='%(link)s'>calculadora de gastos de envío</a>.",
        columnTwoTitle: "Impresión por volumen",
        columnTwoDescription: "Si vas a hacer un pedido grande o quieres utilizar opciones personalizadas, tenemos <a href='%(link)s'>opciones de impresión</a> que se adaptan a tus necesidades.",
        columnThreeTitle: "Vende tu libro",
        columnThreeDescription: "<a href='%(link)s'>Vende tu libro impreso o ebook</a> en tu propio sitio web y en las redes sociales a través de Blurb, o en Amazon."
      },
      magazines: {
        columnOneTitle: "Calculadora de gastos de envío",
        columnOneDescription: "¿Quieres calcular los costes y el plazo de envío? Echa un vistazo a nuestra <a href='%(link)s'>calculadora de gastos de envío</a>.",
        columnTwoTitle: "Impresión por volumen",
        columnTwoDescription: "Si vas a hacer un pedido grande o quieres utilizar opciones personalizadas, tenemos <a href='%(link)s'>opciones de impresión</a> que se adaptan a tus necesidades.",
        columnThreeTitle: "Vende tu libro",
        columnThreeDescription: "<a href='%(link)s'>Vende tu libro impreso o ebook</a> en tu propio sitio web y en las redes sociales a través de Blurb, o en Amazon."
      },
      ebooks: {
        columnOneTitle: "Inspírate",
        columnOneDescription: "¿No sabes por dónde empezar? <a href='%(link)s'>Echa un vistazo</a> a los bonitos ebooks que ha creado la comunidad de creadores.",
        columnTwoTitle: "Contrata a un experto",
        columnTwoDescription: "¿Eres escritor y necesitas un ilustrador? ¿O viceversa? Nuestros profesionales del <a href='%(link)s'>Dream Team</a>  aprobados por Blurb pueden ayudarte en ambos casos, y mucho más.",
        columnThreeTitle: "Vende tu ebook",
        columnThreeDescription: "<a href='%(link)s'>Vende tu ebook</a> en tu propio sitio web y en las redes sociales a través de Blurb, o véndelo en la iBooks Store de Apple."
      }
    },
    heroBanner: {
      paperBooks: {
        heading: "Cubierta y papeles",
        text: "Ofrecemos una amplia gama de papeles, tipos de cubierta y tamaños de corte entre los que elegir. ¿Quieres ver los tipos de papel? <a href='%(link)s'>Pide un kit de muestras</a>  hoy mismo."
      },
      ebooks: {
        heading: "Más información sobre los ebooks",
        text: "Los ebooks son una forma fácil y asequible de compartir y vender tu libro."
      },
      button: "Más información"
    },
    ctaBanner: {
      "photo-books": {
        heading: "¿Te animas a crear tu libro de fotos?"
      },
      "trade-books": {
        heading: "¿Te animas a crear tu libro comercial?"
      },
      "magazines": {
        heading: "¿Te animas a crear tu revista?"
      },
      "ebooks": {
        heading: "¿Te animas a crear tu ebook?"
      },
      button: "Empezar"
    }
  },
  volumePricing: {
    heading: "Descuentos por volumen",
    quantity: "CANTIDAD",
    discount: "DESCUENTO",
    basePrice: "Precio base",
    books1to9: "1–9 libros",
    books10to19: "10–19 libros",
    books20to49: "20–49 libros",
    books51books: "50+ libros",
    clientServices: {
      heading: "Servicios al Cliente",
      content: "Si quieres hacer un pedido de 100 libros o más, <a href='/volume-printing#quote-form'>contacta con nuestro equipo de Servicios al Cliente </a> fpara obtener ayuda en todas las fases del proyecto."
    }
  }
};
