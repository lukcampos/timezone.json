var timeZones =[
  { abreviation: 'CEST', offset: 7200 },
  { abreviation: 'CET', offset: 3600 },
  { abreviation: 'WET', offset: 0 },
  { abreviation: 'ROTT', offset: -10800 },
  { abreviation: 'CST', offset: -21600 },
  { abreviation: 'LMT', offset: -25116 },
  { abreviation: 'MDT', offset: -21600 },
  { abreviation: 'MPT', offset: -21600 },
  { abreviation: 'MST', offset: -25200 },
  { abreviation: 'MWT', offset: -21600 },
  { abreviation: 'CDT', offset: -18000 },
  { abreviation: 'EST', offset: -18000 },
  { abreviation: 'MDDT', offset: -18000 },
  { abreviation: 'PDDT', offset: -21600 },
  { abreviation: 'PST', offset: -28800 },
  { abreviation: 'PDT', offset: -25200 },
  { abreviation: 'PPT', offset: -25200 },
  { abreviation: 'PWT', offset: -25200 },
  { abreviation: 'ARST', offset: -10800 },
  { abreviation: 'ART', offset: -14400 },
  { abreviation: 'CLST', offset: -10800 },
  { abreviation: 'CLT', offset: -14400 },
  { abreviation: 'YDDT', offset: -25200 },
  { abreviation: 'YDT', offset: -28800 },
  { abreviation: 'YPT', offset: -28800 },
  { abreviation: 'YST', offset: -32400 },
  { abreviation: 'YWT', offset: -28800 },
  { abreviation: 'CCT', offset: 23400 },
  { abreviation: 'WAT', offset: 3600 },
  { abreviation: 'CAT', offset: 7200 },
  { abreviation: 'GMT', offset: 0 },
  { abreviation: 'CKHST', offset: -34200 },
  { abreviation: 'CKT', offset: -37800 },
  { abreviation: 'MAWT', offset: 21600 },
  { abreviation: 'SMT', offset: -16966 },
  { abreviation: 'EASST', offset: -21600 },
  { abreviation: 'EAST', offset: -25200 },
  { abreviation: 'EMT', offset: -26248 },
  { abreviation: 'XJT', offset: 21600 },
  { abreviation: 'BMT', offset: -17776 },
  { abreviation: 'COST', offset: -14400 },
  { abreviation: 'COT', offset: -18000 },
  { abreviation: 'SJMT', offset: -20173 },
  { abreviation: 'HMT', offset: -19776 },
  { abreviation: 'CVST', offset: -3600 },
  { abreviation: 'CVT', offset: -7200 },
  { abreviation: 'ANT', offset: -16200 },
  { abreviation: 'AST', offset: -14400 },
  { abreviation: 'DAVT', offset: 25200 },
  { abreviation: 'CXT', offset: 25200 },
  { abreviation: 'EEST', offset: 10800 },
  { abreviation: 'EET', offset: 7200 },
  { abreviation: 'CEMT', offset: 10800 },
  { abreviation: 'BEAT', offset: 9000 },
  { abreviation: 'BEAUT', offset: 9900 },
  { abreviation: 'EAT', offset: 10800 },
  { abreviation: 'EDT', offset: -14400 },
  { abreviation: 'EHDT', offset: -16200 },
  { abreviation: 'SDMT', offset: -16800 },
  { abreviation: 'PMT', offset: 561 },
  { abreviation: 'WEST', offset: 3600 },
  { abreviation: 'AWST', offset: 28800 },
  { abreviation: 'CAST', offset: 39600 },
  { abreviation: 'ECT', offset: -18000 },
  { abreviation: 'QMT', offset: -18840 },
  { abreviation: 'GALT', offset: -21600 },
  { abreviation: 'MSD', offset: 14400 },
  { abreviation: 'MSK', offset: 10800 },
  { abreviation: 'TMT', offset: 5940 },
  { abreviation: 'WEMT', offset: 7200 },
  { abreviation: 'CANT', offset: -3600 },
  { abreviation: 'VOST', offset: 21600 },
  { abreviation: 'FJST', offset: 46800 },
  { abreviation: 'FJT', offset: 43200 },
  { abreviation: 'FKST', offset: -10800 },
  { abreviation: 'FKT', offset: -14400 },
  { abreviation: 'CHUT', offset: 36000 },
  { abreviation: 'PONT', offset: 39600 },
  { abreviation: 'KOST', offset: 39600 },
  { abreviation: 'BDST', offset: 7200 },
  { abreviation: 'BST', offset: 3600 },
  { abreviation: 'DDUT', offset: 36000 },
  { abreviation: 'GEST', offset: 18000 },
  { abreviation: 'GET', offset: 14400 },
  { abreviation: 'TBIST', offset: 18000 },
  { abreviation: 'TBIT', offset: 10800 },
  { abreviation: 'TBMT', offset: 10751 },
  { abreviation: 'GFT', offset: -14400 },
  { abreviation: 'GHST', offset: 1200 },
  { abreviation: 'WGST', offset: -7200 },
  { abreviation: 'WGT', offset: -10800 },
  { abreviation: 'CGST', offset: -3600 },
  { abreviation: 'CGT', offset: -7200 },
  { abreviation: 'EGST', offset: 0 },
  { abreviation: 'EGT', offset: -3600 },
  { abreviation: 'ADT', offset: -10800 },
  { abreviation: 'SYOT', offset: 10800 },
  { abreviation: 'AMT', offset: 5692 },
  { abreviation: 'GST', offset: -7200 },
  { abreviation: 'ChST', offset: 36000 },
  { abreviation: 'GBGT', offset: -13500 },
  { abreviation: 'GYT', offset: -13500 },
  { abreviation: 'UTC', offset: 0 },
  { abreviation: 'HKST', offset: 32400 },
  { abreviation: 'HKT', offset: 28800 },
  { abreviation: 'JST', offset: 32400 },
  { abreviation: 'PPMT', offset: -17340 },
  { abreviation: 'JAVT', offset: 26400 },
  { abreviation: 'WIB', offset: 27000 },
  { abreviation: 'WITA', offset: 28800 },
  { abreviation: 'MMT', offset: 28656 },
  { abreviation: 'ACST', offset: 34200 },
  { abreviation: 'WIT', offset: 32400 },
  { abreviation: 'DMT', offset: -1521 },
  { abreviation: 'IST', offset: 3600 },
  { abreviation: 'CMT', offset: -15408 },
  { abreviation: 'IDDT', offset: 14400 },
  { abreviation: 'IDT', offset: 10800 },
  { abreviation: 'JMT', offset: 8440 },
  { abreviation: 'BURT', offset: 23400 },
  { abreviation: 'IOT', offset: 18000 },
  { abreviation: 'IRDT', offset: 16200 },
  { abreviation: 'IRST', offset: 12600 },
  { abreviation: 'ISST', offset: 0 },
  { abreviation: 'KMT', offset: -18431 },
  { abreviation: 'WART', offset: -14400 },
  { abreviation: 'JCST', offset: 32400 },
  { abreviation: 'JDT', offset: 36000 },
  { abreviation: 'FRUST', offset: 25200 },
  { abreviation: 'FRUT', offset: 21600 },
  { abreviation: 'KGST', offset: 21600 },
  { abreviation: 'KGT', offset: 18000 },
  { abreviation: 'ICT', offset: 25200 },
  { abreviation: 'GILT', offset: 43200 },
  { abreviation: 'PHOT', offset: -43200 },
  { abreviation: 'LINT', offset: -38400 },
  { abreviation: 'KST', offset: 30600 },
  { abreviation: 'KDT', offset: 34200 },
  { abreviation: 'ALMST', offset: 25200 },
  { abreviation: 'ALMT', offset: 21600 },
  { abreviation: 'KIZST', offset: 21600 },
  { abreviation: 'KIZT', offset: 18000 },
  { abreviation: 'QYZST', offset: 25200 },
  { abreviation: 'QYZT', offset: 21600 },
  { abreviation: 'AKTST', offset: 21600 },
  { abreviation: 'AKTT', offset: 18000 },
  { abreviation: 'AQTST', offset: 21600 },
  { abreviation: 'AQTT', offset: 18000 },
  { abreviation: 'FORT', offset: 18000 },
  { abreviation: 'SHEST', offset: 21600 },
  { abreviation: 'SHET', offset: 18000 },
  { abreviation: 'ORAST', offset: 18000 },
  { abreviation: 'ORAT', offset: 14400 },
  { abreviation: 'URAST', offset: 21600 },
  { abreviation: 'URAT', offset: 18000 },
  { abreviation: 'WARST', offset: -10800 },
  { abreviation: 'IHST', offset: 21600 },
  { abreviation: 'LKT', offset: 23400 },
  { abreviation: 'LRT', offset: -2670 },
  { abreviation: 'SAST', offset: 7200 },
  { abreviation: 'WMT', offset: 5040 },
  { abreviation: 'LST', offset: 9394 },
  { abreviation: 'RMT', offset: 5794 },
  { abreviation: 'MHT', offset: 39600 },
  { abreviation: 'KWAT', offset: -43200 },
  { abreviation: 'ULAST', offset: 32400 },
  { abreviation: 'ULAT', offset: 25200 },
  { abreviation: 'HOVST', offset: 28800 },
  { abreviation: 'HOVT', offset: 21600 },
  { abreviation: 'CHOST', offset: 36000 },
  { abreviation: 'CHOT', offset: 32400 },
  { abreviation: 'MOST', offset: 32400 },
  { abreviation: 'MOT', offset: 28800 },
  { abreviation: 'FFMT', offset: -14660 },
  { abreviation: 'MUST', offset: 18000 },
  { abreviation: 'MUT', offset: 14400 },
  { abreviation: 'MVT', offset: 18000 },
  { abreviation: 'CWT', offset: -18000 },
  { abreviation: 'MALST', offset: 26400 },
  { abreviation: 'MALT', offset: 26400 },
  { abreviation: 'MYT', offset: 28800 },
  { abreviation: 'BORT', offset: 28800 },
  { abreviation: 'BORTST', offset: 30000 },
  { abreviation: 'SWAT', offset: 5400 },
  { abreviation: 'WAST', offset: 7200 },
  { abreviation: 'NCST', offset: 43200 },
  { abreviation: 'NCT', offset: 39600 },
  { abreviation: 'NFST', offset: 45000 },
  { abreviation: 'NFT', offset: 41400 },
  { abreviation: 'NMT', offset: 40320 },
  { abreviation: 'NEST', offset: 4800 },
  { abreviation: 'NET', offset: 1200 },
  { abreviation: 'NST', offset: 4772 },
  { abreviation: 'NPT', offset: 20700 },
  { abreviation: 'NRT', offset: 41400 },
  { abreviation: 'NUT', offset: -40800 },
  { abreviation: 'NZDT', offset: 46800 },
  { abreviation: 'NZMT', offset: 41400 },
  { abreviation: 'NZST', offset: 43200 },
  { abreviation: 'CHADT', offset: 49500 },
  { abreviation: 'CHAST', offset: 44100 },
  { abreviation: 'PEST', offset: -14400 },
  { abreviation: 'PET', offset: -18000 },
  { abreviation: 'TAHT', offset: -36000 },
  { abreviation: 'MART', offset: -34200 },
  { abreviation: 'GAMT', offset: -32400 },
  { abreviation: 'PGT', offset: 36000 },
  { abreviation: 'PHST', offset: 32400 },
  { abreviation: 'PHT', offset: 28800 },
  { abreviation: 'KART', offset: 18000 },
  { abreviation: 'PKST', offset: 21600 },
  { abreviation: 'PKT', offset: 18000 },
  { abreviation: 'PMDT', offset: -7200 },
  { abreviation: 'PMST', offset: -10800 },
  { abreviation: 'PNT', offset: -30600 },
  { abreviation: 'APT', offset: -10800 },
  { abreviation: 'AWT', offset: -10800 },
  { abreviation: 'FMT', offset: -4056 },
  { abreviation: 'MADMT', offset: 3600 },
  { abreviation: 'MADST', offset: 0 },
  { abreviation: 'MADT', offset: -3600 },
  { abreviation: 'AZOMT', offset: 0 },
  { abreviation: 'AZOST', offset: -3600 },
  { abreviation: 'AZOT', offset: -7200 },
  { abreviation: 'AFT', offset: 14400 },
  { abreviation: 'PYST', offset: -10800 },
  { abreviation: 'PYT', offset: -14400 },
  { abreviation: 'RET', offset: 14400 },
  { abreviation: 'FET', offset: 10800 },
  { abreviation: 'MDST', offset: 16279 },
  { abreviation: 'MSM', offset: 18000 },
  { abreviation: 'STAT', offset: 14400 },
  { abreviation: 'TSAT', offset: 10800 },
  { abreviation: 'VOLST', offset: 18000 },
  { abreviation: 'VOLT', offset: 14400 },
  { abreviation: 'KUYST', offset: 18000 },
  { abreviation: 'KUYT', offset: 14400 },
  { abreviation: 'SAMST', offset: 18000 },
  { abreviation: 'SAMT', offset: 14400 },
  { abreviation: 'SST', offset: -39600 },
  { abreviation: 'SVEST', offset: 21600 },
  { abreviation: 'SVET', offset: 18000 },
  { abreviation: 'YEKST', offset: 21600 },
  { abreviation: 'YEKT', offset: 18000 },
  { abreviation: 'OMSST', offset: 25200 },
  { abreviation: 'OMST', offset: 21600 },
  { abreviation: 'NOVST', offset: 25200 },
  { abreviation: 'NOVT', offset: 25200 },
  { abreviation: 'KRAST', offset: 28800 },
  { abreviation: 'KRAT', offset: 25200 },
  { abreviation: 'IMT', offset: 25025 },
  { abreviation: 'IRKST', offset: 32400 },
  { abreviation: 'IRKT', offset: 28800 },
  { abreviation: 'YAKST', offset: 36000 },
  { abreviation: 'YAKT', offset: 32400 },
  { abreviation: 'VLAST', offset: 39600 },
  { abreviation: 'VLAT', offset: 36000 },
  { abreviation: 'SAKST', offset: 39600 },
  { abreviation: 'SAKT', offset: 39600 },
  { abreviation: 'MAGST', offset: 43200 },
  { abreviation: 'MAGT', offset: 39600 },
  { abreviation: 'SRET', offset: 39600 },
  { abreviation: 'PETST', offset: 46800 },
  { abreviation: 'PETT', offset: 43200 },
  { abreviation: 'ANAST', offset: 46800 },
  { abreviation: 'ANAT', offset: 46800 },
  { abreviation: 'SBT', offset: 39600 },
  { abreviation: 'SCT', offset: 14400 },
  { abreviation: 'AEST', offset: 36000 },
  { abreviation: 'LHDT', offset: 39600 },
  { abreviation: 'LHST', offset: 37800 },
  { abreviation: 'SGT', offset: 27000 },
  { abreviation: 'AEDT', offset: 39600 },
  { abreviation: 'MIST', offset: 39600 },
  { abreviation: 'NEGT', offset: -12600 },
  { abreviation: 'SRT', offset: -12600 },
  { abreviation: 'TFT', offset: 18000 },
  { abreviation: 'DUSST', offset: 25200 },
  { abreviation: 'DUST', offset: 21600 },
  { abreviation: 'TJT', offset: 18000 },
  { abreviation: 'TKT', offset: -39600 },
  { abreviation: 'TLT', offset: 28800 },
  { abreviation: 'ASHST', offset: 21600 },
  { abreviation: 'ASHT', offset: 18000 },
  { abreviation: 'TOST', offset: 50400 },
  { abreviation: 'TOT', offset: 44400 },
  { abreviation: 'TRST', offset: 14400 },
  { abreviation: 'TRT', offset: 10800 },
  { abreviation: 'TVT', offset: 43200 },
  { abreviation: 'JWST', offset: 28800 },
  { abreviation: 'CUT', offset: 8400 },
  { abreviation: 'HDT', offset: -34200 },
  { abreviation: 'HST', offset: -37800 },
  { abreviation: 'WAKT', offset: 43200 },
  { abreviation: 'EPT', offset: -14400 },
  { abreviation: 'EWT', offset: -14400 },
  { abreviation: 'CPT', offset: -18000 },
  { abreviation: 'ACDT', offset: 37800 },
  { abreviation: 'AHDT', offset: -32400 },
  { abreviation: 'AHST', offset: -36000 },
  { abreviation: 'AKDT', offset: -28800 },
  { abreviation: 'AKST', offset: -32400 },
  { abreviation: 'CAPT', offset: -32400 },
  { abreviation: 'CAWT', offset: -32400 },
  { abreviation: 'BDT', offset: -36000 },
  { abreviation: 'NWT', offset: -36000 },
  { abreviation: 'UYHST', offset: -10800 },
  { abreviation: 'UYST', offset: -7200 },
  { abreviation: 'UYT', offset: -10800 },
  { abreviation: 'TAST', offset: 21600 },
  { abreviation: 'UZST', offset: 21600 },
  { abreviation: 'UZT', offset: 18000 },
  { abreviation: 'TASST', offset: 25200 },
  { abreviation: 'VET', offset: -14400 },
  { abreviation: 'VUST', offset: 43200 },
  { abreviation: 'VUT', offset: 39600 },
  { abreviation: 'WFT', offset: 43200 },
  { abreviation: 'SDT', offset: -36000 },
  { abreviation: 'WSDT', offset: 50400 },
  { abreviation: 'WSST', offset: -41400 },
  { abreviation: 'AWDT', offset: 32400 },
  { abreviation: 'ACWDT', offset: 35100 },
  { abreviation: 'ACWST', offset: 31500 },
  { abreviation: 'AZST', offset: 18000 },
  { abreviation: 'AZT', offset: 14400 },
  { abreviation: 'BAKST', offset: 18000 },
  { abreviation: 'BAKT', offset: 10800 },
  { abreviation: 'DACT', offset: 21600 },
  { abreviation: 'BNT', offset: 28800 },
  { abreviation: 'BOST', offset: -12756 },
  { abreviation: 'BOT', offset: -14400 },
  { abreviation: 'FNST', offset: -3600 },
  { abreviation: 'FNT', offset: -7200 },
  { abreviation: 'BRST', offset: -7200 },
  { abreviation: 'BRT', offset: -10800 },
  { abreviation: 'AMST', offset: 18000 },
  { abreviation: 'YERST', offset: 18000 },
  { abreviation: 'YERT', offset: 10800 },
  { abreviation: 'ACT', offset: -18000 },
  { abreviation: 'BTT', offset: 21600 },
  { abreviation: 'CHDT', offset: -19800 },
  { abreviation: 'NDDT', offset: -5400 },
  { abreviation: 'NDT', offset: -9000 },
  { abreviation: 'ADDT', offset: -7200 },
  { abreviation: 'EDDT', offset: -10800 },
  { abreviation: 'CDDT', offset: -14400 }
]

exports.timeZones = timeZones;
