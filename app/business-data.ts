export class BusinessData{
    public ownerid?: string;
    public business_name?: string;
    public lga?: string;
    public ward?: string;
    public town?: string;
    public category?: string;
    public operation?: string;
    public sector?: string;
    public structure?: string;
    public subsector?: string;
    public business_type?: string;
    public value?: number;
    public latitude?: number;
    public longitude?: number;
    public registered_date?: Date;
    public houseNo?: string;
    public plotNo?: string;
    public blockNo?: string;
    public flatNo?: string;
    public streetName?: string;
    public districtName?: string;
    public reg_date? : string;

    
    public assetid? : number;
    public profile?: any;

    public lgas = ['Agege', 'Ajeromi Ifelodun', 'Alimosho', 'Amuwo Odofin', 'Apapa', 'Badagry', 'Kosofe', 'Mushin', 'Oshodi Isolo', 'Ojo',  'Ikorodu', 'Surulere', 'Ifako-Ijaye', 'Shomolu', 'Amuwo-Odofin', 'Lagos Mainland', 'Ikeja', 'Eti-osa', 'Lagos Island', 'Epe', 'Ibeju Lekki'];
}
