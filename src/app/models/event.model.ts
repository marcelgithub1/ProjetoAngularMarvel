import { imgExt } from "src/app/models/imgExtension.model";

export type Event = {    
    title: string;
    description: string;
    resourceURI: string;
    thumbnail: imgExt;
};