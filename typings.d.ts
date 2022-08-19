export interface Post {
    _id: string;
    title: string;
    description: string;
    _createdAt: string;
    author: {
        name: string;
        image: string;
    };
    mainImage: {
        asset: {
            url: string;
        }
    };
    slug: {
        current: string;
    };
    body: [object];
}

export interface Posts {
    posts: Post[];
}