import { imgExt } from "src/app/models/imgExtension.model";

export type Comic = {    
    title: string;
    description: string;
    resourceURI: string;
    thumbnail: imgExt;
};