import { POS_TYPES } from "../constants/posTypes";
export const initialState = {
    playersById: [
      {
        id:'asjdlk1jlkjd1i1j',
        name: 'LeBron James',
        team: 'LOS ANGELES LAKERS',
        position: POS_TYPES.SF,
        starred: true,
      },
      {
        id:'lksajdkjdadshasdsjlk',
        name: 'Kevin Duran',
        team: 'GOLDEN STATE WARRIORS',
        position: POS_TYPES.SF,
        starred: false,
      },
      {
        id:'asi12e12klj313oiu12u31o2ij3kl',
        name: 'Anthony Davis',
        team: 'NEW ORLEANS PELICANS',
        position: POS_TYPES.PF,
        starred: false,
      },
      {
        id:'79h97hu8youij80uioiuo68ty',
        name: 'Stephen Curry',
        team: 'GOLDEN STATE WARRIORS',
        position: POS_TYPES.PG,
        starred: false,
      },
      {
        id:'812d8j182oud2186diweuhfw7832y',
        name: 'James Harden',
        team: 'HOUSTON ROCKETS',
        position: POS_TYPES.SG,
        starred: false,
      },
      {
        id:'s8dusdasdnj1829218712',
        name: 'Kawhi Leonard',
        team: 'TORONTO RAPTORS',
        position: POS_TYPES.SF,
        starred: false,
      },
    ],
  };
  