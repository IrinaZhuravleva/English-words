{
  mode: 'ui',
  name: `Step 6. Prepare separately 2 container barcodes of parent material <MAT000311-1> and <MAT000311-2>
  Enter an existing <MAT000311-1> barcode.
  Click 'Save and Close' then OK`,
  uiOptions: { pageObject: MaterialContainersPage },
  expectedResult: `Confirmation modal window appears:
  The Lot status will be changed to "ready for Review". Continue? 
  Window is closed. 
  Green Toastr appears: "Reagent Lot F-000XXX has been created"
  You can see a new row at the top of the table with newly created lot.`,
  fn: async () => {
    const containersList = await RESTLotManagementSharedSteps.generateMaterialLotGetContainerCodes({
      containerType: Containers['50ML_EPPENDORF_CONICAL_TUBE'],
      containerLocation: LocationCode.BALTIMORE_AVAILABLE_CONTAINERS,
      reagentType: 'MAT000311',
      ifExpirationDate: true,
      containersAmount: 2,
      changeStatusToReadyForIssue: true,
    });
    // nebNext1 = containersList[0];
    // nebNext2 = containersList[1];
    const foundStorage = await modal.formulationTabScanBarcode<Storage>(containersList[0]);
    expect(foundStorage.code).to.equal(containersList[0]);
    // expect(get(foundStorage, 'json.materialLotId')).to.equal(parentLot[0].lotNumber);
    lot = await modal.createLot();
  },
},