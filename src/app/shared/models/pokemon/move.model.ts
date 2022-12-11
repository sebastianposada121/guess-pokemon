import {GeneralAttributesModel} from "./generic.model";

export interface MoveModel{
  move: GeneralAttributesModel;
  version_group_detail: Array<VersionGroupDetail>
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: GeneralAttributesModel;
}
