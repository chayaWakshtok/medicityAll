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
    packages: string[];
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