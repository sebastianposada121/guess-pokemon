import {GeneralAttributesModel} from "./generic.model";

export interface ResponseModel{
  count: number;
  next: number;
  previous: number;
  results: Array<GeneralAttributesModel>;
}
