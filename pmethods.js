[{
	"id": "cordobesa",
	"name": "Cordobesa",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/cordobesa.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/cordobesa.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^((542702)|(544764)|(550073)|(528824))",
			"installments_pattern": "^((542702)|(544764)|(550073))",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_name", "cardholder_identification_type", "cardholder_identification_number"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "mercadopago_cc",
	"name": "Mercado Pago + Banco Patagonia",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://http2.mlstatic.com/storage/logos-api-admin/dbf74650-b234-11e9-b872-f9cdde9240f0-m@2x.png",
	"thumbnail": "https://http2.mlstatic.com/storage/logos-api-admin/dbf74650-b234-11e9-b872-f9cdde9240f0-m@2x.png",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^((515073)|(515070)|(532384))",
			"installments_pattern": "^((515073)|(515070)|(532384))",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}, {
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^(532383)",
			"installments_pattern": "^(532383)",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "optional"
		}
	}],
	"additional_info_needed": ["cardholder_name", "cardholder_identification_type", "cardholder_identification_number"],
	"min_allowed_amount": 0,
	"max_allowed_amount": 250000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "cencosud",
	"name": "Cencosud",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/cencosud.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/cencosud.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^(603493)",
			"installments_pattern": "^(603493)",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_name", "cardholder_identification_type", "cardholder_identification_number"],
	"min_allowed_amount": 0,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "debmaster",
	"name": "Mastercard Débito",
	"payment_type_id": "debit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/debmaster.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/debmaster.gif",
	"deferred_capture": "unsupported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^(542878|560718|512834|511673|555889|551314|526497|524313|559926|559109|559100|557917|551200|541409|539110|536671|536670|536560|533888|533871|533860|533423|531179|531141|530779|522128|518787|515845|505865|505864|505863|232004|559219|557069|555902|554630|552999|550480|549807|547883|542755|542744|542734|538172|537067|536196|532309|531984|531441|530815|530561|530516|528824|527341|525562|525337|523793|522713|522428|519879|519020|516656|512258|511658|511657|501108|501107|501104|501092|230937|230933|230895|230867|230724|230709|230688|230570|526461|514365|514256|514586|511309|514285|553839|553777|553771|551792|528733|549180|528745|517562|511849|557648|546367)",
			"installments_pattern": "",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_identification_number", "cardholder_identification_type", "cardholder_name", "issuer_id"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 1440,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "debcabal",
	"name": "Cabal Débito",
	"payment_type_id": "debit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/debcabal.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/debcabal.gif",
	"deferred_capture": "unsupported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^(604201)",
			"installments_pattern": "^(604201)",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_identification_number", "cardholder_identification_type", "cardholder_name"],
	"min_allowed_amount": 0,
	"max_allowed_amount": 700000,
	"accreditation_time": 1440,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "argencard",
	"name": "Argencard",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/argencard.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/argencard.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^(501105)",
			"installments_pattern": "^(501105)",
			"exclusion_pattern": "^((589562)|(527571)|(527572))"
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_identification_type", "cardholder_name", "cardholder_identification_number"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "maestro",
	"name": "Maestro",
	"payment_type_id": "debit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/maestro.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/maestro.gif",
	"deferred_capture": "unsupported",
	"settings": [{
		"card_number": {
			"validation": "none",
			"length": 18
		},
		"bin": {
			"pattern": "^(501068|501051|501059|557909|501066|588729|501075|501062|501060|501057|501056|501055|501053|501043|501041|501038|501028|501023|501021|501020|501018|501016)",
			"installments_pattern": "",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}, {
		"card_number": {
			"validation": "none",
			"length": 19
		},
		"bin": {
			"pattern": "^(501068|601782|508143|501081|501080)",
			"installments_pattern": "",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_identification_number", "cardholder_identification_type", "cardholder_name"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 1440,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "master",
	"name": "Mastercard",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/master.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/master.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^(5|(2(221|222|223|224|225|226|227|228|229|23|24|25|26|27|28|29|3|4|5|6|70|71|720)))",
			"installments_pattern": "^(?!(554730|525855))",
			"exclusion_pattern": "^(542878|532383|515073|515070|532384|560718|555889|551314|526497|524313|588800|559926|559109|559100|557917|551200|541409|539110|536671|536670|536560|533888|533871|533860|533423|531179|531141|530779|522128|518787|515845|505865|505864|505863|232004|559219|557069|555902|554630|552999|550480|549807|547883|542755|542744|542734|538172|537067|536196|532309|531984|531441|530815|530561|530516|528824|527341|525562|525337|523793|522713|522684|522428|519879|519020|516656|512258|511658|511657|501108|501107|501104|501092|230937|230933|230895|230867|230724|230709|230688|230570|593628|592501|593626|514256|514586|526461|511309|514285|501059|557909|501082|589633|501060|501051|501016|589657|553839|553777|553771|551792|528733|549180|528745|517562|511849|557648|546367|501070|601782|508143|501085|501074|501073|501071|501068|501066|589671|589633|588729|501089|501083|501082|501081|501080|501075|501067|501062|501061|501060|501058|501057|501056|501055|501054|501053|501051|501049|501047|501045|501043|501041|501040|501039|501038|501029|501028|501027|501026|501025|501024|501023|501021|501020|501018|501016|501015|589657|589562|501105|557039|542702|544764|550073|528824|562397|566694|566783|568382|569322|504363|504338|504777)"
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_identification_type", "cardholder_name", "cardholder_identification_number", "issuer_id"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "tarshop",
	"name": "Tarjeta Shopping",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/tarshop.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/tarshop.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "none",
			"length": 13
		},
		"bin": {
			"pattern": "^(27995)",
			"installments_pattern": "^(27995)",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 0,
			"card_location": "back",
			"mode": "optional"
		}
	}],
	"additional_info_needed": ["cardholder_name", "cardholder_identification_number", "cardholder_identification_type"],
	"min_allowed_amount": 0,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "cabal",
	"name": "Cabal",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/cabal.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/cabal.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^((627170)|(589657)|(603522)|(604((20[1-9])|(2[1-9][0-9])|(3[0-9]{2})|(400))))",
			"installments_pattern": "^((627170)|(589657)|(603522)|(604((20[1-9])|(2[1-9][0-9])|(3[0-9]{2})|(400))))",
			"exclusion_pattern": "^(604201)"
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_name", "cardholder_identification_type", "cardholder_identification_number"],
	"min_allowed_amount": 0,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "diners",
	"name": "Diners",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/diners.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/diners.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 14
		},
		"bin": {
			"pattern": "^((30)|(36)|(38))",
			"installments_pattern": "^((360935)|(360936))",
			"exclusion_pattern": "^((3646)|(3648))"
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_identification_type", "cardholder_name", "cardholder_identification_number"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "amex",
	"name": "American Express",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/amex.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/amex.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 15
		},
		"bin": {
			"pattern": "^((34)|(37))",
			"installments_pattern": "^((34)|(37))",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 4,
			"card_location": "front",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_identification_number", "cardholder_identification_type", "cardholder_name"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "naranja",
	"name": "Naranja",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/naranja.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/naranja.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "none",
			"length": 16
		},
		"bin": {
			"pattern": "^(589562)",
			"installments_pattern": "^(589562)",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_identification_type", "cardholder_name", "cardholder_identification_number"],
	"min_allowed_amount": 0,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "cmr",
	"name": "CMR",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/cmr.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/cmr.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^(557039)",
			"installments_pattern": "^(557039)",
			"exclusion_pattern": null
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_name", "cardholder_identification_type", "cardholder_identification_number"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "visa",
	"name": "Visa",
	"payment_type_id": "credit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/visa.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/visa.gif",
	"deferred_capture": "supported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^4",
			"installments_pattern": "^4",
			"exclusion_pattern": "^(456936|493764|492115|406663|485089|480724|480460|480459|478601|487221|486665|486547|485947|478017|477169|474531|469874|457664|457308|455890|452133|452132|450811|450799|444268|441046|437999|421541|400930|421541|400930|483049|480860|480857|480852|480461|478018|492598|492597|492596|487053|486662|486587|472090|468574|468549|466904|458918|452997|452996|451696|451253|434948|417857|417856|410016|404854|404031|400440|480869|490889|409230|410352|454970|420884|476940|419080|476520|473713|473713|473227|444493|410122|405517|402789|417856|448712|453770|434541|411199|423465|434540|434542|434538|423018|488241|489634|434537|434539|434536|427156|427157|434535|434534|434533|423077|434532|434586|423001|434531|411197|443264|400276|400615|402914|404625|405069|434543|416679|405515|405516|405755|405896|405897|406290|406291|406375|406652|406998|406999|408515|410082|410083|410121|410123|410853|411849|417309|421738|423623|428062|428063|428064|434795|437996|439818|442371|442548|444060|446343|446344|446347|450412|450799|451377|451701|451751|451756|451757|451758|451761|451763|451764|451765|451766|451767|451768|451769|451770|451772|451773|457596|457665|462815|463465|468508|473710|473711|473712|473714|473715|473716|473717|473718|473719|473720|473721|473722|473725|477051|477053|481397|481501|481502|481550|483002|483020|483188|489412|492528|499859|446344|446345|446346|400448)"
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_name", "cardholder_identification_type", "cardholder_identification_number"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "debvisa",
	"name": "Visa Débito",
	"payment_type_id": "debit_card",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/debvisa.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/debvisa.gif",
	"deferred_capture": "unsupported",
	"settings": [{
		"card_number": {
			"validation": "standard",
			"length": 16
		},
		"bin": {
			"pattern": "^(456936|493764|492115|483049|480860|480857|480852|480461|478018|492598|492597|492596|487053|486662|486587|472090|468574|468549|466904|458918|452997|452996|451696|451253|434948|417857|417856|410016|404854|404031|400440|480869|490889|409230|410352|454970|20884|400276|400448|400615|400930|402789|402914|404022|404625|405069|405511|405515|405516|405517|405755|405896|405897|406165|406190|406191|406192|406193|406194|406195|406196|406290|406291|406375|406652|406998|406999|408134|408515|410082|410083|410121|410122|410123|410853|411197|411199|411849|412944|413180|416679|416861|417309|417856|417857|421518|421528|421541|421738|423001|423018|423077|423090|423465|423613|423613|423623|424968|424969|426618|427156|427157|428062|428063|428064|429751|429752|431070|431071|434531|434532|434533|434534|434535|434536|434537|434538|434539|434540|434541|434542|434543|434549|434550|434586|434795|437996|437999|438050|438051|438844|439818|441046|442371|442548|443264|444047|444060|444267|444268|444493|446343|446344|446345|446346|446347|448712|450412|450799|450811|451377|451701|451751|451756|451757|451758|451761|451763|451764|451765|451766|451767|451768|451769|451770|451772|451773|452132|452133|453770|455890|457308|457596|457664|457665|459300|462815|463465|464855|468508|469283|469874|472041|472042|473227|473365|473710|473711|473712|473713|473714|473715|473716|473717|473718|473719|473720|473721|473722|473725|474531|476520|477051|477053|477169|478017|478527|478601|480459|480460|480724|480860|481397|481501|481502|481550|483002|483020|483188|485089|485947|486547|486587|486621|486665|487221|488241|489412|489634|492499|492528|492596|492597|492598|499859)",
			"installments_pattern": "",
			"exclusion_pattern": "^(491580)"
		},
		"security_code": {
			"length": 3,
			"card_location": "back",
			"mode": "mandatory"
		}
	}],
	"additional_info_needed": ["cardholder_name", "cardholder_identification_type", "cardholder_identification_number"],
	"min_allowed_amount": 1,
	"max_allowed_amount": 700000,
	"accreditation_time": 2880,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "pagofacil",
	"name": "Pago Fácil",
	"payment_type_id": "ticket",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pagofacil.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/pagofacil.gif",
	"deferred_capture": "does_not_apply",
	"settings": [],
	"additional_info_needed": [],
	"min_allowed_amount": 50,
	"max_allowed_amount": 200000,
	"accreditation_time": 0,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "rapipago",
	"name": "Rapipago",
	"payment_type_id": "ticket",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/rapipago.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/rapipago.gif",
	"deferred_capture": "does_not_apply",
	"settings": [],
	"additional_info_needed": [],
	"min_allowed_amount": 50,
	"max_allowed_amount": 200000,
	"accreditation_time": 0,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "bapropagos",
	"name": "Provincia NET Pagos",
	"payment_type_id": "ticket",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/bapropagos.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/bapropagos.gif",
	"deferred_capture": "does_not_apply",
	"settings": [],
	"additional_info_needed": [],
	"min_allowed_amount": 0.01,
	"max_allowed_amount": 60000,
	"accreditation_time": 0,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}, {
	"id": "cargavirtual",
	"name": "Kioscos y comercios cercanos",
	"payment_type_id": "ticket",
	"status": "active",
	"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/cargavirtual.gif",
	"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/cargavirtual.gif",
	"deferred_capture": "does_not_apply",
	"settings": [],
	"additional_info_needed": [],
	"min_allowed_amount": 0.01,
	"max_allowed_amount": 5000,
	"accreditation_time": 0,
	"financial_institutions": [],
	"processing_modes": ["aggregator"]
}]