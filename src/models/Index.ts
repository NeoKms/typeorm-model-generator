export type Index = {
    name: string;
    columns: string[];
    base: boolean;
    options: {
        unique?: boolean;
        fulltext?: boolean;
    };
    primary?: boolean;
};
