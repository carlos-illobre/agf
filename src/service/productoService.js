angular.module('agrofinger')
.service('productoService', function() {
	this.todos = [
		{
			nombre: 'BIOLURE LB'
		},{
			nombre: 'TUTALURE'
		},{
			nombre: 'CHECK MATE LB F'
		},{
			nombre: 'HARVISTA 0,8 OF'
		},{
			nombre: 'STRIKE'
		},{
			nombre: 'TELONE C'
		},{
			nombre: 'SMARTFRESH  PROTABS'
		},{
			nombre: '2,4 D CAMPO'
		},{
			nombre: '2,4 D ZAMBA'
		},{
			nombre: '2,4-D 60 GREEN CROPS'
		},{
			nombre: '2,4D 60 MELTHIS'
		},{
			nombre: '2,4D 96,3 NUFARM'
		},{
			nombre: '2,4D AGM'
		},{
			nombre: '2,4D AMNA MAX'
		},{
			nombre: '2,4D CHEMIQAR'
		},{
			nombre: '2,4D CHEMPRO'
		},{
			nombre: '2,4D CRES'
		},{
			nombre: '2,4D FQ'
		},{
			nombre: '2,4D ICONA CE'
		},{
			nombre: '2,4D LV ESTERCIDE RAINBOW'
		},{
			nombre: '2,4D MULCHEN EXPRESS'
		},{
			nombre: '2,4D PLUS ZAMBA'
		},{
			nombre: '2,4D RAINBOW'
		},{
			nombre: '2,4D TERRIUM'
		},{
			nombre: '2,4D ZAMBA'
		},{
			nombre: '2,4-DH-TECH RURALCO'
		},{
			nombre: 'ACADEMIX'
		},{
			nombre: 'ACTION 2,4D'
		},{
			nombre: 'ADAMA ESSENTIALS PARADIGM'
		},{
			nombre: 'ALLGRAM 2,4 D SDA 60'
		},{
			nombre: 'ARADOR'
		},{
			nombre: 'ARADOR 60'
		},{
			nombre: 'ARAMINA 2,4D 60'
		},{
			nombre: 'ASI MAX 50'
		},{
			nombre: 'ASI MAX 72'
		},{
			nombre: 'ASI MAX 80 WP'
		},{
			nombre: 'ASIMAX 60 TOP'
		},{
			nombre: 'ASIMAX 80'
		},{
			nombre: 'BASIC AGROS'
		},{
			nombre: 'BASIC AGROS LOSS'
		},{
			nombre: 'BASIC AGROS LOSS CONTROLED'
		},{
			nombre: 'CAMPEON 100 STK'
		},{
			nombre: 'CLEAN CROP SUPER'
		},{
			nombre: 'CLEAN SPRAY'
		},{
			nombre: 'CONTROL 2,4-D'
		},{
			nombre: 'D-70'
		},{
			nombre: 'DEDALO'
		},{
			nombre: 'DEDALO 60% SL'
		},{
			nombre: 'DEDALO ELITE'
		},{
			nombre: 'DEDALO RED SURCOS'
		},{
			nombre: 'DEDALO SUPER'
		},{
			nombre: 'DEGLEX'
		},{
			nombre: 'DMA'
		},{
			nombre: 'DMA 48'
		},{
			nombre: 'DOSCUAFOR'
		},{
			nombre: 'DRACO'
		},{
			nombre: 'ENTRIX'
		},{
			nombre: 'FENIX'
		},{
			nombre: 'FENIX GOLD'
		},{
			nombre: 'FENIX STK'
		},{
			nombre: 'FENOMYL'
		},{
			nombre: 'HERBIFEN SUPER'
		},{
			nombre: 'JAB'
		},{
			nombre: 'KING 50'
		},{
			nombre: 'KING LIX'
		},{
			nombre: 'MACHETE D 72'
		},{
			nombre: 'MATRIX'
		},{
			nombre: 'MORTAL'
		},{
			nombre: 'MORTAL D'
		},{
			nombre: 'MULCHEN NV'
		},{
			nombre: 'NAVAJO'
		},{
			nombre: 'SALIX 80'
		},{
			nombre: 'SALIX TERRIUM'
		},{
			nombre: 'SELECTIVO DC'
		},{
			nombre: 'SMART'
		},{
			nombre: 'SOLUTION'
		},{
			nombre: 'SWIFT SPRAY'
		},{
			nombre: 'TOPSPRAY'
		},{
			nombre: 'WEEDAR '
		},{
			nombre: 'WEEDAR DRY'
		},{
			nombre: 'WEEDAR FULL'
		},{
			nombre: 'WEEDISHIDE'
		},{
			nombre: '2,4 D AMINA ACA'
		},{
			nombre: '2,4 D AMINA MAGAN'
		},{
			nombre: '2,4D AMINA 60 AFA'
		},{
			nombre: '2,4D AMINA 60 HELM'
		},{
			nombre: '2,4-D AMINA 60 LQ'
		},{
			nombre: '2,4D AMINA 60% IYASI'
		},{
			nombre: '2,4D AMINA AGM'
		},{
			nombre: '2,4D AMINA AGROVERDE'
		},{
			nombre: '2,4D AMINA DVA'
		},{
			nombre: '2,4D AMINA FORMULAGRO'
		},{
			nombre: '2,4D AMINA ICONA 70 SL'
		},{
			nombre: '2,4D AMINA ICONA SL'
		},{
			nombre: '2,4-D AMINA KEMSURE'
		},{
			nombre: '2,4D AMINA LINE'
		},{
			nombre: '2,4D AMINA MAX 50'
		},{
			nombre: '2,4D AMINA MAX 60'
		},{
			nombre: '2,4D AMINA MAXX'
		},{
			nombre: '2,4D AMINA NV EQUIPAGRO'
		},{
			nombre: '2,4D AMINA SUMAGRO'
		},{
			nombre: '2,4D AMINA SUMAGRO SL'
		},{
			nombre: '2,4D AMINA TERRIUM'
		},{
			nombre: '2,4D AMINA ZAMBA'
		},{
			nombre: '2,4D AMINA ZAMBA'
		},{
			nombre: '2,4D SUPER AMINE SG RAINBOW'
		},{
			nombre: '2,4D SUPER AMINE SP RAINBOW'
		},{
			nombre: '24D AMINA BIESTERFELD'
		},{
			nombre: 'ADAMA ESSENTIALS 2,4 D AMINA'
		},{
			nombre: 'ALLGRAM 2,4DA'
		},{
			nombre: 'AMINA 50 RURALCO'
		},{
			nombre: 'AMINA JNG'
		},{
			nombre: 'AMINA SP'
		},{
			nombre: 'AMINE SPRAY '
		},{
			nombre: 'ARAMINA 2,4D PLUS'
		},{
			nombre: 'ASP AMINA 60'
		},{
			nombre: 'CROPMAX 2,4D AMINA 50'
		},{
			nombre: 'DAARGUS 2,4D AMINA'
		},{
			nombre: 'D-AMINA'
		},{
			nombre: 'D-SEM AMINA 60'
		},{
			nombre: 'GREEN CHOICE 2,4D AMINA'
		},{
			nombre: 'H. 2,4-D AMINA 80,4'
		},{
			nombre: 'PHILAMINA'
		},{
			nombre: 'PHILAMINA 50'
		},{
			nombre: 'PRO D 60 AMINA'
		},{
			nombre: 'VENDAVAL 2,4D AMINA '
		},{
			nombre: '2,4D CAMPO ESTER'
		},{
			nombre: '2,4D ESTER 100 SIGMA'
		},{
			nombre: '2,4D ESTER KEMSURE'
		},{
			nombre: '2,4D ESTER LINE'
		},{
			nombre: '2,4D ESTER MELTHIS'
		},{
			nombre: '2,4D ISOCTYL ESTER SIGMA'
		},{
			nombre: '24D ESTER BIESTERFELD'
		},{
			nombre: 'ARADOR ESTER 100'
		},{
			nombre: 'ASP ESTER 100'
		},{
			nombre: 'ASP ESTER LV'
		},{
			nombre: 'ASP ESTER XTRA'
		},{
			nombre: 'CAESTER'
		},{
			nombre: 'ESTERON ULTRA'
		},{
			nombre: 'ESTERON ULTRA S'
		},{
			nombre: 'NOVOLESTER 68'
		},{
			nombre: 'NOVOLESTER 97'
		},{
			nombre: 'NOVOLESTER AGM'
		},{
			nombre: 'PRO D 100 ESTER'
		},{
			nombre: 'VENDAVAL 2,4D ESTER ISOBUTILICO'
		},{
			nombre: '2,4-D 100 GREEN CROPS'
		},{
			nombre: '2,4-D 100 RAINBOW'
		},{
			nombre: 'BASIC ESTER 100'
		},{
			nombre: 'WEEDONE'
		},{
			nombre: '2,4 D ESTER MAGAN'
		},{
			nombre: 'NV NO VOLATIL ATANOR'
		},{
			nombre: '2,4D AMINA'
		},{
			nombre: 'HERBIFEN AMINA'
		},{
			nombre: 'HERBIFEN AMINA TD'
		},{
			nombre: '2,4D AMINA 60 RAINBOW'
		},{
			nombre: 'COMPAÑÍA 2,4-D AMINA'
		},{
			nombre: '2,4D SAL AMINA BAYA CASAL'
		},{
			nombre: '2,4-DB 100  ACA'
		},{
			nombre: '2,4-DB CHEMOTECNICA'
		},{
			nombre: '2,4DB MULCHEN EXPRESS'
		},{
			nombre: '2,4DB ZAMBA'
		},{
			nombre: 'BUTOXONE '
		},{
			nombre: 'DB SEM 100'
		},{
			nombre: 'DEBEMAX'
		},{
			nombre: 'VENCEWEED EXTRA'
		},{
			nombre: '2,4 DB ESTER RAINBOW'
		},{
			nombre: 'SMARTSPRAY BE'
		},{
			nombre: 'BUTOXONE E'
		},{
			nombre: 'VENCEWEED AMINA 50'
		},{
			nombre: 'EXILIS PLUS'
		},{
			nombre: 'MAXCEL'
		},{
			nombre: 'PROMALINA'
		},{
			nombre: 'ABA 0,7 LPU'
		},{
			nombre: 'ABAMEC'
		},{
			nombre: 'ABAMECTIN 1,8 EC'
		},{
			nombre: 'ABAMECTINA 1,8'
		},{
			nombre: 'ABAMECTINA 1,8 AFA'
		},{
			nombre: 'ABAMECTINA 1,8 ARN EBC'
		},{
			nombre: 'ABAMECTINA 1,8 JNG'
		},{
			nombre: 'ABAMECTINA 1,8 MELTHIS'
		},{
			nombre: 'ABAMECTINA 1,8 RAINBOW'
		},{
			nombre: 'ABAMECTINA 1,8 STOCKTON'
		},{
			nombre: 'ABAMECTINA 1.8 HELM'
		},{
			nombre: 'ABAMECTINA AGM'
		},{
			nombre: 'ABAMECTINA AGRO'
		},{
			nombre: 'ABAMECTINA AGROSPEC 1,8 EC'
		},{
			nombre: 'ABAMECTINA FARM CHEMICALS FORTE'
		},{
			nombre: 'ABAMECTINA JNG'
		},{
			nombre: 'ABAMECTINA MARKETING AGRICOLA'
		},{
			nombre: 'ABAMECTINA MELTHIS'
		},{
			nombre: 'ABAMECTINA MICROACTIVE'
		},{
			nombre: 'ABAMECTINA SIGMA'
		},{
			nombre: 'ABAMECTINA SINER'
		},{
			nombre: 'ABAMET'
		},{
			nombre: 'ABAMEX'
		},{
			nombre: 'ABAX 1,8 FORMULAGRO'
		},{
			nombre: 'ABAX 3,6'
		},{
			nombre: 'ABINSEC'
		},{
			nombre: 'ACARAMIK EC'
		},{
			nombre: 'ARANYA 3,6%'
		},{
			nombre: 'AVAL DOBLE'
		},{
			nombre: 'AVERCHEM'
		},{
			nombre: 'AVICTA'
		},{
			nombre: 'BIO-MECTINA'
		},{
			nombre: 'EKAMET'
		},{
			nombre: 'EKAMET ARSA'
		},{
			nombre: 'FACILY 1,8'
		},{
			nombre: 'FAST 1,8 '
		},{
			nombre: 'FOCUS'
		},{
			nombre: 'GEKKO'
		},{
			nombre: 'HEAD H'
		},{
			nombre: 'HORMIXAN MIREX'
		},{
			nombre: 'HUAGRO TOX'
		},{
			nombre: 'KAYTINA'
		},{
			nombre: 'MECTINA FORTE'
		},{
			nombre: 'MECTINA RED SURCOS'
		},{
			nombre: 'MECTINA SURCOS'
		},{
			nombre: 'MIREX AT MAX'
		},{
			nombre: 'NEW MECTIN'
		},{
			nombre: 'NOVACTINA'
		},{
			nombre: 'OLIMPO'
		},{
			nombre: 'PHILAMEC 3,6'
		},{
			nombre: 'ROMECTIN EC'
		},{
			nombre: 'ROMECTIN G'
		},{
			nombre: 'STARTINA'
		},{
			nombre: 'STARTINA LPU'
		},{
			nombre: 'SUPERMECTIN'
		},{
			nombre: 'TRESPASS'
		},{
			nombre: 'VANTAL FORTE'
		},{
			nombre: 'VERTIMEC'
		},{
			nombre: 'VERTIMEC 8,4 SC'
		},{
			nombre: 'VIGIA'
		},{
			nombre: 'BIABA'
		},{
			nombre: 'CENTRON'
		},{
			nombre: 'RADIS TM'
		},{
			nombre: 'SOLVIGO'
		},{
			nombre: 'ACEFATO 75 AGROS'
		},{
			nombre: 'ACEFATO 75 DVA'
		},{
			nombre: 'ACEFATO 75 NUFARM'
		},{
			nombre: 'ACEFATO 75 SHINUNG'
		},{
			nombre: 'ACEFATO 90 RAINBOW'
		},{
			nombre: 'ACEFATO AGROS'
		},{
			nombre: 'ACEFATO CAUQUE 75 % SP'
		},{
			nombre: 'ACEFATO FQ'
		},{
			nombre: 'ACEFATO SHARDA 75'
		},{
			nombre: 'ACEFATO SIGMA'
		},{
			nombre: 'ACEHERO'
		},{
			nombre: 'ACE-UP'
		},{
			nombre: 'AVIAT 97 DF'
		},{
			nombre: 'GANGSTER'
		},{
			nombre: 'GANGSTER  90 SG'
		},{
			nombre: 'GANGSTER 75'
		},{
			nombre: 'GANGSTER S'
		},{
			nombre: 'INDCEFATO 75'
		},{
			nombre: 'LANCER'
		},{
			nombre: 'LANCER 97 DF'
		},{
			nombre: 'ORTHENE 75 SP'
		},{
			nombre: 'ORTHENE 80 SS'
		},{
			nombre: 'SABACE'
		},{
			nombre: 'TOFAC'
		},{
			nombre: 'VERDUGO'
		},{
			nombre: 'TIMOREX GOLD'
		},{
			nombre: 'CREOCARBO'
		},{
			nombre: 'CREOSOTA DEL NALON'
		},{
			nombre: 'ACEITE QUIMECO'
		},{
			nombre: 'ACEITE QUIMECO PLUS'
		},{
			nombre: 'ACEITE ROCIO'
		},{
			nombre: 'ACEITE VEGETAL AEC'
		},{
			nombre: 'ACEITE VEGETAL AEC II'
		},{
			nombre: 'ACEITE VEGETAL AGH'
		},{
			nombre: 'ACEITE VEGETAL AGROQUIMICA TOLEDO'
		},{
			nombre: 'ACEITE VEGETAL ECO ADH'
		},{
			nombre: 'ACEITE VEGETAL MARKETING AGRICOLA'
		},{
			nombre: 'ACEITE VEGETAL RURALCO'
		},{
			nombre: 'ACEITE VEGETAL SUMAGRO'
		},{
			nombre: 'ACEITE VEGETAL TANK'
		},{
			nombre: 'ACTIVE OIL ECO'
		},{
			nombre: 'ACTIVE OIL ECO M'
		},{
			nombre: 'ACTIVEG'
		},{
			nombre: 'ADHER FOL OLEO'
		},{
			nombre: 'AGRO OLEO'
		},{
			nombre: 'AID OIL'
		},{
			nombre: 'ATAVIO'
		},{
			nombre: 'BIO OIL'
		},{
			nombre: 'C. COA VEGETAL'
		},{
			nombre: 'CHEMI-OIL'
		},{
			nombre: 'CUMPA'
		},{
			nombre: 'ECO MELTHIS'
		},{
			nombre: 'ECO OIL'
		},{
			nombre: 'ECO PROCHEM'
		},{
			nombre: 'EL AGRICULTOR'
		},{
			nombre: 'EXET'
		},{
			nombre: 'FULL OIL'
		},{
			nombre: 'FUXION'
		},{
			nombre: 'GEA OIL'
		},{
			nombre: 'GLOBAL OIL'
		},{
			nombre: 'GRAM PLUS'
		},{
			nombre: 'MAXI DROP BIO'
		},{
			nombre: 'METILUS'
		},{
			nombre: 'NIEBLA MAS'
		},{
			nombre: 'NITRASOIL AVS'
		},{
			nombre: 'NITRO FIX OLEO'
		},{
			nombre: 'OIL SP'
		},{
			nombre: 'OLEO FULL'
		},{
			nombre: 'OLEO INGENIUM AGRO'
		},{
			nombre: 'OLEOGREEN AGROS'
		},{
			nombre: 'OLEOSOJA CB'
		},{
			nombre: 'OLIUS'
		},{
			nombre: 'PLUS OIL'
		},{
			nombre: 'PLUSOIL LQ'
		},{
			nombre: 'POTENCIAL OIL'
		},{
			nombre: 'PRODINOLEO'
		},{
			nombre: 'QUIMECO WINNOW'
		},{
			nombre: 'SEROIL ECO'
		},{
			nombre: 'SING OIL'
		},{
			nombre: 'SISTEMOIL ACA'
		},{
			nombre: 'SOYBEAM OIL'
		},{
			nombre: 'SQ OIL NATURAL'
		},{
			nombre: 'TROPIC'
		},{
			nombre: 'TTM'
		},{
			nombre: 'VEGETAL OIL'
		},{
			nombre: 'SONIC'
		},{
			nombre: 'OIL SOLUTION'
		},{
			nombre: 'ACEITE AGRICOLA AFA'
		},{
			nombre: 'BIOSOJOIL'
		},{
			nombre: 'BROTES'
		},{
			nombre: 'MIRK - OIL'
		},{
			nombre: 'MIRK OIL EXTRA GOLD'
		},{
			nombre: 'SOIL-TEK'
		},{
			nombre: 'ACEITE AGRICOLA SYNGENTA'
		},{
			nombre: 'ACEITE MINERAL AEC'
		},{
			nombre: 'ACTIVE OIL'
		},{
			nombre: 'AGRO OIL'
		},{
			nombre: 'ARGENFRUT L ALFA'
		},{
			nombre: 'ARGENFRUT RI'
		},{
			nombre: 'ARGENFRUT R-V'
		},{
			nombre: 'ARGENFRUT SUPREME'
		},{
			nombre: 'ARGENFRUT SUPREME GREEN'
		},{
			nombre: 'C . ADYUVANTE 80'
		},{
			nombre: 'C. ACEITE COADYUVANTE'
		},{
			nombre: 'C. NEW CH-COA'
		},{
			nombre: 'CADDET'
		},{
			nombre: 'CITRUS'
		},{
			nombre: 'COAD OIL'
		},{
			nombre: 'COADYUVANTE BAYER XTRA'
		},{
			nombre: 'ELF PURESPRAY 10E'
		},{
			nombre: 'ELF PURESPRAY GREEN'
		},{
			nombre: 'EMULCEIT'
		},{
			nombre: 'F . ACEITE FUNGUICIDA PARA BANANOS'
		},{
			nombre: 'FRUTALES'
		},{
			nombre: 'FRUTELF  I'
		},{
			nombre: 'GRAN OIL MINERAL'
		},{
			nombre: 'HERBOIL PLUS'
		},{
			nombre: 'HUAGRO OIL XR'
		},{
			nombre: 'I . ACEITE INVIERNO AGRICOLA'
		},{
			nombre: 'I . ACEITE VERANO AGRICOLA'
		},{
			nombre: 'I . CURAFRUTAL HV'
		},{
			nombre: 'I . CURAFRUTAL LV'
		},{
			nombre: 'I . NEW CH-RI'
		},{
			nombre: 'I . ULTRA HV'
		},{
			nombre: 'I . ULTRA LV'
		},{
			nombre: 'I. NEW CH-CFI'
		},{
			nombre: 'ISHIOIL'
		},{
			nombre: 'NOVAOIL'
		},{
			nombre: 'RAS OIL'
		},{
			nombre: 'SOLY-OIL'
		},{
			nombre: 'SUPER OIL RRI'
		},{
			nombre: 'TRUE FRUT PURE OIL'
		},{
			nombre: 'NIMBUS'
		},{
			nombre: 'ELF PURESPRAY FOLIAR '
		},{
			nombre: 'ACTIVE OIL I'
		},{
			nombre: 'DRC'
		},{
			nombre: 'DRI'
		},{
			nombre: 'DRV'
		},{
			nombre: 'ELF PURESPRAY '
		},{
			nombre: 'AGRITELF'
		},{
			nombre: 'FRUTELF V'
		},{
			nombre: 'DEGSER OIL'
		},{
			nombre: 'DABOIL'
		},{
			nombre: 'PROTEKTOR'
		},{
			nombre: 'SOLY OIL VEGETAL'
		},{
			nombre: 'AXION PLUS BVA'
		},{
			nombre: 'AXION PLUS OIL'
		},{
			nombre: 'ECO TREAT'
		},{
			nombre: 'LIDEROL  '
		},{
			nombre: 'NATUR L OLEO'
		},{
			nombre: 'NIEBLA MAS'
		},{
			nombre: 'OLEO PAMPA'
		},{
			nombre: 'PORTER'
		},{
			nombre: 'RIZO OIL'
		},{
			nombre: 'SOUTH OIL'
		},{
			nombre: 'VEGETOIL RED SURCOS'
		},{
			nombre: 'KANEMITE 15 SC'
		},{
			nombre: 'ACERO'
		},{
			nombre: 'ACETA 70 WP'
		},{
			nombre: 'ACETAMIPRID 20 DVA'
		},{
			nombre: 'ACETAMIPRID 20 FARM CHEMICALS'
		},{
			nombre: 'ACETO SHARDA 20 SP'
		},{
			nombre: 'AGROMIPRID 20 SP'
		},{
			nombre: 'ASSAIL'
		},{
			nombre: 'KESTREL 20 SP'
		},{
			nombre: 'MOSPILAN'
		},{
			nombre: 'MOSPILAN ST'
		},{
			nombre: 'NISON 70 WS'
		},{
			nombre: 'PASSPORT'
		},{
			nombre: 'PASSPORT 20'
		},{
			nombre: 'THANATOS'
		},{
			nombre: 'WIZARD'
		},{
			nombre: 'TRIUMPH'
		},{
			nombre: 'FLOUX'
		},{
			nombre: 'BIOLURE FRUIT FLY'
		},{
			nombre: 'ACENTO ACA 90'
		},{
			nombre: 'ACETO'
		},{
			nombre: 'ACETO 84'
		},{
			nombre: 'ACETO 90'
		},{
			nombre: 'ACETOCLOR 84 RAINBOW'
		},{
			nombre: 'ACETOCLOR 84 SURCOS'
		},{
			nombre: 'ACETOCLOR 90'
		},{
			nombre: 'ACETOCLOR 90 % SURCOS'
		},{
			nombre: 'ACETOCLOR 90 AGM'
		},{
			nombre: 'ACETOCLOR 90 AGROS'
		},{
			nombre: 'ACETOCLOR 90 DVA'
		},{
			nombre: 'ACETOCLOR 90 MELTHIS'
		},{
			nombre: 'ACETOCLOR 90 RAINBOW'
		},{
			nombre: 'ACETOCLOR 90 RED SURCOS'
		},{
			nombre: 'ACETOCLOR 90 RURALCO'
		},{
			nombre: 'ACETOCLOR 90 STOCKTON'
		},{
			nombre: 'ACETOCLOR 90 SURCOS'
		},{
			nombre: 'ACETOCLOR ASSA'
		},{
			nombre: 'ACETOCLOR FORMULAGRO'
		},{
			nombre: 'ACETOCLOR GENBRA'
		},{
			nombre: 'ACETOCLOR HELM'
		},{
			nombre: 'ACETOCLOR KEMSURE'
		},{
			nombre: 'ACETOCLOR LA TIJERETA'
		},{
			nombre: 'ACETOCLOR LYCSA'
		},{
			nombre: 'ACETOCLOR MZ AGROS'
		},{
			nombre: 'ACETOCLOR NUFARM'
		},{
			nombre: 'ACETOCLOR PLUS LA TIJERETA'
		},{
			nombre: 'ACETOCLOR ZAMBA'
		},{
			nombre: 'ACETOFINA'
		},{
			nombre: 'ACETOMAS ZAMBA'
		},{
			nombre: 'ACETOPRO 84'
		},{
			nombre: 'ACETOPRO 90'
		},{
			nombre: 'ACETOPRO 90 EC'
		},{
			nombre: 'ADAMA ESSENTIALS ACIERTO 90 EC'
		},{
			nombre: 'CLEAN CORN'
		},{
			nombre: 'CONTROL ACETO'
		},{
			nombre: 'FALCLOR'
		},{
			nombre: 'GUARDIAN'
		},{
			nombre: 'HARNESS'
		},{
			nombre: 'LEPUS'
		},{
			nombre: 'MAIZ PLUS'
		},{
			nombre: 'RASTRA'
		},{
			nombre: 'RASTRA M'
		},{
			nombre: 'SURPASS EC'
		},{
			nombre: 'TECNOCLOR'
		},{
			nombre: 'TECNOCLOR A'
		},{
			nombre: 'TECNOCLOR I'
		},{
			nombre: 'TROPHY'
		},{
			nombre: 'VICTORIAL'
		},{
			nombre: 'GUARDIAN X-TRA'
		},{
			nombre: 'FERTIFOX HORMONA'
		},{
			nombre: 'FRUFIX K'
		},{
			nombre: 'FERTIFOX ANTISHOCK '
		},{
			nombre: 'TOMATOSA'
		},{
			nombre: 'LEAF ALL'
		},{
			nombre: 'BIORRECTOR'
		},{
			nombre: 'BIOVERDE SIL'
		},{
			nombre: 'KUMMEL CORRECTOR DE PH'
		},{
			nombre: 'ACONDICIONADOR GR'
		},{
			nombre: 'ACTIVE PLUS '
		},{
			nombre: 'AGRICORRECTOR'
		},{
			nombre: 'AGRIMAX'
		},{
			nombre: 'AGROTEC SUPER PLUS'
		},{
			nombre: 'CAFER CORRECTOR PLUS ARN EBC'
		},{
			nombre: 'CATION'
		},{
			nombre: 'CORRE TEK'
		},{
			nombre: 'CORRECTOR DE PH FLV'
		},{
			nombre: 'CORRECTOR J.O.MAX LIQUIDO'
		},{
			nombre: 'CORRECTOR NIVELAGRO'
		},{
			nombre: 'CORRECTOR PARTNER LQ'
		},{
			nombre: 'CORRECTOR SINER'
		},{
			nombre: 'CORRECTOR X-NNON'
		},{
			nombre: 'FULL SHOCK'
		},{
			nombre: 'INDICATE FIVE'
		},{
			nombre: 'OPTIMEX H'
		},{
			nombre: 'PH'
		},{
			nombre: 'PH-FULL'
		},{
			nombre: 'REGULUX SL'
		},{
			nombre: 'TENSIOSHOCK'
		},{
			nombre: 'VISUAL'
		},{
			nombre: 'GIBERELAC'
		},{
			nombre: 'GIBERELAC 10% SL'
		},{
			nombre: 'GIBERELAC WP'
		},{
			nombre: 'GIBERELINA KA'
		},{
			nombre: 'GIBERELINA KA LIQUIDO'
		},{
			nombre: 'GIBGRO'
		},{
			nombre: 'PROGIBB'
		},{
			nombre: 'RADIX 35% TB'
		},{
			nombre: 'CORRECTOR H'
		},{
			nombre: 'LEXPLUS ARN EBC'
		},{
			nombre: 'EFECTOS CSC'
		},{
			nombre: 'J.O.MAX TOTAL TRIPLE'
		},{
			nombre: 'NIVEL TRIPLE'
		},{
			nombre: 'CONTROL UP DOBLE ACCION'
		},{
			nombre: 'J.O.MAX TOTAL DOBLE'
		},{
			nombre: 'BLAZER'
		},{
			nombre: 'PRODIGIO 60 SC'
		},{
			nombre: 'LAZO'
		},{
			nombre: 'LAZO MICROTECH'
		},{
			nombre: 'COADYUVANTE HUSSAR PLUS'
		},{
			nombre: 'COADYUVANTE NOMINEE'
		},{
			nombre: 'ACTIVATOR'
		},{
			nombre: 'BOND'
		},{
			nombre: 'TACTIC'
		},{
			nombre: 'ECO RIZOSPRAY'
		},{
			nombre: 'RIZOSPRAY SUPER'
		},{
			nombre: 'ADERGREEN'
		},{
			nombre: 'ALMUS'
		},{
			nombre: 'AWAKE DROP'
		},{
			nombre: 'BIO H'
		},{
			nombre: 'BIODOX'
		},{
			nombre: 'BIOQAR'
		},{
			nombre: 'BIOSPRAY'
		},{
			nombre: 'BOLT'
		},{
			nombre: 'BRIOS'
		},{
			nombre: 'BUFFER'
		},{
			nombre: 'CAMPO TOP'
		},{
			nombre: 'COADYUVANTE DOCHEM'
		},{
			nombre: 'COADYUVANTE INGERSOLL'
		},{
			nombre: 'COADYUVANTE OLEOSOL A'
		},{
			nombre: 'COADYUVANTE ROCIO'
		},{
			nombre: 'ECO PLUS SILICONADO'
		},{
			nombre: 'ECOAGRIMAX'
		},{
			nombre: 'ECOCIADHIERE SURCOS'
		},{
			nombre: 'ECOCROP'
		},{
			nombre: 'ECOHUMECTANTE SURCOS'
		},{
			nombre: 'ECOSPRAY AFA'
		},{
			nombre: 'FOAM'
		},{
			nombre: 'LIGIER PH BIO'
		},{
			nombre: 'LIGIER VERDE BIO'
		},{
			nombre: 'MACHETE'
		},{
			nombre: 'NEW FOL'
		},{
			nombre: 'OLEOSOL S'
		},{
			nombre: 'OPTYMUS X ECOLOGY EVOLUTION'
		},{
			nombre: 'PROWET'
		},{
			nombre: 'RADAR'
		},{
			nombre: 'SECUESTRANTE ROCIO'
		},{
			nombre: 'SUPERNOVA'
		},{
			nombre: 'TENSOR'
		},{
			nombre: 'TITUS'
		},{
			nombre: 'A 35 T BIO'
		},{
			nombre: 'ACTIVADOR BIO'
		},{
			nombre: 'ACTIVATE MAX'
		},{
			nombre: 'AERO'
		},{
			nombre: 'AGRO PLUS'
		},{
			nombre: 'ALLSPRAY'
		},{
			nombre: 'ANTIDERIVA BIO'
		},{
			nombre: 'ANTIDERIVA FULLDROP'
		},{
			nombre: 'BIOSTICK'
		},{
			nombre: 'BULLET ECO'
		},{
			nombre: 'CEBU ECO'
		},{
			nombre: 'COADYUVANTE ESPACIAL EFECTO CORRECTO FACYT'
		},{
			nombre: 'COADYUVANTE KUMMEL 3 ELEMENTOS BIO'
		},{
			nombre: 'COADYUVANTE KUMMEL BIO VENTO'
		},{
			nombre: 'CONTACT'
		},{
			nombre: 'DASER AGRO'
		},{
			nombre: 'DUO'
		},{
			nombre: 'ECO AEC'
		},{
			nombre: 'ECO COAD MELTHIS'
		},{
			nombre: 'ECO DAB'
		},{
			nombre: 'ECO DEGSER WET'
		},{
			nombre: 'ECO PARTNER LQ'
		},{
			nombre: 'ECOTENSIOSHOCK'
		},{
			nombre: 'ENEDOS ECO'
		},{
			nombre: 'FULL CONTROL BIO'
		},{
			nombre: 'FUTURELAB DISPERSANTE BIO'
		},{
			nombre: 'GAL-G'
		},{
			nombre: 'HARD'
		},{
			nombre: 'HARRIER BIO'
		},{
			nombre: 'HELPER'
		},{
			nombre: 'HG'
		},{
			nombre: 'IMPACTO MAX'
		},{
			nombre: 'KASTOR ULTRA'
		},{
			nombre: 'KUMMEL BIO'
		},{
			nombre: 'LIPOPLUS BIO 48'
		},{
			nombre: 'MAT MAS'
		},{
			nombre: 'MAXIPROD'
		},{
			nombre: 'MEKTAN CLASICO'
		},{
			nombre: 'N-35'
		},{
			nombre: 'N-35 PHLUS'
		},{
			nombre: 'NATURE'
		},{
			nombre: 'NIEBLA ECOPLUS'
		},{
			nombre: 'NIEBLA PLUS'
		},{
			nombre: 'PALA ACTIVE TOTAL'
		},{
			nombre: 'PAMPEANO'
		},{
			nombre: 'POINTER ECO'
		},{
			nombre: 'PRODINECO'
		},{
			nombre: 'RAC BIO'
		},{
			nombre: 'SIRCONE'
		},{
			nombre: 'SISTEMIC'
		},{
			nombre: 'SNIPE'
		},{
			nombre: 'SPEEDWET XION ACTIVEGEL'
		},{
			nombre: 'SPEEDWET XION SILICONGEL'
		},{
			nombre: 'SW 30'
		},{
			nombre: 'TENSIOMAX BIO'
		},{
			nombre: 'TORNADO'
		},{
			nombre: 'TSURF BIO'
		},{
			nombre: 'WEEDS'
		},{
			nombre: 'WIND'
		},{
			nombre: 'WR IV BIO'
		},{
			nombre: 'X TRIM G POWER'
		},{
			nombre: 'X TRIM LOW FLOW'
		},{
			nombre: 'X TRIM POWER'
		},{
			nombre: 'FAIR 85'
		},{
			nombre: 'ROYALTAC-M'
		},{
			nombre: 'CLATRATO BASF'
		},{
			nombre: 'PLURAFAC LF'
		},{
			nombre: 'NAFUSAKU 16'
		},{
			nombre: 'ACTION ALFA 15'
		},{
			nombre: 'ALFA 15'
		},{
			nombre: 'ALFA INSECT'
		},{
			nombre: 'ALFA PLUS'
		},{
			nombre: 'ALFA POWER'
		},{
			nombre: 'ALFACROP'
		},{
			nombre: 'ALFAMAX '
		},{
			nombre: 'ALFAMAX 25 MICRO'
		},{
			nombre: 'ALFAMETRINA 10 SUMAGRO'
		},{
			nombre: 'CAPTAIN'
		},{
			nombre: 'DOMINEX'
		},{
			nombre: 'FASTAC 10'
		},{
			nombre: 'FENDONA FORESTAL'
		},{
			nombre: 'HOR TAL EFE USO AGRICOLA'
		},{
			nombre: 'ISHIMETRIN ACTIVE'
		},{
			nombre: 'VORAZ'
		},{
			nombre: 'ZIPPER POWER'
		},{
			nombre: 'IMUNIT'
		},{
			nombre: 'ALFAMETRINA SUMAGRO'
		},{
			nombre: 'ATAQUE'
		},{
			nombre: 'BALA'
		},{
			nombre: 'MARCO'
		},{
			nombre: 'NOVADOX'
		},{
			nombre: 'ANTIDERIVA PLUS'
		},{
			nombre: 'CANAPLUS 50'
		},{
			nombre: 'COAD 35'
		},{
			nombre: 'COADYUVANTE eneDOS'
		},{
			nombre: 'DEGSER WET'
		},{
			nombre: 'DEGSER WET PLUS'
		},{
			nombre: 'FUTURELAB CORRECTOR'
		},{
			nombre: 'FUTURELAB DISPERSANTE'
		},{
			nombre: 'GOTON'
		},{
			nombre: 'HARWET RP'
		},{
			nombre: 'IMPACTO'
		},{
			nombre: 'KASTOR'
		},{
			nombre: 'KERON'
		},{
			nombre: 'LIGIER COADYUVANTE FULL'
		},{
			nombre: 'LIPO PLUS 50'
		},{
			nombre: 'MEKTAN'
		},{
			nombre: 'NITRASOIL 25'
		},{
			nombre: 'PHATER'
		},{
			nombre: 'QUICK WATER'
		},{
			nombre: 'RAC'
		},{
			nombre: 'ACTIVE PLUS'
		},{
			nombre: 'ADERMAX'
		},{
			nombre: 'COADYUVALTE LG'
		},{
			nombre: 'COADYUVANTE OLEOSOL CO'
		},{
			nombre: 'COADYUVANTE OLEOSOL GL 90'
		},{
			nombre: 'NASS KELL'
		},{
			nombre: 'NONIDOX G'
		},{
			nombre: 'WT 44 AD'
		},{
			nombre: 'COADYUVANTE ROCIO'
		},{
			nombre: 'ZAMPRO DM'
		},{
			nombre: 'ORVEGO ME'
		},{
			nombre: 'ADAMA ESSENTIALS AMETREX'
		},{
			nombre: 'ADAMA ESSENTIALS AMETREX 80 WG'
		},{
			nombre: 'AMETRINA 80 GR RURALCO'
		},{
			nombre: 'AMETRINA 80 RAINBOW'
		},{
			nombre: 'AMETRINA 80 SINER'
		},{
			nombre: 'AMETRINA AGROS'
		},{
			nombre: 'AMETRINA ATANOR 50'
		},{
			nombre: 'AMETRINA RED SURCOS'
		},{
			nombre: 'AMEX 80'
		},{
			nombre: 'GESAPAX 50 FW'
		},{
			nombre: 'GESAPAX 80 WG'
		},{
			nombre: 'ITALAME'
		},{
			nombre: 'ITALAME MAX'
		},{
			nombre: 'PRONOR 80 WG'
		},{
			nombre: 'ZAP 50'
		},{
			nombre: 'ZAP 80'
		},{
			nombre: 'KRISMAT'
		},{
			nombre: 'CARRIER'
		},{
			nombre: 'CELTA'
		},{
			nombre: 'DINGO'
		},{
			nombre: 'RETAIN'
		},{
			nombre: 'TOCON'
		},{
			nombre: 'TRONADOR'
		},{
			nombre: 'PASTAR'
		},{
			nombre: 'TRONADOR XTRA'
		},{
			nombre: 'AMITRAZ ESTRELLA'
		},{
			nombre: 'TIMSEN'
		},{
			nombre: 'RAYEN'
		},{
			nombre: 'SEEDVAULT'
		},{
			nombre: 'TANNER WOOD'
		},{
			nombre: 'TANNER WOOD CCA c'
		},{
			nombre: 'WOLMAN CCAc 60 '
		},{
			nombre: 'ASULAM 40 UPL'
		},{
			nombre: 'ADAMA ESSENTIALS ATRANEX '
		},{
			nombre: 'ADAMA ESSENTIALS ATRANEX 90 WG'
		},{
			nombre: 'ADAMA ESSENTIALS TEZCO'
		},{
			nombre: 'ARAZINA 50'
		},{
			nombre: 'ATRA 90 WG ASP'
		},{
			nombre: 'ATRA 90 WG KEMSURE'
		},{
			nombre: 'ATRA GLEX'
		},{
			nombre: 'ATRA WG'
		},{
			nombre: 'ATRACAMPO 50 FL'
		},{
			nombre: 'ATRACAMPO 90 WDG'
		},{
			nombre: 'ATRACTIVO 90 WG'
		},{
			nombre: 'ATRADRY'
		},{
			nombre: 'ATRAFINA'
		},{
			nombre: 'ATRAGEN 90'
		},{
			nombre: 'ATRAMARK 50 FL'
		},{
			nombre: 'ATRAMYL 90 WG'
		},{
			nombre: 'ATRAPLUS ZAMBA'
		},{
			nombre: 'ATRASEM 50'
		},{
			nombre: 'ATRATOP 90 WG'
		},{
			nombre: 'ATRAX 90'
		},{
			nombre: 'ATRAX 90 WG'
		},{
			nombre: 'ATRAZIN MAX'
		},{
			nombre: 'ATRAZIN MAX 50'
		},{
			nombre: 'ATRAZIN MAX 90'
		},{
			nombre: 'ATRAZINA 50 ACA'
		},{
			nombre: 'ATRAZINA 50 AGM'
		},{
			nombre: 'ATRAZINA 50 ARN EBC'
		},{
			nombre: 'ATRAZINA 50 BILAB'
		},{
			nombre: 'ATRAZINA 50 DANKEN MAX'
		},{
			nombre: 'ATRAZINA 50 DICOACTION'
		},{
			nombre: 'ATRAZINA 50 DVA'
		},{
			nombre: 'ATRAZINA 50 LA TIJERETA'
		},{
			nombre: 'ATRAZINA 50 MA'
		},{
			nombre: 'ATRAZINA 50 MELTHIS'
		},{
			nombre: 'ATRAZINA 50 NUFARM'
		},{
			nombre: 'ATRAZINA 50 RAINBOW'
		},{
			nombre: 'ATRAZINA 50 SUMAGRO'
		},{
			nombre: 'ATRAZINA 50 YERCO'
		},{
			nombre: 'ATRAZINA 90 AGM'
		},{
			nombre: 'ATRAZINA 90 ARN EBC'
		},{
			nombre: 'ATRAZINA 90 BIESTERFELD'
		},{
			nombre: 'ATRAZINA 90 DVA'
		},{
			nombre: 'ATRAZINA 90 FORMULAGRO'
		},{
			nombre: 'ATRAZINA 90 GREEN CROPS'
		},{
			nombre: 'ATRAZINA 90 KEMSURE'
		},{
			nombre: 'ATRAZINA 90 NUFARM'
		},{
			nombre: 'ATRAZINA 90 PHILAGRO'
		},{
			nombre: 'ATRAZINA 90 RAINBOW'
		},{
			nombre: 'ATRAZINA 90 SIGMA'
		},{
			nombre: 'ATRAZINA 90 SINO CHEMICALS'
		},{
			nombre: 'ATRAZINA 90 SUMAGRO'
		},{
			nombre: 'ATRAZINA 90 WDG'
		},{
			nombre: 'ATRAZINA 90 WG DAARGUS'
		},{
			nombre: 'ATRAZINA 90 WG DANKEN MAX'
		},{
			nombre: 'ATRAZINA 90 WG ICONA'
		},{
			nombre: 'ATRAZINA 90 WG INSUAGRO'
		},{
			nombre: 'ATRAZINA 90 WG KEMSURE'
		},{
			nombre: 'ATRAZINA 90 WG NUFARM'
		},{
			nombre: 'ATRAZINA AFA 50'
		},{
			nombre: 'ATRAZINA ASSA'
		},{
			nombre: 'ATRAZINA BH'
		},{
			nombre: 'ATRAZINA BIESTERFELD'
		},{
			nombre: 'ATRAZINA DAARGUS'
		},{
			nombre: 'ATRAZINA DOW AGROSCIENCES'
		},{
			nombre: 'ATRAZINA EQUIPAGRO'
		},{
			nombre: 'ATRAZINA EQUIPAGRO 90 T'
		},{
			nombre: 'ATRAZINA EQUIPAGRO 90 WG'
		},{
			nombre: 'ATRAZINA EQUIPAGRO 90 WG D'
		},{
			nombre: 'ATRAZINA EQUIPAGRO 90 WG R'
		},{
			nombre: 'ATRAZINA FORMULAGRO'
		},{
			nombre: 'ATRAZINA FQ'
		},{
			nombre: 'ATRAZINA GRAN EBC'
		},{
			nombre: 'ATRAZINA ICONA 90WG'
		},{
			nombre: 'ATRAZINA ICONA FW'
		},{
			nombre: 'ATRAZINA ICONA SC'
		},{
			nombre: 'ATRAZINA IYASI'
		},{
			nombre: 'ATRAZINA LA TIJERETA 90'
		},{
			nombre: 'ATRAZINA LQ 50'
		},{
			nombre: 'ATRAZINA LQ 90'
		},{
			nombre: 'ATRAZINA MARKETING AGRICOLA'
		},{
			nombre: 'ATRAZINA MAX SIGMA'
		},{
			nombre: 'ATRAZINA NOVA'
		},{
			nombre: 'ATRAZINA PRODINSA'
		},{
			nombre: 'ATRAZINA PRODINSA 90 WG'
		},{
			nombre: 'ATRAZINA PRONTO'
		},{
			nombre: 'ATRAZINA RURALCO 90 GR'
		},{
			nombre: 'ATRAZINA SAMSA'
		},{
			nombre: 'ATRAZINA SHARDA 50'
		},{
			nombre: 'ATRAZINA SINER'
		},{
			nombre: 'ATRAZINA TM 50'
		},{
			nombre: 'ATRAZINA ZAMBA'
		},{
			nombre: 'ATRED 50 '
		},{
			nombre: 'ATRED 90 WG'
		},{
			nombre: 'ATREX PLUS OCH'
		},{
			nombre: 'BLONTER'
		},{
			nombre: 'CONTROL ZEA'
		},{
			nombre: 'DAARGUS ATRAZINA'
		},{
			nombre: 'FERRERO ATRAZINA'
		},{
			nombre: 'FQ ATRAZINA 90'
		},{
			nombre: 'GENIUS'
		},{
			nombre: 'GESAPRIM 48'
		},{
			nombre: 'GESAPRIM 50 FW'
		},{
			nombre: 'GESAPRIM 50 FW A'
		},{
			nombre: 'GESAPRIM 90 WDG'
		},{
			nombre: 'GLORIUS 90'
		},{
			nombre: 'GOTEN'
		},{
			nombre: 'GREEN CHOICE ATRAZINA'
		},{
			nombre: 'H. ATRAZINA 50'
		},{
			nombre: 'MAGNAZINA'
		},{
			nombre: 'MAIZAL FG'
		},{
			nombre: 'MAIZAL SURCOS'
		},{
			nombre: 'MAIZAL WG SURCOS'
		},{
			nombre: 'MAZINA'
		},{
			nombre: 'MAZINA 50'
		},{
			nombre: 'MAZINA 90'
		},{
			nombre: 'MAZINA 90 AGROS'
		},{
			nombre: 'MAZORCA'
		},{
			nombre: 'PEGASUS'
		},{
			nombre: 'PHILAZINA 50 '
		},{
			nombre: 'PROTEZINA 90 WG'
		},{
			nombre: 'SEAL ULTRA MAX'
		},{
			nombre: 'SIPTRAN'
		},{
			nombre: 'TRAC 50 FL'
		},{
			nombre: 'VETRA'
		},{
			nombre: 'VOLERIS'
		},{
			nombre: 'PLEDGE'
		},{
			nombre: 'EXTRAZIN'
		},{
			nombre: 'NEEMAZAL 1.2 EC'
		},{
			nombre: 'CETRO'
		},{
			nombre: 'AFFIX'
		},{
			nombre: 'AIAKU'
		},{
			nombre: 'AMISTAR'
		},{
			nombre: 'AMISTAR R 50 WG'
		},{
			nombre: 'ARIES'
		},{
			nombre: 'AVATAR'
		},{
			nombre: 'AZAKA'
		},{
			nombre: 'AZOSHY 25 SC'
		},{
			nombre: 'AZOSHY 50'
		},{
			nombre: 'AZOXISTROBINA 25 AFA'
		},{
			nombre: 'AZOXISTROBINA 25 SC AG AGROFRANC'
		},{
			nombre: 'AZOXISTROBINA 50 RAINBOW'
		},{
			nombre: 'AZOXISTROBINA 80 RAINBOW'
		},{
			nombre: 'AZOXISTROBINA AFA 25'
		},{
			nombre: 'AZOXY 25'
		},{
			nombre: 'AZOXY 50 DVA'
		},{
			nombre: 'AZOXYSTROBIN 25  SC AFA'
		},{
			nombre: 'DYNASTY 10 FS SEMILLERO'
		},{
			nombre: 'FUGAZ'
		},{
			nombre: 'HELMSTAR '
		},{
			nombre: 'QUADRIS'
		},{
			nombre: 'QUADRIS 50 WG'
		},{
			nombre: 'SARIT 50 WG'
		},{
			nombre: 'SOXIS'
		},{
			nombre: 'SUMLES'
		},{
			nombre: 'TAZER'
		},{
			nombre: 'ACCECIDA'
		},{
			nombre: 'AMISTAR XTRA'
		},{
			nombre: 'AVATAR XTRA'
		},{
			nombre: 'AZOXISTROBINA + CYPROCONAZOLE STOCKTON'
		},{
			nombre: 'CINCHA ZAMBA'
		},{
			nombre: 'CLEANER AGROS'
		},{
			nombre: 'CONFIDENCE XTRA WG'
		},{
			nombre: 'HYPER'
		},{
			nombre: 'LUCIDA'
		},{
			nombre: 'PLANET XTRA'
		},{
			nombre: 'PRIMUS XTRA'
		},{
			nombre: 'QUADRIS XTRA'
		},{
			nombre: 'SPIKE'
		},{
			nombre: 'TOPGUARD RAINBOW'
		},{
			nombre: 'DUCTO'
		},{
			nombre: 'JANFRY XTRA'
		},{
			nombre: 'LINX'
		},{
			nombre: 'QUADRIS SOL'
		},{
			nombre: 'QUADRIS TOP'
		},{
			nombre: 'AZOXI-EPOXI NUFARM'
		},{
			nombre: 'PARADISE'
		},{
			nombre: 'TAZER XPERT'
		},{
			nombre: 'ROCKET'
		},{
			nombre: 'GRADUATE A+TM'
		},{
			nombre: 'CEDRUS'
		},{
			nombre: 'NANOK'
		},{
			nombre: 'DYNASTY CST SEMILLERO'
		},{
			nombre: 'QUILT'
		},{
			nombre: 'ACENTO'
		},{
			nombre: 'PHILGREEN'
		},{
			nombre: 'TACORA XTRA'
		},{
			nombre: 'TASCO'
		},{
			nombre: 'YKATU'
		},{
			nombre: 'GUAYRA'
		},{
			nombre: 'ADAMA ALMAGOR'
		},{
			nombre: 'ACOIDAL WG'
		},{
			nombre: 'AZUFRE 93 LAMDIA EXTRA (MALLA 325)'
		},{
			nombre: 'AZUFRE 93 LAMDIA EXTRA (MALLA 350)'
		},{
			nombre: 'AZUFRE MOJABLE POLO'
		},{
			nombre: 'AZUFRE POLO'
		},{
			nombre: 'AZUFRE POLVO MOJABLE MICRONIZADO JUAN MESSINA'
		},{
			nombre: 'KUMULUS DF'
		},{
			nombre: 'MICROTHIOL DISPERSS'
		},{
			nombre: 'POLMIC S AZUFRE MICRONIZADO'
		},{
			nombre: 'SULFUR WG'
		},{
			nombre: 'SULFUR WP AGROSPEC'
		},{
			nombre: 'TIOKOLL 80'
		},{
			nombre: 'TIOSOL'
		},{
			nombre: 'TIOVIT JET'
		},{
			nombre: 'VTL DUPERIAL'
		},{
			nombre: 'WPS DUPERIAL'
		},{
			nombre: 'COSAVET'
		},{
			nombre: 'SULFO-CUP PREMIUM'
		},{
			nombre: 'POLISULFURO DE CALCIO AGROMEN'
		},{
			nombre: 'POLISULFURO POLO'
		},{
			nombre: 'POLIGRHESA'
		},{
			nombre: 'AZOFOLIAR'
		},{
			nombre: 'AZOGRANERO'
		},{
			nombre: 'SERENADE ASO'
		},{
			nombre: 'SERENADE MAX'
		},{
			nombre: 'SERENADE WP'
		},{
			nombre: 'BAC-THUR'
		},{
			nombre: 'BAPROM L'
		},{
			nombre: 'BIOSPAM L'
		},{
			nombre: 'ECOTECH BIO'
		},{
			nombre: 'ECOTECH PRO'
		},{
			nombre: 'VENDAVAL Bt'
		},{
			nombre: 'GENATIVA'
		},{
			nombre: 'NITRUR FRUTAGEN '
		},{
			nombre: 'BACTHUR LIQUIDO'
		},{
			nombre: 'BIOCROP'
		},{
			nombre: 'BIOSPAM AZUL'
		},{
			nombre: 'DIPEL L PLUS'
		},{
			nombre: 'MALON'
		},{
			nombre: 'NITRUR B.T.K.L. ULTRAMAX'
		},{
			nombre: 'NITRUR BTKP ULTRAMAX'
		},{
			nombre: 'GALBEN M'
		},{
			nombre: 'GALBEN R'
		},{
			nombre: 'FANTIC M'
		},{
			nombre: 'DASEN'
		},{
			nombre: 'ONKOL'
		},{
			nombre: 'BENOMIL 50 DVA'
		},{
			nombre: 'BENOMIL RED SURCOS'
		},{
			nombre: 'BENOSEM 50 PM'
		},{
			nombre: 'IPERLATE'
		},{
			nombre: 'BASAGRAN 60'
		},{
			nombre: 'BENTA 48 SL'
		},{
			nombre: 'EMAMECTINA 5 SG'
		},{
			nombre: 'PROCLAIM 5 SG'
		},{
			nombre: 'PROCLAIM FORTE'
		},{
			nombre: 'CURYOM FIT'
		},{
			nombre: 'CURYOM FIT UV'
		},{
			nombre: 'ELATUS'
		},{
			nombre: 'BETA BAYTROID 5 EC'
		},{
			nombre: 'BETA BAYTROID ZAMBA'
		},{
			nombre: 'BULLDOCK'
		},{
			nombre: 'BULLDOCK ZAMBA'
		},{
			nombre: 'ALIADO ZAMBA'
		},{
			nombre: 'ASIMETRIN 5'
		},{
			nombre: 'ATRION'
		},{
			nombre: 'ACRAMITE 50 WP'
		},{
			nombre: 'FLORAMITE'
		},{
			nombre: '25 KODIAC'
		},{
			nombre: 'ADAMA ESSENTIALS SEIZER'
		},{
			nombre: 'ATHENA'
		},{
			nombre: 'BIFEN BH'
		},{
			nombre: 'BIFENTRIN 10 AFA'
		},{
			nombre: 'BIFENTRIN 10 BAC'
		},{
			nombre: 'BIFENTRIN 10 BIESTERFELD'
		},{
			nombre: 'BIFENTRIN 10 FORMULAGRO'
		},{
			nombre: 'BIFENTRIN 10 INSUAGRO'
		},{
			nombre: 'BIFENTRIN ARN EBC'
		},{
			nombre: 'BIFENTRIN BAC'
		},{
			nombre: 'BIFENTRIN FALCROP'
		},{
			nombre: 'BIFENTRIN FQ'
		},{
			nombre: 'BIFENTRIN LQ 10'
		},{
			nombre: 'BIFENTRIN MAX'
		},{
			nombre: 'BIFENTRIN NOVA'
		},{
			nombre: 'BIFENTRIN SHARDA 10 EC'
		},{
			nombre: 'BIFENTRIN SHARDA 25 EC'
		},{
			nombre: 'BISECT'
		},{
			nombre: 'BISTAR'
		},{
			nombre: 'BISTAR 10 EC'
		},{
			nombre: 'BRIGADA'
		},{
			nombre: 'CAPTURE 12 TS'
		},{
			nombre: 'CAPTURE 40'
		},{
			nombre: 'CHACAL'
		},{
			nombre: 'GREEN STAR'
		},{
			nombre: 'KIME'
		},{
			nombre: 'LASTING AGROS'
		},{
			nombre: 'LUCRO'
		},{
			nombre: 'MERCURY'
		},{
			nombre: 'PHILTRIN 25 EC'
		},{
			nombre: 'QUAKE'
		},{
			nombre: 'SPARTA'
		},{
			nombre: 'SPARTA MAX'
		},{
			nombre: 'STARION'
		},{
			nombre: 'TALSTAR'
		},{
			nombre: 'TENDAL'
		},{
			nombre: 'ZAMURAY 10'
		},{
			nombre: 'BRIGADA EXTRA'
		},{
			nombre: 'CHACAL EXTRA'
		},{
			nombre: 'STARION EXTRA'
		},{
			nombre: 'TALSTAR EXTRA'
		},{
			nombre: 'TALISMAN'
		},{
			nombre: 'KOSPI'
		},{
			nombre: 'MAGIC'
		},{
			nombre: 'BIFLEX PLUS'
		},{
			nombre: 'BIFLEX PLUS A'
		},{
			nombre: 'CAPTAIN PLUS '
		},{
			nombre: 'HERO'
		},{
			nombre: 'ECTRAN'
		},{
			nombre: 'NOMINEE 40 SC'
		},{
			nombre: 'NOMINEE GOLD'
		},{
			nombre: 'RICEBAC'
		},{
			nombre: 'HANARO'
		},{
			nombre: 'TANNER WOOD CCB 50'
		},{
			nombre: 'CANTUS'
		},{
			nombre: 'BELLIS'
		},{
			nombre: 'FINN'
		},{
			nombre: 'PANIC'
		},{
			nombre: 'ULTRA BLOCS'
		},{
			nombre: 'ULTRA PLUS'
		},{
			nombre: 'HYVAR X'
		},{
			nombre: 'ALTORAT'
		},{
			nombre: 'ASCARISCER  RATHER'
		},{
			nombre: 'ADAMA ESSENTIALS BROMOTRIL'
		},{
			nombre: 'BROMIXIL'
		},{
			nombre: 'MEXTROL'
		},{
			nombre: 'BROMETAN'
		},{
			nombre: 'BROMOCIEN'
		},{
			nombre: 'BROM-O-GAS'
		},{
			nombre: 'BROM-O-GAS 100'
		},{
			nombre: 'BROM-O-GAS C'
		},{
			nombre: 'BROMOPIC'
		},{
			nombre: 'APPLAUD'
		},{
			nombre: 'INSPIRE'
		},{
			nombre: 'LUTAR 36 EC'
		},{
			nombre: 'LUTAR 48 EC'
		},{
			nombre: 'TOBAGO'
		},{
			nombre: 'CALDO BORDELES FANAPROQUI'
		},{
			nombre: 'SCREEN'
		},{
			nombre: 'SCREEN DUO'
		},{
			nombre: 'SURROUND'
		},{
			nombre: 'ADAMA ESSENTIALS MERPAN'
		},{
			nombre: 'CAPITAN'
		},{
			nombre: 'CAPTAIN 80 WP'
		},{
			nombre: 'CAPTAN 80 RAINBOW'
		},{
			nombre: 'CAPTAN ANDO'
		},{
			nombre: 'CAPTAN ANDO FLO'
		},{
			nombre: 'CAPTAN ANDO FLO'
		},{
			nombre: 'CAPTAN SHARDA 80'
		},{
			nombre: 'CAPTAN WP ANDO'
		},{
			nombre: 'CAPTEX'
		},{
			nombre: 'CAPTION'
		},{
			nombre: 'ORTHOCIDE 80 WP'
		},{
			nombre: 'RITIRAM PLUS SEMILLERO AC CAPTAN'
		},{
			nombre: 'BB FORTE PHILAGRO'
		},{
			nombre: 'CARBARYL 85 STOCKTON'
		},{
			nombre: 'CARBARYL LINE'
		},{
			nombre: 'CARBARYL ROCA'
		},{
			nombre: 'CARVIN 5 G'
		},{
			nombre: 'CARVIN 85 S'
		},{
			nombre: 'CEBOL'
		},{
			nombre: 'CLARTEX BB'
		},{
			nombre: 'HUAGRO BB TOX PLUS'
		},{
			nombre: 'MATA BIBOS ACAY'
		},{
			nombre: 'SEVIN 85 S'
		},{
			nombre: 'SEVIN XLR PLUS'
		},{
			nombre: 'DOBLE ACAY'
		},{
			nombre: 'AGROZIM 50 SC'
		},{
			nombre: 'ARACARB 50'
		},{
			nombre: 'ARBO FUNGUI'
		},{
			nombre: 'BALEHON'
		},{
			nombre: 'BARRIER'
		},{
			nombre: 'BENCARB  L'
		},{
			nombre: 'CARB 50'
		},{
			nombre: 'CARB EFC'
		},{
			nombre: 'CARBASEM 50 FL'
		},{
			nombre: 'CARBEN WG'
		},{
			nombre: 'CARBENDA TEK 50'
		},{
			nombre: 'CARBENDAGLEX'
		},{
			nombre: 'CARBENDAZIM 50 ACA'
		},{
			nombre: 'CARBENDAZIM 50 AFA'
		},{
			nombre: 'CARBENDAZIM 50 AGM'
		},{
			nombre: 'CARBENDAZIM 50 CONTROLER'
		},{
			nombre: 'CARBENDAZIM 50 DEGSER'
		},{
			nombre: 'CARBENDAZIM 50 FORMULAGRO'
		},{
			nombre: 'CARBENDAZIM 50 HELM'
		},{
			nombre: 'CARBENDAZIM 50 KAYKUN'
		},{
			nombre: 'CARBENDAZIM 50 KEMSURE'
		},{
			nombre: 'CARBENDAZIM 50 MA'
		},{
			nombre: 'CARBENDAZIM 50 MELTHIS'
		},{
			nombre: 'CARBENDAZIM 50 MIRKA'
		},{
			nombre: 'CARBENDAZIM 50 NITRAP'
		},{
			nombre: 'CARBENDAZIM 50 NITRASOIL'
		},{
			nombre: 'CARBENDAZIM 50 NOVA'
		},{
			nombre: 'CARBENDAZIM 50 NUFARM'
		},{
			nombre: 'CARBENDAZIM 50 RAINBOW'
		},{
			nombre: 'CARBENDAZIM 50 SC AFA'
		},{
			nombre: 'CARBENDAZIM 50 SC STOCKTON'
		},{
			nombre: 'CARBENDAZIM 50 SINER'
		},{
			nombre: 'CARBENDAZIM 50% IYASI'
		},{
			nombre: 'CARBENDAZIM 50ARN EBC'
		},{
			nombre: 'CARBENDAZIM 80 AGM'
		},{
			nombre: 'CARBENDAZIM 80 DVA'
		},{
			nombre: 'CARBENDAZIM 80 RAINBOW'
		},{
			nombre: 'CARBENDAZIM ACA 50'
		},{
			nombre: 'CARBENDAZIM AFA 50'
		},{
			nombre: 'CARBENDAZIM BIESTERFELD'
		},{
			nombre: 'CARBENDAZIM INSUAGRO'
		},{
			nombre: 'CARBENDAZIM LINE'
		},{
			nombre: 'CARBENDAZIM LQ 50'
		},{
			nombre: 'CARBENDAZIM MARKETING AGRICOLA'
		},{
			nombre: 'CARBENDAZIM SP'
		},{
			nombre: 'CARBENDAZIM TERRIUM'
		},{
			nombre: 'CARBENDAZIMFAV'
		},{
			nombre: 'CARBENTEL 50'
		},{
			nombre: 'CARB-OK 50'
		},{
			nombre: 'CARSIS'
		},{
			nombre: 'CARSIS WG'
		},{
			nombre: 'CARZIM 50'
		},{
			nombre: 'CARZIM JNG'
		},{
			nombre: 'CHEMCARB'
		},{
			nombre: 'CKC CARBENDAZIM 50'
		},{
			nombre: 'CURA'
		},{
			nombre: 'DAARGUSCARBEN'
		},{
			nombre: 'ENAZIN'
		},{
			nombre: 'FACYT CARB'
		},{
			nombre: 'FACYT CARB 50'
		},{
			nombre: 'FLOW THIN '
		},{
			nombre: 'FLOW THIN 50'
		},{
			nombre: 'FOLICAR 50'
		},{
			nombre: 'FUNGI CROP 50'
		},{
			nombre: 'GALENO'
		},{
			nombre: 'HELMISTIN 50 SC'
		},{
			nombre: 'HYDRUS'
		},{
			nombre: 'INDUCARB 50'
		},{
			nombre: 'KARBEN'
		},{
			nombre: 'NITRAGIN PROTREAT FOLIAR'
		},{
			nombre: 'PHILCARB'
		},{
			nombre: 'PILARSTIN'
		},{
			nombre: 'PREVENTOR 50'
		},{
			nombre: 'PREVENTOR 80'
		},{
			nombre: 'PRODINCARB 50'
		},{
			nombre: 'RIZOCARB 50'
		},{
			nombre: 'RODAZIM SC'
		},{
			nombre: 'SENSOR'
		},{
			nombre: 'SHINCAR'
		},{
			nombre: 'SOWER MASTER'
		},{
			nombre: 'SPECTRUM  '
		},{
			nombre: 'SPECTRUM STK'
		},{
			nombre: 'STREAK 50 SC'
		},{
			nombre: 'TIUCARB'
		},{
			nombre: 'VENDAVAL CARBENDAZIM 50 F'
		},{
			nombre: 'POXICARB SC'
		},{
			nombre: 'TENOR'
		},{
			nombre: 'ESTURION'
		},{
			nombre: 'SOPRANO C'
		},{
			nombre: 'HYPER'
		},{
			nombre: 'JAZZ'
		},{
			nombre: 'KOBBROT CARBEN 10+10'
		},{
			nombre: 'ARBUS'
		},{
			nombre: 'BIAGRO TB MIX'
		},{
			nombre: 'FACYT FF DUO'
		},{
			nombre: 'FACYT TBZ DUO'
		},{
			nombre: 'RIENDA'
		},{
			nombre: 'TANTOR SC'
		},{
			nombre: 'TEBUCARB MIX SC'
		},{
			nombre: 'ZANO'
		},{
			nombre: 'ACOPIFUNG'
		},{
			nombre: 'ACTION SEED 10+10'
		},{
			nombre: 'AXION PLUS FUNGI'
		},{
			nombre: 'BETTER CURASEMILLAS'
		},{
			nombre: 'BIAGRO TC'
		},{
			nombre: 'BIONITROSEM CURASEMILLAS'
		},{
			nombre: 'CARBENDAZIM 18,75+THIRAM 18,75 IYASI'
		},{
			nombre: 'CEREALERO DOBLE'
		},{
			nombre: 'CKC FLOW SYSTEMIC'
		},{
			nombre: 'CONSARG'
		},{
			nombre: 'CONSARG OIL'
		},{
			nombre: 'CURASEMILLA DAB'
		},{
			nombre: 'CURASEMILLA PALAVERSICH SUPER FORTE'
		},{
			nombre: 'CURASEMILLA PHILAGRO'
		},{
			nombre: 'CURASEMILLAS AEC'
		},{
			nombre: 'CURASEMILLAS AFA'
		},{
			nombre: 'CURASEMILLAS AGH'
		},{
			nombre: 'CURASEMILLAS BAC'
		},{
			nombre: 'CURASEMILLAS BEP'
		},{
			nombre: 'CURASEMILLAS COMPAT NITRASOIL'
		},{
			nombre: 'CURASEMILLAS DOBLE'
		},{
			nombre: 'CURASEMILLAS ENEDOS'
		},{
			nombre: 'CURASEMILLAS GLEX  15+15'
		},{
			nombre: 'CURASEMILLAS INOCULAR'
		},{
			nombre: 'CURASEMILLAS JV AGRO'
		},{
			nombre: 'CURASEMILLAS LQ CONCENTRADO'
		},{
			nombre: 'CURASEMILLAS MARKETING AGRICOLA'
		},{
			nombre: 'CURASEMILLAS MIRKA'
		},{
			nombre: 'CURASEMILLAS NOVA'
		},{
			nombre: 'CURASEMILLAS NOVA PLUS'
		},{
			nombre: 'CURASEMILLAS PALAVERSICH SUPERPLUS'
		},{
			nombre: 'CURASEMILLAS SUMAGRO'
		},{
			nombre: 'CURAZIM'
		},{
			nombre: 'DAARGUS THI-CARB'
		},{
			nombre: 'DESAB TC CURASEMILLAS'
		},{
			nombre: 'DUO 25 FLOW NITRASOIL'
		},{
			nombre: 'EFECTHOR D PLUS'
		},{
			nombre: 'FACYT TC'
		},{
			nombre: 'FACYT TC 35+15'
		},{
			nombre: 'FERRERO CURASEMILLAS 10+10'
		},{
			nombre: 'FLOK 10-10 SURCOS'
		},{
			nombre: 'FLOK 15-35 SURCOS'
		},{
			nombre: 'FLOW SYSTEMIC FORMULAGRO'
		},{
			nombre: 'FLOW SYSTEMIC GRANERO'
		},{
			nombre: 'FLOW THIN AGROS'
		},{
			nombre: 'FLOW THIN II AGROS'
		},{
			nombre: 'FLOW THIN PLUS'
		},{
			nombre: 'FLOW THIN PLUS 10-10 '
		},{
			nombre: 'FPC TICAR'
		},{
			nombre: 'FULL DOBLE'
		},{
			nombre: 'FULLMIK'
		},{
			nombre: 'FULMIK 30+30'
		},{
			nombre: 'FUNSER 10+10'
		},{
			nombre: 'FUNSERV'
		},{
			nombre: 'GERMITAN'
		},{
			nombre: 'GERMITAN GRANERO'
		},{
			nombre: 'ISHISAN'
		},{
			nombre: 'KARMA'
		},{
			nombre: 'LADERO'
		},{
			nombre: 'LEROSEM'
		},{
			nombre: 'MASFERTIL CT 30-30'
		},{
			nombre: 'MASTER GREEN CURASEMILLAS'
		},{
			nombre: 'N-FIXER FULL'
		},{
			nombre: 'NITRAGIN PROTREAT'
		},{
			nombre: 'NITRAP TC CURASEMILLAS'
		},{
			nombre: 'NITRO FIX TC 15+35'
		},{
			nombre: 'NITROSEM CURASEMILLAS'
		},{
			nombre: 'NITRUR DOPPIO'
		},{
			nombre: 'NIVELAGRO 15+35'
		},{
			nombre: 'PERFORMANCE'
		},{
			nombre: 'PHILCARB MAX'
		},{
			nombre: 'PROTECTOR'
		},{
			nombre: 'QUIMECO TC 10+10'
		},{
			nombre: 'QUIMECO TIRAM 35 + CARBENDAZIM 15'
		},{
			nombre: 'RITIRAM CARB'
		},{
			nombre: 'RITIRAM CARB PLUS'
		},{
			nombre: 'RODEO'
		},{
			nombre: 'SAMAL T+C'
		},{
			nombre: 'SANADOR'
		},{
			nombre: 'SEMBRAL PLUS'
		},{
			nombre: 'SILERO'
		},{
			nombre: 'SPEEDGROW TC'
		},{
			nombre: 'TC 30'
		},{
			nombre: 'TERAPICO 30+30'
		},{
			nombre: 'TERAPICO 30+30 ACA'
		},{
			nombre: 'TIRAM PLUS'
		},{
			nombre: 'TIRCARB'
		},{
			nombre: 'TIRCARB ULTRA'
		},{
			nombre: 'TOP GRAIN'
		},{
			nombre: 'TUTOR 25+25'
		},{
			nombre: 'VENDAVAL THI-CARB'
		},{
			nombre: 'VENDAVAL THI-CARB fV'
		},{
			nombre: 'WAFFEN'
		},{
			nombre: 'ZADENFIT'
		},{
			nombre: 'BIAGRO TC SUSPENSION ACUOSA'
		},{
			nombre: 'SOWER PLUS'
		},{
			nombre: 'BRADYCARB TH'
		},{
			nombre: 'FURACARB 10 G'
		},{
			nombre: 'FURACARB 31 TS'
		},{
			nombre: 'FURACARB 35 TS'
		},{
			nombre: 'FURACARB 48 F'
		},{
			nombre: 'FURADAN 10 G'
		},{
			nombre: 'FURADAN 35 TS'
		},{
			nombre: 'FURADAN 48 F'
		},{
			nombre: 'FURADAN 5 G'
		},{
			nombre: 'FURAFAM 48 F'
		},{
			nombre: 'FURAZIN 31 TS'
		},{
			nombre: 'KAYFURAN 48 F'
		},{
			nombre: 'ELTRA'
		},{
			nombre: 'ELTRA 35'
		},{
			nombre: 'ELTRA STAR'
		},{
			nombre: 'FENIX'
		},{
			nombre: 'MARSHAL'
		},{
			nombre: 'MARSHAL STAR'
		},{
			nombre: 'MARSHALL 20 SC'
		},{
			nombre: 'POSSE 20 SC'
		},{
			nombre: 'POSSE 25 EC'
		},{
			nombre: 'SHARDA CARBOSULFAN 20 SC'
		},{
			nombre: 'INVICTUS'
		},{
			nombre: 'DUCLAR'
		},{
			nombre: 'OPTIONS ADVANCE'
		},{
			nombre: 'OPTIONS ADVANCE FS'
		},{
			nombre: 'CAP 20-20'
		},{
			nombre: 'VITAVAX FLO SEMILLERO'
		},{
			nombre: 'VITAVAX FLO TS'
		},{
			nombre: 'AFFINITY'
		},{
			nombre: 'AURORA 40 CE'
		},{
			nombre: 'SHARK 40 EC'
		},{
			nombre: 'PADAN 50 SP'
		},{
			nombre: 'PADAN 95 SP'
		},{
			nombre: 'DORMEX'
		},{
			nombre: 'ACTIVE AQ'
		},{
			nombre: 'ARACIPER 25'
		},{
			nombre: 'ARRIVO'
		},{
			nombre: 'CAMPOMETRINA 25'
		},{
			nombre: 'CAMPOMETRINA 25'
		},{
			nombre: 'CIPERFAV 25'
		},{
			nombre: 'CIPERHOUSE M BASE ACUOSA'
		},{
			nombre: 'CIPERMAX'
		},{
			nombre: 'CIPERMENTRINA SP'
		},{
			nombre: 'CIPERMETRINA 15% CE'
		},{
			nombre: 'CIPERMETRINA 25 ARN EBC'
		},{
			nombre: 'CIPERMETRINA 25 FORMULAGRO'
		},{
			nombre: 'CIPERMETRINA 25 MA'
		},{
			nombre: 'CIPERMETRINA 25 MANCHESTER'
		},{
			nombre: 'CIPERMETRINA 25 MELTHIS'
		},{
			nombre: 'CIPERMETRINA 25 NITRAP'
		},{
			nombre: 'CIPERMETRINA 25 NITRASOIL'
		},{
			nombre: 'CIPERMETRINA 25 NUFARM'
		},{
			nombre: 'CIPERMETRINA ACA'
		},{
			nombre: 'CIPERMETRINA ARPON'
		},{
			nombre: 'CIPERMETRINA ATANOR 25'
		},{
			nombre: 'CIPERMETRINA CONTROLER'
		},{
			nombre: 'CIPERMETRINA FERRERO'
		},{
			nombre: 'CIPERMETRINA JNG '
		},{
			nombre: 'CIPERMETRINA LQ 25'
		},{
			nombre: 'CIPERMETRINA MARKETING AGRICOLA'
		},{
			nombre: 'CIPERMETRINA NOVA'
		},{
			nombre: 'CIPERMETRINA NUFARM'
		},{
			nombre: 'CIPERMETRINA PRODINSA'
		},{
			nombre: 'CIPERMETRINA SHARDA 25'
		},{
			nombre: 'CIPERMETRINA SINER'
		},{
			nombre: 'CIPERMETRINA TM 25'
		},{
			nombre: 'CIPERMETRINA ZAMBA'
		},{
			nombre: 'CIPERMIN'
		},{
			nombre: 'CIPERQUIM 25'
		},{
			nombre: 'CIPERSEM 25'
		},{
			nombre: 'CIPERTROID'
		},{
			nombre: 'CYPER 25'
		},{
			nombre: 'CYPER 25 CH'
		},{
			nombre: 'DAARGUSCIPER'
		},{
			nombre: 'DELENTE CIPERMETRINA'
		},{
			nombre: 'ESPACIAL 0,5 P'
		},{
			nombre: 'FORESTA PRESERVADOR'
		},{
			nombre: 'FS. CIPERMETRINA 25'
		},{
			nombre: 'GALGOTRIN'
		},{
			nombre: 'GALGOTRIN AQ'
		},{
			nombre: 'GALGOTRIN PLUS'
		},{
			nombre: 'GALGOTRIN TOP'
		},{
			nombre: 'GALTRIN 10'
		},{
			nombre: 'GALTRIN 20'
		},{
			nombre: 'GLEXTRIN 25'
		},{
			nombre: 'HALO CIDE LPU'
		},{
			nombre: 'HALO CIDE NATURAL'
		},{
			nombre: 'HALO CIDE NATURAL CONC.'
		},{
			nombre: 'HALO CIDE PLUS'
		},{
			nombre: 'HUAGRO CIPER'
		},{
			nombre: 'ISHIMETRIN'
		},{
			nombre: 'KALIBRE 25'
		},{
			nombre: 'KALIBRE 25 MICROACTIVE'
		},{
			nombre: 'KALIBRE 25 MICROACTIVE'
		},{
			nombre: 'KOVERMAD'
		},{
			nombre: 'KRUEL '
		},{
			nombre: 'LEPID 25'
		},{
			nombre: 'MADERIN'
		},{
			nombre: 'MICROACTIVE 25'
		},{
			nombre: 'MTU'
		},{
			nombre: 'NEWOOD LISTO PARA USAR'
		},{
			nombre: 'NURELLE 25 E'
		},{
			nombre: 'OTHAR 25'
		},{
			nombre: 'OTHAR PLUS'
		},{
			nombre: 'PENTA INSECTICIDA'
		},{
			nombre: 'PUCARA 25'
		},{
			nombre: 'PUCARA II'
		},{
			nombre: 'SHOCK'
		},{
			nombre: 'SUPERFINA'
		},{
			nombre: 'TAURO 25'
		},{
			nombre: 'TOTEM'
		},{
			nombre: 'VENDAVAL CIPERMETRINA 25'
		},{
			nombre: 'XIPER 25'
		},{
			nombre: 'SHOOTER PLUS'
		},{
			nombre: 'VETAX CONCENTRADO'
		},{
			nombre: 'VETAX LISTO PARA USAR'
		},{
			nombre: 'CIPERMEX'
		},{
			nombre: 'MADECOR PROTECT 3 EN 1'
		},{
			nombre: 'PENTA EXTERIOR CONCENTRADO'
		},{
			nombre: 'PENTA EXTERIOR LISTO PARA USAR'
		},{
			nombre: 'PENTA XXI LISTO PARA USAR'
		},{
			nombre: 'TERSUAVE CONCENTRADO'
		},{
			nombre: 'TERSUAVE LISTO PARA USAR'
		},{
			nombre: 'VENIER EXTERIOR LISTO PARA USAR'
		},{
			nombre: 'ADAMA ARROW LPU'
		},{
			nombre: 'ADAMA ESSENTIALS ARROW'
		},{
			nombre: 'APOFIS'
		},{
			nombre: 'APOFIS SURCOS'
		},{
			nombre: 'CLEANDIM'
		},{
			nombre: 'CLETODIM ATANOR'
		},{
			nombre: 'CLETODIM MAX'
		},{
			nombre: 'CLETODIM NOVA'
		},{
			nombre: 'CLETOGRASS'
		},{
			nombre: 'COBOSDIM'
		},{
			nombre: 'EUDOR'
		},{
			nombre: 'FORTALEZA ZAMBA'
		},{
			nombre: 'HAVOC'
		},{
			nombre: 'KOSAKO'
		},{
			nombre: 'KOSAKO SUPER'
		},{
			nombre: 'KOSAKO SUPER EC'
		},{
			nombre: 'LATIUM '
		},{
			nombre: 'LORD'
		},{
			nombre: 'PITCHER  '
		},{
			nombre: 'PITCHER M'
		},{
			nombre: 'PRACTICE'
		},{
			nombre: 'SELECT'
		},{
			nombre: 'SELECT TM'
		},{
			nombre: 'SUSTENTOR'
		},{
			nombre: 'ZYNION'
		},{
			nombre: 'GIZMO'
		},{
			nombre: 'PROA'
		},{
			nombre: 'TOPIK 24 EC'
		},{
			nombre: 'ADAMA ESSENTIALS ACARISTOP 50 SC'
		},{
			nombre: 'CLOMAZOLE 48 BIESTERFELD'
		},{
			nombre: 'COMMAND'
		},{
			nombre: 'COMMAND 36 CS'
		},{
			nombre: 'COMMAND 48 EC'
		},{
			nombre: 'GAMIT'
		},{
			nombre: 'GAMIT 36 SC'
		},{
			nombre: 'GAMIT STAR'
		},{
			nombre: 'SIRTAKI'
		},{
			nombre: 'SIRTAKI 50'
		},{
			nombre: 'DISCOVER'
		},{
			nombre: 'LOGO'
		},{
			nombre: 'LONTREL'
		},{
			nombre: 'PACTO'
		},{
			nombre: 'ALTACOR'
		},{
			nombre: 'AMICOR'
		},{
			nombre: 'CORAGEN'
		},{
			nombre: 'LUMIVIA RA'
		},{
			nombre: 'LUMIVIA TM'
		},{
			nombre: 'VOLIAM TARGO'
		},{
			nombre: 'VOLIAM FLEXI'
		},{
			nombre: 'SUNFIRE 24 SC'
		},{
			nombre: 'ISHIPRON'
		},{
			nombre: 'CLORIMURON 25 AGM'
		},{
			nombre: 'CLORIMURON ASSA'
		},{
			nombre: 'ADMIRAL 25 WP'
		},{
			nombre: 'ADVANCE'
		},{
			nombre: 'ARACLORIMURON 25'
		},{
			nombre: 'BACKUP 25'
		},{
			nombre: 'BACKUP WG'
		},{
			nombre: 'BEAT'
		},{
			nombre: 'CLASSIC'
		},{
			nombre: 'CLAXXO 25'
		},{
			nombre: 'CLAXXO AGROS'
		},{
			nombre: 'CLIMUR'
		},{
			nombre: 'CLOETIL'
		},{
			nombre: 'CLORIMUR'
		},{
			nombre: 'CLORIMURON 25 ASES'
		},{
			nombre: 'CLORIMURON 25 DVA'
		},{
			nombre: 'CLORIMURON 25 FQ'
		},{
			nombre: 'CLORIMURON 25 WP STOCKTON'
		},{
			nombre: 'CLORIMURON 75 HUAGRO'
		},{
			nombre: 'CLORIMURON BIESTERFELD'
		},{
			nombre: 'CLORIMURON LINE'
		},{
			nombre: 'CLORIMURON MAX'
		},{
			nombre: 'CLORIMURON MAX WDG'
		},{
			nombre: 'CLORIMURON RED SURCOS'
		},{
			nombre: 'CLORIMURON SHARDA'
		},{
			nombre: 'CLORIMURON SIGMA'
		},{
			nombre: 'CLORIMURON SUMAGRO'
		},{
			nombre: 'GLICINCAS 25 %'
		},{
			nombre: 'GLICINPRO 25'
		},{
			nombre: 'HURON'
		},{
			nombre: 'METEO WDG'
		},{
			nombre: 'MURO'
		},{
			nombre: 'MURO WDG'
		},{
			nombre: 'MUROC 25 WDG'
		},{
			nombre: 'QUANTUM'
		},{
			nombre: 'SHERIDAN'
		},{
			nombre: 'SOYAMART'
		},{
			nombre: 'SOYAYUDA'
		},{
			nombre: 'SPIN '
		},{
			nombre: 'SPIN 25'
		},{
			nombre: 'SPONSOR'
		},{
			nombre: 'TILLAGE'
		},{
			nombre: 'TITANIUM'
		},{
			nombre: 'TITANIUM WDG'
		},{
			nombre: 'VRILEC'
		},{
			nombre: 'YUNNUX'
		},{
			nombre: 'BELCOCEL'
		},{
			nombre: 'CYCOCEL 75'
		},{
			nombre: 'FITOCEL 75'
		},{
			nombre: 'ADAMA ESSENTIALS ODEON 72 SC'
		},{
			nombre: 'AVSA TALONIL'
		},{
			nombre: 'CLARO'
		},{
			nombre: 'CLOROTALONIL 50 F BROMETAN'
		},{
			nombre: 'CLOROTALONIL 50 RAINBOW'
		},{
			nombre: 'CLOROTALONIL 72 RAINBOW'
		},{
			nombre: 'CLOROTALONIL 90 RAINBOW'
		},{
			nombre: 'CLOROTALONIL ACAY'
		},{
			nombre: 'CLOROTALONIL ARN EBC'
		},{
			nombre: 'CLOROTALONIL BIESTERFELD'
		},{
			nombre: 'CLOROTALONIL FARM CHEMICALS'
		},{
			nombre: 'CLOROTALONIL SURCOS'
		},{
			nombre: 'DACONIL 72 F'
		},{
			nombre: 'ECHO 72'
		},{
			nombre: 'ECHO 72 MAX'
		},{
			nombre: 'FUNDA'
		},{
			nombre: 'ISATALONIL 50 FW'
		},{
			nombre: 'ISATALONIL MAX'
		},{
			nombre: 'ODEON 82,5 WG'
		},{
			nombre: 'PILARICH'
		},{
			nombre: 'PUGIL'
		},{
			nombre: 'ROTHALONIL 72 SC'
		},{
			nombre: 'TALONE'
		},{
			nombre: 'TALONE P'
		},{
			nombre: 'TALONIL 50 '
		},{
			nombre: 'TALONIL 72'
		},{
			nombre: 'TALOSEM 50'
		},{
			nombre: 'ZETA SC'
		},{
			nombre: 'ADAMA SPHINX SUPRA'
		},{
			nombre: 'ACTION PEST'
		},{
			nombre: 'ADAMA ESSENTIALS PYRINEX'
		},{
			nombre: 'AGROMEN CL'
		},{
			nombre: 'ARAPIRIFOS 48 '
		},{
			nombre: 'AT'
		},{
			nombre: 'BORAZ 48'
		},{
			nombre: 'CAMPORIFOS 48'
		},{
			nombre: 'CLOR P'
		},{
			nombre: 'CLORFOX'
		},{
			nombre: 'CLORP F'
		},{
			nombre: 'CLORPI 48 SURCOS'
		},{
			nombre: 'CLORPICRES'
		},{
			nombre: 'CLORPIMAX'
		},{
			nombre: 'CLORPIRFOS CAUQUE '
		},{
			nombre: 'CLORPIRI 48 HELM'
		},{
			nombre: 'CLORPIRIFAV 48'
		},{
			nombre: 'CLORPIRIFOS 15 AGM'
		},{
			nombre: 'CLORPIRIFOS 48 AFA'
		},{
			nombre: 'CLORPIRIFOS 48 AGM'
		},{
			nombre: 'CLORPIRIFOS 48 ARN EBC'
		},{
			nombre: 'CLORPIRIFOS 48 CH'
		},{
			nombre: 'CLORPIRIFOS 48 MA'
		},{
			nombre: 'CLORPIRIFOS 48 MELTHIS'
		},{
			nombre: 'CLORPIRIFOS 48 NITRAP'
		},{
			nombre: 'CLORPIRIFOS 48 NITRASOIL'
		},{
			nombre: 'CLORPIRIFOS 48 PAMPEANO'
		},{
			nombre: 'CLORPIRIFOS 48 QZ'
		},{
			nombre: 'CLORPIRIFOS 48 RAINBOW'
		},{
			nombre: 'CLORPIRIFOS 48 RURALCO'
		},{
			nombre: 'CLORPIRIFOS 48 YERCO'
		},{
			nombre: 'CLORPIRIFOS AFA'
		},{
			nombre: 'CLORPIRIFOS AGM'
		},{
			nombre: 'CLORPIRIFOS ASSA'
		},{
			nombre: 'CLORPIRIFOS ATANOR 48'
		},{
			nombre: 'CLORPIRIFOS BIESTERFELD'
		},{
			nombre: 'CLORPIRIFOS ESTRELLA'
		},{
			nombre: 'CLORPIRIFOS F 48'
		},{
			nombre: 'CLORPIRIFOS FORMULAGRO 48'
		},{
			nombre: 'CLORPIRIFOS IYASI'
		},{
			nombre: 'CLORPIRIFOS IYASI 25 %'
		},{
			nombre: 'CLORPIRIFOS JNG'
		},{
			nombre: 'CLORPIRIFOS LINE'
		},{
			nombre: 'CLORPIRIFOS LQ 48 '
		},{
			nombre: 'CLORPIRIFOS MARKETING AGRICOLA'
		},{
			nombre: 'CLORPIRIFOS NOVA'
		},{
			nombre: 'CLORPIRIFOS NUFARM'
		},{
			nombre: 'CLORPIRIFOS PRODINSA'
		},{
			nombre: 'CLORPIRIFOS RURALCO'
		},{
			nombre: 'CLORPIRIFOS SHARDA 48'
		},{
			nombre: 'CLORPIRIFOS SIGMA'
		},{
			nombre: 'CLORPIRIFOS SINER'
		},{
			nombre: 'CLORPIRIFOS SP'
		},{
			nombre: 'CLORPIRIFOS SUMAGRO '
		},{
			nombre: 'CLORPIRIFOS SUMAGRO EC'
		},{
			nombre: 'CLORPIRIFOS TERRIUM'
		},{
			nombre: 'CLORPIRIFOS ZAMBA'
		},{
			nombre: 'CLORPIRISEM 48'
		},{
			nombre: 'CLORSEED'
		},{
			nombre: 'CONDOR'
		},{
			nombre: 'CONDOR 48'
		},{
			nombre: 'CONTROL CLORPI'
		},{
			nombre: 'CROPMAX CLORPIRIFOS 48'
		},{
			nombre: 'DAARGUS PIRIFOS 48'
		},{
			nombre: 'DASTAL RY'
		},{
			nombre: 'DIRETH'
		},{
			nombre: 'DUAL C'
		},{
			nombre: 'EXTERMIFOS'
		},{
			nombre: 'FACYT PIRIFOS'
		},{
			nombre: 'FINACLOR'
		},{
			nombre: 'FIRE CLORPIRIFOS KEMSURE'
		},{
			nombre: 'FORMIDOBLE'
		},{
			nombre: 'FULLBACK'
		},{
			nombre: 'FULLBACK PM'
		},{
			nombre: 'FUXOL D'
		},{
			nombre: 'GENSBAN'
		},{
			nombre: 'HORMI JNG'
		},{
			nombre: 'HORMIFAV 2,5 P'
		},{
			nombre: 'HUAGRO CLORPI 48'
		},{
			nombre: 'HUAGRO HORMIX'
		},{
			nombre: 'HUAGRO HORMIX LIQUIDO A'
		},{
			nombre: 'HUAGRO MIREX C'
		},{
			nombre: 'ISHICLORFOS'
		},{
			nombre: 'ISHICLORFOS 48'
		},{
			nombre: 'LORSBAN 15 G'
		},{
			nombre: 'LORSBAN 2,5 P'
		},{
			nombre: 'LORSBAN 48 E'
		},{
			nombre: 'LORSBAN 75 WG'
		},{
			nombre: 'MYRMEC'
		},{
			nombre: 'NANOFOS'
		},{
			nombre: 'NAROL'
		},{
			nombre: 'ORION'
		},{
			nombre: 'PHILPIRIFOS'
		},{
			nombre: 'PILARDOR'
		},{
			nombre: 'PIRFOS 48'
		},{
			nombre: 'PIRIFOS PLUS OCH'
		},{
			nombre: 'PITBUL'
		},{
			nombre: 'PITBUL 48'
		},{
			nombre: 'POINTER 48%'
		},{
			nombre: 'PRESERNOL'
		},{
			nombre: 'PRESERNOL NATURAL'
		},{
			nombre: 'RELDAN 48 E'
		},{
			nombre: 'ROBUST'
		},{
			nombre: 'SAGITTA'
		},{
			nombre: 'SHOOTER'
		},{
			nombre: 'SHOOTER G'
		},{
			nombre: 'SINPLAG 48'
		},{
			nombre: 'STARFOS '
		},{
			nombre: 'SUPER MAB'
		},{
			nombre: 'TERFOS '
		},{
			nombre: 'TERMINATOR'
		},{
			nombre: 'TERMINATOR'
		},{
			nombre: 'TERMINATOR AGROS'
		},{
			nombre: 'TERMINATOR II'
		},{
			nombre: 'TERMINATOR MICROACTIVE'
		},{
			nombre: 'TRICEL'
		},{
			nombre: 'VENDAVAL CLORPIRIFOS 48 E'
		},{
			nombre: 'YARARA  C'
		},{
			nombre: 'ADAMA PYRINEX 25 ME'
		},{
			nombre: 'PODIUM'
		},{
			nombre: 'ADAMA PIRINEX SUPER'
		},{
			nombre: 'DIRETH WT'
		},{
			nombre: 'GLACOXAN E'
		},{
			nombre: 'HOR-TAL'
		},{
			nombre: 'LORSBAN PLUS'
		},{
			nombre: 'DIRETH CONCENTRADO PLUS'
		},{
			nombre: 'DIRETH NORMAL PLUS'
		},{
			nombre: 'RELDAN PLUS'
		},{
			nombre: 'BLINK'
		},{
			nombre: 'GRO-STOP BASIS'
		},{
			nombre: 'GRO-STOP FOG'
		},{
			nombre: 'M.S.S. WAREFOG'
		},{
			nombre: 'FINESSE'
		},{
			nombre: 'FINESSE WG'
		},{
			nombre: 'MEPIQUAT 50 SL'
		},{
			nombre: 'PONCHO 60 FS'
		},{
			nombre: 'PONCHO 60 FS UNC SEMILLERO'
		},{
			nombre: 'PONCHO DUO'
		},{
			nombre: 'PONCHO SOL'
		},{
			nombre: 'PONCHO SOL UNC SEMILLERO'
		},{
			nombre: 'CHUCARO'
		},{
			nombre: 'AGH HUMECTANTE ADHERENTE ANTIDERIVA ANTIEVAPORANTE'
		},{
			nombre: 'ALLWET-HUMECTANTE-ADHERENTE-ANTIDERIVA-ANTIEVAPORANTE'
		},{
			nombre: 'TS ACTIVE-HUMECTANTE-ADHERENTE-ANTIDERIVA-ANTIEVAPORANTE'
		},{
			nombre: 'LOCKER DE PULVERIZACION ANTIDERIVA-ANTIEVAPORANTE-ADHERENTE'
		},{
			nombre: 'AGH PLUS'
		},{
			nombre: 'ALLWET PLUS'
		},{
			nombre: 'TS-LOCKER'
		},{
			nombre: 'DESIKOTE MAX'
		},{
			nombre: 'CLINCHER EC'
		},{
			nombre: 'BENEVIA'
		},{
			nombre: 'EXIREL'
		},{
			nombre: 'FORTENZA SEMILLERO'
		},{
			nombre: 'VERIMARK'
		},{
			nombre: 'RANMAN'
		},{
			nombre: 'FINISH'
		},{
			nombre: 'FINISH SC'
		},{
			nombre: 'INSECTICIDA PETRILAC'
		},{
			nombre: 'POLILAK INSECTICIDA'
		},{
			nombre: 'CLARON'
		},{
			nombre: 'RICEFOP'
		},{
			nombre: 'REBELEX'
		},{
			nombre: 'ACARSTIN'
		},{
			nombre: 'ACARSTIN 60 F'
		},{
			nombre: 'PLIDION'
		},{
			nombre: 'SIPCATIN'
		},{
			nombre: 'TRIRANCHEMIA 60 FLOW'
		},{
			nombre: 'MICEXANIL'
		},{
			nombre: 'ALTO 10 SL'
		},{
			nombre: 'CIRCUS'
		},{
			nombre: 'AMISTAR XTRA GOLD'
		},{
			nombre: 'AZOXY PRO'
		},{
			nombre: 'CYPRESS'
		},{
			nombre: 'SWITCH 62,5 WG'
		},{
			nombre: 'ACOPIVAP 100'
		},{
			nombre: 'BAFOX'
		},{
			nombre: 'CROPMAX DDVP 100'
		},{
			nombre: 'D.D.V.P. 100 ACA'
		},{
			nombre: 'DARDO'
		},{
			nombre: 'DDVP 100 CH'
		},{
			nombre: 'DDVP 100 QZ'
		},{
			nombre: 'DDVP DELENTE'
		},{
			nombre: 'DDVP SEM 100'
		},{
			nombre: 'DEDEPOST 100 EC'
		},{
			nombre: 'DEPEGAL 100'
		},{
			nombre: 'DEVAP 100'
		},{
			nombre: 'DEVETION'
		},{
			nombre: 'DIPI DISPENSADOR DE INSEC. DE PLATO IND.'
		},{
			nombre: 'DISPENSER DE INSECTICIDA TNT'
		},{
			nombre: 'DOOM'
		},{
			nombre: 'FERRERO DDVP'
		},{
			nombre: 'FUVOS'
		},{
			nombre: 'MINSET'
		},{
			nombre: 'NEOVAP'
		},{
			nombre: 'ACOPIVAP'
		},{
			nombre: 'ASCARISCER TRUCK'
		},{
			nombre: 'DEDEPOST PLUS'
		},{
			nombre: 'DELTAGRAN '
		},{
			nombre: 'DEVAP PLUS'
		},{
			nombre: 'DEVETION PLUS'
		},{
			nombre: 'DEVETRINA'
		},{
			nombre: 'FUVOS PLUS'
		},{
			nombre: 'BAFOX EXTRA'
		},{
			nombre: 'DD-POST PLUS'
		},{
			nombre: 'DEPEGAL EXTRA'
		},{
			nombre: 'SEMDAPON'
		},{
			nombre: 'BASAMID G'
		},{
			nombre: 'ACOPIVAP POWER'
		},{
			nombre: 'ADAMA ESSENTIALS KESSET '
		},{
			nombre: 'ASCARISCER EXTRA TACKLE POLVO GORGOJICIDA'
		},{
			nombre: 'ATTACK'
		},{
			nombre: 'BAMBA 2,5'
		},{
			nombre: 'BITAM FLOW 5 SC'
		},{
			nombre: 'DECIS 10 EC'
		},{
			nombre: 'DECIS FLOW 20 SC'
		},{
			nombre: 'DECIS FORTE'
		},{
			nombre: 'DECIS FORTE 10 EC'
		},{
			nombre: 'DEFENTOX D'
		},{
			nombre: 'DELBUX'
		},{
			nombre: 'DELBUX POLVO'
		},{
			nombre: 'DELFARM'
		},{
			nombre: 'DELTA 10'
		},{
			nombre: 'DELTA CRES 10'
		},{
			nombre: 'DELTA NOVA 0,5”, '
		},{
			nombre: 'DELTA NOVA 2,5'
		},{
			nombre: 'DELTAGRAN P 2,5'
		},{
			nombre: 'DELTAMAX'
		},{
			nombre: 'DELTAMETRINA 2,5 DVA'
		},{
			nombre: 'DELTAMETRINA 2,5 UPL'
		},{
			nombre: 'DELTAMETRINA 5 SC AGM'
		},{
			nombre: 'DELTAMETRINA ARN EBC'
		},{
			nombre: 'DELTAMETRINA BIESTERFELD'
		},{
			nombre: 'DELTAMETRINA SHARDA 2,5 EC'
		},{
			nombre: 'DELTEC'
		},{
			nombre: 'DELTOX'
		},{
			nombre: 'DEVAP PREMIUM'
		},{
			nombre: 'EXTRA TACKLE'
		},{
			nombre: 'EXTRA TACKLE LPU'
		},{
			nombre: 'FORTRESS'
		},{
			nombre: 'FUMETRINA'
		},{
			nombre: 'GORGOJICIDAFAV'
		},{
			nombre: 'K-OBIOL'
		},{
			nombre: 'ONZA MAX'
		},{
			nombre: 'OXIBIOL'
		},{
			nombre: 'POLECI 10 EC'
		},{
			nombre: 'PROBAT'
		},{
			nombre: 'SCATTO'
		},{
			nombre: 'STOKER'
		},{
			nombre: 'HOR-TAL USO AGRICOLA'
		},{
			nombre: 'FENIDEL'
		},{
			nombre: 'HELMQUAT'
		},{
			nombre: 'AGROVERDE DICAMBA'
		},{
			nombre: 'ARAKAMBA 58'
		},{
			nombre: 'BANVEL'
		},{
			nombre: 'BEMUS'
		},{
			nombre: 'CAIMAN'
		},{
			nombre: 'CAIMAN PLUS'
		},{
			nombre: 'CLARITY'
		},{
			nombre: 'COMPASS'
		},{
			nombre: 'CONTROLE '
		},{
			nombre: 'COWBOY'
		},{
			nombre: 'COWBOY 57,8 SL'
		},{
			nombre: 'COWBOY ELITE'
		},{
			nombre: 'COWBOY RED SURCOS'
		},{
			nombre: 'CROPMAX DICAMBA'
		},{
			nombre: 'DC 57,8'
		},{
			nombre: 'DICAGOOD'
		},{
			nombre: 'DICAMAX ACA 58'
		},{
			nombre: 'DICAMBA 48 HELM'
		},{
			nombre: 'DICAMBA 48,5 SL'
		},{
			nombre: 'DICAMBA 57,7 AFA'
		},{
			nombre: 'DICAMBA 57,7% IYASI'
		},{
			nombre: 'DICAMBA 57,8 MA  (no paga desde 2008)'
		},{
			nombre: 'DICAMBA 57,8 RAINBOW'
		},{
			nombre: 'DICAMBA 57,8 STOCKTON'
		},{
			nombre: 'DICAMBA 58 AGM'
		},{
			nombre: 'DICAMBA 58 DVA'
		},{
			nombre: 'DICAMBA 58 FORMULAGRO'
		},{
			nombre: 'DICAMBA 58 TERRIUM'
		},{
			nombre: 'DICAMBA AFA 57,7'
		},{
			nombre: 'DICAMBA ARN EBC'
		},{
			nombre: 'DICAMBA ATANOR'
		},{
			nombre: 'DICAMBA BLOCK'
		},{
			nombre: 'DICAMBA DAARGUS 57,7'
		},{
			nombre: 'DICAMBA FALCROP'
		},{
			nombre: 'DICAMBA FULL'
		},{
			nombre: 'DICAMBA ICONA  '
		},{
			nombre: 'DICAMBA II ZAMBA'
		},{
			nombre: 'DICAMBA JNG'
		},{
			nombre: 'DICAMBA KEMSURE'
		},{
			nombre: 'DICAMBA LQ'
		},{
			nombre: 'DICAMBA LYCSA'
		},{
			nombre: 'DICAMBA MAX'
		},{
			nombre: 'DICAMBA MELTHIS'
		},{
			nombre: 'DICAMBA MELTHIS'
		},{
			nombre: 'DICAMBA PHILAGRO'
		},{
			nombre: 'DICAMBA RURALCO'
		},{
			nombre: 'DICAMBA SIGMA'
		},{
			nombre: 'DICAMBA SUMAGRO'
		},{
			nombre: 'DICAMBA SUMAGRO'
		},{
			nombre: 'DICAMBA ZAMBA'
		},{
			nombre: 'DOMBELL 48 SL'
		},{
			nombre: 'FERRERO DICAMBA'
		},{
			nombre: 'GALO´PE'
		},{
			nombre: 'GLADER'
		},{
			nombre: 'H DICAMBA 58'
		},{
			nombre: 'HUNTER AGROS'
		},{
			nombre: 'KAMBA '
		},{
			nombre: 'KAMBA  '
		},{
			nombre: 'KAMBA DRY'
		},{
			nombre: 'KUARTEL 70 SG'
		},{
			nombre: 'KUARTEL ASP'
		},{
			nombre: 'NAVIGATOR'
		},{
			nombre: 'PHILCAMBA'
		},{
			nombre: 'PROCAMBA 57,8'
		},{
			nombre: 'RAINVEL'
		},{
			nombre: 'RECAMBA'
		},{
			nombre: 'SIGMA DICAMBA'
		},{
			nombre: 'STARGAN'
		},{
			nombre: 'SUPERB 70'
		},{
			nombre: 'SUPERCAMBA'
		},{
			nombre: 'TOLAN'
		},{
			nombre: 'TRANVEL'
		},{
			nombre: 'VENDAVAL DICAMBA'
		},{
			nombre: 'WINTER'
		},{
			nombre: 'ZURCO'
		},{
			nombre: 'PACK LQ TRIGO'
		},{
			nombre: 'FOPER'
		},{
			nombre: 'AGROCELHONE NE'
		},{
			nombre: 'TELONE INLINE'
		},{
			nombre: 'DROMONE'
		},{
			nombre: 'MIFOS'
		},{
			nombre: 'BIGUA'
		},{
			nombre: 'HEXEN'
		},{
			nombre: 'SPIDER'
		},{
			nombre: 'AGROSCALD'
		},{
			nombre: 'CORAZA 15'
		},{
			nombre: 'CORAZA L 35'
		},{
			nombre: 'DIFENOX 15'
		},{
			nombre: 'DIFENOX 25'
		},{
			nombre: 'ADDITION'
		},{
			nombre: 'ALETOL'
		},{
			nombre: 'BIAGRO LANCER'
		},{
			nombre: 'BOGARD'
		},{
			nombre: 'CHAMBERGO'
		},{
			nombre: 'CURYGEN'
		},{
			nombre: 'DIFENOCONAZOLE 25 AFA'
		},{
			nombre: 'DIFENOCONAZOLE 25 EC STOCKTON'
		},{
			nombre: 'DIFENOCONAZOLE 25 KEMSURE'
		},{
			nombre: 'DIFENOCONAZOLE 25 SUMAGRO'
		},{
			nombre: 'DIFENOCONAZOLE 3 FS PHILAGRO'
		},{
			nombre: 'DIFENOCONAZOLE SHARDA 25 EC'
		},{
			nombre: 'DIFO 3% FS'
		},{
			nombre: 'DIVIDEND'
		},{
			nombre: 'GARDNER'
		},{
			nombre: 'GEYSER'
		},{
			nombre: 'HIGHNESS'
		},{
			nombre: 'JANFRY'
		},{
			nombre: 'MASTERSEED'
		},{
			nombre: 'MULTIPLICAR 25'
		},{
			nombre: 'MULTIPLICAR 3 FS'
		},{
			nombre: 'PRISMA'
		},{
			nombre: 'SHELTER 3 FS'
		},{
			nombre: 'SICO'
		},{
			nombre: 'ZUKA'
		},{
			nombre: 'ZARDEX'
		},{
			nombre: 'DIVIDEND EXTRA'
		},{
			nombre: 'COMPINCHE SX'
		},{
			nombre: 'VIBRANCE GOLD'
		},{
			nombre: 'CRUISER PLUS'
		},{
			nombre: 'SUREN PLUS'
		},{
			nombre: 'TENACIUS SX'
		},{
			nombre: 'VIBRANCE TM INTEGRAL'
		},{
			nombre: 'CRACK'
		},{
			nombre: 'FLIGHT'
		},{
			nombre: 'CAUDILLO'
		},{
			nombre: 'DUCADO'
		},{
			nombre: 'AMIGO'
		},{
			nombre: 'COMPINCHE'
		},{
			nombre: 'DIVIDEND XTREME'
		},{
			nombre: 'DOBLON'
		},{
			nombre: 'DOUGLAS'
		},{
			nombre: 'TASPA'
		},{
			nombre: 'DIVIDEND SUPREME'
		},{
			nombre: 'TENACIUS'
		},{
			nombre: 'RODILON BP'
		},{
			nombre: 'RODILON P'
		},{
			nombre: 'DIFLUBENZURON SHARDA 24'
		},{
			nombre: 'DIFLUBENZURON SHARDA 25'
		},{
			nombre: 'DIFLUBENZURON SHARDA 70'
		},{
			nombre: 'DIFLUMAX'
		},{
			nombre: 'DIMILIN 25 WP'
		},{
			nombre: 'MENTOR'
		},{
			nombre: 'SMASH '
		},{
			nombre: 'ADAMA ESSENTIALS LEGACY'
		},{
			nombre: 'BRODAL 50 SC'
		},{
			nombre: 'DIFLUFENICAN BIESTERFELD'
		},{
			nombre: 'FLUSAN'
		},{
			nombre: 'PELICAN'
		},{
			nombre: 'TUKEN'
		},{
			nombre: 'COMPANION'
		},{
			nombre: 'FRONTIER'
		},{
			nombre: 'ACARICYGON A'
		},{
			nombre: 'AGRITOATO 40'
		},{
			nombre: 'ARADIM EC'
		},{
			nombre: 'ARPON PLUS'
		},{
			nombre: 'DAARGUSTOATO'
		},{
			nombre: 'DIMECTYON 40'
		},{
			nombre: 'DIMETOATO 40 ACA'
		},{
			nombre: 'DIMETOATO 40 DVA'
		},{
			nombre: 'DIMETOATO 40 MA'
		},{
			nombre: 'DIMETOATO 40 QZ'
		},{
			nombre: 'DIMETOATO 40 RAINBOW'
		},{
			nombre: 'DIMETOATO 50 RAINBOW'
		},{
			nombre: 'DIMETOATO ACA'
		},{
			nombre: 'DIMETOATO ARN EBC'
		},{
			nombre: 'DIMETOATO HELM'
		},{
			nombre: 'DIMETOATO JNG'
		},{
			nombre: 'DIMETOATO KEMSURE'
		},{
			nombre: 'DIMETOATO MELTHIS'
		},{
			nombre: 'DIMOL'
		},{
			nombre: 'GALGOFOS'
		},{
			nombre: 'GALGOFOS D'
		},{
			nombre: 'GLOSTER'
		},{
			nombre: 'GLOSTER AGROS'
		},{
			nombre: 'PERFEKTHION S'
		},{
			nombre: 'PHILDIM 37,6'
		},{
			nombre: 'ROGOR L'
		},{
			nombre: 'ROGOR PLUS'
		},{
			nombre: 'SISTEM L.E.'
		},{
			nombre: 'SISTEMICO ATANOR CE'
		},{
			nombre: 'SISTEMICO GLEX '
		},{
			nombre: 'SISTEMICO ICONA'
		},{
			nombre: 'SISTEMICO ICONA D'
		},{
			nombre: 'STOP'
		},{
			nombre: 'FORUM'
		},{
			nombre: 'ACROBAT MZ'
		},{
			nombre: 'SOWER MAX'
		},{
			nombre: 'SUMIEIGHT-FORTE'
		},{
			nombre: 'TUTOR DT'
		},{
			nombre: 'DINNO'
		},{
			nombre: 'STARKLE 70 WP'
		},{
			nombre: 'TENCHU'
		},{
			nombre: 'SWING GOLD'
		},{
			nombre: 'DIQUAT 20 RAINBOW'
		},{
			nombre: 'DIQUAT SHARDA 20'
		},{
			nombre: 'REGLONE'
		},{
			nombre: 'ADAMA ESSENTIALS DIURON 80 FW'
		},{
			nombre: 'ANCOM DIURON F800'
		},{
			nombre: 'DIUREX 90 WG'
		},{
			nombre: 'DIURON 80 AL'
		},{
			nombre: 'DIURON 80 RAINBOW'
		},{
			nombre: 'DIURON 80 RED SURCOS'
		},{
			nombre: 'DIURON MAX FLOW'
		},{
			nombre: 'DIURON MAX PM'
		},{
			nombre: 'DIURON SC 50'
		},{
			nombre: 'DIURON SHARDA 80 SC'
		},{
			nombre: 'DIURON SINER'
		},{
			nombre: 'DIURON WP AGROS'
		},{
			nombre: 'KARMEX SC'
		},{
			nombre: 'KARMEX WG'
		},{
			nombre: 'MAGENTA 80 SC'
		},{
			nombre: 'PRODIU 80 WG'
		},{
			nombre: 'KUMEI MAPU CIDETRAK DA MET'
		},{
			nombre: 'BIOLURE CM '
		},{
			nombre: 'BIOLURE CM PLUS'
		},{
			nombre: 'CHECK MATE CM-F'
		},{
			nombre: 'CIDETRAK CM'
		},{
			nombre: 'CIDETRAK CM PLUS'
		},{
			nombre: 'FEROMONA KUMEI MAPU CARPOCAPSA'
		},{
			nombre: 'CIDETRAK CMDA COMBO'
		},{
			nombre: 'PHEROCON CM DA COMBO'
		},{
			nombre: 'ISOMATE C PLUS'
		},{
			nombre: 'ISOMATE C PLUS LL'
		},{
			nombre: 'ISOMATE C PLUS LL FLEX'
		},{
			nombre: 'ISOMATE C PLUS LL RING'
		},{
			nombre: 'TENSUC'
		},{
			nombre: 'ADHERENTE ECOLOGICO FLY'
		},{
			nombre: 'BIOFILM'
		},{
			nombre: 'ECOSTICK'
		},{
			nombre: 'GOTA GREEN'
		},{
			nombre: 'ANTIDERIVA CONTROL UP'
		},{
			nombre: 'ANTIDERIVA J.O.MAX'
		},{
			nombre: 'ANTIDERIVA NIVELAGRO'
		},{
			nombre: 'VIENTO CONTROL'
		},{
			nombre: 'J.O.MAX PLUS'
		},{
			nombre: 'TS 34 HUMECTANTE-ADHERENTE-ANTIDERIVA-ANTIEVAPORANTE'
		},{
			nombre: 'TS ACTIVE Locker de pulverización'
		},{
			nombre: 'COADYUVANTE CONTROL UP'
		},{
			nombre: 'ECOADH KISILL'
		},{
			nombre: 'NIVELAGRO'
		},{
			nombre: 'BAGUAL'
		},{
			nombre: 'BAGUAL TOTAL'
		},{
			nombre: 'COADYUVANTE ANTIDERIVA FACYT'
		},{
			nombre: 'COADYUVANTE EFECTO COMBINADO FACYT'
		},{
			nombre: 'COADYUVANTE SILICONADO BAGUAL'
		},{
			nombre: 'COADYUVANTE SILICONADO FACYT'
		},{
			nombre: 'COADYUVANTE TODO TERRENO FACYT'
		},{
			nombre: 'COADYUVANTE TRIPLE EFECTO FACYT'
		},{
			nombre: 'FACYT'
		},{
			nombre: 'J.O.MAX'
		},{
			nombre: 'COADYUVANTE ONE'
		},{
			nombre: 'ANTIDERIVA BAGUAL'
		},{
			nombre: 'CHECK MATE CM-XL'
		},{
			nombre: 'MICROFLAKE CM'
		},{
			nombre: 'NOMATE CM SPIRAL GOLD'
		},{
			nombre: 'PUFFER CM'
		},{
			nombre: 'PUFFER LB'
		},{
			nombre: 'NOMATE CM SPIRAL'
		},{
			nombre: 'RACK Cp M'
		},{
			nombre: 'RAK Cp'
		},{
			nombre: 'RAK Cp Plus'
		},{
			nombre: 'KUMMEL SECUESTRANTE'
		},{
			nombre: 'SECUESTRANTE J.O.MAX LIQUIDO'
		},{
			nombre: 'SECUESTRANTE NIVELAGRO'
		},{
			nombre: 'APOLO'
		},{
			nombre: 'EPOXI CARB LINE'
		},{
			nombre: 'EPOXICONAZOLE NUFARM'
		},{
			nombre: 'EPOXICONAZOLE RAINBOW'
		},{
			nombre: 'EPOZOLE'
		},{
			nombre: 'RUBRIC'
		},{
			nombre: 'SOPRANO '
		},{
			nombre: 'AVIZOR RM'
		},{
			nombre: 'ESPIGA'
		},{
			nombre: 'ALLEGRO'
		},{
			nombre: 'ESPIGA M'
		},{
			nombre: 'DUETT PLUS'
		},{
			nombre: 'HALLMARK'
		},{
			nombre: 'SUMI-ALPHA 5 E'
		},{
			nombre: 'RETAKER'
		},{
			nombre: 'SUMITHION EXTRA'
		},{
			nombre: 'DANITOL SUPER'
		},{
			nombre: 'ANTIDERIVA MAX'
		},{
			nombre: 'GALGOIL'
		},{
			nombre: 'OPTIMIZER II'
		},{
			nombre: 'POWEROIL'
		},{
			nombre: 'ZINAX'
		},{
			nombre: 'ACEITE METILADO AEC'
		},{
			nombre: 'ADAMA ESSENTIALS COADYUVANTE '
		},{
			nombre: 'BIOMETHYL MAX'
		},{
			nombre: 'CELERITY LQ'
		},{
			nombre: 'DUOM'
		},{
			nombre: 'GEOS'
		},{
			nombre: 'OFICIO'
		},{
			nombre: 'SAKKON EXTREMO'
		},{
			nombre: 'SIMATON'
		},{
			nombre: 'SOLY OIL METIL'
		},{
			nombre: 'UPTAKE'
		},{
			nombre: 'VERSION'
		},{
			nombre: 'ACEITE ROCIO'
		},{
			nombre: 'CAMPERO ZAMBA'
		},{
			nombre: 'COADYUVANTE SELECTO'
		},{
			nombre: 'DASH MSO'
		},{
			nombre: 'FOCUS'
		},{
			nombre: 'LIMITE'
		},{
			nombre: 'UPTAKE PLUS'
		},{
			nombre: 'LIDEROL EMAS'
		},{
			nombre: 'METILADO ARN EBC'
		},{
			nombre: 'METYLOIL LINE'
		},{
			nombre: 'MULCHEN METILOIL'
		},{
			nombre: 'MULCHEN WET'
		},{
			nombre: 'OPTIMIZER'
		},{
			nombre: 'OPTIMIZER II'
		},{
			nombre: 'QUID OIL'
		},{
			nombre: 'RIZO OIL M'
		},{
			nombre: 'RIZOSPRAY EXTREMO'
		},{
			nombre: 'SILIOIL AFA'
		},{
			nombre: 'VIRAJE'
		},{
			nombre: 'LEMUR'
		},{
			nombre: 'LEX'
		},{
			nombre: 'ESCUDO 48'
		},{
			nombre: 'ETEFON BROMETAN'
		},{
			nombre: 'TIFON'
		},{
			nombre: 'TENSIO W'
		},{
			nombre: 'REDPOINT'
		},{
			nombre: 'DANJIRI'
		},{
			nombre: 'DANJIRI ST'
		},{
			nombre: 'TOPSEED EXTRA'
		},{
			nombre: 'CURBIX 35 FS'
		},{
			nombre: 'SEED LOCK'
		},{
			nombre: 'REGENT ET'
		},{
			nombre: 'RENAP 100'
		},{
			nombre: 'BIOCITRUS'
		},{
			nombre: 'BIOCITRUS POLVO'
		},{
			nombre: 'ADAMA ESSENTIALS NEMACUR 24 CS'
		},{
			nombre: 'RUBIGAN'
		},{
			nombre: 'RUBIGAN 12 SC'
		},{
			nombre: 'MAGISTER 20 SC'
		},{
			nombre: 'INDAR F'
		},{
			nombre: 'INDAR ST'
		},{
			nombre: 'TELDOR 50 WP'
		},{
			nombre: 'DAARGUS NITRO 100'
		},{
			nombre: 'DUAL F'
		},{
			nombre: 'EL BUITRE MATA'
		},{
			nombre: 'EL MATACO PLUS'
		},{
			nombre: 'FENITION LQ'
		},{
			nombre: 'FENMAX'
		},{
			nombre: 'GLEX S'
		},{
			nombre: 'HORMI TRAC'
		},{
			nombre: 'MATAHOR GLEX'
		},{
			nombre: 'NITRO RED SURCOS'
		},{
			nombre: 'SUMITHION 100 EC'
		},{
			nombre: 'SUMITOMO SUMITHION 3'
		},{
			nombre: 'SUMMIT SUMITHION 100'
		},{
			nombre: 'YARARA F'
		},{
			nombre: 'FENOTRINA  '
		},{
			nombre: 'FENOTRINA POLVO'
		},{
			nombre: 'SUMITHION SUPER'
		},{
			nombre: 'KILLUP'
		},{
			nombre: 'ALAZAN'
		},{
			nombre: 'FACTOR'
		},{
			nombre: 'FENOX'
		},{
			nombre: 'FILUMIL'
		},{
			nombre: 'FOXTROP EXTRA'
		},{
			nombre: 'HOMERO'
		},{
			nombre: 'ISOMERO 11 EW'
		},{
			nombre: 'POLIMERO'
		},{
			nombre: 'PUMA'
		},{
			nombre: 'PUMA EXTRA'
		},{
			nombre: 'TRIPICK'
		},{
			nombre: 'FOXTROT XTRA'
		},{
			nombre: 'SCARMITE'
		},{
			nombre: 'DANIMEN'
		},{
			nombre: 'FERBAM GRANUFLO'
		},{
			nombre: 'CHIPCO CHOICE'
		},{
			nombre: 'CLAP'
		},{
			nombre: 'FIPRO 20% SC'
		},{
			nombre: 'FIPROMIREX'
		},{
			nombre: 'FIPRONIL 20 SC'
		},{
			nombre: 'FIPRONT'
		},{
			nombre: 'FORMIDOR'
		},{
			nombre: 'FORTEC'
		},{
			nombre: 'PRINCIPIO'
		},{
			nombre: 'REGENT 25 FS SEMILLERO'
		},{
			nombre: 'SANTERO'
		},{
			nombre: 'SUNATO SEMILLERO'
		},{
			nombre: 'PROFIT'
		},{
			nombre: 'TEPPEKI'
		},{
			nombre: 'CHARGE'
		},{
			nombre: 'FLUENT 12,5 % EC'
		},{
			nombre: 'HACHE UNO DEL 2000'
		},{
			nombre: 'HACHE UNO SUPER'
		},{
			nombre: 'LISTO'
		},{
			nombre: 'ONECIDE'
		},{
			nombre: 'SUPER ONECIDE'
		},{
			nombre: 'ALTIMA'
		},{
			nombre: 'FROWNCIDE'
		},{
			nombre: 'NIFRAN'
		},{
			nombre: 'TIZCA'
		},{
			nombre: 'BELT 48 SC'
		},{
			nombre: 'EVEREST 70 WDG'
		},{
			nombre: 'CELEST'
		},{
			nombre: 'SCHOLAR'
		},{
			nombre: 'SCHOLAR 23 SC'
		},{
			nombre: 'APRON MAXX RFC'
		},{
			nombre: 'PROGUS'
		},{
			nombre: 'BROTAL'
		},{
			nombre: 'BROTAL GOLD'
		},{
			nombre: 'DEORO'
		},{
			nombre: 'DREXALIN PLUS'
		},{
			nombre: 'PRIME + 12,5 EC'
		},{
			nombre: 'CAPATAZ'
		},{
			nombre: 'FLUMETSULAM 80 RAINBOW'
		},{
			nombre: 'MULAN'
		},{
			nombre: 'PERDURE'
		},{
			nombre: 'PRESIDE'
		},{
			nombre: 'PRESIDE 80 WDG'
		},{
			nombre: 'SUMIVERDE'
		},{
			nombre: 'FLUMYZIN SC'
		},{
			nombre: 'PLEDGE WP'
		},{
			nombre: 'SUMISOYA 50 P.M. '
		},{
			nombre: 'SUMISOYA FLO'
		},{
			nombre: 'INFINITO'
		},{
			nombre: 'EVITO'
		},{
			nombre: 'ADAMA ESSENTIALS RAINBOW'
		},{
			nombre: 'CLORIDON SURCOS'
		},{
			nombre: 'DAKOTA'
		},{
			nombre: 'DEFENDER'
		},{
			nombre: 'FIDELITY'
		},{
			nombre: 'FLORANE ACA 25'
		},{
			nombre: 'FLUOROCLORIDONA LA TIJERETA 25 EC'
		},{
			nombre: 'FLUROCLORIDONA NUFARM'
		},{
			nombre: 'FLUROCLORIDONA ZAMBA'
		},{
			nombre: 'FLUROCLORIDONA ZAMBA'
		},{
			nombre: 'FLURON'
		},{
			nombre: 'FLUROXIPIR RAINBOW'
		},{
			nombre: 'RESIDUAL'
		},{
			nombre: 'SPIRIT 25'
		},{
			nombre: 'TALIS'
		},{
			nombre: 'VOLT'
		},{
			nombre: 'TWIN PACK GOLD'
		},{
			nombre: 'ADAMA ESSENTIALS TOMAHAWK'
		},{
			nombre: 'AZBANY'
		},{
			nombre: 'STARANE'
		},{
			nombre: 'STARANE XTRA'
		},{
			nombre: 'FLUROXANE'
		},{
			nombre: 'ALCANCE'
		},{
			nombre: 'FLUTRI 12,5 SC'
		},{
			nombre: 'FLUTRIAFOL SINON'
		},{
			nombre: 'IMPACT 12,5'
		},{
			nombre: 'SKIP 12,5 SC'
		},{
			nombre: 'TOPGUARD'
		},{
			nombre: 'TRECKER'
		},{
			nombre: 'VINCIT 5'
		},{
			nombre: 'BLEND'
		},{
			nombre: 'PRIAXOR'
		},{
			nombre: 'ORQUESTA TM ULTRA'
		},{
			nombre: 'CONCEP III'
		},{
			nombre: 'AGROSTIM'
		},{
			nombre: 'FOLCISTIN'
		},{
			nombre: 'ADAMA ESSENTIALS FOLPAN'
		},{
			nombre: 'ADAMA ESSENTIALS SUPERFOLPAN'
		},{
			nombre: 'ADAMA ESSENTIALS ALEF'
		},{
			nombre: 'ASPSAFEN 25 SL'
		},{
			nombre: 'BINGO'
		},{
			nombre: 'ESCAMPE'
		},{
			nombre: 'ESCAMPE AGROS'
		},{
			nombre: 'FLEX'
		},{
			nombre: 'FLOSIL'
		},{
			nombre: 'FOKKER'
		},{
			nombre: 'FOMESA MAX 25'
		},{
			nombre: 'FOMESAMAX 25'
		},{
			nombre: 'FOX'
		},{
			nombre: 'GENSAFEN'
		},{
			nombre: 'RINGSIDE'
		},{
			nombre: 'SHAFEN'
		},{
			nombre: 'EQUIP WG'
		},{
			nombre: 'REVOLVER PLUS'
		},{
			nombre: 'DICARZOL 50 PS'
		},{
			nombre: 'ALIETTE'
		},{
			nombre: 'ALLEATO'
		},{
			nombre: 'AZIMUT'
		},{
			nombre: 'MOVAL'
		},{
			nombre: 'MIKAL'
		},{
			nombre: 'F-GAS'
		},{
			nombre: 'ACOPIOFOS'
		},{
			nombre: 'AGROPHOS'
		},{
			nombre: 'ALUFOS'
		},{
			nombre: 'ASCARISCER FOS-KILL'
		},{
			nombre: 'CROPMAX FOSFURO'
		},{
			nombre: 'FERRERO FOSFURO'
		},{
			nombre: 'FERRERO FOSFURO UPL'
		},{
			nombre: 'FOSFURO JNG'
		},{
			nombre: 'FUMITOXIN'
		},{
			nombre: 'GORPHOS'
		},{
			nombre: 'GORPHOS IN'
		},{
			nombre: 'NEOTOXIN'
		},{
			nombre: 'PESTOXIN'
		},{
			nombre: 'PHOSGAS COMPRIMIDOS '
		},{
			nombre: 'PHOSGAS MINI ROPE S'
		},{
			nombre: 'PHOSGAS PASTILLAS '
		},{
			nombre: 'PHOSGAS PASTILLONES'
		},{
			nombre: 'PHOSTEK'
		},{
			nombre: 'PHOS-TEK'
		},{
			nombre: 'PHOSTOXIN DEGESCH'
		},{
			nombre: 'PHOSTOXIN MINI ROPE S'
		},{
			nombre: 'POSTFURO'
		},{
			nombre: 'QUICKPHLO'
		},{
			nombre: 'QUICKPHOS'
		},{
			nombre: 'SILOKEEP'
		},{
			nombre: 'SYNFUME'
		},{
			nombre: 'SYNFUME EXTRA'
		},{
			nombre: 'TECNOFOS'
		},{
			nombre: 'TECNOFOS NEW'
		},{
			nombre: 'DEGESCH MAGTOXIN'
		},{
			nombre: 'MAGTOXIN GRANULO'
		},{
			nombre: 'PLACAS DEGESCH'
		},{
			nombre: 'IMIDAN 70'
		},{
			nombre: 'NEMATHORIN'
		},{
			nombre: 'NEMATHORIN EC 15 '
		},{
			nombre: 'ARCHER PLUS'
		},{
			nombre: 'FENTROL'
		},{
			nombre: 'FIGHTER PLUS'
		},{
			nombre: 'NEXIDE'
		},{
			nombre: 'LURETAPE'
		},{
			nombre: 'PID DISPENSADOR DE FEROMONA PLATO INDUSTRIES'
		},{
			nombre: 'ACTION AMONIO'
		},{
			nombre: 'ACTION CLASSIC'
		},{
			nombre: 'ADAMA ESSENTIALS DIAMOND'
		},{
			nombre: 'ADAMA ESSENTIALS GLYPHOGAN'
		},{
			nombre: 'AGROSATO'
		},{
			nombre: 'AHIJUNA'
		},{
			nombre: 'ALLGRAM'
		},{
			nombre: 'ALLGRAM'
		},{
			nombre: 'ARAGLIFOAMONIO'
		},{
			nombre: 'ATILA'
		},{
			nombre: 'ATILA MAX'
		},{
			nombre: 'ATTACK'
		},{
			nombre: 'AXION PLUS GAM'
		},{
			nombre: 'BAUNDAP'
		},{
			nombre: 'BAUNDAP 75,7'
		},{
			nombre: 'BAUNDAP AM'
		},{
			nombre: 'BAUNDAP FG'
		},{
			nombre: 'BAUNDAP PREMIUM'
		},{
			nombre: 'BAUNDAP UNICO'
		},{
			nombre: 'BAUNDAP WDG'
		},{
			nombre: 'BULLFIGHT'
		},{
			nombre: 'CHEM UP 48'
		},{
			nombre: 'CHEM-UP FULL'
		},{
			nombre: 'CLEAR UP'
		},{
			nombre: 'COMPAÑÍA BAUNDAP AM'
		},{
			nombre: 'CONTROLER'
		},{
			nombre: 'CONTROLER AMONIO'
		},{
			nombre: 'CORVUS'
		},{
			nombre: 'COUNTACH TM'
		},{
			nombre: 'CREDIT'
		},{
			nombre: 'CREDIT AMONIO'
		},{
			nombre: 'CREDIT DRY'
		},{
			nombre: 'CREDIT DRY II'
		},{
			nombre: 'CREDIT FULL'
		},{
			nombre: 'CROW'
		},{
			nombre: 'CROW I'
		},{
			nombre: 'CRUCIAL'
		},{
			nombre: 'DAARGUS'
		},{
			nombre: 'DIRECT 48'
		},{
			nombre: 'DUPONT PREMIUM HL'
		},{
			nombre: 'DUPONT PREMIUM MAX'
		},{
			nombre: 'DUPONT PREMIUM POTASIO'
		},{
			nombre: 'DUPONT PREMIUM SG'
		},{
			nombre: 'DUPONT PREMIUM SG'
		},{
			nombre: 'DUPONT PREMIUM ULTRA SL'
		},{
			nombre: 'DYNAMIC C FULL II'
		},{
			nombre: 'ESKOBA 48% SL'
		},{
			nombre: 'ESKOBA AMONIO SL'
		},{
			nombre: 'ESKOBA AMONIO SURCOS'
		},{
			nombre: 'ESKOBA ELITE'
		},{
			nombre: 'ESKOBA FULL II'
		},{
			nombre: 'ESKOBA FULL II SURCOS'
		},{
			nombre: 'ESKOBA GOLD'
		},{
			nombre: 'ESKOBA MAX'
		},{
			nombre: 'ESKOBA MAX SF'
		},{
			nombre: 'ESKOBA MAX SURCOS'
		},{
			nombre: 'ESKOBA P'
		},{
			nombre: 'ESKOBA P SF'
		},{
			nombre: 'ESKOBA POTASICO'
		},{
			nombre: 'ESKOBA SURCOS'
		},{
			nombre: 'ESTRELLA'
		},{
			nombre: 'ESTRELLA AMMONIUM'
		},{
			nombre: 'ESTRELLA AMMONIUM 1'
		},{
			nombre: 'ESTRELLA AMMONIUM 36'
		},{
			nombre: 'ESTRELLA AURUM'
		},{
			nombre: 'ESTRELLA POTASSIUM'
		},{
			nombre: 'ESTRELLA WDG 75,7'
		},{
			nombre: 'EXCELLENT FULL II'
		},{
			nombre: 'EXWEED 48'
		},{
			nombre: 'FG II'
		},{
			nombre: 'FIDEPLUS GLIFOSATO 66,2'
		},{
			nombre: 'FORMULAGRO 48 L'
		},{
			nombre: 'FOSATO'
		},{
			nombre: 'FOSATO LP'
		},{
			nombre: 'FS. GLIFOSATO II'
		},{
			nombre: 'G62'
		},{
			nombre: 'GAPS 78'
		},{
			nombre: 'GARANTE'
		},{
			nombre: 'GARANTE 75,7 SG'
		},{
			nombre: 'GARANTE FULL'
		},{
			nombre: 'GARANTE FULL II'
		},{
			nombre: 'GENFOSATO SUPER'
		},{
			nombre: 'GLICEP'
		},{
			nombre: 'GLICEP SUPER FQ'
		},{
			nombre: 'GLIF'
		},{
			nombre: 'GLIF 48 BH'
		},{
			nombre: 'GLIF AMONIO'
		},{
			nombre: 'GLIF SG'
		},{
			nombre: 'GLIFACYT '
		},{
			nombre: 'GLIFO 75,7'
		},{
			nombre: 'GLIFO AMONIO LQ'
		},{
			nombre: 'GLIFO CAMPO POTASICO'
		},{
			nombre: 'GLIFO EXTRA G 48'
		},{
			nombre: 'GLIFO MULCHEN 62'
		},{
			nombre: 'GLIFO MULCHEN 66,2'
		},{
			nombre: 'GLIFO PLUS II LA TIJERETA'
		},{
			nombre: 'GLIFO PLUS OCH'
		},{
			nombre: 'GLIFOACTION +'
		},{
			nombre: 'GLIFOALFA ZAMBA'
		},{
			nombre: 'GLIFOCAS'
		},{
			nombre: 'GLIFOCAS 48'
		},{
			nombre: 'GLIFOCAS K'
		},{
			nombre: 'GLIFOFANT 48'
		},{
			nombre: 'GLIFOGLEX '
		},{
			nombre: 'GLIFOGLEX FULL III'
		},{
			nombre: 'GLIFOGRAN'
		},{
			nombre: 'GLIFOGRAN 75,7'
		},{
			nombre: 'GLIFOKAY'
		},{
			nombre: 'GLIFOMAX NG'
		},{
			nombre: 'GLIFOMAX ZAMBA'
		},{
			nombre: 'GLIFOPAMPA ZAMBA'
		},{
			nombre: 'GLIFOPLUS ZAMBA'
		},{
			nombre: 'GLIFOPRO'
		},{
			nombre: 'GLIFOPRO 74,7 SG'
		},{
			nombre: 'GLIFOPRO FULL'
		},{
			nombre: 'GLIFOPRO SP 55'
		},{
			nombre: 'GLIFOQAR'
		},{
			nombre: 'GLIFOQUIM'
		},{
			nombre: 'GLIFORTE'
		},{
			nombre: 'GLIFOSATO 48 AFA'
		},{
			nombre: 'GLIFOSATO 48 AGM'
		},{
			nombre: 'GLIFOSATO 48 AGROVERDE'
		},{
			nombre: 'GLIFOSATO 48 ARN EBC'
		},{
			nombre: 'GLIFOSATO 48 BILAB'
		},{
			nombre: 'GLIFOSATO 48 JF'
		},{
			nombre: 'GLIFOSATO 48 KEMSURE'
		},{
			nombre: 'GLIFOSATO 48 KEMSURE'
		},{
			nombre: 'GLIFOSATO 48 MA'
		},{
			nombre: 'GLIFOSATO 48 MELTHIS'
		},{
			nombre: 'GLIFOSATO 48 RAINBOW'
		},{
			nombre: 'GLIFOSATO 48 SEM'
		},{
			nombre: 'GLIFOSATO 48 SIGMA'
		},{
			nombre: 'GLIFOSATO 48 SL ASSA'
		},{
			nombre: 'GLIFOSATO 48 STOCKTON'
		},{
			nombre: 'GLIFOSATO 48 YERCO'
		},{
			nombre: 'GLIFOSATO 55 ASSA'
		},{
			nombre: 'GLIFOSATO 62 LDC'
		},{
			nombre: 'GLIFOSATO 66,2 AS'
		},{
			nombre: 'GLIFOSATO 74,7 KEMSURE'
		},{
			nombre: 'GLIFOSATO 74,7 RAINBOW'
		},{
			nombre: 'GLIFOSATO 75,7 EFIMAX'
		},{
			nombre: 'GLIFOSATO 75,7 FUHUA'
		},{
			nombre: 'GLIFOSATO 75,7 KEMSURE'
		},{
			nombre: 'GLIFOSATO 75,7 RAINBOW'
		},{
			nombre: 'GLIFOSATO 75,7 SG STOCKTON'
		},{
			nombre: 'GLIFOSATO 75,9 GREEN CROPS'
		},{
			nombre: 'GLIFOSATO 78 ARN EBC'
		},{
			nombre: 'GLIFOSATO 88,8 FAMA'
		},{
			nombre: 'GLIFOSATO 88,8 RAINBOW'
		},{
			nombre: 'GLIFOSATO AFA'
		},{
			nombre: 'GLIFOSATO AFA 43,8'
		},{
			nombre: 'GLIFOSATO AFA II'
		},{
			nombre: 'GLIFOSATO AMONIO CAGSA'
		},{
			nombre: 'GLIFOSATO AMONIO JNG'
		},{
			nombre: 'GLIFOSATO AMONIO SIGMA'
		},{
			nombre: 'GLIFOSATO AS'
		},{
			nombre: 'GLIFOSATO ATANOR'
		},{
			nombre: 'GLIFOSATO ATANOR II'
		},{
			nombre: 'GLIFOSATO ATANOR TOTAL'
		},{
			nombre: 'GLIFOSATO BRESUR'
		},{
			nombre: 'GLIFOSATO DE AMONIO RAINBOW'
		},{
			nombre: 'GLIFOSATO DICOACTION'
		},{
			nombre: 'GLIFOSATO DOW AGROSCIENCES'
		},{
			nombre: 'GLIFOSATO FORTE'
		},{
			nombre: 'GLIFOSATO FULL LYCSA'
		},{
			nombre: 'GLIFOSATO G 48'
		},{
			nombre: 'GLIFOSATO G AMONIO'
		},{
			nombre: 'GLIFOSATO GOLD SIGMA'
		},{
			nombre: 'GLIFOSATO GR ARN EBC'
		},{
			nombre: 'GLIFOSATO GR RURALCO'
		},{
			nombre: 'GLIFOSATO GRANULADO BIESTERFELD'
		},{
			nombre: 'GLIFOSATO GRANULADO MULTIAGRO'
		},{
			nombre: 'GLIFOSATO HELM 48'
		},{
			nombre: 'GLIFOSATO INDUSTRIAL'
		},{
			nombre: 'GLIFOSATO IYASI'
		},{
			nombre: 'GLIFOSATO IYASI FULL'
		},{
			nombre: 'GLIFOSATO JNG'
		},{
			nombre: 'GLIFOSATO KEMSURE'
		},{
			nombre: 'GLIFOSATO KEMSURE'
		},{
			nombre: 'GLIFOSATO LA TIJERETA'
		},{
			nombre: 'GLIFOSATO LA TIJERETA II'
		},{
			nombre: 'GLIFOSATO LQ 48'
		},{
			nombre: 'GLIFOSATO LQ SG'
		},{
			nombre: 'GLIFOSATO LYCSA'
		},{
			nombre: 'GLIFOSATO MARKETING AGRICOLA'
		},{
			nombre: 'GLIFOSATO MAX SIGMA'
		},{
			nombre: 'GLIFOSATO MELTHIS TOP'
		},{
			nombre: 'GLIFOSATO MELTHIS TRITON 66,2'
		},{
			nombre: 'GLIFOSATO MULCHEN II'
		},{
			nombre: 'GLIFOSATO NOVA'
		},{
			nombre: 'GLIFOSATO POTASICO CAGSA'
		},{
			nombre: 'GLIFOSATO POWER ARN EBC'
		},{
			nombre: 'GLIFOSATO PREMIUM AFA II'
		},{
			nombre: 'GLIFOSATO PRODINSA'
		},{
			nombre: 'GLIFOSATO SQ'
		},{
			nombre: 'GLIFOSATO SUPER  DVA'
		},{
			nombre: 'GLIFOSATO SUPRA LDC'
		},{
			nombre: 'GLIFOSATO TERRIUM'
		},{
			nombre: 'GLIFOSATO WSG CHEMPRO'
		},{
			nombre: 'GLIFOSATO WYNCA'
		},{
			nombre: 'GLIFOSATO XINAN'
		},{
			nombre: 'GLIFOSATO X-PRESS'
		},{
			nombre: 'GLIFOSATOFAV'
		},{
			nombre: 'GLIFOTECH 48'
		},{
			nombre: 'GLIFOTECH AMONIO'
		},{
			nombre: 'GLIFOTEX 48'
		},{
			nombre: 'GLIFOTEX PLUS'
		},{
			nombre: 'GLIFOTOP ZAMBA'
		},{
			nombre: 'GLIFOVYC  '
		},{
			nombre: 'GLIFOVYC 48'
		},{
			nombre: 'GLIFOVYC MAX'
		},{
			nombre: 'GLIFOWEED 48'
		},{
			nombre: 'GLIFOWEED AGM'
		},{
			nombre: 'GLIFOWEED ULTRA AGM'
		},{
			nombre: 'GLISAL 75,7 QZ'
		},{
			nombre: 'GLISATO MULTIAGRO'
		},{
			nombre: 'GLIVYC'
		},{
			nombre: 'GLIVYC MAX'
		},{
			nombre: 'GLIVYC POTASICO'
		},{
			nombre: 'GLYFOGEN '
		},{
			nombre: 'GLYFOSUR 48 '
		},{
			nombre: 'GLYNOMYL'
		},{
			nombre: 'GLYNOMYL A'
		},{
			nombre: 'GLYNOMYL II'
		},{
			nombre: 'GLYNOMYL K'
		},{
			nombre: 'GLYNOMYL NH'
		},{
			nombre: 'GLYNOMYL PREMIUM'
		},{
			nombre: 'GLYNOMYL SENIOR'
		},{
			nombre: 'GLYNOMYL SENIOR I'
		},{
			nombre: 'GREEN CHOICE GLIFOSATO'
		},{
			nombre: 'GREEN II'
		},{
			nombre: 'H. GLIFOSATO II'
		},{
			nombre: 'H. GLIFOSATO PREMIUM 66,2'
		},{
			nombre: 'HELM 60 GLIFOSATO'
		},{
			nombre: 'HELM GLIFOSATO 48'
		},{
			nombre: 'HERBICIDA DAARGUS  FULL'
		},{
			nombre: 'HERBICIDA DAARGUS AMONIO'
		},{
			nombre: 'HOMOLOGO 48'
		},{
			nombre: 'INFEST'
		},{
			nombre: 'INFOSATO 48'
		},{
			nombre: 'INVICTO'
		},{
			nombre: 'ISHIGLIFOSATO'
		},{
			nombre: 'KAISER FULL'
		},{
			nombre: 'KAISER MAX'
		},{
			nombre: 'KAMAE'
		},{
			nombre: 'KNOCK OUT'
		},{
			nombre: 'LA TIJERETA BOX'
		},{
			nombre: 'LA TIJERETA BOX L'
		},{
			nombre: 'LA TIJERETA PLATINUM'
		},{
			nombre: 'LEROSATO'
		},{
			nombre: 'MAGNUM'
		},{
			nombre: 'MAGNUM AGROS'
		},{
			nombre: 'MAGNUM AMONIO'
		},{
			nombre: 'MAGNUM II AMONIO'
		},{
			nombre: 'MAGNUM MAX'
		},{
			nombre: 'MAGNUM MAX AGROS'
		},{
			nombre: 'MAGNUM POTASSIUM'
		},{
			nombre: 'MAGNUM SUPER II'
		},{
			nombre: 'MARCH'
		},{
			nombre: 'MARCH II'
		},{
			nombre: 'MARCH II LGA'
		},{
			nombre: 'MARCH LGA'
		},{
			nombre: 'MAXIGLIF'
		},{
			nombre: 'MIFOS'
		},{
			nombre: 'MIFOS A'
		},{
			nombre: 'MIFOS P'
		},{
			nombre: 'MIFOS SUPER'
		},{
			nombre: 'ORION 48 L FORMULAGRO'
		},{
			nombre: 'ORION FULL'
		},{
			nombre: 'PANZER'
		},{
			nombre: 'PANZER GOLD'
		},{
			nombre: 'PANZER PLUS'
		},{
			nombre: 'PANZER SUPER'
		},{
			nombre: 'PELKE'
		},{
			nombre: 'PILARSATO'
		},{
			nombre: 'POLADO II'
		},{
			nombre: 'POTASO'
		},{
			nombre: 'POTASO SURCOS'
		},{
			nombre: 'POTENZA'
		},{
			nombre: 'POTENZA FULL'
		},{
			nombre: 'POTENZA FULL XTRA'
		},{
			nombre: 'POTENZA II'
		},{
			nombre: 'POTENZA K'
		},{
			nombre: 'POTENZA PLUS'
		},{
			nombre: 'POTENZA TOP'
		},{
			nombre: 'POTENZA ULTRA'
		},{
			nombre: 'POTENZA ULTRA II'
		},{
			nombre: 'POWER PLUS DRY'
		},{
			nombre: 'POWER PLUS II'
		},{
			nombre: 'RAINBOW MAX'
		},{
			nombre: 'RID AWAY'
		},{
			nombre: 'RINDER'
		},{
			nombre: 'RINDER FULL'
		},{
			nombre: 'RINDER MAX GRANULADO'
		},{
			nombre: 'RINDER MICROSOLUBLE'
		},{
			nombre: 'RONDO '
		},{
			nombre: 'RONDO AMONIO'
		},{
			nombre: 'RONDO LOGICO GRANULOS SOLUBLES'
		},{
			nombre: 'RONDO LOGICO ICONA'
		},{
			nombre: 'RONDO SUPER'
		},{
			nombre: 'ROPHOSATE'
		},{
			nombre: 'ROUNDUP'
		},{
			nombre: 'ROUNDUP AMONIO'
		},{
			nombre: 'ROUNDUP CONTROL MAX'
		},{
			nombre: 'ROUNDUP FG'
		},{
			nombre: 'ROUNDUP FGL'
		},{
			nombre: 'ROUNDUP FLY'
		},{
			nombre: 'ROUNDUP FULL'
		},{
			nombre: 'ROUNDUP FULL II'
		},{
			nombre: 'ROUNDUP FULL II M'
		},{
			nombre: 'ROUNDUP MAX'
		},{
			nombre: 'ROUNDUP MAX II'
		},{
			nombre: 'ROUNDUP ULTRAMAX'
		},{
			nombre: 'SINOMAX 75,7'
		},{
			nombre: 'SIR GLIFO'
		},{
			nombre: 'SITRIN'
		},{
			nombre: 'SMART GR'
		},{
			nombre: 'SNIPER TM'
		},{
			nombre: 'SOLVER PRO'
		},{
			nombre: 'SPRINT-GLIF'
		},{
			nombre: 'SULFO BAC 62'
		},{
			nombre: 'SULFOSATO TOUCHDOWN'
		},{
			nombre: 'SULFOSATO TOUCHDOWN S'
		},{
			nombre: 'SUPER ESTRELLA GR'
		},{
			nombre: 'SUPER ESTRELLA GR ACA'
		},{
			nombre: 'SUPER ESTRELLA II'
		},{
			nombre: 'SUPER ESTRELLA II 66,2'
		},{
			nombre: 'SUPER ESTRELLA II ACA'
		},{
			nombre: 'SUPER ESTRELLA II SL'
		},{
			nombre: 'SUPER KNOCK AGM'
		},{
			nombre: 'SUPER KNOCK DVA'
		},{
			nombre: 'SUPERESTRELLA'
		},{
			nombre: 'TELLUS GLIFOSATO'
		},{
			nombre: 'THOR 75,7 SG'
		},{
			nombre: 'TIRADOR 66,2'
		},{
			nombre: 'TOTAL PLUS'
		},{
			nombre: 'TOTAL SUPER'
		},{
			nombre: 'TOTAL SUPER SG'
		},{
			nombre: 'TOTAL SUPER WDG'
		},{
			nombre: 'TOUCHDOWN HI TECH'
		},{
			nombre: 'VENDAVAL GLIFOSATO '
		},{
			nombre: 'VENDAVAL GLIFOSATO 48 L'
		},{
			nombre: 'VULCAN 50'
		},{
			nombre: 'VULCAN 55'
		},{
			nombre: 'WEEDS OFF'
		},{
			nombre: 'WEYCHAN '
		},{
			nombre: 'WIPE OUT'
		},{
			nombre: 'WYNCA 75,7'
		},{
			nombre: 'WYNCA MAX'
		},{
			nombre: 'XINAN MAX'
		},{
			nombre: 'XINAN POWER'
		},{
			nombre: 'XINAN SUNDER'
		},{
			nombre: 'ZONDA'
		},{
			nombre: 'GIANT'
		},{
			nombre: 'GIANT SURCOS'
		},{
			nombre: 'MAGMA'
		},{
			nombre: 'MESTIZO'
		},{
			nombre: 'TRIPLO'
		},{
			nombre: 'ONESHOT'
		},{
			nombre: 'ALTEZA'
		},{
			nombre: 'ESTOQUE'
		},{
			nombre: 'ESTRELLA IMI PLUS'
		},{
			nombre: 'FLIER'
		},{
			nombre: 'GENTOPYR'
		},{
			nombre: 'GLIF-IMAX RAINBOW'
		},{
			nombre: 'LIMIT'
		},{
			nombre: 'LINCE'
		},{
			nombre: 'MAGNUM FLIX'
		},{
			nombre: 'ONEWAY'
		},{
			nombre: 'QUEEN SIGMA'
		},{
			nombre: 'REALEZA RED SURCOS'
		},{
			nombre: 'REALEZA SURCOS'
		},{
			nombre: 'SEQUENCE'
		},{
			nombre: 'GLIFACYT COMPLETO'
		},{
			nombre: 'BASTA SL'
		},{
			nombre: 'GLUFAIR'
		},{
			nombre: 'GLUFO ACTION'
		},{
			nombre: 'GLUFOREVER'
		},{
			nombre: 'GLUFOSINATO CAMPO'
		},{
			nombre: 'GLUFOSINATO RAINBOW'
		},{
			nombre: 'LIBERTY'
		},{
			nombre: 'LIFELINE'
		},{
			nombre: 'TIMON'
		},{
			nombre: 'ADAMA ESSENTIALS KENOPEL 40'
		},{
			nombre: 'SEMPRA'
		},{
			nombre: 'GRAMAX 54'
		},{
			nombre: 'ORCUSS ELITE'
		},{
			nombre: 'ADAMA ESSENTIALS AZUR'
		},{
			nombre: 'CATEDRAL'
		},{
			nombre: 'GALANT HL'
		},{
			nombre: 'GRAMEX'
		},{
			nombre: 'HALAXY'
		},{
			nombre: 'HALOMAX'
		},{
			nombre: 'HALOMAX 12,5'
		},{
			nombre: 'HALOMAX HIGH'
		},{
			nombre: 'HALOXI CROP'
		},{
			nombre: 'HALOXIFOP 12,5 SIGMA'
		},{
			nombre: 'HALOXIFOP 54 RAINBOW'
		},{
			nombre: 'HALOXIFOP AS'
		},{
			nombre: 'TOPLOX'
		},{
			nombre: 'VERDICT HL'
		},{
			nombre: 'BAJADOR ZAMBA'
		},{
			nombre: 'BOOMERANG'
		},{
			nombre: 'BRIGHT'
		},{
			nombre: 'EAGLE'
		},{
			nombre: 'EMBLEM MAXX'
		},{
			nombre: 'EMBLEM NUFARM'
		},{
			nombre: 'GALANT R'
		},{
			nombre: 'GALANT R LPU'
		},{
			nombre: 'GLINT'
		},{
			nombre: 'GURU'
		},{
			nombre: 'HALIZAN AGM'
		},{
			nombre: 'HALO PLUS'
		},{
			nombre: 'HALO READY'
		},{
			nombre: 'HALOX 12,5'
		},{
			nombre: 'HALOX 3,11 LPU'
		},{
			nombre: 'HALOX 54'
		},{
			nombre: 'HALOX LQ 12,5'
		},{
			nombre: 'HALOXI LPU ARN EBC'
		},{
			nombre: 'HALOXI MAX 24'
		},{
			nombre: 'HALOXIFOP 12,5 BRANAGRO'
		},{
			nombre: 'HALOXIFOP 12,5 MELTHIS'
		},{
			nombre: 'HALOXIFOP 12,5 NUFARM'
		},{
			nombre: 'HALOXIFOP 12,5 RAINBOW'
		},{
			nombre: 'HALOXIFOP 12,5 SINER'
		},{
			nombre: 'HALOXIFOP 24 DVA'
		},{
			nombre: 'HALOXIFOP BIESTERFELD '
		},{
			nombre: 'HALOXIFOP MELTHIS'
		},{
			nombre: 'HALOXIFOP P METIL 12,5 STOCKTON'
		},{
			nombre: 'HALOXY 12 ZAMBA'
		},{
			nombre: 'HAPMET'
		},{
			nombre: 'KAIKEN'
		},{
			nombre: 'KATANA'
		},{
			nombre: 'LGANT 54'
		},{
			nombre: 'MATADOR 24 EC'
		},{
			nombre: 'MATADOR 54 EC'
		},{
			nombre: 'ORCUSS'
		},{
			nombre: 'RUCK'
		},{
			nombre: 'STARXIFOP LPU'
		},{
			nombre: 'VELOCITY'
		},{
			nombre: 'MIRAGE HL'
		},{
			nombre: 'AJUSTE ROTAM'
		},{
			nombre: 'SILCAS'
		},{
			nombre: 'SILWET L AG'
		},{
			nombre: 'BREAK THRU'
		},{
			nombre: 'RIZOWET'
		},{
			nombre: 'BLIN EXA 5 SC'
		},{
			nombre: 'EXACTO 5 SC'
		},{
			nombre: 'BROKER 75 WG'
		},{
			nombre: 'ZINO 75 WG'
		},{
			nombre: 'NISSORUM'
		},{
			nombre: 'ROYAL MH'
		},{
			nombre: 'SUCKER 80'
		},{
			nombre: 'SUCKER L 36'
		},{
			nombre: 'VENDAVAL HM 36 POTASICO'
		},{
			nombre: 'CHAMP DP'
		},{
			nombre: 'CHAMPION WP'
		},{
			nombre: 'HIDRO COBRE WG'
		},{
			nombre: 'HIDROCOB'
		},{
			nombre: 'HIDRO-CUP WG'
		},{
			nombre: 'HIDROXICOBRE 35 WG'
		},{
			nombre: 'HIDROXICOBRE 50 WP'
		},{
			nombre: 'HIDROXICUB BROMETAN'
		},{
			nombre: 'HIDROXISUPER'
		},{
			nombre: 'HYDROMICRON 77 SALDECO'
		},{
			nombre: 'KOCIDE WG'
		},{
			nombre: 'QUESTURAM'
		},{
			nombre: 'SAX'
		},{
			nombre: 'ADAMA ESSENTIALS XEDREL 50'
		},{
			nombre: 'AZIERTO PLUS'
		},{
			nombre: 'DECCOZIL 50'
		},{
			nombre: 'FUNGAFLOR 50 EC'
		},{
			nombre: 'FUNGAFLOR 75 SP'
		},{
			nombre: 'IMAZACURE 50 EC'
		},{
			nombre: 'SWEEPER 70 DG'
		},{
			nombre: 'TRIGOSOL'
		},{
			nombre: 'CLEARSOL PLUS'
		},{
			nombre: 'ADAMA ESSENTIALS PANORAMIC'
		},{
			nombre: 'CADRE 70 DG'
		},{
			nombre: 'HARLEY'
		},{
			nombre: 'HARLEY WG'
		},{
			nombre: 'IMAZAPIC LINE'
		},{
			nombre: 'MANIAC'
		},{
			nombre: 'METOLAN'
		},{
			nombre: 'PROTEMANI'
		},{
			nombre: 'ONDUTY'
		},{
			nombre: 'TITAN '
		},{
			nombre: 'TOP RICE'
		},{
			nombre: 'TOPCORN'
		},{
			nombre: 'PROTEMAIZ'
		},{
			nombre: 'ADAMA ESSENTIALS IMATRON FORESTAL'
		},{
			nombre: 'ADAMA ESSENTIALS SUNSHINE'
		},{
			nombre: 'ARSENAL'
		},{
			nombre: 'ARSENAL FORESTAL'
		},{
			nombre: 'ARSENAL FORESTAL DF'
		},{
			nombre: 'CLEARSOL'
		},{
			nombre: 'CLEARSOL DF'
		},{
			nombre: 'CULTIFIX DF'
		},{
			nombre: 'EPSILON'
		},{
			nombre: 'INDIGO'
		},{
			nombre: 'KATRIN'
		},{
			nombre: 'KATRIN 80'
		},{
			nombre: 'KATRIN FORESTAL'
		},{
			nombre: 'MAZA'
		},{
			nombre: 'PROTESOL'
		},{
			nombre: 'ADAMA MAYORAL'
		},{
			nombre: 'AMISTAR TOP'
		},{
			nombre: 'KIFIX'
		},{
			nombre: 'ADAMA ESSENTIALS TOPGAN'
		},{
			nombre: 'SCEPTER'
		},{
			nombre: 'SCEPTER 70 DG'
		},{
			nombre: 'ADAMA ESSENTIALS AZTEK'
		},{
			nombre: 'ADAMA ESSENTIALS VEZIR'
		},{
			nombre: 'ARAZETAPIR 10'
		},{
			nombre: 'ARCA'
		},{
			nombre: 'AVANTI'
		},{
			nombre: 'AVATAR 10 SL'
		},{
			nombre: 'AVATAR 70 WDG'
		},{
			nombre: 'BACKFIRE'
		},{
			nombre: 'BUNKAI'
		},{
			nombre: 'COSTAL'
		},{
			nombre: 'DERBY'
		},{
			nombre: 'DESTINY 70 WG'
		},{
			nombre: 'DETECTOR'
		},{
			nombre: 'DINAMAZ'
		},{
			nombre: 'DINAMAZ 70 S'
		},{
			nombre: 'DINAMAZ 75'
		},{
			nombre: 'ELUNEY'
		},{
			nombre: 'FARNEX 75'
		},{
			nombre: 'FENIX 10,6'
		},{
			nombre: 'GREENGO'
		},{
			nombre: 'HONOR'
		},{
			nombre: 'I ZETA'
		},{
			nombre: 'IMATOP'
		},{
			nombre: 'IMAZETAPIR 10 AGM'
		},{
			nombre: 'IMAZETAPIR 10 DVA'
		},{
			nombre: 'IMAZETAPIR 10 MELTHIS'
		},{
			nombre: 'IMAZETAPIR 10 PHILAGRO'
		},{
			nombre: 'IMAZETAPIR 10 RAINBOW'
		},{
			nombre: 'IMAZETAPIR 10,6 SIGMA'
		},{
			nombre: 'IMAZETAPIR 75 AGM'
		},{
			nombre: 'IMAZETAPIR 75 DVA'
		},{
			nombre: 'IMAZETAPIR 75 GR RURALCO'
		},{
			nombre: 'IMAZETAPIR 80 HUAGRO'
		},{
			nombre: 'IMAZETAPIR AFA 10'
		},{
			nombre: 'IMAZETAPIR ASSA'
		},{
			nombre: 'IMAZETAPIR BH'
		},{
			nombre: 'IMAZETAPIR BIESTERFELD 10 SL'
		},{
			nombre: 'IMAZETAPIR LINE'
		},{
			nombre: 'IMAZETAPIR SIGMA'
		},{
			nombre: 'IMAZETAPYR 10,6 NUFARM'
		},{
			nombre: 'IMAZETAPYR 70 RAINBOW'
		},{
			nombre: 'IMIZET ACA 10'
		},{
			nombre: 'INDIGO ELITE'
		},{
			nombre: 'INITOS'
		},{
			nombre: 'INOVAT'
		},{
			nombre: 'MADDOX'
		},{
			nombre: 'MADDOX 10'
		},{
			nombre: 'MADDOX PLUS'
		},{
			nombre: 'MADDOX-S'
		},{
			nombre: 'MAJESTY'
		},{
			nombre: 'MAJESTY GOLD'
		},{
			nombre: 'OBJECT'
		},{
			nombre: 'OBJECT R'
		},{
			nombre: 'OBJECT T'
		},{
			nombre: 'PHILZAPYR'
		},{
			nombre: 'PHILZAPYR 10'
		},{
			nombre: 'PIVOT'
		},{
			nombre: 'PIVOT 70  DG'
		},{
			nombre: 'PIVOT H'
		},{
			nombre: 'PROTEMAZ IZP 10,6%'
		},{
			nombre: 'QUARZ'
		},{
			nombre: 'ROBLE'
		},{
			nombre: 'SAGAZ 10'
		},{
			nombre: 'SCRUM'
		},{
			nombre: 'SEGAL'
		},{
			nombre: 'SIWAR'
		},{
			nombre: 'TAPIR  '
		},{
			nombre: 'TAPIR 10'
		},{
			nombre: 'TAPIR 70 WG'
		},{
			nombre: 'TECZAPYR'
		},{
			nombre: 'THUNDERACT'
		},{
			nombre: 'VENDAVAL IMAZETAPIR 22'
		},{
			nombre: 'VEROSIL'
		},{
			nombre: 'VERSOIL 70'
		},{
			nombre: 'XCALIBUR'
		},{
			nombre: 'ZAMPYR'
		},{
			nombre: 'ZETAPYR'
		},{
			nombre: 'FABIAN'
		},{
			nombre: 'CRISTAL'
		},{
			nombre: 'INTERFIELD'
		},{
			nombre: 'LIGHTNING'
		},{
			nombre: 'MAIZ PROTECTOR'
		},{
			nombre: 'OPTILL'
		},{
			nombre: 'ACTION SEED 70'
		},{
			nombre: 'ADAMA ESSENTIALS KOHINOR 35 SC'
		},{
			nombre: 'ADAMA ESSENTIALS KOHINOR 70 WG'
		},{
			nombre: 'ADAMA ESSENTIALS SEEDOPRID 60 FS'
		},{
			nombre: 'ALIADO'
		},{
			nombre: 'APPALUS 20 SC'
		},{
			nombre: 'ARAIMIDA 60 SC'
		},{
			nombre: 'ARAIMIDACLOPRID 35'
		},{
			nombre: 'AZOR'
		},{
			nombre: 'AZOTE'
		},{
			nombre: 'BRAVO'
		},{
			nombre: 'CABURE'
		},{
			nombre: 'CASSIUS 35'
		},{
			nombre: 'CENTINELA'
		},{
			nombre: 'CHINGON 60'
		},{
			nombre: 'CIGARAL 60 FS'
		},{
			nombre: 'CIGARAL 70 WP'
		},{
			nombre: 'CIGARAL 70 WS'
		},{
			nombre: 'CKC IMIDA 70'
		},{
			nombre: 'CONFIDOR 35 SC'
		},{
			nombre: 'CONFIDOR 70 WG'
		},{
			nombre: 'CONFIDOR OD'
		},{
			nombre: 'CONTROL IMIDA'
		},{
			nombre: 'COVERSEED'
		},{
			nombre: 'CROSS'
		},{
			nombre: 'DAARGUS IMIDA 35'
		},{
			nombre: 'DAARGUS IMIDA ST'
		},{
			nombre: 'DINGO'
		},{
			nombre: 'ESPOLETA'
		},{
			nombre: 'ESTRIBO'
		},{
			nombre: 'FACON'
		},{
			nombre: 'FACYT IMPID'
		},{
			nombre: 'FERRERO IMIDA 35'
		},{
			nombre: 'FOZIL 35'
		},{
			nombre: 'GAUCHO 60 FS'
		},{
			nombre: 'GAUCHO 60 FS INCOLORO SEMILLERO'
		},{
			nombre: 'GLACOXAN H'
		},{
			nombre: 'GUAPO'
		},{
			nombre: 'GUAPO 60'
		},{
			nombre: 'ICOPRID 70 WP'
		},{
			nombre: 'IMAXI SC'
		},{
			nombre: 'IMI MAX'
		},{
			nombre: 'IMI MAX FLOW'
		},{
			nombre: 'IMI SEED'
		},{
			nombre: 'IMI SEED FLOW'
		},{
			nombre: 'IMIDA 35 DVA'
		},{
			nombre: 'IMIDA 35 KEMSURE'
		},{
			nombre: 'IMIDA 60 FS SUMAGRO'
		},{
			nombre: 'IMIDA 60 PHILAGRO'
		},{
			nombre: 'IMIDA 60 SEMILLERO'
		},{
			nombre: 'IMIDA 70 DVA'
		},{
			nombre: 'IMIDA 70 WG BIESTERFELD'
		},{
			nombre: 'IMIDA 70 WS DVA'
		},{
			nombre: 'IMIDA ASP 35'
		},{
			nombre: 'IMIDA JNG 35'
		},{
			nombre: 'IMIDA JNG 60'
		},{
			nombre: 'IMIDA JNG 70 WP'
		},{
			nombre: 'IMIDA NOVA 35'
		},{
			nombre: 'IMIDA NOVA 60'
		},{
			nombre: 'IMIDA SHARDA 60'
		},{
			nombre: 'IMIDACLOPRID 35 AFA'
		},{
			nombre: 'IMIDACLOPRID 35 ARN EBC'
		},{
			nombre: 'IMIDACLOPRID 35 FARM CHEMICALS'
		},{
			nombre: 'IMIDACLOPRID 35 MARKETING AGRICOLA'
		},{
			nombre: 'IMIDACLOPRID 35 RAINBOW'
		},{
			nombre: 'IMIDACLOPRID 35 SUMAGRO'
		},{
			nombre: 'IMIDACLOPRID 60 CIBELES'
		},{
			nombre: 'IMIDACLOPRID 60 FARM CHEMICALS'
		},{
			nombre: 'IMIDACLOPRID 60 MIRKA'
		},{
			nombre: 'IMIDACLOPRID 70 ARN EBC'
		},{
			nombre: 'IMIDACLOPRID 70 MARKETING AGRICOLA'
		},{
			nombre: 'IMIDACLOPRID 70 RAINBOW'
		},{
			nombre: 'IMIDACLOPRID 70 WP AGROSPEC'
		},{
			nombre: 'IMIDACLOPRID 75 AGM'
		},{
			nombre: 'IMIDACLOPRID 75 DVA'
		},{
			nombre: 'IMIDACLOPRID AFA 35'
		},{
			nombre: 'IMIDACLOPRID CKC'
		},{
			nombre: 'IMIDACLOPRID PERICON'
		},{
			nombre: 'IMIDACLOPRID SHARDA 20'
		},{
			nombre: 'IMIDACLOPRID SHARDA 35'
		},{
			nombre: 'IMIDACLOPRID SHARDA 70 WG'
		},{
			nombre: 'IMIDACLOPRID SHARDA 70 WS'
		},{
			nombre: 'IMIDACLOPRID SQ 60'
		},{
			nombre: 'IMIDAGOLD FS'
		},{
			nombre: 'KAISER 70'
		},{
			nombre: 'KONDOR AGROS'
		},{
			nombre: 'KONDOR AGROS'
		},{
			nombre: 'KONDOR II AGROS'
		},{
			nombre: 'KRONEK SC 35'
		},{
			nombre: 'KRONEX'
		},{
			nombre: 'KRONEX 35'
		},{
			nombre: 'KRONEX 60 ST'
		},{
			nombre: 'KRONEX SEMILLERO'
		},{
			nombre: 'KRONEX TS'
		},{
			nombre: 'MAPUCHE 35'
		},{
			nombre: 'MAPUCHE 60'
		},{
			nombre: 'MATRERO 35'
		},{
			nombre: 'MATRERO 60 FS'
		},{
			nombre: 'MATRERO 70 WG'
		},{
			nombre: 'MELTHIS SEED'
		},{
			nombre: 'MIDASH 70 WP'
		},{
			nombre: 'NVG 60'
		},{
			nombre: 'PERICON FOLIAR 60 SC'
		},{
			nombre: 'PHANTOM MAX'
		},{
			nombre: 'PHIL IMIDA 60'
		},{
			nombre: 'PHILIMIDA FOLIAR'
		},{
			nombre: 'PICUS 60 SEMILLERO'
		},{
			nombre: 'PILARKING'
		},{
			nombre: 'PRONTO'
		},{
			nombre: 'PUNTO 35'
		},{
			nombre: 'PUNTO 60'
		},{
			nombre: 'PUNTO 60 SEMILLERO'
		},{
			nombre: 'PUNTO 70 WP'
		},{
			nombre: 'PUNTO 7O % WP'
		},{
			nombre: 'REBENQUE'
		},{
			nombre: 'RECORD SURCOS'
		},{
			nombre: 'SALUZI 60 FS'
		},{
			nombre: 'SALUZI SEMILLERO'
		},{
			nombre: 'SHODAN'
		},{
			nombre: 'SOWER INLAND'
		},{
			nombre: 'SOWER INLAND SEMILLERO'
		},{
			nombre: 'SPINGARD 35'
		},{
			nombre: 'USGUR'
		},{
			nombre: 'VENDAVAL IMIDACOPRID 35'
		},{
			nombre: 'VITAL'
		},{
			nombre: 'WARRANT 70 WG'
		},{
			nombre: 'ZAINO ZURCOS'
		},{
			nombre: 'ZAPRET FS'
		},{
			nombre: 'FACYT MALON'
		},{
			nombre: 'FAST ULTRA'
		},{
			nombre: 'OILPRID'
		},{
			nombre: 'CONNECT'
		},{
			nombre: 'SLING PLUS'
		},{
			nombre: 'SOLOMON O-TEQ'
		},{
			nombre: 'ADAMA GALIL'
		},{
			nombre: 'BIPOWER MAX SUMAGRO'
		},{
			nombre: 'BYFEX'
		},{
			nombre: 'ENERGY'
		},{
			nombre: 'KHOSPI'
		},{
			nombre: 'SICURO'
		},{
			nombre: 'OVALO'
		},{
			nombre: 'TOTEM POWER'
		},{
			nombre: 'ARAIMILAMBDA'
		},{
			nombre: 'BIAGRO MZ DUO'
		},{
			nombre: 'BOREY'
		},{
			nombre: 'CAZADOR'
		},{
			nombre: 'CIANEX AGROS'
		},{
			nombre: 'CIANEX II AGROS'
		},{
			nombre: 'COMBA'
		},{
			nombre: 'FUERTES'
		},{
			nombre: 'GALGOMET'
		},{
			nombre: 'IMIDA + LAMBDA AFA'
		},{
			nombre: 'IMIDA-LAM ARN EBC'
		},{
			nombre: 'MAS'
		},{
			nombre: 'MASS'
		},{
			nombre: 'MIDATRIN'
		},{
			nombre: 'PUELCHE'
		},{
			nombre: 'RASH'
		},{
			nombre: 'SIMBIOSIS WDG'
		},{
			nombre: 'SYNERGY'
		},{
			nombre: 'TOUCHE'
		},{
			nombre: 'TOUCHE ULTRA WG'
		},{
			nombre: 'UNION MAX'
		},{
			nombre: 'VENDAVAL DUO'
		},{
			nombre: 'ARTILLERO'
		},{
			nombre: 'COMBA XTRA'
		},{
			nombre: 'CYCLON'
		},{
			nombre: 'M.I.R. KEMSURE'
		},{
			nombre: 'MASTRIN'
		},{
			nombre: 'TRIUNFO'
		},{
			nombre: 'VENGADOR'
		},{
			nombre: 'CYCLON PLUS'
		},{
			nombre: 'GRIZLY'
		},{
			nombre: 'ADAMA GRIZLY MAX'
		},{
			nombre: 'PRESTIGE 29 FS'
		},{
			nombre: 'MOVENTO PLUS'
		},{
			nombre: 'ALIANZA'
		},{
			nombre: 'DUOSEED AGROS'
		},{
			nombre: 'DUOSEED II AGROS'
		},{
			nombre: 'DUPLO '
		},{
			nombre: 'ESCOLTA'
		},{
			nombre: 'JOINT DVA'
		},{
			nombre: 'MIDTEB SC'
		},{
			nombre: 'NUPRID MAX'
		},{
			nombre: 'TEBUPRID SQ'
		},{
			nombre: 'URUPRID'
		},{
			nombre: 'YUNTA'
		},{
			nombre: 'YUNTA ZAMBA'
		},{
			nombre: 'CROPSTAR 60 FS'
		},{
			nombre: 'GOLIATH'
		},{
			nombre: 'ALION'
		},{
			nombre: 'ESPLANADE'
		},{
			nombre: 'AVAUNT'
		},{
			nombre: 'PERCUTOR'
		},{
			nombre: 'WIPE OD'
		},{
			nombre: 'HUSSAR OD'
		},{
			nombre: 'HUSSAR OF'
		},{
			nombre: 'MANDIL ZAMBA'
		},{
			nombre: 'HUSSAR PLUS'
		},{
			nombre: 'CRUSOE'
		},{
			nombre: 'RANCONA 2'
		},{
			nombre: 'RANCONA 45 FS SEMILLERO'
		},{
			nombre: 'RANCONA ME'
		},{
			nombre: 'DIMENSION'
		},{
			nombre: 'RANCONA DIMENSION  '
		},{
			nombre: 'RANCONA DIMENSION SEMILLERO'
		},{
			nombre: 'ABRIL 50 CURASEMILLA'
		},{
			nombre: 'ABRIL 50 SC'
		},{
			nombre: 'IPPON 50 SC'
		},{
			nombre: 'ROVRAL'
		},{
			nombre: 'ROVRAL 50 WP'
		},{
			nombre: 'ROVRAL TS'
		},{
			nombre: 'SHIP'
		},{
			nombre: 'SOWER ULTRA'
		},{
			nombre: 'MELODY DUO'
		},{
			nombre: 'REFLECT XTRA'
		},{
			nombre: 'FORDOR'
		},{
			nombre: 'ADENGO'
		},{
			nombre: 'KASUMIN 2'
		},{
			nombre: 'STIMULATE'
		},{
			nombre: 'STROBY SC'
		},{
			nombre: 'HOWLER'
		},{
			nombre: 'DUOZOLE MAXX'
		},{
			nombre: 'TERABIT'
		},{
			nombre: 'HUCK 24 EC'
		},{
			nombre: 'KUNZE'
		},{
			nombre: 'MILLION'
		},{
			nombre: 'ACOPITRINA NF'
		},{
			nombre: 'ADAMA ESSENTIALS LAMDEX'
		},{
			nombre: 'AIKIDO'
		},{
			nombre: 'AIKIDO'
		},{
			nombre: 'APERO ZAMBA'
		},{
			nombre: 'ARALAMBDA 5'
		},{
			nombre: 'ARREO'
		},{
			nombre: 'BABESLEA'
		},{
			nombre: 'BLIZZARD LAMBDACIALOTRINA KEMSURE'
		},{
			nombre: 'BLOQUIUM'
		},{
			nombre: 'CILAMBDA AGROS'
		},{
			nombre: 'CILAMBDA MICROACTIVE'
		},{
			nombre: 'CLIPEUS'
		},{
			nombre: 'CLIPEUS MAX'
		},{
			nombre: 'CONTROL LAMBDA'
		},{
			nombre: 'CROPMAX LAMBDA 5'
		},{
			nombre: 'DAARGUS LAMBDA'
		},{
			nombre: 'FENOTRINA NF'
		},{
			nombre: 'FERRERO KID'
		},{
			nombre: 'HAKA'
		},{
			nombre: 'HAKA 25'
		},{
			nombre: 'JION'
		},{
			nombre: 'KAISO'
		},{
			nombre: 'KARATE ZEON 5 CS'
		},{
			nombre: 'KARATE® CON TECNOLOGIA ZEON™'
		},{
			nombre: 'KENDO'
		},{
			nombre: 'KENDO GOLD'
		},{
			nombre: 'LABEL'
		},{
			nombre: 'LABEL SURCOS'
		},{
			nombre: 'LAMBDA 24 NUFARM'
		},{
			nombre: 'LAMBDA 25 AGM'
		},{
			nombre: 'LAMBDA 25 DVA'
		},{
			nombre: 'LAMBDA 5 AGM'
		},{
			nombre: 'LAMBDA 5 AS'
		},{
			nombre: 'LAMBDA 5 DVA'
		},{
			nombre: 'LAMBDA 5 GREEN CROPS'
		},{
			nombre: 'LAMBDA 5 HELM'
		},{
			nombre: 'LAMBDA 5 MELTHIS'
		},{
			nombre: 'LAMBDA 5 SUMAGRO '
		},{
			nombre: 'LAMBDA AGH'
		},{
			nombre: 'LAMBDA ASP 5'
		},{
			nombre: 'LAMBDA ATANOR'
		},{
			nombre: 'LAMBDA JNG'
		},{
			nombre: 'LAMBDA LINE'
		},{
			nombre: 'LAMBDA LQ'
		},{
			nombre: 'LAMBDA LQ 5'
		},{
			nombre: 'LAMBDA MICROCAP 25'
		},{
			nombre: 'LAMBDA NOVA'
		},{
			nombre: 'LAMBDA NOVA 5'
		},{
			nombre: 'LAMBDA S CS AGM'
		},{
			nombre: 'LAMBDA SIGMA'
		},{
			nombre: 'LAMBDA SQ 5'
		},{
			nombre: 'LAMBDACIALOTRINA 5 AFA'
		},{
			nombre: 'LAMBDACIALOTRINA 5 ARN EBC'
		},{
			nombre: 'LAMBDACIALOTRINA 5 CS AFA'
		},{
			nombre: 'LAMBDACIALOTRINA 5 EC AFA'
		},{
			nombre: 'LAMBDACIALOTRINA 5 EC NUFARM'
		},{
			nombre: 'LAMBDACIALOTRINA 5% IYASI'
		},{
			nombre: 'LAMBDACIALOTRINA 5% MARKETING AGRICOLA'
		},{
			nombre: 'LAMBDACIALOTRINA AFA'
		},{
			nombre: 'LAMBDACIALOTRINA MARKETING AGRICOLA'
		},{
			nombre: 'LAMBDACIALOTRINA NUFARM'
		},{
			nombre: 'LAMBDACIALOTRINA TECNOMYL'
		},{
			nombre: 'LAMBDAMAX'
		},{
			nombre: 'LAMBDASS'
		},{
			nombre: 'LAMBDATRIN'
		},{
			nombre: 'LAMBDCIALOTRINA 5 BIESTERFELD'
		},{
			nombre: 'LAMDA 25 RAINBOW'
		},{
			nombre: 'LAMDANOR 5'
		},{
			nombre: 'LANDA'
		},{
			nombre: 'MALEVO'
		},{
			nombre: 'MALEVO PLUS'
		},{
			nombre: 'MANTIS'
		},{
			nombre: 'MANTO'
		},{
			nombre: 'MANTO 25'
		},{
			nombre: 'MICROLAMB 25 SC'
		},{
			nombre: 'NABIS'
		},{
			nombre: 'OBULUS'
		},{
			nombre: 'OBULUS 5'
		},{
			nombre: 'OBULUS F'
		},{
			nombre: 'PHILLAMBDA'
		},{
			nombre: 'PHILLAMBDA 25 ME'
		},{
			nombre: 'PILARMDA'
		},{
			nombre: 'PULSAR'
		},{
			nombre: 'PYXIS'
		},{
			nombre: 'RAFTER '
		},{
			nombre: 'SABIUS'
		},{
			nombre: 'SABLE'
		},{
			nombre: 'SCUD 25'
		},{
			nombre: 'SENSEI'
		},{
			nombre: 'SHAMDA 5 EC'
		},{
			nombre: 'SPARVIERO'
		},{
			nombre: 'TOQUE ACA'
		},{
			nombre: 'TOREG'
		},{
			nombre: 'VENDAVAL LAMBDA BIO'
		},{
			nombre: 'VOLTEO STK'
		},{
			nombre: 'ZENITH'
		},{
			nombre: 'ZENITH SURCOS'
		},{
			nombre: 'ZERO '
		},{
			nombre: 'CHALTU'
		},{
			nombre: 'CROPMAX LAMBDA 5 EC'
		},{
			nombre: 'GLAMOUR'
		},{
			nombre: 'LAMBDA MICRO 25 AEC'
		},{
			nombre: 'MAESTRO'
		},{
			nombre: 'RAPIER'
		},{
			nombre: 'SPECTOR 25'
		},{
			nombre: 'OCTANO'
		},{
			nombre: 'MARDER'
		},{
			nombre: 'AMPLIGO'
		},{
			nombre: 'EXTERMIN'
		},{
			nombre: 'GUAZUNCHO'
		},{
			nombre: 'KANT'
		},{
			nombre: 'MAGNETO'
		},{
			nombre: 'PERFECTO'
		},{
			nombre: 'PERFECTO AGM'
		},{
			nombre: 'PODER'
		},{
			nombre: 'TOUCHE ULTRA'
		},{
			nombre: 'UNION MAX ACA'
		},{
			nombre: 'VIPOWER'
		},{
			nombre: 'ACREDI'
		},{
			nombre: 'COSMIC'
		},{
			nombre: 'EFORIA'
		},{
			nombre: 'CHECK MATE VMB'
		},{
			nombre: 'BIOLECIT'
		},{
			nombre: 'GROW ULTRA'
		},{
			nombre: 'IDENTITY'
		},{
			nombre: 'L-CITINA FULL STICK'
		},{
			nombre: 'LECITHIN MAX'
		},{
			nombre: 'LECITHIN SILICON MAX'
		},{
			nombre: 'LECITINA MIRKA'
		},{
			nombre: 'OLINK SILICONADO'
		},{
			nombre: 'PLATAFORMA SILICONADO'
		},{
			nombre: 'PLENIUM ECO MAX'
		},{
			nombre: 'SCOUT'
		},{
			nombre: 'SERBAC ECO'
		},{
			nombre: 'DRIVER'
		},{
			nombre: 'SCOUT XTRA'
		},{
			nombre: 'SISTEMAX ACA'
		},{
			nombre: 'SUMA'
		},{
			nombre: 'LI PLUS'
		},{
			nombre: 'FRANCHISE'
		},{
			nombre: 'LIBERATE'
		},{
			nombre: 'ADAMA ESSENTIALS LINURON 50 FW'
		},{
			nombre: 'ADAMA RSSENTIALS LINUREX'
		},{
			nombre: 'EDOM 50'
		},{
			nombre: 'HURON '
		},{
			nombre: 'IPIRON 50 SC'
		},{
			nombre: 'YUVAL 50'
		},{
			nombre: 'ANTU'
		},{
			nombre: 'ASTRIS'
		},{
			nombre: 'BRETE'
		},{
			nombre: 'BRETON'
		},{
			nombre: 'LOFT  '
		},{
			nombre: 'LUCIFER 5'
		},{
			nombre: 'LUFEN 5 EC'
		},{
			nombre: 'LUFENURON 5 DVA'
		},{
			nombre: 'LUFENURON 5 RAINBOW'
		},{
			nombre: 'MATCH'
		},{
			nombre: 'MEMPHIS'
		},{
			nombre: 'NATIUR'
		},{
			nombre: 'PIREO'
		},{
			nombre: 'ROFEN'
		},{
			nombre: 'SHOEI'
		},{
			nombre: 'COMPACT'
		},{
			nombre: 'GENDARME'
		},{
			nombre: 'HOOD'
		},{
			nombre: 'JUSTICIERO'
		},{
			nombre: 'ZODIAC'
		},{
			nombre: 'CIVIC'
		},{
			nombre: 'ADRESS'
		},{
			nombre: 'ATAJO ZAMBA'
		},{
			nombre: 'CURADOR'
		},{
			nombre: 'CURYOM'
		},{
			nombre: 'LOFT EXTRA'
		},{
			nombre: 'ORID'
		},{
			nombre: 'PROMETEO'
		},{
			nombre: 'QUIRON'
		},{
			nombre: 'HERBA GLEX'
		},{
			nombre: 'MATAYUYOS SELECTIVO MCPA'
		},{
			nombre: 'MCPA 28 NUFARM'
		},{
			nombre: 'VENDAVAL M.C.P.A'
		},{
			nombre: 'ANCOSAR 96'
		},{
			nombre: 'ARSONEX'
		},{
			nombre: 'CAMPO MSMA'
		},{
			nombre: 'CAMPOSAR 72'
		},{
			nombre: 'HACHA'
		},{
			nombre: 'HACHA 79'
		},{
			nombre: 'MASEM 72'
		},{
			nombre: 'MATKA'
		},{
			nombre: 'MATKA 79'
		},{
			nombre: 'MSMA 72 ANCOM'
		},{
			nombre: 'MSMA 72 BROMETAN'
		},{
			nombre: 'MSMA GLEX'
		},{
			nombre: 'MSMA MARKETING AGRICOLA'
		},{
			nombre: 'MSMAX'
		},{
			nombre: 'MSMAX 72'
		},{
			nombre: 'PLASMA 72'
		},{
			nombre: 'VESUVIO'
		},{
			nombre: 'VESUVIO 79'
		},{
			nombre: 'NOVACTION'
		},{
			nombre: 'CAMPOZEB 80'
		},{
			nombre: 'CANDIL'
		},{
			nombre: 'CERKO'
		},{
			nombre: 'COMPLEX'
		},{
			nombre: 'DERTHORAM 40 FW'
		},{
			nombre: 'DITHANE DF'
		},{
			nombre: 'DITHANE M-80'
		},{
			nombre: 'DITHANE NT'
		},{
			nombre: 'EMTHANE 80'
		},{
			nombre: 'FORTUNA 80'
		},{
			nombre: 'FORTUNA GLOBE 75 WDG'
		},{
			nombre: 'FUERZA GLOBE'
		},{
			nombre: 'MANCOSEM 80'
		},{
			nombre: 'MANCOZEB 75 DVA'
		},{
			nombre: 'MANCOZEB 75 HELM'
		},{
			nombre: 'MANCOZEB 75 WG NUFARM'
		},{
			nombre: 'MANCOZEB 80 ARN EBC'
		},{
			nombre: 'MANCOZEB 80 DVA'
		},{
			nombre: 'MANCOZEB 80 HELM'
		},{
			nombre: 'MANCOZEB 80 KAYKUN'
		},{
			nombre: 'MANCOZEB 80 MELTHIS'
		},{
			nombre: 'MANCOZEB 80 NUFARM'
		},{
			nombre: 'MANCOZEB 80 RAINBOW'
		},{
			nombre: 'MANCOZEB 80 SF'
		},{
			nombre: 'MANCOZEB 80 TERRIUM'
		},{
			nombre: 'MANCOZEB 80 WP STOCKTON'
		},{
			nombre: 'MANCOZEB AGROS'
		},{
			nombre: 'MANCOZEB BIESTERFELD'
		},{
			nombre: 'MANCOZEB BROMETAN'
		},{
			nombre: 'MANCOZEB DOW AGROSCIENCES'
		},{
			nombre: 'MANCOZEB FARM CHEMICALS'
		},{
			nombre: 'MANCOZEB FQ'
		},{
			nombre: 'MANCOZEB II AGROS'
		},{
			nombre: 'MANCOZEB RyH'
		},{
			nombre: 'MANFAL 80'
		},{
			nombre: 'MANZATE CC'
		},{
			nombre: 'MANZATE PRO STICK'
		},{
			nombre: 'OLYMPIC'
		},{
			nombre: 'PENNCOZEB'
		},{
			nombre: 'PERSIST'
		},{
			nombre: 'TRIZIMAN D'
		},{
			nombre: 'UNIZEB'
		},{
			nombre: 'VONDOZEB'
		},{
			nombre: 'TIERMIL'
		},{
			nombre: 'MANCONYL'
		},{
			nombre: 'MANCONYL DVA'
		},{
			nombre: 'CUPERTINE M'
		},{
			nombre: 'VALIS M'
		},{
			nombre: 'REVUS'
		},{
			nombre: 'ADJUST'
		},{
			nombre: 'NADRAN 5 SL'
		},{
			nombre: 'PIX'
		},{
			nombre: 'KARATHANE GOLD'
		},{
			nombre: 'ANERTION'
		},{
			nombre: 'CAFULGOR'
		},{
			nombre: 'FYFANON'
		},{
			nombre: 'LUPARA'
		},{
			nombre: 'LUPARA DK'
		},{
			nombre: 'LUPARA ULV'
		},{
			nombre: 'TUBO MATA PICUDO'
		},{
			nombre: 'ADAMA ESSENTIALS MESOFLEX'
		},{
			nombre: 'CALLISTO'
		},{
			nombre: 'HUAGRO BABOTOX LIQ'
		},{
			nombre: 'ALVERDE'
		},{
			nombre: 'AMBASSADOR'
		},{
			nombre: 'BIAGRO MX'
		},{
			nombre: 'CKC METALAXIL'
		},{
			nombre: 'DEFENZA'
		},{
			nombre: 'DETONANTE'
		},{
			nombre: 'FACYT MX'
		},{
			nombre: 'FYTOXIL FS'
		},{
			nombre: 'LAXIL SQ'
		},{
			nombre: 'METALAXIL 35 DVA'
		},{
			nombre: 'METALAXIL QUIMECO'
		},{
			nombre: 'PALAVERSICH SUPER CONTROL'
		},{
			nombre: 'PRODINXIL 35 FS'
		},{
			nombre: 'PROTEXIA'
		},{
			nombre: 'TALAX'
		},{
			nombre: 'TARPAN'
		},{
			nombre: 'VENDAVAL METALAXIL 35'
		},{
			nombre: 'APRON GOLD'
		},{
			nombre: 'FYTOXIL'
		},{
			nombre: 'SUPER CONTROL PALAVERSICH'
		},{
			nombre: 'ARMETIL M'
		},{
			nombre: 'FICH'
		},{
			nombre: 'ARMETIL COBRE'
		},{
			nombre: 'APRON GOLD SEMILLERO'
		},{
			nombre: 'METALAXIL-M MIRKA'
		},{
			nombre: 'NOXION'
		},{
			nombre: 'NOXION SEMILLERO'
		},{
			nombre: 'RUTEL'
		},{
			nombre: 'RIDOMIL GOLD 68 WG'
		},{
			nombre: 'MAXIM XL '
		},{
			nombre: 'MAXIM XL SEMILLERO'
		},{
			nombre: 'RIDOMIL GOLD'
		},{
			nombre: 'BABOCIL SUPER'
		},{
			nombre: 'BABOCRES'
		},{
			nombre: 'BABORON'
		},{
			nombre: 'CLARTEX + R TDS J MOLUSQUICIDA'
		},{
			nombre: 'CLARTEX +R TDS MOLUSQUICIDA'
		},{
			nombre: 'DEADLINE M-Ps'
		},{
			nombre: 'DELENTE MATABABOSAS'
		},{
			nombre: 'HUAGRO BABOTOX'
		},{
			nombre: 'METALDEHIDO 6 BIESTERFELD'
		},{
			nombre: 'METAREX BB'
		},{
			nombre: 'MOLUSQUICIDA ACAY'
		},{
			nombre: 'NEMASOL N'
		},{
			nombre: 'VENDAVAL FUMIGANTE AMONIO'
		},{
			nombre: 'TAMIFUNE 50 SL'
		},{
			nombre: 'VAPAM P'
		},{
			nombre: 'NEMASOL 51 SL'
		},{
			nombre: 'SNMDC'
		},{
			nombre: 'VAPAM'
		},{
			nombre: 'VAPAM S'
		},{
			nombre: 'VENDAVAL FUMIGANTE V'
		},{
			nombre: 'KAPUT'
		},{
			nombre: 'MEDFOS 60'
		},{
			nombre: 'METACAMPO 60'
		},{
			nombre: 'METAFOS'
		},{
			nombre: 'METAMIDOFOS 60 %'
		},{
			nombre: 'METAMIDOFOS 60 DVA'
		},{
			nombre: 'METAMIDOFOS 60 MA'
		},{
			nombre: 'METAMIDOFOS 60 NUFARM'
		},{
			nombre: 'METAMIDOFOS AGM'
		},{
			nombre: 'METAMIDOFOS ESTRELLA'
		},{
			nombre: 'METAMIDOFOS JIAXING'
		},{
			nombre: 'METAMIDOFOS TERRIUM'
		},{
			nombre: 'METATEX 60'
		},{
			nombre: 'PATROLE'
		},{
			nombre: 'PILARON'
		},{
			nombre: 'PROPIL SL'
		},{
			nombre: 'SABIMIDO'
		},{
			nombre: 'SEMFOS 60'
		},{
			nombre: 'SHERMAN'
		},{
			nombre: 'SHINMETHA'
		},{
			nombre: 'TEMIFOS 60'
		},{
			nombre: 'VENDAVAL FUMIGANTE 51'
		},{
			nombre: 'CARAMBA'
		},{
			nombre: 'ADAMA ESSENTIALS SUPRATHION'
		},{
			nombre: 'GUSATHION 20 SC'
		},{
			nombre: 'METIL AZINFOS 35 AR'
		},{
			nombre: 'METIL AZINFOS 35 AR SC'
		},{
			nombre: 'ROMEL'
		},{
			nombre: 'ABRIGO'
		},{
			nombre: 'ARATIOMETIL 50'
		},{
			nombre: 'CERCOBIN'
		},{
			nombre: 'CERCOBIN NF'
		},{
			nombre: 'CERCOBIN ULV'
		},{
			nombre: 'METIOFAN'
		},{
			nombre: 'METIOFAN 50'
		},{
			nombre: 'NITRASEC PLUS'
		},{
			nombre: 'TOPSIN 70 PM'
		},{
			nombre: 'TOPSIN FLO'
		},{
			nombre: 'SUMIEIGHT MT'
		},{
			nombre: 'EXIMIA TP'
		},{
			nombre: 'OPTIONS'
		},{
			nombre: 'SPRINT'
		},{
			nombre: 'ABRIGO PLUS'
		},{
			nombre: 'TOPSEED'
		},{
			nombre: 'CERICA'
		},{
			nombre: 'ETHYLBLOC'
		},{
			nombre: 'HARVISTA TM TECHNOLOGY'
		},{
			nombre: 'IMVISA TM TECHNOLOGY'
		},{
			nombre: 'INVINSA TM TECHNOLOGY 1 0F'
		},{
			nombre: 'SMARTFRESH 0,14'
		},{
			nombre: 'SMARTFRESH SMARTTABS'
		},{
			nombre: 'SMARTFRESH TM TECHNOLOGY'
		},{
			nombre: 'POLYRAM DF'
		},{
			nombre: 'ADAMA PARALLEL PLUS'
		},{
			nombre: 'ADAMA ESSENTIALS METOLACHLOR AGAN'
		},{
			nombre: 'BAGUAL'
		},{
			nombre: 'HURAKAN'
		},{
			nombre: 'LEDON'
		},{
			nombre: 'MARGEN'
		},{
			nombre: 'METOLACHLOR LINE'
		},{
			nombre: 'METOLACLOR 96 ASP'
		},{
			nombre: 'METOLACLOR 96 SUMMIT AGRO'
		},{
			nombre: 'METOLACLOR AGROS'
		},{
			nombre: 'METOLACLOR ICONA'
		},{
			nombre: 'METOLACLOR INSUAGRO'
		},{
			nombre: 'METOLACLOR NUFARM'
		},{
			nombre: 'METOLACLORO 96 SUMAGRO'
		},{
			nombre: 'METOLACLORO ARN EBC'
		},{
			nombre: 'METOLACLORO SUMMIT AGRO'
		},{
			nombre: 'ADAMA ESSENTIALS METHOMEX 90'
		},{
			nombre: 'KUIK SP'
		},{
			nombre: 'LANNATE'
		},{
			nombre: 'LANNATE 40'
		},{
			nombre: 'LASH SP'
		},{
			nombre: 'METOMIL LINE'
		},{
			nombre: 'ROTASHOCK'
		},{
			nombre: 'CONCORDE'
		},{
			nombre: 'RACE 20 SC'
		},{
			nombre: 'RUNDLE MAX'
		},{
			nombre: 'CONCORDE RM'
		},{
			nombre: 'RACE RM'
		},{
			nombre: 'INTREPID SC '
		},{
			nombre: 'RUNNER'
		},{
			nombre: 'QUINTAL'
		},{
			nombre: 'VIVANDO'
		},{
			nombre: 'ADAMA ESSENTIALS TRIBUNE'
		},{
			nombre: 'ARAM 48'
		},{
			nombre: 'BECTRA'
		},{
			nombre: 'BUZZIN'
		},{
			nombre: 'RITA'
		},{
			nombre: 'ROMETRI 48 SC'
		},{
			nombre: 'SENCOREX 48'
		},{
			nombre: 'SENCORMAX'
		},{
			nombre: 'STARBUZIN'
		},{
			nombre: 'TRIBUNE 48 SC'
		},{
			nombre: 'TRIBUTO 48'
		},{
			nombre: 'TRIBUTO 75 WG'
		},{
			nombre: 'AJAX'
		},{
			nombre: 'AJAX 60'
		},{
			nombre: 'CICLON'
		},{
			nombre: 'ERRASIN'
		},{
			nombre: 'ERRASIN WDG'
		},{
			nombre: 'ESCORT'
		},{
			nombre: 'MALBAN'
		},{
			nombre: 'METSULFURON 50 ACA'
		},{
			nombre: 'METSULFURON 60 BIESTERFELD'
		},{
			nombre: 'METSULFURON 60 SIGMA'
		},{
			nombre: 'METSULFURON 60 WG TERRIUM'
		},{
			nombre: 'METSULFURON 60 ZAMBA'
		},{
			nombre: 'METSULFURON ACA 60'
		},{
			nombre: 'METSULFURON ACA 60 WDG'
		},{
			nombre: 'METSULFURON AGROS'
		},{
			nombre: 'METSULFURON ARN EBC'
		},{
			nombre: 'METSULFURON AS'
		},{
			nombre: 'METSULFURON BAYER'
		},{
			nombre: 'METSULFURON METIL 60 AGM'
		},{
			nombre: 'METSULFURON METIL 60 DVA'
		},{
			nombre: 'METSULFURON METIL 60 WG DVA'
		},{
			nombre: 'METSULFURON METIL 60 WP NUFARM '
		},{
			nombre: 'METSULFURON RAINBOW'
		},{
			nombre: 'METSULFURON RED SURCOS'
		},{
			nombre: 'METSULFURON SUMAGRO'
		},{
			nombre: 'METSURAM WP'
		},{
			nombre: 'NUFURON'
		},{
			nombre: 'PROTESULFURON 60'
		},{
			nombre: 'ROSULFURON 60 WP'
		},{
			nombre: 'ROSULFURON WG'
		},{
			nombre: 'SULFAR'
		},{
			nombre: 'SULMET 50'
		},{
			nombre: 'TRIMET'
		},{
			nombre: 'TRITICAS 60'
		},{
			nombre: 'TROPA 60'
		},{
			nombre: 'STERN'
		},{
			nombre: 'RIZOSPRAY CORRECTOR SECUESTRANTE'
		},{
			nombre: 'DASH - HC'
		},{
			nombre: 'COADYUVANTE GL ZAMBA'
		},{
			nombre: 'ESTEN 80'
		},{
			nombre: 'JUMKAN'
		},{
			nombre: 'STARECO'
		},{
			nombre: 'RALLY'
		},{
			nombre: 'SYSTHANE E'
		},{
			nombre: 'SYSTHANE W'
		},{
			nombre: 'KEKOL LPU'
		},{
			nombre: 'CHALLENGER'
		},{
			nombre: 'LOOP'
		},{
			nombre: 'NICOGAN 4 SC'
		},{
			nombre: 'NICOGAN 75 WG'
		},{
			nombre: 'NICOSULFURON 75 SURCOS'
		},{
			nombre: 'NICOSULFURON LINE'
		},{
			nombre: 'NISSHIN'
		},{
			nombre: 'NISSHIN OD 4% LPU'
		},{
			nombre: 'PRIMERO 75 WG'
		},{
			nombre: 'VICTORY GOLD'
		},{
			nombre: 'A 35 T'
		},{
			nombre: 'ACONDICONADOR ACTIVATE PLUS'
		},{
			nombre: 'ACTIVADOR'
		},{
			nombre: 'ACTIVE'
		},{
			nombre: 'ADH CONCENTRADO'
		},{
			nombre: 'ADHER FOL COMPLEX'
		},{
			nombre: 'ADHERENTE AEC'
		},{
			nombre: 'AF PLUS'
		},{
			nombre: 'AGRO POWER'
		},{
			nombre: 'AGRO-MAX'
		},{
			nombre: 'AGROSPRAY FULL CONTROL'
		},{
			nombre: 'AGROSPRAY HARRIER'
		},{
			nombre: 'AGROSPRAY MAXI DROP'
		},{
			nombre: 'AGROTEC TA 50'
		},{
			nombre: 'AHINCO SUPER'
		},{
			nombre: 'AHINCO WET'
		},{
			nombre: 'ANTIDERIVA NOVA'
		},{
			nombre: 'AR 40'
		},{
			nombre: 'ASPERFOL'
		},{
			nombre: 'AT 1 SILICON'
		},{
			nombre: 'BARRENO'
		},{
			nombre: 'BETER STICK'
		},{
			nombre: 'BIAGRO ACCION'
		},{
			nombre: 'BIAGRO SILICONADO'
		},{
			nombre: 'BULLET GYB'
		},{
			nombre: 'CAMPO DROP'
		},{
			nombre: 'CAMPO FULL'
		},{
			nombre: 'CAMPO TEN'
		},{
			nombre: 'CAMPO VENT'
		},{
			nombre: 'CAMPOMAX AD'
		},{
			nombre: 'CAMPOMAX N-30'
		},{
			nombre: 'CAMPOMAX S'
		},{
			nombre: 'CASWET'
		},{
			nombre: 'CEBU SR'
		},{
			nombre: 'COAD IPE PLUS'
		},{
			nombre: 'COADYUVANTE PHARMA-AGRO'
		},{
			nombre: 'CX'
		},{
			nombre: 'DEPOSITOP'
		},{
			nombre: 'DIFFER MEDIUM'
		},{
			nombre: 'DIFFER ULTRA'
		},{
			nombre: 'DIOXOLINE'
		},{
			nombre: 'EMULSOGEN NL'
		},{
			nombre: 'EMUL-TEC FULL'
		},{
			nombre: 'FASTER'
		},{
			nombre: 'FB PLUS'
		},{
			nombre: 'FULL ADYUVANT'
		},{
			nombre: 'FULL WET COR'
		},{
			nombre: 'FULL WET NL'
		},{
			nombre: 'GESEISIMPACTO'
		},{
			nombre: 'GLIFOWET'
		},{
			nombre: 'GP PLUS'
		},{
			nombre: 'HARRIER SENTRY'
		},{
			nombre: 'HARRIER STRIKE'
		},{
			nombre: 'HIWET ACTIVADOR'
		},{
			nombre: 'HIWET SILICONADO'
		},{
			nombre: 'HUMECTANTE ADHERENTE ACA'
		},{
			nombre: 'KEEP'
		},{
			nombre: 'KWR 15 MAX'
		},{
			nombre: 'KWR 9 STICK'
		},{
			nombre: 'LERO-WETT'
		},{
			nombre: 'LX CONTROL'
		},{
			nombre: 'MAGIC POWER'
		},{
			nombre: 'MAGNA-WET'
		},{
			nombre: 'MO CUAT'
		},{
			nombre: 'NASS 50'
		},{
			nombre: 'NO FLOT'
		},{
			nombre: 'NUTRIWATER'
		},{
			nombre: 'PH CHEKER'
		},{
			nombre: 'PLENIUM AGUA pH'
		},{
			nombre: 'POTENCIADOR'
		},{
			nombre: 'POTENT-K'
		},{
			nombre: 'PRODINPLUS'
		},{
			nombre: 'PROTEWET'
		},{
			nombre: 'RD MAX'
		},{
			nombre: 'REG-SEC IV'
		},{
			nombre: 'SER DRIFT'
		},{
			nombre: 'SERBAC NL'
		},{
			nombre: 'SERCOR'
		},{
			nombre: 'SERCOR FULL'
		},{
			nombre: 'SERDRIFT MAX'
		},{
			nombre: 'SERQUEL'
		},{
			nombre: 'SPEED WATER NG'
		},{
			nombre: 'SPEEDWED ANTIDREIVA NG'
		},{
			nombre: 'SPEEDWET MAXION NG'
		},{
			nombre: 'SPEEDWET PLUS NG'
		},{
			nombre: 'SPEEDWET SILICONADO NG'
		},{
			nombre: 'SPREADER'
		},{
			nombre: 'SUPERWET'
		},{
			nombre: 'SUPERWET IN'
		},{
			nombre: 'TECNOSPRAY'
		},{
			nombre: 'TENSIOWETT'
		},{
			nombre: 'TENWAT W'
		},{
			nombre: 'TIFFON'
		},{
			nombre: 'TREAT'
		},{
			nombre: 'TSURF'
		},{
			nombre: 'TWISTER RAIN'
		},{
			nombre: 'VIRA RED'
		},{
			nombre: 'WATERSHOCK'
		},{
			nombre: 'WEI-COWETT'
		},{
			nombre: 'WINER'
		},{
			nombre: 'WR IV'
		},{
			nombre: 'X TRIM'
		},{
			nombre: 'X TRIM G'
		},{
			nombre: 'YERCO WET'
		},{
			nombre: 'NOVA'
		},{
			nombre: 'ATTACH'
		},{
			nombre: 'REBENQUE'
		},{
			nombre: 'RINO '
		},{
			nombre: 'TOTALSTIK'
		},{
			nombre: 'ADAMA ESSENTIALS PEDESTAL'
		},{
			nombre: 'ADAMA ESSENTIALS TENOR'
		},{
			nombre: 'ADAMA RIMON'
		},{
			nombre: 'ADAMA RIMON SUPRA'
		},{
			nombre: 'QUESTOR'
		},{
			nombre: 'UNIRON'
		},{
			nombre: 'ADAMA CORMORAN'
		},{
			nombre: 'ADAMA RIMON FAST'
		},{
			nombre: 'ADAMA ESSETIALS LOTRIL'
		},{
			nombre: 'HASTEN'
		},{
			nombre: 'HYDRALENE AGK'
		},{
			nombre: 'DETERCIDE'
		},{
			nombre: 'DETERCIDE 24'
		},{
			nombre: 'ESPUMER-O MERCOSUR'
		},{
			nombre: 'CAURIFIX S'
		},{
			nombre: 'CAURIFIX WG'
		},{
			nombre: 'COBREQUIM 84 WP'
		},{
			nombre: 'COC 85 NUFARM'
		},{
			nombre: 'COURA'
		},{
			nombre: 'CUPRAFOR'
		},{
			nombre: 'CUPROCAFFARO'
		},{
			nombre: 'CUPROMIC'
		},{
			nombre: 'CURENOX 50 WP'
		},{
			nombre: 'DEMILDEX'
		},{
			nombre: 'ERBOC'
		},{
			nombre: 'FANAVID 85'
		},{
			nombre: 'FUNGICUP'
		},{
			nombre: 'MCu'
		},{
			nombre: 'NEORAM 37,5 WG'
		},{
			nombre: 'OXICLORURO 84 SALDECO'
		},{
			nombre: 'OXICLORURO DE COBRE 50 VALLES'
		},{
			nombre: 'OXICLORURO DE COBRE ATANOR'
		},{
			nombre: 'OXICLORURO DE COBRE FANAPROQUI'
		},{
			nombre: 'OXICLORURO DE COBRE FLOWABLE  FANAPROQUI'
		},{
			nombre: 'OXICLORURO DE COBRE SURCOS'
		},{
			nombre: 'OXICLORURO NUFARM'
		},{
			nombre: 'OXICLORURO WG NUFARM'
		},{
			nombre: 'OXI-CU'
		},{
			nombre: 'OXI-CUP WG'
		},{
			nombre: 'OXI-CUP WP'
		},{
			nombre: 'OXIQUYM CU 50'
		},{
			nombre: 'PASTA ISAGRO'
		},{
			nombre: 'POLVO BORDELES GRHESA AGRO'
		},{
			nombre: 'SUPERCUPROL'
		},{
			nombre: 'AIRONE'
		},{
			nombre: 'METASYSTOX R'
		},{
			nombre: 'CUPRODUL'
		},{
			nombre: 'CUPROSO AGROSPEC WG'
		},{
			nombre: 'CUPROSO SALDECO'
		},{
			nombre: 'NORDOX 75 WG'
		},{
			nombre: 'ZOOM'
		},{
			nombre: 'ADAMA ESSENTIALS GALIGAN '
		},{
			nombre: 'KOLTAR'
		},{
			nombre: 'KOLTAR 24 EC'
		},{
			nombre: 'KOLTAR EC'
		},{
			nombre: 'HALOCIDE COBRE 5 NATURAL'
		},{
			nombre: 'ARAQUAT'
		},{
			nombre: 'BARON'
		},{
			nombre: 'DEFOLEX'
		},{
			nombre: 'DISTRIQUAT'
		},{
			nombre: 'FERRERO DESECANTE'
		},{
			nombre: 'FOREMAN SL'
		},{
			nombre: 'HEROQUAT 27,6'
		},{
			nombre: 'PARAQUAT BIESTERFELD'
		},{
			nombre: 'PARAQUAT FARM CHEMICALS'
		},{
			nombre: 'PARAQUAT NUFARM'
		},{
			nombre: 'PARAQUAT RURALCO'
		},{
			nombre: 'CERILLO'
		},{
			nombre: 'ADAMA ESSENTIALS SECAFOL'
		},{
			nombre: 'AGRIQUAT'
		},{
			nombre: 'CHEMQUAT'
		},{
			nombre: 'CLEAN ALL'
		},{
			nombre: 'CROPMAX PARAQUAT'
		},{
			nombre: 'DESECANTE KEMSURE'
		},{
			nombre: 'DOGO 27,6 SL'
		},{
			nombre: 'FALQUAT'
		},{
			nombre: 'FOGO 27,6 SL'
		},{
			nombre: 'FOGO SF'
		},{
			nombre: 'FOGO SURCOS'
		},{
			nombre: 'FOREMAN'
		},{
			nombre: 'GRAMOXONE SUPER'
		},{
			nombre: 'HERBOXONE'
		},{
			nombre: 'KEMAZON'
		},{
			nombre: 'KUAT'
		},{
			nombre: 'PARACUAT 27,6 KEMSURE'
		},{
			nombre: 'PARAGLEX'
		},{
			nombre: 'PARAQUAT 20 DVA'
		},{
			nombre: 'PARAQUAT 27,6 AFA'
		},{
			nombre: 'PARAQUAT 27,6 AGROS'
		},{
			nombre: 'PARAQUAT 27,6 AS'
		},{
			nombre: 'PARAQUAT 27,6 NUFARM'
		},{
			nombre: 'PARAQUAT 27,6 SINER'
		},{
			nombre: 'PARAQUAT 27,6 STOCKTON'
		},{
			nombre: 'PARAQUAT AGM'
		},{
			nombre: 'PARAQUAT ASES'
		},{
			nombre: 'PARAQUAT DICLORURO 27,6 GREEN CROPS'
		},{
			nombre: 'PARAQUAT DICLORURO 27,6 RAINBOW'
		},{
			nombre: 'PARAQUAT HUAGRO'
		},{
			nombre: 'PARAQUAT II AGROS'
		},{
			nombre: 'PARAQUAT INSUAGRO'
		},{
			nombre: 'PARAQUAT KEMSURE'
		},{
			nombre: 'PARAQUAT MAX'
		},{
			nombre: 'PARAQUAT MELTHIS'
		},{
			nombre: 'PARAQUAT PHILAGRO'
		},{
			nombre: 'PARAQUAT SHARDA 27,6 SL'
		},{
			nombre: 'PARAQUAT SIGMA'
		},{
			nombre: 'PARAQUAT SINON'
		},{
			nombre: 'PARAQUAT ZAMBA'
		},{
			nombre: 'PROQUAT 27,6'
		},{
			nombre: 'TECNOQUAT'
		},{
			nombre: 'PARAURON RAINBOW'
		},{
			nombre: 'TOPAS'
		},{
			nombre: 'ADAMA ESSENTIALS MAGAN CLIN 33 CE'
		},{
			nombre: 'HERBADOX H2O'
		},{
			nombre: 'PENDI 33 EC'
		},{
			nombre: 'PENDIMETALIN 33 CHEMPRO'
		},{
			nombre: 'PENDIMETALIN 50 RAINBOW'
		},{
			nombre: 'PUNIX'
		},{
			nombre: 'SHARPEN 33 EC'
		},{
			nombre: 'TANKE'
		},{
			nombre: 'TANKE 33'
		},{
			nombre: 'RICER'
		},{
			nombre: 'ORLIAN'
		},{
			nombre: 'GALGOPER'
		},{
			nombre: 'POUNCE 38,4'
		},{
			nombre: 'PASTISHA'
		},{
			nombre: 'PICLORAM + 2,4D STOCKTON'
		},{
			nombre: 'TORCH'
		},{
			nombre: 'TORCH PLUS'
		},{
			nombre: 'PINAR SURCOS'
		},{
			nombre: 'ADAMA ESSENTIALS PASO 24 SL'
		},{
			nombre: 'PADRON'
		},{
			nombre: 'PATRON G 24'
		},{
			nombre: 'PICK OUT'
		},{
			nombre: 'PICLORAM 24 RAINBOW'
		},{
			nombre: 'PICLORAM AGROS'
		},{
			nombre: 'PICLORAM SIGMA'
		},{
			nombre: 'PICLORAM SUMAGRO'
		},{
			nombre: 'PICLORAN 24 STOCKTON'
		},{
			nombre: 'TIENTO'
		},{
			nombre: 'TORAM'
		},{
			nombre: 'TORAM NF'
		},{
			nombre: 'TORDON 24 K'
		},{
			nombre: 'TORO 24 SL'
		},{
			nombre: 'RAINBOWPAST'
		},{
			nombre: 'TORDON D 30'
		},{
			nombre: 'TOGAR BT'
		},{
			nombre: 'ACAPELA'
		},{
			nombre: 'JUNO'
		},{
			nombre: 'STINGER'
		},{
			nombre: 'NU-FILM'
		},{
			nombre: 'AXIAL'
		},{
			nombre: 'ECOPART'
		},{
			nombre: 'STAGGER'
		},{
			nombre: 'SANMITE EC'
		},{
			nombre: 'SANMITE WP'
		},{
			nombre: 'AFICIDA '
		},{
			nombre: 'PATTON FLOW'
		},{
			nombre: 'ACTELLIC 50'
		},{
			nombre: 'ACTELLIC PLUS'
		},{
			nombre: 'AGROFUR'
		},{
			nombre: 'BIOSULF'
		},{
			nombre: 'SUMILEX  50'
		},{
			nombre: 'SUMILEX 50 SC'
		},{
			nombre: 'ADAMA ESSENTIALS TRITAC'
		},{
			nombre: 'SPORTAK 45 EC'
		},{
			nombre: 'TROMPO'
		},{
			nombre: 'AURA'
		},{
			nombre: 'AURA C'
		},{
			nombre: 'ADAMA ESSENTIALS PROMETREX FW'
		},{
			nombre: 'GESAGARD 50'
		},{
			nombre: 'PROMETRIN 50 SURCOS'
		},{
			nombre: 'SIPCAPRIN'
		},{
			nombre: 'SIPCAPRIN MAX'
		},{
			nombre: 'PROPLANT'
		},{
			nombre: 'PREVICUR N'
		},{
			nombre: 'PROMESS'
		},{
			nombre: 'OL'
		},{
			nombre: 'OL 48'
		},{
			nombre: 'PROPANIL 36% CE DEFENSA'
		},{
			nombre: 'PROPANIL 48 RICECO'
		},{
			nombre: 'PROPANIL 48% CE MILENIA'
		},{
			nombre: 'RICECO PROPANIL 36 EC'
		},{
			nombre: 'ROURANIL 36'
		},{
			nombre: 'ROURANIL 48'
		},{
			nombre: 'SPADA 60 WG'
		},{
			nombre: 'STAM 80'
		},{
			nombre: 'WHAM EZ'
		},{
			nombre: 'ADAMA ESSENTIALS AGIL'
		},{
			nombre: 'PRILAN'
		},{
			nombre: 'AKBAR 30 WP'
		},{
			nombre: 'AKBAR 72 EC'
		},{
			nombre: 'OMITE 30 W'
		},{
			nombre: 'OMITE 72 E'
		},{
			nombre: 'MELANITE'
		},{
			nombre: 'NOVEL'
		},{
			nombre: 'PROMAX'
		},{
			nombre: 'PROPICONAZOLE 25 DVA'
		},{
			nombre: 'PROPICONAZOLE SHARDA 25'
		},{
			nombre: 'TILT 25 EC'
		},{
			nombre: 'ARTEA'
		},{
			nombre: 'GEM'
		},{
			nombre: 'PRIFO'
		},{
			nombre: 'POSEIDON'
		},{
			nombre: 'STRATEGO'
		},{
			nombre: 'ANTRACOL'
		},{
			nombre: 'KERB 50-W'
		},{
			nombre: 'PEAK 75 WG'
		},{
			nombre: 'PEAK-PACK L'
		},{
			nombre: 'CREATE PRO MAX SEMILLERO'
		},{
			nombre: 'SCENIC'
		},{
			nombre: 'PUCARA'
		},{
			nombre: 'CRIPTON'
		},{
			nombre: 'CHESS 50 WG'
		},{
			nombre: 'ORANIS'
		},{
			nombre: 'COMET'
		},{
			nombre: 'VIVARUS'
		},{
			nombre: 'ABACUS HC'
		},{
			nombre: 'OPERA'
		},{
			nombre: 'PLADOX'
		},{
			nombre: 'RENASTE'
		},{
			nombre: 'OPERA ULTRA'
		},{
			nombre: 'ACRONIS'
		},{
			nombre: 'ECOPART 2,5 EC'
		},{
			nombre: 'MYTHOS 30 SC'
		},{
			nombre: 'PENBOTEC 40 SC'
		},{
			nombre: 'PHILABUSTER SC'
		},{
			nombre: 'EPINGLE'
		},{
			nombre: 'ESTEEM'
		},{
			nombre: 'MERIT GOLD'
		},{
			nombre: 'MERIT  '
		},{
			nombre: 'FACET PM'
		},{
			nombre: 'FACET SC'
		},{
			nombre: 'LISI'
		},{
			nombre: 'QUINTEC'
		},{
			nombre: 'CITADEL'
		},{
			nombre: 'BIOREND'
		},{
			nombre: 'RAISAN'
		},{
			nombre: 'ADAMA ESSENTIALS LEOPARD'
		},{
			nombre: 'ADAMA ESSENTIALS LEOPARD LPU'
		},{
			nombre: 'AREK'
		},{
			nombre: 'BASTION'
		},{
			nombre: 'HERBAN BIO LPU'
		},{
			nombre: 'HERBAN LPU'
		},{
			nombre: 'MOSTAR'
		},{
			nombre: 'MR SHERIFF ANIKILATOR'
		},{
			nombre: 'NUMEX R'
		},{
			nombre: 'PROTEFOP Q 1,8 LPU'
		},{
			nombre: 'QUIZALO MAX'
		},{
			nombre: 'QUIZALOFOP SHARDA 1,8'
		},{
			nombre: 'QUIZALOFOP SHARDA 5'
		},{
			nombre: 'RAYO'
		},{
			nombre: 'SHERIFF'
		},{
			nombre: 'SHERIFF MAX'
		},{
			nombre: 'PANTERA'
		},{
			nombre: 'PANTERA 12 %'
		},{
			nombre: 'RANGO GR'
		},{
			nombre: 'TROPEL'
		},{
			nombre: 'BIO EXTRACTO'
		},{
			nombre: 'BIO RYANIA'
		},{
			nombre: 'RYANIA POLVO MOJABLE'
		},{
			nombre: 'HEAT'
		},{
			nombre: 'TIMBERLUX 60'
		},{
			nombre: 'WOLMAN 60'
		},{
			nombre: 'RINO NATURAL'
		},{
			nombre: 'SURFACTANTE C ULTRA'
		},{
			nombre: 'VIBRANCE TM SEMILLERO'
		},{
			nombre: 'SUTERRA VMB'
		},{
			nombre: 'LASIOTRAP'
		},{
			nombre: 'NEW SERRICO'
		},{
			nombre: 'NABU-S'
		},{
			nombre: 'POAST'
		},{
			nombre: 'SIMANEX 50 FW'
		},{
			nombre: 'SIMANEX 90 WG'
		},{
			nombre: 'SIMAZINA ATANOR FL 50'
		},{
			nombre: 'SIPCAZIN'
		},{
			nombre: 'DALEST'
		},{
			nombre: 'DIPLONE'
		},{
			nombre: 'DUAL GOLD'
		},{
			nombre: 'LATIGO'
		},{
			nombre: 'PRODUCE'
		},{
			nombre: 'S-METOLACLORO ZAMBA'
		},{
			nombre: 'STRIM'
		},{
			nombre: 'BICEP PACK GOLD'
		},{
			nombre: 'EDDUS'
		},{
			nombre: 'DELEGATE'
		},{
			nombre: 'EXALT'
		},{
			nombre: 'ENTRUST'
		},{
			nombre: 'FLIPPER'
		},{
			nombre: 'SUCCESS'
		},{
			nombre: 'SUCCESS 48'
		},{
			nombre: 'TRACER'
		},{
			nombre: 'ENVIDOR'
		},{
			nombre: 'MOVENTO  '
		},{
			nombre: 'CHOICE'
		},{
			nombre: 'CUSDUST'
		},{
			nombre: 'AGROPOL'
		},{
			nombre: 'BORDOCALD'
		},{
			nombre: 'COBRE ESTABLE SL'
		},{
			nombre: 'COBRE SL AGROSPEC'
		},{
			nombre: 'COTACUATRO'
		},{
			nombre: 'COTACUATRO CLAVEL'
		},{
			nombre: 'IDMIT 28,5 SC'
		},{
			nombre: 'MASTERCOP'
		},{
			nombre: 'PHYTON'
		},{
			nombre: 'SULFAQUIM'
		},{
			nombre: 'SULFAQUYM'
		},{
			nombre: 'SULFATO DE COBRE AGROMEN'
		},{
			nombre: 'SULFATO DE COBRE ROSSI'
		},{
			nombre: 'TRIKOPPER'
		},{
			nombre: 'FUNGOBACTERICIDA ENCO'
		},{
			nombre: 'AGRI-MICINA'
		},{
			nombre: 'AGRY GENT PLUS'
		},{
			nombre: 'BORDO WG'
		},{
			nombre: 'CALDO BORDELES VALLES'
		},{
			nombre: 'CALDO BORDELES VALLES ASP'
		},{
			nombre: 'CALDO BORDOLES'
		},{
			nombre: 'COBRE AMONIACAL ANERCO'
		},{
			nombre: 'SULFATO TRIBASICO DE COBRE'
		},{
			nombre: 'AUTHORITY'
		},{
			nombre: 'BORAL'
		},{
			nombre: 'BORAL 50 SC'
		},{
			nombre: 'CAPAZ'
		},{
			nombre: 'CAPAZ 50 SC '
		},{
			nombre: 'DESPEJE'
		},{
			nombre: 'DESPEJE WDG'
		},{
			nombre: 'MAJORITY'
		},{
			nombre: 'MOAV 50 SC'
		},{
			nombre: 'SOLARA'
		},{
			nombre: 'SULFEN MAX'
		},{
			nombre: 'SULFENTRAZONE 50 RAINBOW'
		},{
			nombre: 'SUNZONE'
		},{
			nombre: 'CAPAZ XL WG'
		},{
			nombre: 'CAPAZ MTZ'
		},{
			nombre: 'SENCOREX DUO'
		},{
			nombre: 'SENCOREX DUO'
		},{
			nombre: 'DELENTE MIREX'
		},{
			nombre: 'FLUMIREX'
		},{
			nombre: 'FLUMIREX'
		},{
			nombre: 'HORMIFAV S'
		},{
			nombre: 'HORMIGUICIDA ICONA'
		},{
			nombre: 'MANCHESTER S'
		},{
			nombre: 'MIREX ESPACIAL'
		},{
			nombre: 'MIREX GLEX'
		},{
			nombre: 'MIREX JNG'
		},{
			nombre: 'MIX HORTAL CEBO'
		},{
			nombre: 'SULFA MIREX - S'
		},{
			nombre: 'LIGATE'
		},{
			nombre: 'CLOSER'
		},{
			nombre: 'EXPEDITION'
		},{
			nombre: 'TRICIDE EM'
		},{
			nombre: 'SOWER DRESS'
		},{
			nombre: 'TICARB 10+10 AGM'
		},{
			nombre: 'ABRIGO'
		},{
			nombre: 'ALADIN 6 STK'
		},{
			nombre: 'ARACONAZOL 43 SC'
		},{
			nombre: 'ARACONAZOL 6'
		},{
			nombre: 'ARATEBUCO 25'
		},{
			nombre: 'ARRAY 20 EC'
		},{
			nombre: 'ARROLLADOR'
		},{
			nombre: 'AXION PLUS TEBUCONAZOLE 25'
		},{
			nombre: 'AXION PLUS TEBUCONAZOLE 6'
		},{
			nombre: 'BACANAL'
		},{
			nombre: 'BIAGRO WHEATFIELD'
		},{
			nombre: 'BOYERO'
		},{
			nombre: 'BOYERO 43'
		},{
			nombre: 'BUCANER 43 FW'
		},{
			nombre: 'BUCANER 6 FS'
		},{
			nombre: 'BUZZ ULTRA'
		},{
			nombre: 'CENTAURO'
		},{
			nombre: 'CLEAN LEAF 25 EC'
		},{
			nombre: 'CLEAN LEAF 43 SC'
		},{
			nombre: 'CLEAN SEED'
		},{
			nombre: 'DAARGUS CONAZOLE 43'
		},{
			nombre: 'DAARGUS TEBUCO 6 %'
		},{
			nombre: 'EPZOLE'
		},{
			nombre: 'FACYT TBZ 43'
		},{
			nombre: 'FEZAN'
		},{
			nombre: 'FOLICUR 25 EW'
		},{
			nombre: 'FUNGICIDA FACYT TBZ 25 EW'
		},{
			nombre: 'HELM TEBUCONAZOLE 6 FS'
		},{
			nombre: 'HUNO PLUS'
		},{
			nombre: 'ICARUS 25 SC'
		},{
			nombre: 'ICARUS EC'
		},{
			nombre: 'KEYZOL'
		},{
			nombre: 'MHO PLUS OCH'
		},{
			nombre: 'NIEBLA TEBUCONAZOLE 43'
		},{
			nombre: 'NITRO FIX TB 25'
		},{
			nombre: 'NITRO-FIX TB 6'
		},{
			nombre: 'NIVELAGRO T 43'
		},{
			nombre: 'ODIN SC'
		},{
			nombre: 'ORIUS'
		},{
			nombre: 'ORIUS 43 SC'
		},{
			nombre: 'PALAVERSICH TZ'
		},{
			nombre: 'PHILCONAZOL'
		},{
			nombre: 'PHILSEED'
		},{
			nombre: 'RECOVER'
		},{
			nombre: 'ROBUST 43'
		},{
			nombre: 'ROBUST 6'
		},{
			nombre: 'SEGURO FS'
		},{
			nombre: 'SOWER FUGIMAX'
		},{
			nombre: 'SOWER MAGNUM'
		},{
			nombre: 'SYSTEMIC'
		},{
			nombre: 'TACORA 43'
		},{
			nombre: 'TBZ 6'
		},{
			nombre: 'TEBAZOL'
		},{
			nombre: 'TEBU 25'
		},{
			nombre: 'TEBU 25 AGROS'
		},{
			nombre: 'TEBU 43'
		},{
			nombre: 'TEBU 43 AGROS'
		},{
			nombre: 'TEBU 6 AGROS'
		},{
			nombre: 'TEBUCITES 6'
		},{
			nombre: 'TEBUCO  6'
		},{
			nombre: 'TEBUCO 25 RED SURCOS'
		},{
			nombre: 'TEBUCO 43'
		},{
			nombre: 'TEBUCO NOVA 25'
		},{
			nombre: 'TEBUCO NOVA 25 PLUS'
		},{
			nombre: 'TEBUCO NOVA 43'
		},{
			nombre: 'TEBUCONAZOL JNG 6'
		},{
			nombre: 'TEBUCONAZOLE 20 NUFARM'
		},{
			nombre: 'TEBUCONAZOLE 25 AFA'
		},{
			nombre: 'TEBUCONAZOLE 25 ARN EBC'
		},{
			nombre: 'TEBUCONAZOLE 25 EW STOCKTON'
		},{
			nombre: 'TEBUCONAZOLE 25 RAIINBOW'
		},{
			nombre: 'TEBUCONAZOLE 25 UPL'
		},{
			nombre: 'TEBUCONAZOLE 25% SURCOS'
		},{
			nombre: 'TEBUCONAZOLE 43 AFA'
		},{
			nombre: 'TEBUCONAZOLE 43 AGM'
		},{
			nombre: 'TEBUCONAZOLE 43 ARN EBC'
		},{
			nombre: 'TEBUCONAZOLE 43 BIESTERFELD'
		},{
			nombre: 'TEBUCONAZOLE 43 DEGSER'
		},{
			nombre: 'TEBUCONAZOLE 43 DVA'
		},{
			nombre: 'TEBUCONAZOLE 43 FARM CHEMICALS'
		},{
			nombre: 'TEBUCONAZOLE 43 IRAOLA'
		},{
			nombre: 'TEBUCONAZOLE 43 KEMSURE'
		},{
			nombre: 'TEBUCONAZOLE 43 NUFARM'
		},{
			nombre: 'TEBUCONAZOLE 43 SC'
		},{
			nombre: 'TEBUCONAZOLE 43 SC AFA'
		},{
			nombre: 'TEBUCONAZOLE 43 TERRIUM'
		},{
			nombre: 'TEBUCONAZOLE 43% IYASI'
		},{
			nombre: 'TEBUCONAZOLE 6 BIESTERFELD'
		},{
			nombre: 'TEBUCONAZOLE 6 NUFARM'
		},{
			nombre: 'TEBUCONAZOLE 75 AGM'
		},{
			nombre: 'TEBUCONAZOLE 75 DVA'
		},{
			nombre: 'TEBUCONAZOLE 75 RAINBOW'
		},{
			nombre: 'TEBUCONAZOLE 80 TERRIUM'
		},{
			nombre: 'TEBUCONAZOLE AFA 43'
		},{
			nombre: 'TEBUCONAZOLE INSUAGRO'
		},{
			nombre: 'TEBUCONAZOLE LINE'
		},{
			nombre: 'TEBUCONAZOLE MELTHIS'
		},{
			nombre: 'TEBUCONAZOLE MIRKA FOLIAR 43'
		},{
			nombre: 'TEBUCONAZOLE RAINBOW'
		},{
			nombre: 'TEBUCONAZOLE SHARDA 20'
		},{
			nombre: 'TEBUCONAZOLE SHARDA 25'
		},{
			nombre: 'TEBUCONAZOLE SHARDA 43'
		},{
			nombre: 'TEBUCONAZOLE SHARDA 6 FS'
		},{
			nombre: 'TEBUCONAZOLE SP'
		},{
			nombre: 'TEBUCONAZOLE SQ 6'
		},{
			nombre: 'TEBUCONAZOLE TM 43'
		},{
			nombre: 'TEBUCROPS 43'
		},{
			nombre: 'TEBUSEM 25'
		},{
			nombre: 'TEBUSEM 43'
		},{
			nombre: 'TEBUSOIL 43'
		},{
			nombre: 'TESIX'
		},{
			nombre: 'TESOL'
		},{
			nombre: 'TRICUR'
		},{
			nombre: 'TRIGAL'
		},{
			nombre: 'TRIGAL 43 SC'
		},{
			nombre: 'TRIGALGO'
		},{
			nombre: 'TRIMAX'
		},{
			nombre: 'TRIMAX 25'
		},{
			nombre: 'VENDAVAL TEBUCONAZOLE 43 F'
		},{
			nombre: 'ZEUS SQ'
		},{
			nombre: 'ADAMA CUSTODIA'
		},{
			nombre: 'AKADIA'
		},{
			nombre: 'AZCAN'
		},{
			nombre: 'DOMADOR FACYT'
		},{
			nombre: 'PUNTAL'
		},{
			nombre: 'ARBUS SURCOS'
		},{
			nombre: 'TEBUZIM AGROS'
		},{
			nombre: 'WOLMAN E'
		},{
			nombre: 'ADAMA ESSENTIALS SAVAGE'
		},{
			nombre: 'SAVAGE ULTRA'
		},{
			nombre: 'CRIOLLO'
		},{
			nombre: 'KAVA'
		},{
			nombre: 'PHILDUO'
		},{
			nombre: 'TEBUCO + IMIDA AFA'
		},{
			nombre: 'MYSTIC'
		},{
			nombre: 'SUPREME'
		},{
			nombre: 'BUFALO'
		},{
			nombre: 'ESPUELA SURCOS'
		},{
			nombre: 'YUNKE II AGROS'
		},{
			nombre: 'MANTA PLUS ZAMBA'
		},{
			nombre: 'NATIVO'
		},{
			nombre: 'NATIVO TWIN PACK'
		},{
			nombre: 'TOGAN'
		},{
			nombre: 'NOMOLT'
		},{
			nombre: 'FORCE CS'
		},{
			nombre: 'SINBAR'
		},{
			nombre: 'ITALTERB'
		},{
			nombre: 'TERBUTREX 80 WG'
		},{
			nombre: 'DOMARK 10'
		},{
			nombre: 'DOMARK H 10'
		},{
			nombre: 'EMERALD 23 ME'
		},{
			nombre: 'LOSPEL'
		},{
			nombre: 'DOMARK XL'
		},{
			nombre: 'EMERALD PRO'
		},{
			nombre: 'TECTO 50 SC'
		},{
			nombre: 'APRON MAXX ADVANCED'
		},{
			nombre: 'MAXIM EVOLUTION'
		},{
			nombre: 'MAXIM QUATTRO'
		},{
			nombre: 'MAXIM QUATTRO SEMILLERO'
		},{
			nombre: 'CALYPSO 48 SC'
		},{
			nombre: 'PROTEUS'
		},{
			nombre: 'ACTARA'
		},{
			nombre: 'ACTARA 75 SG'
		},{
			nombre: 'ADAGE 60 SEMILLERO'
		},{
			nombre: 'ADAGETM'
		},{
			nombre: 'CRUISER'
		},{
			nombre: 'CRUISER 35 FS'
		},{
			nombre: 'CRUISER 60 FS SEMILLERO'
		},{
			nombre: 'SUREN 35 FS'
		},{
			nombre: 'SUREN 60 SEMILLERO'
		},{
			nombre: 'TIAMETOXAM 25 WG HELM'
		},{
			nombre: 'MITO 25 WG'
		},{
			nombre: 'ALIADO XTRA ZAMBA'
		},{
			nombre: 'ALIKA'
		},{
			nombre: 'CRUISER OPTI'
		},{
			nombre: 'ENGEO'
		},{
			nombre: 'EXELSO AGM'
		},{
			nombre: 'EXCELTO'
		},{
			nombre: 'FORCE ZEA'
		},{
			nombre: 'CRUISER ADVANCED'
		},{
			nombre: 'ABRIDOR'
		},{
			nombre: 'GLOBESTAR'
		},{
			nombre: 'DROPP ULTRA SC'
		},{
			nombre: 'CRYSIL PD'
		},{
			nombre: 'DIATOMID ECOLOGIC INSECTICIDE'
		},{
			nombre: 'POR FIN'
		},{
			nombre: 'BRONKO AGROS'
		},{
			nombre: 'BRONKO MAX'
		},{
			nombre: 'CHAMACO'
		},{
			nombre: 'EXPERT'
		},{
			nombre: 'LARVIN 80 WG'
		},{
			nombre: 'MARANDU'
		},{
			nombre: 'SADDLER FS'
		},{
			nombre: 'SADDLER SEMILLERO'
		},{
			nombre: 'SEMEVIN '
		},{
			nombre: 'SHARTHIODI 35 FS'
		},{
			nombre: 'SOWER MAGIC'
		},{
			nombre: 'SOWER MAGIC FOLIAR'
		},{
			nombre: 'THIODI 80 WG'
		},{
			nombre: 'THIODICUR 30 FS'
		},{
			nombre: 'TIODICARB NUFARM'
		},{
			nombre: 'TIODICARB SHARDA 35'
		},{
			nombre: 'TIOGLEX'
		},{
			nombre: 'LUFAR'
		},{
			nombre: 'VENTO'
		},{
			nombre: 'A VOLAR C & P'
		},{
			nombre: 'BRADYTHIR'
		},{
			nombre: 'CAMPO THIURAM 50'
		},{
			nombre: 'CKC SILOPROTECT'
		},{
			nombre: 'CRINIGAN SOJA'
		},{
			nombre: 'DUOPACK'
		},{
			nombre: 'FLOWSAN FS'
		},{
			nombre: 'FORMULAGRO TIURAM T 25'
		},{
			nombre: 'FULL-KONTAC'
		},{
			nombre: 'FUNGISEM'
		},{
			nombre: 'FUNGUICIDA CURASEMILLAS BIAGRO'
		},{
			nombre: 'GLEXCUR '
		},{
			nombre: 'GRAINVAULT'
		},{
			nombre: 'ICONA T FW'
		},{
			nombre: 'MOHOCIDA'
		},{
			nombre: 'N-FIXER OIL'
		},{
			nombre: 'PREVENT '
		},{
			nombre: 'REPELENTE NTP'
		},{
			nombre: 'RITIRAM PLUS SEMILLERO AC'
		},{
			nombre: 'SOWER '
		},{
			nombre: 'T FLOW 36'
		},{
			nombre: 'THIRAM CKC'
		},{
			nombre: 'THIRAM GRANUFLO'
		},{
			nombre: 'TIRAM NOVA 36'
		},{
			nombre: 'TRIGALGO T'
		},{
			nombre: 'TUTOR METIL'
		},{
			nombre: 'DEFENSA'
		},{
			nombre: 'EPZOLE MAX'
		},{
			nombre: 'RIZOLEX 50'
		},{
			nombre: 'RIZOLEX-FLO'
		},{
			nombre: 'CONVEY'
		},{
			nombre: 'BAYLETON'
		},{
			nombre: 'ROTOR'
		},{
			nombre: 'XENOR'
		},{
			nombre: 'BAYTAN 15 FS'
		},{
			nombre: 'LOGRAN'
		},{
			nombre: 'ECOMANCHA'
		},{
			nombre: 'TRIBROMO 40 INDUSTRIAL'
		},{
			nombre: 'TRICIDE 40'
		},{
			nombre: 'ADARVE TBF'
		},{
			nombre: 'HALOCIDE ACUOSO'
		},{
			nombre: 'PREVENT 40'
		},{
			nombre: 'RIZODERMA'
		},{
			nombre: 'TRICLONA 40'
		},{
			nombre: 'CAMPO TCA'
		},{
			nombre: 'TRIFORTE'
		},{
			nombre: 'FLINT 50 WG'
		},{
			nombre: 'TRIFLOX 50'
		},{
			nombre: 'TWIST 50 SC'
		},{
			nombre: 'OLEAJE'
		},{
			nombre: 'POSEIDON MAX'
		},{
			nombre: 'RUEDA'
		},{
			nombre: 'SPHERE'
		},{
			nombre: 'SPHERE MAX'
		},{
			nombre: 'CREATE PRO SEMILLERO'
		},{
			nombre: 'GUALICHO'
		},{
			nombre: 'POSEIDON ZAMBA'
		},{
			nombre: 'CONSIST'
		},{
			nombre: 'ENVOKE'
		},{
			nombre: 'ALSYSTIN 48 SC'
		},{
			nombre: 'ADAMA ESSENTIALS PREMERGE'
		},{
			nombre: 'IPERSAN 48'
		},{
			nombre: 'TREFLAN'
		},{
			nombre: 'TRIFLURALINA ATANOR 44.5'
		},{
			nombre: 'SAPROL '
		},{
			nombre: 'MODDUS'
		},{
			nombre: 'PREMIS'
		},{
			nombre: 'DEF'
		},{
			nombre: 'CARPOVIRUS PLUS'
		},{
			nombre: 'MADEX'
		},{
			nombre: 'BIOLURE OFM'
		},{
			nombre: 'FEROMONA KUMEI MAPU GRAPHOLITA'
		},{
			nombre: 'ISOMATE M'
		},{
			nombre: 'PUFFER OFM'
		},{
			nombre: 'CHECK MATE OFM-F'
		},{
			nombre: 'RAK 20'
		},{
			nombre: 'RAK M'
		},{
			nombre: 'PUFFER CM OFM'
		},{
			nombre: 'CHECK MATE OFM - SL'
		},{
			nombre: 'BISTAR 20 EW'
		},{
			nombre: 'FURIA'
		},{
			nombre: 'FURIA 18 EC'
		},{
			nombre: 'FURY 20 EW'
		},{
			nombre: 'MUSTANG 20 EW'
		},{
			nombre: 'PROFIT 18 EC'
		},{
			nombre: 'PROFIT 40 CE'
		},{
			nombre: 'AGRIZEB 80'
		},{
			nombre: 'AGRIZEB AZUL 70'
		},{
			nombre: 'AZUL 70'
		},{
			nombre: 'TIMBAL'
		},{
			nombre: 'ZINEB AZUL KAYKUN'
		},{
			nombre: 'ZINEB BROMETAN'
		},{
			nombre: 'ZINEBLUE'
		},{
			nombre: 'AGRO ZIRAM PLUS'
		},{
			nombre: 'ZIRAM GRANUFLO'
		},{
			nombre: 'ZITA'
		},{
			nombre: 'STIMO'
		}
	]
})