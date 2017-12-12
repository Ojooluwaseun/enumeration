export class AssetData{
    public lga?: string;
    public ward?: string;
    public town?: string;
    public building_completion?: string;
    public building_function?: string;
    public building_occupancy?: Date;
    public occupancy_type?: string;
    public building_purpose?: string;
    public building_type?: string;
    public value?: number;
    public latitude?: number;
    public longitude?: number;
    public house_no?: string;
    public plot_no?: string;
    public block_no?: string;
    public flat_no?: string;
    public street_name?: string;
    public district_name?: string;
    }


export interface Asset{
    lga: string;
    ward: string;
    town: string;
    building_purpose: string;
    building_type: string;
}