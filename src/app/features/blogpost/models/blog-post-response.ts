export interface BlogPostResponse {
    id: string | null;
    title: string | null;
    shortDescription: string | null;
    content: string | null;
    featuredImageUrl: string | null;
    urlHandle: string | null;
    publishedDate: Date | null;
    author: string | null;
    isVisible: boolean | null;
    dateCreated: Date | null;
    dateDeleted: Date | null;
    dateUpdated: Date | null;
}
