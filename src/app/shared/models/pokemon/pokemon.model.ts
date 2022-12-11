import {AbilityModel} from "./ability.model";
import {GeneralAttributesModel} from "./generic.model";
import {GameIndexModel} from "./game.model";
import {MoveModel} from "./move.model";
import {SpritesModel} from "./sprites.model";
import {StatModel} from "./stat.model";
import {TypeModel} from "./type.model";

export interface PokemonModel{
  abilities: Array<AbilityModel>;
  base_experience: number;
  forms: Array<GeneralAttributesModel>;
  game_indices: Array<GameIndexModel>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<MoveModel>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: GeneralAttributesModel;
  sprites: SpritesModel;
  stats: Array<StatModel>;
  types: Array<TypeModel>;
  weight: number;
}


