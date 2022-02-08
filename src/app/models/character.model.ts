import { imgExt } from "src/app/models/imgExtension.model";

export type Character = {    
    name: string;
    description: string;
    resourceURI: string;
    thumbnail: imgExt;
};