import { TestBed } from '@angular/core/testing';

import { GuessPokemonsService } from './guess-pokemons.service';

describe('GuessPokemonsService', () => {
  let service: GuessPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuessPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
