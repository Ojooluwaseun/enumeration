export class PayerData {
    constructor(
    public firstname?: string,
    public surname?: string,
    public middlename?: string,
    public othername?: string,
    public maritalstatus?: string,
    public dob?: Date,
    public nationality?: string,
    public state?: string,
    public lga?: string,
    public gender?: string,
    public office_address?: string,
    public jtbtin?: string,
    public lgaoforigin?: string,
    public stateoforigin?: string,
    public taxpayercompany?: string,
    public occupation?: string,
    public employstatus?: string,
    public email?: string,
    public phone?: string,
    public house_no?: string,
    public plot_no?: string,
    public block_no?: string,
    public flat_no?: string,
    public street_name?: string,
    public district_name?: string,

    
    public lgas = ['Agege', 'Ajeromi Ifelodun', 'Alimosho', 'Amuwo Odofin', 'Apapa', 'Badagry', 'Kosofe', 'Mushin', 'Oshodi Isolo', 'Ojo',  'Ikorodu', 'Surulere', 'Ifako-Ijaye', 'Shomolu', 'Amuwo-Odofin', 'Lagos Mainland', 'Ikeja', 'Eti-osa', 'Lagos Island', 'Epe', 'Ibeju Lekki'],    
    public states = [
    'Abia', 'Adamawa', 'Anambra', 'Akwa Ibom', 'Bauchi', 'Bayelsa', 'Benue', 'Bornu', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti',
    'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
    'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'],
    public status = ['Employed', 'Unemployed', 'Student']
    ){}
}

export interface Payer {
    id: number;
    firstname: string;
    surname: string;
    middlename: string;
    tin: string;
    phone: string;
}