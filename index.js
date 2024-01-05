const express = require('express')
const app = express()
const port = 3000

app.post('/mock/payment-cash-carry', (req, res) => {
  const content = {
    response: {
      journalSequence: '7060000',
      feeAmount: '0',
      totalAmount: '25850000.00',
      responseCode: '00',
      responseMessage: 'Sales order 4000010894 has been processed',
      header: {
        cabang: '0374',
        applicationNo: '230308501012',
        salesorganization: '2201',
        groupProduct: '00',
        shipTo: '1000010',
        plant: '1101',
        soldTo: '1000010',
        payer: '1000010',
        salesOffice: '2213',
        salesGroup: 'QB5',
        distributionChannel: '10',
        soNumber: '4000010894',
        doBlock: '10',
      },
      descriptionMessage: {
        bankCode: 'BRI',
        bankBranch: '0374',
        tellerId: '0374891',
        noTransaction: '12621443',
        dateOfTransaction: '08032023',
        dariRekening: '020601000020543',
        keRekening: '032901004610304',
      },
      productDetail: [
        {
          material: 'A040900076',
          trip: '1',
          qtyPerTrip: '10',
          uom: 'KL',
          requestedDeliveryDate: '08032023',
          transporter: null,
          confirmedQty: '10',
          confirmDeliveryDate: '08032023',
        },
      ],
      summarizedResults: {
        soCreditValue: '25850000.00',
        netvalue: '23500000.00',
        ppntax: '2350000.00',
        pphtax: '0.00',
        pbbkbtax: '0.00',
        grossvalue: '25850000.00',
        currency: 'IDR',
        debetorcreditnotevalue: '0.00',
      },
      message: {
        type: 'S',
        code: 'V4',
        descMsg: 'Sales order 4000010894 has been processed',
      },
    },
  }

  res.json(content)
})

app.post('/mock/payment-quotation', (req, res) => {
  const content = {
    "response": {
      "responseCode": "00",
      "responseMessage": "Sales order 4019295850 has been processed",
      "journalSeq": "7070000",
      "feeAmout": "0",
      "totalAmount": "69780000.00",
      "header": {
        "cabang": "0374",
        "quotationNumber": "4040004323",
        "applicationNo": "230314004947",
        "DOblock": "10",
        "SOnumber": "4000010922",
        "distributionChannel": "20",
        "salesGroup": "2MH",
        "salesOffice": "2223",
        "payer": "1000011",
        "shipTo": "1000012",
        "soldTo": "1000011",
        "plant": "1101",
        "groupProduct": "00",
        "salesOrganization": "2202"
      },
      "descriptionMessage": {
        "bankCode": "BRI",
        "bankBranch": "0374",
        "tellerId": "0374891",
        "noTransaction": "12622041",
        "dateOfTransaction": "14032023",
        "keRekening": "020601000002309",
        "dariRekening": "020601050752506"
      },
      "productDetail": [
        {
          "material": "A040900003",
          "trip": "1",
          "qtyPerTrip": "8",
          "UOM": "KL",
          "confirmDeliveryDate": "14012023",
          "confirmedQty": "8 ",
          "transporter": null,
          "requestedDeliveryDate": "14012023"
        }
      ],
      "summarizedResults": {
        "SOCreditValue": "69780000.00",
        "netValue": "60000000.00",
        "PPNTax": "6600000.00",
        "PPHTax": "180000.00",
        "PBBKBTax": "3000000.00",
        "grossValue": "69780000.00",
        "currency": "IDR",
        "debetOrCreditNoteValue": "0.00"
      },
      "message": {
        "type": "S",
        "code": "V4",
        "descMsg": "Sales order 4019295850 has been processed"
      }
    }
  }

  res.json(content)
})

app.post('/mock/payment-sa', (req, res) => {
  const content = {
    "response": {
      "journalSeq": "6505046",
      "responseCode": "00",
      "responseMessage": "Process succeeded, no errors encountered",
      "feeAmount": "0",
      "totalAmount": "12036.00",
      "header": [
        {
          "material": "A050410301",
          "qtyPerTrip": "560",
          "UOM": "B03",
          "confirmQty": "560",
          "confirmDeliveryDate": "30032023",
          "deliveryNumbers": "16162432",
          "debetOrCreditNoteValue": "0.00"
        },
        {
          "material": "A050410301",
          "qtyPerTrip": "560",
          "UOM": "B03",
          "confirmQty": "560",
          "confirmDeliveryDate": "30032023",
          "deliveryNumbers": "16162432",
          "debetOrCreditNoteValue": "0.00"
        }
      ],
      "message": [
        {
          "type": "S",
          "code": "",
          "descMsg": "Process succeeded, no errors encountered"
        }
      ]
    }
  }

  res.json(content)
})

app.post('/mock/simulate-cash-carry', (req, res) => {
  const content = {
    "response": {
      "responseCode": "00",
      "responseMessage": "Process succeeded, no errors encountered",
      "header": {
        "applicationNo": "2302225010099",
        "dariRekening": "001901000002560",
        "keRekening": "032901004610304",
        "currency": "IDR",
        "totalValueofSO": "25850000.00",
        "unitPemasaran": "",
        "descUpms": "C&T Fuel Retail",
        "productCode": "",
        "descOfProduct": "Common Division",
        "soldToCode": "",
        "soldToDescription": "PT. SPBU REGULER 7",
        "shipToCode": "",
        "shiptoDescription": "PT. SPBU REGULER 7",
        "payerCode": "",
        "payerDescription": "PT. SPBU REGULER 7",
        "depot": "",
        "descDepot": "Instalasi Medan Group",
        "salesOfficeCode": "",
        "salesOfficeDescription": "Rtl Fuel JBB",
        "salesGroupCode": "",
        "saleGroupDescription": "SBM Fuel 1 Bandung",
        "distributionChannelCode": "",
        "distributionChannelDesc": "Agent / Distributor"
      },
      "summarizedPriceResults": {
        "soCreditValue": "25850000.00",
        "netValue": "23500000.00",
        "ppnTax": "2350000.00",
        "pphTax": "0.00",
        "pbbkbTax": "0.00",
        "grossValue": "25850000.00",
        "currency": "IDR",
        "debetOrCreditNoteValue": "0.00"
      }
    }
  }

  res.json(content)
})

app.post('/mock/simulate-quotation', (req, res) => {
  const content = {
    "response": {
      "responseCode": "00",
      "responseMessage": "Process succeeded, no errors encountered",
      "applicationNo": "230222010630",
      "header": {
        "dariRekening": "020601000091308",
        "keRekening": "032901004610304",
        "currency": "IDR",
        "totalValueofSO": "69780000.00 ",
        "unitPemasaran": "2202",
        "descUpms": "C&T Indmar",
        "productCode": "00",
        "descOfProduct": "Common Division",
        "soldToCode": "1000011",
        "soldToDescription": "PT UNGGUL",
        "shipToCode": "1000012",
        "shipToDescription": "PT UNGGUL SURABAYA",
        "payerCode": "1000011",
        "payerDescription": "PT UNGGUL",
        "depot": "1101",
        "descDepot": "Instalasi Medan Group",
        "salesOfficeCode": "2223",
        "salesOfficeDescription": "Indmar JBB",
        "salesGroupCode": "2MH",
        "saleGroupDescription": "I&M 3 - SBM 1",
        "distributionChannelCode": "20",
        "distributionChannelDesc": "Direct"
      },
      "productDetail": [
        {
          "material": "A040900003",
          "trip": "1",
          "qtyPerTrip": "8",
          "UOM": "KL",
          "requestedDeliveryDate": "24022023",
          "transporter": "",
          "confirmedQty": "8",
          "confirmDeliveryDate": "24022023"
        }
      ],
      "summarizedPriceResults": {
        "SOCreditValue": "69780000.00",
        "netValue": "60000000.00",
        "PPNTax": "6600000.00",
        "PPHTax": "180000.00",
        "PBBKBTax": "3000000.00",
        "grossValue": "69780000.00",
        "currency": "IDR",
        "debetOrCreditNoteValue": "0.00"
      },
      "message": [
        {
          "type": "S",
          "code": "",
          "descMsg": "Process succeeded, no errors encountered"
        }
      ]
    }
  }

  res.json(content)
})

app.post('/mock/simulate-sa', (req, res) => {
  const content = {
    "response": {
      "responseCode": "00",
      "responseMessage": "Process succeeded, no errors encountered",
      "message": {
        "type": "S",
        "code": "",
        "descMsg": "Process succeeded, no errors encountered"
      },
      "header": {
        "dariRekening": "0206010003413305",
        "keRekening": "032901004612306",
        "schedulingAgreementNumber": "1553316",
        "validFrom": "01012023",
        "validTo": "31012023",
        "currency": "IDR",
        "totalValueOfDo": "25949192.00 ",
        "UnitPemasaran": "2205",
        "descUpms": "C&T LPG Retail",
        "productCode": "00",
        "descOfProduct": "Common Division",
        "soldToCode": "1000001",
        "soldToDescription": "PT. GAS MITRA UTAMA",
        "shipToCode": "1000001",
        "shipToDescription": "PT. GAS MITRA UTAMA",
        "payerCode": "1000001",
        "payerDescription": "PT. GAS MITRA UTAMA",
        "depot": "2246",
        "descDepot": "SPBE-Power Plus",
        "salesOfficeCode": "2253",
        "salesOfficeDescription": "Ret LPG JBB",
        "salesGroupCode": "5BU",
        "saleGroupDescription": "SBM LPG 2 Karawang",
        "distributionChannelCode": "10",
        "distributionChannelDesc": "Agent / Distributor"
      },
      "productDetail": [
        {
          "material": "A050410301",
          "trip": "1",
          "qtyPerTrip": "560",
          "UOM": "B03",
          "transporter": "",
          "confirmQty": "560",
          "confirmDeliveryDate": "06032023"
        },
        {
          "material": "A050410301",
          "trip": "1",
          "qtyPerTrip": "560",
          "UOM": "B03",
          "transporter": "",
          "confirmQty": "560",
          "confirmDeliveryDate": "06032023"
        },
        {
          "material": "A050410301",
          "trip": "1",
          "qtyPerTrip": "560",
          "UOM": "B03",
          "transporter": "",
          "confirmQty": "560",
          "confirmDeliveryDate": "07032023"
        },
        {
          "material": "A050410301",
          "trip": "1",
          "qtyPerTrip": "560",
          "UOM": "B03",
          "transporter": "",
          "confirmQty": "560",
          "confirmDeliveryDate": "07032023"
        }
      ],
      "summarizedPriceResults": {
        "DOCredit_Value": "25949192.00",
        "netValue": "23041736.00",
        "PPNTax": "2830268.00",
        "PPHTax": "77188.00",
        "PBBKBTax": "0.00",
        "grossValue": "25949192.00",
        "currency": "IDR",
        "debetOrCreditNoteValue": "0.00"
      },
      "applicationNo": "210308004321"
    }
  }

  res.json(content)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
