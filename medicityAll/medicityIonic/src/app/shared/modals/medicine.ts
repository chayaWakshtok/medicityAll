export class Medicine {
    dbVersiob: string;
    dragRegNum: string;
    dragRegDate: string;
    dragHebName: string;
    dosageForm: string;
    bitulDate: string;
    iscanceled: boolean;
    prescription: boolean;
    usageForm: string;
    usageList: string[];
    dragEnName: string;
    activeComponents: ActiveComponent[];
    secondarySymptom?: any;
    packages: Package[];
    packagesPrices: string[];
    customerPrice: string;
    singlePrice: string;
    images: Image[];
    health: boolean;
    route: string;
    pages: number;
    results: number;
    dragRegOwner: string;
    barcodes: string;
    indications: string;
    activeComponentsDisplayName: string;
    activeComponentsCompareName: string;
    isCytotoxic: boolean;
    isVeterinary: boolean;
    applicationType: string;
    brochure: Brochure[];
    brochureUpdate?: any;
    isPrescription: boolean;
    usageFormHeb: string;
    usageFormEng: string;
    dosageFormEng: string;
    dragIndication: string;
    maxPrice: number;
    activeMetirals: ActiveMetiral[];
    regOwnerName: string;
    regManufactureName: string;
    regDate: number;
    regExpDate: number;
    applicationDate: number;
    custom: string;
    manufacturers: Manufacturer[];
    limitations: string;
    dateOfInclusion: string;
    indicationIncludedInTheBasket: string;
    classEffect: string;
    remarks: string;
    packingLimitation: string;
    registeredIndicationsAtTimeOfInclusion: string;
    frameworkOfInclusion: string;
    useInClalit: string;
    salList: SalList[];
    atc: Atc[];
    videos: any[];
}

export interface Brochure {
    lng: string;
    url: string;
    updateDate: number;
    type: string;
    display: string;
    updateDateFormat: string;
    creationDateFormat: string;
}

export interface ActiveMetiral {
    ingredientsDesc: string;
    dosage: string;
}

export interface Manufacturer {
    manufactureName: string;
    manufactureSite: string;
    manufactureComments: string;
}

export interface SalList {
    indication: string;
    include_date: string;
    clinic_desc: string;
    sickness_state: string;
    entitlement_basic: string;
    dr_actc_name: string;
}

export interface Atc {
    atc4Code: string;
    atc4Name: string;
    atc5Code: string;
    atc5Name: string;
}

export interface Package {
    isPrescription: boolean;
    packageUpdate: number;
    packageDesc: string;
    packMaterialDesc: string;
    unitPrice: number;
    packageMaxPrice: number;
    quantity: string;
    shelfLife: string;
    unit: string;
    barcode: string;
}

export interface ActiveComponent {
    componentName: string;
}

export interface Image {
    url: string;
}

export interface RootMedicine {
    hasNonSubsDrugs?: any;
    results: Medicine[];
}