export interface IBook {
    id: number,
    image?: string;
    title: string;
    author?: IAuthor;
    authorId: number;
    datePublished: string;
    description?: string;
    rating?: number;
}

export interface IAuthor {
    id: number,
    givenName: string;
    familyName: string;
    books?: IBook[];
}