export interface SpritesModel {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: OtherSpritesModel;
}

export interface OtherSpritesModel{
  dream_world: GenericOtherModel;
  home: GenericOtherModel;
  'official-artwork': GenericOtherModel;
}


export interface GenericOtherModel{
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  versions: VersionModel;
}

export interface VersionModel {
  'generation-i': GenerationModel;
  'generation-ii': GenerationModel;
  'generation-iii': GenerationModel;
  'generation-iv': GenerationModel;
  'generation-v': GenerationModel;
  'generation-vi': GenerationModel;
  'generation-vii': GenerationModel;
  'generation-viii': GenerationModel;
}

export interface GenerationModel {
  'red-blue': GenerationImageModel;
  yellow: GenerationImageModel;
  crystal: GenerationImageModel;
  gold: GenerationImageModel;
  silver: GenerationImageModel;
  emerald: GenerationImageModel;
  'firered-leafgreen': GenerationImageModel;
  'ruby-sapphire': GenerationImageModel;
  'diamond-pearl': GenerationImageModel;
  'heartgold-soulsilver': GenerationImageModel;
  platinum: GenerationImageModel;
  'black-white': GenerationImageModel;
  'omegaruby-alphasapphire': GenerationImageModel;
  'x-y': GenerationImageModel;
  icons: GenerationImageModel;
  'ultra-sun-ultra-moon': GenerationImageModel;
}

export interface GenerationImageModel{
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}
