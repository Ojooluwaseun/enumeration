import { Profile } from './profile-data';

export class AssetData{
    public ownerid?: string;
    public lga?: string;
    public ward?: string;
    public town?: string;
    public building_completion?: string;
    public building_occupancy?: string;
    public occupancy_type?: string;
    public building_purpose?: string;
    public building_type?: string;
    public value?: number;
    public latitude?: number;
    public longitude?: number;
    public houseNo?: string;
    public plotNo?: string;
    public blockNo?: string;
    public flatNo?: string;
    public streetName?: string;
    public districtName?: string;
    


    public profile?: any;

    public lgas = ['Agege', 'Ajeromi Ifelodun', 'Alimosho', 'Amuwo Odofin', 'Apapa', 'Badagry', 'Kosofe', 'Mushin', 'Oshodi Isolo', 'Ojo',  'Ikorodu', 'Surulere', 'Ifako-Ijaye', 'Shomolu', 'Amuwo-Odofin', 'Lagos Mainland', 'Ikeja', 'Eti-osa', 'Lagos Island', 'Epe', 'Ibeju Lekki'];
    public buildingtypes? = ['1 Storey', '2 Storey', '3 Storey', '4 Storey', '5 Storey', '6 Storey', 'High Rise'];
    public buildingcompletions? = ['Uncompleted', 'Completed', 'Not started'];
    public buildingoccupancies? = ['Occupied', 'Not Occupied'];
    public occupancytypes? = ['Owner', 'Tenants'];
    public buildingpurposes? = ['Residential', 'Commercial', 'Residential/Commercial'];
    }


export interface Asset{
    ownerid:string;
    id: number;
    lga: string;
    ward: string;
    town: string;
    building_purpose: string;
    building_type: string;
    
}