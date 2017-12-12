export class ProfileData{
    public name?: string;
	public type?: string;
	public metric?: string;
    public frequency?: number;
	public value?: number;

    public types? = ['BUILDING', 'BUSINESS']
}

export class ProfilePropertyData{
    public name?: string;
	public value?: number;
}


export interface Profile{
    id:number;
    name: string;
    type: string;
    metric: string;
    frequency: number;
    value: number;
}