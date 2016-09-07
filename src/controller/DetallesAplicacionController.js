angular.module('agrofinger')
.controller('DetallesAplicacionController', function($location) {
	var that = this
	this.seleccionarPlagas = function(selected) {
		that.plagasSeleccionadas.push(selected.originalObject)
	}
	this.plagasSeleccionadas = []
	this.plagas = [
		{
			nombre: 'Abrojo chico (Xanthium spinosum)'
		},{
			nombre: 'Abrojo grande (Xanthium cavanillesii)'
		},{
			nombre: 'Albahaca silvestre (Galinsoga parviflora)'
		},{
			nombre: 'Apio cimarrón o falsa biznaga (Ammi majus)'
		},{
			nombre: 'Caapiquí (Stellaria media)'
		},{
			nombre: 'Capín arroz (Echinochloa crusgalli)'
		},{
			nombre: 'Cardo negro (Cirsium vulgare)'
		},{
			nombre: 'Cardo pendiente (Carduus nutans)'
		},{
			nombre: 'Cebollín (Cyperus rotundus)'
		},{
			nombre: 'Chamico (Datura ferox)'
		},{
			nombre: 'Charrúa (Mikania micrantha)'
		},{
			nombre: 'Chinchilla (Tagetes minuta, Tagetes bonaerensis)'
		},{
			nombre: 'Chufa (Cyperus esculentus)'
		},{
			nombre: 'Cien nudos o sanguinaria (Polygonum aviculare)'
		},{
			nombre: 'Cola de zorro (Setaria viridis)'
		},{
			nombre: 'Cola de zorro o Paitén (Setaria geniculata)'
		},{
			nombre: 'Corregüela (Convolvulus arvensis)'
		},{
			nombre: 'Cuernos del diablo (Ibicella lutea)'
		},{
			nombre: 'Enredadera anual (Polygonum convolvulus)'
		},{
			nombre: 'Flor de pajarito (Fumaria officinalis)'
		},{
			nombre: 'Fumo bravo (Solanum granuloso-leprosum)'
		},{
			nombre: 'Girasolillo (Verbesina encelioides)'
		},{
			nombre: 'Gramilla, gramón, pasto bermuda o pata de perdiz (Cynodon dactylon)'
		},{
			nombre: 'Lecherón (Euphorbia dentata)'
		},{
			nombre: 'Lechetresma (Euphorbia peplus)'
		},{
			nombre: 'Lengua de vaca (Rumex crispus)'
		},{
			nombre: 'Malva cimarrona (Anoda cristata)'
		},{
			nombre: 'Manzanilla cimarrona (Anthemis cotula)'
		},{
			nombre: 'María Mola (Senecio brasiliensis)'
		},{
			nombre: 'Mastuerzo (Coronopus didymus)'
		},{
			nombre: 'Moco pavo (Polygonum persicaria)'
		},{
			nombre: 'Mostacillas (Sisymbium spp.)'
		},{
			nombre: 'Nabo (Brassica campestris)'
		},{
			nombre: 'Nabón (Raphanus sativus)'
		},{
			nombre: 'Palo pólvora (Trema micrantha)'
		},{
			nombre: 'Pasto bandera (Digitaria insularis)'
		},{
			nombre: 'Pasto cuaresma (Digitaria sanguinalis)'
		},{
			nombre: 'Pasto yacaré (Axonopus compressus)'
		},{
			nombre: 'Pata o Pie de gallina (Eleusine indica)'
		},{
			nombre: 'Peludilla (Gnaphalium spicatum /Gamochaeta spicata)'
		},{
			nombre: 'Perejilillo (Bowlesia incana)'
		},{
			nombre: 'Quinoa (Chenopodium quinoa)'
		},{
			nombre: 'Quinoa blanca (Chenopodium album)'
		},{
			nombre: 'Rama negra (Conyza bonariensis)'
		},{
			nombre: 'Roseta (Cenchrus pauciflorus)'
		},{
			nombre: 'Saetilla o amor seco (Bidens pilosa)'
		},{
			nombre: 'Setaria (Setaria poiretiana)'
		},{
			nombre: 'Sorgo de Alepo (Sorghum halepense)'
		},{
			nombre: 'Triguillo (Diplachne uninervia /Leptochloa uninervia)'
		},{
			nombre: 'Yuyo colorado (Amaranthus quitensis)'
		}
	]
	this.programar = function() {
		$location.path('/tablero')
	}
})