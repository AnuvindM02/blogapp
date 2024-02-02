export interface AddBlogRequest {
    title: string;
    shortDescription: string | null;
    content: string;
    featuredImageUrl: string | null;
    urlHandle: string | null;
    author: string;
    isVisible: boolean;
}