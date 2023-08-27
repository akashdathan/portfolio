export interface DevToArticleMeta {
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    published_at: string;
    slug: string;
    path: string;
    url: string;
    comments_count: string;
    public_reactions_count: string;
    collection_id?: number;
    published_timestamp: string;
    positive_reactions_count: string;
    cover_image: string;
    social_image: string;
    tag_list: Array<string>;
}

const DEV_TO_USERNAME = "akash_dathan";
const ARTICLES_API = `https://dev.to/api/articles?username=${DEV_TO_USERNAME}`

export const fetchArticles = async (): Promise<DevToArticleMeta[]> => {
    try {
        const response = await fetch(ARTICLES_API);

        return response.json();
    } catch(error) {
        return []
    }
};