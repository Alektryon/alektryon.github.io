// ciphers.js

/*
new cipher(
	"English Ordinal", // cipher name
	"English", // category
	120, 57, 36, // hue, saturation, lightness
	[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122], // lowercase characters
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], // values
	true, // characters with diacritic marks have the same value as regular ones, default is "true"
	true // enabled state, default is "false"
	false // case sensitive cipher, default is "false"
)
*/

cipherList = [
	new cipher(
		"English Ordinal",
		"English",
		120, 65, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		true,
		false
	),
	new cipher(
		"Reverse Ordinal",
		"English",
		146, 74, 50,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
		true,
		true,
		false
	),
	new cipher(
		"English Reduction",
		"English",
		216, 95, 73,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8],
		true,
		false,
		false
	),
	new cipher(
		"Reverse Reduction",
		"English",
		180, 60, 69,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"English Extended",
		"English",
		50, 78, 63,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800],
		true,
		false,
		false
	),
	new cipher(
		"Reverse Extended",
		"English",
		48, 49, 72,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"English Sumerian",
		"English",
		95, 41, 69,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156],
		true,
		false,
		false
	),
	new cipher(
		"Reverse Sumerian",
		"English",
		50, 51, 72,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[156,150,144,138,132,126,120,114,108,102,96,90,84,78,72,66,60,54,48,42,36,30,24,18,12,6],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan Simple",
		"Elizabethan",
		120, 65, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24],
		true,
		true,
		false
	),
	new cipher(
		"Elizabethan Reverse",
		"Elizabethan",
		146, 74, 50,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[24,23,22,21,20,19,18,17,16,16,15,14,13,12,11,10,9,8,7,6,5,5,4,3,2,1],
		true,
		true,
		false
	),
	new cipher(
		"Elizabethan Reduction",
		"Elizabethan",
		180, 60, 69,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,1,2,3,4,5,6,7,8,9,1,2,2,3,4,5,6],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan R Reduction",
		"Elizabethan",
		207, 77, 64,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[6,5,4,3,2,1,9,8,7,7,6,5,4,3,2,1,9,8,7,6,5,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"Kaye Cipher",
		"Elizabethan",
		0, 65, 66,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[27,28,29,30,31,32,33,34,35,35,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24],
		true,
		true,
		false
	),
	new cipher(
		"Modern Kaye",
		"Elizabethan",
		352, 61, 78,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[27,28,29,30,31,32,33,34,35,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		true,
		false
	),
	new cipher(
		"Illuminati Novice",
		"Illuminati",
		33, 91, 58,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[12,11,10,9,8,7,6,5,4,4,3,2,1,13,14,15,16,17,18,19,20,20,21,22,23,24],
		true,
		true,
		false
	),
	new cipher(
		"Illuminati Reverse",
		"Illuminati",
		60, 68, 68,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[24,23,22,21,20,19,18,17,16,16,15,14,13,1,2,3,4,5,6,7,8,8,9,10,11,12],
		true,
		false,
		false
	),
	new cipher(
		"Agrippa Key",
		"Latin",
		256, 95, 76,
		[97,98,99,100,101,102,103,104,105,107,108,109,110,111,112,113,114,115,116,117,120,121,122,106,118,10680,119],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Beatus of Liebana",
		"Latin",
		216, 95, 73,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,10,20,30,40,50,60,70,80,90,100,200,200,200,300,400,500],
		true,
		false,
		false
	),
	new cipher(
		"Agrippa Ordinal",
		"Latin",
		264, 90, 82,
		[97,98,99,100,101,102,103,104,105,107,108,109,110,111,112,113,114,115,116,117,120,121,122,106,118,10680,119],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
		true,
		false,
		false
	),
	new cipher(
		"Beatus Ordinal",
		"Latin",
		216, 87, 80,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,10,11,12,13,14,15,16,17,18,19,20,20,20,21,22,23],
		true,
		false,
		false
	),
	new cipher(
		"Agrippa Reduction",
		"Latin",
		236, 95, 86,
		[97,98,99,100,101,102,103,104,105,107,108,109,110,111,112,113,114,115,116,117,120,121,122,106,118,10680,119],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9],
		true,
		false,
		false
	),
	new cipher(
		"Beatus Reduction",
		"Latin",
		216, 53, 68,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,1,2,3,4,5,6,7,8,9,1,2,2,2,3,4,5],
		true,
		false,
		false
	),
	new cipher(
		"Cabala Simplex",
		"Latin",
		180, 60, 65,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,3,10,11,12,13,14,15,16,17,18,19,19,19,20,21,22],
		true,
		false,
		false
	),
	new cipher(
		"Roman Numerals",
		"Latin",
		150, 50, 60,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,0,100,500,0,0,0,0,1,1,0,50,1000,0,0,0,0,0,0,0,5,5,0,10,0,0],
		true,
		false,
		false
	),
	new cipher(
		"English Qaballa",
		"Thelemic",
		13, 68, 64,
		[97,108,119,104,115,100,111,122,107,118,103,114,99,110,121,106,117,102,113,98,109,120,105,116,101,112],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false
	),
	new cipher(
		"Cipher X",
		"Thelemic",
		36, 94, 64,
		[107,102,119,114,109,100,121,116,97,118,113,104,99,120,111,106,101,108,103,98,115,110,105,122,117,112],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false
	),
	new cipher(
		"Trigrammaton Qabalah",
		"Thelemic",
		195, 68, 69,
		[105,108,99,104,112,97,120,106,119,116,111,103,102,101,114,115,113,107,121,122,98,109,118,100,110,117],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
		true,
		false,
		false
	),
	new cipher(
		"Alphanumeric Qabbala",
		"Thelemic",
		63, 36, 63,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
		true,
		true,
		false
	),
	new cipher(
		"Hebrew Gematria",
		"Hebrew",
		50, 78, 63,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,20,40,50,80,90],
		true,
		false,
		false
	),
	new cipher(
		"Hebrew Ordinal",
		"Hebrew",
		33, 91, 58,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,11,13,14,17,18],
		true,
		false,
		false
	),
	new cipher(
		"Hebrew Reduction",
		"Hebrew",
		45, 95, 53,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,2,4,5,8,9],
		true,
		false,
		false
	),
	new cipher(
		"Hebrew Soffit",
		"Hebrew",
		44, 62, 73,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Greek Isopsephy",
		"Greek",
		191, 71, 71,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Greek Ordinal",
		"Greek",
		154, 70, 67,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24,25,26,27],
		true,
		false,
		false
	),
	new cipher(
		"Greek Reduction",
		"Greek",
		141, 53, 80,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,2,3,4,5,6,7,8,9],
		true,
		false,
		false
	),
	new cipher(
		"Greek Ordinal 24",
		"Greek",
		218, 75, 81,
		[945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,963,962,964,965,966,967,968,969],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,19,20,21,22,23,24],
		true,
		false,
		false
	),
	new cipher(
		"Arabic",
		"Arabic",
		25, 64, 59,
		[1575,1649,1650,1651,1653,1576,1580,1583,1607,1577,1608,1586,1581,1591,1610,1609,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000],
		true,
		false,
		false
	),
	new cipher(
		"Arabic Ordinal",
		"Arabic",
		25, 59, 64,
		[1575,1649,1650,1651,1653,1576,1580,1583,1607,1577,1608,1586,1581,1591,1610,1609,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
		true,
		false,
		false
	),
	new cipher(
		"Arabic Reduction",
		"Arabic",
		25, 54, 69,
		[1575,1649,1650,1651,1653,1576,1580,1583,1607,1577,1608,1586,1581,1591,1610,1609,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,1,1,1,1,2,3,4,5,5,6,7,8,9,1,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1],
		true,
		false,
		false
	),
	new cipher(
		"Russian Ordinal",
		"Russian",
		120, 65, 62,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
		false,
		false,
		false
	),
	new cipher(
		"Russian R Ordinal",
		"Russian",
		146, 74, 50,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
		false,
		false,
		false
	),
	new cipher(
		"Russian Reduction",
		"Russian",
		216, 95, 73,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6],
		false,
		false,
		false
	),
	new cipher(
		"Russian R Reduction",
		"Russian",
		180, 60, 69,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1],
		false,
		false,
		false
	),
	new cipher(
		"Case Sensitive",
		"Extra",
		190, 50, 60,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
		true,
		false,
		true
	),
	new cipher(
		"Alt Case Sensitive",
		"Extra",
		127, 36, 62,
		[65,97,66,98,67,99,68,100,69,101,70,102,71,103,72,104,73,105,74,106,75,107,76,108,77,109,78,110,79,111,80,112,81,113,82,114,83,115,84,116,85,117,86,118,87,119,88,120,89,121,90,122],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
		true,
		false,
		true
	),
	new cipher(
		"Full KV Reduction",
		"Extra",
		200, 77, 63,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,1,11,3,4,5,6,7,8,9,1,2,3,22,5,6,7,8],
		true,
		false,
		false
	),
	new cipher(
		"Reverse EP Reduction",
		"Extra",
		165, 40, 56,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[8,7,6,5,22,3,2,1,9,8,7,6,5,4,3,11,1,9,8,7,6,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"Single Reduction",
		"Extra",
		219, 51, 68,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8],
		true,
		false,
		false
	),
	new cipher(
		"Reverse S Reduction",
		"Extra",
		176, 20, 56,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[8,7,6,5,4,3,2,10,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"Single KV Reduction",
		"Extra",
		204, 79, 64,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,1,11,3,4,5,6,7,8,9,10,2,3,22,5,6,7,8],
		true,
		false,
		false
	),
	new cipher(
		"Reverse S EP Reduction",
		"Extra",
		144, 21, 54,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[8,7,6,5,22,3,2,10,9,8,7,6,5,4,3,11,1,9,8,7,6,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"Satanic Gematria",
		"Extra",
		0, 100, 61,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],
		true,
		false,
		false
	),
	new cipher(
		"Reverse Satanic",
		"Extra",
		0, 61, 61,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36],
		true,
		false,
		false
	),
	new cipher(
		"Primes",
		"Extra",
		44, 56, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101],
		true,
		false,
		false
	),
	new cipher(
		"Reverse Primes",
		"Extra",
		35, 46, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[101,97,89,83,79,73,71,67,61,59,53,47,43,41,37,31,29,23,19,17,13,11,7,5,3,2],
		true,
		false,
		false
	),
	new cipher(
		"Trigonal",
		"Extra",
		34, 47, 59,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325,351],
		true,
		false,
		false
	),
	new cipher(
		"Reverse Trigonal",
		"Extra",
		23, 43, 53,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[351,325,300,276,253,231,210,190,171,153,136,120,105,91,78,66,55,45,36,28,21,15,10,6,3,1],
		true,
		false,
		false
	),
	new cipher(
		"Squares",
		"Extra",
		55, 39, 56,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676],
		true,
		false,
		false
	),
	new cipher(
		"Reverse Squares",
		"Extra",
		58, 29, 53,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[676,625,576,529,484,441,400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1],
		true,
		false,
		false
	),
	new cipher(
		"Septenary",
		"Extra",
		37, 54, 55,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,6,5,4,3,2,1,1,2,3,4,5,6,7,6,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"Cheiro Numerology",
		"Extra",
		79, 36, 61,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,8,3,5,1,1,2,3,4,5,7,8,1,2,3,4,6,6,6,5,1,7],
		true,
		false,
		false
	),
	new cipher(
		"Keypad",
		"Extra",
		300, 30, 72,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,9],
		true,
		false,
		false
	),
	new cipher(
		"Fibonacci",
		"Extra",
		25, 55, 70,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,1,2,3,5,8,13,21,34,55,89,144,233,233,144,89,55,34,21,13,8,5,3,2,1,1],
		true,
		false,
		false
	)
]
