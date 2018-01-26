
export class RevenueData{
    public name?: string;
	public mda?: string;
	public ipsacode?: string;
	public amount?: number;
    public mdas? = ['Lagos Ministry of the Environment','Lagos State Ministry of Agriculture & Cooperatives','Lagos State Ministry of Health','Lagos State Ministry of Justice','Ministry Of Commerce & Industry','Ministry Of Economic Planning & Budget','Ministry Of Education','Ministry of Energy & Mineral Resources','Ministry of Establishments, Training and Pensions','Ministry of Finance','Ministry Of Home Affairs & Culture','Ministry of Housing','Ministry of Information and strategy','Ministry of Local Government & Chieftaincy Affairs','Ministry of Physical Planning & Urban Development','Ministry of Rural Development','Ministry of Science & Technology','Ministry of Special Duties','Ministry Of Transportation','Ministry of Waterfront Infrastructure Development', 'Ministry of Works and Structures','Ministry of Youth, Sports & Social Development','The Ministry of Women Affairs and Poverty Alleviation'];

    public profiletype?: string;
    public profiletypes? = ['BUSINESS','BUILDING']
    public revitemid? : number;
    public profile?: any;
    
}

export interface Revenue{
    id:number;
    name:string;
    mda: string;
    ipsacode: string;
    amount: number;
}
