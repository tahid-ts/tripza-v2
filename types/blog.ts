export interface BlogPost {
    id: string;
    title: string;
    location: string;
    rating: number;
    reviewCount: number;
    heroImage: string;
    tags: string[];
    sections: BlogSection[];

}

export interface BlogSection {
    title: string;
    content: string;
    image?: string;
    mapImage?: string;
}
export interface AttractionPost {
    id: string;
    title: string;
    heroImage?: string;
    sections: AtrractionSection[]
    
}
export interface AtrractionSection {
    title: string;
    content: string;
    image?: string;
    mapImage?: string;
}
