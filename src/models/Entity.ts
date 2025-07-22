import { Column } from "./Column";
import { Relation } from "./Relation";
import { Index } from "./Index";
import { RelationId } from "./RelationId";
import { Check } from "./Check";

export type Entity = {
    sqlName: string;
    tscName: string;

    database?: string;
    schema?: string;
    comment?: string;

    columns: Column[];
    relationIds: RelationId[];
    relations: Relation[];
    indices: Index[];
    checks: Check[];
    // TODO: move to sub-object or use handlebars helpers(?)
    fileName: string;
    fileImports: {
        entityName: string;
        fileName: string;
    }[];
    activeRecord?: true;
    generateConstructor?: true;
};
