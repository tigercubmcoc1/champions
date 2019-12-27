import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    CHAMPION.NOVA,
    // Tech
    // Mutant
    CHAMPION.WEAPONX,
    CHAMPION.SQUIRRELGIRL,
    // Skill
    // Science
    // Mystic
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
    CHAMPION.GRANDMASTER,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
